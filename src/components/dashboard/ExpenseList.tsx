import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Trash2, Edit } from "lucide-react";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";

interface Expense {
  id: string;
  amount: number;
  description: string;
  date: string;
  categories: {
    name: string;
    color: string;
    icon: string;
  } | null;
}

interface ExpenseListProps {
  limit?: number;
  onUpdate?: () => void;
}

export const ExpenseList = ({ limit, onUpdate }: ExpenseListProps) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExpenses();
  }, [limit]);

  const fetchExpenses = async () => {
    try {
      setLoading(true);

      let query = supabase
        .from("expenses")
        .select(`
          id,
          amount,
          description,
          date,
          categories (
            name,
            color,
            icon
          )
        `)
        .order("date", { ascending: false });

      if (limit) {
        query = query.limit(limit);
      }

      const { data, error } = await query;

      if (error) throw error;

      setExpenses(data || []);
    } catch (error) {
      console.error("Error fetching expenses:", error);
      toast.error("Failed to load expenses");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase.from("expenses").delete().eq("id", id);

      if (error) throw error;

      toast.success("Expense deleted successfully");
      fetchExpenses();
      if (onUpdate) onUpdate();
    } catch (error) {
      console.error("Error deleting expense:", error);
      toast.error("Failed to delete expense");
    }
  };

  if (loading) {
    return (
      <div className="space-y-3 p-4">
        {[...Array(limit || 5)].map((_, i) => (
          <Skeleton key={i} className="h-16 w-full" />
        ))}
      </div>
    );
  }

  if (expenses.length === 0) {
    return (
      <div className="p-8 text-center text-muted-foreground">
        No expenses yet. Start tracking your spending!
      </div>
    );
  }

  return (
    <div className="divide-y">
      {expenses.map((expense) => (
        <div
          key={expense.id}
          className="flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors"
        >
          <div className="flex items-center gap-3 flex-1">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-semibold"
              style={{ backgroundColor: expense.categories?.color || "#A8E6CF" }}
            >
              {expense.categories?.icon || "📦"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">{expense.description}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{expense.categories?.name || "Uncategorized"}</span>
                <span>•</span>
                <span>{format(new Date(expense.date), "MMM d, yyyy")}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-lg">R$ {Number(expense.amount).toFixed(2)}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => handleDelete(expense.id)}
            >
              <Trash2 className="h-4 w-4 text-destructive" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
