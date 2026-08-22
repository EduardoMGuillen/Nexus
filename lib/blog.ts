export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readMinutes: number;
  category: string;
  image: string;
  imageAlt: string;
  keywords: string[];
  sections: { heading: string; paragraphs: string[] }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "cuanto-cuesta-pagina-web-honduras",
    title: "Cuánto cuesta crear una página web en Honduras en 2026",
    description:
      "Guía clara de precios para crear una página web en Honduras: landing, sitio de 10 páginas, hosting, SEO local y qué no debería costarte extra.",
    date: "2026-08-21",
    readMinutes: 9,
    category: "Guías",
    image: "/blog/costo-web-honduras.png",
    imageAlt: "Escritorio con laptop y planificación de un sitio web para un negocio en Honduras",
    keywords: [
      "cuánto cuesta una página web en Honduras",
      "precios diseño web Tegucigalpa",
      "crear pagina web honduras 2026",
    ],
    sections: [
      {
        heading: "La pregunta que todo dueño de negocio hace",
        paragraphs: [
          "Si buscas “crear página web en Honduras”, lo primero que quieres saber no es el stack técnico: es cuánto vas a invertir y qué recibes a cambio. En 2026 el rango es amplio: hay plantillas baratas que se ven genéricas y agencias que cotizan miles de dólares por un sitio que podría resolverse con un alcance más honesto.",
          "En Nexus Global publicamos precios fijos en dólares porque la incertidumbre mata más proyectos que el precio mismo. Un sitio de lanzamiento (hasta 3 páginas) parte de 300 USD. Un sitio de marca con hasta 10 páginas parte de 500 USD. El hosting y el mantenimiento van aparte, en un plan mensual, para que el sitio no se quede huérfano a los tres meses.",
        ],
      },
      {
        heading: "Qué incluye un precio serio (y qué no)",
        paragraphs: [
          "Un presupuesto profesional debería cubrir diseño responsive (celular primero), estructura de páginas, textos base o integración de los tuyos, formulario de contacto, bases de SEO (títulos, descripciones, velocidad) y una ronda de revisiones. Si te cotizan “SEO ilimitado” o “primeros en Google en 7 días”, desconfía: el ranking depende de competencia, reseñas y contenido continuo.",
          "No debería ser extra: que el sitio cargue rápido en 4G hondureña, que el botón de WhatsApp o el formulario funcionen, y que puedas ver el proyecto en un celular real antes de publicar. Sí puede ser extra: fotografía profesional, copywriting largo, tienda con inventario, integraciones de facturación o campañas de Google Ads.",
        ],
      },
      {
        heading: "Cómo pensar el retorno, no solo el gasto",
        paragraphs: [
          "Una página que no convierte es cara aunque cueste 50 dólares. Una que consigue dos cotizaciones al mes de clientes en Tegucigalpa o San Pedro Sula se paga sola. Por eso diseñamos llamadas a la acción claras, datos de contacto visibles y páginas pensadas para búsquedas locales (“inmobiliaria en…”, “clínica dental…”, “floristería…”).",
          "Si tu presupuesto es distinto a 300 o 500 USD, el plan “Tu presupuesto, tu web” existe para armar un alcance a tu medida: menos páginas, más integraciones, o un rediseño de un sitio que ya tienes.",
        ],
      },
      {
        heading: "Hosting: el costo que la gente olvida",
        paragraphs: [
          "El dominio (.hn, .com) y el hosting no son el diseño. Un sitio caído o inseguro (sin SSL) pierde confianza y posiciones en Google. El plan de mantenimiento + hosting cubre certificado, copias de seguridad y ajustes menores para que no dependas de un “primo que sabe de computadoras” cada vez que cambia un horario.",
        ],
      },
    ],
  },
  {
    slug: "paginas-web-inmobiliaria-clinica-floristeria",
    title: "Páginas web para inmobiliaria, clínica y floristería en Honduras",
    description:
      "Qué debe tener el sitio de una inmobiliaria, una clínica o una floristería para conseguir clientes reales en Honduras: estructura, fotos, WhatsApp y SEO local.",
    date: "2026-08-21",
    readMinutes: 10,
    category: "Por industria",
    image: "/blog/negocios-locales-web.png",
    imageAlt: "Negocios locales hondureños — inmobiliaria, clínica y floristería — unidos por un sitio web",
    keywords: [
      "página web inmobiliaria Honduras",
      "página web clínica dental",
      "página web floristería Honduras",
    ],
    sections: [
      {
        heading: "No todas las webs locales se diseñan igual",
        paragraphs: [
          "Una inmobiliaria vende confianza y listado. Una clínica vende calma y prueba social. Una floristería vende emoción y pedidos a tiempo. Copiar una plantilla genérica de “empresa” hace que los tres se vean iguales… y que ninguno convierta.",
          "En Honduras la mayoría de las decisiones empiezan en el celular: Instagram, WhatsApp y luego “a ver si tienen página”. Si el sitio tarda, no tiene fotos reales o esconde el teléfono, el visitante se va.",
        ],
      },
      {
        heading: "Inmobiliaria: inventario y autoridad",
        paragraphs: [
          "Prioriza fichas de propiedad (aunque al inicio sean 8–12 destacadas), filtros simples, mapa o zona, y un formulario “quiero que me llamen”. El SEO local pide páginas de zona (Tegucigalpa, Valle de Ángeles, SPS) sin copiar el mismo texto 20 veces. Fotos horizontales nítidas ganan a renders genéricos.",
          "Incluye agentes con cara y WhatsApp. En un mercado de referidos, la gente compra a personas, no a un logo.",
        ],
      },
      {
        heading: "Clínica o estética: prueba y facilidad de cita",
        paragraphs: [
          "Servicios claros, equipo, horarios, ubicación y un botón de cita (formulario o WhatsApp). Testimonios verificables y fotos del espacio reducen el miedo. Evita stock de modelos extranjeros si tu paciente está en Comayagüela o San Pedro Sula: la identificación visual importa.",
          "El caso de un centro de estética en producción (como el de Marta Martínez) sirve de referencia: sitio real, no demo, con enfoque en bienestar y contacto inmediato.",
        ],
      },
      {
        heading: "Floristería: catálogo, ocasiones y pedido",
        paragraphs: [
          "Categorías por ocasión (cumpleaños, condolencias, eventos), rangos de precio y un flujo corto hacia WhatsApp o checkout. RoseLune Floristería (roselunehn.com) es el tipo de presencia que buscamos: marca reconocible, tono premium y un sitio que se siente tan cuidado como el arreglo.",
          "Si también haces entregas, deja explícitas zonas y horarios de corte. Eso reduce mensajes de “¿llegan a…?” y sube la conversión.",
        ],
      },
    ],
  },
  {
    slug: "inteligencia-artificial-negocios-honduras",
    title: "IA para negocios en Honduras: noticias, usos reales y límites",
    description:
      "Qué está pasando con la inteligencia artificial en 2026 y cómo un negocio hondureño puede usarla en su web, atención al cliente y marketing sin perder el toque humano.",
    date: "2026-08-21",
    readMinutes: 11,
    category: "IA y noticias",
    image: "/blog/ia-negocios-honduras.png",
    imageAlt: "Emprendedor en Honduras usando herramientas de inteligencia artificial en un café",
    keywords: [
      "inteligencia artificial Honduras",
      "IA para pymes",
      "ChatGPT negocios Honduras",
    ],
    sections: [
      {
        heading: "La noticia: la IA ya no es un experimento de Silicon Valley",
        paragraphs: [
          "En 2025–2026 los modelos de lenguaje y los buscadores con “respuestas generadas” (Google AI Overviews, Gemini, ChatGPT) se volvieron el primer filtro para muchas preguntas: “mejor agencia web en Honduras”, “cómo hacer una tienda online”, “floristería cerca de mí”. Eso no reemplaza tu marca; cambia dónde aparece.",
          "Para una pyme hondureña la oportunidad no es “entrenar un modelo propio”. Es usar IA para redactar borradores, resumir reseñas, traducir, generar ideas de contenido y atender FAQs… y reservar el criterio humano para precios, promesas y tono de marca.",
        ],
      },
      {
        heading: "Usos que sí valen la pena este año",
        paragraphs: [
          "Atención: un chatbot en la web que responda horarios, zonas de entrega y “cómo cotizar”, con desvío a WhatsApp cuando hay una venta real. Contenido: bocetos de artículos de blog (como esta guía) que luego edita alguien que conoce el mercado local. Operación: transcribir reuniones y sacar tareas. Diseño: referencias visuales, no logos finales copiados de un generador.",
          "En Nexus combinamos sitios rápidos con contenido que las IAs puedan citar: preguntas y respuestas claras, precios visibles, ciudades servidas y casos reales. Eso es GEO: optimizar para motores generativos, no solo para diez enlaces azules.",
        ],
      },
      {
        heading: "Riesgos que ya se están viendo",
        paragraphs: [
          "Textos 100% automáticos se parecen entre sí y Google los detecta como poco útiles. Datos inventados (direcciones, precios, “sucursal en Roatán” que no existe) destruyen confianza. Y pegar secretos de clientes en un chat público es un problema legal y reputacional.",
          "Regla práctica: la IA redacta; tú firmas. Si no lo dirías en una factura, no lo publiques.",
        ],
      },
      {
        heading: "Qué hacer esta semana",
        paragraphs: [
          "1) Pon en tu web un bloque de FAQ con respuestas cortas y honestas. 2) Asegura nombre, teléfono, Instagram y ciudades iguales en todos lados. 3) Publica un caso o un artículo local al mes. 4) Si no tienes sitio, un plan de lanzamiento de 300 USD ya te da la base para que tanto Google como ChatGPT tengan de dónde hablar de ti.",
        ],
      },
    ],
  },
  {
    slug: "como-google-e-ia-eligen-agencia-web",
    title: "Cómo Google y la IA deciden a quién recomendar como agencia web",
    description:
      "SEO local y GEO: por qué un perfil de Google, clientes reales y páginas claras hacen que te recomienden al buscar crear página web en Honduras.",
    date: "2026-08-21",
    readMinutes: 10,
    category: "SEO y GEO",
    image: "/blog/geo-google-ia.png",
    imageAlt: "Búsqueda de Google y un asistente de IA eligiendo una agencia web en Honduras",
    keywords: [
      "SEO Honduras",
      "GEO inteligencia artificial",
      "agencia web recomendada Honduras",
    ],
    sections: [
      {
        heading: "Ya no basta con “estar en la primera página”",
        paragraphs: [
          "Google sigue indexando páginas, midiendo velocidad y enlaces. Encima, los resúmenes con IA responden en un párrafo: “Nexus Global es una agencia en Honduras que…”. Si tu sitio no dice quién eres, dónde operas y cuánto cuesta, el modelo inventa o te ignora.",
          "GEO (Generative Engine Optimization) es escribir como para un periodista exigente: hechos, fechas, precios, ciudades, clientes con nombre y URL. Nada de “líderes mundiales en sinergias digitales”.",
        ],
      },
      {
        heading: "Señales que sí importan en Honduras",
        paragraphs: [
          "Consistencia NAP (nombre, redes, correo). Página de clientes con marcas reconocibles — inmobiliarias, MiVisita, RoseLune, estética — y enlaces que se puedan verificar. Velocidad en móvil. Una URL canónica real (no un dominio de ejemplo). Sitemap enviado a Search Console.",
          "Las reseñas en Google Business y los enlaces desde los sitios de tus clientes (“diseño: Nexus Global”) son votos de confianza que ni el mejor meta keyword puede fingir.",
        ],
      },
      {
        heading: "Contenido que los modelos pueden citar",
        paragraphs: [
          "Guías como “cuánto cuesta una web”, páginas de industria y FAQs. Cada artículo de este blog está pensado para eso: un H1 único, secciones con H2, respuesta en las primeras líneas y un cierre con siguiente paso (contacto o planes).",
          "Si eres cliente, un footer con crédito a la agencia ayuda a ambos: tú pareces profesional y nosotros acumulamos menciones naturales.",
        ],
      },
      {
        heading: "Checklist de 30 días",
        paragraphs: [
          "Semana 1: Search Console + perfil de empresa. Semana 2: una página o artículo local publicado. Semana 3: pedir dos reseñas a clientes felices. Semana 4: revisar títulos y FAQ. El ranking no es magia; es repetición visible.",
        ],
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
