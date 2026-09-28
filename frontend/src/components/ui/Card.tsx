import React from 'react';
import { cn } from '../../lib/utils.ts';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'bordered';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'bg-surface-card border border-border-hairline rounded-xl',
      elevated: 'bg-surface-elevated border border-border-hairline rounded-xl shadow-lg',
      bordered: 'bg-transparent border border-border-hairline rounded-xl',
    };

    return (
      <div
        ref={ref}
        className={cn(variants[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
export default Card;
