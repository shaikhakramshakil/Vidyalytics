'use client';

import {
  Bar,
  BarChart,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import {
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
  ChartContainer,
} from '@/components/ui/chart';
import { enrollmentData, demographicsData, financialData, academicData, attendanceData } from '@/lib/data';

const chartConfig: ChartConfig = {
  total: {
    label: 'Total Students',
    color: 'hsl(var(--primary))',
  },
};

// Clean, professional color palette
const COLORS = {
  primary: 'hsl(220, 98%, 44%)',       // Blue
  secondary: 'hsl(262, 83%, 58%)',     // Purple/Accent
  success: 'hsl(160, 84%, 39%)',       // Teal/Green
  warning: 'hsl(38, 92%, 50%)',        // Amber
  error: 'hsl(0, 84%, 60%)',           // Red
  info: 'hsl(199, 89%, 48%)',          // Cyan
  muted: 'hsl(215, 16%, 47%)',         // Slate
};

// Professional gradient definitions
const gradientDefs = (
  <defs>
    <linearGradient id="colorPrimary" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor={COLORS.primary} stopOpacity={0.2}/>
      <stop offset="95%" stopColor={COLORS.primary} stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorSuccess" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor={COLORS.success} stopOpacity={0.2}/>
      <stop offset="95%" stopColor={COLORS.success} stopOpacity={0}/>
    </linearGradient>
  </defs>
);

export function EnrollmentTrendChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] sm:min-h-[280px] w-full">
      <AreaChart
        accessibilityLayer
        data={enrollmentData}
        margin={{
          top: 20,
          right: 20,
          left: 0,
          bottom: 10,
        }}
      >
        {gradientDefs}
        <CartesianGrid 
          strokeDasharray="3 3" 
          vertical={false} 
          stroke="hsl(var(--border))"
          opacity={0.4}
        />
        <XAxis
          dataKey="year"
          tickLine={false}
          axisLine={false}
          tickMargin={12}
          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
          tickFormatter={(value) => `${value}`}
        />
        <ChartTooltip 
          cursor={{ stroke: 'hsl(var(--primary))', strokeWidth: 1, strokeDasharray: '4 4' }}
          content={<ChartTooltipContent 
            className="border shadow-md bg-popover"
          />} 
        />
        <Area
          type="monotone"
          dataKey="total"
          stroke={COLORS.primary}
          strokeWidth={2}
          fill="url(#colorPrimary)"
          dot={{ r: 4, fill: COLORS.primary, strokeWidth: 2, stroke: 'white' }}
          activeDot={{ r: 5, fill: COLORS.primary, strokeWidth: 2, stroke: 'white' }}
        />
      </AreaChart>
    </ChartContainer>
  );
}

// Professional pie chart colors
const enhancedDemographicsData = demographicsData.map((item, index) => ({
  ...item,
  fill: [
    COLORS.primary,
    COLORS.secondary,
    COLORS.success,
    COLORS.warning,
    COLORS.info,
  ][index] || item.fill,
}));

const demographicsChartConfig: ChartConfig = {
  students: {
    label: 'Students',
  },
  ...enhancedDemographicsData.reduce((acc, item) => {
    acc[item.name] = { label: item.name, color: item.fill };
    return acc;
  }, {} as ChartConfig),
};


