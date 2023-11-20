import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {Nav} from './nav'
import {Footer} from './nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Personal Portfolio',
  description: 'Personal Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Nav></Nav>
        {children}
        <Footer></Footer>

        </body>
          </html>
  )
}
