import type { Metadata } from 'next'
import Head from 'next/head'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'

import './styles/globals.scss'
import '98.css'

export const metadata: Metadata = {
  title: 'Catalina McQuade',
  description: 'A personal portfolio website built with Next.js and MUI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* TODO: See if this fixes title issue on deployed and pointed to site */}
      <Head>
        <title>Catalina McQuade</title>
      </Head>
      <body>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  )
}
