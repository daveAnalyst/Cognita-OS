// src-frontend/app/page.tsx

import Image from 'next/image';
import Link from 'next/link';
// We will use lucide-react for professional, lightweight icons
import { ShieldCheck, Cpu, GitBranch, Bot, Lightbulb, Drama, Scale } from 'lucide-react';

// Use the '@/' alias for robust, non-brittle pathing.
// Ensure your 'tsconfig.json' has: "paths": { "@/*": ["./*"] }
import wiseBanner from '@./media/wise-banner.png';
import mockup from '@./media/wise soveraign scholar edition.png';

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
          The OS That Thinks <em>With</em> You
        </p>
        <p className="mt-4 text-lg text-text-tertiary max-w-2xl mx-auto">
          A local-first, sovereign OS designed to be a Socratic partner that debates, reasons, and explores ideas with you.
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
        <div>
          <h2 className="text-3xl font-bold gradient-text-secondary text-center">Our Vision: The AI Lab Partner</h2>
          <p className="text-lg text-text-secondary mt-4 text-center max-w-3xl mx-auto">
            Engelbert transcends task automation: it treats routine work as raw material for Socratic dialogue, transforming your computer into a true thought partner.
          </p>
        </div>
      </section>

      {/* --- USER STORY --- */}
      <section className="my-20">
        <h2 className="text-3xl font-bold text-center mb-4">Meet Wise: Your Integrated Thinking Environment</h2>
        <p className="text-center text-lg text-text-secondary mb-8">
          Powered by EngelBERT, Wise is the first environment to unify a sovereign Second Brain, agentic tools, and proactive reasoning.
        </p>
        <div className="p-8 rounded-lg data-stream">
          <h3 className="text-2xl font-bold text-center mb-8">A Day in the Life</h3>
          <ol className="space-y-6 text-lg text-text-secondary list-none m-0 p-0">
            <li className="flex items-start gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent-primary/10 text-accent-primary font-bold shrink-0">1</span>
              <p>A developer, Sabina, asks Wise: <em>"Review my recent commits on the auth flow and my original design notes from last month."</em></p>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent-primary/10 text-accent-primary font-bold shrink-0">2</span>
              <p>The <strong>Insight Engine</strong> surfaces a proactive alert: <em>"I noticed your <code>handleAuthRedirect</code> function conflicts with a 3-week-old note: ‘Ensure all redirects are server-side validated.’ This might be the source of the bug."</em></p>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent-primary/10 text-accent-primary font-bold shrink-0">3</span>
              <p>She activates the <strong>Agora Lens</strong> to debate trade-offs, then the <strong>Muse Lens</strong> to brainstorm—all without leaving her workflow.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* --- WHY DEVELOPERS LOVE WISE --- */}
      <section className="my-20">
        <h2 className="text-3xl font-bold text-center mb-8">Why Developers & Researchers Love Wise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 rounded-lg bg-glass neon-border text-center">
            <ShieldCheck className="w-10 h-10 text-accent-tertiary mx-auto mb-4"/>
            <h3 className="text-xl font-bold mb-2">Local-First Sovereignty</h3>
            <p className="text-text-secondary text-sm">Your Second Brain never leaves your device. Ever.</p>
          </div>
          <div className="p-6 rounded-lg bg-glass neon-border text-center">
            <Cpu className="w-10 h-10 text-accent-tertiary mx-auto mb-4"/>
            <h3 className="text-xl font-bold mb-2">Agentic Toolchain</h3>
            <p className="text-text-secondary text-sm">Automate tasks, chain tools, and get work done without losing context.</p>
          </div>
          <div className="p-6 rounded-lg bg-glass neon-border text-center">
            <GitBranch className="w-10 h-10 text-accent-tertiary mx-auto mb-4"/>
            <h3 className="text-xl font-bold mb-2">Open Ecosystem</h3>
            <p className="text-text-secondary text-sm">Built on open-source. Extend, inspect, and build your own Cognitive Lenses.</p>
          </div>
        </div>
      </section>

      {/* --- CORE INNOVATIONS --- */}
      <section className="my-20">
        <h2 className="text-3xl font-bold text-center mb-8">Architectural Innovations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg bg-glass-dark border border-border-secondary">
            <h3 className="text-xl font-bold text-accent-primary mb-2 flex items-center gap-2"><Bot className="w-6 h-6" /> Self-Correcting Kernel</h3>
            <p className="text-text-secondary">Like a human pausing to reconsider, Engelbert’s <strong>Critic Agent</strong> audits its own logic before responding.</p>
          </div>
          <div className="p-6 rounded-lg bg-glass-dark border border-border-secondary">
            <h3 className="text-xl font-bold text-accent-primary mb-2 flex items-center gap-2"><Lightbulb className="w-6 h-6" /> Proactive Insight Engine</h3>
            <p className="text-text-secondary">A computational "dream cycle" that passively mines your local knowledge for non-obvious connections.</p>
          </div>
          <div className="p-6 rounded-lg bg-glass-dark border border-border-secondary">
            <h3 className="text-xl font-bold text-accent-primary mb-2 flex items-center gap-2"><Drama className="w-6 h-6" /> Socratic Dialogue</h3>
            <p className="text-text-secondary">The system is designed to ask clarifying questions, not just provide answers, pushing your thinking further.</p>
          </div>
          <div className="p-6 rounded-lg bg-glass-dark border border-border-secondary">
            <h3 className="text-xl font-bold text-accent-primary mb-2 flex items-center gap-2"><Scale className="w-6 h-6" /> Post-GUI Interaction</h3>
            <p className="text-text-secondary">The ‘Cognitive Screenshot’ is our first step toward a future where gestures and voice extend thought, not interrupt it.</p>
          </div>
        </div>
      </section>

      {/* --- CTA (REVISED) --- */}
      <section className="my-20 p-10 rounded-lg text-center bg-glass-dark border-2 border-accent-secondary/50 shadow-lg shadow-accent-secondary/10">
        <h2 className="text-3xl font-bold mb-4">Reserve Your Sovereign Thinking Environment</h2>
        <p className="text-lg text-text-secondary mb-6">Join the pioneers on the waitlist for early access to <strong>Wise: Sovereign Edition</strong>.</p>
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
            aria-label="View the Engelbert OS source code on GitHub - opens in new tab"
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