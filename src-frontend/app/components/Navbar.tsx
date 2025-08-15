// src-frontend/app/components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Github, Menu, X } from 'lucide-react';

const navLinks = [
  { title: "Features", href: "/#features" },
  { title: "Our Vision", href: "/#story" },
  { title: "Principles", href: "/#principles" },
  { title: "Manifesto", href: "/manifesto" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // This handler is now ONLY for smooth scrolling
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    // If we're not on the homepage, this link will navigate us there first.
    // The smooth scroll is primarily for when we are already on the homepage.
    if (pathname === '/') {
      e.preventDefault();
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Always close mobile menu on click
  };
  
  // Effect to handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-glass-dark py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        <Link href="/" className="text-2xl font-bold text-text-primary tracking-tighter">wise</Link>

        {/* Desktop Links - WITH CORRECTED LOGIC */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isScrollLink = link.href.startsWith('/#');
            return isScrollLink ? (
              <a key={link.title} href={link.href} onClick={(e) => handleSmoothScroll(e, link.href.substring(1))} className="text-sm text-text-secondary hover:text-white transition-colors cursor-pointer">
                {link.title}
              </a>
            ) : (
              <Link key={link.title} href={link.href} className="text-sm text-text-secondary hover:text-white transition-colors">
                {link.title}
              </Link>
            )
          })}
        </div>

        {/* Desktop CTA & GitHub */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/daveAnalyst/EngelBERT" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-text-secondary hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <Link href="https://github.com/daveAnalyst/EngelBERT/releases/latest" target="_blank" className="btn-primary text-sm px-4 py-2">
            Download
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - WITH CORRECTED LOGIC */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute left-0 w-full bg-glass-dark border-t border-border-primary"
          >
            <div className="flex flex-col items-center space-y-6 py-8">
              {navLinks.map((link) => {
                const isScrollLink = link.href.startsWith('/#');
                return isScrollLink ? (
                  <a key={link.title} href={link.href} onClick={(e) => handleSmoothScroll(e, link.href.substring(1))} className="text-xl text-text-secondary hover:text-white transition-colors cursor-pointer">
                    {link.title}
                  </a>
                ) : (
                  <Link key={link.title} href={link.href} onClick={() => setIsOpen(false)} className="text-xl text-text-secondary hover:text-white transition-colors">
                    {link.title}
                  </Link>
                )
              })}
              {/* Mobile CTA section */}
              <div className="pt-4 flex items-center gap-6">
                 <a href="https://github.com/daveAnalyst/EngelBERT" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-text-secondary hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <Link href="https://github.com/daveAnalyst/EngelBERT/releases/latest" target="_blank" className="btn-primary px-6 py-2">
                  Download
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};