// src-frontend/app/components/PillarsSection.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import { Database, BrainCircuit, Sparkles, Fingerprint, Zap } from 'lucide-react';

const sectionVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 } 
  }
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeInOut" 
    } 
  }
};

const pillars = [
  {
    icon: Database,
    title: "Perfect Memory",
    description: "Your private Sovereign Second Brain unifies everything you choose to add—notes, files, ideas—securely on your device. This isn't just about finding things faster; it's about offloading the cognitive burden of recall, freeing your mind to be fully present and focused on the moment."
  },
  {
    icon: BrainCircuit,
    title: "Adaptive Reasoning",
    description: "Switch between Scholar, Muse, or our CBT-inspired Reflective Lens to tailor Wise’s thinking to your task. This is the ultimate tool for breaking through creative blocks and cognitive biases, ensuring you can always find a new way to look at a problem."
  },
  {
    icon: Sparkles,
    title: "Proactive Intuition",
    description: "Wise works tirelessly in the background, uncovering hidden connections across your data to deliver insights before you ask, so you can capitalize on opportunities others miss."
  },
  {
    icon: Fingerprint,
    title: "Deep Personalization",
    description: "Wise learns your unique mind. Using on-device fine-tuning, it adapts its model to mirror your cognitive style, transforming it from a generic tool into a true partner that anticipates your needs and complements your strengths."
  },
  {
    icon: Zap,
    title: "Agentic Action",
    description: "Wise orchestrates tedious tasks for you, chaining tools and models to bring your ideas to life. This isn't about saving time; it's about reclaiming your cognitive bandwidth, freeing you to do the deep, creative work that truly matters."
  }
];

export const PillarsSection = () => {
  return (
    <section id="features" className="py-16 sm:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariant}
        className="text-center flex flex-col items-center space-y-6"
      >
        
        <motion.h2 variants={itemVariant} className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
          The Architecture of a True AI Partner.
        </motion.h2>

        <motion.p variants={itemVariant} className="text-lg md:text-xl text-text-secondary max-w-3xl">
          These are the five pillars that form the foundation for your Personal Superintelligence.
        </motion.p>
        
        <motion.div variants={itemVariant} className="pt-8 max-w-4xl">
          <blockquote className="text-lg italic text-text-secondary">
            "Design is not just what it looks like and feels like. Design is how it works."
          </blockquote>
          <cite className="block text-right mt-2 text-text-tertiary not-italic">— Steve Jobs</cite>
        </motion.div>

      </motion.div>

      {/* The Grid of Pillars */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariant}
        className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {pillars.map((pillar) => (
          // For the 3-over-2 layout, we add a conditional class to the 5th item
          <motion.div
            key={pillar.title}
            variants={itemVariant}
            className={`
              bg-glass rounded-2xl p-8 text-left hover-lift border border-border-primary flex flex-col
              ${pillars.indexOf(pillar) === 4 ? 'lg:col-start-2' : ''}
            `}
          >
            <div className="flex-shrink-0">
              <pillar.icon className="w-10 h-10 text-accent-primary mb-6" />
              <h3 className="text-2xl font-bold text-text-primary mb-4">{pillar.title}</h3>
            </div>
            <div className="flex-grow">
              <p className="text-text-secondary leading-relaxed">{pillar.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};