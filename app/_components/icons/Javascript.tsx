import React, { ComponentPropsWithoutRef } from 'react';

const Javascript: React.FC<
  { size?: number } & ComponentPropsWithoutRef<'img'>
> = ({ size = 50, ...props }) => {
  return (
    <img
      src="/images/javascript.svg"
      alt="Side Project 5"
      width={size}
      height={size}
      {...props}
    />
  );
};

export default Javascript;
