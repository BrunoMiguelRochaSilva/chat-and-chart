import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wallet, ArrowLeft } from "lucide-react";

const Privacy = () => {
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
            Política de Privacidade
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <section>
              <p className="text-sm text-muted-foreground mb-6">
                <strong>Última atualização:</strong> 31 de outubro de 2025
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Introdução</h2>
              <p>
                O TrackyFinance ("nós", "nosso" ou "Plataforma") está comprometido em proteger sua privacidade e seus dados pessoais. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você usa nosso serviço de gerenciamento financeiro.
              </p>
              <p className="mt-4">
                Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) e outras legislações aplicáveis de proteção de dados.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Informações que Coletamos</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.1 Informações Fornecidas por Você</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Informações de Cadastro:</strong> Nome, endereço de email, número de telefone</li>
                <li><strong>Dados Financeiros:</strong> Transações, despesas, receitas, categorias de gastos</li>
                <li><strong>Informações de Verificação:</strong> Códigos de verificação para autenticação via WhatsApp</li>
                <li><strong>Preferências:</strong> Configurações de conta, preferências de notificação</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.2 Informações Coletadas Automaticamente</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Dados de Uso:</strong> Como você interage com nosso serviço</li>
                <li><strong>Informações do Dispositivo:</strong> Tipo de dispositivo, sistema operacional, navegador</li>
                <li><strong>Dados de Localização:</strong> Endereço IP (para fins de segurança e detecção de fraude)</li>
                <li><strong>Cookies e Tecnologias Similares:</strong> Para melhorar a experiência do usuário</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2.3 Dados do WhatsApp</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Número de telefone vinculado ao WhatsApp</li>
                <li>Conteúdo das mensagens enviadas para registrar transações</li>
                <li>Timestamps das interações</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Como Usamos Suas Informações</h2>
              <p>
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Fornecer o Serviço:</strong> Processar e categorizar suas transações financeiras</li>
                <li><strong>Autenticação:</strong> Verificar sua identidade e proteger sua conta</li>
                <li><strong>Comunicação:</strong> Enviar notificações, atualizações e alertas de despesas</li>
                <li><strong>Análise de IA:</strong> Categorizar automaticamente transações usando inteligência artificial</li>
                <li><strong>Melhorias:</strong> Analisar como o serviço é usado para fazer melhorias</li>
                <li><strong>Segurança:</strong> Detectar, prevenir e responder a fraudes e atividades maliciosas</li>
                <li><strong>Conformidade Legal:</strong> Cumprir obrigações legais e regulatórias</li>
                <li><strong>Suporte ao Cliente:</strong> Responder a perguntas e resolver problemas</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Base Legal para Processamento (LGPD)</h2>
              <p>
                Processamos seus dados pessoais com base nas seguintes bases legais:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Consentimento:</strong> Quando você nos fornece permissão explícita</li>
                <li><strong>Execução de Contrato:</strong> Para fornecer os serviços que você solicitou</li>
                <li><strong>Obrigação Legal:</strong> Para cumprir requisitos legais e regulatórios</li>
                <li><strong>Legítimo Interesse:</strong> Para melhorar nossos serviços e garantir segurança</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Compartilhamento de Informações</h2>
              <p>
                Não vendemos suas informações pessoais. Podemos compartilhar seus dados apenas com:
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.1 Provedores de Serviços</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Infraestrutura de Nuvem:</strong> Para hospedar dados e aplicativo</li>
                <li><strong>WhatsApp Business API:</strong> Para funcionalidade de mensagens</li>
                <li><strong>Processadores de Pagamento:</strong> Para processar assinaturas (quando aplicável)</li>
                <li><strong>Provedores de Analytics:</strong> Para análise de uso (dados anonimizados)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.2 Requisitos Legais</h3>
              <p>
                Podemos divulgar informações se exigido por lei, intimação judicial ou ordem governamental.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5.3 Proteção de Direitos</h3>
              <p>
                Para proteger os direitos, propriedade ou segurança do TrackyFinance, nossos usuários ou o público.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Segurança dos Dados</h2>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Criptografia:</strong> Todos os dados são criptografados em trânsito (TLS/SSL) e em repouso</li>
                <li><strong>Controle de Acesso:</strong> Acesso restrito a dados pessoais apenas para funcionários autorizados</li>
                <li><strong>Autenticação:</strong> Verificação em duas etapas via WhatsApp</li>
                <li><strong>Monitoramento:</strong> Sistemas de detecção de intrusão e monitoramento contínuo</li>
                <li><strong>Backups:</strong> Backups regulares e seguros dos dados</li>
                <li><strong>Auditorias:</strong> Revisões de segurança periódicas</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Retenção de Dados</h2>
              <p>
                Mantemos suas informações pessoais apenas pelo tempo necessário para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fornecer nossos serviços</li>
                <li>Cumprir obrigações legais</li>
                <li>Resolver disputas</li>
                <li>Fazer cumprir nossos acordos</li>
              </ul>
              <p className="mt-4">
                Após o cancelamento da conta, seus dados serão excluídos ou anonimizados dentro de 90 dias, exceto quando a retenção for exigida por lei.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Seus Direitos (LGPD)</h2>
              <p>
                De acordo com a LGPD, você tem os seguintes direitos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Acesso:</strong> Solicitar cópias de seus dados pessoais</li>
                <li><strong>Correção:</strong> Corrigir dados imprecisos ou incompletos</li>
                <li><strong>Exclusão:</strong> Solicitar a exclusão de seus dados pessoais</li>
                <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
                <li><strong>Revogação de Consentimento:</strong> Retirar consentimento a qualquer momento</li>
                <li><strong>Oposição:</strong> Opor-se ao processamento de seus dados</li>
                <li><strong>Revisão de Decisões Automatizadas:</strong> Questionar decisões tomadas por IA</li>
                <li><strong>Informação:</strong> Obter informações sobre o uso de seus dados</li>
              </ul>
              <p className="mt-4">
                Para exercer esses direitos, acesse as configurações da conta ou entre em contato conosco em: privacy@trackyfinance.com.br
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. Cookies e Tecnologias de Rastreamento</h2>
              <p>
                Usamos cookies e tecnologias similares para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essenciais:</strong> Necessários para o funcionamento do serviço</li>
                <li><strong>Funcionais:</strong> Lembrar suas preferências</li>
                <li><strong>Analytics:</strong> Entender como o serviço é usado</li>
                <li><strong>Performance:</strong> Melhorar a velocidade e eficiência</li>
              </ul>
              <p className="mt-4">
                Você pode gerenciar preferências de cookies através das configurações do navegador.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">10. Transferências Internacionais</h2>
              <p>
                Seus dados são armazenados e processados no Brasil. Se houver necessidade de transferência internacional, garantiremos conformidade com a LGPD através de cláusulas contratuais padrão e medidas de segurança adequadas.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">11. Privacidade de Menores</h2>
              <p>
                Nosso serviço não é direcionado a menores de 18 anos. Não coletamos intencionalmente informações de menores. Se descobrirmos que coletamos dados de um menor, excluiremos essas informações imediatamente.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">12. Alterações nesta Política</h2>
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre mudanças significativas através de:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email cadastrado</li>
                <li>Notificação no aplicativo</li>
                <li>Publicação no site com data de atualização</li>
              </ul>
              <p className="mt-4">
                Recomendamos revisar esta política regularmente.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">13. Encarregado de Dados (DPO)</h2>
              <p>
                Nosso Encarregado de Proteção de Dados pode ser contatado em:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li><strong>Email:</strong> dpo@trackyfinance.com.br</li>
                <li><strong>Endereço:</strong> Av. Paulista, 1000, São Paulo, SP, Brasil</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">14. Reclamações</h2>
              <p>
                Se você acredita que seus direitos de privacidade foram violados, pode registrar uma reclamação com:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>TrackyFinance:</strong> privacy@trackyfinance.com.br</li>
                <li><strong>ANPD (Autoridade Nacional de Proteção de Dados):</strong> www.gov.br/anpd</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">15. Contato</h2>
              <p>
                Para dúvidas sobre esta Política de Privacidade, entre em contato:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li><strong>Email:</strong> privacy@trackyfinance.com.br</li>
                <li><strong>WhatsApp:</strong> +55 (11) 99999-9999</li>
                <li><strong>Endereço:</strong> Av. Paulista, 1000, São Paulo, SP, 01310-100, Brasil</li>
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

export default Privacy;
