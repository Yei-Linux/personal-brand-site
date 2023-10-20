import { About, Hero, Services, SocialNetworks } from '@/modules/home';

export const Home = () => {
  return (
    <main className="flex flex-col items-center gap-24 min-h-screen p-24">
      <Hero />
      <About />
      <Services />
    </main>
  );
};
