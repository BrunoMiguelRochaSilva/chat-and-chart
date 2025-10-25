import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Check } from "lucide-react";

interface WhatsAppVerificationProps {
  userId: string;
  currentPhone?: string;
  isVerified: boolean;
  onVerified: () => void;
}

export const WhatsAppVerification = ({ userId, currentPhone, isVerified, onVerified }: WhatsAppVerificationProps) => {
  const [phoneNumber, setPhoneNumber] = useState(currentPhone || "");
  const [verificationCode, setVerificationCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSendCode = async () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      toast({
        title: "Número inválido",
        description: "Digite um número de telefone válido com DDD",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      // Format phone number (remove spaces and special chars, add country code if needed)
      let formattedPhone = phoneNumber.replace(/\D/g, '');
      if (!formattedPhone.startsWith('55')) {
        formattedPhone = '55' + formattedPhone;
      }

      const { data, error } = await supabase.functions.invoke('verify-phone', {
        body: {
          action: 'send_code',
          phone_number: formattedPhone,
          user_id: userId,
        },
      });

      if (error) throw error;

      toast({
        title: "Código enviado!",
        description: "Verifique seu WhatsApp para o código de verificação",
      });
      setCodeSent(true);
    } catch (error) {
      console.error('Error sending code:', error);
      toast({
        title: "Erro ao enviar código",
        description: "Tente novamente mais tarde",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    if (verificationCode.length !== 6) {
      toast({
        title: "Código inválido",
        description: "Digite o código de 6 dígitos",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('verify-phone', {
        body: {
          action: 'verify_code',
          code: verificationCode,
          user_id: userId,
        },
      });

      if (error) throw error;

      if (data.success) {
        toast({
          title: "WhatsApp conectado! 🎉",
          description: "Agora você pode enviar seus gastos via WhatsApp",
        });
        onVerified();
      } else {
        toast({
          title: "Código incorreto",
          description: data.message || "Tente novamente",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error verifying code:', error);
      toast({
        title: "Erro ao verificar código",
        description: "Tente novamente mais tarde",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (isVerified) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Check className="h-5 w-5 text-success" />
            WhatsApp Conectado
          </CardTitle>
          <CardDescription>
            Número verificado: {currentPhone}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Envie mensagens para o nosso WhatsApp com seus gastos e eles aparecerão automaticamente no seu dashboard! 💬
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Smartphone className="h-5 w-5" />
          Conectar WhatsApp
        </CardTitle>
        <CardDescription>
          Verifique seu número para começar a usar o TrackyFinance via WhatsApp
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!codeSent ? (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Número de WhatsApp (com DDD)</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(11) 99999-9999"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                disabled={loading}
              />
            </div>
            <Button 
              onClick={handleSendCode} 
              disabled={loading}
              className="w-full"
            >
              {loading ? "Enviando..." : "Enviar código de verificação"}
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="code">Código de verificação</Label>
              <Input
                id="code"
                type="text"
                placeholder="000000"
                maxLength={6}
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, ''))}
                disabled={loading}
              />
              <p className="text-sm text-muted-foreground">
                Digite o código de 6 dígitos enviado para seu WhatsApp
              </p>
            </div>
            <div className="flex gap-2">
              <Button 
                onClick={handleVerifyCode} 
                disabled={loading}
                className="flex-1"
              >
                {loading ? "Verificando..." : "Verificar código"}
              </Button>
              <Button 
                onClick={() => setCodeSent(false)} 
                variant="outline"
                disabled={loading}
              >
                Voltar
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};