import React, { ComponentPropsWithoutRef } from 'react';
import Image from 'next/image';

const Angular: React.FC<
  { size?: number } & ComponentPropsWithoutRef<'img'>
> = ({ size = 50, ...props }) => {
  return (
    <img
      src="/images/angular.png"
      alt="Side Project 5"
      width={size}
      height={size}
      {...props}
    />
  );
};

export default Angular;
