import { cn } from '@/lib/utils';
import React from 'react';

export type SpacingProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg';
};

const Spacing = ({ size = 'md' }: SpacingProps) => {
  return (
    <div
      className={cn({
        'h-4 lg:h-8': size === 'xs',
        'h-8 lg:h-16': size === 'sm',
        'h-16 lg:h-24': size === 'md',
        'h-24 lg:h-32': size === 'lg',
      })}
    />
  );
};

export default Spacing;
