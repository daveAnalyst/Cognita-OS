// src-frontend/app/components/FeaturesSection.tsx
'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, BrainCircuit, Zap } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: "Cognitive Sovereignty",
    description: "Your Second Brain, models, and thoughts never leave your device. This isn't just a feature; it's our foundational promise."
  },
  {
    icon: BrainCircuit,
    title: "Cognitive Lenses",
    description: "Go beyond a single model. Switch between Scholar, Muse, and Reflective lenses to shape the AI's entire reasoning process for your specific task."
  },
  {
    icon: Zap,
    title: "Agentic Workflows",
    description: "Engelbert is an orchestrator. It chains tools, automates complex tasks, and executes multi-step plans from a single, natural language intent."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">
          An Operating System for Thought
        </h2>
        <p className="mt-4 text-xl text-text-secondary max-w-3xl mx-auto">
          Built on three core principles that redefine human-AI collaboration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.5, delay: index * 0.1 }
              }
            }}
            className="bg-glass rounded-2xl p-8 text-center hover-lift border border-border-primary"
          >
            <feature.icon className="w-12 h-12 text-accent-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-text-primary mb-4">{feature.title}</h3>
            <p className="text-text-secondary leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};