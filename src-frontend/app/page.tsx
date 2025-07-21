// src-frontend/app/page.tsx
import { HeroSection } from './components/HeroSection';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { UserStorySection } from './components/UserStorySection';
import { FeaturesSection } from './components/FeaturesSection';
import { VisionSection } from './components/VisionSection'; // The new, combined section
// We will build these two last
// import { CtaSection } from './components/CtaSection';
// import { Footer } from './components/Footer';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <HeroSection />
      <ProblemSolutionSection />
      <UserStorySection />
      <FeaturesSection />
      <VisionSection />
      {/* 
        The final steps will be to add the CTA and Footer here.
      */}
    </div>
  );
}