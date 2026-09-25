import {
  BRAND_ALIASES,
  SITE_EMAIL,
  SITE_INSTAGRAM,
  SITE_NAME,
  SITE_URL,
  WHATSAPP_NUMBER,
} from "@/lib/site";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness", "Organization"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: [...BRAND_ALIASES],
    legalName: "Nexus Global",
    slogan: "Desarrollo web y soluciones empresariales en Honduras. Cada web incluye libro de marca.",
    url: SITE_URL,
    logo: `${SITE_URL}/logo-nexus.png`,
    image: `${SITE_URL}/opengraph-image`,
    email: SITE_EMAIL,
    telephone: `+${WHATSAPP_NUMBER}`,
    description:
      "Nexus Global (Nexus Honduras) es un estudio hondureño de desarrollo web y soluciones empresariales: páginas web desde 150 USD con libro de marca incluido, CRM a medida, sistemas y marketing digital para negocios en Tegucigalpa, San Pedro Sula y todo Honduras.",
    foundingLocation: { "@type": "Country", name: "Honduras" },
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
      { "@type": "City", name: "El Progreso" },
      { "@type": "City", name: "Comayagua" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${WHATSAPP_NUMBER}`,
      contactType: "sales",
      areaServed: "HN",
      availableLanguage: ["es", "en"],
    },
    sameAs: [SITE_INSTAGRAM, `https://wa.me/${WHATSAPP_NUMBER}`],
    priceRange: "$150 - $$$",
    knowsAbout: [
      "Desarrollo web en Honduras",
      "Diseño de páginas web",
      "Libro de marca y branding",
      "CRM a medida",
      "Marketing digital",
      "SEO local Honduras",
      "Inteligencia artificial para negocios",
    ],
    knowsLanguage: ["es", "en"],
    serviceType: [
      "Diseño y desarrollo de páginas web",
      "Libro de marca",
      "Tiendas en línea",
      "CRM y sistemas a medida",
      "Marketing digital",
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
    alternateName: ["Nexus Honduras", "Nexus Global Honduras"],
    inLanguage: "es-HN",
    description:
      "Nexus Global: desarrollo web y soluciones empresariales en Honduras. Páginas web desde 150 USD con libro de marca.",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function serviceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Diseño de páginas web en Honduras",
    serviceType: "Desarrollo de sitios web",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Honduras" },
    url: `${SITE_URL}/paginas-web`,
    description:
      "Páginas web profesionales para negocios en Honduras con libro de marca incluido, adaptadas a celular, conectadas a WhatsApp y con SEO local.",
    offers: [
      {
        "@type": "Offer",
        name: "Web Esencial",
        price: "150",
        priceCurrency: "USD",
        description: "Landing page con libro de marca esencial.",
        url: `${SITE_URL}/#planes`,
      },
      {
        "@type": "Offer",
        name: "Web Pro",
        price: "350",
        priceCurrency: "USD",
        description: "Sitio de hasta 6 páginas con SEO local y libro de marca completo.",
        url: `${SITE_URL}/#planes`,
      },
      {
        "@type": "Offer",
        name: "Tu Web, Tu Presupuesto",
        description: "Proyecto a la medida del presupuesto del cliente.",
        priceCurrency: "USD",
        url: `${SITE_URL}/#planes`,
      },
    ],
  };
}

export const homeFaqs = [
  {
    q: "¿Cuánto cuesta una página web en Honduras con Nexus?",
    a: "La Web Esencial cuesta 150 USD (landing page) y la Web Pro 350 USD (hasta 6 páginas con SEO local). Si necesitas algo distinto, con Tu Web, Tu Presupuesto nos dices cuánto quieres invertir y armamos el mejor alcance posible. Todos los planes son pago único e incluyen libro de marca.",
  },
  {
    q: "¿Qué es el libro de marca que incluyen?",
    a: "Es el manual de identidad de tu negocio: logo y sus versiones, paleta de colores, tipografías, aplicaciones (tarjetas, redes, empaques) y tono de voz. La Web Esencial incluye la versión esencial y la Web Pro la versión completa. Lo recibes en PDF con archivos PNG y SVG.",
  },
  {
    q: "¿Cuánto tarda tener mi página web lista?",
    a: "La Web Esencial se entrega en 5 a 7 días y la Web Pro en 10 a 15 días, contando desde que tenemos tu información (textos, fotos y datos del negocio). Si no tienes contenido, te ayudamos a crearlo.",
  },
  {
    q: "¿El dominio y el hosting están incluidos?",
    a: "El dominio (.com o .hn) y el hosting se pagan aparte porque quedan a tu nombre. Te ayudamos a comprarlos y configurarlos, y ofrecemos un plan mensual opcional de hosting y mantenimiento.",
  },
  {
    q: "¿Trabajan con negocios fuera de Tegucigalpa y San Pedro Sula?",
    a: "Sí. Trabajamos con negocios de todo Honduras (El Progreso, Cofradía, La Ceiba, Comayagua y más) e incluso fuera del país, como España. Todo el proceso se coordina por WhatsApp y videollamada.",
  },
  {
    q: "¿Mi web va a aparecer en Google?",
    a: "Cada web sale con SEO básico: títulos, descripciones, velocidad, datos estructurados y sitemap. La Web Pro incluye además SEO local y configuración de tu perfil de Google Business para aparecer en Maps cuando te buscan en tu ciudad.",
  },
  {
    q: "¿Quién es Nexus Global o Nexus Honduras?",
    a: "Nexus Global (también conocido como Nexus Honduras) es un estudio hondureño de desarrollo web y soluciones empresariales. Creamos páginas web con libro de marca, tiendas en línea, CRM, sistemas como MiVisita y marketing digital. WhatsApp: +504 9882-3627. Instagram: @nexusglobalhn.",
  },
];

export function faqJsonLd(faqs: { q: string; a: string }[] = homeFaqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
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
