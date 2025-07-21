// src-frontend/app/page.tsx
import { HeroSection } from './components/HeroSection';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { UserStorySection } from './components/UserStorySection';
import { FeaturesSection } from './components/FeaturesSection'; // Import the new component

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <HeroSection />
      <ProblemSolutionSection />
      <UserStorySection />
      <FeaturesSection /> {/* Add the new section here */}
    </div>
  );
}