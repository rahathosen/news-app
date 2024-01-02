/** @type {import('next').NextConfig} */
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontendNav:true,
  aggressiveFrontEndNavCaching:true,
  reloadOnOnline:true,
  swcMinify:true,
  disable:false,
  workboxOptions: {
    disableDevLogs:true,
  },
});




const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "tailwindui.com",
      },
      {
        protocol: "https",
        hostname: "rahat.vercel.app",
      },
      {
        protocol: "https",
        hostname: "django-news-server.vercel.app",
      },
      {
        protocol: "https",
        hostname: "st2.depositphotos.com",
      },
    ],
  },
};



module.exports =withPWA(nextConfig) ;
