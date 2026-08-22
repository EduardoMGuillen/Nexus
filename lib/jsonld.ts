import {
  SITE_EMAIL,
  SITE_INSTAGRAM,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness", "Organization"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: "Nexus Global",
    url: SITE_URL,
    logo: `${SITE_URL}/NexusGPTHD.png`,
    image: `${SITE_URL}/NexusGPTHD.png`,
    email: SITE_EMAIL,
    description:
      "Agencia de desarrollo web en Honduras. Creamos páginas web, tiendas en línea, hosting y plataformas a medida para negocios en Tegucigalpa, San Pedro Sula y todo el país.",
    foundingLocation: {
      "@type": "Country",
      name: "Honduras",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "HN",
      addressLocality: "Honduras",
    },
    areaServed: [
      { "@type": "Country", name: "Honduras" },
      { "@type": "City", name: "Tegucigalpa" },
      { "@type": "City", name: "San Pedro Sula" },
      { "@type": "City", name: "La Ceiba" },
      { "@type": "City", name: "Choloma" },
      { "@type": "City", name: "Comayagua" },
    ],
    sameAs: [SITE_INSTAGRAM],
    priceRange: "$$",
    knowsLanguage: ["es", "en"],
    serviceType: [
      "Diseño y desarrollo de páginas web",
      "Tiendas en línea",
      "Hosting y mantenimiento",
      "Plataformas web a medida",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "es-HN",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function serviceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Crear página web en Honduras",
    serviceType: "Desarrollo de sitios web",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Honduras" },
    url: `${SITE_URL}/crear-pagina-web-honduras`,
    description:
      "Diseño y desarrollo de páginas web para negocios en Honduras: sitios de 1 a 10 páginas, SEO local, hosting y mantenimiento.",
    offers: [
      {
        "@type": "Offer",
        name: "Presencia que vende",
        price: "300",
        priceCurrency: "USD",
        url: `${SITE_URL}/paginas-web#ofertas`,
      },
      {
        "@type": "Offer",
        name: "Marca online completa",
        price: "500",
        priceCurrency: "USD",
        url: `${SITE_URL}/paginas-web#ofertas`,
      },
    ],
  };
}

export const hondurasFaqs = [
  {
    q: "¿Cuánto cuesta crear una página web en Honduras?",
    a: "En Nexus Global un sitio de lanzamiento — Presencia que vende, hasta 3 páginas — parte de 300 USD y Marca online completa (hasta 10 páginas) de 500 USD. Si el alcance es distinto, el plan Tu presupuesto, tu web se cotiza a medida. También ofrecemos plan mensual de mantenimiento y hosting.",
  },
  {
    q: "¿Hacen páginas web en Tegucigalpa y San Pedro Sula?",
    a: "Sí. Atendemos negocios en Tegucigalpa, San Pedro Sula, La Ceiba, Comayagua y el resto de Honduras. El proceso es remoto y presencial según el proyecto: reunión, diseño, desarrollo y publicación.",
  },
  {
    q: "¿Cuánto tarda tener mi página web lista?",
    a: "Un sitio Basic suele entregarse en días o pocas semanas según contenido y revisiones. Un Premium con más páginas y secciones toma más tiempo. Te damos un calendario claro al iniciar.",
  },
  {
    q: "¿Incluyen dominio, hosting y Google?",
    a: "Podemos incluir hosting, SSL, copias de seguridad y orientación para dominio. También configuramos presencia en Google (perfil de negocio y bases de SEO local) para que te encuentren al buscar crear página web o tu rubro en Honduras.",
  },
  {
    q: "¿Puedo vender en línea desde Honduras?",
    a: "Sí. Desarrollamos tiendas online y páginas de servicios con pagos (PayPal y otros). Ideal para comercios, clínicas, inmobiliarias y marcas que quieren clientes en todo el país.",
  },
];

export function faqJsonLd(faqs: { q: string; a: string }[] = hondurasFaqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
