// src-frontend/app/components/HeroSection.tsx (The Final, Definitive, Branded Version)
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

export const HeroSection = () => {
  
  const handleScrollDown = () => {
    // This finds the very next <section> element on the page.
    const currentSection = document.querySelector('section');
    const nextSection = currentSection?.nextElementSibling;
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
        
        {/* THIS IS THE UPGRADE: The banner is back, in a more iconic, less dominant role. */}
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } }}
          className="mb-8"
        >
            <Image 
              src="/media/hero-banner.png" // Ensure this is the correct path in your /public folder
              alt="Wise Application Banner" 
              priority 
              width={700} // Reduced from 1280 to a more focused, iconic size
              height={320}
              className="mx-auto rounded-lg shadow-2xl"
              style={{
                boxShadow: '0 0 40px rgba(124, 58, 237, 0.2), 0 0 60px rgba(0, 212, 255, 0.2)'
              }}
            />
        </motion.div>
        
        {/* The visionary text now supports and elevates the banner */}
        <motion.p 
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } }}
          className="text-2xl md:text-3xl text-text-secondary mb-10 font-light max-w-3xl mx-auto"
        >
          Today's AI makes you faster. We are building the AI that makes you <span className="text-green-400 font-medium">smarter</span>.
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
        transition={{ delay: 2, duration: 1 }}
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