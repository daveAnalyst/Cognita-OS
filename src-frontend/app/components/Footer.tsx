// src-frontend/app/components/Footer.tsx
'use client';

import Link from 'next/link';
import { Github, Twitter, BookText, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="text-center py-12 px-4 border-t border-border-primary">
      <div className="max-w-7xl mx-auto">
        
        {/* Grounded in Research Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-text-primary">Grounded in Research</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <a 
              href="https://www.kaggle.com/competitions/google-gemma-3n-impact-challenge/discussion/518933" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent-primary hover:underline text-sm flex items-center gap-2"
            >
              <BookText className="w-4 h-4" />
              Read our Kaggle Writeup
            </a>
            <a 
              href="https://doi.org/10.5281/zenodo.16020727" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-primary hover:underline text-sm flex items-center gap-2"
            >
              <BookText className="w-4 h-4" />
              Read our Foundational Paper
            </a>
          </div>
        </div>

        {/* Social and Legal Links Section */}
        <div className="flex justify-center items-center gap-6 mb-8">
          <Link href="/manifesto" className="text-text-secondary hover:text-white transition-colors text-sm font-medium">
            Manifesto
          </Link>
          <a href="https://github.com/daveAnalyst/EngelBERT" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-text-secondary hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://twitter.com/Omungala_dave" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-text-secondary hover:text-white transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="mailto:davidomungala3@gmail.com" aria-label="Contact" className="text-text-secondary hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </a>
           <Link href="/privacy" className="text-text-secondary hover:text-white transition-colors text-sm font-medium">
            Privacy
          </Link>
        </div>

        {/* Copyright Notice */}
        <p className="text-text-tertiary text-xs">
          © {new Date().getFullYear()} Wise by the Engelbert Project. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};