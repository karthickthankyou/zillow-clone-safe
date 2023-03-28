/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com', 'res.cloudinary.com', 'picsum.photos'],
  },
  experimental: {
    externalDir: true,
  },
}

module.exports = nextConfig
