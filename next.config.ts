import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["recharts"],
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
