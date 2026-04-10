import type { Messages } from "./es";

export const fr: Messages = {
  header: {
    nav: {
      home: "Accueil",
      services: "Services",
      projects: "Projets",
      process: "Processus",
      partners: "Partenaires",
      contact: "Contact",
      templates: "Modèles",
    },
    ariaTheme: "Changer le thème",
    ariaMenu: "Ouvrir le menu",
    ariaLanguage: "Langue",
  },
  hero: {
    logoAlt: "Logo Nexus Global",
    titleLine1: "Nous connectons votre",
    titleHighlight: "futur numérique",
    subtitle:
      "Nous créons des sites web, des plateformes sur mesure et des solutions numériques qui transforment les idées en réalité.",
    ctaStart: "Démarrer un projet",
    ctaServices: "Voir les services",
  },
  services: {
    titleOur: "Nos",
    titleHighlight: "Services",
    subtitle: "Des solutions numériques complètes pour faire passer votre entreprise au niveau supérieur",
    cards: [
      {
        title: "Sites web",
        description:
          "Nous concevons et développons des sites modernes et rapides, optimisés pour convertir les visiteurs en clients.",
        features: ["Design responsive", "SEO optimisé", "Haute performance", "Sécurisé et fiable"],
      },
      {
        title: "Plateformes web sur mesure",
        description:
          "Nous créons des systèmes web adaptés aux besoins spécifiques de votre entreprise.",
        features: ["Développement sur mesure", "Évolutif", "Intégrations", "Support continu"],
      },
      {
        title: "Solutions numériques",
        description: "Nous transformons des processus complexes en solutions numériques intuitives et efficaces.",
        features: ["Automatisation", "Optimisation", "Analytique", "Innovation"],
      },
    ],
  },
  showcase: {
    titleOur: "Nos",
    titleHighlight: "Projets",
    subtitle: "Chaque projet est l’occasion de montrer notre passion pour l’excellence",
    ctaDetails: "Voir les détails",
    ctaQuestion: "Vous avez un projet en tête ?",
    projects: [
      {
        title: "E-commerce moderne",
        description:
          "Boutiques en ligne avec Shopify et plateformes personnalisées : paiements, stocks et optimisation des conversions.",
        tech: ["Shopify", "WooCommerce", "Stripe", "PayPal"],
      },
      {
        title: "Tableau de bord entreprise",
        description:
          "Gestion d’entreprise sur mesure : commandes cuisine, comptes, facturation automatisée et inventaire sur une seule plateforme.",
        tech: ["React", "Node.js", "PostgreSQL", "API Integration"],
      },
      {
        title: "Sites web pour entreprises",
        description:
          "Sites professionnels avec Google Ads, design responsive, hébergement optimisé et CRM intégré pour croître en ligne.",
        tech: ["Google Ads", "Design web", "Hébergement", "CRM"],
      },
      {
        title: "MiVisita",
        description:
          "Accès résidentiel intelligent pour copropriétés et immeubles. Le résident annonce la visite ; la sécurité valide l’entrée par scan QR.",
        tech: ["QR sécurisé", "Validation au portail", "Temps réel", "Accès résidentiel"],
      },
    ],
  },
  templateShowcase: {
    titleOur: "Démos",
    titleHighlight: "par secteur",
    subtitle:
      "Découvrez des exemples de sites pensés pour différents métiers. Chacun est adaptable à votre marque et vos contenus.",
    ctaLive: "Voir le site",
    badgeDemo: "Démo",
    badgeLive: "En ligne",
    ariaOpen: "Ouvrir la démo dans un nouvel onglet",
    items: [
      {
        name: "Construction",
        description:
          "Mise en page percutante pour entreprises de construction, chantiers et promoteurs.",
      },
      {
        name: "Café",
        description:
          "Idéal pour cafés et coffee shops : carte, ambiance et localisation mises en avant.",
      },
      {
        name: "Cabinet dentaire",
        description:
          "Structure claire pour cliniques dentaires : services, confiance et prise de contact.",
      },
      {
        name: "Immobilier",
        description:
          "Présentez biens et services, conçu pour agences et conseillers immobiliers.",
      },
      {
        name: "Esthétique et bien-être",
        description:
          "Site réel pour un centre d’esthétique : référence pour spas, instituts de beauté et soins.",
      },
    ],
  },
  process: {
    titleOur: "Notre",
    titleHighlight: "Processus",
    subtitle: "Une méthode structurée qui garantit des résultats exceptionnels",
    steps: [
      {
        title: "Découverte",
        description: "Nous analysons vos besoins et objectifs pour concevoir la bonne solution.",
      },
      {
        title: "Design",
        description: "Nous créons prototypes et maquettes qui reflètent votre marque.",
      },
      {
        title: "Développement",
        description: "Nous construisons avec les meilleures technologies et pratiques.",
      },
      {
        title: "Lancement",
        description: "Nous déployons votre projet et vous accompagnons à chaque étape.",
      },
    ],
    benefits: ["Communication constante", "Livraisons à l’heure", "Support après lancement"],
  },
  technologies: {
    titleTech: "Technologies",
    titleHighlight: "Modernes",
    subtitle: "Nous utilisons les meilleurs outils pour créer des solutions de classe mondiale",
    footer: "Et bien d’autres technologies selon les besoins de votre projet",
    categories: {
      Framework: "Framework",
      Library: "Bibliothèque",
      Language: "Langage",
      Runtime: "Runtime",
      Database: "Base de données",
      Styling: "Styles",
      Cloud: "Cloud",
      DevOps: "DevOps",
      API: "API",
      ORM: "ORM",
      Cache: "Cache",
    },
  },
  partners: {
    titleOur: "Nos",
    titleHighlight: "Partenaires",
    subtitle: "Des entreprises qui nous font confiance pour renforcer leur présence numérique",
  },
  contact: {
    titleLets: "Parlons de votre",
    titleHighlight: "Projet",
    subtitle: "Nous sommes prêts à transformer vos idées en réalité numérique",
    infoTitle: "Coordonnées",
    infoDesc: "Remplissez le formulaire ou contactez-nous directement. Nous sommes là pour vous aider.",
    labelName: "Nom",
    labelEmail: "E-mail",
    labelPhone: "Téléphone (facultatif)",
    labelMessage: "Message",
    phName: "Votre nom",
    phEmail: "vous@email.com",
    phPhone: "+33 6 12 34 56 78",
    phMessage: "Parlez-nous de votre projet...",
    btnSend: "Envoyer le message",
    btnSending: "Envoi en cours...",
    btnSent: "Message envoyé !",
    errGeneric: "Une erreur s’est produite lors de l’envoi. Veuillez réessayer.",
    errSend: "Échec de l’envoi du message",
    email: "E-mail",
    instagram: "Instagram",
  },
  footer: {
    tagline: "Nous connectons votre entreprise au futur numérique",
    quickLinks: "Liens rapides",
    follow: "Suivez-nous",
    rights: "Tous droits réservés.",
    madeWith: "Fait avec ❤️ par Nexus Global",
    ariaInstagram: "Instagram",
    ariaEmail: "E-mail",
  },
  common: {
    backToProjects: "Retour aux projets",
    requestQuote: "Demander un devis",
    brandName: "Nexus Global",
  },
  paginasWeb: {
    heroTitle1: "Sites web",
    heroTitle2: "pour entreprises",
    heroSubtitle:
      "Présence en ligne complète : design professionnel, Google Ads, hébergement optimisé et CRM intégré. Tout pour faire grandir votre activité.",
    includeTitle1: "Ce que nous",
    includeTitle2: "Incluons",
    includeSubtitle: "Un package complet pour votre présence en ligne",
    benefitsTitle1: "Avantages",
    benefitsTitle2: "Clés",
    ctaTitle1: "Faites croître votre",
    ctaTitle2: "Activité en ligne",
    ctaSubtitle: "Contactez-nous et commençons dès aujourd’hui votre présence numérique",
    features: [
      {
        title: "Design web professionnel",
        description:
          "Sites modernes, responsive et optimisés. Un design sur mesure qui reflète votre marque et convertit.",
      },
      {
        title: "Annonces Google",
        description:
          "Configuration et gestion de campagnes Google Ads : mots-clés, conversions et ROI.",
      },
      {
        title: "Hébergement optimisé",
        description:
          "Hébergement rapide et fiable avec SSL, sauvegardes automatiques et support. Toujours disponible et sécurisé.",
      },
      {
        title: "CRM intégré",
        description:
          "Gestion clients intégrée : suivi des leads, automatisation marketing et analyse du comportement.",
      },
    ],
    servicesList: [
      "Design web responsive et moderne",
      "Optimisation SEO",
      "Configuration Google Ads",
      "Hébergement et domaine inclus",
      "Certificat SSL gratuit",
      "Sauvegardes automatiques",
      "Intégration CRM",
      "Formulaires de contact",
      "Analytique et rapports",
      "Support et maintenance",
    ],
    benefits: [
      {
        title: "Plus de visibilité",
        description: "Apparaissez en tête des recherches et attirez plus de prospects.",
      },
      {
        title: "Conversion optimisée",
        description: "Un design orienté conversion visiteurs → clients.",
      },
      {
        title: "Gestion simplifiée",
        description: "Un tableau de bord simple pour gérer votre présence en ligne.",
      },
    ],
    offersTitle1: "Offres",
    offersTitle2: "site et hébergement",
    offersSubtitle:
      "Basic Website en paiement unique ou maintenance mensuelle avec hébergement. Paiement sécurisé PayPal.",
    basicTitle1: "Basic Website",
    basicTitle2: "300 USD",
    basicSubtitle:
      "Page d’atterrissage ou site de 1 à 3 pages. Paiement unique, idéal pour lancer rapidement votre présence en ligne.",
    basicFeatures: [
      "Jusqu’à 3 pages ou une landing orientée conversion",
      "Design responsive, prêt à la mise en ligne",
      "Prix fixe en dollars (USD)",
    ],
    basicIframeTitle: "Payer Basic Website avec PayPal",
    basicSecureNote: "Paiement sécurisé via PayPal.",
    subscribeTitle1: "Forfait",
    subscribeTitle2: "Maintenance + Hébergement",
    subscribeSubtitle:
      "Activez votre abonnement PayPal : hébergement optimisé et maintenance continue pour un site rapide, sécurisé et à jour.",
    subscribeFeatures: [
      "Hébergement et certificat SSL",
      "Sauvegardes et mises à jour",
      "Surveillance et support technique",
    ],
    subscribeSuccess: "Abonnement activé avec succès !",
    subscribeIdLabel: "ID d’abonnement",
    subscribeLoadError:
      "Impossible de charger PayPal. Actualisez la page ou réessayez plus tard.",
    subscribeSecureNote: "Paiements traités en toute sécurité par PayPal.",
  },
  ecommerce: {
    heroTitle1: "E-commerce",
    heroTitle2: "Moderne",
    heroSubtitle:
      "Commerce électronique complet avec Shopify et plateformes sur mesure. Tout pour vendre en ligne avec succès.",
    includeTitle1: "Ce que nous",
    includeTitle2: "Incluons",
    includeSubtitle: "Un service complet de bout en bout",
    ctaTitle1: "Prêt à vendre",
    ctaTitle2: "en ligne ?",
    ctaSubtitle: "Contactez-nous et construisons votre boutique en ligne dès aujourd’hui",
    features: [
      {
        title: "Boutiques en ligne complètes",
        description:
          "Boutiques pros sur Shopify, WooCommerce et sur mesure — de la configuration au lancement.",
      },
      {
        title: "Intégration des paiements",
        description:
          "Stripe, PayPal, cartes et méthodes locales. Paiement optimisé pour maximiser les conversions.",
      },
      {
        title: "Gestion des stocks",
        description:
          "Contrôle automatisé, alertes de stock faible, synchro multi-canal et variantes produits.",
      },
      {
        title: "Optimisation des conversions",
        description:
          "Tests A/B, performance, UX responsive pour augmenter les ventes et réduire l’abandon de panier.",
      },
    ],
    servicesList: [
      "Configuration boutique Shopify/WooCommerce",
      "Design et branding sur mesure",
      "Intégration des passerelles de paiement",
      "Systèmes de gestion des stocks",
      "SEO produits",
      "Configuration expéditions et logistique",
      "Panneau d’administration complet",
      "Intégration réseaux sociaux",
      "Apps et extensions personnalisées",
      "Support et maintenance continus",
    ],
  },
  dashboard: {
    heroTitle1: "Tableau de bord",
    heroTitle2: "Entreprise",
    heroSubtitle:
      "Plateformes de gestion sur mesure : commandes cuisine, comptes, facturation automatisée et inventaire — tout intégré.",
    includeTitle1: "Ce que nous",
    includeTitle2: "Incluons",
    includeSubtitle: "Une solution complète pour votre entreprise",
    idealTitle1: "Idéal pour",
    idealTitle2: "Votre entreprise",
    ctaTitle1: "Automatisez votre",
    ctaTitle2: "Entreprise",
    ctaSubtitle:
      "Contactez-nous pour une consultation personnalisée et voyez comment optimiser vos opérations",
    features: [
      {
        title: "Système de commandes",
        description:
          "Flux complet table → cuisine : alertes temps réel, impression et suivi d’état.",
      },
      {
        title: "Facturation automatisée",
        description:
          "Factures auto, créances, rapports financiers et intégrations comptables.",
      },
      {
        title: "Gestion des comptes",
        description:
          "Paiements, crédits, débits et tableau de bord financier en temps réel.",
      },
      {
        title: "Contrôle des stocks",
        description:
          "Stock intelligent, alertes, suivi produits et optimisation des achats pour réduire le gaspillage.",
      },
    ],
    servicesList: [
      "Système de commandes numériques",
      "Intégration imprimantes cuisine",
      "Comptes et paiements",
      "Facturation électronique",
      "Inventaire en temps réel",
      "Rapports et analytique",
      "Tables et réservations",
      "Intégrations point de vente",
      "Panneau d’administration complet",
      "Support et formation",
    ],
    useCases: ["Restaurants et cafés", "Hôtels et hébergement", "Commerce de détail"],
  },
  mivisita: {
    heroTitle1: "MiVisita :",
    heroTitle2: "votre accès résidentiel numérique",
    heroBody:
      "MiVisita est une web app pour résidences, immeubles et lotissements. Le résident annonce son visiteur ; la sécurité valide l’entrée en scannant un QR — rapide et sûr.",
    highlights: [
      "Le résident annonce une visite en quelques secondes.",
      "Chaque visiteur reçoit un QR sécurisé et configurable.",
      "La sécurité scanne et valide l’entrée au portail.",
      "Notifications en temps réel pour un meilleur contrôle.",
    ],
    ctaApp: "Aller sur MiVisita",
    logoAlt: "Logo MiVisita",
    cardSecureTitle: "QR sécurisé",
    cardSecureBody: "Codes limités par usage ou par durée pour un contrôle d’accès renforcé.",
    cardProcessTitle: "Processus fiable",
    cardProcessBody: "La sécurité valide chaque entrée au portail sans friction pour résidents et visiteurs.",
    sectionTitle1: "Fonctions clés",
    sectionTitle2: "de MiVisita",
    sectionSubtitle:
      "L’essentiel par rôle pour un accès résidentiel avec contrôle, rapidité et traçabilité.",
    securityTitle: "Sécurité, preuves et rétention",
    securityBullets: [
      "Preuves d’entrée en base : identification et plaque.",
      "Purge automatique des données sensibles après 60 jours en conservant l’événement opérationnel.",
      "Contrôle d’accès par résidence pour scans et requêtes.",
      "Si une résidence est suspendue, seul un super admin peut opérer.",
    ],
    roles: [
      {
        title: "Résident",
        points: [
          "Invitations QR avec validité configurable : une utilisation, 1 jour, 3 jours ou indéfinie.",
          "Description et marqueur véhicule par visite, QR facile à partager.",
          "Réservation et annulation d’espaces communs, suggestions et support WhatsApp.",
        ],
      },
      {
        title: "Agent de sécurité",
        points: [
          "Scan et validation QR avec preuve d’identité.",
          "Preuve de plaque obligatoire si le visiteur arrive en voiture.",
          "Confirmation manuelle d’arrivée et alertes livraison avec push immédiat.",
        ],
      },
      {
        title: "Administration",
        points: [
          "Gestion complète utilisateurs et zones (blocages, limites, réservations).",
          "Annonces push segmentées et module QR administrateur.",
          "Journaux filtrés, export PDF et rapport mensuel avec preuves.",
        ],
      },
    ],
  },
};
