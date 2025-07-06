// components/LensSection.tsx
'use client';

import { motion } from 'framer-motion';

// We define our four lenses with their unique properties
const lenses = [
  { 
    name: 'The Scholar', 
    description: 'For rigorous analysis, fact-checking, and data-driven insights.',
    icon: '🔬',
    color: 'border-green-500/30 hover:border-green-500/80 bg-green-900/20'
  },
  { 
    name: 'The Muse', 
    description: 'For creative brainstorming, divergent thinking, and novel ideas.',
    icon: '🎨',
    color: 'border-purple-500/30 hover:border-purple-500/80 bg-purple-900/20'
  },
  { 
    name: 'The Reflector', 
    description: 'For self-inquiry, exploring biases, and mindful journaling.',
    icon: '🪞',
    color: 'border-cyan-500/30 hover:border-cyan-500/80 bg-cyan-900/20'
  },
  { 
    name: 'The Strategist', 
    description: 'For planning, goal-setting, and tactical decision-making.',
    icon: '♟️',
    color: 'border-yellow-500/30 hover:border-yellow-500/80 bg-yellow-900/20'
  },
];

// A reusable card component for each lens
const LensCard = ({ lens, index }: { lens: typeof lenses[0], index: number }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 }
    }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
    className={`p-6 border rounded-2xl transition-all duration-300 backdrop-blur-sm h-full ${lens.color}`}
  >
    <div className="text-3xl mb-4">{lens.icon}</div>
    <h3 className="text-xl font-bold text-neutral-100 mb-2">{lens.name}</h3>
    <p className="text-neutral-400">{lens.description}</p>
  </motion.div>
);

export const LensSection = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-neutral-950/50">
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
            className="text-3xl sm:text-4xl font-bold mb-6 gradient-text"
          >
            An AI that adapts to your mind.
          </motion.h2>

          <motion.p 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg sm:text-xl text-neutral-400 mb-16 max-w-3xl mx-auto"
          >
            Switch between four distinct cognitive lenses to shape the AI's entire reasoning process for any task at hand.
          </motion.p>
          
          {/* The Grid of Lenses */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lenses.map((lens, index) => (
              <LensCard key={lens.name} lens={lens} index={index} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};