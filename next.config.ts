import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ruralshoresskillsacademy.com',
      },
      {
        protocol: 'https',
        hostname: 'ruralshoresskillsacademy.com',
      },
      {
        protocol: 'https',
        hostname: '**.wp.com', // Jetpack CDN if used
      },
    ],
  },
};

export default nextConfig;
