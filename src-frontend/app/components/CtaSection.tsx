// src-frontend/app/components/CtaSection.tsx (The Final, Legendary Version)
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
          The Future of Thought is Here.
        </h2>
        <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
          We have just submitted our V1 MVP for the Google Gemma 3n Challenge. You can now experience the first sovereign thinking partner.
        </p>
        
        {/* THIS IS THE NEW, LEGENDARY THREE-BUTTON CTA */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
          
          <Link 
            href="https://github.com/daveAnalyst/EngelBERT/releases/latest" 
            target="_blank" 
            className="btn-primary w-full sm:w-auto pulse-glow"
            aria-label="Download the Wise V1 MVP from GitHub - opens in new tab"
          >
            Download the App (V1)
          </Link>
          
          <Link 
            href="https://www.kaggle.com/competitions/google-gemma-3n-hackathon/writeups/wise-a-sovereign-ontology-driven-thinking-environm" // IMPORTANT: Replace this with your actual Kaggle link
            target="_blank" 
            className="btn-secondary w-full sm:w-auto"
            aria-label="Read our technical writeup on Kaggle - opens in new tab"
          >
            Read the Writeup
          </Link>

          <Link 
            href="https://tally.so/r/3q8PBG" 
            target="_blank" 
            className="btn-secondary w-full sm:w-auto"
            aria-label="Join the waitlist for future releases - opens in new tab"
          >
            Join the Waitlist
          </Link>
        </div>

        <p className="text-sm text-text-tertiary">
          The core app will always be free and open-source. Your data is always yours.
        </p>
      </motion.div>
    </section>
  );
};