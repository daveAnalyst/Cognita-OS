// src-frontend/app/components/ProblemSolutionSection.tsx
'use client';

import { motion } from 'framer-motion';
import { XCircle, CheckCircle } from 'lucide-react';

export const ProblemSolutionSection = () => {
  return (
    <section className="py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 }
          },
        }}
        className="bg-glass-dark rounded-2xl p-6 md:p-12 text-center border border-border-primary"
      >
        <motion.p 
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="text-sm uppercase tracking-widest text-accent-tertiary mb-2"
        >
          The Paradigm Shift
        </motion.p>
        
        <motion.h2 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-3xl md:text-4xl font-bold gradient-text mb-4"
        >
          The AI Butler is a Dead End
        </motion.h2>
        
        <motion.p 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-xl text-text-secondary mb-12 max-w-3xl mx-auto"
        >
          Today's tools automate your work. <strong className="text-accent-tertiary">Engelbert augments your mind.</strong>
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 text-lg">
          
          {/* THE OLD WAY */}
          <motion.div 
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
            className="text-left p-6 bg-glass rounded-xl border-l-4 border-red-500/50"
          >
            <h3 className="font-semibold mb-4 flex items-center text-red-400 text-2xl">
              <XCircle className="w-8 h-8 mr-3 shrink-0" aria-hidden="true" /> Traditional AI
            </h3>
            <ul className="text-text-secondary space-y-4">
              <li className="flex items-start gap-3">
                <XCircle size={18} className="text-red-400 shrink-0 mt-1" aria-hidden="true" />
                <span>Built to <em>do the work for you</em></span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle size={18} className="text-red-400 shrink-0 mt-1" aria-hidden="true" />
                <span>Cloud-dependent & surveilled</span>
              </li>
            </ul>
          </motion.div>

          {/* THE ENGELBERT WAY */}
          <motion.div 
            variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
            className="text-left p-6 bg-glass rounded-xl border-l-4" style={{ borderColor: 'var(--accent-tertiary)' }}
          >
            <h3 className="font-semibold mb-4 flex items-center text-2xl" style={{ color: 'var(--accent-tertiary)' }}>
              <CheckCircle className="w-8 h-8 mr-3 shrink-0" aria-hidden="true" /> Engelbert
            </h3>
            <ul className="text-text-secondary space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="shrink-0 mt-1" aria-hidden="true" style={{ color: 'var(--accent-tertiary)' }}/>
                <span>Built to <em>do the work with you</em></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="shrink-0 mt-1" aria-hidden="true" style={{ color: 'var(--accent-tertiary)' }}/>
                <span>Sovereign & 100% private</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};