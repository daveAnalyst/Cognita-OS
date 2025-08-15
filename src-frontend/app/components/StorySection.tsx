// src-frontend/app/components/StorySection.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import { Lightbulb, BrainCircuit, Sparkles } from 'lucide-react';

// Animation variants
const sectionVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.3 } 
  }
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  }
};

// Variants for the typing animation
const sentenceVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.02, // Adjust speed of typing
    },
  },
};

const letterVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// A helper component for the typing text
const AnimatedText = ({ text, className }: { text: string; className?: string }) => (
  <motion.p variants={sentenceVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }} className={className}>
    {text.split("").map((char, index) => (
      <motion.span key={index} variants={letterVariant}>
        {char}
      </motion.span>
    ))}
    {/* Blinking cursor effect */}
    <motion.span
      className="inline-block w-0.5 h-full bg-current ml-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 1, repeat: Infinity, delay: text.length * 0.02 + 0.5 }}
    />
  </motion.p>
);

export const StorySection = () => {
  return (
    // UPGRADE 1: Reduced vertical padding for better flow
    <section id="story" className="py-16 sm:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
        className="text-center flex flex-col items-center space-y-8"
      >
        <motion.h2 
          variants={itemVariant}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary max-w-3xl"
        >
          From Overwhelmed to Breakthrough.
        </motion.h2>

        <motion.p 
          variants={itemVariant}
          className="text-base md:text-lg text-text-secondary max-w-2xl"
        >
          Today's tools help you collect information. Wise is designed to help you create strategy.
        </motion.p>
        
        <motion.div 
          variants={itemVariant}
          className="w-full max-w-4xl bg-glass-dark rounded-2xl p-8 md:p-12 border border-border-primary shadow-xl space-y-8"
        >
          {/* UPGRADE 2: Reduced body text size */}
          <p className="text-base md:text-lg text-text-secondary">
            Meet Sarah, a founder. She feeds her messy research—user interviews, competitor notes—into her private Wise "Second Brain." The next morning, her personal AI acts as her lab partner.
          </p>
          
          {/* UPGRADE 3: The "Cognitive Terminal" for AI Responses */}
          <div className="text-left font-mono bg-black/50 rounded-lg border border-border-secondary shadow-inner">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-border-secondary">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <p className="text-xs text-text-tertiary ml-auto">[WISE - Insight Engine]</p>
            </div>
            <div className="p-6">
              <AnimatedText text='"Connection Found: The feature your top customer requested is the exact same one your biggest competitor was just publicly criticized for."' className="text-lg md:text-xl text-white font-medium leading-relaxed" />
            </div>
          </div>

          <p className="text-base md:text-lg text-text-secondary">
            The insight is powerful, but it's just the start. Wise detects her need to pivot from analysis to action and presents the next logical steps.
          </p>
          
          <div className="text-left font-mono bg-black/50 rounded-lg border border-border-secondary shadow-inner">
             <div className="flex items-center gap-2 px-4 py-2 border-b border-border-secondary">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <p className="text-xs text-text-tertiary ml-auto">[WISE - Scholar & Muse Lens]</p>
            </div>
            <div className="p-6 space-y-4">
               <AnimatedText text="> Action 1: Deconstruct competitor's failure (Scholar Lens)." className="italic text-text-secondary leading-relaxed" />
               <AnimatedText text="> Action 2: Brainstorm three novel solutions (Muse Lens)." className="italic text-text-secondary leading-relaxed" />
            </div>
          </div>

          <p className="text-2xl text-white font-semibold pt-4">
            In minutes, Wise has transformed a raw insight into an actionable plan.
          </p>
        </motion.div>

        <motion.div variants={itemVariant} className="pt-16 max-w-3xl">
          <blockquote className="text-xl italic text-text-secondary border-l-2 border-text-tertiary pl-6">"The better we get at getting better, the faster we will get better."</blockquote>
          <cite className="block text-right mt-4 text-text-tertiary not-italic">— Douglas Engelbart</cite>
        </motion.div>
      </motion.div>
    </section>
  );
};