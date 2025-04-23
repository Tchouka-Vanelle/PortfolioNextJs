import React from 'react';
import { PropsWithChildren } from 'react';

const Section = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <section className={`w-full px-4 ${props.className ?? ''}`}>
      {props.children}
    </section>
  );
};

export default Section;
