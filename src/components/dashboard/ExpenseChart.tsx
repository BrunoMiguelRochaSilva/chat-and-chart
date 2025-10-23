import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Skeleton } from "@/components/ui/skeleton";

interface CategoryTotal {
  name: string;
  value: number;
  color: string;
}

export const ExpenseChart = () => {
  const [data, setData] = useState<CategoryTotal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchChartData();
  }, []);

  const fetchChartData = async () => {
    try {
      setLoading(true);

      // Get current month expenses with categories
      const now = new Date();
      const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

      const { data: expenses, error } = await supabase
        .from("expenses")
        .select(`
          amount,
          categories (
            name,
            color
          )
        `)
        .gte("date", firstDayOfMonth.toISOString().split("T")[0]);

      if (error) throw error;

      // Aggregate by category
      const categoryMap = new Map<string, { total: number; color: string }>();

      expenses?.forEach((expense: any) => {
        const categoryName = expense.categories?.name || "Uncategorized";
        const categoryColor = expense.categories?.color || "#A8E6CF";
        const amount = Number(expense.amount);

        if (categoryMap.has(categoryName)) {
          categoryMap.get(categoryName)!.total += amount;
        } else {
          categoryMap.set(categoryName, { total: amount, color: categoryColor });
        }
      });

      const chartData = Array.from(categoryMap.entries()).map(([name, { total, color }]) => ({
        name,
        value: total,
        color,
      }));

      setData(chartData);
    } catch (error) {
      console.error("Error fetching chart data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Skeleton className="h-[300px] w-full" />;
  }

  if (data.length === 0) {
    return (
      <div className="h-[300px] flex items-center justify-center text-muted-foreground">
        No expenses yet. Add your first expense to see the breakdown!
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip formatter={(value: number) => `R$ ${value.toFixed(2)}`} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};
