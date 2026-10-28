import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import '@/styles/globals.scss';
import styles from './layout.module.scss';

// TODO: confirm site title and description.
export const metadata: Metadata = {
  title: 'Eden Ibiza',
  description: 'Eden Ibiza: a fictional brand used for a coding challenge.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className={styles.skipLink}>
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
