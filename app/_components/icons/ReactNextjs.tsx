import React, { ComponentPropsWithoutRef } from 'react';

const ReactNextjs: React.FC<
  { size?: number } & ComponentPropsWithoutRef<'img'>
> = ({ size = 50, ...props }) => {
  return (
    <img
      src="/images/nextjs.svg"
      alt="Side Project 1"
      width={size}
      height={size}
      {...props}
    />
  );
};

export default ReactNextjs;
