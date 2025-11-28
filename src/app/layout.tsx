import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Providers } from './Providers/Providers';
import Header from '@/Components/UI/Header';
import './globals.css';
import { siteConfig } from '@/config/site.config';
import { layoutConfig } from '@/config/layout.config';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          <main
            className={`flex flex-col items-center  w-full justify-start`}
            style={{
              height: `calc(100vh - ${layoutConfig.headerHeight}px - ${layoutConfig.footerHeight}px)`,
            }}
          >
            {children}
          </main>
          <footer
            className={`flex justify-center h-[${layoutConfig.footerHeight}px] items-center`}
          >
            <p>{siteConfig.description}</p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
