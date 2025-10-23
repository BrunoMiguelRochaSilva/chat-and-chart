import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wallet, TrendingUp, PieChart, Smartphone, ArrowLeft } from "lucide-react";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const signupSchema = loginSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
});

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const validateForm = () => {
    setErrors({});
    try {
      if (isLogin) {
        loginSchema.parse({ email, password });
      } else {
        signupSchema.parse({ email, password, name });
      }
      return true;
    } catch (error: any) {
      const fieldErrors: { [key: string]: string } = {};
      error.errors.forEach((err: any) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    if (isLogin) {
      await signIn(email, password);
    } else {
      await signUp(email, password, name);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Back button - Fixed position */}
      <Button
        variant="ghost"
        className="fixed top-4 left-4 z-50 text-foreground hover:bg-background/80 backdrop-blur-sm"
        onClick={() => navigate("/")}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Button>

      {/* Left side - Hero section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary via-accent to-primary/80 p-12 flex-col justify-between text-white">
        <div>
          <div className="flex items-center gap-2 mb-12">
            <Wallet className="h-10 w-10" />
            <h1 className="text-3xl font-bold">TrackyFinance</h1>
          </div>
          
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Track Your Expenses<br />Automatically
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Simply send a WhatsApp message or photo, and watch your expenses appear instantly on your dashboard.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-white/20 p-3">
                <Smartphone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">WhatsApp Integration</h3>
                <p className="text-white/80">Send expenses via WhatsApp - automatic categorization included</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-white/20 p-3">
                <PieChart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Beautiful Analytics</h3>
                <p className="text-white/80">Visualize your spending with interactive charts and insights</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-white/20 p-3">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Smart Budgeting</h3>
                <p className="text-white/80">Set goals and track your progress effortlessly</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-white/70 text-sm">
          Trusted by thousands of users in Brazil 🇧🇷
        </p>
      </div>

      {/* Right side - Auth form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-background to-secondary/30">
        <Card className="w-full max-w-md border-0 shadow-2xl">
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-2 lg:hidden mb-4">
              <Wallet className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">TrackyFinance</span>
            </div>
            <CardTitle className="text-3xl font-bold">
              {isLogin ? "Welcome back" : "Create account"}
            </CardTitle>
            <CardDescription className="text-base">
              {isLogin 
                ? "Enter your credentials to access your dashboard" 
                : "Start tracking your expenses automatically"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={isLogin ? "login" : "signup"} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login" onClick={() => { setIsLogin(true); setErrors({}); }}>
                  Login
                </TabsTrigger>
                <TabsTrigger value="signup" onClick={() => { setIsLogin(false); setErrors({}); }}>
                  Sign Up
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={errors.password ? "border-destructive" : ""}
                    />
                    {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Sign In
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={errors.password ? "border-destructive" : ""}
                    />
                    {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Create Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
