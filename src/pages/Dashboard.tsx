import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { DollarSign, TrendingUp, TrendingDown, Calendar, Plus, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ExpenseChart } from "@/components/dashboard/ExpenseChart";
import { ExpenseList } from "@/components/dashboard/ExpenseList";
import { AddExpenseDialog } from "@/components/dashboard/AddExpenseDialog";

interface DashboardStats {
  monthlyTotal: number;
  yearlyTotal: number;
  budget: number | null;
  expenseCount: number;
}

const Dashboard = () => {
  const { user, signOut, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      fetchDashboardData();
    }
  }, [user]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      // Get current month expenses
      const now = new Date();
      const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const firstDayOfYear = new Date(now.getFullYear(), 0, 1);

      const [monthlyResult, yearlyResult, profileResult] = await Promise.all([
        supabase
          .from("expenses")
          .select("amount")
          .gte("date", firstDayOfMonth.toISOString().split("T")[0]),
        supabase
          .from("expenses")
          .select("amount")
          .gte("date", firstDayOfYear.toISOString().split("T")[0]),
        supabase
          .from("profiles")
          .select("monthly_budget")
          .eq("id", user?.id)
          .single(),
      ]);

      const monthlyTotal = monthlyResult.data?.reduce((sum, exp) => sum + Number(exp.amount), 0) || 0;
      const yearlyTotal = yearlyResult.data?.reduce((sum, exp) => sum + Number(exp.amount), 0) || 0;

      setStats({
        monthlyTotal,
        yearlyTotal,
        budget: profileResult.data?.monthly_budget || null,
        expenseCount: monthlyResult.data?.length || 0,
      });
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (authLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const budgetRemaining = stats?.budget ? stats.budget - stats.monthlyTotal : null;
  const budgetPercentage = stats?.budget ? (stats.monthlyTotal / stats.budget) * 100 : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
              TF
            </div>
            <div>
              <h1 className="text-xl font-bold">TrackyFinance</h1>
              <p className="text-sm text-muted-foreground">Welcome back, {user.email?.split("@")[0]}!</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => navigate("/settings")}>
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={signOut}>
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">This Month</CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              {loading ? (
                <Skeleton className="h-8 w-32" />
              ) : (
                <>
                  <div className="text-3xl font-bold">R$ {stats?.monthlyTotal.toFixed(2)}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stats?.expenseCount} transactions
                  </p>
                </>
              )}
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">This Year</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              {loading ? (
                <Skeleton className="h-8 w-32" />
              ) : (
                <>
                  <div className="text-3xl font-bold">R$ {stats?.yearlyTotal.toFixed(2)}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Total annual expenses
                  </p>
                </>
              )}
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Budget</CardTitle>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              {loading ? (
                <Skeleton className="h-8 w-32" />
              ) : (
                <>
                  {budgetRemaining !== null ? (
                    <>
                      <div className="text-3xl font-bold">
                        R$ {budgetRemaining.toFixed(2)}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className={`h-full transition-all duration-300 ${
                              (budgetPercentage || 0) > 100 ? 'bg-destructive' : 
                              (budgetPercentage || 0) > 80 ? 'bg-yellow-500' : 'bg-primary'
                            }`}
                            style={{ width: `${Math.min(budgetPercentage || 0, 100)}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground">{budgetPercentage?.toFixed(0)}%</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-2xl font-bold text-muted-foreground">Not Set</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Set a budget in settings
                      </p>
                    </>
                  )}
                </>
              )}
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-primary to-accent text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-white/90">Quick Action</CardTitle>
            </CardHeader>
            <CardContent>
              <AddExpenseDialog onExpenseAdded={fetchDashboardData}>
                <Button variant="secondary" size="lg" className="w-full bg-white/20 hover:bg-white/30 text-white border-0">
                  <Plus className="h-5 w-5 mr-2" />
                  Add Expense
                </Button>
              </AddExpenseDialog>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Recent Expenses */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Expense Breakdown</CardTitle>
                <CardDescription>Your spending by category this month</CardDescription>
              </CardHeader>
              <CardContent>
                <ExpenseChart />
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Your latest expenses</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <ExpenseList limit={5} onUpdate={fetchDashboardData} />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
