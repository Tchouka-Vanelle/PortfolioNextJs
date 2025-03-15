import Image from 'next/image';
import Header from './_components/Header';
import './globals.css';
import Hero from './_components/Hero';
import Spacing from './_components/Spacing';

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size="md" />
      <Hero />
    </main>
  );
}
