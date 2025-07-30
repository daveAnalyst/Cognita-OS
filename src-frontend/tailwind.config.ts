// src-frontend/tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    // This tells Tailwind to scan all of your pages and components.
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // THIS IS THE CRITICAL FIX: We are now explicitly telling Tailwind
    // to scan your globals.css file. It will now see your custom
    // utility classes like .gradient-text and .bg-glass-dark and
    // know that they are important and should not be purged.
    './app/globals.css',
  ],
  theme: {
    extend: {
      // Keep this minimal. Your globals.css is the source of truth for your design.
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config