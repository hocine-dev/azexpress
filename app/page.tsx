import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Truck, Shield, Clock, Star, CheckCircle, Thermometer, Users, Award, ArrowRight, Package, Zap, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AZExpress - Transport et Logistique Saint-Denis | Solutions Complètes',
  description: 'AZExpress, votre partenaire transport à Saint-Denis. Transport général, frigorifique, express et logistique. Devis gratuit et service professionnel.',
}

export default function HomePage() {
  const features = [
    {
      icon: Truck,
      title: 'Transport Général',
      description: 'Solutions complètes pour tous vos besoins de transport'
    },
    {
      icon: Thermometer,
      title: 'Option Frigorifique',
      description: 'Chaîne du froid garantie de -25°C à +25°C'
    },
    {
      icon: Zap,
      title: 'Transport Express',
      description: 'Livraisons urgentes et transport en express'
    },
    {
      icon: Shield,
      title: 'Assurance Complète',
      description: 'Vos marchandises sont assurées pendant tout le transport'
    },
    {
      icon: Clock,
      title: 'Service 24h/7j',
      description: 'Disponibilité maximale pour vos urgences'
    },
    {
      icon: Users,
      title: 'Équipe Experte',
      description: 'Chauffeurs professionnels et expérimentés'
    }
  ]

  const services = [
    {
      icon: Package,
      title: 'Transport Standard',
      description: 'Transport de marchandises générales, colis et palettes'
    },
    {
      icon: Thermometer,
      title: 'Transport Frigorifique',
      description: 'Option température contrôlée pour produits sensibles'
    },
    {
      icon: Zap,
      title: 'Transport Express',
      description: 'Livraisons urgentes et transport en express'
    },
    {
      icon: MapPin,
      title: 'Déménagement',
      description: 'Solutions de déménagement pour particuliers et entreprises'
    }
  ]

  const steps = [
    {
      number: '01',
      title: 'Demande de Devis',
      description: 'Remplissez notre formulaire en ligne en 2 minutes'
    },
    {
      number: '02',
      title: 'Confirmation',
      description: 'Nous validons votre demande et planifions l\'intervention'
    },
    {
      number: '03',
      title: 'Transport Sécurisé',
      description: 'Nos experts transportent vos marchandises en toute sécurité'
    }
  ]

  const testimonials = [
    {
      name: 'Marie Dubois',
      company: 'Pharmacie Centrale',
      content: 'Service impeccable pour nos livraisons. L\'option frigorifique est parfaite pour nos médicaments.',
      rating: 5
    },
    {
      name: 'Jean Martin',
      company: 'Restaurant Le Gourmet',
      content: 'AZExpress nous fait confiance depuis 3 ans. Toujours ponctuels et professionnels.',
      rating: 5
    },
    {
      name: 'Sophie Laurent',
      company: 'Entreprise BioTech',
      content: 'Transport de nos échantillons en toute sécurité. Service client exceptionnel.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-frost to-blue-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-glacier/10 text-glacier hover:bg-glacier/10 border-glacier/20">
                  🚚 Solutions Transport Complètes
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-night leading-tight">
                  Transport et
                  <span className="text-glacier"> Logistique</span>
                  <br />à Saint-Denis
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  AZExpress, votre partenaire transport complet. Solutions générales, 
                  frigorifiques, express et déménagement. Service professionnel 24h/7j.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-glacier hover:bg-blue-600 text-white text-lg px-8 py-3">
                  <Link href="/devis">
                    Obtenez votre devis gratuit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-3 border-glacier text-glacier hover:bg-glacier hover:text-white">
                  <Link href="/contact">Nous contacter</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-night">1000+</div>
                  <div className="text-sm text-gray-600">Transports réalisés</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-night">24h/7j</div>
                  <div className="text-sm text-gray-600">Service disponible</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-night">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction client</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/hero.png?height=600&width=800"
                alt="Camion de transport AZExpress sur route française"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-night">Service complet</div>
                    <div className="text-sm text-gray-600">Transport & Logistique</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-night mb-4">
              Nos Services de Transport
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solutions complètes adaptées à tous vos besoins de transport et logistique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-frost">
                <CardContent className="space-y-4">
                  <div className="bg-glacier/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <service.icon className="h-8 w-8 text-glacier" />
                  </div>
                  <h3 className="text-xl font-semibold text-night">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-frost">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-night mb-4">
              Pourquoi choisir AZExpress ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre expertise et notre flexibilité garantissent des solutions adaptées à chaque besoin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow bg-white">
                <CardContent className="space-y-4">
                  <div className="bg-glacier/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <feature.icon className="h-8 w-8 text-glacier" />
                  </div>
                  <h3 className="text-xl font-semibold text-night">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-night mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-600">
              Un processus simple et efficace en 3 étapes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-glacier text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-night mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-glacier/20 transform translate-x-8"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-glacier hover:bg-blue-600 text-white">
              <Link href="/devis">Commencer maintenant</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-frost">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-night mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-gray-600">
              Plus de 1000 clients nous font confiance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-white">
                <CardContent className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-night">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-glacier">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Prêt à transporter vos marchandises ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Obtenez votre devis personnalisé en moins de 2 minutes. 
            Service disponible 24h/7j dans toute la France.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3 bg-white text-glacier hover:bg-gray-100">
              <Link href="/devis">Devis Gratuit Instantané</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-3 text-glacier border-white hover:bg-white hover:text-glacier">
              <Link href="tel:+33123456789">Appeler maintenant</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
