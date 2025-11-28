import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { financialData } from '@/lib/data';
import { TrendingUp, TrendingDown, DollarSign, Banknote, Landmark } from 'lucide-react';
import { BudgetChart } from '@/components/dashboard-charts';

export default function FinancePage() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(amount);
  };
  
  const netResult = financialData.revenue - financialData.expenses;

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <div className="p-2 bg-primary/10 rounded-md">
                <TrendingUp className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(financialData.revenue)}
            </div>
            <p className="text-xs text-muted-foreground">
              This fiscal year
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Expenses
            </CardTitle>
            <div className="p-2 bg-primary/10 rounded-md">
                <TrendingDown className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(financialData.expenses)}
            </div>
            <p className="text-xs text-muted-foreground">
              This fiscal year
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Annual Budget</CardTitle>
            <div className="p-2 bg-primary/10 rounded-md">
             <Landmark className="h-4 w-4 text-primary" />
             </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(financialData.budget)}
            </div>
             <p className="text-xs text-muted-foreground">
              Total allocated budget
            </p>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Operating Result</CardTitle>
            <div className={`p-2 rounded-md ${netResult >= 0 ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
             <DollarSign className={`h-4 w-4 ${netResult >= 0 ? 'text-green-600' : 'text-destructive'}`} />
             </div>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${netResult >= 0 ? 'text-green-600' : 'text-destructive'}`}>
              {formatCurrency(netResult)}
            </div>
             <p className="text-xs text-muted-foreground">
              (Revenue - Expenses)
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
        <Card>
            <CardHeader>
                <CardTitle>Budget vs. Expenses</CardTitle>
                <CardDescription>A visual breakdown of the annual budget and current expenditures.</CardDescription>
            </CardHeader>
            <CardContent>
                <BudgetChart />
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Expense Breakdown</CardTitle>
                <CardDescription>Top spending categories for this fiscal year.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                {financialData.expenseBreakdown.map(item => (
                    <div key={item.category} className="flex items-center">
                        <div>
                            <p className="font-medium">{item.category}</p>
                            <p className="text-sm text-muted-foreground">{formatCurrency(item.amount)}</p>
                        </div>
                        <div className="ml-auto text-right">
                           <p className="font-semibold">{((item.amount / financialData.expenses) * 100).toFixed(1)}%</p>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
      </div>
    </main>
  );
}
