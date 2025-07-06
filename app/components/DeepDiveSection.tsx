// components/DeepDiveSection.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const architectureHighlights = [
    { id: 'sovereign', title: 'Sovereign by Design', description: 'Your data stays on your device. Period.' },
    { id: 'orchestrator', title: 'The Cognitive Core', description: 'An on-device orchestrator routes your intent.' },
    { id: 'agnostic', title: 'Model-Agnostic', description: 'Select the best local model for the job.' },
    { id: 'memory', title: 'Second Brain', description: 'A local vector store builds true semantic memory.' },
];

export const DeepDiveSection = () => {
  return (
    <section className="relative bg-neutral-950/50 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl sm:text-5xl font-bold"
          >
            Sovereign by Design.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-neutral-400 mt-4"
          >
            Powerful by Architecture.
          </motion.p>
        </div>
        
        {/* Main Content Area */}
        <div className="max-w-4xl mx-auto">
          {/* The Diagram */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-16"
          >
            <div className="relative w-full h-auto aspect-[4/5] max-w-2xl mx-auto">
              <Image
                src="/mvp-architecture.svg"
                alt="Cognita OS MVP Architecture"
                fill
                style={{ objectFit: 'contain' }}
                className="opacity-70"
              />
            </div>
          </motion.div>

          {/* Key Highlights */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {architectureHighlights.map((item) => (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl"
              >
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-neutral-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeepDiveSection;