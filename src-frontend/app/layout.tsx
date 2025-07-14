// app/layout.tsx
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google'; // Import fonts directly
import { ClientLayout } from './components/ClientLayout';
import './globals.css';

// Configure the fonts we want to use from our sci-fi theme
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // Assign to a CSS variable
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono', // Assign to a CSS variable
});

// Your metadata object is fantastic. No changes needed here.
export const metadata: Metadata = {
  title: "Wise by IntentMate Inc.",
  description: "A Lab Partner, not a Butler. A new thinking environment.",
  keywords: ["AI", "Agentic AI", "Cognitive Augmentation", "Local AI", "Privacy-First", "Socratic Partner"],
  authors: [{ name: "IntentMate Inc." }],
  creator: "IntentMate Inc.",
  publisher: "IntentMate Inc.",
  metadataBase: new URL('https://www.intentmate.com'),
  openGraph: {
    title: "Wise: A Lab Partner, not a Butler",
    description: "A new thinking environment designed to augment human intellect.",
    url: 'https://www.intentmate.com',
    siteName: 'Wise by IntentMate',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Wise by IntentMate Inc. - A Lab Partner, not a Butler',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Wise: A Lab Partner, not a Butler",
    description: "A new thinking environment designed to augment human intellect.",
    creator: '@YourTwitterHandle',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // We pass the font variables to the <html> tag
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <head>
        {/* Your head tags are great */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0a0a0b" />
      </head>
      
      {/* The body tag is now very clean */}
      <body className="antialiased">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}