import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.unsplash.com', 'drive.google.com'],
  },
};

// module.exports = {
//   env: {
//     CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
//     CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
//   },
// }

export default nextConfig;
