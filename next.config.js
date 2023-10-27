module.exports = {
  experimental: {
    serverActions: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    imageSizes: [ 32, 48,  256, 480, 640],
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
},swcMinify: true
}