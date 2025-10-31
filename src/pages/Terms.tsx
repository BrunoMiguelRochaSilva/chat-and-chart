import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wallet, ArrowLeft } from "lucide-react";

const Terms = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-foreground">
              <Wallet className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
              <span className="text-lg sm:text-xl font-bold">TrackyFinance</span>
            </div>
            <Button 
              onClick={() => navigate("/")}
              variant="outline"
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Termos de Serviço
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <section>
              <p className="text-sm text-muted-foreground mb-6">
                <strong>Última atualização:</strong> 31 de outubro de 2025
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e usar o TrackyFinance ("Serviço", "Plataforma" ou "Aplicativo"), você concorda em cumprir e estar vinculado a estes Termos de Serviço. Se você não concordar com estes termos, não use nosso serviço.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Descrição do Serviço</h2>
              <p>
                O TrackyFinance é uma plataforma de gerenciamento financeiro pessoal que permite aos usuários rastrear despesas e receitas através de mensagens do WhatsApp. O serviço utiliza inteligência artificial para categorizar automaticamente transações financeiras.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Elegibilidade</h2>
              <p>
                Para usar o TrackyFinance, você deve:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ter pelo menos 18 anos de idade</li>
                <li>Ter capacidade legal para celebrar contratos vinculativos</li>
                <li>Fornecer informações verdadeiras, precisas e completas durante o registro</li>
                <li>Manter a segurança de sua conta e senha</li>
                <li>Residir no Brasil</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Conta do Usuário</h2>
              <p>
                Ao criar uma conta, você concorda em:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fornecer informações precisas e atualizadas</li>
                <li>Manter a confidencialidade de suas credenciais de login</li>
                <li>Notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta</li>
                <li>Ser responsável por todas as atividades que ocorrem em sua conta</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Uso Aceitável</h2>
              <p>
                Você concorda em NÃO:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Usar o serviço para qualquer finalidade ilegal ou não autorizada</li>
                <li>Violar quaisquer leis em sua jurisdição</li>
                <li>Transmitir vírus, malware ou código malicioso</li>
                <li>Interferir ou interromper o serviço ou servidores</li>
                <li>Coletar ou armazenar dados pessoais de outros usuários</li>
                <li>Usar o serviço para assediar, abusar ou prejudicar outra pessoa</li>
                <li>Fazer engenharia reversa ou tentar extrair o código-fonte</li>
                <li>Usar bots ou automação sem autorização expressa</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Integração com WhatsApp</h2>
              <p>
                O TrackyFinance integra-se com o WhatsApp Business API para fornecer funcionalidade de rastreamento de despesas. Ao usar esta integração:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Você deve fornecer um número de telefone válido</li>
                <li>Você concorda em receber mensagens do nosso sistema</li>
                <li>As taxas de dados do WhatsApp podem ser aplicadas conforme seu plano de telefonia</li>
                <li>Você pode descadastrar-se a qualquer momento através das configurações</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Dados e Privacidade</h2>
              <p>
                Sua privacidade é importante para nós. O uso de seus dados pessoais é regido por nossa Política de Privacidade. Ao usar o TrackyFinance, você concorda com a coleta e uso de informações conforme descrito em nossa Política de Privacidade.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo, recursos e funcionalidades do TrackyFinance, incluindo, mas não se limitando a, texto, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e software, são de propriedade exclusiva do TrackyFinance e são protegidos por leis de direitos autorais brasileiras e internacionais.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. Pagamentos e Assinaturas</h2>
              <p>
                Se você optar por uma assinatura paga:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Os pagamentos são processados com segurança através de provedores terceirizados</li>
                <li>As assinaturas são renovadas automaticamente, a menos que canceladas</li>
                <li>Você pode cancelar a qualquer momento através das configurações da conta</li>
                <li>Reembolsos estão sujeitos à nossa política de reembolso</li>
                <li>Os preços podem mudar mediante aviso prévio de 30 dias</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">10. Cancelamento e Rescisão</h2>
              <p>
                Reservamo-nos o direito de suspender ou encerrar sua conta se:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Você violar estes Termos de Serviço</li>
                <li>Você usar o serviço de maneira fraudulenta ou ilegal</li>
                <li>Deixar de pagar taxas devidas</li>
                <li>A pedido de autoridades legais</li>
              </ul>
              <p className="mt-4">
                Você pode cancelar sua conta a qualquer momento através das configurações da conta ou entrando em contato com nosso suporte.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">11. Isenções de Responsabilidade</h2>
              <p>
                O TrackyFinance é fornecido "como está" e "conforme disponível". Não fazemos garantias de:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Disponibilidade ininterrupta ou livre de erros do serviço</li>
                <li>Precisão, confiabilidade ou integridade do conteúdo</li>
                <li>Que o serviço atenderá suas necessidades específicas</li>
                <li>Que defeitos serão corrigidos</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">12. Limitação de Responsabilidade</h2>
              <p>
                Na extensão máxima permitida por lei, o TrackyFinance não será responsável por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo, mas não se limitando a, perda de lucros, dados, uso ou outras perdas intangíveis.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">13. Conformidade com LGPD</h2>
              <p>
                O TrackyFinance está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018). Processamos dados pessoais de acordo com princípios de transparência, segurança e privacidade.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">14. Modificações nos Termos</h2>
              <p>
                Reservamo-nos o direito de modificar estes termos a qualquer momento. Notificaremos você sobre mudanças significativas através de:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email cadastrado</li>
                <li>Notificação no aplicativo</li>
                <li>Publicação no site</li>
              </ul>
              <p className="mt-4">
                O uso continuado do serviço após as alterações constitui aceitação dos novos termos.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">15. Lei Aplicável</h2>
              <p>
                Estes Termos de Serviço são regidos pelas leis da República Federativa do Brasil. Quaisquer disputas serão resolvidas nos tribunais competentes do Brasil.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">16. Contato</h2>
              <p>
                Se você tiver dúvidas sobre estes Termos de Serviço, entre em contato conosco:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li><strong>Email:</strong> legal@trackyfinance.com.br</li>
                <li><strong>WhatsApp:</strong> +55 (11) 99999-9999</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card py-8 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="text-sm">© 2025 TrackyFinance. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Terms;
