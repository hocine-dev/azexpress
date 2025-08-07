"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MapPin, Truck, Euro, Clock, Calendar, Package } from 'lucide-react'
import Link from 'next/link'

interface QuoteData {
  departure: string
  arrival: string
  date: string
  time: string
  goodsType: string
  weight: number
  temperature: string
  urgency: string
  transportType: string
}

export default function DevisPage() {
  const [formData, setFormData] = useState<QuoteData>({
    departure: '',
    arrival: '',
    date: '',
    time: '',
    goodsType: '',
    weight: 1,
    temperature: '',
    urgency: 'standard',
    transportType: 'general'
  })
  
  const [quote, setQuote] = useState<number | null>(null)
  const [showQuote, setShowQuote] = useState(false)

  const calculateQuote = () => {
    // Algorithme de prix de base
    let basePrice = 120 // Prix de base en euros
    
    // Facteur distance (estimé 50km moyenne)
    const estimatedDistance = 50
    const distancePrice = estimatedDistance * 1.2
    
    // Facteur poids
    const weightPrice = formData.weight * 8
    
    // Facteur type de transport
    const typeMultiplier = formData.transportType === 'refrigerated' ? 1.4 : 
                          formData.transportType === 'express' ? 1.6 : 
                          formData.transportType === 'moving' ? 1.3 : 1.0
    
    // Facteur urgence
    const urgencyMultiplier = formData.urgency === 'urgent' ? 1.4 : 
                             formData.urgency === 'express' ? 1.8 : 1.0
    
    const totalPrice = (basePrice + distancePrice + weightPrice) * typeMultiplier * urgencyMultiplier
    
    setQuote(Math.round(totalPrice))
    setShowQuote(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    calculateQuote()
  }

  const handleInputChange = (field: keyof QuoteData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-frost py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-night mb-4">
            Simulateur de Devis
          </h1>
          <p className="text-xl text-gray-600">
            Obtenez votre estimation de prix en quelques clics
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulaire */}
          <div className="lg:col-span-2">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Truck className="h-6 w-6 text-glacier" />
                  <span>Détails de votre transport</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Type de transport */}
                  <div className="space-y-2">
                    <Label>Type de transport *</Label>
                    <Select value={formData.transportType} onValueChange={(value) => handleInputChange('transportType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez le type de transport" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">Transport Général</SelectItem>
                        <SelectItem value="refrigerated">Transport Frigorifique</SelectItem>
                        <SelectItem value="express">Transport Express</SelectItem>
                        <SelectItem value="moving">Déménagement</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Lieux */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="departure">Lieu de départ *</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="departure"
                          placeholder="Adresse de départ"
                          className="pl-10"
                          value={formData.departure}
                          onChange={(e) => handleInputChange('departure', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="arrival">Lieu d'arrivée *</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="arrival"
                          placeholder="Adresse d'arrivée"
                          className="pl-10"
                          value={formData.arrival}
                          onChange={(e) => handleInputChange('arrival', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Date et heure */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Date souhaitée *</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="date"
                          type="date"
                          className="pl-10"
                          value={formData.date}
                          onChange={(e) => handleInputChange('date', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Heure souhaitée</Label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="time"
                          type="time"
                          className="pl-10"
                          value={formData.time}
                          onChange={(e) => handleInputChange('time', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Type de marchandises */}
                  <div className="space-y-2">
                    <Label htmlFor="goodsType">Type de marchandises *</Label>
                    <Textarea
                      id="goodsType"
                      placeholder="Décrivez vos marchandises (meubles, équipements, produits alimentaires...)"
                      value={formData.goodsType}
                      onChange={(e) => handleInputChange('goodsType', e.target.value)}
                      required
                    />
                  </div>

                  {/* Poids */}
                  <div className="space-y-2">
                    <Label htmlFor="weight">Poids estimé (en tonnes)</Label>
                    <div className="relative">
                      <Package className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="weight"
                        type="number"
                        min="0.1"
                        max="20"
                        step="0.1"
                        placeholder="1.0"
                        className="pl-10"
                        value={formData.weight}
                        onChange={(e) => handleInputChange('weight', parseFloat(e.target.value) || 1)}
                      />
                    </div>
                  </div>

                  {/* Température (si frigorifique) */}
                  {formData.transportType === 'refrigerated' && (
                    <div className="space-y-2">
                      <Label>Température requise *</Label>
                      <Select value={formData.temperature} onValueChange={(value) => handleInputChange('temperature', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez la température" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="frozen">Congelé (-25°C à -18°C)</SelectItem>
                          <SelectItem value="refrigerated">Réfrigéré (0°C à +8°C)</SelectItem>
                          <SelectItem value="controlled">Température contrôlée (+15°C à +25°C)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {/* Urgence */}
                  <div className="space-y-2">
                    <Label>Urgence</Label>
                    <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard (48h)</SelectItem>
                        <SelectItem value="urgent">Urgent (24h) +40%</SelectItem>
                        <SelectItem value="express">Express (même jour) +80%</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="w-full bg-glacier hover:bg-blue-600 text-white" size="lg">
                    Calculer mon devis
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Résultat du devis */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Euro className="h-6 w-6 text-glacier" />
                  <span>Votre Devis</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!showQuote ? (
                  <div className="text-center py-8">
                    <div className="bg-frost rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Truck className="h-8 w-8 text-gray-400" />
                    </div>
                    <p className="text-gray-500">
                      Remplissez le formulaire pour obtenir votre estimation
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-glacier mb-2">
                        {quote}€
                      </div>
                      <p className="text-gray-600">Prix estimé TTC</p>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Type:</span>
                        <span className="font-medium">
                          {formData.transportType === 'general' ? 'Général' :
                           formData.transportType === 'refrigerated' ? 'Frigorifique' :
                           formData.transportType === 'express' ? 'Express' : 'Déménagement'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Trajet:</span>
                        <span className="font-medium">~50km</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Poids:</span>
                        <span className="font-medium">{formData.weight}t</span>
                      </div>
                      {formData.transportType === 'refrigerated' && formData.temperature && (
                        <div className="flex justify-between">
                          <span>Température:</span>
                          <span className="font-medium">
                            {formData.temperature === 'frozen' ? 'Congelé' :
                             formData.temperature === 'refrigerated' ? 'Réfrigéré' : 'Contrôlée'}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Urgence:</span>
                        <span className="font-medium">
                          {formData.urgency === 'urgent' ? 'Urgent' :
                           formData.urgency === 'express' ? 'Express' : 'Standard'}
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <Button asChild className="w-full bg-glacier hover:bg-blue-600 text-white" size="lg">
                        <Link href="/payment">
                          Confirmer et Réserver
                        </Link>
                      </Button>
                      <p className="text-xs text-gray-500 mt-2 text-center">
                        * Prix indicatif, devis définitif après validation
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
