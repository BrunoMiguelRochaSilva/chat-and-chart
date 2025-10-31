import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Smartphone, Check, LogOut } from "lucide-react";

const COUNTRIES = [
  { code: "+55", name: "Brasil", flag: "🇧🇷" },
  { code: "+1", name: "Estados Unidos", flag: "🇺🇸" },
  { code: "+351", name: "Portugal", flag: "🇵🇹" },
  { code: "+34", name: "Espanha", flag: "🇪🇸" },
  { code: "+33", name: "França", flag: "🇫🇷" },
  { code: "+44", name: "Reino Unido", flag: "🇬🇧" },
  { code: "+49", name: "Alemanha", flag: "🇩🇪" },
  { code: "+39", name: "Itália", flag: "🇮🇹" },
  { code: "+54", name: "Argentina", flag: "🇦🇷" },
  { code: "+52", name: "México", flag: "🇲🇽" },
];

interface WhatsAppVerificationProps {
  userId: string;
  currentPhone?: string;
  isVerified: boolean;
  onVerified: () => void;
}

export const WhatsAppVerification = ({ userId, currentPhone, isVerified, onVerified }: WhatsAppVerificationProps) => {
  const [countryCode, setCountryCode] = useState("+351");
  const [phoneNumber, setPhoneNumber] = useState(currentPhone || "");
  const [verificationCode, setVerificationCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const getPlaceholder = () => {
    switch (countryCode) {
      case "+351": return "912345678";
      case "+55": return "(11) 99999-9999";
      case "+1": return "(555) 123-4567";
      case "+34": return "612345678";
      default: return "123456789";
    }
  };

  const handleSendCode = async () => {
    // Remove non-digit characters for validation
    const digitsOnly = phoneNumber.replace(/\D/g, '');
    
    if (!phoneNumber || digitsOnly.length < 8) {
      toast({
        title: "Número inválido",
        description: "Digite um número de telefone válido",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      // Format phone number (remove spaces and special chars, add country code)
      let formattedPhone = phoneNumber.replace(/\D/g, '');
      formattedPhone = countryCode.replace('+', '') + formattedPhone;

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

  const handleDisconnect = async () => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          phone_verified: false,
          whatsapp_connected: false,
          phone_number: null,
          verification_code: null,
          verification_code_expires_at: null,
        })
        .eq('id', userId);

      if (error) throw error;

      toast({
        title: "WhatsApp desconectado",
        description: "Você pode conectar novamente a qualquer momento",
      });
      
      setPhoneNumber("");
      setVerificationCode("");
      setCodeSent(false);
      onVerified();
    } catch (error) {
      console.error('Error disconnecting:', error);
      toast({
        title: "Erro ao desconectar",
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
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Envie mensagens para o nosso WhatsApp com seus gastos e eles aparecerão automaticamente no seu dashboard! 💬
          </p>
          <Button 
            onClick={handleDisconnect}
            disabled={loading}
            variant="destructive"
            className="w-full"
          >
            <LogOut className="h-4 w-4 mr-2" />
            {loading ? "Desconectando..." : "Desconectar WhatsApp"}
          </Button>
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
              <Label htmlFor="phone">Número de WhatsApp</Label>
              <div className="flex gap-2">
                <Select value={countryCode} onValueChange={setCountryCode}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {COUNTRIES.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        {country.flag} {country.code}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={getPlaceholder()}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  disabled={loading}
                  className="flex-1"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Digite apenas o número (sem o código do país)
              </p>
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