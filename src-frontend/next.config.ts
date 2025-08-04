// src-frontend/next.config.ts (The Final, Corrected Version)
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This is the magic line that tells Next.js to create the static version.
  // It is the only thing we need to add here.
  output: 'export',
};

export default nextConfig;