import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/MyActivity',
  images: {
    unoptimized: true,
  },
  devIndicators: false,
};

export default nextConfig;
