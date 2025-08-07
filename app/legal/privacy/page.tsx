import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | AZExpress',
  description: 'Politique de confidentialité et protection des données personnelles d\'AZExpress.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-frost py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-night mb-4">
            Politique de Confidentialité
          </h1>
          <p className="text-xl text-gray-600">
            Protection de vos données personnelles
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Collecte des données personnelles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                AZExpress collecte des données personnelles dans le cadre de ses services 
                de transport frigorifique. Les données collectées sont nécessaires à :
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>L'établissement de devis personnalisés</li>
                <li>La réalisation des prestations de transport</li>
                <li>La facturation et le suivi commercial</li>
                <li>L'amélioration de nos services</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Types de données collectées</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Données d'identification</h3>
                <p className="text-gray-600">Nom, prénom, adresse email, numéro de téléphone</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Données de transport</h3>
                <p className="text-gray-600">
                  Adresses de départ et d'arrivée, type de marchandises, 
                  dates et horaires souhaités
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Données de navigation</h3>
                <p className="text-gray-600">
                  Adresse IP, type de navigateur, pages visitées, 
                  durée de visite (via cookies)
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Base légale du traitement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Le traitement de vos données personnelles repose sur :
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>L'exécution du contrat :</strong> pour réaliser les prestations de transport</li>
                <li><strong>L'intérêt légitime :</strong> pour l'amélioration de nos services</li>
                <li><strong>Le consentement :</strong> pour l'envoi de communications marketing</li>
                <li><strong>L'obligation légale :</strong> pour la conservation des factures</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Durée de conservation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Données clients</h3>
                <p className="text-gray-600">
                  Conservées pendant la durée de la relation commerciale 
                  et 3 ans après la dernière commande
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Données comptables</h3>
                <p className="text-gray-600">
                  Conservées 10 ans conformément aux obligations légales
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Données de navigation</h3>
                <p className="text-gray-600">
                  Conservées 13 mois maximum
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vos droits</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
                <li><strong>Droit à l'effacement :</strong> supprimer vos données</li>
                <li><strong>Droit à la limitation :</strong> limiter le traitement</li>
                <li><strong>Droit à la portabilité :</strong> récupérer vos données</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Pour exercer ces droits, contactez-nous à : 
                <a href="mailto:dpo@azexpress.fr" className="text-glacier hover:text-blue-600">
                  dpo@azexpress.fr
                </a>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Notre site utilise des cookies pour améliorer votre expérience :
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Cookies techniques :</strong> nécessaires au fonctionnement du site</li>
                <li><strong>Cookies analytiques :</strong> pour mesurer l'audience (Google Analytics)</li>
                <li><strong>Cookies de préférence :</strong> pour mémoriser vos choix</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Vous pouvez configurer votre navigateur pour refuser les cookies 
                ou être alerté de leur dépôt.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sécurité des données</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                AZExpress met en œuvre des mesures techniques et organisationnelles 
                appropriées pour protéger vos données personnelles :
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Chiffrement des données sensibles</li>
                <li>Accès restreint aux données personnelles</li>
                <li>Sauvegarde régulière des données</li>
                <li>Formation du personnel à la protection des données</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Pour toute question concernant cette politique de confidentialité 
                ou le traitement de vos données personnelles :
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-600">
                  <strong>Délégué à la Protection des Données :</strong><br />
                  Email : <a href="mailto:dpo@azexpress.fr" className="text-glacier hover:text-blue-600">dpo@azexpress.fr</a><br />
                  Adresse : 123 Avenue de la République, 93200 Saint-Denis
                </p>
              </div>
              <p className="text-gray-600 mt-4">
                Vous avez également le droit d'introduire une réclamation auprès 
                de la CNIL (Commission Nationale de l'Informatique et des Libertés).
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
