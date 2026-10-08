export type BlogAccent = "teal" | "violet" | "amber" | "emerald" | "rose" | "blue";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readMinutes: number;
  category: string;
  coverLabel: string;
  accent: BlogAccent;
  image?: string;
  imageAlt: string;
  keywords: string[];
  sections: { heading: string; paragraphs: string[] }[];
  sources?: { label: string; url: string }[];
};

const POSTS: BlogPost[] = [
  {
    slug: "claude-opus-5-5-que-es-negocios",
    title: "Claude Opus 5.5: qué es, qué cambia y cómo lo puede usar tu negocio",
    description:
      "Anthropic lanzó Claude Opus 5.5 el 22 de septiembre de 2026: rendimiento de nivel Fable 5.1 por 40% menos costo. Te explicamos qué significa para una pyme en Honduras.",
    date: "2026-09-24",
    readMinutes: 7,
    category: "IA y noticias",
    coverLabel: "Opus 5.5",
    accent: "amber",
    imageAlt: "Claude Opus 5.5 de Anthropic explicado para negocios",
    keywords: [
      "Claude Opus 5.5",
      "Anthropic Opus 5.5 precio",
      "Claude 5.5 para negocios",
      "inteligencia artificial Honduras 2026",
    ],
    sections: [
      {
        heading: "La noticia en 30 segundos",
        paragraphs: [
          "El 22 de septiembre de 2026 Anthropic presentó Claude Opus 5.5, el primer modelo de la nueva familia Claude 5.5. Según la empresa, rinde al nivel de Claude Fable 5.1 en la mayoría de tareas y cuesta 40% menos de operar que Opus 5. También genera respuestas más de 30% más rápido que su antecesor.",
          "Está pensado para trabajo largo y autónomo: programar, analizar documentos, operar herramientas y resolver tareas de varios pasos sin que alguien lo esté guiando cada minuto. Ya está disponible en la API de Claude, Amazon Bedrock, Google Cloud y Microsoft Foundry.",
        ],
      },
      {
        heading: "Los datos que importan",
        paragraphs: [
          "Precio en la API: 4 USD por millón de tokens de entrada y 20 USD por millón de salida. Para ponerlo en perspectiva, un millón de tokens equivale aproximadamente a 750,000 palabras: miles de correos, contratos o conversaciones de clientes.",
          "Memoria de trabajo (contexto) de 1 millón de tokens, lo que le permite leer de una sola vez un manual completo, un historial de ventas o todo el catálogo de una tienda. El razonamiento adaptativo viene siempre activado: el modelo decide cuánto “pensar” según la dificultad de la tarea. Su conocimiento llega hasta junio de 2026.",
          "Anthropic anunció que Sonnet 5.5 y Haiku 5.5, las versiones más ligeras y económicas de la familia, llegarán en las próximas semanas.",
        ],
      },
      {
        heading: "¿Qué significa para un negocio en Honduras?",
        paragraphs: [
          "No necesitas contratar la API para aprovecharlo: la mayoría de dueños de negocio lo usará a través de la app de Claude o de herramientas que ya lo integran. Pero sí cambia lo que es posible construir a un costo razonable.",
          "Ejemplos concretos: un asistente que lee todas las preguntas que te hacen por WhatsApp y redacta respuestas con tu tono de marca; un agente que revisa inventario y te avisa qué reordenar; o un sistema que resume cada lead de tu web y lo coloca en tu CRM con prioridad. Tareas que antes necesitaban un modelo carísimo ahora cuestan una fracción.",
        ],
      },
      {
        heading: "Cómo empezar sin complicarte",
        paragraphs: [
          "1) Identifica una tarea repetitiva que te quite tiempo cada semana (responder preguntas frecuentes, redactar descripciones de productos, ordenar cotizaciones). 2) Pruébala manualmente en la app con ejemplos reales. 3) Si funciona, automatízala conectándola a tu web, WhatsApp o CRM.",
          "En Nexus integramos modelos como Claude en páginas web y sistemas a medida: formularios que califican leads, asistentes que responden con la información de tu negocio y paneles que resumen lo importante. Si quieres ver qué se puede automatizar en tu caso, escríbenos por WhatsApp.",
        ],
      },
    ],
    sources: [
      { label: "Anthropic: Introducing Claude Opus 5.5", url: "https://www.anthropic.com/claude-opus-5-5" },
      { label: "Documentación de Claude Opus 5.5", url: "https://platform.claude.com/docs/en/models/opus-5-5/overview" },
    ],
  },
  {
    slug: "gpt-5-6-vs-claude-opus-5-5-vs-gemini-3-8",
    title: "GPT-5.6 vs Claude Opus 5.5 vs Gemini 3.8: cuál usar en tu negocio en 2026",
    description:
      "Comparativa clara y sin tecnicismos de los tres grandes modelos de IA de 2026: precios, fortalezas y qué conviene para ventas, atención al cliente y contenido.",
    date: "2026-09-23",
    readMinutes: 9,
    category: "IA y noticias",
    coverLabel: "GPT-5.6 · Opus 5.5 · Gemini 3.8",
    accent: "violet",
    imageAlt: "Comparativa de modelos de inteligencia artificial GPT-5.6, Claude Opus 5.5 y Gemini 3.8",
    keywords: [
      "GPT-5.6 vs Claude Opus 5.5",
      "Gemini 3.8 Flash",
      "mejor inteligencia artificial para negocios 2026",
      "comparativa IA 2026",
    ],
    sections: [
      {
        heading: "Tres lanzamientos en tres meses",
        paragraphs: [
          "2026 ha sido el año más movido de la inteligencia artificial. En julio OpenAI lanzó la familia GPT-5.6; en septiembre Google presentó Gemini 3.8 Flash y Anthropic respondió con Claude Opus 5.5. Si tienes un negocio, la pregunta no es cuál es “el mejor” en abstracto, sino cuál resuelve mejor tu tarea al menor costo.",
        ],
      },
      {
        heading: "OpenAI GPT-5.6: Sol, Terra y Luna",
        paragraphs: [
          "Desde el 9 de julio de 2026 GPT-5.6 está disponible en ChatGPT, Codex y la API en tres niveles: Sol (el más potente), Terra (equilibrado para el día a día) y Luna (el más rápido y económico). OpenAI ha bajado precios varias veces: el 30 de julio redujo Luna 80% y Terra 20%, y el 21 de agosto rebajó Sol más de 20% por tres meses.",
          "Para quién: si tu equipo ya vive en ChatGPT, Luna y Terra son excelentes para redactar, resumir y responder a volumen. Sol conviene para análisis complejos y tareas largas.",
        ],
      },
      {
        heading: "Anthropic Claude Opus 5.5",
        paragraphs: [
          "Lanzado el 22 de septiembre de 2026. Rinde al nivel de Claude Fable 5.1 en la mayoría de tareas, cuesta 40% menos que Opus 5 y en la API vale 4 USD por millón de tokens de entrada y 20 USD de salida, con memoria de 1 millón de tokens.",
          "Para quién: destaca en trabajo autónomo de varios pasos, programación y documentos largos. Muy bueno para agentes que operan herramientas (por ejemplo, un asistente que consulta tu inventario y responde a clientes) y para textos que suenan naturales y siguen reglas de marca.",
        ],
      },
      {
        heading: "Google Gemini 3.8",
        paragraphs: [
          "Gemini 3.8 Flash salió el 2 de septiembre de 2026 con memoria de 1 millón de tokens y niveles de razonamiento ajustables (bajo, medio y alto). Su precio introductorio es de 0.75 USD por millón de tokens de entrada y 3.75 USD de salida hasta el 31 de diciembre de 2026; desde 2027 sube a 1.50 y 7.50 USD. Está en la app de Gemini, en el Modo IA del buscador y en Google Sheets.",
          "Además, Google lanzó Gemini 3.8 Live para conversaciones de voz en tiempo real y, el 24 de septiembre, Live Avatar: un avatar con video que habla y gesticula en 97 idiomas, disponible en Gemini Enterprise.",
          "Para quién: la opción más económica para alto volumen y la mejor integrada con Google (Search, Sheets, Workspace). Ideal si quieres voz o avatares para atención al cliente.",
        ],
      },
      {
        heading: "Nuestra recomendación práctica",
        paragraphs: [
          "Atención al cliente por WhatsApp a gran volumen: un modelo económico como GPT-5.6 Luna o Gemini 3.8 Flash. Agentes que ejecutan tareas y leen mucha información: Claude Opus 5.5. Contenido para redes y web: cualquiera de los tres, siempre con revisión humana y tu libro de marca como guía de tono.",
          "Lo más importante no es el modelo, sino la integración: que la IA tenga acceso a la información correcta de tu negocio (precios, horarios, catálogo) y que entregue los clientes a una persona cuando hay una venta real. Eso es lo que construimos en Nexus.",
        ],
      },
    ],
    sources: [
      { label: "OpenAI: GPT-5.6", url: "https://openai.com/index/gpt-5-6/" },
      { label: "Anthropic: Claude Opus 5.5", url: "https://www.anthropic.com/claude-opus-5-5" },
      { label: "Google: Gemini 3.8 Flash", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/" },
      { label: "Google AI: precios de Gemini 3.8 Flash", url: "https://ai.google.dev/gemini-api/docs/latest-model" },
      { label: "Google: Gemini 3.8 Live con Live Avatar", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-with-live-avatar/" },
    ],
  },
  {
    slug: "gemini-3-8-live-avatar-atencion-al-cliente",
    title: "Gemini 3.8 Live Avatar: los avatares con IA llegan a la atención al cliente",
    description:
      "Google presentó Live Avatar el 24 de septiembre de 2026: un asistente con rostro, voz y 97 idiomas. Qué es, cómo funciona y qué puede aprovechar hoy un negocio hondureño.",
    date: "2026-09-24",
    readMinutes: 6,
    category: "IA y noticias",
    coverLabel: "Live Avatar",
    accent: "blue",
    imageAlt: "Avatar de inteligencia artificial atendiendo clientes en tiempo real",
    keywords: [
      "Gemini 3.8 Live Avatar",
      "avatar con inteligencia artificial",
      "atención al cliente con IA",
      "Gemini Live Honduras",
    ],
    sections: [
      {
        heading: "Qué anunció Google",
        paragraphs: [
          "Una semana después de lanzar Gemini 3.8 Live (conversación por voz en tiempo real), Google presentó el 24 de septiembre de 2026 Gemini 3.8 Live con Live Avatar: un asistente que no solo escucha y habla, sino que aparece en video con un rostro que se mueve y sincroniza los labios con lo que dice.",
          "Google destaca que el avatar cambia de idioma de forma fluida entre 97 idiomas sin perder calidad de video. Por ahora está disponible en Gemini Enterprise, la oferta de Google para empresas.",
        ],
      },
      {
        heading: "¿Por qué importa?",
        paragraphs: [
          "Durante años los chatbots fueron cajitas de texto con respuestas rígidas. Con voz natural y ahora con video, la conversación con una IA se parece mucho más a hablar con una persona. Para industrias donde la confianza es clave (clínicas, hoteles, inmobiliarias, turismo) eso cambia la experiencia.",
          "Imagina un hotel en Roatán que atiende a turistas en inglés, francés o alemán a las 2 de la mañana, o una clínica que explica la preparación para un examen con un asistente que el paciente puede ver y escuchar.",
        ],
      },
      {
        heading: "Seamos realistas: qué puedes hacer hoy",
        paragraphs: [
          "Los avatares empresariales todavía son una tecnología nueva y de nivel corporativo. Para la mayoría de negocios en Honduras, el paso inteligente hoy es otro: tener una web clara con preguntas frecuentes bien escritas, un catálogo actualizado y un asistente de texto o voz en WhatsApp que responda lo básico y pase la conversación a una persona cuando hay una venta.",
          "Esa base es la misma que un avatar necesitará mañana: la IA solo puede responder bien si tu información está ordenada. Por eso un buen sitio web y un libro de marca con tono de voz definido son la mejor preparación.",
        ],
      },
      {
        heading: "Cómo prepararte",
        paragraphs: [
          "1) Escribe las 20 preguntas que más te hacen tus clientes y sus respuestas. 2) Define cómo habla tu marca (formal, cercana, divertida). 3) Centraliza tus leads en un CRM para no perder a nadie. En Nexus te ayudamos con las tres cosas: web, libro de marca y sistemas.",
        ],
      },
    ],
    sources: [
      { label: "Google: Introducing Gemini 3.8 Live with Live Avatar", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-with-live-avatar/" },
    ],
  },
  {
    slug: "agentes-ia-whatsapp-negocios-honduras",
    title: "Agentes de IA en WhatsApp: cómo vender 24/7 desde Honduras",
    description:
      "Guía práctica para usar inteligencia artificial en WhatsApp: qué puede responder un agente, qué no debe hacer y cómo conectarlo con tu web y tu CRM.",
    date: "2026-09-20",
    readMinutes: 8,
    category: "Automatización",
    coverLabel: "WhatsApp + IA",
    accent: "emerald",
    imageAlt: "Chat de WhatsApp con un asistente de inteligencia artificial respondiendo a un cliente",
    keywords: [
      "chatbot WhatsApp Honduras",
      "agente de IA WhatsApp",
      "automatizar WhatsApp negocio",
      "vender por WhatsApp",
    ],
    sections: [
      {
        heading: "WhatsApp es tu verdadera tienda",
        paragraphs: [
          "En Honduras la mayoría de ventas pequeñas y medianas terminan en un chat de WhatsApp. El problema: los mensajes llegan a las 10 de la noche, los domingos o mientras atiendes a otro cliente. Cada mensaje sin responder es una venta que se va con la competencia.",
          "Los modelos de IA de 2026 (GPT-5.6, Claude Opus 5.5, Gemini 3.8) entienden preguntas escritas de forma natural, con errores de ortografía y modismos hondureños incluidos. Eso hace posible un agente que responde al instante con información real de tu negocio.",
        ],
      },
      {
        heading: "Qué puede hacer un agente de IA",
        paragraphs: [
          "Responder precios, horarios, ubicación, zonas de entrega y disponibilidad. Enviar el catálogo o el enlace exacto del producto en tu web. Tomar datos para una cotización o reservar una cita. Clasificar al cliente (curioso, interesado, listo para comprar) y registrarlo en tu CRM.",
          "Un ejemplo real: para La Gran Casa Blanca en San Pedro Sula creamos un asistente por WhatsApp (AstroBot) que atiende consultas sobre eventos y reservaciones de sus tres ambientes.",
        ],
      },
      {
        heading: "Qué NO debe hacer",
        paragraphs: [
          "Inventar precios, prometer descuentos que no existen o cerrar ventas complejas sin una persona. La regla que usamos: la IA informa y califica; una persona negocia y cierra. Todo agente debe tener un botón claro de “hablar con alguien” y horarios de respuesta humana.",
        ],
      },
      {
        heading: "Cómo se conecta con tu web y tu CRM",
        paragraphs: [
          "El flujo ideal: el cliente ve tu web (por ejemplo desde Google o Instagram), toca el botón de WhatsApp con un mensaje ya escrito (“Hola, me interesa la Web Pro”), el agente responde al instante y el lead queda guardado en tu CRM con su interés y la fecha. Tú solo entras cuando hay que cerrar.",
          "Por eso todas las webs que hacemos en Nexus incluyen botones de WhatsApp con mensajes precargados por producto o plan. Es el primer paso; el agente y el CRM se suman cuando el volumen lo justifica.",
        ],
      },
      {
        heading: "¿Cuándo vale la pena?",
        paragraphs: [
          "Si recibes más de 20 mensajes al día o pierdes clientes por no responder rápido, un agente se paga solo. Si recibes pocos, empieza por respuestas rápidas de WhatsApp Business y una web clara con preguntas frecuentes. Escríbenos y te decimos con honestidad qué te conviene.",
        ],
      },
    ],
  },
  {
    slug: "que-es-libro-de-marca",
    title: "Qué es un libro de marca y por qué tu negocio lo necesita",
    description:
      "El libro de marca define cómo se ve y cómo habla tu negocio: logo, colores, tipografías, aplicaciones y tono de voz. Te explicamos qué incluye y por qué lo entregamos con cada web.",
    date: "2026-09-18",
    readMinutes: 6,
    category: "Branding",
    coverLabel: "Libro de marca",
    accent: "rose",
    imageAlt: "Páginas de un libro de marca con logo, paleta de colores y tipografías",
    keywords: [
      "libro de marca",
      "manual de marca Honduras",
      "identidad corporativa pyme",
      "branding Honduras",
    ],
    sections: [
      {
        heading: "La definición sencilla",
        paragraphs: [
          "Un libro de marca (también llamado manual de marca o brand book) es el documento que define cómo se ve y cómo habla tu negocio. Es la guía que usa cualquier persona que diseñe algo para ti: tu web, un post de Instagram, un rótulo, un uniforme o una factura.",
          "Sin él, cada diseñador interpreta tu marca a su manera: un logo estirado aquí, un verde distinto allá, una tipografía nueva en cada flyer. El resultado es una marca que no se recuerda.",
        ],
      },
      {
        heading: "Qué incluye",
        paragraphs: [
          "Logotipo y sus versiones: a color, en blanco, en negro y en ícono, con el espacio mínimo que debe respetarse alrededor. Paleta de colores con sus códigos exactos (HEX para web, RGB y CMYK para impresión). Tipografías para títulos y textos. Aplicaciones: cómo se ve la marca en tarjetas, redes sociales, empaques y la web. Y tono de voz: cómo escribe tu marca, qué palabras usa y cuáles evita.",
        ],
      },
      {
        heading: "Por qué importa para vender",
        paragraphs: [
          "La coherencia genera confianza. Cuando un cliente ve la misma identidad en tu Instagram, tu web y tu local, percibe un negocio serio y establecido, aunque estés empezando. Esa confianza se traduce en que te escriban a ti y no a la competencia.",
          "También te ahorra dinero: cada vez que necesites un diseño nuevo, el diseñador ya tiene todas las reglas. Menos idas y vueltas, menos errores de impresión.",
        ],
      },
      {
        heading: "Por qué Nexus lo incluye con cada web",
        paragraphs: [
          "Porque una web espectacular sobre una marca inconsistente no funciona. Por eso la Web Esencial (150 USD) incluye un libro de marca esencial con logo, paleta y tipografías, y la Web Pro (350 USD) incluye el libro completo con aplicaciones, tono de voz y plantillas para redes.",
          "Lo recibes en PDF junto con los archivos de tu logo en PNG y SVG, listos para usar en imprenta, redes y cualquier proyecto futuro.",
        ],
      },
    ],
  },
  {
    slug: "cuanto-cuesta-pagina-web-honduras",
    title: "Cuánto cuesta crear una página web en Honduras en 2026",
    description:
      "Precios reales para crear una página web en Honduras en 2026: landing desde 150 USD, sitio completo desde 350 USD, qué incluye cada uno y qué no debería costarte extra.",
    date: "2026-09-24",
    readMinutes: 8,
    category: "Guías",
    coverLabel: "Desde $150",
    accent: "teal",
    image: "/blog/costo-web-honduras.png",
    imageAlt: "Escritorio con laptop y planificación de un sitio web para un negocio en Honduras",
    keywords: [
      "cuánto cuesta una página web en Honduras",
      "precio página web Honduras",
      "precios diseño web Tegucigalpa",
      "crear pagina web honduras 2026",
    ],
    sections: [
      {
        heading: "La respuesta corta",
        paragraphs: [
          "En 2026 una página web profesional en Honduras puede costar desde 150 USD. En Nexus Global publicamos precios fijos: la Web Esencial (landing page de una página) cuesta 150 USD y la Web Pro (sitio de hasta 6 páginas con SEO local) cuesta 350 USD. Ambas son pago único e incluyen libro de marca.",
          "Si necesitas algo distinto (tienda en línea, reservas, un sistema), existe la modalidad Tu Web, Tu Presupuesto: nos dices cuánto quieres invertir y armamos el mejor alcance posible, por escrito, antes de empezar.",
        ],
      },
      {
        heading: "Qué incluye un precio serio (y qué no)",
        paragraphs: [
          "Un presupuesto profesional debería cubrir diseño adaptado a celular, estructura de páginas, integración de tus textos y fotos, botón o formulario a WhatsApp, bases de SEO (títulos, descripciones, velocidad) y al menos una ronda de revisiones. Si te prometen “primeros en Google en 7 días”, desconfía: el posicionamiento depende de la competencia, las reseñas y el contenido constante.",
          "No debería ser extra: que el sitio cargue rápido con datos móviles, que el botón de WhatsApp funcione y que puedas ver el proyecto en tu celular antes de publicarlo. Sí puede ser extra: fotografía profesional, redacción extensa, tienda con inventario o campañas de anuncios.",
        ],
      },
      {
        heading: "Cómo pensar el retorno, no solo el gasto",
        paragraphs: [
          "Una página que no genera clientes es cara aunque cueste 50 dólares. Una que consigue dos cotizaciones al mes se paga sola. Por eso diseñamos llamadas a la acción claras, contacto visible y contenido pensado para búsquedas locales (“inmobiliaria en San Pedro Sula”, “clínica dental en Tegucigalpa”).",
        ],
      },
      {
        heading: "Dominio y hosting: el costo que la gente olvida",
        paragraphs: [
          "El dominio (.com o .hn) y el hosting se pagan aparte porque quedan a tu nombre. Te ayudamos a comprarlos y configurarlos. Un sitio caído o sin certificado de seguridad pierde confianza y posiciones en Google, por eso ofrecemos un plan mensual opcional de hosting y mantenimiento.",
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
    readMinutes: 9,
    category: "Por industria",
    coverLabel: "Webs por industria",
    accent: "emerald",
    image: "/blog/negocios-locales-web.png",
    imageAlt: "Negocios locales hondureños unidos por un sitio web",
    keywords: [
      "página web inmobiliaria Honduras",
      "página web clínica dental",
      "página web floristería Honduras",
    ],
    sections: [
      {
        heading: "No todas las webs locales se diseñan igual",
        paragraphs: [
          "Una inmobiliaria vende confianza e inventario. Una clínica vende calma y prueba social. Una floristería vende emoción y pedidos a tiempo. Copiar una plantilla genérica hace que los tres se vean iguales y que ninguno convierta.",
          "En Honduras la mayoría de decisiones empiezan en el celular: Instagram, WhatsApp y luego “a ver si tienen página”. Si el sitio tarda, no tiene fotos reales o esconde el teléfono, el visitante se va.",
        ],
      },
      {
        heading: "Inmobiliaria: inventario y autoridad",
        paragraphs: [
          "Prioriza fichas de propiedad (aunque al inicio sean 8 o 12 destacadas), filtros simples, zona y un formulario para agendar visita. Secaira Soluciones Inmobiliarias en San Pedro Sula es un buen ejemplo: inmuebles destacados, servicios claros y agenda de citas.",
          "Incluye agentes con rostro y WhatsApp. En un mercado de referidos, la gente le compra a personas, no a un logo.",
        ],
      },
      {
        heading: "Clínica o estética: prueba y facilidad de cita",
        paragraphs: [
          "Servicios claros, equipo, horarios, ubicación y un botón de cita. Testimonios verificables y fotos del espacio reducen el miedo. El sitio de Marta Martínez Estética combina carta de servicios filtrable, tarjetas de regalo y reservas por WhatsApp.",
        ],
      },
      {
        heading: "Floristería: catálogo, ocasiones y pedido",
        paragraphs: [
          "Categorías por ocasión, rangos de precio y un camino corto hacia WhatsApp. RoseLune Floristería (roselunehn.com) muestra su catálogo por categorías, entrega en El Progreso y San Pedro Sula y compra directa por chat.",
          "Si haces entregas, deja claras las zonas y horarios de corte. Eso reduce mensajes de “¿llegan a…?” y sube las ventas.",
        ],
      },
    ],
  },
  {
    slug: "inteligencia-artificial-negocios-honduras",
    title: "IA para negocios en Honduras: usos reales y límites",
    description:
      "Cómo un negocio hondureño puede usar inteligencia artificial en su web, atención al cliente y marketing sin perder el toque humano.",
    date: "2026-08-21",
    readMinutes: 8,
    category: "IA y noticias",
    coverLabel: "IA para pymes",
    accent: "teal",
    image: "/blog/ia-negocios-honduras.png",
    imageAlt: "Emprendedor en Honduras usando herramientas de inteligencia artificial",
    keywords: ["inteligencia artificial Honduras", "IA para pymes", "ChatGPT negocios Honduras"],
    sections: [
      {
        heading: "La IA ya no es un experimento",
        paragraphs: [
          "Los modelos de lenguaje y los buscadores con respuestas generadas (Google AI Overviews, el Modo IA, Gemini, ChatGPT) se volvieron el primer filtro para muchas preguntas: “mejor agencia web en Honduras”, “floristería cerca de mí”. Eso no reemplaza tu marca; cambia dónde aparece.",
          "Para una pyme hondureña la oportunidad no es entrenar un modelo propio. Es usar IA para redactar borradores, resumir reseñas, traducir, generar ideas de contenido y atender preguntas frecuentes, reservando el criterio humano para precios, promesas y tono de marca.",
        ],
      },
      {
        heading: "Usos que sí valen la pena",
        paragraphs: [
          "Atención: un asistente que responda horarios, zonas de entrega y cómo cotizar, con paso a WhatsApp cuando hay una venta real. Contenido: borradores de artículos que luego edita alguien que conoce el mercado local. Operación: transcribir reuniones y sacar tareas.",
          "En Nexus combinamos sitios rápidos con contenido que las IAs puedan citar: preguntas y respuestas claras, precios visibles, ciudades atendidas y casos reales.",
        ],
      },
      {
        heading: "Riesgos que ya se están viendo",
        paragraphs: [
          "Textos 100% automáticos se parecen entre sí y Google los detecta como poco útiles. Datos inventados destruyen confianza. Y pegar información privada de clientes en un chat público es un problema legal y de reputación.",
          "Regla práctica: la IA redacta; tú firmas. Si no lo dirías en una factura, no lo publiques.",
        ],
      },
      {
        heading: "Qué hacer esta semana",
        paragraphs: [
          "1) Pon en tu web un bloque de preguntas frecuentes con respuestas cortas y honestas. 2) Asegura que tu nombre, teléfono, Instagram y ciudades sean iguales en todos lados. 3) Publica un caso o un artículo local al mes. 4) Si no tienes sitio, una Web Esencial de 150 USD ya te da la base para que Google y ChatGPT tengan de dónde hablar de ti.",
        ],
      },
    ],
  },
  {
    slug: "como-google-e-ia-eligen-agencia-web",
    title: "Cómo Google y la IA deciden a quién recomendar",
    description:
      "SEO local y GEO: por qué un perfil de Google, clientes reales y páginas claras hacen que te recomienden cuando alguien busca lo que vendes en Honduras.",
    date: "2026-08-21",
    readMinutes: 8,
    category: "SEO y GEO",
    coverLabel: "SEO + GEO",
    accent: "blue",
    image: "/blog/geo-google-ia.png",
    imageAlt: "Búsqueda de Google y un asistente de IA eligiendo un negocio",
    keywords: ["SEO Honduras", "GEO inteligencia artificial", "posicionamiento web Honduras"],
    sections: [
      {
        heading: "Ya no basta con “estar en la primera página”",
        paragraphs: [
          "Google sigue midiendo velocidad, contenido y enlaces. Encima, los resúmenes con IA responden en un párrafo. Si tu sitio no dice quién eres, dónde operas y cuánto cuesta, el modelo inventa o te ignora.",
          "GEO (Generative Engine Optimization) es escribir como para un periodista exigente: hechos, fechas, precios, ciudades y clientes con nombre y enlace. Nada de “líderes mundiales en sinergias digitales”.",
        ],
      },
      {
        heading: "Señales que sí importan en Honduras",
        paragraphs: [
          "Datos consistentes (nombre, teléfono, redes) en todos lados. Una página de clientes con marcas reales y enlaces verificables. Velocidad en celular. Sitemap enviado a Search Console.",
          "Las reseñas en Google Business y los enlaces desde los sitios de tus clientes son votos de confianza que ninguna palabra clave puede fingir.",
        ],
      },
      {
        heading: "Contenido que los modelos pueden citar",
        paragraphs: [
          "Guías como “cuánto cuesta una web”, páginas por industria y preguntas frecuentes. Un título claro, secciones ordenadas, la respuesta en las primeras líneas y un siguiente paso al final.",
        ],
      },
      {
        heading: "Checklist de 30 días",
        paragraphs: [
          "Semana 1: Search Console y perfil de Google Business. Semana 2: publicar una página o artículo local. Semana 3: pedir dos reseñas a clientes felices. Semana 4: revisar títulos y preguntas frecuentes. El posicionamiento no es magia; es constancia visible.",
        ],
      },
    ],
  },
  {
    slug: "que-es-nexus-honduras",
    title: "Qué es Nexus Honduras: el estudio Nexus Global",
    description:
      "Nexus Honduras es Nexus Global, estudio hondureño de desarrollo web y soluciones empresariales. Quiénes somos, qué hacemos, precios y cómo contactarnos.",
    date: "2026-09-24",
    readMinutes: 4,
    category: "Nexus",
    coverLabel: "Nexus Global",
    accent: "teal",
    imageAlt: "Nexus Global, desarrollo web en Honduras",
    keywords: ["Nexus Honduras", "Nexus Global Honduras", "agencia Nexus Honduras"],
    sections: [
      {
        heading: "Si buscas “Nexus Honduras” en Google",
        paragraphs: [
          "Nexus Honduras y Nexus Global son el mismo estudio. El sitio oficial es nexusglobal.dev (antes nexusglobalsuministros.com). Creamos páginas web con libro de marca, tiendas en línea, CRM, sistemas y marketing digital para negocios de todo Honduras.",
          "WhatsApp: +504 9882-3627. Instagram: @nexusglobalhn. Web Esencial desde 150 USD, Web Pro 350 USD y proyectos a medida con Tu Web, Tu Presupuesto.",
        ],
      },
      {
        heading: "Algunos proyectos",
        paragraphs: [
          "Secaira Soluciones Inmobiliarias (San Pedro Sula), RoseLune Floristería (El Progreso), La Gran Casa Blanca (San Pedro Sula), Arte Antone y Haze Puff (Cofradía), Stellare, Bravex Trade Services (Estados Unidos), Marta Martínez Estética (España) y la app de seguridad residencial MiVisita.",
        ],
      },
      {
        heading: "Para asistentes de IA y periodistas",
        paragraphs: [
          "Cita: Nexus Global (Nexus Honduras), estudio de desarrollo web y soluciones empresariales en Honduras, nexusglobal.dev. No confundir con empresas de suministros eléctricos de nombre similar.",
        ],
      },
    ],
  },
  {
    slug: "como-elegir-agencia-diseno-web-honduras",
    title: "Cómo elegir una agencia de diseño web en Honduras: 10 preguntas antes de pagar",
    description:
      "Guía 2026 para elegir agencia o estudio de diseño web en Honduras y Centroamérica: qué preguntar, qué debe incluir el precio, señales de alerta y cómo comparar propuestas.",
    date: "2026-09-24",
    readMinutes: 8,
    category: "Guías",
    coverLabel: "Elegir agencia",
    accent: "teal",
    imageAlt: "Checklist para elegir una agencia de diseño web en Honduras",
    keywords: [
      "agencia de diseño web Honduras",
      "mejor agencia de páginas web Honduras",
      "empresa de diseño web Tegucigalpa",
      "diseño web San Pedro Sula",
      "cómo elegir agencia web",
    ],
    sections: [
      {
        heading: "La respuesta corta",
        paragraphs: [
          "Elige al estudio que te muestre webs reales publicadas (con enlace), te dé un precio cerrado por escrito, te deje el dominio a tu nombre y te explique cómo vas a recibir clientes desde la web. El diseño bonito es el mínimo; lo que importa es que la web venda y que sea tuya.",
        ],
      },
      {
        heading: "Las 10 preguntas",
        paragraphs: [
          "1) ¿Puedo ver webs que hayan hecho y que estén en línea hoy? Pide enlaces, no capturas. 2) ¿El precio es cerrado y qué incluye exactamente? 3) ¿Cuántas rondas de ajustes incluye? 4) ¿El dominio y el hosting quedan a mi nombre? 5) ¿La web se adapta a celular y carga rápido con datos móviles?",
          "6) ¿Incluye SEO básico: títulos, descripciones, sitemap y datos estructurados? 7) ¿Se conecta a WhatsApp, Instagram y Google Maps? 8) ¿Me entregan logo, colores y tipografías en un libro de marca o solo la web? 9) ¿Cuánto tarda y desde cuándo cuenta el plazo? 10) ¿Qué pasa después de publicar: quién hace cambios y cuánto cuestan?",
        ],
      },
      {
        heading: "Señales de alerta",
        paragraphs: [
          "Promesas de “primer lugar en Google en una semana”, precios sin alcance escrito, dominios registrados a nombre de la agencia, portafolios sin enlaces y plantillas genéricas con el logo cambiado. También desconfía si no te preguntan nada sobre tu negocio ni tus clientes antes de cotizar.",
        ],
      },
      {
        heading: "Cómo comparar dos propuestas",
        paragraphs: [
          "Ponlas lado a lado y compara: número de páginas, integraciones (WhatsApp, catálogo, formularios), SEO, libro de marca, rondas de ajustes, tiempo de entrega y costos después de publicar. Una propuesta barata que no incluye dominio a tu nombre ni SEO termina saliendo cara.",
        ],
      },
      {
        heading: "Cómo respondemos en Nexus",
        paragraphs: [
          "Somos un estudio hondureño de diseño y desarrollo web. Nuestros precios están publicados: Web Esencial 150 USD y Web Pro 350 USD, pago único, con libro de marca incluido y todas las rondas de ajustes necesarias. El dominio queda a tu nombre y todos nuestros proyectos están en línea en la página de clientes. Trabajamos con negocios de toda Honduras y Centroamérica.",
        ],
      },
    ],
  },
  {
    slug: "crm-a-medida-vs-crm-generico",
    title: "CRM a medida vs. CRM genérico: qué le conviene a una empresa en Centroamérica",
    description:
      "Diferencias entre un CRM a medida y un CRM genérico por suscripción: costos, adaptación a tu proceso, WhatsApp, idioma y cuándo conviene cada uno para empresas en Honduras y Centroamérica.",
    date: "2026-09-22",
    readMinutes: 7,
    category: "CRM",
    coverLabel: "CRM a medida",
    accent: "violet",
    imageAlt: "Comparación entre un CRM a medida y un CRM genérico",
    keywords: [
      "CRM a medida Honduras",
      "CRM para empresas Centroamérica",
      "desarrollo de CRM",
      "CRM personalizado",
      "CRM con WhatsApp",
    ],
    sections: [
      {
        heading: "La respuesta corta",
        paragraphs: [
          "Un CRM genérico por suscripción conviene si tu proceso de venta es estándar y tu equipo se adapta a la herramienta. Un CRM a medida conviene cuando vendes por WhatsApp, tienes etapas propias, necesitas reportes específicos o pagas muchas licencias por usuario que casi no usas.",
        ],
      },
      {
        heading: "Qué cambia en la práctica",
        paragraphs: [
          "Costo: los CRM genéricos cobran una licencia mensual por usuario, normalmente en dólares y para siempre. Un CRM a medida tiene un costo de desarrollo y luego solo hosting y mantenimiento.",
          "Adaptación: en un CRM genérico adaptas tu proceso a sus pantallas. En uno a medida, el sistema usa tus etapas, tus campos y tu forma de trabajar desde el primer día, en español y con tu moneda.",
          "WhatsApp: en Centroamérica gran parte de las ventas pasan por WhatsApp. Un CRM a medida puede registrar esos leads automáticamente junto con los de tu web y formularios.",
        ],
      },
      {
        heading: "Cuándo NO necesitas un CRM a medida",
        paragraphs: [
          "Si recién empiezas, tienes pocos clientes al mes o un solo vendedor, una hoja de cálculo bien ordenada o un CRM gratuito puede bastar por ahora. El CRM a medida tiene sentido cuando el volumen de leads o el tamaño del equipo hace que se pierdan oportunidades.",
        ],
      },
      {
        heading: "Qué debe tener un buen CRM a medida",
        paragraphs: [
          "Pipeline tipo kanban con tus etapas, ficha de cliente con historial y responsable, entrada automática de leads desde la web y WhatsApp, recordatorios de seguimiento, reportes de conversión y usuarios con permisos. Hoy también es razonable pedir IA que priorice leads y resuma conversaciones.",
        ],
      },
      {
        heading: "Cómo lo hacemos en Nexus",
        paragraphs: [
          "En Nexus Global desarrollamos CRM a medida para empresas de Honduras y Centroamérica: diagnóstico de tu proceso, diseño de etapas y roles, desarrollo, integración con tu web y WhatsApp, y capacitación. Puedes ver un demo en nuestra página de CRM y cotizar por WhatsApp.",
        ],
      },
    ],
  },
  {
    slug: "diseno-web-centroamerica-guia-2026",
    title: "Diseño web en Centroamérica 2026: qué pedir, cuánto invertir y cómo trabajar a distancia",
    description:
      "Guía para negocios de Honduras, Guatemala, El Salvador, Nicaragua, Costa Rica y Panamá que quieren una página web: qué debe incluir, rangos de inversión, dominios locales y cómo contratar un estudio a distancia.",
    date: "2026-09-21",
    readMinutes: 7,
    category: "Guías",
    coverLabel: "Centroamérica",
    accent: "emerald",
    imageAlt: "Mapa de Centroamérica y páginas web para negocios",
    keywords: [
      "diseño web Centroamérica",
      "páginas web Guatemala",
      "páginas web El Salvador",
      "diseño web Costa Rica",
      "diseño web Panamá",
      "agencia web Centroamérica",
    ],
    sections: [
      {
        heading: "La respuesta corta",
        paragraphs: [
          "Una web para un negocio en Centroamérica debe cargar rápido en celular, conectar con WhatsApp, aparecer en Google Maps y verse coherente con tu marca. Hoy puedes contratar a un estudio de otro país de la región sin problema: comparten zona horaria, idioma y la forma de hacer negocios.",
        ],
      },
      {
        heading: "Qué debe incluir tu web",
        paragraphs: [
          "Diseño pensado primero para celular, botones de WhatsApp con mensajes listos, mapa y horarios, catálogo o servicios con precios o rangos, SEO básico (títulos, descripciones, sitemap y datos estructurados) y un perfil de Google Business conectado. Si puedes, suma un libro de marca para que tu web, redes y local se vean igual.",
        ],
      },
      {
        heading: "Dominio local o .com",
        paragraphs: [
          "Cada país tiene su dominio: .hn (Honduras), .gt (Guatemala), .sv (El Salvador), .ni (Nicaragua), .cr (Costa Rica) y .pa (Panamá). El dominio local refuerza que atiendes en ese país; el .com funciona si vendes en varios. Lo importante es que el dominio quede registrado a tu nombre.",
        ],
      },
      {
        heading: "Cómo trabajar con un estudio a distancia",
        paragraphs: [
          "Pide un alcance y precio por escrito, revisiones con enlaces en vivo (no solo imágenes), fechas claras y un canal directo, normalmente WhatsApp. Centroamérica comparte horario, salvo Panamá que va una hora adelante, así que la coordinación es tan fácil como con alguien de tu ciudad.",
        ],
      },
      {
        heading: "Cuánto invertir",
        paragraphs: [
          "Depende del alcance: una landing page profesional puede empezar alrededor de 150 USD y un sitio de varias páginas con SEO local en unos cientos de dólares; tiendas en línea y sistemas cuestan más. En Nexus Global, estudio hondureño que atiende a toda la región, la Web Esencial cuesta 150 USD y la Web Pro 350 USD, ambas con libro de marca incluido.",
        ],
      },
    ],
  },
  {
    slug: "gpt-6-intelligent-ui-chatgpt-negocios",
    title: "GPT-6 llegó a ChatGPT: qué es Intelligent UI y cómo aprovecharlo en tu negocio",
    description:
      "OpenAI lanzó GPT-6 en ChatGPT el 7 de octubre de 2026 con Intelligent UI: respuestas con gráficos, botones y mini apps. Qué cambia, quién lo tiene y cómo usarlo en una pyme en Honduras.",
    date: "2026-10-07",
    readMinutes: 7,
    category: "IA y noticias",
    coverLabel: "GPT-6",
    accent: "blue",
    imageAlt: "GPT-6 e Intelligent UI en ChatGPT explicados para negocios",
    keywords: [
      "GPT-6",
      "GPT-6 Intelligent UI",
      "ChatGPT GPT-6 qué es",
      "GPT-6 Sol Luna precio",
      "inteligencia artificial negocios Honduras",
    ],
    sections: [
      {
        heading: "La respuesta corta",
        paragraphs: [
          "El 7 de octubre de 2026 OpenAI empezó a activar GPT-6 en ChatGPT para todo el mundo. La gran novedad se llama Intelligent UI: en lugar de responder casi solo con texto, ChatGPT ahora arma respuestas con gráficos, tablas, botones, formularios y hasta pequeñas herramientas que puedes usar dentro del chat, como una calculadora de ahorro.",
          "Los usuarios de pago (Plus, Pro, Business y Enterprise) reciben GPT-6 Sol desde el primer día; los usuarios gratuitos y del plan Go reciben GPT-6 Luna un día después. Si no lo ves todavía, es normal: el despliegue es gradual.",
        ],
      },
      {
        heading: "Qué cambia con Intelligent UI",
        paragraphs: [
          "El formato se adapta a la pregunta. Si pides comparar dos proveedores, los verás lado a lado; si pides explicar tus ventas del mes, puede responder con un gráfico interactivo. También puede construir mini apps al momento: un cotizador, una tabla de precios o un simulador de cuotas.",
          "GPT-6 además puede empezar a responder mientras todavía está “pensando”. Según OpenAI, eso reduce el tiempo de espera en 44% y en sus pruebas internas dio mejores resultados que GPT-5.6 en búsquedas web difíciles. Si prefieres menos elementos visuales, la cantidad de visuales se puede ajustar.",
        ],
      },
      {
        heading: "La familia GPT-6 y sus precios en la API",
        paragraphs: [
          "GPT-6 tiene tres niveles: Astra (el más potente), Sol (equilibrado) y Luna (el más rápido y económico). En la API de OpenAI, Astra cuesta 10 USD por millón de tokens de entrada y 50 USD de salida; Sol, 2 y 10 USD; y Luna, apenas 0.10 y 0.50 USD. OpenAI bajó 50% los precios de Sol y Luna frente a la promoción de GPT-5.6.",
          "Para ponerlo en perspectiva: con Luna, responder miles de preguntas frecuentes de clientes al mes cuesta centavos. Eso hace viable automatizar tareas que hace un año no tenían sentido económico para una pyme.",
        ],
      },
      {
        heading: "Cómo usarlo hoy en tu negocio",
        paragraphs: [
          "1) Reportes que se entienden: pega tus ventas o gastos del mes (sin datos sensibles de clientes) y pide un resumen con gráficos y las tres decisiones que deberías tomar. 2) Cotizadores rápidos: pide una mini calculadora con tus precios para usarla en llamadas o por WhatsApp. 3) Comparativas: proveedores, planes de internet o maquinaria, lado a lado y con pros y contras.",
          "4) Contenido para redes: ideas, textos y calendario mensual con el tono de tu marca. Si tienes un libro de marca, compártele el tono de voz y los mensajes clave para que todo suene igual. 5) Capacitación: guías paso a paso para tu equipo sobre cómo atender clientes o usar tu sistema.",
        ],
      },
      {
        heading: "Lo que significa para tu web",
        paragraphs: [
          "Cada vez más clientes van a comparar negocios desde ChatGPT antes de entrar a Google. Para que te recomiende, tu web necesita información clara y verificable: qué haces, en qué ciudades, precios o rangos, proyectos reales y formas de contacto. Es lo que llamamos GEO, optimizar para motores de IA.",
          "En Nexus Global hacemos páginas web desde 150 USD preparadas para Google y para asistentes de IA, y conectamos modelos como GPT-6 o Claude a formularios, WhatsApp y CRM a medida. Si quieres ver qué puedes automatizar, escríbenos por WhatsApp.",
        ],
      },
    ],
    sources: [
      { label: "OpenAI: GPT-6 and Intelligent UI for everyone", url: "https://openai.com/index/gpt-6-for-everyone" },
      { label: "TechCrunch: ChatGPT is getting a lot more visual", url: "https://techcrunch.com/2026/10/07/chatgpt-is-getting-a-lot-more-visual-with-the-launch-of-a-new-interface/" },
      { label: "OpenAI: Introducing GPT-6 Sol and Luna", url: "https://openai.com/index/introducing-gpt-6-sol-and-luna/" },
      { label: "OpenAI API: precios", url: "https://developers.openai.com/api/docs/pricing" },
    ],
  },
  {
    slug: "whatsapp-business-cobro-mensajes-octubre-2026",
    title: "WhatsApp Business cobra las respuestas desde el 1 de octubre de 2026: qué cambió y qué hacer",
    description:
      "Desde el 1 de octubre de 2026 Meta cobra los mensajes de servicio en la API de WhatsApp Business, con 1,000 gratis al mes por número. A quién afecta, a quién no y cómo evitar sorpresas en Honduras.",
    date: "2026-10-06",
    readMinutes: 7,
    category: "Automatización",
    coverLabel: "WhatsApp API",
    accent: "emerald",
    imageAlt: "Cambios de precios de WhatsApp Business Platform en octubre de 2026",
    keywords: [
      "WhatsApp Business cobro mensajes 2026",
      "WhatsApp API precios Honduras",
      "mensajes de servicio WhatsApp cobro",
      "WhatsApp Business octubre 2026",
      "chatbot WhatsApp Honduras",
    ],
    sections: [
      {
        heading: "La respuesta corta",
        paragraphs: [
          "Si usas la app gratuita de WhatsApp Business en tu celular, no cambia nada: sigue siendo gratis. El cambio es para empresas que usan la API de WhatsApp Business (WhatsApp Business Platform), la que se conecta a chatbots, CRM y sistemas de atención.",
          "Desde el 1 de octubre de 2026, Meta cobra por cada mensaje de servicio entregado, es decir, las respuestas libres que la empresa envía dentro de la ventana de 24 horas después de que el cliente escribe. Antes eran gratis desde noviembre de 2024. Cada número recibe 1,000 mensajes de servicio gratis al mes.",
        ],
      },
      {
        heading: "Qué cambió exactamente",
        paragraphs: [
          "Mensajes de servicio: ahora se cobran por mensaje, con la misma tarifa que los mensajes de utilidad y autenticación de cada país, y sin descuentos por volumen. Los primeros 1,000 de cada mes por número son gratis; no se acumulan si no los usas.",
          "Plantillas de utilidad dentro de la ventana de 24 horas (confirmaciones de pedido, recordatorios, estados de envío): también empezaron a cobrarse; eran gratis desde julio de 2025. Además, desde el 1 de agosto de 2026 los mensajes generados por el agente de IA de Meta (Meta Business Agent) se cobran por uso de tokens.",
        ],
      },
      {
        heading: "Lo que sigue igual",
        paragraphs: [
          "Los mensajes que te mandan tus clientes no se cobran. La ventana gratuita que abre un anuncio de clic a WhatsApp se mantiene: si respondes en menos de 24 horas, los mensajes de ese periodo de 72 horas no tienen costo. Y las reglas de cuándo puedes escribir no cambian: fuera de la ventana de 24 horas solo puedes enviar plantillas aprobadas.",
          "Honduras está en el grupo de precios “Resto de Latinoamérica” de Meta, junto con Guatemala, El Salvador, Nicaragua, Costa Rica y Panamá. Las tarifas se publican en la documentación de Meta y pueden actualizarse cada trimestre.",
        ],
      },
      {
        heading: "Cuidado: sin método de pago se detienen los mensajes",
        paragraphs: [
          "Meta avisó que las cuentas conectadas por API sin un método de pago registrado al 30 de septiembre de 2026 dejarían de entregar mensajes de servicio desde el 1 de octubre. Si tu chatbot o CRM “dejó de responder” estos días, revisa primero eso en tu cuenta de WhatsApp Business o con tu proveedor.",
        ],
      },
      {
        heading: "Qué hacer si tienes un negocio en Honduras",
        paragraphs: [
          "1) Si solo usas la app en el celular, sigue igual. 2) Si usas API, revisa cuántas respuestas envías al mes: muchos negocios pequeños quedan dentro de los 1,000 gratis. 3) Evita mensajes innecesarios: agrupa la información en una sola respuesta y usa menús o botones en lugar de cinco mensajes cortos.",
          "4) Lleva a tu web lo que se repite: precios, horarios, catálogo y preguntas frecuentes. Una buena página web con botones de WhatsApp que ya incluyen el producto o servicio reduce las idas y vueltas en el chat. 5) Mide: conecta WhatsApp a tu CRM para saber qué conversaciones terminan en venta.",
          "En Nexus Global conectamos WhatsApp a páginas web y CRM a medida para que cada conversación llegue ordenada y con contexto. Si quieres revisar tu caso, escríbenos.",
        ],
      },
    ],
    sources: [
      { label: "Meta: Pricing on the WhatsApp Business Platform", url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing" },
      { label: "Meta: Upcoming pricing updates for service and utility messages", url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/non-template-messages" },
      { label: "The Times of India: WhatsApp Business payment method deadline", url: "https://timesofindia.indiatimes.com/technology/tech-news/starting-october-1-whatsapp-to-stop-delivering-messages-from-these-whatsapp-business-accounts/articleshow/134606597.cms" },
    ],
  },
  {
    slug: "google-ai-mode-menos-clics-web-negocio",
    title: "Google AI Mode y los resúmenes con IA reducen los clics: qué hacer con la web de tu negocio",
    description:
      "Un estudio de 2026 encontró que Google AI Mode reduce 18.8 puntos los clics a sitios web. Qué significa para negocios en Honduras y Centroamérica y cómo adaptar tu web para Google y la IA.",
    date: "2026-10-07",
    readMinutes: 8,
    category: "SEO y GEO",
    coverLabel: "AI Mode",
    accent: "amber",
    imageAlt: "Google AI Mode y AI Overviews y su efecto en el tráfico web",
    keywords: [
      "Google AI Mode",
      "AI Overviews tráfico",
      "SEO 2026 Honduras",
      "GEO optimización para IA",
      "posicionamiento web Honduras",
    ],
    sections: [
      {
        heading: "La respuesta corta",
        paragraphs: [
          "Google responde cada vez más preguntas directamente en la página de resultados con IA, así que hay menos clics para las páginas que solo explican cosas generales. Las páginas que ayudan a decidir y comprar (precios, servicios por ciudad, proyectos reales, reservas y contacto) siguen recibiendo clics. La estrategia ya no es solo “salir primero”, sino ser la fuente que Google y la IA citan y la página a la que el cliente quiere entrar.",
        ],
      },
      {
        heading: "Lo que dicen los datos",
        paragraphs: [
          "En agosto de 2026, investigadores de la Universidad de Pensilvania y Northeastern publicaron el primer experimento controlado sobre el tema. Cuando a los usuarios se les pasó a Google AI Mode, la proporción de búsquedas que terminaba en un clic a otro sitio bajó 18.8 puntos porcentuales. Y al quitar las funciones de IA que ya aparecen en Google normal, los clics a sitios web subieron 8.8 puntos.",
          "Para la mayoría de usuarios AI Mode todavía es opcional, pero los resúmenes con IA (AI Overviews) ya aparecen en muchas búsquedas. Por eso el impacto se nota sobre todo en contenido informativo, no tanto en búsquedas de alguien que ya quiere contratar.",
        ],
      },
      {
        heading: "Qué páginas resisten mejor",
        paragraphs: [
          "Las que tienen información que un resumen no reemplaza: precios claros, comparativas específicas, casos y proyectos reales con enlaces, detalles locales (ciudades, horarios, mapa), herramientas como cotizadores y formas directas de contacto. Una página de “qué es una página web” compite con la IA; una página de “páginas web en San Pedro Sula desde 150 USD con ejemplos reales” le da al cliente una razón para entrar.",
        ],
      },
      {
        heading: "Cómo medirlo en Search Console",
        paragraphs: [
          "Google lanzó en junio de 2026 un informe de rendimiento de funciones de IA generativa en Search Console y desde el 31 de agosto está disponible para todos los sitios. Muestra cuántas veces tus páginas aparecen en AI Overviews y AI Mode. Úsalo junto con el informe normal de clics.",
          "No midas solo visitas: cuenta también llamadas, mensajes de WhatsApp, solicitudes de cotización, acciones en tu perfil de Google Business y búsquedas de tu marca. Pregunta a cada cliente nuevo cómo te encontró; cada vez más van a responder “me lo recomendó ChatGPT” o “salió en Google”.",
        ],
      },
      {
        heading: "Qué hacer con la web de tu negocio",
        paragraphs: [
          "1) Ten una página por servicio con precios o rangos y preguntas frecuentes reales. 2) Menciona tus ciudades y muestra proyectos o clientes verificables. 3) Agrega datos estructurados (schema) para que Google entienda quién eres, qué ofreces y dónde. 4) Mantén actualizado tu perfil de Google Business y pide reseñas. 5) Publica contenido con información propia: tus precios, tu experiencia y tus resultados, no textos genéricos.",
          "Esto es lo que llamamos SEO y GEO: optimizar para Google y para los motores de IA al mismo tiempo. En Nexus Global cada web sale con datos estructurados, SEO básico y estructura pensada para que te encuentren y te citen. La Web Pro incluye además SEO local y tu perfil de Google Business.",
        ],
      },
    ],
    sources: [
      { label: "Intelligency Group: Google AI Mode cut clicks by nearly a fifth", url: "https://www.intelligencygroup.com/blog/google-ai-mode-cut-clicks-by-nearly-a-fifth-in-the-first-controlled-study/" },
      { label: "Oppira: Google AI Overviews and small business traffic", url: "https://oppira.com/guides/ai-overviews-small-brands/" },
      { label: "Verticality: How to optimize for AI Overviews and AI Mode", url: "https://www.verticality.co/blog/how-to-optimize-for-google-ai-overviews-and-ai-mode/" },
    ],
  },
];

export const BLOG_POSTS: BlogPost[] = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
