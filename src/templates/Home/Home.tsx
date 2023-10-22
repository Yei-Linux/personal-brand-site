'use client';

import { About, Hero, Services } from '@/modules/home';
import { Companies } from '@/modules/home/Companies';
import { Products } from '@/modules/home/Products';
import { Skills } from '@/modules/home/Skills/Skills';

export const Home = () => {
  return (
    <main className="flex flex-col items-center gap-24 min-h-screen p-4 home-container">
      <Hero />
      <About />
      <Companies />
      <Services />
      <Skills />
      <Products />
    </main>
  );
};
