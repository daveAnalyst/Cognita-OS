// src-frontend/app/page.tsx
import { HeroSection } from './components/HeroSection';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';

export default function HomePage() {
  return (
    // Add a container to give our sections breathing room
    <div className="max-w-7xl mx-auto px-4">
      <HeroSection />
      <ProblemSolutionSection />
      {/* We will add the other sections here */}
    </div>
  );
}