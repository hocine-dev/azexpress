import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Conditions d\'Utilisation | FroidExpress',
  description: 'Conditions générales d\'utilisation et de vente de FroidExpress.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Conditions d'Utilisation
          </h1>
          <p className="text-xl text-gray-600">
            Conditions générales d'utilisation et de vente
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Article 1 - Objet</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Les présentes conditions générales ont pour objet de définir les modalités 
                et conditions dans lesquelles FroidExpress fournit ses services de transport 
                frigorifique aux clients, qu'ils soient professionnels ou particuliers.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Article 2 - Acceptation des conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                L'utilisation du site internet et la commande de services impliquent 
                l'acceptation pleine et entière des présentes conditions générales. 
                Ces conditions prévalent sur toutes autres conditions figurant dans 
                tout autre document, sauf dérogation préalable, expresse et écrite.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Article 3 - Services proposés</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                FroidExpress propose les services suivants :
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Transport frigorifique de marchandises</li>
                <li>Déménagement de produits sensibles à la température</li>
                <li>Transport pharmaceutique et médical</li>
                <li>Transport de produits alimentaires</li>
                <li>Transport de fleurs et plantes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Article 4 - Commande et devis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4.1 Demande de devis</h3>
                <p className="text-gray-600">
                  Toute demande de transport doit faire l'objet d'un devis préalable. 
                  Le devis est gratuit et sans engagement pendant 30 jours.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4.2 Acceptation du devis</h3>
                <p className="text-gray-600">
                  L'acceptation du devis par le client vaut commande ferme. 
                  Un acompte de 30% peut être demandé à la commande.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Article 5 - Prix et paiement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5.1 Prix</h3>
                <p className="text-gray-600">
                  Les prix sont indiqués en euros TTC. Ils comprennent le transport, 
                  l'assurance et les frais de manutention standard.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5.2 Modalités de paiement</h3>
                <p className="text-gray-600">
                  Le paiement s'effectue par carte bancaire, virement ou chèque. 
                  Pour les professionnels, un paiement à 30 jours peut être accordé 
                  après étude du dossier.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Article 6 - Obligations du client</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">Le client s'engage à :</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Fournir des informations exactes sur les marchandises</li>
                <li>Emballer correctement les produits fragiles</li>
                <li>Être présent aux heures convenues pour le chargement/déchargement</li>
                <li>Respecter la réglementation en vigueur</li>
                <li>Signaler immédiatement tout dommage apparent</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Article 7 - Obligations de FroidExpress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">FroidExpress s'engage à :</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Respecter les températures de transport convenues</li>
                <li>Livrer dans les délais convenus</li>
                <li>Assurer les marchandises transportées</li>
                <li>Fournir un suivi en temps réel du transport</li>
                <li>Respecter les normes HACCP et ATP</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Article 8 - Assurance et responsabilité</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">8.1 Assurance</h3>
                <p className="text-gray-600">
                  Toutes les marchandises sont assurées pendant le transport. 
                  La valeur assurée est déclarée par le client et ne peut excéder 
                  la valeur réelle des marchandises.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">8.2 Limitation de responsabilité</h3>
                <p className="text-gray-600">
                  La responsabilité de FroidExpress est limitée à la valeur déclarée 
                  des marchandises. Elle ne peut être engagée en cas de force majeure 
                  ou de faute du client.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Article 9 - Annulation et modification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">9.1 Annulation par le client</h3>
                <p className="text-gray-600">
                  Toute annulation doit être notifiée par écrit. Les frais d'annulation 
                  sont de 30% du montant total si l'annulation intervient moins de 24h 
                  avant l'intervention.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">9.2 Modification</h3>
                <p className="text-gray-600">
                  Toute modification de commande peut entraîner une facturation 
                  supplémentaire selon les nouveaux éléments.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Article 10 - Réclamations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Toute réclamation doit être formulée par écrit dans les 3 jours 
                suivant la livraison. Passé ce délai, aucune réclamation ne sera acceptée. 
                Les réclamations sont à adresser à : contact@froidexpress.fr
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Article 11 - Droit applicable</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Les présentes conditions générales sont soumises au droit français. 
                En cas de litige, et après tentative de résolution amiable, 
                les tribunaux de Saint-Denis seront seuls compétents.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Article 12 - Modification des conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                FroidExpress se réserve le droit de modifier les présentes conditions 
                générales à tout moment. Les nouvelles conditions seront applicables 
                dès leur mise en ligne sur le site internet.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
