import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  devIndicators: false,
  sassOptions: {
    implementation: 'sass-embedded',
  },
  basePath: '/portfolio-new', // Tells Next.js your site is at a sub-path on GitHub Pages
  output: 'export', // Exports Next.js as static HTML/CSS/JS (required for GitHub Pages)
}

export default nextConfig
