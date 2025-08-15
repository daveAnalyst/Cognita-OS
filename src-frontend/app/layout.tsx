// src-frontend/app/layout.tsx
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

// Import our new Navbar and Footer components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

// Our new, definitive, and legendary metadata
export const metadata: Metadata = {
  title: "Wise: Your Personal Thought Partner and Helper",
  description: "In a world drowning in data, Wise is the private AI partner that finds the rare insights. Your Data. Your Models. Your AI. Your Insights.",
  metadataBase: new URL('https://engel-bert.vercel.app'), 
  openGraph: {
    title: "Wise: Your Personal Thought Partner and Helper",
    description: "Wise is a private, sovereign thinking environment that helps you connect ideas and discover breakthroughs. The first step towards Personal Superintelligence.",
    url: 'https://engel-bert.vercel.app', 
    siteName: 'Wise',
    images: [{
      url: '/media/wise-og-banner-v2.png', 
      width: 1200,
      height: 630,
      alt: 'Wise: Your Personal Thought Partner and Helper',
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Wise: Your Personal Thought Partner and Helper",
    description: "The sovereign AI that finds the insights you're missing. Your data, your models, your AI. Anywhere.",
    creator: '@Omungala_dave', 
    images: ['/media/wise-twitter-banner-v2.png'], 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}