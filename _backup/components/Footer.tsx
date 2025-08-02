// src-frontend/app/components/Footer.tsx
'use client';

import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="text-center pt-16 mt-16 border-t border-border-primary">
      <h3 className="text-xl font-bold mb-4 text-text-primary">Grounded in Research</h3>
      <p className="text-text-secondary mb-6">
        Built on the foundational work of Engelbart, Licklider, and Kay. 
        <Link 
          href="https://doi.org/10.5281/zenodo.16020726" 
          target="_blank" 
          className="text-accent-primary hover:underline ml-2"
        >
          Read the academic paper →
        </Link>
      </p>
      <div className="flex justify-center gap-8 text-text-secondary text-sm">
        <Link href="/privacy" className="hover:text-white transition-colors">
          Privacy Policy
        </Link>
        <Link href="mailto:davidomungala3@gmail.com" className="hover:text-white transition-colors">
          Contact
        </Link>
        <Link href="https://twitter.com/Omungala_dave" target="_blank" className="hover:text-white transition-colors">
          Follow Updates
        </Link>
      </div>
      <p className="text-text-tertiary text-sm mt-8">
        © {new Date().getFullYear()} The EngelBERT Project
      </p>
    </footer>
  );
};