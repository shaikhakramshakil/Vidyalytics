
'use client';
import { useState } from 'react';
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
import { resourceData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FileUp, ListFilter } from 'lucide-react';

export default function ResourcesPage() {
  const [filters, setFilters] = useState({
    type: [] as string[],
    subject: [] as string[],
  });

  const resourceTypes = [...new Set(resourceData.map((r) => r.type))];
  const subjects = [...new Set(resourceData.map((r) => r.subject))];

  const handleFilterChange = (filterType: 'type' | 'subject', value: string) => {
    setFilters((prev) => {
      const newValues = prev[filterType].includes(value)
        ? prev[filterType].filter((v) => v !== value)
        : [...prev[filterType], value];
      return { ...prev, [filterType]: newValues };
    });
  };

  const filteredData = resourceData.filter((item) => {
    const typeMatch = filters.type.length === 0 || filters.type.includes(item.type);
    const subjectMatch = filters.subject.length === 0 || filters.subject.includes(item.subject);
    return typeMatch && subjectMatch;
  });

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <Card>
        <CardHeader className="flex-row items-center justify-between gap-4">
          <div>
            <CardTitle>Resource Management</CardTitle>
            <CardDescription>
              Browse, filter, and manage educational materials.
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <ListFilter className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Filter
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by Type</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {resourceTypes.map((type) => (
                  <DropdownMenuCheckboxItem
                    key={type}
                    checked={filters.type.includes(type)}
                    onCheckedChange={() => handleFilterChange('type', type)}
                  >
                    {type}
                  </DropdownMenuCheckboxItem>
                ))}
                 <DropdownMenuLabel className="pt-2">Filter by Subject</DropdownMenuLabel>
                <DropdownMenuSeparator />
                 {subjects.map((subject) => (
                  <DropdownMenuCheckboxItem
                    key={subject}
                    checked={filters.subject.includes(subject)}
                    onCheckedChange={() => handleFilterChange('subject', subject)}
                  >
                    {subject}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button size="sm" className="h-8 gap-1">
              <FileUp className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Upload Resource
              </span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Uploaded By</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((resource) => (
                <TableRow key={resource.id}>
                  <TableCell className="font-medium">{resource.title}</TableCell>
                  <TableCell>
                     <Badge
                      variant={
                        resource.type === 'Lesson Plan' ? 'secondary'
                        : resource.type === 'Worksheet' ? 'default'
                        : 'outline'
                      }
                    >
                      {resource.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{resource.subject}</TableCell>
                  <TableCell>{resource.grade}</TableCell>
                  <TableCell>{resource.uploader}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
}
