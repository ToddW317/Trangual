/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    webpackBuildWorker: true,
    },

  images: {
    domains: ["lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;