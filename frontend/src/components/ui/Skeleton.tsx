import React from 'react';
import { cn } from '../../lib/utils.ts';

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded bg-surface-elevated/70 border border-border-hairline', className)}
      {...props}
    />
  );
}

export default Skeleton;
