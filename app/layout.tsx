import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })
const manrope = Manrope({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'LazyBrain',
  description: 'LazyBrain - An app providing multiple choices generated by ai for lazy people',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={manrope.className} suppressHydrationWarning={true}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
