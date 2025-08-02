// src-frontend/tailwind.config.ts (The Final, Corrected Version)

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    // These content paths are perfect. They tell Tailwind where to look for class names.
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/globals.css',
  ],
  theme: {
    extend: {
      // THIS IS THE CRITICAL CHANGE:
      // We are ensuring that Tailwind's `font-sans` and `font-mono` utility
      // classes are correctly mapped to the CSS variables we defined in `layout.tsx`.
      // This is the final piece of the font integration puzzle.
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config