import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  devIndicators: false,
  sassOptions: {
    implementation: 'sass-embedded',
  },
  output: 'export', // see if this fix page title and favicon not showing in catalinamcquade.com
}

export default nextConfig
