import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.76.1";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const WHATSAPP_VERIFY_TOKEN = Deno.env.get('WHATSAPP_VERIFY_TOKEN');
  const WHATSAPP_ACCESS_TOKEN = Deno.env.get('WHATSAPP_ACCESS_TOKEN');
  const WHATSAPP_PHONE_NUMBER_ID = Deno.env.get('WHATSAPP_PHONE_NUMBER_ID');
  const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
  
  const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
  const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const supabase = createClient(supabaseUrl, supabaseKey);

  // Webhook verification (GET request from WhatsApp)
  if (req.method === 'GET') {
    const url = new URL(req.url);
    const mode = url.searchParams.get('hub.mode');
    const token = url.searchParams.get('hub.verify_token');
    const challenge = url.searchParams.get('hub.challenge');

    if (mode === 'subscribe' && token === WHATSAPP_VERIFY_TOKEN) {
      console.log('Webhook verified successfully');
      return new Response(challenge, { status: 200 });
    }
    return new Response('Verification failed', { status: 403 });
  }

  // Handle incoming messages (POST request)
  try {
    const body = await req.json();
    console.log('Received webhook:', JSON.stringify(body, null, 2));

    // Extract message data
    const entry = body.entry?.[0];
    const change = entry?.changes?.[0];
    const value = change?.value;
    const message = value?.messages?.[0];

    if (!message) {
      return new Response('No message', { status: 200 });
    }

    const from = message.from;
    const messageText = message.text?.body || '';
    const messageId = message.id;

    console.log(`Message from ${from}: ${messageText}`);

    // Find user by phone number
    const { data: profile } = await supabase
      .from('profiles')
      .select('id, name')
      .eq('phone_number', from)
      .eq('phone_verified', true)
      .single();

    if (!profile) {
      // Send registration message
      await sendWhatsAppMessage(from, 
        'Olá! Para usar o TrackyFinance, você precisa se registrar primeiro em nosso site. 🚀',
        WHATSAPP_PHONE_NUMBER_ID!,
        WHATSAPP_ACCESS_TOKEN!
      );
      return new Response('User not found', { status: 200 });
    }

    // Get user's categories
    const { data: categories } = await supabase
      .from('categories')
      .select('*')
      .eq('user_id', profile.id);

    // Use AI to parse the expense
    const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: `Você é um assistente que analisa mensagens de gastos e extrai informações estruturadas.
Categorias disponíveis: ${categories?.map(c => `${c.name} (${c.icon})`).join(', ')}

Analise a mensagem e retorne APENAS um JSON válido com:
{
  "amount": número (ex: 29.90),
  "description": "descrição breve",
  "category_name": "nome da categoria mais apropriada"
}

Se não conseguir identificar o valor, retorne null para amount.`
          },
          {
            role: 'user',
            content: messageText
          }
        ],
      }),
    });

    const aiData = await aiResponse.json();
    const aiMessage = aiData.choices?.[0]?.message?.content || '';
    
    console.log('AI response:', aiMessage);
    
    let expenseData;
    try {
      expenseData = JSON.parse(aiMessage);
    } catch (e) {
      console.error('Failed to parse AI response:', e);
      await sendWhatsAppMessage(from,
        'Desculpe, não consegui entender sua mensagem. Tente enviar algo como: "Gastei R$50 no almoço" 🤔',
        WHATSAPP_PHONE_NUMBER_ID!,
        WHATSAPP_ACCESS_TOKEN!
      );
      return new Response('Parse error', { status: 200 });
    }

    if (!expenseData.amount) {
      await sendWhatsAppMessage(from,
        'Não consegui identificar o valor do gasto. Tente algo como: "Gastei R$50 no almoço" 💰',
        WHATSAPP_PHONE_NUMBER_ID!,
        WHATSAPP_ACCESS_TOKEN!
      );
      return new Response('No amount', { status: 200 });
    }

    // Find matching category
    const category = categories?.find(c => 
      c.name.toLowerCase() === expenseData.category_name?.toLowerCase()
    ) || categories?.find(c => c.name === 'Other');

    // Save expense
    const { error: insertError } = await supabase
      .from('expenses')
      .insert({
        user_id: profile.id,
        amount: expenseData.amount,
        description: expenseData.description,
        category_id: category?.id,
        date: new Date().toISOString().split('T')[0],
        source: 'whatsapp',
        whatsapp_message_id: messageId,
      });

    if (insertError) {
      console.error('Error saving expense:', insertError);
      await sendWhatsAppMessage(from,
        'Ops! Houve um erro ao salvar seu gasto. Tente novamente mais tarde. 😕',
        WHATSAPP_PHONE_NUMBER_ID!,
        WHATSAPP_ACCESS_TOKEN!
      );
      return new Response('Insert error', { status: 200 });
    }

    // Send confirmation with natural language
    const confirmationMessage = generateConfirmation(
      expenseData.amount,
      expenseData.description,
      category?.name || 'Outros'
    );

    await sendWhatsAppMessage(from, confirmationMessage, WHATSAPP_PHONE_NUMBER_ID!, WHATSAPP_ACCESS_TOKEN!);

    return new Response('Success', { status: 200 });

  } catch (error) {
    console.error('Error processing webhook:', error);
    return new Response('Error', { status: 500 });
  }
});

async function sendWhatsAppMessage(to: string, message: string, phoneNumberId: string, accessToken: string) {
  const response = await fetch(`https://graph.facebook.com/v17.0/${phoneNumberId}/messages`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      to,
      type: 'text',
      text: { body: message },
    }),
  });

  if (!response.ok) {
    console.error('Error sending WhatsApp message:', await response.text());
  }
}

function generateConfirmation(amount: number, description: string, category: string): string {
  const responses = [
    `Anotado! R$ ${amount.toFixed(2)} em ${category} - ${description} 📝`,
    `Pronto! Registrei R$ ${amount.toFixed(2)} para ${description} na categoria ${category} ✅`,
    `Feito! ${description} por R$ ${amount.toFixed(2)} já está no seu dashboard 💰`,
    `Salvei! R$ ${amount.toFixed(2)} - ${description} (${category}) ✨`,
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}