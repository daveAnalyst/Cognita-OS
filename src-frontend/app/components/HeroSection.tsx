// src-frontend/app/components/HeroSection.tsx (The Final, Legendary Synthesis Version)
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

export const HeroSection = () => {
  
  const handleScrollDown = () => {
    const nextSection = document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      
      <motion.div
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 } 
          },
        }}
        className="relative z-10 flex flex-col items-center"
      >
        
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } }}
          className="mb-8"
        >
            <Image 
              src="/media/hero-banner.png"
              alt="Wise Application Banner" 
              priority 
              width={700}
              height={320}
              className="mx-auto rounded-lg shadow-2xl"
              style={{
                boxShadow: '0 0 40px rgba(124, 58, 237, 0.2), 0 0 60px rgba(0, 212, 255, 0.2)'
              }}
            />
        </motion.div>
        
        {/* THIS IS THE NEW, SYNTHESIZED NARRATIVE */}
        <motion.p 
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } }}
          className="text-2xl md:text-3xl text-text-secondary mb-4 font-light max-w-3xl mx-auto"
        >
          Today's AI makes you <span className="text-white font-medium">faster</span>. We are building the AI that makes you <span className="gradient-text-secondary font-medium">smarter</span>.
        </motion.p>
        
        <motion.p 
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } }}
          className="text-xl md:text-2xl text-text-tertiary mb-10 font-light max-w-3xl mx-auto"
        >
          Wise is not an artificial mind to replace yours; it is a **sovereign extension of your mind** that works even in <span className="text-text-secondary font-medium">airplane mode</span>.
        </motion.p>
        
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
            <Link href="https://tally.so/r/3q8PBG" target="_blank" className="btn-primary pulse-glow">
              Join the Waitlist
            </Link>
            <Link href="https://github.com/daveAnalyst/EngelBERT" target="_blank" className="btn-secondary">
              Explore the Code
            </Link>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-pointer"
        aria-label="Scroll to next section"
      >
        <div className="w-6 h-10 border-2 border-text-tertiary rounded-full flex justify-center p-1 group-hover:border-accent-primary transition-colors">
          <motion.div 
            className="w-1 h-2 bg-text-secondary rounded-full" 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.button>
    </section>
  );
};