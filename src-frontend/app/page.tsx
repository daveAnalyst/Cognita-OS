// app/page.tsx
import { HeroSection } from './components/HeroSection';
import { ProductSection } from './components/ProductSection';
import { LensSection } from './components/LensSection';
import { DeepDiveSection } from './components/DeepDiveSection'; 

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProductSection />
      <LensSection />
      <DeepDiveSection />
      {/* We will build the rest of the sections below this line */}
    </main>
  );
}