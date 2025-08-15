// src-frontend/app/manifesto/page.tsx
'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

// Reusable variants for the typing animation
const sentenceVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.03, // Controls the speed of the typing
    },
  },
};

const letterVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// A helper component for the animated headlines
const AnimatedHeadline = ({ text, as: Component = 'h1', className }: { text: string; as?: 'h1' | 'h2'; className?: string }) => {
  const MotionComponent = motion[Component];
  return (
    <MotionComponent variants={sentenceVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }} className={className}>
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letterVariant}>
          {char}
        </motion.span>
      ))}
    </MotionComponent>
  );
};

const ManifestoPage = () => {
  return (
    <main className="bg-white text-gray-800 font-mono">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-lg leading-relaxed space-y-20">
        
        {/* Section 1: The Opening */}
        <section>
          <AnimatedHeadline as="h1" text="The Only True Path to Personal Superintelligence." className="text-4xl sm:text-5xl font-bold tracking-tight text-black mb-10" />
          <p>
            The world is in a race to build the first Personal Superintelligence. The titans of tech have realized that today's AI, while knowledgeable, is fundamentally dumb. They see humans as wise, but limited. Their solution? To replace the limited human with the 'intelligent' cloud.
          </p>
        </section>

        {/* Section 2: The Conflict */}
        <section>
          <AnimatedHeadline as="h2" text="Their Bet is a Failure of Imagination." className="text-3xl font-bold text-black mb-6" />
          <p>
            Their bet is that the human mind is a bottleneck to be removed. They are building a gilded cage—a centralized cloud brain that makes you dependent, turns your thoughts into their asset, and ultimately, makes you obsolete. We believe this is not just a strategic error; it is a profound disrespect for human potential.
          </p>
        </section>

        {/* Section 3: Our Solution */}
        <section>
          <AnimatedHeadline as="h2" text="Our Bet is on You." className="text-3xl font-bold text-black mb-6" />
          <p>
            We are making a different bet. We bet on human resilience, creativity, and wisdom. Our solution is not replacement; it is a **profound partnership**. We call this **Cognitive Augmentation.**
          </p>
        </section>
        
        {/* Section 4: The Mechanism */}
        <section>
          <AnimatedHeadline as="h2" text="What is Cognitive Augmentation?" className="text-3xl font-bold text-black mb-6" />
          <blockquote className="border-l-2 border-gray-300 pl-6 italic my-10 text-gray-600">
            "It’s the equivalent of a bicycle for our minds."
            <cite className="block text-right mt-2 text-gray-500 not-italic">— Steve Jobs</cite>
          </blockquote>
          <p>
            It’s a bicycle for the mind. A bicycle doesn't replace your legs; it augments them. It makes them superhuman. Wise is that tool. It's a sovereign partner that offloads your cognitive burdens (Perfect Memory), helps you break out of creative ruts (Adaptive Reasoning), and finds the connections you miss (Proactive Intuition). It doesn't think *for* you; it thinks *with* you.
          </p>
        </section>

        {/* Section 5: The Result */}
        <section>
          <AnimatedHeadline as="h2" text="The Result: Your Personal Thought Partner and Helper." className="text-3xl font-bold text-black mb-6" />
          <p>
            This partnership transforms your workflow. It's a partner that helps you co-create your next great idea. And it's a helper that can then orchestrate the tools to bring that idea to life—freeing you to focus on the next breakthrough. It is an AI that walks with you, learning how you think, until it becomes a true extension of your own mind.
          </p>
        </section>

        {/* Section 6: The Cathedral */}
        <section>
          <AnimatedHeadline as="h2" text="The Future is a Conversation." className="text-3xl font-bold text-black mb-6" />
           <blockquote className="border-l-2 border-gray-300 pl-6 italic my-10 text-gray-600">
            "The better we get at getting better, the faster we will get better."
            <cite className="block text-right mt-2 text-gray-500 not-italic">— Douglas Engelbart</cite>
          </blockquote>
          <p>
            This is just the beginning. Imagine a future where your personal AI can have a private, secure conversation with your colleague's AI to find a perfect meeting time. Imagine a world where a doctor's AI in Nairobi can ethically and anonymously learn from the insights of a researcher's AI in Berlin, without either ever sharing raw data. This is the future we are building—a decentralized, collaborative network of intelligence. A 'WiseNet'.
          </p>
        </section>

        {/* Section 7: The Team & Invitation */}
        <section className="text-center pt-16">
          <AnimatedHeadline as="h2" text="Meet the Architects." className="text-3xl font-bold text-black mb-12" />
          <div className="space-y-4 mb-12 text-center text-base">
              <p><strong>Dave </strong> – CEO, Product & Architecture (Nairobi, Kenya 🇰🇪)</p>
              <p><strong>Davin </strong> – CTO, AI & Backend (Berlin, Germany 🇩🇪)</p>
          </div>
          <p className="text-xl text-gray-900 font-medium mb-8">
            The path to a better future is not inevitable; it must be built. Join us.
          </p>
          <Link 
            href="https://tally.so/r/3q8PBG" 
            target="_blank" 
            className="inline-block bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Join the Movement
          </Link>
        </section>
      </div>
    </main>
  );
};

export default ManifestoPage;