import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

export interface SectionTitleProps {
  badge?: string;
  badgeVariant?: 'gold' | 'navy' | 'slate';
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  titleClassName?: string;
  inverted?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  badgeVariant = 'gold',
  title,
  description,
  align = 'center',
  className,
  titleClassName,
  inverted = false,
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn('flex flex-col mb-10 sm:mb-14 max-w-3xl', alignmentClasses[align], className)}
    >
      {badge && (
        <div className="mb-3">
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      <h2
        className={cn(
          'text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight',
          inverted ? 'text-white' : 'text-primary',
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-3.5 text-base sm:text-lg leading-relaxed',
            inverted ? 'text-slate-300' : 'text-slate-muted'
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};
