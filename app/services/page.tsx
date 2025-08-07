import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Thermometer, Truck, Shield, Clock, Heart, Pill, Flower2, ChefHat, Building2, CheckCircle, Package, Zap, MapPin, Home } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services de Transport | AZExpress Saint-Denis',
  description: 'Découvrez tous nos services de transport : général, frigorifique, express, déménagement. Solutions complètes à Saint-Denis.',
}

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Package,
      title: 'Transport Général',
      description: 'Transport de marchandises générales, colis, palettes et équipements pour tous secteurs.',
      features: ['Tous types de marchandises', 'Véhicules adaptés', 'Suivi en temps réel', 'Assurance incluse'],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Thermometer,
      title: 'Transport Frigorifique',
      description: 'Option température contrôlée pour vos produits sensibles avec respect de la chaîne du froid.',
      features: ['Température -25°C à +25°C', 'Traçabilité complète', 'Normes HACCP/ATP', 'Produits pharmaceutiques'],
      color: 'bg-glacier/10 text-glacier'
    },
    {
      icon: Zap,
      title: 'Transport Express',
      description: 'Livraisons urgentes et transport express pour vos besoins prioritaires.',
      features: ['Livraison même jour', 'Service 24h/7j', 'Suivi temps réel', 'Garantie horaire'],
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Home,
      title: 'Déménagement',
      description: 'Solutions complètes de déménagement pour particuliers et entreprises.',
      features: ['Emballage professionnel', 'Montage/démontage', 'Assurance déménagement', 'Garde-meuble'],
      color: 'bg-green-100 text-green-600'
    }
  ]

  const specializedServices = [
    {
      icon: Pill,
      title: 'Transport Pharmaceutique',
      description: 'Transport sécurisé de médicaments, vaccins et produits de santé.',
      sectors: ['Pharmacies', 'Laboratoires', 'Hôpitaux', 'Distributeurs médicaux']
    },
    {
      icon: ChefHat,
      title: 'Transport Alimentaire',
      description: 'Livraison de produits frais, surgelés et denrées périssables.',
      sectors: ['Restaurants', 'Supermarchés', 'Grossistes', 'Traiteurs']
    },
    {
      icon: Building2,
      title: 'Transport Industriel',
      description: 'Transport de matières premières, produits finis et équipements.',
      sectors: ['Usines', 'Entrepôts', 'Chantiers', 'Bureaux']
    },
    {
      icon: Flower2,
      title: 'Transport Spécialisé',
      description: 'Transport de produits fragiles, œuvres d\'art et objets précieux.',
      sectors: ['Fleuristes', 'Galeries', 'Antiquaires', 'Collectionneurs']
    }
  ]

  const advantages = [
    'Flotte moderne et diversifiée',
    'Chauffeurs professionnels expérimentés',
    'Système de géolocalisation GPS',
    'Assurance tous risques incluse',
    'Service client disponible 24h/7j',
    'Devis gratuit et sans engagement',
    'Facturation transparente',
    'Respect des délais garantis',
    'Solutions sur mesure',
    'Couverture nationale'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-frost to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-glacier/10 text-glacier hover:bg-glacier/10 mb-4 border-glacier/20">
              🚚 Services Complets
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-night mb-6">
              Nos Services de Transport
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AZExpress propose une gamme complète de services de transport et logistique 
              adaptés à tous vos besoins, du transport général aux solutions spécialisées.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-night mb-4">
              Nos Services Principaux
            </h2>
            <p className="text-xl text-gray-600">
              Solutions complètes pour tous vos besoins de transport
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-night">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-frost">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-night mb-4">
              Services Spécialisés
            </h2>
            <p className="text-xl text-gray-600">
              Expertise sectorielle pour des besoins spécifiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedServices.map((service, index) => (
              <Card key={index} className="p-6 bg-white hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="bg-glacier/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-glacier" />
                  </div>
                  <h3 className="text-lg font-semibold text-night mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-1">
                    {service.sectors.map((sector, idx) => (
                      <div key={idx} className="text-xs text-glacier bg-glacier/5 px-2 py-1 rounded inline-block mr-1">
                        {sector}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-night mb-6">
                Pourquoi nous choisir ?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Notre expertise et notre équipement de pointe garantissent 
                un service de qualité supérieure pour tous vos transports.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-glacier mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/flot.png?height=500&width=600"
                alt="Flotte de véhicules AZExpress avec différents types de camions"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="bg-glacier/10 p-2 rounded-full">
                    <Truck className="h-5 w-5 text-glacier" />
                  </div>
                  <div>
                    <div className="font-semibold text-night text-sm">Flotte complète</div>
                    <div className="text-xs text-gray-600">20 véhicules</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-glacier">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Besoin d'une solution transport ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins spécifiques. 
            Devis gratuit et personnalisé sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3 bg-white text-glacier hover:bg-gray-100">
              <Link href="/devis">Demander un Devis</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-3 text-glacier border-white hover:bg-white hover:text-glacier">
              <Link href="/contact">Nous Contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
