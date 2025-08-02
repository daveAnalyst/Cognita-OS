// src-frontend/app/components/CtaSection.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export const CtaSection = () => {
  return (
    <section className="py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' }
          },
        }}
        className="bg-glass-dark rounded-2xl p-8 md:p-12 text-center border-2 border-accent-secondary/50 shadow-lg shadow-accent-secondary/10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
          Join the Cognitive Revolution
        </h2>
        <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
          Secure your spot in the alpha for <strong className="gradient-text">Wise: Sovereign Edition</strong> and be among the first to experience a true cognitive partner.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
          <Link 
            href="https://tally.so/r/3q8PBG" 
            target="_blank" 
            className="btn-primary w-full sm:w-auto pulse-glow" // Added pulse-glow from your design system
            aria-label="Join the Wise waitlist - opens in new tab"
          >
            Get Early Access
          </Link>
          <Link 
            href="https://github.com/daveAnalyst/EngelBERT" 
            target="_blank" 
            className="btn-secondary w-full sm:w-auto"
            aria-label="View the EngelBERT OS source code on GitHub - opens in new tab"
          >
            Explore the Code
          </Link>
        </div>
        <p className="text-sm text-text-tertiary">
          No spam. No tracking. Just pure cognitive enhancement.
        </p>
      </motion.div>
    </section>
  );
};