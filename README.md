# E-commerce Mini Project

Un projet e-commerce moderne et robuste construit avec Next.js pour le frontend et Node.js/Express pour le backend.

## 🚀 Technologies Utilisées

### Frontend
- **Next.js 13.4.2** - Framework React moderne avec rendu côté serveur
- **React 18.2.0** - Bibliothèque UI
- **TailwindCSS** - Framework CSS utilitaire
- **NextAuth.js** - Authentification
- **React Icons & Heroicons** - Bibliothèques d'icônes
- **React Toastify** - Notifications élégantes

### Backend
- **Node.js & Express** - Serveur backend
- **MongoDB & Mongoose** - Base de données et ODM
- **JWT** - Authentification par token
- **Bcrypt** - Hachage des mots de passe
- **Multer** - Gestion des uploads de fichiers
- **Nodemailer** - Service d'envoi d'emails
- **Joi** - Validation des données

## 📁 Structure du Projet

```
Ecommerce-Mini-Project/
├── client/                 # Frontend Next.js
│   ├── components/        # Composants React réutilisables
│   ├── pages/            # Pages de l'application
│   ├── public/           # Assets statiques
│   └── styles/           # Fichiers CSS
│
└── server/               # Backend Node.js
    ├── controllers/      # Logique métier
    ├── model/           # Schémas Mongoose
    └── validation/      # Schémas de validation
```

## 🛠️ Installation

1. Clonez le repository
```bash
git clone https://github.com/A-Hamdi1/Ecommerce-Mini-Project.git
cd Ecommerce-Mini-Project
```

2. Installation des dépendances Frontend
```bash
cd client
npm install
```

3. Installation des dépendances Backend
```bash
cd ../server
npm install
```

4. Configuration des variables d'environnement
- Créez un fichier `.env` dans le dossier `server` avec les variables nécessaires
- Créez un fichier `.env.local` dans le dossier `client` pour les variables frontend

## 🚀 Démarrage

1. Démarrez le serveur backend
```bash
cd server
npm start
```

2. Démarrez le frontend en mode développement
```bash
cd client
npm run dev
```

## 🌟 Fonctionnalités

- 🔐 Authentification complète (inscription, connexion, déconnexion)
- 🛍️ Gestion des produits
- 🛒 Panier d'achat
- 💳 Processus de paiement
- 📧 Notifications par email
- 📱 Design responsive
- 🔍 Recherche de produits
- ⭐ Système de notation et avis

## 🔒 Sécurité

- Validation des données côté serveur
- Protection contre les injections
- Gestion sécurisée des mots de passe
- Protection CSRF
- Headers de sécurité

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 License

Ce projet est sous licence ISC.

## 👥 Auteur

[Akram-Hamdi]

## 📞 Support

Pour toute question ou problème, n'hésitez pas à ouvrir une issue dans le repository. 