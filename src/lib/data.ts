
export const enrollmentData = [
  { year: '2020', total: 1200, demographics: { "Grade 9": 350, "Grade 10": 320, "Grade 11": 280, "Grade 12": 250 } },
  { year: '2021', total: 1250, demographics: { "Grade 9": 360, "Grade 10": 340, "Grade 11": 300, "Grade 12": 250 } },
  { year: '2022', total: 1300, demographics: { "Grade 9": 380, "Grade 10": 350, "Grade 11": 310, "Grade 12": 260 } },
  { year: '2023', total: 1320, demographics: { "Grade 9": 390, "Grade 10": 360, "Grade 11": 320, "Grade 12": 250 } },
  { year: '2024', total: 1800, demographics: { "Grade 9": 600, "Grade 10": 450, "Grade 11": 400, "Grade 12": 350 } },
];

export const demographicsData = [
  { name: 'North Indian', value: 550, fill: 'hsl(var(--chart-1))' },
  { name: 'South Indian', value: 450, fill: 'hsl(var(--chart-2))' },
  { name: 'East Indian', value: 250, fill: 'hsl(var(--chart-3))' },
  { name: 'West Indian', value: 150, fill: 'hsl(var(--chart-4))' },
  { name: 'Other', value: 50, fill: 'hsl(var(--chart-5))' },
];

export const attendanceData = {
  dailyRate: 97.2,
  truancyPatterns: [
    { student: 'Rohan Sharma', daysMissed: 5, grade: 10 },
    { student: 'Priya Patel', daysMissed: 8, grade: 9 },
    { student: 'Sameer Singh', daysMissed: 3, grade: 11 },
    { student: 'Isha Verma', daysMissed: 6, grade: 12 },
    { student: 'Karan Mehra', daysMissed: 4, grade: 9 },
  ],
};

export const academicData = {
  averageGPA: 3.4,
  graduationRate: 94,
  testScores: [
    { subject: 'Math', average: 88 },
    { subject: 'Science', average: 90 },
    { subject: 'English', average: 85 },
    { subject: 'Social Studies', average: 82 },
    { subject: 'Computer Science', average: 91 },
    { subject: 'Hindi', average: 78 },
  ]
}

export const financialData = {
  budget: 50000000,
  expenses: 45000000,
  revenue: 52000000,
  expenseBreakdown: [
    { category: 'Salaries', amount: 25000000 },
    { category: 'Infrastructure', amount: 8000000 },
    { category: 'Utilities', amount: 4000000 },
    { category: 'Supplies', amount: 3000000 },
    { category: 'Transportation', amount: 2000000 },
    { category: 'Events', amount: 1500000 },
    { category: 'Other', amount: 1500000 },
  ]
};

export const staffData = [
  { id: 1, name: 'Anjali Gupta', role: 'Principal', attendance: 'Present', workload: 'High' },
  { id: 2, name: 'Vikram Kumar', role: 'Math Teacher', attendance: 'Present', workload: 'Medium' },
  { id: 3, name: 'Sunita Reddy', role: 'Science Teacher', attendance: 'Absent', workload: 'Medium' },
  { id: 4, name: 'Rajesh Nair', role: 'English Teacher', attendance: 'Present', workload: 'High' },
  { id: 5, name: 'Priya Desai', role: 'Librarian', attendance: 'Present', workload: 'Low' },
  { id: 6, name: 'Amit Singh', role: 'Sports Coach', attendance: 'Present', workload: 'Medium' },
  { id: 7, name: 'Meera Iyer', role: 'Accountant', attendance: 'Absent', workload: 'High' },
  { id: 8, name: 'Sanjay Sharma', role: 'IT Administrator', attendance: 'Present', workload: 'Medium' },
]

export const recentActivity = [
  { id: 1, student: 'Aarav Mehta', action: 'enrolled in Grade 9', timestamp: '5m ago' },
  { id: 2, student: 'Saanvi Iyer', action: 'submitted scholarship application', timestamp: '1h ago' },
  { id: 3, student: 'Advik Joshi', action: 'updated contact information', timestamp: '3h ago' },
  { id: 4, student: 'Diya Rao', action: 'achieved perfect attendance for the month', timestamp: '1d ago'},
  { id: 5, student: 'Vihaan Kumar', action: 'won the inter-school chess tournament', timestamp: '2d ago'},
  { id: 6, student: 'Anika Reddy', action: 'paid annual fees', timestamp: '2d ago'},
]

export const totalStudents = enrollmentData[enrollmentData.length - 1].total;
export const enrollmentTrend = (enrollmentData[enrollmentData.length - 1].total / enrollmentData[enrollmentData.length - 2].total - 1) * 100;

export const resourceData = [
    { id: 1, title: 'Algebra I: Introduction to Variables', type: 'Lesson Plan', subject: 'Math', grade: '9', uploader: 'Vikram Kumar' },
    { id: 2, title: 'Cellular Respiration Worksheet', type: 'Worksheet', subject: 'Science', grade: '10', uploader: 'Sunita Reddy' },
    { id: 3, title: 'Shakespeare\'s Sonnets Analysis', type: 'Presentation', subject: 'English', grade: '11', uploader: 'Rajesh Nair' },
    { id: 4, title: 'Indian Independence Movement Quiz', type: 'Quiz', subject: 'Social Studies', grade: '10', uploader: 'Anjali Gupta' },
    { id: 5, title: 'Introduction to Python Programming', type: 'Lesson Plan', subject: 'Computer Science', grade: '12', uploader: 'Sanjay Sharma' },
    { id: 6, title: 'Trigonometry Practice Problems', type: 'Worksheet', subject: 'Math', grade: '11', uploader: 'Vikram Kumar' },
    { id: 7, title: 'Photosynthesis Lab Report Guide', type: 'Guide', subject: 'Science', grade: '10', uploader: 'Sunita Reddy' },
];
