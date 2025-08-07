import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Mentions Légales | FroidExpress',
  description: 'Mentions légales de FroidExpress, société de transport frigorifique basée à Saint-Denis.',
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mentions Légales
          </h1>
          <p className="text-xl text-gray-600">
            Informations légales concernant FroidExpress
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Informations sur la société</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Dénomination sociale</h3>
                <p className="text-gray-600">FroidExpress SARL</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Siège social</h3>
                <p className="text-gray-600">
                  123 Avenue de la République<br />
                  93200 Saint-Denis, France
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">SIRET</h3>
                  <p className="text-gray-600">123 456 789 00012</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Code APE</h3>
                  <p className="text-gray-600">4941A</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Capital social</h3>
                  <p className="text-gray-600">50 000 €</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">TVA Intracommunautaire</h3>
                  <p className="text-gray-600">FR12345678901</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Direction de la publication</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Directeur de la publication</h3>
                <p className="text-gray-600">Pierre Dubois, Gérant</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hébergement du site</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Hébergeur</h3>
                <p className="text-gray-600">
                  Vercel Inc.<br />
                  340 S Lemon Ave #4133<br />
                  Walnut, CA 91789, États-Unis
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Propriété intellectuelle</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                L'ensemble de ce site relève de la législation française et internationale 
                sur le droit d'auteur et la propriété intellectuelle. Tous les droits de 
                reproduction sont réservés, y compris pour les documents téléchargeables 
                et les représentations iconographiques et photographiques.
              </p>
              <p className="text-gray-600">
                La reproduction de tout ou partie de ce site sur un support électronique 
                quel qu'il soit est formellement interdite sauf autorisation expresse 
                du directeur de la publication.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Responsabilité</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Les informations contenues sur ce site sont aussi précises que possible 
                et le site remis à jour à différentes périodes de l'année, mais peut 
                toutefois contenir des inexactitudes ou des omissions.
              </p>
              <p className="text-gray-600">
                Si vous constatez une lacune, erreur ou ce qui parait être un 
                dysfonctionnement, merci de bien vouloir le signaler par email, 
                à l'adresse contact@froidexpress.fr, en décrivant le problème 
                de la manière la plus précise possible.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Liens hypertextes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Les sites internet peuvent offrir des liens vers d'autres sites internet 
                ou d'autres ressources disponibles sur Internet. FroidExpress ne dispose 
                d'aucun moyen pour contrôler les sites en connexion avec ses sites internet.
              </p>
              <p className="text-gray-600">
                FroidExpress ne répond pas de la disponibilité de tels sites et sources 
                externes, ni ne la garantit. Elle ne peut être tenue pour responsable 
                de tout dommage, de quelque nature que ce soit, résultant du contenu 
                de ces sites ou sources externes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Droit applicable</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Tant le présent site que les modalités et conditions de son utilisation 
                sont régis par le droit français, quel que soit le lieu d'utilisation. 
                En cas de contestation éventuelle, et après l'échec de toute tentative 
                de recherche d'une solution amiable, les tribunaux français seront seuls compétents.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
