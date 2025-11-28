'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { attendanceData } from '@/lib/data';
import { UserX } from 'lucide-react';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Pie, PieChart } from 'recharts';

export default function AttendancePage() {
  const chartData = [
    {
      name: 'Present',
      value: attendanceData.dailyRate,
      fill: 'hsl(var(--primary))',
    },
    {
      name: 'Absent',
      value: 100 - attendanceData.dailyRate,
      fill: 'hsl(var(--muted))',
    },
  ];

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Daily Attendance Rate</CardTitle>
            <CardDescription>Across all classes today</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <ChartContainer
              config={{}}
              className="relative aspect-square h-full max-h-[250px] w-full"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius="70%"
                  outerRadius="100%"
                  strokeWidth={0}
                  startAngle={90}
                  endAngle={450}
                />
              </PieChart>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-4xl font-bold text-primary">
                  {attendanceData.dailyRate}%
                </p>
                <p className="text-sm text-muted-foreground">Present</p>
              </div>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader className="flex-row items-center gap-4 space-y-0">
            <div className="rounded-full bg-destructive/10 p-3">
              <UserX className="h-6 w-6 text-destructive" />
            </div>
            <div>
              <CardTitle>Truancy Watchlist</CardTitle>
              <CardDescription>
                Students with significant absence rates this month.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-4">
              {attendanceData.truancyPatterns.map((student) => (
                <li
                  key={student.student}
                  className="flex items-center justify-between rounded-md border bg-card p-3 shadow-sm"
                >
                  <div>
                    <p className="font-semibold">{student.student}</p>
                    <p className="text-sm text-muted-foreground">
                      Grade {student.grade}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-destructive">
                      {student.daysMissed}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      days missed
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
