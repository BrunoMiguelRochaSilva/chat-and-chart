import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wallet, Smartphone, PieChart, TrendingUp, Zap, Shield, Camera, BarChart3, ChevronDown } from "lucide-react";
import heroPhone from "@/assets/hero-phone-illustration.png";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 text-foreground">
              <Wallet className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">TrackyFinance</span>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Início</a>
              <a href="#features" className="text-foreground hover:text-primary transition-colors">Recursos</a>
              <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">Como Funciona</a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Planos</a>
            </div>
            
            {/* Login Button */}
            <Button 
              onClick={() => navigate("/auth")}
              className="bg-primary text-white hover:bg-accent"
            >
              Entrar
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-background overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-20 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container relative mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                  Gerencie suas finanças de forma{" "}
                  <span className="text-primary">simples</span> e{" "}
                  <span className="text-primary">inteligente</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                  Organize suas receitas, despesas e tenha o controle total sobre suas finanças pelo WhatsApp.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Button 
                  size="lg" 
                  onClick={() => navigate("/auth")}
                  className="text-lg px-10 py-7 bg-primary text-white hover:bg-accent shadow-lg rounded-2xl font-semibold transition-all hover:scale-105"
                >
                  Testar Agora
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => navigate("/auth")}
                  className="text-lg px-10 py-7 border-2 border-primary text-primary hover:bg-primary/5 rounded-2xl font-semibold transition-all"
                >
                  Ver Plano
                </Button>
              </div>

              <p className="text-muted-foreground text-sm">
                🇧🇷 Feito para o Brasil • Sem cartão de crédito
              </p>
            </div>

            {/* Right illustration */}
            <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative z-10 hover:scale-105 transition-transform duration-500">
                <img 
                  src={heroPhone} 
                  alt="TrackyFinance app illustration" 
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Demo Section */}
      <section id="how-it-works" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-3 uppercase tracking-wide text-sm">Teste o Assistente</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Veja como é fácil registrar transações pelo WhatsApp
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experimente como é simples enviar uma mensagem e ter sua despesa registrada automaticamente.
            </p>
          </div>

          {/* How it works steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold mx-auto">
                1
              </div>
              <h3 className="text-xl font-bold text-foreground">Envie uma mensagem</h3>
              <p className="text-muted-foreground">
                Basta enviar uma mensagem para o assistente detalhando sua transação.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold mx-auto">
                2
              </div>
              <h3 className="text-xl font-bold text-foreground">Processamento instantâneo</h3>
              <p className="text-muted-foreground">
                O sistema identifica automaticamente o tipo, valor e categoria.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold mx-auto">
                3
              </div>
              <h3 className="text-xl font-bold text-foreground">Registro automático</h3>
              <p className="text-muted-foreground">
                A transação aparece no seu dashboard e relatórios instantaneamente.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl font-semibold text-foreground mb-6">
              Esqueça as planilhas e aplicativos complicados!
            </p>
            <Button 
              size="lg"
              onClick={() => navigate("/auth")}
              className="bg-primary text-white hover:bg-accent rounded-2xl px-8 py-6"
            >
              Começar Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-3 uppercase tracking-wide text-sm">Dashboard Interativo</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Visualize suas finanças em um só lugar
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experimente como é fácil monitorar suas receitas e despesas com análises detalhadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <Smartphone className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">WhatsApp Integration</h3>
              <p className="text-muted-foreground">
                Send expenses via WhatsApp message or photo. Our AI automatically categorizes everything for you.
              </p>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <PieChart className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Beautiful Analytics</h3>
              <p className="text-muted-foreground">
                Visualize your spending with stunning charts and insights. See where your money goes at a glance.
              </p>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Smart Budgeting</h3>
              <p className="text-muted-foreground">
                Set monthly budgets and get real-time alerts. Stay on track with your financial goals.
              </p>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Add expenses in seconds. No tedious forms or complicated processes.
              </p>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Secure & Private</h3>
              <p className="text-muted-foreground">
                LGPD compliant. Your financial data is encrypted and protected with bank-level security.
              </p>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <Wallet className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Multi-Currency</h3>
              <p className="text-muted-foreground">
                Track expenses in BRL and other currencies. Perfect for international transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Pronto para ter controle total das suas finanças?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de brasileiros que já estão gerenciando suas despesas sem esforço.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate("/auth")}
            className="text-lg px-12 py-7 bg-primary text-white hover:bg-accent shadow-xl rounded-2xl"
          >
            Começar Gratuitamente
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Wallet className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold text-foreground">TrackyFinance</span>
          </div>
          <p>© 2025 TrackyFinance. Todos os direitos reservados.</p>
          <p className="mt-2">Feito com ❤️ para o Brasil 🇧🇷</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
