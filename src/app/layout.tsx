import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Footer, Header } from '@/layouts';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jesus Alvan',
  description: 'My personal brand site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
