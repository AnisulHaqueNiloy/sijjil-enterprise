import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode;
  hoverLift?: boolean;
  borderVariant?: 'default' | 'gold' | 'none';
  className?: string;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      hoverLift = true,
      borderVariant = 'default',
      ...props
    },
    ref
  ) => {
    const borders = {
      default: 'border border-slate-border/80 hover:border-accent/80 hover:shadow-gold',
      gold: 'border border-accent/40 hover:border-accent hover:shadow-gold',
      none: 'border-0',
    };

    return (
      <motion.div
        ref={ref}
        whileHover={hoverLift ? { y: -4 } : undefined}
        transition={{ duration: 0.2 }}
        className={cn(
          'bg-white rounded-brand-lg p-6 shadow-soft transition-colors duration-200',
          borders[borderVariant],
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';
