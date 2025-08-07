import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AZExpress - Transport et Logistique Saint-Denis | Solutions Complètes',
  description: 'AZExpress, votre partenaire transport à Saint-Denis. Transport général, frigorifique, express et logistique. Devis gratuit et service professionnel.',
  keywords: 'transport Saint-Denis, logistique, transport frigorifique, déménagement, transport express, AZExpress',
  authors: [{ name: 'AZExpress' }],
  openGraph: {
    title: 'AZExpress - Transport et Logistique Saint-Denis',
    description: 'Solutions complètes de transport et logistique à Saint-Denis',
    locale: 'fr_FR',
    type: 'website',
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
