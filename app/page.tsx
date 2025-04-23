import Header from './_components/Header';
import AboutMe from './_components/AboutMe';
import Spacing from './_components/Spacing';
import Status from './_components/Status';

export default function Home() {
  return (
    <main className="">
      <Header />
      <Spacing size="md" />
      <AboutMe />
      <Spacing size="md" />
      <Status />
    </main>
  );
}
