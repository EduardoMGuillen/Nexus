export type Plan = {
  id: "esencial" | "pro" | "medida";
  name: string;
  price: string;
  priceNote: string;
  tagline: string;
  idealFor: string;
  features: string[];
  brandBook: string;
  delivery: string;
  cta: string;
  whatsappMessage: string;
  featured?: boolean;
};

export const PLANS: Plan[] = [
  {
    id: "esencial",
    name: "Web Esencial",
    price: "$150",
    priceNote: "pago único",
    tagline: "Tu negocio en línea, profesional y listo para recibir clientes.",
    idealFor: "Emprendedores y negocios que arrancan",
    features: [
      "Landing page de una página (hasta 5 secciones)",
      "Diseño a medida, 100% adaptado a celular",
      "Botón y formulario directo a tu WhatsApp",
      "Mapa, horarios y enlaces a tus redes",
      "SEO básico: títulos, descripciones y velocidad",
      "Todas las rondas de ajustes necesarias",
    ],
    brandBook: "Libro de marca esencial: logo, paleta y tipografías",
    delivery: "Entrega en 5 a 7 días",
    cta: "Quiero la Web Esencial",
    whatsappMessage:
      "Hola Nexus, me interesa la Web Esencial de $150 con libro de marca. ¿Me dan más información?",
  },
  {
    id: "pro",
    name: "Web Pro",
    price: "$350",
    priceNote: "pago único",
    tagline: "Para vender más y aparecer en Google cuando te buscan.",
    idealFor: "Negocios que quieren crecer y posicionarse",
    features: [
      "Sitio de hasta 6 páginas",
      "Catálogo de productos o servicios",
      "SEO local + perfil de Google Business configurado",
      "Blog o galería para publicar contenido",
      "WhatsApp, Instagram y formularios integrados",
      "Google Analytics para medir visitas",
      "Todas las rondas de ajustes necesarias",
    ],
    brandBook:
      "Libro de marca completo: usos del logo, aplicaciones, tono de voz y plantillas para redes",
    delivery: "Entrega en 10 a 15 días",
    cta: "Quiero la Web Pro",
    whatsappMessage:
      "Hola Nexus, me interesa la Web Pro de $350 con libro de marca completo. ¿Podemos hablar?",
    featured: true,
  },
  {
    id: "medida",
    name: "Tu Web, Tu Presupuesto",
    price: "A tu medida",
    priceNote: "tú pones el presupuesto",
    tagline: "Nos dices cuánto quieres invertir y armamos el mejor alcance posible.",
    idealFor: "Proyectos especiales, tiendas y sistemas",
    features: [
      "Tiendas en línea, reservas y pagos",
      "CRM, paneles y sistemas a la medida",
      "Rediseño de tu sitio actual",
      "Integraciones con WhatsApp, correo y automatizaciones",
      "Alcance y precio por escrito antes de empezar",
      "Todas las rondas de ajustes necesarias",
    ],
    brandBook: "Libro de marca según el alcance del proyecto",
    delivery: "Tiempo según alcance",
    cta: "Cotizar mi proyecto",
    whatsappMessage:
      "Hola Nexus, quiero cotizar un proyecto con la modalidad Tu Web, Tu Presupuesto. Mi presupuesto es de: ",
  },
];

export const PLAN_EXTRAS = [
  "Dominio y hosting: te ayudamos a comprarlos y configurarlos",
  "Plan mensual opcional de hosting + mantenimiento",
  "Fotos, textos y contenido: podemos crearlos contigo",
];
