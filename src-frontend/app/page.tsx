// src-frontend/app/page.tsx
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { PillarsSection } from './components/PillarsSection';
import { PrinciplesSection } from './components/PrinciplesSection';
import { FinalCtaSection } from './components/FinalCtaSection';
// Note: The Footer component is now managed by the RootLayout, so we don't need to import it here.

export default function HomePage() {
  return (
    // The main content area. The Navbar and Footer will wrap this in layout.tsx.
    // The responsive padding and max-width are applied here for consistency.
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <HeroSection />
      <StorySection />
      <PillarsSection />
      <PrinciplesSection />
      <FinalCtaSection />
    </main>
  );
}