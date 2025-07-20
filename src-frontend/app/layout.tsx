// src-frontend/app/layout.tsx

import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

// Configure the primary fonts for our Design System using next/font.
// This is the most optimized and professional way to handle fonts in Next.js.
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // We assign this to a CSS variable for use in globals.css
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono', // The font for code blocks and a "hacker" feel.
});

// Define the metadata for SEO and social sharing.
// This has been completely updated to reflect the "Engelbert" brand and vision.
export const metadata: Metadata = {
  title: "Engelbert — The Thinking Operating System",
  description: "A sovereign, open-source OS for cognitive augmentation. An AI Lab Partner, not a Butler.",
  // IMPORTANT: You will update this URL with your live Vercel URL after deployment.
  metadataBase: new URL('https://engelbert-os.vercel.app'), 
  openGraph: {
    title: "Engelbert — The OS That Thinks With You",
    description: "A new language for interacting with ideas. A sovereign OS for cognitive augmentation.",
    // IMPORTANT: Update this URL after deployment.
    url: 'https://engelbert-os.vercel.app', 
    siteName: 'Engelbert OS',
    images: [
      {
        // This path points to /public/media/wise-banner.png
        url: '/media/wise-banner.png', 
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
    title: "Engelbert — The OS That Thinks With You",
    description: "A sovereign, open-source OS for cognitive augmentation.",
    creator: '@Omungala_dave', // Using your actual handle for credibility.
    images: ['/media/wise-banner.png'], 
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // We pass the font variables to the <html> tag.
    // This makes them available to our entire CSS design system.
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        {/*
          This is now clean and robust. We have removed the problematic <ClientLayout>.
          The <body> tag directly renders the content of our pages (like page.tsx),
          creating a simple and bug-free foundation.
        */}
        {children}
      </body>
    </html>
  );
}