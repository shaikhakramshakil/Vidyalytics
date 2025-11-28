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
import { academicData } from '@/lib/data';
import { GraduationCap, Percent, Book } from 'lucide-react';

export default function AcademicsPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average GPA</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{academicData.averageGPA}</div>
            <p className="text-xs text-muted-foreground">
              Across all students
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Graduation Rate
            </CardTitle>
            <Percent className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {academicData.graduationRate}%
            </div>
            <p className="text-xs text-muted-foreground">
              Latest student cohort
            </p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Average Test Scores</CardTitle>
          <CardDescription>
            Average scores by subject across all grades.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead className="text-right">Average Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {academicData.testScores.map((score) => (
                <TableRow key={score.subject}>
                  <TableCell className="font-medium flex items-center gap-2">
                    <Book className="h-4 w-4 text-muted-foreground" />
                    {score.subject}
                  </TableCell>
                  <TableCell className="text-right">{score.average}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
}
