import React, { ComponentPropsWithoutRef } from 'react';

const Java: React.FC<{ size?: number } & ComponentPropsWithoutRef<'img'>> = ({
  size = 50,
  ...props
}) => {
  return (
    <img
      src="/images/java.svg"
      alt="Side Project 3"
      width={size}
      height={size}
      {...props}
    />
  );
};
export default Java;
