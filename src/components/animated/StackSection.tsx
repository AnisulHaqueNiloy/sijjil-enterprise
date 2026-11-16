import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface StackSectionProps {
  children: React.ReactNode;
  className?: string;
  topOffset?: number;
}

export const StackSection: React.FC<StackSectionProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('relative w-full space-y-6 sm:space-y-8', className)}>
      {React.Children.map(children, (child, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{
            duration: 0.5,
            delay: idx * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};
