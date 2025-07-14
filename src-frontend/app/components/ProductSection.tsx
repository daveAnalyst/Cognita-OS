// components/ProductSection.tsx
'use client';

import { motion } from 'framer-motion';

// The text for our animated terminal
const terminalLines = [
  { text: "Booting Cognita Kernel..." },
  { text: "[INIT] SageMind Orchestrator online." },
  { text: "[SCAN] Deconstructing user intent..." },
  { text: "[LOAD] Activating Scholar Lens..." },
  { text: "[OK] Reasoning engine engaged." },
  { text: "[RDY] Ready for cognitive partnership.", color: "text-green-400" },
];

export const ProductSection = () => {
  return (
    // We add an id here so the hero section's scroll button can link to it
    <section id="product" className="relative py-24 sm:py-32 overflow-hidden">
      
      {/* Subtle background element to separate this section */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-neutral-950 to-black" />

      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { staggerChildren: 0.2, duration: 0.8, ease: 'easeOut' }
            },
          }}
        >
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            A Lab Partner, not a Butler.
          </motion.h2>
          
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg sm:text-xl text-neutral-400 mb-12 max-w-3xl mx-auto"
          >
            Introducing <span className="text-neutral-100 font-bold">Wise: The Sovereign Scholar Edition</span>. A private, on-device Thinking Environment designed for students, researchers, and builders.
          </motion.p>
          
          {/* Refined Terminal Visual */}
          <motion.div
            variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
            className="bg-black/80 border border-neutral-800 rounded-xl p-4 sm:p-6 font-mono text-sm sm:text-base max-w-2xl mx-auto text-left relative overflow-hidden bg-glass-dark"
          >
            {/* Terminal header */}
            <div className="flex items-center mb-4">
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
              </div>
            </div>

            {/* Animated text lines using Framer Motion's stagger effect */}
            <motion.div
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.4 } },
              }}
            >
              {terminalLines.map((line, index) => (
                <motion.p
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className={`flex items-center ${line.color || 'text-neutral-400'}`}
                >
                  <span className="text-neutral-600 mr-2">{'>'}</span>
                  <span>{line.text}</span>
                </motion.p>
              ))}
              
              {/* The final blinking cursor */}
              <motion.div
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                transition={{ delay: terminalLines.length * 0.4 }}
                className="flex items-center"
              >
                <span className="text-neutral-600 mr-2">{'>'}</span>
                <span className="bg-green-400 w-2 h-4 animate-pulse"></span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};