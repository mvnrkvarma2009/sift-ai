import React from 'react';
import { cn } from '../../lib/utils.ts';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors cursor-pointer disabled:opacity-50 disabled:pointer-events-none';
    
    const variants = {
      primary: 'bg-accent-indigo text-on-primary-container hover:bg-accent-indigo/90 rounded-full',
      secondary: 'bg-surface-elevated text-text-primary hover:bg-surface-card border border-border-hairline rounded-full',
      outline: 'border border-border-hairline bg-transparent text-text-primary hover:bg-surface-card hover:border-outline-variant rounded-full',
      ghost: 'bg-transparent text-text-secondary hover:text-text-primary rounded-lg',
    };

    const sizes = {
      sm: 'text-[12px] px-3 py-1.5',
      md: 'text-[14px] px-[18px] py-[8px]',
      lg: 'text-[15px] px-6 py-3',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
