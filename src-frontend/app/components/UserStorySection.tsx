// src-frontend/app/components/UserStorySection.tsx
'use client';

import { motion } from 'framer-motion';
import { BrainCircuit, Check, Clapperboard, Sparkles } from 'lucide-react';

export const UserStorySection = () => {
  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">
          Wise in Action: A Day in the Life
        </h2>
        <p className="mt-4 text-xl text-text-secondary max-w-3xl mx-auto">
          This isn't just a faster workflow. It's a deeper mode of thought.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        className="bg-glass-dark rounded-2xl border border-border-primary p-6 md:p-10 space-y-12"
      >
        
        {/* --- ACT 1: The Multimodal Trigger & Proactive Insight --- */}
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <h3 className="text-2xl font-bold flex items-center gap-3 mb-4 text-text-primary"><Clapperboard className="text-accent-primary" /> The Trigger</h3>
          <p className="text-lg text-text-secondary">
            Sabina, a developer and student, sees a critical bug alert. She uses a <strong>"Cognitive Screenshot"</strong> gesture.
          </p>
          <div className="mt-4 p-4 bg-black/50 rounded-lg font-mono text-sm" style={{ color: 'var(--accent-tertiary)' }}>
            <p>{'>'} [SYSTEM] Gesture detected. Vision model activated. Context saved to <strong>Second Brain</strong>.</p>
          </div>
          <p className="text-lg text-text-secondary mt-4">
            When she opens Wise, it doesn't wait. The <strong>Insight Engine</strong> greets her with a proactive connection between the new bug and a biology paper from her archives.
          </p>
        </motion.div>

        {/* --- ACT 2: The Empathetic Pivot & CBT in Action --- */}
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <h3 className="text-2xl font-bold flex items-center gap-3 mb-4 text-text-primary"><BrainCircuit className="text-accent-primary" /> The Pivot</h3>
          <p className="text-lg text-text-secondary">
            The insight is brilliant, but she's drained and hesitates. Wise detects her pause and proactively engages the <strong>Reflective Lens</strong> 🧘.
          </p>
          <div className="mt-4 p-4 bg-black/50 rounded-lg font-mono text-sm border-l-4" style={{ borderColor: 'var(--accent-primary)' }}>
            <p className="font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>{'>'} [WISE - Reflective Lens]:</p>
            <p className="italic" style={{ color: 'var(--accent-primary)' }}>"I sense some hesitation. This feels like a moment of 'All-or-Nothing Thinking,' a common cognitive distortion. Let's reframe this with a Socratic prompt: What's one small part of this problem we can solve right now?"</p>
          </div>
        </motion.div>

        {/* --- ACT 3: The Collaborative Bridge to Muse --- */}
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
           <h3 className="text-2xl font-bold flex items-center gap-3 mb-4 text-text-primary"><Sparkles className="text-accent-primary" /> The Co-Creation</h3>
          <p className="text-lg text-text-secondary">
            Centered by the Socratic prompt, Sabina feels a creative spark. Wise picks up on this shift.
          </p>
          <div className="mt-4 p-4 bg-black/50 rounded-lg font-mono text-sm border-l-4" style={{ borderColor: 'var(--accent-secondary)' }}>
            <p className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>{'>'} [WISE - Proposing Shift]:</p>
            <p className="italic" style={{ color: 'var(--accent-secondary)' }}>"Your focus has shifted. Are you ready to brainstorm a new architecture? I can activate the <strong>Muse Lens</strong> 🎨 and engage the local diffusion model to help you visualize it."</p>
          </div>
          <p className="text-lg text-text-secondary mt-4">
            She replies, "Yes." She begins to sketch, and Wise co-creates the new architecture diagram with her in real-time.
          </p>
        </motion.div>

        {/* --- ACT 4: The Augmented Execution --- */}
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <h3 className="text-2xl font-bold flex items-center gap-3 mb-4 text-text-primary"><Check className="text-accent-primary" /> The Execution</h3>
          <p className="text-lg text-text-secondary">
            With a clear plan, she gives the final voice command: <em>"Okay, execute this."</em> The <strong>SageMind Orchestrator</strong> analyzes her intent and presents its agentic workflow for approval.
          </p>
          <div className="mt-4 p-4 bg-black/50 rounded-lg font-mono text-sm border-l-4" style={{ borderColor: 'var(--accent-tertiary)', color: 'var(--accent-tertiary)' }}>
            <p className="font-bold mb-2">{'>'} [ORCHESTRATOR PLAN]:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>Code Agent:</strong> Generate patch for <code>auth.py</code> using a local CodeGemma model.</li>
              <li><strong>Email Agent:</strong> Draft summary for Davin, referencing the biology paper insight.</li>
              <li><strong>GitHub Agent:</strong> Authorize connector to open a new Pull Request.</li>
              <li><strong>Calendar Agent:</strong> Find 15-min sync slot on shared calendar.</li>
            </ul>
            <p className="mt-2 font-bold">Proceed? (Y/N)</p>
          </div>
        </motion.div>

        {/* --- SUMMARY --- */}
        <div className="text-center mt-12 pt-8 border-t border-border-primary">
          <p className="text-2xl font-semibold" style={{ color: 'var(--accent-tertiary)' }}>
            Frustration → Insight → Breakthrough → Execution
          </p>
          <p className="text-text-secondary mt-2 text-lg">From panic to pull-request in four moves—offline.</p>
        </div>
      </motion.div>
    </section>
  );
};