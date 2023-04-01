/** @type {import('next').NextConfig} */

console.log("process.env.WORDPRESS_URL", process.env.WORDPRESS_URL.split("//")[1]);

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      process.env.WORDPRESS_URL.split("//")[1],
    ],
  },
}

module.exports = nextConfig
