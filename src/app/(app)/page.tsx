
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowUp, 
  Users, 
  GraduationCap, 
  CalendarCheck,
  TrendingUp,
  Wallet,
  AlertCircle,
  UserCheck,
  Activity,
  BarChart3,
  Target,
  Award,
  IndianRupee,
} from 'lucide-react';
import {
  EnrollmentTrendChart,
  DemographicsChart,
  SubjectPerformanceChart,
  AttendanceGaugeChart,
  GradeDistributionChart,
  ExpenseBreakdownChart,
} from '@/components/dashboard-charts';
import { ModernStatsCard, MiniProgressCard, QuickStat } from '@/components/modern-stats-card';
import {
  totalStudents,
  enrollmentTrend,
  academicData,
  recentActivity,
  attendanceData,
  financialData,
  staffData,
} from '@/lib/data';

export default function DashboardPage() {
  const presentStaff = staffData.filter(s => s.attendance === 'Present').length;
  const staffAttendanceRate = (presentStaff / staffData.length) * 100;
  
  const budgetUtilization = (financialData.expenses / financialData.budget) * 100;
  const surplus = financialData.revenue - financialData.expenses;
  
  return (
    <main className="flex flex-1 flex-col gap-6 p-6 custom-scrollbar overflow-y-auto bg-muted/30">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Overview of your school's performance and metrics
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          {new Date().toLocaleDateString('en-IN', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ModernStatsCard
          title="Total Students"
          value={totalStudents.toLocaleString('en-IN')}
          subtitle="Active enrollments"
          trend={{
            value: enrollmentTrend,
            label: 'vs last year',
            isPositive: enrollmentTrend > 0,
          }}
          iconName="Users"
          iconColor="primary"
        />
        <ModernStatsCard
          title="Average GPA"
          value={academicData.averageGPA.toFixed(2)}
          subtitle="School-wide average"
          trend={{
            value: 2.1,
            label: 'Improvement',
            isPositive: true,
          }}
          iconName="BookOpen"
          iconColor="accent"
        />
        <ModernStatsCard
          title="Graduation Rate"
          value={`${academicData.graduationRate}%`}
          subtitle="Class of 2024"
          trend={{
            value: 1.5,
            label: 'Above average',
            isPositive: true,
          }}
          iconName="GraduationCap"
          iconColor="success"
        />
        <ModernStatsCard
          title="Attendance Rate"
          value={`${attendanceData.dailyRate}%`}
          subtitle="Today's attendance"
          trend={{
            value: 0.3,
            label: 'vs weekly avg',
            isPositive: true,
          }}
          iconName="CalendarCheck"
          iconColor="info"
        />
      </div>

      {/* Charts Row 1 */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 shadow-soft">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 text-base font-medium">
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  Enrollment Trends
                </CardTitle>
                <CardDescription>
                  Student enrollment over the last 5 years
                </CardDescription>
              </div>
              <Badge variant="secondary" className="font-normal">
                +{enrollmentTrend.toFixed(1)}% YoY
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <EnrollmentTrendChart />
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-base font-medium">
              <UserCheck className="h-4 w-4 text-muted-foreground" />
              Today's Attendance
            </CardTitle>
            <CardDescription>Real-time monitoring</CardDescription>
          </CardHeader>
          <CardContent>
            <AttendanceGaugeChart />
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="text-center p-3 rounded-md bg-muted/50">
                <p className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">{presentStaff}</p>
                <p className="text-xs text-muted-foreground">Staff Present</p>
              </div>
              <div className="text-center p-3 rounded-md bg-muted/50">
                <p className="text-xl font-semibold text-amber-600 dark:text-amber-400">{attendanceData.truancyPatterns.length}</p>
                <p className="text-xs text-muted-foreground">Flagged</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="shadow-soft">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-base font-medium">
              <Activity className="h-4 w-4 text-muted-foreground" />
              Demographics
            </CardTitle>
            <CardDescription>Regional distribution</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <DemographicsChart />
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-base font-medium">
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
              Grade Distribution
            </CardTitle>
            <CardDescription>Students per grade</CardDescription>
          </CardHeader>
          <CardContent>
            <GradeDistributionChart />
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-base font-medium">
              <Target className="h-4 w-4 text-muted-foreground" />
              Subject Performance
            </CardTitle>
            <CardDescription>Average scores</CardDescription>
          </CardHeader>
          <CardContent>
            <SubjectPerformanceChart />
          </CardContent>
        </Card>
      </div>

      {/* Financial & Activity */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="shadow-soft">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-base font-medium">
              <Wallet className="h-4 w-4 text-muted-foreground" />
              Financial Overview
            </CardTitle>
            <CardDescription>Budget & Expenditure</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-md bg-emerald-50 dark:bg-emerald-500/10">
                <div className="flex items-center gap-1.5 mb-1">
                  <IndianRupee className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Revenue</span>
                </div>
                <p className="text-lg font-semibold">₹{(financialData.revenue / 10000000).toFixed(1)}Cr</p>
              </div>
              <div className="p-3 rounded-md bg-violet-50 dark:bg-violet-500/10">
                <div className="flex items-center gap-1.5 mb-1">
                  <Wallet className="h-3.5 w-3.5 text-violet-600 dark:text-violet-400" />
                  <span className="text-xs text-violet-600 dark:text-violet-400 font-medium">Expenses</span>
                </div>
                <p className="text-lg font-semibold">₹{(financialData.expenses / 10000000).toFixed(1)}Cr</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <MiniProgressCard
                title="Budget Utilization"
                value={Math.round(budgetUtilization)}
                maxValue={100}
                suffix="%"
                color="primary"
              />
              <MiniProgressCard
                title="Collection Rate"
                value={92}
                maxValue={100}
                suffix="%"
                color="success"
              />
            </div>

            <div className="p-3 rounded-md bg-muted/50 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Net Surplus</span>
              <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                <ArrowUp className="h-3.5 w-3.5" />
                <span className="font-semibold">₹{(surplus / 10000000).toFixed(1)}Cr</span>
              </div>
            </div>
            
            <ExpenseBreakdownChart />
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 shadow-soft">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 text-base font-medium">
                  <Activity className="h-4 w-4 text-muted-foreground" />
                  Recent Activity
                </CardTitle>
                <CardDescription>Latest updates</CardDescription>
              </div>
              <Badge variant="outline" className="font-normal text-xs">
                Live
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div
                  key={activity.id}
                  className="flex items-center gap-3 p-3 rounded-md bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted">
                    {activity.action.includes('enrolled') && <Users className="h-4 w-4 text-muted-foreground" />}
                    {activity.action.includes('scholarship') && <Award className="h-4 w-4 text-muted-foreground" />}
                    {activity.action.includes('contact') && <UserCheck className="h-4 w-4 text-muted-foreground" />}
                    {activity.action.includes('attendance') && <CalendarCheck className="h-4 w-4 text-muted-foreground" />}
                    {activity.action.includes('tournament') && <GraduationCap className="h-4 w-4 text-muted-foreground" />}
                    {activity.action.includes('fees') && <IndianRupee className="h-4 w-4 text-muted-foreground" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{activity.student}</p>
                    <p className="text-xs text-muted-foreground truncate">{activity.action}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {activity.timestamp}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tables Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="shadow-soft">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 text-base font-medium">
                  <AlertCircle className="h-4 w-4 text-muted-foreground" />
                  Attendance Alerts
                </CardTitle>
                <CardDescription>Students requiring attention</CardDescription>
              </div>
              <Badge variant="secondary" className="font-normal">
                {attendanceData.truancyPatterns.length} flagged
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs">Student</TableHead>
                  <TableHead className="text-xs">Grade</TableHead>
                  <TableHead className="text-xs text-right">Days Missed</TableHead>
                  <TableHead className="text-xs text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {attendanceData.truancyPatterns.map((pattern, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-sm font-medium">{pattern.student}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">Grade {pattern.grade}</TableCell>
                    <TableCell className="text-sm text-right">
                      <span className={
                        pattern.daysMissed >= 6 ? 'text-rose-600 dark:text-rose-400 font-medium' :
                        pattern.daysMissed >= 4 ? 'text-amber-600 dark:text-amber-400 font-medium' :
                        'text-muted-foreground'
                      }>
                        {pattern.daysMissed} days
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge variant="secondary" className={`text-xs font-normal ${
                        pattern.daysMissed >= 6 ? 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400' :
                        pattern.daysMissed >= 4 ? 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400' :
                        ''
                      }`}>
                        {pattern.daysMissed >= 6 ? 'Critical' : pattern.daysMissed >= 4 ? 'Warning' : 'Monitor'}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 text-base font-medium">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  Staff Overview
                </CardTitle>
                <CardDescription>Today's status</CardDescription>
              </div>
              <Badge variant="secondary" className="font-normal">
                {staffAttendanceRate.toFixed(0)}% Present
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs">Name</TableHead>
                  <TableHead className="text-xs">Role</TableHead>
                  <TableHead className="text-xs">Workload</TableHead>
                  <TableHead className="text-xs text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {staffData.slice(0, 5).map((staff) => (
                  <TableRow key={staff.id}>
                    <TableCell className="text-sm font-medium">{staff.name}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{staff.role}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={`text-xs font-normal ${
                        staff.workload === 'High' ? 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400' :
                        staff.workload === 'Medium' ? 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400' :
                        'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400'
                      }`}>
                        {staff.workload}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge variant="secondary" className={`text-xs font-normal ${
                        staff.attendance === 'Present' 
                          ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400' 
                          : 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400'
                      }`}>
                        {staff.attendance}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <QuickStat 
          label="Active Courses" 
          value="24" 
          change={8}
          iconName="BookMarked"
        />
        <QuickStat 
          label="Pending Applications" 
          value="12" 
          change={-15}
          iconName="Users"
        />
        <QuickStat 
          label="Events This Month" 
          value="7" 
          change={40}
          iconName="CalendarCheck"
        />
        <QuickStat 
          label="Quick Actions" 
          value="3" 
          iconName="Zap"
        />
      </div>
    </main>
  );
}
