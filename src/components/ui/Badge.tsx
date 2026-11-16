import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'gold' | 'navy' | 'slate' | 'outline' | 'success';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = 'gold',
  ...props
}) => {
  const variants = {
    gold: 'bg-accent/10 text-accent-700 border border-accent/25',
    navy: 'bg-primary/10 text-primary border border-primary/20',
    slate: 'bg-slate-100 text-slate-muted border border-slate-border',
    outline: 'bg-transparent text-slate-muted border border-slate-border',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
