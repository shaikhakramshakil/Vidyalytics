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
import { staffData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

export default function DirectoryPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <Card>
        <CardHeader>
          <CardTitle>Staff Directory</CardTitle>
          <CardDescription>
            A list of all staff members.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Attendance</TableHead>
                <TableHead>Workload</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {staffData.map((staff) => (
                <TableRow key={staff.id}>
                  <TableCell className="font-medium">{staff.name}</TableCell>
                  <TableCell>{staff.role}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        staff.attendance === 'Present'
                          ? 'default'
                          : 'destructive'
                      }
                      className={
                        staff.attendance === 'Present'
                          ? 'bg-green-500/10 text-green-700 hover:bg-green-500/20'
                          : 'bg-red-500/10 text-red-700 hover:bg-red-500/20'
                      }
                    >
                      {staff.attendance}
                    </Badge>
                  </TableCell>
                  <TableCell>
                     <Badge
                      variant={
                        staff.workload === 'High' ? 'destructive' : staff.workload === 'Medium' ? 'secondary' : 'default'
                      }
                       className={
                        staff.workload === 'High'
                          ? 'bg-orange-500/10 text-orange-700 hover:bg-orange-500/20'
                          : staff.workload === 'Medium'
                          ? 'bg-blue-500/10 text-blue-700 hover:bg-blue-500/20'
                          : 'bg-gray-500/10 text-gray-700 hover:bg-gray-500/20'
                      }
                    >
                      {staff.workload}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
}
