import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Users, Award, Truck, MapPin, Calendar, Target, Eye, Heart } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'À Propos d\'AZExpress | Transport et Logistique Saint-Denis',
  description: 'Découvrez l\'histoire d\'AZExpress, votre partenaire transport complet à Saint-Denis. Notre équipe, nos services et nos valeurs.',
}

export default function AboutPage() {
  const stats = [
    { icon: Calendar, label: 'Années d\'expérience', value: '15+' },
    { icon: Truck, label: 'Véhicules dans notre flotte', value: '15' },
    { icon: Users, label: 'Transports réalisés', value: '1000+' },
    { icon: MapPin, label: 'Villes desservies', value: '100+' }
  ]

  const team = [
    {
      name: 'Pierre Dubois',
      role: 'Directeur Général',
      experience: '20 ans d\'expérience en logistique',
      image: '/r2.png?height=300&width=300'
    },
    {
      name: 'Marie Martin',
      role: 'Responsable Opérations',
      experience: 'Experte en chaîne du froid',
      image: '/r1.png?height=300&width=300'
    },
    {
      name: 'Jean Leroy',
      role: 'Chef d\'Équipe',
      experience: '15 ans de conduite frigorifique',
      image: '/r4.Png?height=300&width=300'
    },
    {
      name: 'Sophie Bernard',
      role: 'Service Client',
      experience: 'Spécialiste relation client',
      image: '/r3.png?height=300&width=300'
    }
  ]

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque transport, avec un service adapté à tous vos besoins.'
    },
    {
      icon: Heart,
      title: 'Engagement',
      description: 'Nous nous engageons à respecter vos délais et la sécurité de vos marchandises.'
    },
    {
      icon: Users,
      title: 'Proximité',
      description: 'Une relation de confiance avec nos clients basée sur l\'écoute et la réactivité.'
    }
  ]

  const fleet = [
    {
      type: 'Véhicules Légers',
      count: '5',
      capacity: 'Jusqu\'à 1 tonne',
      temperature: '-25°C à +25°C'
    },
    {
      type: 'Camions Moyens',
      count: '7',
      capacity: '1 à 5 tonnes',
      temperature: '-25°C à +25°C'
    },
    {
      type: 'Poids Lourds',
      count: '3',
      capacity: '5 à 20 tonnes',
      temperature: '-25°C à +25°C'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-frost to-blue-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-glacier/10 text-glacier hover:bg-glacier/10 border-glacier/20 mb-4">
              🏢 Notre Histoire
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-night leading-tight mb-6">
              À Propos d'<span className="text-glacier">AZExpress</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Depuis 2009, nous sommes votre partenaire de confiance pour tous vos besoins 
              en transport et logistique à Saint-Denis et dans toute la France.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-glacier/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-glacier" />
                </div>
                <div className="text-3xl font-bold text-night mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-frost">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-night mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Fondée en 2009 par Pierre Dubois, AZExpress est née d'un constat simple : 
                  le besoin croissant de solutions de transport et logistique complètes et fiables 
                  en région parisienne.
                </p>
                <p>
                  Partant d'un seul véhicule, nous avons progressivement développé notre flotte 
                  et notre expertise pour devenir aujourd'hui un acteur de référence 
                  du transport général, frigorifique et express à Saint-Denis.
                </p>
                <p>
                  Notre croissance s'appuie sur des valeurs fortes : flexibilité, ponctualité, 
                  et service client irréprochable. Ces principes nous ont permis 
                  de fidéliser plus de 1000 clients dans des secteurs variés.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/trans.png?height=500&width=600"
                alt="Histoire de l'entreprise AZExpress avec évolution de la flotte"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-night mb-4">
              Notre Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 hover:shadow-lg transition-shadow border-frost">
              <CardContent>
                <div className="bg-glacier/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-glacier" />
                </div>
                <h3 className="text-2xl font-bold text-night mb-4">Notre Mission</h3>
                <p className="text-gray-600">
                  Fournir des solutions de transport complètes et flexibles adaptées à tous vos besoins. 
                  Transport général, frigorifique, express et déménagement - nous nous engageons à offrir 
                  un service de qualité supérieure, ponctuel et fiable.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-frost">
              <CardContent>
                <div className="bg-glacier/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-glacier" />
                </div>
                <h3 className="text-2xl font-bold text-night mb-4">Notre Vision</h3>
                <p className="text-gray-600">
                  Devenir le leader régional des solutions de transport et logistique en développant 
                  des services innovants et durables. Nous visons l'excellence opérationnelle 
                  tout en contribuant à la préservation de l'environnement.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-glacier/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-glacier" />
                </div>
                <h3 className="text-xl font-semibold text-night mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-20 bg-frost">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-night mb-4">
              Notre Flotte
            </h2>
            <p className="text-xl text-gray-600">
              15 véhicules modernes pour tous vos besoins de transport
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {fleet.map((vehicle, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white border-frost">
                <CardContent>
                  <div className="text-center">
                    <div className="bg-glacier/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Truck className="h-8 w-8 text-glacier" />
                    </div>
                    <h3 className="text-xl font-semibold text-night mb-2">{vehicle.type}</h3>
                    <div className="text-3xl font-bold text-glacier mb-2">{vehicle.count}</div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>{vehicle.capacity}</div>
                      <div>{vehicle.temperature}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <img
              src="/frigo.png?height=400&width=800"
              alt="Flotte de véhicules AZExpress au dépôt"
              className="rounded-2xl shadow-xl w-full max-w-4xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-night mb-4">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600">
              Des professionnels expérimentés à votre service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-frost">
                <CardContent>
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={`Photo de ${member.name}, ${member.role} chez AZExpress`}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-night mb-1">{member.name}</h3>
                  <div className="text-glacier font-medium mb-2">{member.role}</div>
                  <p className="text-sm text-gray-600">{member.experience}</p>
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
            Rejoignez nos clients satisfaits
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Faites confiance à notre expertise pour tous vos besoins de transport. 
            Plus de 1000 clients nous font déjà confiance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3 bg-white text-glacier hover:bg-gray-100">
              <Link href="/devis">Demander un Devis</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-glacier">
              <Link href="/contact">Nous Contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
