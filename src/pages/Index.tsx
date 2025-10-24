import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wallet, Smartphone, PieChart, TrendingUp, Zap, Shield, Camera, BarChart3, ChevronDown } from "lucide-react";
import heroPhone from "@/assets/hero-phone-illustration.png";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFA94D] via-[#FF8F3D] to-[#FF7F32] min-h-screen flex items-center">
        {/* Animated wave background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wave" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 50 Q 25 30, 50 50 T 100 50" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                <path d="M0 70 Q 25 50, 50 70 T 100 70" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave)"/>
          </svg>
        </div>

        {/* Logo - Top Left */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10 flex items-center gap-2 text-white">
          <Wallet className="h-8 w-8" />
          <span className="text-xl font-bold">TrackyFinance</span>
        </div>

        <div className="container relative mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-white space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
                  Track Your Expenses Automatically via WhatsApp
                </h1>
                
                <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                  Send a message or photo, and watch your expenses appear instantly on your dashboard.
                </p>
              </div>

              {/* Feature highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
                <div className="flex items-center gap-3 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Smartphone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">WhatsApp</p>
                    <p className="text-xs text-white/80">Integration</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Photo Receipt</p>
                    <p className="text-xs text-white/80">Scanning</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Smart</p>
                    <p className="text-xs text-white/80">Dashboard</p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Button 
                  size="lg" 
                  onClick={() => navigate("/auth")}
                  className="text-lg px-10 py-7 bg-white text-[#FFA94D] hover:bg-white/90 hover:text-[#FF7F32] shadow-2xl rounded-2xl font-semibold transition-all hover:scale-105"
                >
                  Get Started Free
                </Button>
                <Button 
                  size="lg"
                  className="text-lg px-10 py-7 bg-transparent border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm rounded-2xl font-semibold transition-all"
                >
                  Watch Demo
                </Button>
              </div>

              <p className="text-white/80 text-sm">
                🇧🇷 Made for Brazil • No credit card required
              </p>
            </div>

            {/* Right illustration */}
            <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative z-10 hover:scale-105 transition-transform duration-500">
                <img 
                  src={heroPhone} 
                  alt="TrackyFinance smartphone app illustration" 
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
              {/* Floating elements background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent blur-3xl -z-10 rounded-full" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/60" />
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
