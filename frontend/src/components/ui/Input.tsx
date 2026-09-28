import React from 'react';
import { cn } from '../../lib/utils.ts';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, type = 'text', ...props }, ref) => {
    return (
      <div className="relative w-full">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          type={type}
          className={cn(
            'w-full h-10 bg-surface-card border border-border-hairline rounded-lg text-[13px] text-text-primary placeholder:text-text-muted focus:outline-none focus:border-border-focus transition-colors',
            icon ? 'pl-9 pr-3' : 'px-3',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
