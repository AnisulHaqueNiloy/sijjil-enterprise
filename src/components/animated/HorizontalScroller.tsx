import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface HorizontalScrollerProps {
  children: React.ReactNode;
  className?: string;
  trackClassName?: string;
  heading?: React.ReactNode;
}

export const HorizontalScroller: React.FC<HorizontalScrollerProps> = ({
  children,
  className,
  trackClassName,
  heading,
}) => {
  return (
    <div className={cn('relative w-full py-16 lg:py-24', className)}>
      {heading && <div className="container mx-auto px-4 mb-10 sm:mb-12">{heading}</div>}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6',
            trackClassName
          )}
        >
          {React.Children.map(children, (child, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full flex"
            >
              {child}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
