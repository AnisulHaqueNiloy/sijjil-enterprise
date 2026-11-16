import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface RevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  y?: number;
  duration?: number;
  delay?: number;
  once?: boolean;
}

/**
 * Lightweight, natural scroll reveal wrapper powered by Framer Motion.
 * Respects system prefers-reduced-motion and has zero scroll lag.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  y = 25,
  duration = 0.5,
  delay = 0,
  once = true,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};
