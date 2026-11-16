import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ZoomSectionProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const ZoomSection: React.FC<ZoomSectionProps> = ({
  children,
  className,
  as: Component = 'section',
}) => {
  return (
    <Component className={cn('relative w-full', className)}>
      <motion.div
        initial={{ opacity: 0.85, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full"
      >
        {children}
      </motion.div>
    </Component>
  );
};
