// TODO (Task 3): The WishlistProvider import is intentionally broken.
// Fix this import path and ensure the provider correctly wraps {children}.
import { WishlistProvider } from '@/context/WishlistContext';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dev Assessment App',
  description: 'Next.js 15 frontend technical assessment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-gray-50 text-gray-900 antialiased`}>
        <WishlistProvider>
          {children}
        </WishlistProvider>
      </body>
    </html>
  );
}
