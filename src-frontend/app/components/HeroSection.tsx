// components/HeroSection.tsx
'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px]"></div>
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 100, 255, 0.15), transparent 80%)`,
          }}
        />
      </div>

      {/* Corner HUD elements */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 text-xs text-neutral-500 font-mono">
        <div>SYS_STATUS: ONLINE</div>
        <div>COGNITA_KERNEL: ACTIVE</div>
      </div>
      <div className="absolute top-4 right-4 md:top-8 md:right-8 text-xs text-neutral-500 font-mono text-right">
        <div>INTENTMATE INC.</div>
        <div>SPEC_DOC: REV_1.0</div>
      </div>

      {/* Main Content using a single motion.div for staggered animations */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.4, delayChildren: 0.2 } 
          },
        }}
        className="relative"
      >
        <motion.h1
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ type: 'spring', damping: 15, stiffness: 100 }}
          className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300 text-shadow-glow"
        >
          Information is abundant.
        </motion.h1>
        
        <motion.h2
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ type: 'spring', damping: 15, stiffness: 100 }}
          className="text-4xl md:text-6xl font-bold text-neutral-600 mt-3"
        >
          Insight is scarce.
        </motion.h2>
        
        <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ type: 'spring', damping: 15, stiffness: 100 }}
            className="mt-8 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto"
        >
            Today's tools help us collect. They don't help us think.
        </motion.p>
      </motion.div>

      {/* Upgraded scroll indicator with Chevron icon */}
      <motion.a
        href="#product" // This links to the next section
        aria-label="Scroll down"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
        className="absolute bottom-10 flex flex-col items-center space-y-1 group"
      >
        <div className="w-6 h-10 border-2 border-neutral-700 rounded-full flex justify-center p-1 transition-colors duration-300 group-hover:border-cyan-400/50">
          <div className="w-1 h-2 bg-neutral-500 rounded-full animate-[bounce_2s_infinite] transition-colors duration-300 group-hover:bg-cyan-400" />
        </div>
        <ChevronDown className="w-5 h-5 text-neutral-600 transition-colors duration-300 group-hover:text-cyan-400" />
      </motion.a>
    </section>
  );
};

export default HeroSection;