import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jeffal Car',
  description: 'Location de voitures à Oujda et dans tout le Maroc. Service de qualité, prix compétitifs.',
  icons: {
    icon: '/jeffal.ico', // Updated favicon path
    apple: '/jeffal.ico', // Also update Apple touch icon
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
