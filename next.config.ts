import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the workspace root to this project so Next.js doesn't pick up an
    // unrelated lockfile higher up the directory tree.
    root: __dirname,
  },
};

export default nextConfig;
