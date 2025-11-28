'use client';

import { cn } from '@/lib/utils';
import { 
  TrendingUp, 
  TrendingDown, 
  Minus,
  Users,
  BookOpen,
  GraduationCap,
  CalendarCheck,
  BookMarked,
  Zap,
} from 'lucide-react';

// Map of icon names to components - these are rendered inside the client component
const iconMap = {
  Users,
  BookOpen,
  GraduationCap,
  CalendarCheck,
  BookMarked,
  Zap,
} as const;

type IconName = keyof typeof iconMap;

interface ModernStatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: {
    value: number;
    label: string;
    isPositive?: boolean;
  };
  iconName: IconName;
  iconColor?: 'primary' | 'accent' | 'success' | 'warning' | 'info';
  sparklineData?: number[];
  className?: string;
}

const iconColors = {
  primary: 'text-primary bg-primary/10',
  accent: 'text-violet-600 bg-violet-50 dark:text-violet-400 dark:bg-violet-500/10',
  success: 'text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-500/10',
  warning: 'text-amber-600 bg-amber-50 dark:text-amber-400 dark:bg-amber-500/10',
  info: 'text-sky-600 bg-sky-50 dark:text-sky-400 dark:bg-sky-500/10',
};

export function ModernStatsCard({
  title,
  value,
  subtitle,
  trend,
  iconName,
  iconColor = 'primary',
  className,
}: ModernStatsCardProps) {
  const TrendIcon = trend?.isPositive ? TrendingUp : trend?.value === 0 ? Minus : TrendingDown;
  const Icon = iconMap[iconName];
  
  return (
    <div
      className={cn(
        'rounded-lg border bg-card p-5 shadow-soft hover-card',
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={cn(
          'flex items-center justify-center w-10 h-10 rounded-lg',
          iconColors[iconColor]
        )}>
          <Icon className="w-5 h-5" />
        </div>
        
        {trend && (
          <div className={cn(
            'flex items-center gap-1 text-xs font-medium',
            trend.isPositive 
              ? 'text-emerald-600 dark:text-emerald-400'
              : trend.value === 0 
                ? 'text-muted-foreground'
                : 'text-rose-600 dark:text-rose-400'
          )}>
            <TrendIcon className="w-3.5 h-3.5" />
            <span>{Math.abs(trend.value).toFixed(1)}%</span>
          </div>
        )}
      </div>
      
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-2xl font-semibold tracking-tight">{value}</p>
        {subtitle && (
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

interface MiniProgressCardProps {
  title: string;
  value: number;
  maxValue: number;
  color?: 'primary' | 'accent' | 'success' | 'warning' | 'info';
  suffix?: string;
}

export function MiniProgressCard({
  title,
  value,
  maxValue,
  color = 'primary',
  suffix = '',
}: MiniProgressCardProps) {
  const percentage = (value / maxValue) * 100;
  
  const colors = {
    primary: 'bg-primary',
    accent: 'bg-violet-500',
    success: 'bg-emerald-500',
    warning: 'bg-amber-500',
    info: 'bg-sky-500',
  };
  
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">{title}</span>
        <span className="font-medium">{value}{suffix}</span>
      </div>
      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
        <div
          className={cn(
            'h-full rounded-full transition-all duration-500',
            colors[color]
          )}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
    </div>
  );
}

interface QuickStatProps {
  label: string;
  value: string | number;
  change?: number;
  iconName?: IconName;
}

export function QuickStat({ label, value, change, iconName }: QuickStatProps) {
  const Icon = iconName ? iconMap[iconName] : null;
  
  return (
    <div className="flex items-center gap-3 p-4 rounded-lg border bg-card shadow-soft">
      {Icon && (
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary">
          <Icon className="w-4 h-4" />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className="text-xs text-muted-foreground truncate">{label}</p>
        <div className="flex items-baseline gap-2">
          <p className="text-lg font-semibold">{value}</p>
          {change !== undefined && (
            <span className={cn(
              'text-xs font-medium',
              change >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'
            )}>
              {change >= 0 ? '+' : ''}{change}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
