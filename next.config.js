/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable image optimization for Vercel
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Enable strict mode for better debugging
  reactStrictMode: true,
  // Optimize for production
  poweredByHeader: false,
  // Compress responses
  compress: true,
}

module.exports = nextConfig
