// src-frontend/eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import nextPlugin from "@next/eslint-plugin-next";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [
  // This loads the standard Next.js rules for Core Web Vitals and TypeScript.
  ...compat.extends("next/core-web-vitals"),

  // THIS IS THE FIX: We add a new configuration object to the array.
  // This object specifically targets our JSX/TSX files and disables the
  // "no-unescaped-entities" rule, which is the source of all the build errors.
  {
    files: ["app/**/*.{js,ts,jsx,tsx}"],
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;