import NavBar from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Verinno',
  description: 'The Future of Grid Optimization',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
      <div className='fixed top-0 left-0 right-0 z-50'>
        <NavBar />
      </div>
        {children}
        <Footer />
      </body>
    </html>
  )
}
