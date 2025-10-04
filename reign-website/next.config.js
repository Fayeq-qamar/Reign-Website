/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // Disabled due to SWC binary issues on this system
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: [],
  },
  experimental: {
    optimizePackageImports: ['framer-motion', '@react-three/fiber', '@react-three/drei'],
  },
}

module.exports = nextConfig
