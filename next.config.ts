import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Enable type checking during build time
    ignoreBuildErrors: true, // Set to false in production
  },
};

export default nextConfig;
