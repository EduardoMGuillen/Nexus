import type { Messages } from "./es";

export const pt: Messages = {
  header: {
    nav: {
      home: "Início",
      services: "Serviços",
      projects: "Projetos",
      process: "Processo",
      partners: "Parceiros",
      contact: "Contato",
      templates: "Modelos",
    },
    ariaTheme: "Alternar tema",
    ariaMenu: "Abrir menu",
    ariaLanguage: "Idioma",
  },
  hero: {
    logoAlt: "Logo Nexus Global",
    titleLine1: "Conectamos o seu",
    titleHighlight: "futuro digital",
    subtitle:
      "Criamos sites, plataformas personalizadas e soluções digitais que transformam ideias em realidade.",
    ctaStart: "Começar projeto",
    ctaServices: "Ver serviços",
  },
  services: {
    titleOur: "Nossos",
    titleHighlight: "Serviços",
    subtitle: "Soluções digitais completas para levar o seu negócio ao próximo nível",
    cards: [
      {
        title: "Sites",
        description:
          "Desenhamos e desenvolvemos sites modernos e rápidos, otimizados para converter visitantes em clientes.",
        features: ["Design responsivo", "SEO otimizado", "Alta performance", "Seguro e confiável"],
      },
      {
        title: "Plataformas web personalizadas",
        description:
          "Criamos sistemas web sob medida para as necessidades específicas do seu negócio.",
        features: ["Desenvolvimento sob medida", "Escalável", "Integrações", "Suporte contínuo"],
      },
      {
        title: "Soluções digitais",
        description: "Transformamos processos complexos em soluções digitais intuitivas e eficientes.",
        features: ["Automação", "Otimização", "Analítica", "Inovação"],
      },
    ],
  },
  showcase: {
    titleOur: "Nossos",
    titleHighlight: "Projetos",
    subtitle: "Cada projeto é uma oportunidade de mostrar a nossa paixão pela excelência",
    ctaDetails: "Ver detalhes",
    ctaQuestion: "Tem um projeto em mente?",
    projects: [
      {
        title: "E-commerce moderno",
        description:
          "Lojas online com Shopify e plataformas personalizadas: pagamentos, estoque e otimização de conversões.",
        tech: ["Shopify", "WooCommerce", "Stripe", "PayPal"],
      },
      {
        title: "Painel empresarial",
        description:
          "Gestão empresarial personalizada: comandas à cozinha, contas, faturação automatizada e inventário numa só plataforma.",
        tech: ["React", "Node.js", "PostgreSQL", "API Integration"],
      },
      {
        title: "Sites para negócios",
        description:
          "Sites profissionais com Google Ads, design responsivo, hospedagem otimizada e CRM integrado para crescer online.",
        tech: ["Google Ads", "Design web", "Hospedagem", "CRM"],
      },
      {
        title: "MiVisita",
        description:
          "Acesso residencial inteligente para condomínios e edifícios. O morador anuncia visitas e a segurança valida a entrada com QR.",
        tech: ["QR seguro", "Validação no portão", "Tempo real", "Acesso residencial"],
      },
    ],
  },
  templateShowcase: {
    titleOur: "Demos",
    titleHighlight: "por setor",
    subtitle:
      "Explore sites de exemplo criados para diferentes negócios. Todos podem ser personalizados com a sua marca e conteúdos.",
    ctaLive: "Ver site",
    badgeDemo: "Demo",
    badgeLive: "Em produção",
    ariaOpen: "Abrir demo num novo separador",
    items: [
      {
        name: "Construtora",
        description:
          "Modelo com forte impacto visual para construtoras, projetos e promoção imobiliária.",
      },
      {
        name: "Café",
        description:
          "Ideal para cafetarias e coffee shops: menu, ambiente e localização em destaque.",
      },
      {
        name: "Clínica dentária",
        description:
          "Estrutura clara para clínicas dentárias: serviços, confiança e contacto simples.",
      },
      {
        name: "Imobiliária",
        description:
          "Apresente imóveis e serviços; pensado para agências e consultores imobiliários.",
      },
      {
        name: "Marta Martínez Estética",
        description:
          "Site real em produção para centro de estética e bem-estar — exemplo do tipo de entrega.",
      },
    ],
  },
  process: {
    titleOur: "O nosso",
    titleHighlight: "Processo",
    subtitle: "Uma abordagem estruturada que garante resultados excecionais",
    steps: [
      {
        title: "Descoberta",
        description: "Analisamos necessidades e objetivos para criar a solução certa.",
      },
      {
        title: "Design",
        description: "Criamos protótipos e layouts que refletem a sua marca.",
      },
      {
        title: "Desenvolvimento",
        description: "Construímos com as melhores tecnologias e práticas.",
      },
      {
        title: "Lançamento",
        description: "Implantamos o projeto e acompanhamos cada etapa.",
      },
    ],
    benefits: ["Comunicação constante", "Entregas no prazo", "Suporte pós-lançamento"],
  },
  technologies: {
    titleTech: "Tecnologias",
    titleHighlight: "Modernas",
    subtitle: "Usamos as melhores ferramentas para criar soluções de classe mundial",
    footer: "E muitas outras tecnologias conforme as necessidades do seu projeto",
    categories: {
      Framework: "Framework",
      Library: "Biblioteca",
      Language: "Linguagem",
      Runtime: "Runtime",
      Database: "Base de dados",
      Styling: "Estilos",
      Cloud: "Nuvem",
      DevOps: "DevOps",
      API: "API",
      ORM: "ORM",
      Cache: "Cache",
    },
  },
  partners: {
    titleOur: "Nossos",
    titleHighlight: "Parceiros",
    subtitle: "Empresas que confiam em nós para impulsionar a presença digital",
  },
  contact: {
    titleLets: "Vamos falar do seu",
    titleHighlight: "Projeto",
    subtitle: "Estamos prontos para transformar as suas ideias em realidade digital",
    infoTitle: "Informações de contato",
    infoDesc: "Preencha o formulário ou fale connosco diretamente. Estamos aqui para ajudar.",
    labelName: "Nome",
    labelEmail: "E-mail",
    labelPhone: "Telefone (opcional)",
    labelMessage: "Mensagem",
    phName: "O seu nome",
    phEmail: "voce@email.com",
    phPhone: "+351 912 345 678",
    phMessage: "Conte-nos sobre o seu projeto...",
    btnSend: "Enviar mensagem",
    btnSending: "A enviar...",
    btnSent: "Mensagem enviada!",
    errGeneric: "Ocorreu um erro ao enviar a mensagem. Tente novamente.",
    errSend: "Falha ao enviar a mensagem",
    email: "E-mail",
    instagram: "Instagram",
  },
  footer: {
    tagline: "A ligar o seu negócio ao futuro digital",
    quickLinks: "Links rápidos",
    follow: "Siga-nos",
    rights: "Todos os direitos reservados.",
    madeWith: "Feito com ❤️ pela Nexus Global",
    ariaInstagram: "Instagram",
    ariaEmail: "E-mail",
  },
  common: {
    backToProjects: "Voltar aos projetos",
    requestQuote: "Pedir orçamento",
    brandName: "Nexus Global",
  },
  paginasWeb: {
    heroTitle1: "Sites",
    heroTitle2: "para negócios",
    heroSubtitle:
      "Presença online completa: design profissional, Google Ads, hospedagem otimizada e CRM integrado. Tudo para fazer crescer o seu negócio.",
    includeTitle1: "O que",
    includeTitle2: "Incluímos",
    includeSubtitle: "Um pacote completo para a sua presença online",
    benefitsTitle1: "Benefícios",
    benefitsTitle2: "Chave",
    ctaTitle1: "Faça crescer o seu",
    ctaTitle2: "Negócio online",
    ctaSubtitle: "Contacte-nos e comece hoje a construir a sua presença digital",
    features: [
      {
        title: "Design web profissional",
        description:
          "Sites modernos, responsivos e otimizados. Design personalizado que reflete a sua marca e converte.",
      },
      {
        title: "Anúncios Google",
        description:
          "Configuração e gestão de campanhas Google Ads: palavras-chave, conversões e foco em ROI.",
      },
      {
        title: "Hospedagem otimizada",
        description:
          "Hospedagem rápida e fiável com SSL, backups automáticos e suporte. Sempre disponível e segura.",
      },
      {
        title: "CRM integrado",
        description:
          "Gestão de clientes integrada: leads, automação de marketing e análise de comportamento.",
      },
    ],
    servicesList: [
      "Design web responsivo e moderno",
      "Otimização SEO",
      "Configuração Google Ads",
      "Hospedagem e domínio incluídos",
      "Certificado SSL gratuito",
      "Backups automáticos",
      "Integração CRM",
      "Formulários de contacto",
      "Analítica e relatórios",
      "Suporte e manutenção",
    ],
    benefits: [
      {
        title: "Maior visibilidade",
        description: "Apareça nos primeiros resultados e atraia mais potenciais clientes.",
      },
      {
        title: "Conversão otimizada",
        description: "Design focado em converter visitantes em clientes.",
      },
      {
        title: "Gestão simplificada",
        description: "Painel simples para gerir a sua presença online.",
      },
    ],
    basicTitle1: "Basic Website",
    basicTitle2: "300 USD",
    basicSubtitle:
      "Landing page ou site de 1 a 3 páginas. Pagamento único — ideal para lançar a sua presença online rapidamente.",
    basicFeatures: [
      "Até 3 páginas ou uma landing focada em conversão",
      "Design responsivo, pronto para publicar",
      "Preço fixo em dólares (USD)",
    ],
    basicIframeTitle: "Pagar Basic Website com PayPal",
    basicSecureNote: "Pagamento seguro via PayPal.",
    subscribeTitle1: "Plano",
    subscribeTitle2: "Manutenção + Alojamento",
    subscribeSubtitle:
      "Ative a sua subscrição com PayPal: alojamento otimizado e manutenção contínua para manter o site rápido, seguro e atualizado.",
    subscribeFeatures: [
      "Alojamento e certificado SSL",
      "Backups e atualizações",
      "Monitorização e suporte técnico",
    ],
    subscribeSuccess: "Subscrição ativada com sucesso!",
    subscribeIdLabel: "ID da subscrição",
    subscribeLoadError:
      "Não foi possível carregar o PayPal. Atualize a página ou tente mais tarde.",
    subscribeSecureNote: "Pagamentos processados com segurança pelo PayPal.",
  },
  ecommerce: {
    heroTitle1: "E-commerce",
    heroTitle2: "Moderno",
    heroSubtitle:
      "Comércio eletrónico completo com Shopify e plataformas personalizadas. Tudo para vender online com sucesso.",
    includeTitle1: "O que",
    includeTitle2: "Incluímos",
    includeSubtitle: "Serviço completo de ponta a ponta",
    ctaTitle1: "Pronto para vender",
    ctaTitle2: "online?",
    ctaSubtitle: "Contacte-nos e vamos construir a sua loja online hoje",
    features: [
      {
        title: "Lojas online completas",
        description:
          "Lojas profissionais em Shopify, WooCommerce e personalizadas — da configuração ao lançamento.",
      },
      {
        title: "Integração de pagamentos",
        description:
          "Stripe, PayPal, cartões e métodos locais. Checkout otimizado para maximizar conversões.",
      },
      {
        title: "Gestão de inventário",
        description:
          "Controlo automatizado de stock, alertas, sincronização multicanal e variantes de produto.",
      },
      {
        title: "Otimização de conversões",
        description:
          "Testes A/B, performance, UX responsiva para aumentar vendas e reduzir abandono do carrinho.",
      },
    ],
    servicesList: [
      "Configuração loja Shopify/WooCommerce",
      "Design e branding personalizado",
      "Integração de gateways de pagamento",
      "Sistemas de gestão de inventário",
      "SEO para produtos",
      "Configuração de envios e logística",
      "Painel de administração completo",
      "Integração com redes sociais",
      "Apps e extensões personalizadas",
      "Suporte e manutenção contínuos",
    ],
  },
  dashboard: {
    heroTitle1: "Painel",
    heroTitle2: "Empresarial",
    heroSubtitle:
      "Plataformas de gestão personalizadas: comandas à cozinha, contas, faturação automatizada e inventário — tudo integrado.",
    includeTitle1: "O que",
    includeTitle2: "Incluímos",
    includeSubtitle: "Uma solução completa para o seu negócio",
    idealTitle1: "Ideal para",
    idealTitle2: "O seu negócio",
    ctaTitle1: "Automatize o seu",
    ctaTitle2: "Negócio",
    ctaSubtitle:
      "Contacte-nos para uma consulta personalizada e veja como podemos otimizar as suas operações",
    features: [
      {
        title: "Sistema de comandas",
        description:
          "Fluxo completo da mesa à cozinha: alertas em tempo real, impressão e estado do pedido.",
      },
      {
        title: "Faturação automatizada",
        description:
          "Faturas automáticas, contas a receber, relatórios financeiros e integrações contabilísticas.",
      },
      {
        title: "Gestão de contas",
        description:
          "Pagamentos, créditos, débitos e painel financeiro em tempo real.",
      },
      {
        title: "Controlo de inventário",
        description:
          "Stock inteligente, alertas, rastreio de produtos e otimização de compras para reduzir desperdício.",
      },
    ],
    servicesList: [
      "Sistema de comandas digitais",
      "Integração com impressoras de cozinha",
      "Gestão de contas e pagamentos",
      "Faturação eletrónica",
      "Inventário em tempo real",
      "Relatórios e analítica",
      "Gestão de mesas e reservas",
      "Integração com POS",
      "Painel de administração completo",
      "Suporte e formação",
    ],
    useCases: ["Restaurantes e cafés", "Hotéis e alojamento", "Retalho e lojas"],
  },
  mivisita: {
    heroTitle1: "MiVisita:",
    heroTitle2: "o seu acesso residencial digital",
    heroBody:
      "MiVisita é uma web app para condomínios, edifícios e urbanizações. O morador anuncia o visitante e a segurança valida a entrada ao ler um QR — rápido e seguro.",
    highlights: [
      "O morador anuncia a visita em segundos.",
      "Cada visitante recebe um QR seguro e configurável.",
      "A segurança lê e valida a entrada no portão.",
      "Notificações em tempo real para melhor controlo.",
    ],
    ctaApp: "Ir para MiVisita",
    logoAlt: "Logo MiVisita",
    cardSecureTitle: "QR seguro",
    cardSecureBody: "Códigos com validade por uso ou tempo para maior controlo de acesso.",
    cardProcessTitle: "Processo fiável",
    cardProcessBody: "A segurança valida cada entrada no portão sem fricção para moradores e visitantes.",
    sectionTitle1: "Funções-chave",
    sectionTitle2: "do MiVisita",
    sectionSubtitle:
      "O essencial por papel para operar acesso residencial com controlo, rapidez e rastreio.",
    securityTitle: "Segurança, evidências e retenção",
    securityBullets: [
      "Evidências de entrada na base de dados: identificação e matrícula.",
      "Purga automática de dados sensíveis aos 60 dias, mantendo o evento operacional.",
      "Controlo de acesso por condomínio em leituras e consultas.",
      "Se um condomínio estiver suspenso, só o super admin pode operar.",
    ],
    roles: [
      {
        title: "Morador",
        points: [
          "Convites QR com validade configurável: uma utilização, 1 dia, 3 dias ou indefinido.",
          "Descrição e marcador de veículo por visita, com QR fácil de partilhar.",
          "Reserva e cancelamento de zonas comuns, sugestões e suporte por WhatsApp.",
        ],
      },
      {
        title: "Segurança",
        points: [
          "Leitura e validação de QR com evidência de identificação.",
          "Evidência de matrícula obrigatória quando a visita chega de carro.",
          "Confirmação manual de chegada e alertas de entrega com push imediato.",
        ],
      },
      {
        title: "Administração",
        points: [
          "Gestão completa de utilizadores e zonas (bloqueios, limites e reservas).",
          "Comunicados push segmentados e módulo QR administrativo.",
          "Registos com filtros, exportação PDF e relatório mensal com evidências.",
        ],
      },
    ],
  },
};
