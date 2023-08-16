const { headers } = require('./src/config/headers');
const { rewrites } = require('./src/config/route');

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: '',
  pagesDir: 'src/pages',
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [''],
    path: '/_next/image',
    loader: 'default',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    appDir: true,
  },
  async headers() {
    return headers;
  },
  async rewrites() {
    return rewrites;
  },
}

module.exports = nextConfig
