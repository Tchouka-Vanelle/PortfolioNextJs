import React, { ComponentPropsWithoutRef } from 'react';

const Php: React.FC<{ size?: number } & ComponentPropsWithoutRef<'img'>> = ({
  size = 50,
  ...props
}) => {
  return (
    <img
      src="/images/php.svg"
      alt="Side Project 4"
      width={size}
      height={size}
      {...props}
    />
  );
};

export default Php;
