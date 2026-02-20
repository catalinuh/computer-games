import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  devIndicators: false,
  sassOptions: {
    implementation: 'sass-embedded',
  },
  turbopack: (config) => {
    config.cache.compression = 'brotli'
    return config
  },
}

export default nextConfig
