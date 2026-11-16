import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full flex flex-col space-y-1.5">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-slate">
            {label} {props.required && <span className="text-accent font-bold">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full px-4 py-2.5 bg-white border border-slate-border rounded-brand text-sm text-slate placeholder:text-slate-subtle/70 transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent',
            error ? 'border-red-500 focus:ring-red-400' : 'hover:border-slate-400',
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-600 font-medium">{error}</p>}
        {!error && helperText && <p className="text-xs text-slate-subtle">{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
