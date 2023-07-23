/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
       domains: [
      'via.placeholder.com',
      'res.cloudinary.com',
      'wp-tid.zillowstatic.com',
    ],
  },
}

module.exports = nextConfig
