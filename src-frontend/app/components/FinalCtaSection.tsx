// src-frontend/app/components/FinalCtaSection.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { Smartphone } from 'lucide-react';

const sectionVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 } 
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

export const FinalCtaSection = () => {
  return (
    <section id="cta" className="py-16 sm:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariant}
        className="bg-glass-dark rounded-2xl p-8 md:p-16 text-center border border-border-secondary flex flex-col items-center"
      >
        <motion.h2 
          variants={itemVariant}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-6"
        >
          Begin Your Journey to Personal Superintelligence.
        </motion.h2>

        <motion.p 
          variants={itemVariant}
          className="text-lg md:text-xl text-text-secondary mb-10 max-w-3xl mx-auto"
        >
          The core Wise desktop app is free and open-source. Download the V1 Pioneer Build today and join our waitlist for product updates. With Wise, your data is always yours.
        </motion.p>
        
        <motion.div 
          variants={itemVariant}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-lg"
        >
          <Link 
            href="https://github.com/daveAnalyst/EngelBERT/releases/latest" 
            target="_blank" 
            className="btn-primary w-full sm:w-auto pulse-glow"
          >
            Download the Pioneer Build
          </Link>
          <Link 
            href="https://tally.so/r/3q8PBG" 
            target="_blank" 
            className="btn-secondary w-full sm:w-auto"
          >
            Join the Updates Waitlist
          </Link>
        </motion.div>
        
        <motion.div variants={itemVariant} className="mt-12 flex items-center justify-center gap-2 text-sm text-text-tertiary">
          <Smartphone className="w-4 h-4" />
          <p>Coming Soon: Native iOS & Android apps powered by EngelBERT.</p>
        </motion.div>
      </motion.div>
    </section>
  );
};