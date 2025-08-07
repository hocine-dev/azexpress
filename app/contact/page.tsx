"use client"

import { useState } from 'react'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: '123 Avenue de la République\n93200 Saint-Denis, France',
      link: 'https://maps.google.com/?q=Saint-Denis,France'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '01 23 45 67 89',
      link: 'tel:+33123456789'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@azexpress.fr',
      link: 'mailto:contact@azexpress.fr'
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lun-Ven: 7h-19h\nSam: 8h-16h\nUrgences: 24h/7j',
      link: null
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-frost to-blue-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-glacier/10 text-glacier hover:bg-glacier/10 border-glacier/20 mb-4">
              📞 Nous Contacter
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-night leading-tight mb-6">
              Contactez <span className="text-glacier">AZExpress</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une question ? Un devis ? Notre équipe est à votre disposition 
              pour répondre à tous vos besoins en transport et logistique.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-night mb-8">
                Informations de Contact
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-glacier/10 p-3 rounded-lg">
                      <info.icon className="h-6 w-6 text-glacier" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-night mb-1">{info.title}</h3>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-gray-600 hover:text-glacier transition-colors whitespace-pre-line"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-glacier/10 rounded-lg">
                <h3 className="font-semibold text-night mb-2">Urgences 24h/7j</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Pour les transports urgents, contactez notre ligne d'urgence :
                </p>
                <a 
                  href="tel:+33123456789"
                  className="text-glacier font-semibold hover:text-blue-600"
                >
                  01 23 45 67 89
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Send className="h-6 w-6 text-glacier" />
                    <span className="text-night">Envoyez-nous un message</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-night mb-2">
                        Message envoyé !
                      </h3>
                      <p className="text-gray-600">
                        Nous vous répondrons dans les plus brefs délais.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nom complet *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Votre nom"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="votre@email.fr"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Téléphone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="01 23 45 67 89"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Sujet *</Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Objet de votre demande"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Décrivez votre besoin en transport..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full bg-glacier hover:bg-blue-600" size="lg">
                        <Send className="mr-2 h-4 w-4" />
                        Envoyer le message
                      </Button>

                      <p className="text-sm text-gray-500 text-center">
                        * Champs obligatoires. Nous nous engageons à répondre sous 24h.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-frost">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-night mb-4">
              Notre Localisation
            </h2>
            <p className="text-xl text-gray-600">
              Situés au cœur de Saint-Denis pour vous servir rapidement
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.9!2d2.3522!3d48.8566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sSaint-Denis%2C%20France!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation AZExpress à Saint-Denis"
              ></iframe>
            </div>
            <div className="p-6 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-night">AZExpress</h3>
                  <p className="text-gray-600">123 Avenue de la République, 93200 Saint-Denis</p>
                </div>
                <Button asChild variant="outline" className="border-glacier text-glacier hover:bg-glacier hover:text-white">
                  <a 
                    href="https://maps.google.com/?q=Saint-Denis,France"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir sur Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
