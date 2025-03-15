import React, { ComponentPropsWithoutRef } from 'react';
import Section from './Section';
import Spacing from './Spacing';
import { cn } from '@/lib/utils';
import ReactIcon from './icons/ReactIcon';
import RustIcon from './icons/RustIcon';
import Link from 'next/link';

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

const Hero = () => {
  return (
    <Section className="flex max-md:flex items-center p-4">
      <div className="flex-[2]">
        <h2 className="font-caption font-bold text-5xl text-primary">
          TCHOUKA Vanelle
        </h2>
        <Spacing size="sm" />
        <h3 className="text-3xl font-caption"> Applications developper </h3>
        <Spacing size="sm" />
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
      <div className="flex-1">
        <img
          src="../images/web_dev.jpg"
          className="w-full h-auto max-w-xs"
          alt="melvyn's picture"
        />
      </div>
    </Section>
  );
};

export default Hero;
