import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { Anek_Kannada } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const Anekannada = Anek_Kannada({
  subsets: ['kannada'],
  variable: '--font-caption',
});

export const metadata: Metadata = {
  title: 'TCHOUKA Vanelle. Application developer',
  description:
    'Passionate about programming, my key technologies are react and rust. I am looking for a permanent or cdd for September 2025.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${Anekannada.variable} ${geistSans.variable} ${geistMono.variable} antialiased font-sans tracking-tight h-full bg--background text--foreground`}
      >
        {children}
      </body>
    </html>
  );
}
