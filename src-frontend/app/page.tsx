// src-frontend/app/page.tsx

import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Cpu, GitBranch, BookOpen, Brain, Zap, Users } from 'lucide-react';

// Use the '@/' alias for robust, non-brittle pathing.
import wiseBanner from '@/public/media/wise-banner.png';
import mockup from '@/public/media/wise-sovereign-edition-mockup.png';

export default function VisionPage() {
  return (
    // We will use inline JSX styles to keep this component self-contained for simplicity.
    <main className="min-h-screen bg-slate-900 text-white font-sans">
      <style jsx global>{`
        body {
          background-color: #020617; /* bg-slate-900 */
        }
        .gradient-text {
          background: linear-gradient(135deg, #a78bfa 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .glass-effect {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .hover-lift:hover {
          transform: translateY(-5px) scale(1.02);
          transition: all 0.3s ease;
        }
        .pulse-glow {
          animation: pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.4); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.8); }
        }
        .data-stream {
          background: linear-gradient(135deg, rgba(167, 139, 250, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%);
          border-left: 4px solid #a78bfa;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* --- HERO SECTION --- */}
        <section className="text-center mb-24">
          <div className="mb-8">
            <Image 
              src={wiseBanner} 
              alt="Wise Application Banner" 
              priority 
              className="mx-auto rounded-lg shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight gradient-text mb-6">
            Engelbert
          </h1>
          <p className="text-2xl md:text-3xl text-slate-200 mb-6 font-light">
            The difference between <span className="text-red-400 font-medium">automating tasks</span> and <span className="text-green-400 font-medium">amplifying genius</span>.
          </p>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-10">
            Your sovereign thinking partner that debates, reasons, and explores with you. Local-first. Always private. Infinitely extensible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://tally.so/r/3q8PBG" 
              target="_blank" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg pulse-glow"
            >
              Reserve Early Access
            </Link>
            <Link 
              href="https://github.com/daveAnalyst/Engelbert-OS" 
              target="_blank" 
              className="border-2 border-slate-600 text-slate-300 hover:border-white hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Source Code
            </Link>
          </div>
        </section>

        {/* --- PROBLEM VS SOLUTION --- */}
        <section className="mb-24">
          <div className="glass-effect rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-red-400 mb-4">
              The AI Butler is a Dead End
            </h2>
            <p className="text-xl text-slate-300 mb-6">
              Copilot automates your work. <strong className="text-green-400">Engelbert augments your mind.</strong>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 text-lg">
              <div className="text-left">
                <h3 className="text-red-400 font-semibold mb-2">❌ Traditional AI</h3>
                <ul className="text-slate-400 space-y-2 list-disc list-inside">
                  <li>Thinks FOR you</li>
                  <li>Cloud-dependent & surveilled</li>
                  <li>Focuses on task automation</li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-green-400 font-semibold mb-2">✅ Engelbert</h3>
                <ul className="text-slate-400 space-y-2 list-disc list-inside">
                  <li>Thinks WITH you</li>
                  <li>Sovereign & 100% private</li>
                  <li>Focuses on cognitive augmentation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- USER STORY --- */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Wise in Action: <span className="gradient-text">A Developer's Breakthrough</span>
          </h2>
          <div className="data-stream rounded-xl p-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-500 rounded-full w-3 h-3 mt-2 flex-shrink-0 animate-pulse"></div>
              <p className="text-lg text-slate-300">
                <strong>3:47 PM:</strong> Sabina sees a critical bug alert. Instead of typing, she makes a quick gesture—a "Cognitive Screenshot"—capturing the alert. Engelbert's vision model instantly extracts keywords, and its authorized GitHub Connector pulls the full issue into her Second Brain.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-yellow-500 rounded-full w-3 h-3 mt-2 flex-shrink-0 animate-pulse"></div>
              <p className="text-lg text-slate-300">
                <strong>3:48 PM:</strong> Wise opens to the Scholar Lens 🎓. But she's drained: <em>"I'm too tired for this."</em> The system understands her state and fluidly transitions to the Reflective Lens 🧘, helping her reframe frustration instead of diving into code.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-500 rounded-full w-3 h-3 mt-2 flex-shrink-0 animate-pulse"></div>
              <p className="text-lg text-slate-300">
                <strong>3:52 PM:</strong> As her mind clears, the Insight Engine surfaces a connection between the bug and a bioinformatics paper from her archives. The "eureka" moment hits—a completely different approach.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-500 rounded-full w-3 h-3 mt-2 flex-shrink-0 animate-pulse"></div>
              <p className="text-lg text-slate-300">
                <strong>4:15 PM:</strong> Energized, she switches to the Muse Lens 🎨, sketches a new architecture, and with a voice command—<em>"That's it. Execute."</em>—Wise orchestrates a multi-agent workflow that generates code, drafts team emails, and schedules the review meeting.
              </p>
            </div>
            <div className="text-center mt-8 pt-6 border-t border-slate-700">
              <p className="text-xl text-green-400 font-semibold">
                Frustration → Insight → Breakthrough → Execution
              </p>
              <p className="text-slate-400 mt-2">All in 28 minutes. All completely private.</p>
            </div>
          </div>
        </section>
        
        {/* --- CORE FEATURES --- */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            An OS for Thought
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect rounded-xl p-8 text-center hover-lift">
              <ShieldCheck className="w-12 h-12 text-green-400 mx-auto mb-4"/>
              <h3 className="text-xl font-bold mb-4 text-white">Cognitive Sovereignty</h3>
              <p className="text-slate-300">Your ideas, insights, and breakthroughs never leave your device. Full control, zero surveillance.</p>
            </div>
            <div className="glass-effect rounded-xl p-8 text-center hover-lift">
              <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4"/>
              <h3 className="text-xl font-bold mb-4 text-white">Cognitive Lenses</h3>
              <p className="text-slate-300">Scholar, Muse, Reflective, Critic—different modes for different types of thinking and creative work.</p>
            </div>
            <div className="glass-effect rounded-xl p-8 text-center hover-lift">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4"/>
              <h3 className="text-xl font-bold mb-4 text-white">Agentic Workflows</h3>
              <p className="text-slate-300">Chain tools, automate busywork, and execute complex tasks while maintaining context and intent.</p>
            </div>
          </div>
        </section>

        {/* --- KNOWLEDGE REFINERY --- */}
        <section className="mb-24">
          <div className="glass-effect rounded-xl p-10 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white flex items-center justify-center gap-3">
              <BookOpen className="text-blue-400" /> The Long-Term Vision: The Knowledge Refinery
            </h2>
            <p className="text-lg text-slate-300 max-w-4xl mx-auto">
              EngelBERT is building toward a new data economy based on <strong className="text-green-400">Cognitive Sovereignty</strong>. 
              In the future, you'll be able to contribute your best insights to a marketplace of pure, structured human thought—
              powering a new generation of specialized AI that truly enhances human intelligence.
            </p>
          </div>
        </section>

        {/* --- FINAL CTA --- */}
        <section>
          <div className="glass-effect rounded-xl p-10 text-center shadow-2xl">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Reserve Your Thinking Environment
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join the cognitive revolution. Limited alpha spots are now open.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <Link 
                href="https://tally.so/r/3q8PBG" 
                target="_blank" 
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-10 py-4 rounded-lg font-bold text-xl transition-all duration-300 hover:scale-105 pulse-glow"
              >
                Get Early Access
              </Link>
              <Link 
                href="https://github.com/daveAnalyst/Engelbert-OS" 
                target="_blank" 
                className="border-2 border-slate-600 text-slate-300 hover:border-white hover:text-white px-10 py-4 rounded-lg font-bold text-xl transition-all duration-300"
              >
                Explore the Code
              </Link>
            </div>
            <p className="text-sm text-slate-400">
              No spam. No tracking. Just pure cognitive enhancement.
            </p>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="text-center pt-16 mt-16 border-t border-slate-800">
          <h3 className="text-xl font-bold mb-4 text-white">Grounded in Research</h3>
          <p className="text-slate-400 mb-6">
            Built on the foundational work of Engelbart, Licklider, and Kay. 
            <Link 
              href="https://doi.org/10.5281/zenodo.16020726" 
              target="_blank" 
              className="text-blue-400 hover:text-blue-300 ml-2"
            >
              Read the academic paper →
            </Link>
          </p>
          <div className="flex justify-center gap-8 text-slate-400 text-sm">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="mailto:davidomungala3@gmail.com" className="hover:text-white">
              Contact
            </Link>
            <Link href="https://twitter.com/Omungala_dave" target="_blank" className="hover:text-white">
              Follow Updates
            </Link>
          </div>
          <p className="text-slate-500 text-sm mt-8">
            © {new Date().getFullYear()} The Engelbert Project
          </p>
        </footer>

      </div>
    </main>
  );
}