import React from 'react';
import { cn } from '../../lib/utils.ts';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'indigo' | 'copper' | 'outline';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'bg-surface-elevated text-text-secondary border-border-hairline',
      success: 'bg-status-success/10 text-status-success border-status-success/20',
      indigo: 'bg-accent-indigo/10 text-accent-indigo border-accent-indigo/20',
      copper: 'bg-accent-copper/10 text-accent-copper border-accent-copper/20',
      outline: 'bg-transparent text-text-muted border-border-hairline',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
export default Badge;
