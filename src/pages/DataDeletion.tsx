import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wallet, ArrowLeft, Trash2, Shield, Database, Clock } from "lucide-react";

const DataDeletion = () => {
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
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Trash2 className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Instruções de Exclusão de Dados
            </h1>
          </div>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <section>
              <p className="text-sm text-muted-foreground mb-6">
                <strong>Última atualização:</strong> 31 de outubro de 2025
              </p>

              <div className="bg-card border border-primary/10 rounded-2xl p-6 mb-8">
                <p className="text-foreground font-semibold mb-2">
                  Em conformidade com a LGPD (Lei Geral de Proteção de Dados)
                </p>
                <p>
                  O TrackyFinance respeita seu direito de excluir seus dados pessoais. Esta página fornece instruções claras sobre como solicitar a exclusão completa de suas informações da nossa plataforma.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Visão Geral</h2>
              <p>
                Você tem o direito de solicitar a exclusão de todos os seus dados pessoais armazenados no TrackyFinance. Este processo irá remover permanentemente:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Informações da conta (nome, email, telefone)</li>
                <li>Todos os registros de transações financeiras</li>
                <li>Histórico de despesas e receitas</li>
                <li>Configurações e preferências</li>
                <li>Dados de verificação do WhatsApp</li>
                <li>Logs de uso e interação</li>
              </ul>

              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 my-6">
                <p className="text-destructive font-semibold mb-2 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Atenção: Esta ação é irreversível
                </p>
                <p className="text-muted-foreground">
                  Uma vez excluídos, seus dados não podem ser recuperados. Certifique-se de fazer backup de quaisquer informações importantes antes de prosseguir.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Métodos de Exclusão de Dados</h2>

              <div className="space-y-6 mt-6">
                <div className="bg-card border border-primary/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Database className="h-6 w-6 text-primary" />
                    Método 1: Através do Aplicativo (Mais Rápido)
                  </h3>
                  <ol className="list-decimal pl-6 space-y-3">
                    <li>Faça login na sua conta do TrackyFinance</li>
                    <li>Acesse <strong>Configurações</strong> no menu principal</li>
                    <li>Role até a seção <strong>"Conta e Privacidade"</strong></li>
                    <li>Clique em <strong>"Excluir Minha Conta e Dados"</strong></li>
                    <li>Leia as informações sobre o que será excluído</li>
                    <li>Confirme sua senha para verificação de segurança</li>
                    <li>Digite <strong>"EXCLUIR"</strong> no campo de confirmação</li>
                    <li>Clique no botão <strong>"Confirmar Exclusão"</strong></li>
                  </ol>
                  <div className="mt-4 bg-primary/10 rounded-lg p-4">
                    <p className="text-sm flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <strong>Tempo de processamento:</strong> Imediato (dados excluídos instantaneamente)
                    </p>
                  </div>
                </div>

                <div className="bg-card border border-primary/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Método 2: Por Email
                  </h3>
                  <p className="mb-4">Se você não consegue acessar sua conta, envie um email para:</p>
                  <div className="bg-muted/50 rounded-lg p-4 mb-4">
                    <p className="font-mono text-primary">privacy@trackyfinance.com.br</p>
                  </div>
                  <p className="mb-3"><strong>Inclua as seguintes informações:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Assunto:</strong> "Solicitação de Exclusão de Dados - LGPD"</li>
                    <li><strong>Seu nome completo</strong> cadastrado na plataforma</li>
                    <li><strong>Email</strong> associado à conta</li>
                    <li><strong>Número de telefone</strong> vinculado ao WhatsApp</li>
                    <li><strong>Confirmação:</strong> "Solicito a exclusão completa de todos os meus dados pessoais"</li>
                  </ul>
                  <div className="mt-4 bg-primary/10 rounded-lg p-4">
                    <p className="text-sm flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <strong>Tempo de processamento:</strong> Até 15 dias úteis
                    </p>
                  </div>
                </div>

                <div className="bg-card border border-primary/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Método 3: Via WhatsApp
                  </h3>
                  <p className="mb-4">Envie uma mensagem para nosso suporte:</p>
                  <div className="bg-muted/50 rounded-lg p-4 mb-4">
                    <p className="font-mono text-primary">+55 (11) 99999-9999</p>
                  </div>
                  <p className="mb-3"><strong>Mensagem modelo:</strong></p>
                  <div className="bg-muted/50 rounded-lg p-4 mb-4 italic">
                    <p>"Olá, solicito a exclusão completa de todos os meus dados pessoais do TrackyFinance de acordo com a LGPD. Meu email cadastrado é: [seu-email@exemplo.com]"</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Nossa equipe irá verificar sua identidade e processar a solicitação.
                  </p>
                  <div className="mt-4 bg-primary/10 rounded-lg p-4">
                    <p className="text-sm flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <strong>Tempo de processamento:</strong> Até 15 dias úteis
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. O Que Acontece Após a Solicitação</h2>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Confirmação Imediata</h4>
                    <p>Você receberá uma confirmação por email de que sua solicitação foi recebida.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Verificação de Identidade</h4>
                    <p>Verificamos sua identidade para garantir que apenas você pode excluir seus dados.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Processamento da Exclusão</h4>
                    <p>Seus dados são removidos permanentemente de todos os nossos sistemas e backups.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Confirmação Final</h4>
                    <p>Você receberá uma confirmação final por email quando o processo for concluído.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Dados Retidos por Obrigação Legal</h2>
              <p>
                Em alguns casos, somos obrigados por lei a reter certas informações, como:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Registros fiscais:</strong> Mantidos por 5 anos conforme legislação tributária brasileira</li>
                <li><strong>Logs de segurança:</strong> Para fins de investigação legal (máximo 6 meses)</li>
                <li><strong>Dados anonimizados:</strong> Usados para análises estatísticas (sem identificação pessoal)</li>
              </ul>
              <p className="mt-4">
                Estes dados são mantidos de forma segura e serão excluídos assim que o período legal exigir.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Consequências da Exclusão de Dados</h2>
              <div className="bg-muted/50 border border-border rounded-xl p-6">
                <p className="mb-3"><strong>Ao excluir seus dados:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Você não poderá mais fazer login na plataforma</li>
                  <li>Todo o histórico financeiro será perdido</li>
                  <li>Relatórios e análises serão removidos</li>
                  <li>A integração com WhatsApp será desativada</li>
                  <li>Não será possível recuperar nenhuma informação</li>
                  <li>Se você quiser usar novamente, precisará criar uma nova conta do zero</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Alternativas à Exclusão Completa</h2>
              <p>
                Se você está preocupado com privacidade, mas não quer excluir tudo, considere:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Desativar temporariamente:</strong> Pausar sua conta sem excluir dados</li>
                <li><strong>Exportar dados:</strong> Baixar uma cópia de suas informações antes de excluir</li>
                <li><strong>Limpar histórico:</strong> Excluir apenas transações específicas</li>
                <li><strong>Ajustar configurações de privacidade:</strong> Limitar coleta de dados</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Suporte e Dúvidas</h2>
              <p>
                Se você tiver dúvidas sobre o processo de exclusão de dados ou seus direitos de privacidade, entre em contato:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-card border border-primary/10 rounded-xl p-4">
                  <p className="font-semibold text-foreground mb-2">Equipe de Privacidade</p>
                  <p className="text-sm">Email: privacy@trackyfinance.com.br</p>
                  <p className="text-sm">Resposta em até 48 horas</p>
                </div>

                <div className="bg-card border border-primary/10 rounded-xl p-4">
                  <p className="font-semibold text-foreground mb-2">Encarregado de Dados (DPO)</p>
                  <p className="text-sm">Email: dpo@trackyfinance.com.br</p>
                  <p className="text-sm">Resposta em até 72 horas</p>
                </div>

                <div className="bg-card border border-primary/10 rounded-xl p-4">
                  <p className="font-semibold text-foreground mb-2">Suporte via WhatsApp</p>
                  <p className="text-sm">Telefone: +55 (11) 99999-9999</p>
                  <p className="text-sm">Seg-Sex, 9h às 18h (horário de Brasília)</p>
                </div>

                <div className="bg-card border border-primary/10 rounded-xl p-4">
                  <p className="font-semibold text-foreground mb-2">ANPD - Autoridade Nacional</p>
                  <p className="text-sm">Site: www.gov.br/anpd</p>
                  <p className="text-sm">Para reclamações formais</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Direitos sob a LGPD</h2>
              <p>
                Além da exclusão de dados, você também tem direito a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Acessar todos os seus dados pessoais</li>
                <li>Corrigir informações incorretas</li>
                <li>Solicitar portabilidade dos dados</li>
                <li>Revogar consentimento de uso</li>
                <li>Obter informações sobre compartilhamento com terceiros</li>
                <li>Opor-se ao tratamento de dados</li>
              </ul>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mt-8">
                <p className="text-foreground font-semibold mb-2">
                  Compromisso com Transparência
                </p>
                <p>
                  O TrackyFinance está comprometido com a transparência total em relação ao tratamento de seus dados pessoais. Respeitamos todos os seus direitos garantidos pela LGPD e trabalhamos continuamente para garantir a segurança e privacidade de suas informações.
                </p>
              </div>
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

export default DataDeletion;
