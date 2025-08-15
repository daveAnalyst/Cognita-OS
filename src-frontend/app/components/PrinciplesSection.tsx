// src-frontend/app/components/PrinciplesSection.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

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

const principles = [
  {
    title: "Always Offline.",
    description: "Wise runs fully on your device, not in the cloud. It thrives in airplane mode, ensuring your core thinking is never dependent on a Wi-Fi connection."
  },
  {
    title: "Uncompromising Privacy.",
    description: "Your data stays private—notes, chats, and files never leave your device. We cannot see them. No one can see them. Period."
  },
  {
    title: "Total Ownership.",
    description: "You own your AI’s evolution. All personalization and model fine-tuning happens only on your device, under your full control."
  }
];

export const PrinciplesSection = () => {
  return (
    <section id="principles" className="py-16 sm:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
        className="text-center flex flex-col items-center"
      >
        
        <motion.h2 
          variants={itemVariant}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary max-w-4xl"
        >
          Your Data. Your Models. Your AI. Anywhere.
        </motion.h2>

        <motion.p 
          variants={itemVariant}
          className="mt-6 text-lg md:text-xl text-text-secondary max-w-3xl"
        >
          Our commitment to your sovereignty is absolute. These are not features; they are our foundational promises.
        </motion.p>
        
      </motion.div>

      {/* The Grid of Principles */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {principles.map((principle) => (
          <motion.div
            key={principle.title}
            variants={itemVariant}
            className="bg-glass rounded-2xl p-8 text-center border border-border-primary" // Centered text for a more declarative feel
          >
            <CheckCircle className="w-12 h-12 text-accent-tertiary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-text-primary mb-4">{principle.title}</h3>
            <p className="text-text-secondary leading-relaxed">{principle.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};