import React, { ComponentPropsWithoutRef } from 'react';

const Django: React.FC<{ size?: number } & ComponentPropsWithoutRef<'img'>> = ({
  size = 50,
  ...props
}) => {
  return (
    <img
      src="/images/django.svg"
      alt="Side Project 2"
      width={size}
      height={size}
      {...props}
    />
  );
};

export default Django;
