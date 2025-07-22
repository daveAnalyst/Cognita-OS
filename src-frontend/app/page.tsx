// src-frontend/app/page.tsx
import { HeroSection } from './components/HeroSection';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { UserStorySection } from './components/UserStorySection';
import { FeaturesSection } from './components/FeaturesSection';
import { VisionSection } from './components/VisionSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer'; // Import the final component

export default function HomePage() {
  return (
    // We wrap everything in a Fragment <> to avoid an extra div
    <>
      <div className="max-w-7xl mx-auto px-4">
        <HeroSection />
        <ProblemSolutionSection />
        <UserStorySection />
        <FeaturesSection />
        <VisionSection />
        <CtaSection />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Footer /> {/* Add the footer here */}
      </div>
    </>
  );
}