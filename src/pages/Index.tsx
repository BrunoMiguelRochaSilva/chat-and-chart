import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wallet, Smartphone, PieChart, TrendingUp, Zap, Shield } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-accent to-primary/80">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
        
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col items-center text-center text-white">
            <div className="mb-8 flex items-center gap-3">
              <Wallet className="h-16 w-16" />
              <h1 className="text-5xl md:text-7xl font-bold">TrackyFinance</h1>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-4xl leading-tight">
              Track Your Expenses Automatically via WhatsApp
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              Simply send a message or photo, and watch your expenses appear instantly on your beautiful dashboard.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="secondary" 
                size="lg" 
                onClick={() => navigate("/auth")}
                className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-2xl"
              >
                Get Started Free
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white/10"
              >
                Watch Demo
              </Button>
            </div>

            <p className="mt-6 text-white/70">
              🇧🇷 Made for Brazil • No credit card required
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose TrackyFinance?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The smartest way to manage your finances in Brazil
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
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of Brazilians who are already tracking their expenses effortlessly.
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => navigate("/auth")}
            className="text-lg px-12 py-6 bg-white text-primary hover:bg-white/90 shadow-2xl"
          >
            Start Free Today
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
          <p>© 2025 TrackyFinance. All rights reserved.</p>
          <p className="mt-2">Made with ❤️ for Brazil 🇧🇷</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
