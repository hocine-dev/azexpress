# AZExpress - Transport et Logistique

![AZExpress Logo](public/placeholder-logo.svg)

## 🚚 À propos

AZExpress est une application web moderne pour une entreprise de transport et logistique basée à Saint-Denis. Le site propose des solutions complètes de transport général, frigorifique, express et déménagement.

### ⚠️ Avertissement
**Site en test – Données à titre indicatif uniquement**  
Cette application est actuellement en phase de développement et de test. Toutes les données, prix et informations affichées sont fictives et à titre démonstratif uniquement.

## ✨ Fonctionnalités

- **🎨 Design moderne** : Interface utilisateur élégante avec Tailwind CSS
- **📱 Responsive** : Optimisé pour tous les appareils (mobile, tablette, desktop)
- **🧮 Simulateur de devis** : Calcul automatique des prix en temps réel
- **🚛 Services multiples** : Transport général, frigorifique, express, déménagement
- **📋 Formulaires intuitifs** : Saisie facile des informations de transport
- **🎯 UX optimisée** : Navigation fluide et scroll automatique sur mobile
- **🔒 Pages légales** : Mentions légales, politique de confidentialité, CGU

## 🛠️ Technologies utilisées

- **Framework** : [Next.js 14](https://nextjs.org/) (React)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Styling** : [Tailwind CSS](https://tailwindcss.com/)
- **UI Components** : [shadcn/ui](https://ui.shadcn.com/)
- **Icons** : [Lucide React](https://lucide.dev/)
- **Package Manager** : [pnpm](https://pnpm.io/)

## 🚀 Installation et lancement

### Prérequis
- Node.js 18+ 
- pnpm (recommandé) ou npm/yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/hocine-dev/azexpress.git

# Naviguer dans le dossier
cd azexpress

# Installer les dépendances
pnpm install

# Lancer en mode développement
pnpm dev

# Ou avec npm
npm install
npm run dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📂 Structure du projet

```
azexpress/
├── app/                    # App Router Next.js
│   ├── components/         # Composants partagés
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── about/             # Page À propos
│   ├── contact/           # Page Contact
│   ├── devis/             # Simulateur de devis
│   ├── legal/             # Pages légales
│   ├── payment/           # Page de paiement
│   ├── services/          # Page des services
│   ├── globals.css        # Styles globaux
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Page d'accueil
├── components/            # Composants UI (shadcn/ui)
├── hooks/                 # Hooks React personnalisés
├── lib/                   # Utilitaires
├── public/                # Assets statiques
└── styles/                # Fichiers de style
```

## 🎨 Design System

### Couleurs principales
- **Glacier** : `#00AEEF` (Bleu principal)
- **Frost** : `#F2F5F9` (Gris clair)
- **Night** : `#1E2A38` (Bleu nuit)

### Typography
- **Font** : Inter (Google Fonts)
- **Tailles** : Système responsive basé sur Tailwind CSS

## 📱 Pages et fonctionnalités

### 🏠 Accueil
- Hero section avec call-to-action
- Présentation des services
- Témoignages clients
- Processus en 3 étapes

### 🧮 Simulateur de devis
- Formulaire interactif
- Calcul en temps réel
- Support mobile optimisé
- Types de transport multiples

### ℹ️ À propos
- Histoire de l'entreprise
- Équipe et valeurs
- Présentation de la flotte

### 📞 Contact
- Formulaire de contact
- Informations pratiques
- Carte interactive

### ⚖️ Pages légales
- Mentions légales
- Politique de confidentialité
- Conditions d'utilisation

## 🔧 Scripts disponibles

```bash
# Développement
pnpm dev

# Build de production
pnpm build

# Démarrer en production
pnpm start

# Linting
pnpm lint

# Vérification des types TypeScript
pnpm type-check
```

## 🌐 Déploiement

Ce projet est optimisé pour le déploiement sur :
- [Vercel](https://vercel.com/) (recommandé)
- [Netlify](https://netlify.com/)
- [Railway](https://railway.app/)

### Déploiement Vercel

```bash
# Installation de Vercel CLI
npm i -g vercel

# Déploiement
vercel
```

## 📄 License

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👨‍💻 Auteur

**Hocine**
- GitHub: [@hocine-dev](https://github.com/hocine-dev)

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📞 Support

Pour toute question ou support :
- Créer une [issue](https://github.com/hocine-dev/azexpress/issues)
- Email : hocinedev4@gmail.com

---

**AZExpress** - Transport et Logistique à Saint-Denis 🚚
