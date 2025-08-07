"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { CreditCard, Shield, CheckCircle, Download, Truck, Calendar, MapPin } from 'lucide-react'

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [isProcessing, setIsProcessing] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  // Mock order data
  const orderData = {
    id: 'AZ-2024-001',
    departure: 'Paris 75001',
    arrival: 'Lyon 69000',
    date: '15 janvier 2024',
    time: '14:00',
    weight: '2.5 tonnes',
    temperature: 'Réfrigéré (2-8°C)',
    subtotal: 450,
    tva: 90,
    total: 540
  }

  const handlePayment = async () => {
    setIsProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsCompleted(true)
    }, 3000)
  }

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-frost py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="text-center py-12">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Paiement Confirmé !
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Votre transport frigorifique a été réservé avec succès.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Détails de votre réservation
                </h2>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Numéro de commande:</span>
                    <span className="font-medium">{orderData.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date de transport:</span>
                    <span className="font-medium">{orderData.date} à {orderData.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Trajet:</span>
                    <span className="font-medium">{orderData.departure} → {orderData.arrival}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  <Download className="mr-2 h-4 w-4" />
                  Télécharger la facture
                </Button>
                <Button variant="outline">
                  Retour à l'accueil
                </Button>
              </div>

              <p className="text-sm text-gray-500 mt-6">
                Un email de confirmation a été envoyé à votre adresse.
                Notre équipe vous contactera 24h avant le transport.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-frost py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Finaliser votre Commande
          </h1>
          <p className="text-xl text-gray-600">
            Sécurisez votre transport frigorifique en quelques clics
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Truck className="h-6 w-6 text-teal-600" />
                  <span>Récapitulatif</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <div className="text-sm">
                      <div className="font-medium">{orderData.departure}</div>
                      <div className="text-gray-500">→ {orderData.arrival}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <div className="text-sm">
                      <div className="font-medium">{orderData.date}</div>
                      <div className="text-gray-500">{orderData.time}</div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Poids:</span>
                    <span>{orderData.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Température:</span>
                    <span>{orderData.temperature}</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Sous-total:</span>
                    <span>{orderData.subtotal}€</span>
                  </div>
                  <div className="flex justify-between">
                    <span>TVA (20%):</span>
                    <span>{orderData.tva}€</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-teal-600">{orderData.total}€</span>
                  </div>
                </div>

                <Badge className="w-full justify-center bg-green-100 text-green-800 hover:bg-green-100">
                  <Shield className="mr-1 h-3 w-3" />
                  Paiement 100% sécurisé
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* Payment Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-6 w-6 text-teal-600" />
                  <span>Informations de Paiement</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Payment Method Selection */}
                  <div className="space-y-3">
                    <Label>Méthode de paiement</Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <button
                        onClick={() => setPaymentMethod('card')}
                        className={`p-4 border rounded-lg text-center transition-colors ${
                          paymentMethod === 'card' 
                            ? 'border-teal-500 bg-teal-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <CreditCard className="h-6 w-6 mx-auto mb-2" />
                        <div className="text-sm font-medium">Carte bancaire</div>
                      </button>
                      <button
                        onClick={() => setPaymentMethod('paypal')}
                        className={`p-4 border rounded-lg text-center transition-colors ${
                          paymentMethod === 'paypal' 
                            ? 'border-teal-500 bg-teal-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="h-6 w-6 mx-auto mb-2 bg-blue-600 rounded"></div>
                        <div className="text-sm font-medium">PayPal</div>
                      </button>
                      <button
                        onClick={() => setPaymentMethod('transfer')}
                        className={`p-4 border rounded-lg text-center transition-colors ${
                          paymentMethod === 'transfer' 
                            ? 'border-teal-500 bg-teal-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="h-6 w-6 mx-auto mb-2 bg-gray-600 rounded"></div>
                        <div className="text-sm font-medium">Virement</div>
                      </button>
                    </div>
                  </div>

                  {paymentMethod === 'card' && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Numéro de carte</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          className="font-mono"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Date d'expiration</Label>
                          <Input
                            id="expiry"
                            placeholder="MM/AA"
                            className="font-mono"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            className="font-mono"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cardName">Nom sur la carte</Label>
                        <Input
                          id="cardName"
                          placeholder="Jean Dupont"
                        />
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'paypal' && (
                    <div className="text-center py-8">
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <div className="text-blue-600 mb-2">PayPal</div>
                        <p className="text-gray-600">
                          Vous serez redirigé vers PayPal pour finaliser le paiement.
                        </p>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'transfer' && (
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold mb-3">Informations de virement</h3>
                      <div className="space-y-2 text-sm">
                        <div><strong>IBAN:</strong> FR76 1234 5678 9012 3456 7890 123</div>
                        <div><strong>BIC:</strong> ABCDEFGH</div>
                        <div><strong>Bénéficiaire:</strong> AZExpress SARL</div>
                        <div><strong>Référence:</strong> {orderData.id}</div>
                      </div>
                      <p className="text-xs text-gray-500 mt-3">
                        Le transport sera confirmé après réception du virement.
                      </p>
                    </div>
                  )}

                  {/* Billing Address */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Adresse de facturation</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom</Label>
                        <Input id="firstName" placeholder="Jean" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom</Label>
                        <Input id="lastName" placeholder="Dupont" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Adresse</Label>
                      <Input id="address" placeholder="123 Rue de la Paix" />
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">Code postal</Label>
                        <Input id="postalCode" placeholder="75001" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">Ville</Label>
                        <Input id="city" placeholder="Paris" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Pays</Label>
                        <Select defaultValue="france">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="france">France</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={handlePayment}
                    disabled={isProcessing}
                    className="w-full bg-teal-600 hover:bg-teal-700" 
                    size="lg"
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Traitement en cours...
                      </>
                    ) : (
                      <>
                        <Shield className="mr-2 h-4 w-4" />
                        Payer {orderData.total}€
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    En cliquant sur "Payer", vous acceptez nos conditions d'utilisation 
                    et notre politique de confidentialité. Paiement sécurisé SSL.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
