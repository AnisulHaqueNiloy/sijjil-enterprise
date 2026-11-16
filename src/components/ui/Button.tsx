import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  isMagnetic?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      to,
      href,
      icon,
      iconPosition = 'right',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-colors select-none focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-brand';

    const variants = {
      primary:
        'bg-primary text-white hover:bg-primary-light active:bg-primary-dark shadow-soft',
      gold:
        'bg-accent text-primary-dark font-semibold hover:bg-accent-hover active:bg-accent-700 shadow-soft',
      secondary:
        'bg-lightgrey text-primary hover:bg-lightgrey-alt active:bg-slate-200 border border-slate-border',
      outline:
        'bg-transparent text-primary border border-primary/30 hover:border-primary hover:bg-primary/5 active:bg-primary/10',
      ghost:
        'bg-transparent text-slate hover:text-primary hover:bg-lightgrey active:bg-slate-200',
    };

    const sizes = {
      sm: 'text-xs px-3.5 py-1.5 gap-1.5 font-medium',
      md: 'text-sm px-5 py-2.5 gap-2 font-medium',
      lg: 'text-base px-6 py-3 gap-2.5 font-semibold',
    };

    const content = (
      <>
        {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
      </>
    );

    const mergedClasses = cn(baseStyles, variants[variant], sizes[size], className);

    if (to) {
      return (
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
          <Link
            to={to}
            className={mergedClasses}
            tabIndex={disabled ? -1 : undefined}
            aria-disabled={disabled}
          >
            {content}
          </Link>
        </motion.div>
      );
    }

    if (href) {
      return (
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
          <a
            href={href}
            className={mergedClasses}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content}
          </a>
        </motion.div>
      );
    }

    return (
      <motion.button
        ref={ref}
        whileHover={disabled ? undefined : { scale: 1.02 }}
        whileTap={disabled ? undefined : { scale: 0.98 }}
        disabled={disabled}
        className={mergedClasses}
        {...(props as any)}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
