import React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, className, id, rows = 4, ...props }, ref) => {
    const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full flex flex-col space-y-1.5">
        {label && (
          <label htmlFor={textareaId} className="text-sm font-medium text-slate">
            {label} {props.required && <span className="text-accent font-bold">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={cn(
            'w-full px-4 py-2.5 bg-white border border-slate-border rounded-brand text-sm text-slate placeholder:text-slate-subtle/70 transition-colors resize-y',
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

Textarea.displayName = 'Textarea';
