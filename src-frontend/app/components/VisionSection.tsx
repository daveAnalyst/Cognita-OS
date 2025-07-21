// src-frontend/app/components/VisionSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Layers, Database, Cpu, BookOpen } from 'lucide-react';

const coreArchitecture = [
  { 
    icon: Layers, 
    title: "The Engelbert Kernel", 
    description: "A local-first, application-level OS that orchestrates agents and tools via a proactive DPES loop." 
  },
  { 
    icon: Database, 
    title: "The Sovereign Second Brain", 
    description: "Your private knowledge base, built on SQLite and LanceDB for structured and semantic memory." 
  },
  { 
    icon: Cpu, 
    title: "Local Model Orchestration", 
    description: "Intelligently routes tasks to the best local model for the job (e.g., CodeGemma, vision models) via Ollama." 
  },
];

export const VisionSection = () => {
  return (
    <section className="py-24">
      {/* Part 1: The Core Architecture */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">
          Sovereign by Design, Powerful by Architecture
        </h2>
        <p className="mt-4 text-xl text-text-secondary max-w-3xl mx-auto">
          Engelbert is not magic; it's a deeply considered architecture built for a new paradigm of computing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {/* We will map over the first 3 items for the main grid */}
        {coreArchitecture.slice(0, 3).map((item, index) => (
          <motion.div
            key={item.title}
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
            <item.icon className="w-12 h-12 text-accent-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-text-primary mb-4">{item.title}</h3>
            <p className="text-text-secondary leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Part 2: The Long-Term Vision */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
        className="bg-glass-dark rounded-2xl p-8 md:p-12 text-center border border-border-secondary"
      >
        <div className="flex justify-center mb-6">
          <BookOpen className="w-12 h-12 text-accent-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
          The Future: A New Knowledge Economy
        </h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          Our long-term vision is the **"Knowledge Refinery"**—a marketplace built on Cognitive Sovereignty where you can choose to contribute your best insights, creating the world's first large-scale dataset of pure, structured human thought to power the next generation of specialized AI.
        </p>
      </motion.div>
    </section>
  );
};