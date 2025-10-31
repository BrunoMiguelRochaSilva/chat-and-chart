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

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const WHATSAPP_ACCESS_TOKEN = Deno.env.get('WHATSAPP_ACCESS_TOKEN');
    const WHATSAPP_PHONE_NUMBER_ID = Deno.env.get('WHATSAPP_PHONE_NUMBER_ID');

    const { action, phone_number, code, user_id } = await req.json();

    if (action === 'send_code') {
      // Generate 6-digit code
      const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
      const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

      // Update profile with verification code
      const { error: updateError } = await supabase
        .from('profiles')
        .update({
          phone_number,
          verification_code: verificationCode,
          verification_code_expires_at: expiresAt.toISOString(),
          phone_verified: false,
        })
        .eq('id', user_id);

      if (updateError) {
        throw updateError;
      }

      // Send WhatsApp message with code
      const message = `🔐 Seu código de verificação TrackyFinance é: *${verificationCode}*\n\nEste código expira em 10 minutos.`;
      
      console.log('Enviando mensagem WhatsApp para:', phone_number);
      console.log('Phone Number ID:', WHATSAPP_PHONE_NUMBER_ID);
      
      const whatsappResponse = await fetch(`https://graph.facebook.com/v17.0/${WHATSAPP_PHONE_NUMBER_ID}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: phone_number,
          type: 'text',
          text: { body: message },
        }),
      });

      const whatsappData = await whatsappResponse.json();
      console.log('Resposta WhatsApp API:', JSON.stringify(whatsappData));

      if (!whatsappResponse.ok) {
        console.error('Erro ao enviar WhatsApp:', whatsappData);
        throw new Error(`Falha ao enviar WhatsApp: ${JSON.stringify(whatsappData)}`);
      }

      return new Response(
        JSON.stringify({ success: true, message: 'Código enviado!' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (action === 'verify_code') {
      // Get profile with verification code
      const { data: profile, error: fetchError } = await supabase
        .from('profiles')
        .select('verification_code, verification_code_expires_at')
        .eq('id', user_id)
        .single();

      if (fetchError || !profile) {
        throw new Error('Usuário não encontrado');
      }

      // Check if code matches and is not expired
      const now = new Date();
      const expiresAt = new Date(profile.verification_code_expires_at);

      if (profile.verification_code !== code) {
        return new Response(
          JSON.stringify({ success: false, message: 'Código incorreto' }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
        );
      }

      if (now > expiresAt) {
        return new Response(
          JSON.stringify({ success: false, message: 'Código expirado' }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
        );
      }

      // Mark phone as verified
      const { error: verifyError } = await supabase
        .from('profiles')
        .update({
          phone_verified: true,
          verification_code: null,
          verification_code_expires_at: null,
          whatsapp_connected: true,
        })
        .eq('id', user_id);

      if (verifyError) {
        throw verifyError;
      }

      return new Response(
        JSON.stringify({ success: true, message: 'Telefone verificado com sucesso!' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ error: 'Ação inválida' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
    );

  } catch (error) {
    console.error('Error in verify-phone:', error);
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});