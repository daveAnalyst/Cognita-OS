// src-frontend/app/layout.tsx

import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

// Configure the primary fonts for our Design System using next/font.
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // We assign this to a CSS variable.
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono', // The font for our code blocks.
});

// Define the metadata for SEO and social sharing.
export const metadata: Metadata = {
  title: "EngelBERT — The Thinking Operating System",
  description: "A sovereign, open-source OS for cognitive augmentation. An AI Lab Partner, not a Butler.",
  // IMPORTANT: You will update this URL with your live Vercel URL after deployment.
  metadataBase: new URL('https://engelbert-os.vercel.app'), 
  openGraph: {
    title: "EngelBERT — The OS That Thinks With You",
    description: "A new language for interacting with ideas. A sovereign OS for cognitive augmentation.",
    url: 'https://engelbert-os.vercel.app', 
    siteName: 'EngelBERT',
    images: [
      {
        url: '/media/hero-banner.png', 
        width: 1280,
        height: 640,
        alt: 'The Engelbert OS and Wise Application Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "EngelBERT — The OS That Thinks With You",
    description: "A sovereign, open-source OS for cognitive augmentation.",
    creator: '@Omungala_dave', 
    images: ['/media/wise-banner.png'], 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // We pass the font variables to the <html> tag.
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}