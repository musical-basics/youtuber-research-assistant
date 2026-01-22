import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ClerkProvider } from '@clerk/nextjs' // <--- Added this
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'VibeStudio - YouTuber Research Assistant',
  description: 'AI-powered research assistant for content creators.',
}

export const viewport: Viewport = {
  themeColor: '#0f0f10',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body className={`font-sans antialiased`}>
          {children}
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  )
}
