import React, { ComponentPropsWithoutRef } from 'react';

const CreateReactApp: React.FC<
  { size?: number } & ComponentPropsWithoutRef<'img'>
> = ({ size = 50, ...props }) => {
  return (
    <img
      src="/images/create-react-app.svg"
      alt="Side Project 2"
      width={size}
      height={size}
      {...props}
    />
  );
};

export default CreateReactApp;
