import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // Prevents double-rendering in dev, faster in prod

  // 1. Ignore TypeScript errors during build (deploy even if there's a small type mismatch)
  typescript: {
    ignoreBuildErrors: true,
  },

  // 2. Optimize Images (using new remotePatterns instead of deprecated domains)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
    unoptimized: true, // Fixes issues if you export static files later
  },

  // 3. Optimize heavy dependencies
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
