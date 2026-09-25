export type WorkItem = {
  name: string;
  url: string;
  image: string;
  sector: string;
  location: string;
  summary: string;
  tags: string[];
};

export const WORK: WorkItem[] = [
  {
    name: "Arte Antone",
    url: "https://arte-antone.vercel.app/",
    image: "/work/arte-antone.jpg",
    sector: "Tienda en línea",
    location: "Cofradía, Cortés",
    summary: "Tienda de recuerdos personalizados con catálogo, carrito, favoritos y pedidos a todo Honduras.",
    tags: ["E-commerce", "Catálogo", "Branding"],
  },
  {
    name: "Haze Puff",
    url: "https://haze-puff.vercel.app/",
    image: "/work/haze-puff.jpg",
    sector: "Retail",
    location: "Cofradía, Cortés",
    summary: "Catálogo con pedido directo por WhatsApp, panel para actualizar productos y mapa de ubicación.",
    tags: ["Catálogo", "WhatsApp", "Admin"],
  },
  {
    name: "Secaira Inmobiliaria",
    url: "https://secairainmobiliaria.com",
    image: "/work/secaira.jpg",
    sector: "Bienes raíces",
    location: "San Pedro Sula",
    summary: "Portal inmobiliario con inmuebles destacados, agenda de citas y acceso para el equipo.",
    tags: ["Portal", "Citas", "SEO local"],
  },
  {
    name: "RoseLune",
    url: "https://roselunehn.com",
    image: "/work/roselune.jpg",
    sector: "Floristería",
    location: "El Progreso y SPS",
    summary: "Catálogo floral por categorías con compra por WhatsApp y preguntas frecuentes para Google.",
    tags: ["Catálogo", "WhatsApp", "SEO"],
  },
  {
    name: "La Gran Casa Blanca",
    url: "https://www.lagrancasablanca.com",
    image: "/work/casablanca.jpg",
    sector: "Entretenimiento",
    location: "San Pedro Sula",
    summary: "Tres marcas nocturnas en un sitio: eventos, horarios, ubicación y asistente por WhatsApp.",
    tags: ["Eventos", "Multi-marca", "Chatbot"],
  },
  {
    name: "Marta Martínez Estética",
    url: "https://www.martamartinezestetica.com/",
    image: "/work/marta.jpg",
    sector: "Estética",
    location: "Zaragoza, España",
    summary: "Carta de servicios filtrable, tarjetas de regalo interactivas y reservas por WhatsApp.",
    tags: ["Reservas", "Internacional", "UX"],
  },
  {
    name: "Stellare",
    url: "https://stellare.co",
    image: "/work/stellare.jpg",
    sector: "Joyería",
    location: "Honduras",
    summary: "Tienda de pulseras italianas y charms con configurador “Crea tu pulsera”.",
    tags: ["E-commerce", "Configurador"],
  },
  {
    name: "MiVisita",
    url: "https://mivisita.app",
    image: "/work/mivisita.jpg",
    sector: "Software (SaaS)",
    location: "Honduras",
    summary: "App de seguridad residencial: QR para visitas, portería, reservas y reportes PDF.",
    tags: ["PWA", "SaaS", "Sistemas"],
  },
];

export const DEMOS = [
  {
    name: "Constructora",
    url: "https://constructora-template-pink.vercel.app/",
    image: "/work/demo-constructora.jpg",
    text: "Proyectos, servicios y presupuestos para empresas de construcción.",
  },
  {
    name: "Cafetería",
    url: "https://cafe-template-mauve.vercel.app/",
    image: "/work/demo-cafe.jpg",
    text: "Menú, ambiente, reservas y redes para coffee shops y restaurantes.",
  },
  {
    name: "Clínica dental",
    url: "https://dentista-template.vercel.app/",
    image: "/work/demo-dentista.jpg",
    text: "Tratamientos, confianza y citas para clínicas y consultorios.",
  },
  {
    name: "Inmobiliaria",
    url: "https://inmobiliaria-template.vercel.app/",
    image: "/work/demo-inmobiliaria.jpg",
    text: "Propiedades destacadas, servicios y agenda de visitas.",
  },
];
