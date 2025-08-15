// src-frontend/app/components/HeroSection.tsx
'use client';

// Import motion AND the Variants type
import { motion, Variants } from 'framer-motion'; 
import Link from 'next/link';

// Explicitly type the constant with the imported Variants type
const textVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeInOut"
    } 
  },
};

export const HeroSection = () => {
  // Function to smoothly scroll to the next section
  const handleScrollDown = () => {
    // We'll give our next section an id of 'story' for robust targeting
    const storySection = document.getElementById('story');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-24 overflow-hidden">
      
      {/* This is the main container that orchestrates the animations */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { 
            transition: { staggerChildren: 0.3 } 
          },
        }}
        className="relative z-10 flex flex-col items-center space-y-8"
      >
        
        {/* The new visual centerpiece: The Logo as Art */}
        <motion.div variants={textVariant} className="text-center">
          <p className="text-lg text-text-tertiary tracking-widest mb-2 font-mono">
            Powered by Engelbert
          </p>
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">
            wise
          </h1>
        </motion.div>

        {/* The new, legendary copy */}
        <div className="space-y-6 max-w-4xl">
          <motion.h2 variants={textVariant} className="text-3xl md:text-5xl font-semibold tracking-tight text-text-primary">
            Your Personal AI Thought Partner and Helper.
          </motion.h2>
          
          <motion.p variants={textVariant} className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Wise is not an artificial mind to replace yours; it is a sovereign partner designed to **enhance it**. In a world drowning in data, Wise finds the rare insights you've been missing.
          </motion.p>
          
          <motion.p variants={textVariant} className="text-md md:text-lg text-text-tertiary font-mono tracking-wider">
            Your Data. Your Models. Your AI. Anywhere.
          </motion.p>
        </div>
        
        {/* The new, purposeful CTAs */}
        <motion.div 
          variants={textVariant}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
        >
            <Link 
              href="https://github.com/daveAnalyst/EngelBERT/releases/latest" // Direct link to releases
              target="_blank" 
              className="btn-primary pulse-glow"
            >
              Download the Pioneer Build (Free)
            </Link>
            <Link 
              href="https://tally.so/r/3q8PBG" // Your waitlist link
              target="_blank" 
              className="btn-secondary"
            >
              Join the Updates Waitlist
            </Link>
        </motion.div>

      </motion.div>

      {/* The refined scroll-down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.button
          onClick={handleScrollDown}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="p-2 group"
          aria-label="Scroll to next section"
        >
          <div className="w-6 h-10 border-2 border-text-tertiary rounded-full flex justify-center p-1 group-hover:border-accent-primary transition-colors duration-300">
            <motion.div 
              className="w-1 h-2 bg-text-secondary rounded-full" 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.button>
      </div>
    </section>
  );
};