/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'plus.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'tailwindui.com',
        },
        {
          protocol: 'https',
          hostname: 'rahat.vercel.app',
        },
        {
          protocol: 'https',
          hostname: 'django-news-server.vercel.app',
        },
      ],
    },
  }
module.exports = nextConfig
