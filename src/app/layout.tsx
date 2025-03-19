import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Paul Paterson',
  description:
    "I'm Paul Paterson, a software engineer, dad, husband, and fixer of things! I am passionate about building, whether it&apos;s with code or with my hands. Sometimes I write about it.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='dark scroll-smooth'>
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <Header />
        <main className='grid flex-1 grid-rows-1'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
