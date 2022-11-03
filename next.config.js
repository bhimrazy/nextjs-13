/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com", "www.notebookcheck.net", "bhimraj.com.np"]
  }
}

module.exports = nextConfig
