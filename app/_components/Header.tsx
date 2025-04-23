import { buttonVariants } from '@/components/ui/button';
import React from 'react';
import Section from './Section';
import GithubIcon from './icons/GithubIcon';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import LinkedinIcon from './icons/LinkedinIcon';

const Header = () => {
  return (
    <header className="sticky top-0 border border-red-500 ">
      <Section className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-blue-400">MY PORTFOLIO</h1>

        <ul className="flex items-center gap-2">
          <Link
            href="https://www.linkedin.com/in/vanelle-ivanna-tchouka-8b101a244/"
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'size-6 p-0 items-center justify-center'
            )}
          >
            <LinkedinIcon size={14} className="text-foreground" />
          </Link>
          <Link
            href="https://github.com/Tchouka-Vanelle/Tchouka-Vanelle/"
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'size-6 p-0 items-center justify-cente'
            )}
          >
            <GithubIcon size={14} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};

export default Header;