export function DemographicsChart() {
  return (
    <ChartContainer
      config={demographicsChartConfig}
      className="mx-auto aspect-square h-full w-full max-h-[280px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent 
              hideLabel 
              className="border shadow-md bg-popover"
            />}
          />
          <Pie
            data={enhancedDemographicsData}
            dataKey="value"
            nameKey="name"
            innerRadius="55%"
            outerRadius="80%"
            strokeWidth={2}
            stroke="hsl(var(--background))"
            paddingAngle={2}
          >
            {enhancedDemographicsData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.fill}
              />
            ))}
          </Pie>
          <Legend
            verticalAlign="bottom"
            content={({ payload }) => {
              return (
                <ul className="flex flex-wrap gap-x-4 gap-y-2 justify-center text-xs text-muted-foreground mt-4">
                  {payload?.map((entry, index) => (
                    <li key={`item-${index}`} className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
                      {entry.value}
                    </li>
                  ))}
                </ul>
              )
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

// Budget overview with clean horizontal bars
const budgetChartData = [
  { name: 'Revenue', value: financialData.revenue, fill: COLORS.success },
  { name: 'Budget', value: financialData.budget, fill: COLORS.primary },
  { name: 'Expenses', value: financialData.expenses, fill: COLORS.secondary },
];

const budgetChartConfig: ChartConfig = {
  value: {
    label: 'Amount (INR)',
  },
  Revenue: {
    label: 'Revenue',
    color: COLORS.success,
  },
  Budget: {
    label: 'Budget',
    color: COLORS.primary,
  },
  Expenses: {
    label: 'Expenses',
    color: COLORS.secondary,
  },
};


export function BudgetChart() {
    return (
        <ChartContainer config={budgetChartConfig} className="min-h-[140px] sm:min-h-[180px] w-full">
            <BarChart accessibilityLayer data={budgetChartData} layout="vertical" margin={{ left: 20, right: 20 }}>
                <YAxis
                    dataKey="name"
                    type="category"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                />
                <XAxis type="number" hide />
                <ChartTooltip
                    cursor={{ fill: 'hsl(var(--muted) / 0.1)' }}
                    content={<ChartTooltipContent
                        className="border shadow-md bg-popover"
                        formatter={(value) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(value as number)}
                        hideLabel
                    />}
                />
                <Bar dataKey="value" radius={[4, 4, 4, 4]} barSize={28}>
                    {budgetChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                </Bar>
            </BarChart>
        </ChartContainer>
    );
}

// Subject Performance Chart
const subjectPerformanceData = academicData.testScores.map((score, index) => ({
  ...score,
  fill: [
    COLORS.primary,
    COLORS.secondary,
    COLORS.success,
    COLORS.warning,
    COLORS.info,
    COLORS.muted,
  ][index],
}));

export function SubjectPerformanceChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[180px] sm:min-h-[220px] w-full">
      <BarChart
        data={subjectPerformanceData}
        margin={{ top: 20, right: 20, left: 0, bottom: 10 }}
      >
        <CartesianGrid 
          strokeDasharray="3 3" 
          vertical={false} 
          stroke="hsl(var(--border))"
          opacity={0.4}
        />
        <XAxis
          dataKey="subject"
          tickLine={false}
          axisLine={false}
          tickMargin={12}
          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
          interval={0}
          angle={-20}
          textAnchor="end"
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
          domain={[0, 100]}
        />
        <ChartTooltip 
          cursor={{ fill: 'hsl(var(--muted) / 0.1)' }}
          content={<ChartTooltipContent 
            className="border shadow-md bg-popover"
            formatter={(value) => [`${value}%`, 'Score']}
          />} 
        />
        <Bar dataKey="average" radius={[4, 4, 0, 0]} barSize={40}>
          {subjectPerformanceData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}

// Attendance Gauge Chart - Clean SVG Semicircle
export function AttendanceGaugeChart() {
  const attendanceValue = attendanceData.dailyRate;
  const percentage = attendanceValue / 100;
  
  // SVG arc calculations - responsive size
  const size = 160; // Slightly smaller for better mobile fit
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const cx = size / 2;
  const cy = size / 2;
  
  // Calculate arc path for semicircle (180 degrees)
  const circumference = Math.PI * radius;
  const filledLength = circumference * percentage;
  const emptyLength = circumference - filledLength;
  
  return (
    <div className="flex flex-col items-center justify-center py-2 sm:py-4">
      <div className="relative scale-75 sm:scale-100 origin-center">
        <svg width={size} height={size / 2 + 20} viewBox={`0 0 ${size} ${size / 2 + 20}`}>
          {/* Background arc */}
          <path
            d={`M ${strokeWidth / 2} ${cy} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${cy}`}
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            opacity={0.2}
          />
          {/* Filled arc */}
          <path
            d={`M ${strokeWidth / 2} ${cy} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${cy}`}
            fill="none"
            stroke={COLORS.success}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={`${filledLength} ${emptyLength}`}
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-4 sm:pt-6">
          <span className="text-2xl sm:text-3xl font-semibold">{attendanceValue}%</span>
          <span className="text-[10px] sm:text-xs text-muted-foreground">Daily Rate</span>
        </div>
      </div>
    </div>
  );
}

// Grade Distribution Chart
const gradeDistributionData = [
  { grade: 'Grade 9', students: 600, fill: COLORS.primary },
  { grade: 'Grade 10', students: 450, fill: COLORS.secondary },
  { grade: 'Grade 11', students: 400, fill: COLORS.success },
  { grade: 'Grade 12', students: 350, fill: COLORS.warning },
];

export function GradeDistributionChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[160px] sm:min-h-[200px] w-full">
      <BarChart
        data={gradeDistributionData}
        margin={{ top: 20, right: 20, left: 0, bottom: 10 }}
      >
        <CartesianGrid 
          strokeDasharray="3 3" 
          vertical={false} 
          stroke="hsl(var(--border))"
          opacity={0.4}
        />
        <XAxis
          dataKey="grade"
          tickLine={false}
          axisLine={false}
          tickMargin={12}
          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
        />
        <ChartTooltip 
          cursor={{ fill: 'hsl(var(--muted) / 0.1)' }}
          content={<ChartTooltipContent 
            className="border shadow-md bg-popover"
          />} 
        />
        <Bar dataKey="students" radius={[4, 4, 0, 0]} barSize={50}>
          {gradeDistributionData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}

// Expense Breakdown Donut
const expenseBreakdownData = financialData.expenseBreakdown.map((item, index) => ({
  ...item,
  fill: [
    COLORS.primary,
    COLORS.secondary,
    COLORS.success,
    COLORS.warning,
    COLORS.error,
    COLORS.info,
    COLORS.muted,
  ][index],
}));

export function ExpenseBreakdownChart() {
  const total = expenseBreakdownData.reduce((sum, item) => sum + item.amount, 0);
  
  return (
    <div className="relative">
      <ChartContainer config={chartConfig} className="mx-auto aspect-square h-[250px]">
        <PieChart>
          <ChartTooltip
            content={<ChartTooltipContent 
              className="border shadow-md bg-popover"
              formatter={(value) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', notation: 'compact' }).format(value as number)}
            />}
          />
          <Pie
            data={expenseBreakdownData}
            dataKey="amount"
            nameKey="category"
            innerRadius="50%"
            outerRadius="75%"
            paddingAngle={2}
            strokeWidth={0}
          >
            {expenseBreakdownData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
        </PieChart>
      </ChartContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="text-xs text-muted-foreground">Total</span>
        <span className="text-lg font-semibold">₹{(total / 10000000).toFixed(1)}Cr</span>
      </div>
    </div>
  );
}