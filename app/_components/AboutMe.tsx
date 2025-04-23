import React, { ComponentPropsWithoutRef } from 'react';
import Section from './Section';
import Spacing from './Spacing';
import { cn } from '@/lib/utils';
import ReactIcon from './icons/ReactIcon';
import RustIcon from './icons/RustIcon';
import Link from 'next/link';
import Image from 'next/image';

const Code = ({ className, ...props }: ComponentPropsWithoutRef<'span'>) => {
  return (
    <span
      className={cn(
        'font-mono bg-accent/30 border-accent px-1 py-0.5 rounded-sm',
        'hover:bg-accent/50 transition-colors',
        ' text-[var(--sidebar-primary)]',
        className
      )}
      {...props}
    />
  );
};

const AboutMe = () => {
  return (
    <Section className="flex max-md:flex items-center gap-4 mx-8 my-8 m-8 ml-4">
      <div className="flex-[3] w-full flex flex-col gap-2 mx-4">
        <h2 className="font-caption font-bold text-4xl text-primary mt-4">
          TCHOUKA Vanelle
        </h2>
        <Spacing size="xs" />
        <h3 className="text-3xl font-caption"> Applications developper </h3>
        <Spacing size="xs" />
        <p className="text-base">
          I am passionate about developing applications especially in modern web
          solutions. With experience in front-end and back-end development, I
          combine expertise in{' '}
          <Link href="https://react.dev/learn">
            <Code className="inline-flex items-center gap-1">
              React <ReactIcon size={12} className="inline" />
            </Code>
          </Link>
          ,{' '}
          <Link href="https://www.rust-lang.org/learn">
            <Code className="inline-flex items-center gap-1">
              rust <RustIcon size={12} className="inline" />
            </Code>
          </Link>
          , and various other technologies to design intuitive and responsive
          applications. My approach is based on writing clean and
          well-structured code, while focusing on a smooth user experience. I
          like to learn, discover new things, work as a team and create dynamic
          interfaces that combine aesthetics and functionality. In this
          portfolio, you will find a selection of my recent projects, as well as
          information on my skills and background. If you are looking to
          collaborate on interesting projects or learn more about my
          achievements, do not hesitate to contact me!
        </p>
      </div>
      <div className="flex-[1] max-md:m-auto ml-auto">
        <Image
          src="/images/web_dev.jpg"
          width={500}
          height={500}
          className="w-full h-auto max-w-xs max-md:w-56"
          alt="melvyn's picture"
        />
      </div>
    </Section>
  );
};

export default AboutMe;
