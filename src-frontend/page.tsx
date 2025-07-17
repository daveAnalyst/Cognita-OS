// src-frontend/app/page.tsx

import Image from 'next/image';
import Link from 'next/link';
// Using lucide-react for professional, lightweight icons
import { ShieldCheck, Cpu, GitBranch, Bot, Lightbulb, Drama, Scale, BookOpen } from 'lucide-react';

// Use the '@/' alias for robust, non-brittle pathing.
// Ensure your 'tsconfig.json' has: "compilerOptions": { "paths": { "@/*": ["./*"] } }
import wiseBanner from '@./media/wise-banner.png';
import mockup from '@./media/wise soveraign edition.png';

// This is a Server Component, so it's fast and simple.
export default function VisionPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      
      {/* --- HERO SECTION --- */}
      <section className="text-center mb-20">
        <Image src={wiseBanner} alt="Wise Application Banner" priority className="mb-8 mx-auto" />
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight gradient-text">
          Engelbert
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-text-secondary">
          A new Way of interacting with ideas.
        </p>
        <p className="mt-4 text-lg text-text-tertiary max-w-2xl mx-auto">
          A local-first, sovereign OS designed to be a Socratic partner that debates, reasons, and explores with you.
        </p>
      </section>

      {/* --- PROBLEM & VISION --- */}
      <section className="space-y-12">
        <div className="p-6 rounded-lg bg-glass-dark border border-border-secondary text-center">
          <h2 className="text-2xl font-bold text-accent-secondary mb-3">The AI Butler is a Dead End.</h2>
          <p className="text-text-secondary max-w-3xl mx-auto text-lg">
            Copilot automates tasks. <strong>EngelBERT augments thought.</strong>
          </p>
        </div>
      </section>

      {/* --- USER STORY --- */}
      <section className="my-20">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Wise: A Day in the Life</h2>
        <div className="p-8 rounded-lg data-stream space-y-6">
            <p className="text-lg text-text-secondary">A developer, Sabina, sees a critical bug alert. Instead of typing, she makes a quick **gesture**—a "Cognitive Screenshot"—capturing the alert. The image instantly appears in her Wise workspace. EngelBERT's vision model extracts the keywords, and its authorized **GitHub Connector**, running locally, pulls the full issue into her "Second Brain."</p>
            <p className="text-lg text-text-secondary">When she opens Wise, it has anticipated her need, defaulting to the **Scholar Lens** 🎓. But she's drained and sighs, `"I'm too tired for this."` The system fuses her words with a simple swipe gesture, understands her state has changed, and fluidly transitions to the **Reflective Lens** 🧘.</p>
            <p className="text-lg text-text-secondary">Wise doesn't offer to solve the bug. It gently helps her reframe her frustration. As her mind clears, the **Insight Engine** surfaces a "eureka" moment, connecting the bug to an unrelated concept from a bioinformatics paper in her Second Brain.</p>
            <p className="text-lg text-text-secondary">Energized, she switches to the **Muse Lens** 🎨, sketches a new architecture, and watches as Wise's creative agent co-creates a solution with her. With a final voice command—`"That's it. Formulate a plan."`—Wise orchestrates a multi-agent workflow that generates the code, drafts an email to her team, and schedules a meeting, turning a moment of frustration into a completed, collaborative breakthrough.</p>
        </div>
      </section>
      
      {/* --- WHY DEVELOPERS LOVE WISE --- */}
      <section className="my-20">
        <h2 className="text-3xl font-bold text-center mb-8">Why You'll Love Wise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 rounded-lg bg-glass neon-border text-center">
            <ShieldCheck className="w-10 h-10 text-accent-tertiary mx-auto mb-4"/>
            <h3 className="text-xl font-bold mb-2">Sovereign by Design</h3>
            <p className="text-text-secondary text-sm">Your Second Brain never leaves your device. Ever.</p>
          </div>
          <div className="p-6 rounded-lg bg-glass neon-border text-center">
            <Cpu className="w-10 h-10 text-accent-tertiary mx-auto mb-4"/>
            <h3 className="text-xl font-bold mb-2">Agentic Toolchain</h3>
            <p className="text-text-secondary text-sm">Automate tasks, chain tools, and get work done without losing context.</p>
          </div>
          <div className="p-6 rounded-lg bg-glass neon-border text-center">
            <GitBranch className="w-10 h-10 text-accent-tertiary mx-auto mb-4"/>
            <h3 className="text-xl font-bold mb-2">Open & Extensible</h3>
            <p className="text-text-secondary text-sm">Built on open-source. Extend, inspect, and build your own Cognitive Lenses.</p>
          </div>
        </div>
      </section>

      {/* --- THE LONG-TERM VISION --- */}
      <section className="my-20 p-10 rounded-lg bg-glass-dark border border-border-secondary">
          <h2 className="text-3xl font-bold text-center mb-4 flex items-center justify-center gap-3"><BookOpen /> The Long-Term Vision</h2>
          <p className="text-lg text-text-secondary text-center max-w-3xl mx-auto">
              EngelBERT is the foundation for a new data economy built on Cognitive Sovereignty. In the future, we envision a **"Knowledge Refinery"**—a marketplace where you can choose to contribute your best, most polished insights, creating the world's first large-scale dataset of pure, structured human thought to power the next generation of specialized AI.
          </p>
      </section>

      {/* --- CTA --- */}
      <section className="my-20 p-10 rounded-lg text-center bg-glass-dark border-2 border-accent-secondary/50 shadow-lg shadow-accent-secondary/10">
        <h2 className="text-3xl font-bold mb-4">Reserve Your Sovereign Thinking Environment</h2>
        <p className="text-lg text-text-secondary mb-6">Join the pioneers on the waitlist for early access to **Wise: Sovereign Edition**.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link 
            href="https://tally.so/r/3q8PBG" 
            target="_blank" 
            className="btn-primary w-full sm:w-auto"
            aria-label="Join the Wise waitlist - opens in new tab"
          >
            Join the Waitlist
          </Link>
          <Link 
            href="https://github.com/daveAnalyst/EngelBERT" 
            target="_blank" 
            className="btn-secondary w-full sm:w-auto"
            aria-label="View the EngelBERT source code on GitHub - opens in new tab"
          >
            View on GitHub
          </Link>
        </div>
        <p className="text-xs text-text-tertiary mt-4">Takes 10 seconds. No spam, ever.</p>
      </section>

      {/* --- FOOTER --- */}
      <footer className="text-center mt-16 pt-8 border-t border-border-primary text-text-tertiary text-sm">
        <h3 className="text-lg text-text-secondary font-bold mb-4">Research & Foundation</h3>
        <p>This project is grounded in the research of Engelbart, Licklider, and Kay. <a href="https://doi.org/10.5281/zenodo.16020726" target="_blank" className="hover:text-accent-primary">Read the full academic paper (DOI)</a>.</p>
        <p className="mt-8">© {new Date().getFullYear()} The Engelbert Project | <a href="mailto:davidomungala3@gmail.com" className="hover:text-accent-primary">Contact</a> | <a href="https://twitter.com/Omungala_dave" target="_blank" className="hover:text-accent-primary">Follow Updates</a></p>
      </footer>

    </main>
  );
}