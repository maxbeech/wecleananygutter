import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/layout/Footer'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata: Metadata = {
  title: 'We Clean Any Gutter | Professional Gutter Cleaning Services in Surrey, Sussex, Kent & London',
  description: 'Professional gutter cleaning, repair & maintenance services. No ladders system, camera inspections, and competitive prices. Serving Surrey, Sussex, Kent, and London.',
  keywords: 'gutter cleaning, gutter repair, Kent, Surrey, Sussex, London, professional gutter services, gutter maintenance, gutter vacuum, no ladders',
  icons: {
    icon: '/media/logo.png',
    apple: '/media/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        {/* Quick Contact Bar */}
        <div className="bg-blue-900 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center space-x-4 text-sm">
              <a href="tel:01372703033" className="flex items-center hover:text-blue-200 transition-colors">
                <FaPhone className="mr-2" /> 01372 703033
              </a>
              <a 
                href="https://wa.me/447123456789" 
                className="flex items-center hover:text-blue-200 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="mr-2" /> Chat on WhatsApp
              </a>
            </div>
            <div>
              <Link href="/quote" className="text-sm font-medium bg-green-600 hover:bg-green-700 px-3 py-1 rounded-md transition-colors">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
        
        <Navbar />
        
        <main>
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  )
} 