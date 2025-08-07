import Link from 'next/link'
import { Truck, Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-night text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Truck className="h-8 w-8 text-glacier" />
              <span className="text-xl font-bold">AZExpress</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Votre partenaire transport et logistique à Saint-Denis. Solutions complètes 
              de transport général, frigorifique, express et déménagement pour particuliers et professionnels.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-glacier transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-glacier transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-glacier transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-glacier transition-colors">Accueil</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-glacier transition-colors">Services</Link></li>
              <li><Link href="/devis" className="text-gray-300 hover:text-glacier transition-colors">Devis Gratuit</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-glacier transition-colors">À propos</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-glacier transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-glacier" />
                <span className="text-gray-300 text-sm">123 Avenue de la République<br />93200 Saint-Denis</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-glacier" />
                <a href="tel:+33123456789" className="text-gray-300 hover:text-glacier transition-colors text-sm">
                  01 23 45 67 89
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-glacier" />
                <a href="mailto:contact@azexpress.fr" className="text-gray-300 hover:text-glacier transition-colors text-sm">
                  contact@azexpress.fr
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} AZExpress. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/legal/mentions-legales" className="text-gray-400 hover:text-glacier text-sm transition-colors">
                Mentions Légales
              </Link>
              <Link href="/legal/privacy" className="text-gray-400 hover:text-glacier text-sm transition-colors">
                Politique de Confidentialité
              </Link>
              <Link href="/legal/terms" className="text-gray-400 hover:text-glacier text-sm transition-colors">
                Conditions d'Utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
