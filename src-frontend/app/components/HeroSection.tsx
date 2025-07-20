// src-frontend/app/components/HeroSection.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      
      {/* Main Content - a fusion of your old component structure and our new copy */}
      <motion.div
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.3 } 
          },
        }}
        className="relative z-10"
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mb-8">
            <Image 
              src="/hero-banner.png" 
              alt="Wise Application Banner" 
              priority 
              width={1280} // It's best practice to provide explicit width/height
              height={640} // for static images to prevent layout shift.
              className="mx-auto rounded-lg shadow-2xl"
            />
        </motion.div>
        
        <motion.h1 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight gradient-text mb-6"
        >
          EngelBERT
        </motion.h1>
        
        <motion.p 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-2xl md:text-3xl text-text-secondary mb-6 font-light"
        >
          The difference between <span className="text-red-400 font-medium">automating tasks</span> and <span className="text-green-400 font-medium">amplifying genius</span>.
        </motion.p>
        
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
            <Link href="https://tally.so/r/3q8PBG" target="_blank" className="btn-primary">
              Reserve Early Access
            </Link>
            <Link href="https://github.com/daveAnalyst/EngelBERT" target="_blank" className="btn-secondary">
              View Source Code
            </Link>
        </motion.div>
      </motion.div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-pointer"
      >
        <div className="w-6 h-10 border-2 border-text-tertiary rounded-full flex justify-center p-1 transition-colors duration-300 group-hover:border-accent-primary/50">
          <motion.div 
            className="w-1 h-2 bg-text-secondary rounded-full" 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};