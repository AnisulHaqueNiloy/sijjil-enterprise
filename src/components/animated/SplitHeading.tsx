import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface SplitHeadingProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
  delay?: number;
  duration?: number;
}

export const SplitHeading: React.FC<SplitHeadingProps> = ({
  children,
  as: Component = 'h2',
  className,
  delay = 0,
  duration = 0.55,
}) => {
  return (
    <Component className={cn('font-bold tracking-tight text-primary leading-tight', className)}>
      <motion.span
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="block"
      >
        {children}
      </motion.span>
    </Component>
  );
};
