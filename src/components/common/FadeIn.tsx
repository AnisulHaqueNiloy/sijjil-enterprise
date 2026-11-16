import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  className,
  delay = 0,
  duration = 0.5,
  y = 25,
  direction = 'up',
}) => {
  const initialOffset = {
    up: { y, x: 0 },
    down: { y: -y, x: 0 },
    left: { x: y, y: 0 },
    right: { x: -y, y: 0 },
    none: { x: 0, y: 0 },
  }[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};
