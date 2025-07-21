// src-frontend/app/page.tsx
import { HeroSection } from './components/HeroSection';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { UserStorySection } from './components/UserStorySection';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <HeroSection />
      <ProblemSolutionSection />
      <UserStorySection />
      {/* We will add the other sections here */}
    </div>
  );
}