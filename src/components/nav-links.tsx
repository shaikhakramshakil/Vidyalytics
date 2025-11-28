'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ClipboardCheck,
  GraduationCap,
  Landmark,
  LayoutDashboard,
  Users,
  Library,
} from 'lucide-react';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

const links = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/directory', label: 'Directory', icon: Users },
  { href: '/attendance', label: 'Attendance', icon: ClipboardCheck },
  { href: '/academics', label: 'Academics', icon: GraduationCap },
  { href: '/finance', label: 'Financials', icon: Landmark },
  { href: '/resources', label: 'Resources', icon: Library },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <SidebarMenu className="space-y-1">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <SidebarMenuItem key={link.href}>
            <SidebarMenuButton
              asChild
              size="default"
              isActive={isActive}
              tooltip={link.label}
              className={cn(
                'rounded-md transition-colors h-9',
                isActive 
                  ? 'bg-primary/10 text-primary font-medium' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              )}
            >
              <Link href={link.href} className="flex items-center gap-3 px-3">
                <link.icon className="h-4 w-4" />
                <span className="text-sm">{link.label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
}
