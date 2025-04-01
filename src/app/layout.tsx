import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Theme, Box, Flex } from '@radix-ui/themes'

import Header from '@/components/header'
import Footer from '@/components/footer'

import './globals.css'
import '@radix-ui/themes/styles.css'

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
      <body className={`${inter.className} min-h-screen`}>
        <Theme accentColor='iris' grayColor='slate' asChild>
          <Flex direction='column' height='full'>
            <Header />
            <Box asChild flexGrow='1' className='bg-surface-2'>
              <main className='from-primary/10 via-surface-2 to-primary/10 bg-linear-160'>
                {children}
              </main>
            </Box>
            <Footer />
          </Flex>
        </Theme>
      </body>
    </html>
  )
}
