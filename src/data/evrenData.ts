export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  deliverables: string[];
  tools?: string[];
  slideImage?: string;
  showcaseImage?: string;
  featured: boolean;
}

export interface FannedCardItem {
  id: string;
  titleLines: string[];
  subtitle: string;
  statOrDetail: string;
  variant: 'photo' | 'crimson';
  imageSrc: string;
  rotationDeg: number;
  translateY: number;
  serviceId: string;
}

export interface PackageTier {
  id: string;
  categoryId: 'casamento' | 'corporativo' | 'cha-de-panela' | 'aniversario';
  categoryLabel: string;
  name: string;
  shortPackName: string;
  subtitle: string;
  originalPriceKz: number;
  promoPriceKz: number;
  discountPercent: number;
  isPremium?: boolean;
  photoCountLabel: string;
  features: string[];
  flyerImage: string;
  showcaseLeftImage: string;
  showcaseRightImage: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category:
    | 'design-campanhas'
    | 'identidade-branding'
    | 'fotografia-eventos'
    | 'casamentos-noivados'
    | 'retratos-estudio'
    | 'slides-oficiais'
    | 'flyers-promocionais';
  categoryLabel: string;
  description: string;
  mediaType: 'image' | 'video';
  src: string;
  poster?: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
  year: string;
  location: string;
  deliverables: string;
}

export interface VideoReelItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  duration: string;
  src: string;
  poster: string;
  description: string;
}

export const COMPANY_INFO = {
  name: 'EVREN VISUAL STUDIO',
  tagline: 'Agência Criativa & Produção Audiovisual de Alto Impacto',
  shortBio:
    'Parceiros estratégicos na construção da identidade corporativa, produção audiovisual e presença digital de marcas, empresas e eventos em Angola.',
  aboutParagraphs: [
    'A EVREN VISUAL STUDIO nasceu da visão empreendedora de dois jovens comprometidos com o desenvolvimento empresarial e a valorização da criatividade em Angola.',
    'Localizada na Zona Comercial 28, Município do Lobito, a empresa dedica-se à criação de soluções visuais inovadoras que ajudam marcas, empresas e organizações a comunicar com profissionalismo e impacto.',
    'Mais do que uma agência criativa, somos parceiros estratégicos na construção da identidade e da presença digital dos nossos clientes.'
  ],
  location: {
    zone: 'Zona Comercial 28',
    municipality: 'Município do Lobito',
    province: 'Benguela, Angola',
    fullAddress: 'Zona Comercial 28, Município do Lobito, Província de Benguela — Angola'
  },
  contacts: {
    primaryPhone: '951 757 665',
    secondaryPhone: '927 399 908',
    primaryPhoneClean: '244951757665',
    secondaryPhoneClean: '24492739908',
    email: 'evrenvisualestudio@gmail.com',
    instagram: '@Evren Visual Studio',
    facebook: 'Evren Visual Studio'
  },
  logos: {
    mainWhiteRed: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.57.jpeg',
    allRed: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.58.jpeg',
    navyRed: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.58 (1).jpeg',
    allNavy: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.57 (2).jpeg',
    symbolOnly: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.59.jpeg',
    wordmarkRed: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.57 (1).jpeg'
  },
  promoBanner: {
    title: 'GRANDE PROMOÇÃO — 30% DE DESCONTO EM TODOS OS PACOTES',
    validity: 'Promoção válida até Dezembro',
    discountPercent: 30
  },
  documents: [
    {
      id: 'portfolio-pdf',
      title: 'Portfólio Oficial Evren Visual Studio (PDF Completo)',
      subtitle: '13 páginas · Apresentação Institucional, Serviços e Cases',
      path: '/assets/aistudio/PORTF_LIO_EVREN_4f53368d.pdf',
      previewImage: '/assets/aistudio/PORTF_LIO_EVREN.jpg_56e905d9.jpeg'
    },
    {
      id: 'cartao-visita-pdf',
      title: 'Cartão de Visita Oficial Evren (PDF)',
      subtitle: '2 páginas · Identidade Corporativa, QR Code e Contactos Oficiais',
      path: '/assets/aistudio/CART_O_DE_VISITA_EVREN_55b22cda.pdf',
      previewImage: '/assets/aistudio/PORTF_LIO_EVREN13.jpg_3b4ac114.jpeg'
    }
  ]
};

/**
 * 6 Fanned / Tilted Cards for the "POR QUE ESCOLHEM A EVREN" section
 * following the exact composition of MODELO.jfif
 */
export const FANNED_CHOOSE_US_CARDS: FannedCardItem[] = [
  {
    id: 'fan-1',
    titleLines: ['DESIGN GRÁFICO', '& COMUNICAÇÃO', 'DE EXCELÊNCIA'],
    subtitle: 'Artes para redes sociais, flyers, banners, cartazes, catálogos e grandes formatos.',
    statOrDetail: 'PS · AI · AE · LR · CORELDRAW · CAPCUT',
    variant: 'photo',
    imageSrc: '/assets/aistudio/file_000000004c2481f488672ff0719bc238_37201fe4.png',
    rotationDeg: -18,
    translateY: 28,
    serviceId: 'design-grafico'
  },
  {
    id: 'fan-2',
    titleLines: ['CRIAÇÃO DE', 'IDENTIDADE', 'CORPORATIVA'],
    subtitle: 'Logotipo, manual da marca, cartão de visita, papel timbrado e aplicações completas.',
    statOrDetail: 'CASES NAVIA · LTC · TUCA MAMA · EL SOARES',
    variant: 'photo',
    imageSrc: '/assets/aistudio/PORTF_LIO_EVREN7.jpg_e40f9cc3.jpeg',
    rotationDeg: -10,
    translateY: 8,
    serviceId: 'identidade-corporativa'
  },
  {
    id: 'fan-3',
    titleLines: ['EQUIPA JOVEM E', 'ESTÚDIO PRÓPRIO', 'NO LOBITO'],
    subtitle: 'Parceiros estratégicos na Zona Comercial 28 comprometidos com resultados reais.',
    statOrDetail: '10 ÁREAS CRIATIVAS · COBERTURA NACIONAL EM ANGOLA',
    variant: 'crimson',
    imageSrc: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.50.jpeg',
    rotationDeg: -3,
    translateY: 24,
    serviceId: 'producao-video'
  },
  {
    id: 'fan-4',
    titleLines: ['COBERTURA', 'FOTOGRÁFICA E', 'CINEMA 4K'],
    subtitle: 'Casamentos, conferências magnas, eventos corporativos, formaturas e retratos.',
    statOrDetail: 'CANON EOS RP · SONY ALPHA · ESTABILIZAÇÃO DJI RS4',
    variant: 'photo',
    imageSrc: '/assets/aistudio/PORTF_LIO_EVREN11.jpg.jpeg',
    rotationDeg: 5,
    translateY: -6,
    serviceId: 'cobertura-fotografica'
  },
  {
    id: 'fan-5',
    titleLines: ['GESTÃO DE REDES', 'SOCIAIS E', 'PERFORMANCE'],
    subtitle: 'Planeamento mensal, calendário editorial, design dos posts, publicações e relatórios.',
    statOrDetail: 'CRESCIMENTO DE MARCAS & POSICIONAMENTO DIGITAL',
    variant: 'crimson',
    imageSrc: '/assets/aistudio/PORTF_LIO_EVREN12.jpg_d5611f7a.jpeg',
    rotationDeg: 14,
    translateY: 18,
    serviceId: 'gestao-redes-sociais'
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'design-grafico',
    number: '01',
    title: 'Design Gráfico e Comunicação Visual',
    shortTitle: 'Design Gráfico',
    category: 'Direcção de Arte & Publicidade',
    description:
      'Desenvolvimento de peças visuais estratégicas para redes sociais, campanhas educativas, outdoors, lonas, roll-ups e materiais corporativos personalizados com acabamento de excelência.',
    deliverables: [
      'Artes para redes sociais',
      'Materiais Personalizados (T-shirts, bonés, canecas, brindes)',
      'Flyers, Banners e Roll-ups',
      'Cartazes e Outdoors de grande formato',
      'Catálogos e Brochuras corporativas'
    ],
    tools: ['Photoshop', 'Illustrator', 'After Effects', 'Lightroom', 'CorelDRAW', 'CapCut'],
    slideImage: '/assets/aistudio/PORTF_LIO_EVREN4.jpg_fcce24ef.jpeg',
    showcaseImage: '/assets/aistudio/PORTF_LIO_EVREN5.jpg_7b7ebcca.jpeg',
    featured: true
  },
  {
    id: 'identidade-corporativa',
    number: '02',
    title: 'Criação de Identidade Corporativa',
    shortTitle: 'Identidade Corporativa',
    category: 'Branding & Sistemas Visuais',
    description:
      'Construção completa da arquitetura visual da sua marca, desde o conceito do logotipo até ao manual de identidade e estacionário corporativo pronto para impressão e uso digital.',
    deliverables: [
      'Logotipo principal e versões responsivas',
      'Manual da marca e grelha construtiva',
      'Cartão de visita executivo',
      'Papel timbrado e envelopes corporativos',
      'Assinatura digital e crachás',
      'Aplicações da marca em frotas, fachadas e fardamento'
    ],
    slideImage: '/assets/aistudio/PORTF_LIO_EVREN6.jpg_9d4f0fd1.jpeg',
    showcaseImage: '/assets/aistudio/PORTF_LIO_EVREN7.jpg_e40f9cc3.jpeg',
    featured: true
  },
  {
    id: 'producao-video',
    number: '03',
    title: 'Produção e Edição de Vídeos',
    shortTitle: 'Produção de Vídeo',
    category: 'Cinema Digital & Motion',
    description:
      'Captação cinematográfica com equipamento Sony Alpha, Canon EOS RP e estabilização DJI RS4, sonorização profissional, iluminação de estúdio e pós-produção dinâmica.',
    deliverables: [
      'Vídeos Institucionais',
      'Vídeos Publicitários e Comerciais',
      'Cobertura de Eventos e Conferências',
      'Spot Publicitário (Evento)',
      'Entrevistas e Documentários corporativos',
      'Vídeo-Clip musical e Reels de alto impacto'
    ],
    slideImage: '/assets/aistudio/PORTF_LIO_EVREN8.jpg_ebec7752.jpeg',
    showcaseImage: '/assets/aistudio/PORTF_LIO_EVREN9.jpg_d5776310.jpeg',
    featured: true
  },
  {
    id: 'cobertura-fotografica',
    number: '04',
    title: 'Cobertura Fotográfica Profissional',
    shortTitle: 'Fotografia Profissional',
    category: 'Eventos, Corporativo & Editorial',
    description:
      'Registo fotográfico de alta resolução para conferências, casamentos, eventos institucionais, retratos executivos e fotografia de produto com tratamento de cor editorial.',
    deliverables: [
      'Eventos corporativos e institucionais',
      'Inaugurações e cerimónias oficiais',
      'Formaturas e conferências magnas',
      'Fotografia de produtos e gastronomia',
      'Retratos profissionais em estúdio ou exterior',
      'Eventos sociais (Casamentos, Noivados, Chá de Panela, Aniversários)'
    ],
    slideImage: '/assets/aistudio/PORTF_LIO_EVREN10.jpg_6e30f4e5.jpeg',
    showcaseImage: '/assets/aistudio/PORTF_LIO_EVREN11.jpg.jpeg',
    featured: true
  },
  {
    id: 'gestao-redes-sociais',
    number: '05',
    title: 'Gestão de Redes Sociais',
    shortTitle: 'Redes Sociais',
    category: 'Estratégia Digital & Performance',
    description:
      'Gestão completa de presença digital com planeamento editorial mensal, design de alto padrão, copywriting persuasivo e análise de métricas para crescimento consistente.',
    deliverables: [
      'Planeamento Mensal estratégico',
      'Calendário Editorial estruturado',
      'Design dos Posts e Carrosséis',
      'Publicações e gestão de comunidade',
      'Relatórios de desempenho e alcance'
    ],
    slideImage: '/assets/aistudio/PORTF_LIO_EVREN12.jpg_d5611f7a.jpeg',
    showcaseImage: '/assets/aistudio/file_000000004c2481f488672ff0719bc238_37201fe4.png',
    featured: true
  },
  {
    id: 'conteudo-digital',
    number: '06',
    title: 'Criação de Conteúdo Digital',
    shortTitle: 'Conteúdo Digital',
    category: 'Storytelling & Criativos',
    description:
      'Produção contínua de criativos multimédia, thumbnails de alta taxa de clique, direção de talento diante das câmaras e formatos verticais para Instagram, TikTok e YouTube.',
    deliverables: [
      'Thumbnails de alto impacto para YouTube',
      'Reels e vídeos curtos com direção de apresentadores',
      'Animação de logotipo 3D e intros',
      'Infográficos e apresentações executivas'
    ],
    showcaseImage: '/assets/aistudio/IMFZ2geR_vwqQ_ba376e00.png',
    featured: false
  },
  {
    id: 'material-publicitario',
    number: '07',
    title: 'Desenvolvimento de Material Publicitário',
    shortTitle: 'Material Publicitário',
    category: 'Campanhas Online & Offline',
    description:
      'Concepção de peças publicitárias orientadas à conversão para lançamentos de cursos, clínicas de estética, restauração e grandes promoções comerciais.',
    deliverables: [
      'Key Visuals de campanha',
      'Cartazes promocionais de alta conversão',
      'Displays de ponto de venda (POS)',
      'Sinalética interior e exterior'
    ],
    showcaseImage: '/assets/aistudio/file_00000000a48482118900fd5cd075af62_5502d691.png',
    featured: false
  },
  {
    id: 'branding-posicionamento',
    number: '08',
    title: 'Branding e Posicionamento de Marca',
    shortTitle: 'Branding & Posicionamento',
    category: 'Consultoria de Marca',
    description:
      'Diagnóstico, reposicionamento e alinhamento estético e verbal para marcas angolanas que procuram destacar-se num mercado competitivo com autoridade.',
    deliverables: [
      'Arquitetura e tom de voz da marca',
      'Rebranding e modernização visual',
      'Padronização de pontos de contacto',
      'Estratégia de diferenciação competitiva'
    ],
    showcaseImage: '/assets/aistudio/PORTF_LIO_EVREN7.jpg_e40f9cc3.jpeg',
    featured: false
  },
  {
    id: 'campanhas-promocionais',
    number: '09',
    title: 'Produção de Campanhas Promocionais',
    shortTitle: 'Campanhas Promocionais',
    category: 'Lançamentos & Eventos',
    description:
      'Planeamento e execução integrada de campanhas sazonais e institucionais com fotografia própria em estúdio, direção de modelos e pacotes multicanal.',
    deliverables: [
      'Direcção criativa e produção fotográfica',
      'Pacotes promocionais multicanal',
      'Spots vídeo e áudio para divulgação',
      'Peças adaptadas para tráfego pago'
    ],
    showcaseImage: '/assets/aistudio/IMG_9956_712663b3.PNG',
    featured: false
  },
  {
    id: 'impressao-producao-grafica',
    number: '10',
    title: 'Impressão e Produção de Material Gráfico',
    shortTitle: 'Impressão & Produção Gráfica',
    category: 'Produção Física & Grandes Formatos',
    description:
      'Impressão digital de alta precisão em grande formato (plotters Roland), vinil autocolante, lonas, quadros digitais A4/A3/A2, álbuns fotográficos e personalização têxtil.',
    deliverables: [
      'Impressão em grande formato (Lonas, Vinil, Microperfurado)',
      'Quadros digitais profissionais A4, A3 e A2',
      'Álbuns fotográficos de luxo e Pendrives personalizadas',
      'Estampagem de t-shirts, pólos, bonés e brindes corporativos'
    ],
    showcaseImage: '/assets/aistudio/PORTF_LIO_EVREN5.jpg_7b7ebcca.jpeg',
    featured: false
  }
];

export const PROMO_PACKAGES: PackageTier[] = [
  // CASAMENTO (4 packages)
  {
    id: 'casamento-pacote-premium',
    categoryId: 'casamento',
    categoryLabel: 'Casamento',
    name: 'Pacote Premium Ilimitado',
    shortPackName: 'PREMIUM PACK',
    subtitle: 'A experiência máxima de cinema e fotografia ilimitada para o seu grande dia',
    originalPriceKz: 1000000,
    promoPriceKz: 700000,
    discountPercent: 30,
    isPremium: true,
    photoCountLabel: 'Ilimitado + Duplo Kit',
    features: [
      'Número de fotografias ilimitadas',
      '2 Quadros digitais de grande formato A2',
      '2 Pendrives personalizadas com as fotos',
      'Serviços completos nas nuvens + Serviço expresso',
      '2 Álbuns de luxo de 100 fotos cada',
      'Vídeo profissional de 30 minutos + Pré e Pós-Wedding'
    ],
    flyerImage: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_14.35.30_d17ff0d4.jpeg',
    showcaseLeftImage: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.03.jpeg',
    showcaseRightImage: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.05.jpeg'
  },
  {
    id: 'casamento-pacote-1',
    categoryId: 'casamento',
    categoryLabel: 'Casamento',
    name: 'Pacote 1 — Essencial',
    shortPackName: 'CASAMENTO 01',
    subtitle: 'Cobertura fotográfica dedicada com entrega física e na nuvem',
    originalPriceKz: 173000,
    promoPriceKz: 121100,
    discountPercent: 30,
    photoCountLabel: 'Fotografias Limitadas',
    features: [
      'Número de fotografias limitadas',
      'Fotos disponíveis nas nuvens',
      '1 Quadro digital tamanho A4',
      'Pen drive personalizada com as fotos'
    ],
    flyerImage: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_14.33.54_cc614ad1.jpeg',
    showcaseLeftImage: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.04.jpeg',
    showcaseRightImage: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.03 (1).jpeg'
  },
  {
    id: 'casamento-pacote-2',
    categoryId: 'casamento',
    categoryLabel: 'Casamento',
    name: 'Pacote 2 — Completo',
    shortPackName: 'CASAMENTO 02',
    subtitle: 'Fotografias ilimitadas, vídeo resumo, álbum e pré-wedding',
    originalPriceKz: 280000,
    promoPriceKz: 196000,
    discountPercent: 30,
    photoCountLabel: 'Fotografias Ilimitadas',
    features: [
      'Número de fotografias ilimitadas + 1 Quadro A3',
      'Fotos na pen drive + Serviço nas nuvens + Expresso',
      'Álbum profissional de 100 fotos',
      'Vídeo profissional (3 a 6 minutos)',
      'Sessão Pré-Wedding + Chá de Panela ou Noivado'
    ],
    flyerImage: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_14.33.54_cc614ad1.jpeg',
    showcaseLeftImage: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.06.jpeg',
    showcaseRightImage: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.05 (2).jpeg'
  },
  {
    id: 'casamento-pacote-3',
    categoryId: 'casamento',
    categoryLabel: 'Casamento',
    name: 'Pacote 3 — Executivo',
    shortPackName: 'CASAMENTO 03',
    subtitle: 'Cobertura cinematográfica longa (15–25 min) + Pré e Pós-Wedding',
    originalPriceKz: 480000,
    promoPriceKz: 336000,
    discountPercent: 30,
    photoCountLabel: 'Fotografias Ilimitadas',
    features: [
      'Número de fotografias ilimitadas + 1 Quadro A2',
      'Pen drive + Serviço nas nuvens + Serviço expresso',
      'Sessão Pré-Wedding + Sessão Pós-Wedding',
      'Álbum de luxo com 150 fotos',
      'Vídeo profissional completo (15 a 25 minutos)'
    ],
    flyerImage: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_14.33.54_cc614ad1.jpeg',
    showcaseLeftImage: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.03 (2).jpeg',
    showcaseRightImage: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.06 (1).jpeg'
  },

  // EVENTOS CORPORATIVOS (3 packages)
  {
    id: 'corporativo-pacote-1',
    categoryId: 'corporativo',
    categoryLabel: 'Eventos Corporativos',
    name: 'Pacote Corporativo 1',
    shortPackName: 'CORP PACK 01',
    subtitle: 'Ideal para workshops, reuniões executivas e cerimónias breves',
    originalPriceKz: 47000,
    promoPriceKz: 32900,
    discountPercent: 30,
    photoCountLabel: '55 Fotografias',
    features: [
      'Quantidade: 55 fotografias profissionais tratadas',
      'Cobertura de momentos-chave e protocolo',
      'Guarnições: A definir pelo cliente',
      'Entrega digital em alta resolução'
    ],
    flyerImage: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_14.33.56_e8e1f087.jpeg',
    showcaseLeftImage: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.07.jpeg',
    showcaseRightImage: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.28.jpeg'
  },
  {
    id: 'corporativo-pacote-2',
    categoryId: 'corporativo',
    categoryLabel: 'Eventos Corporativos',
    name: 'Pacote Corporativo 2',
    shortPackName: 'CORP PACK 02',
    subtitle: 'Para inaugurações, seminários e lançamentos empresariais',
    originalPriceKz: 85000,
    promoPriceKz: 59500,
    discountPercent: 30,
    photoCountLabel: '100 Fotografias',
    features: [
      'Quantidade: 100 fotografias profissionais tratadas',
      'Guarnições incluídas: 1 Quadro digital A4',
      'Registo de oradores, equipa e networking',
      'Entrega digital rápida para comunicação institucional'
    ],
    flyerImage: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_14.33.56_e8e1f087.jpeg',
    showcaseLeftImage: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.50.jpeg',
    showcaseRightImage: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.52.jpeg'
  },
  {
    id: 'corporativo-pacote-3',
    categoryId: 'corporativo',
    categoryLabel: 'Eventos Corporativos',
    name: 'Pacote Corporativo 3 — Conferência & Reportagem',
    shortPackName: 'CORP PACK 03',
    subtitle: 'Cobertura fotográfica e audiovisual com reportagem institucional',
    originalPriceKz: 170000,
    promoPriceKz: 119000,
    discountPercent: 30,
    isPremium: true,
    photoCountLabel: '150 Fotos + Vídeo Reportagem',
    features: [
      'Quantidade: 150 fotografias profissionais em alta resolução',
      'Guarnições: 1 Vídeo de 2 minutos (Aftermovie / Institucional)',
      'Reportagem vídeo com entrevistas no evento',
      'Pronto para divulgação em redes sociais e imprensa'
    ],
    flyerImage: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_14.33.56_e8e1f087.jpeg',
    showcaseLeftImage: '/assets/aistudio/PORTF_LIO_EVREN10.jpg_6e30f4e5.jpeg',
    showcaseRightImage: '/assets/aistudio/PORTF_LIO_EVREN11.jpg.jpeg'
  },

  // CHÁ DE PANELA (3 packages)
  {
    id: 'cha-panela-pacote-1',
    categoryId: 'cha-de-panela',
    categoryLabel: 'Chá de Panela',
    name: 'Pacote 1 — Chá de Panela',
    shortPackName: 'CHÁ PACK 01',
    subtitle: 'Registo espontâneo e elegante da decoração e convidados',
    originalPriceKz: 47000,
    promoPriceKz: 32900,
    discountPercent: 30,
    photoCountLabel: '45 Fotografias',
    features: [
      'Quantidade: 45 Fotografias editadas em alta resolução',
      'Formato Digital pronto para partilha',
      'Direcção de poses com os noivos e família',
      'Tratamento de cor profissional Evren'
    ],
    flyerImage: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_14.33.52_490df666.jpeg',
    showcaseLeftImage: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.06 (2).jpeg',
    showcaseRightImage: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.05 (1).jpeg'
  },
  {
    id: 'cha-panela-pacote-2',
    categoryId: 'cha-de-panela',
    categoryLabel: 'Chá de Panela',
    name: 'Pacote 2 — Chá de Panela',
    shortPackName: 'CHÁ PACK 02',
    subtitle: 'Cobertura alargada de todas as dinâmicas, jogos e momentos',
    originalPriceKz: 82000,
    promoPriceKz: 57400,
    discountPercent: 30,
    photoCountLabel: '105 Fotografias',
    features: [
      'Quantidade: 105 Fotografias editadas em alta resolução',
      'Formato Digital de entrega rápida',
      'Registo completo da mesa de doces, decoração e dinâmicas',
      'Galeria digital organizada'
    ],
    flyerImage: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_14.33.52_490df666.jpeg',
    showcaseLeftImage: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.06.jpeg',
    showcaseRightImage: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.04 (1).jpeg'
  },
  {
    id: 'cha-panela-pacote-3',
    categoryId: 'cha-de-panela',
    categoryLabel: 'Chá de Panela',
    name: 'Pacote 3 — Chá de Panela Premium',
    shortPackName: 'CHÁ PACK 03',
    subtitle: 'Cobertura completa sem perder nenhum detalhe da celebração',
    originalPriceKz: 162000,
    promoPriceKz: 113400,
    discountPercent: 30,
    isPremium: true,
    photoCountLabel: '155 Fotografias',
    features: [
      'Quantidade: 155 Fotografias editadas em alta resolução',
      'Formato Digital de máxima qualidade',
      'Cobertura integral do início ao encerramento',
      'Sessão dedicada do casal no cenário principal'
    ],
    flyerImage: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_14.33.52_490df666.jpeg',
    showcaseLeftImage: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.05 (3).jpeg',
    showcaseRightImage: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.03 (3).jpeg'
  },

  // ANIVERSÁRIO (3 packages)
  {
    id: 'aniversario-pacote-1',
    categoryId: 'aniversario',
    categoryLabel: 'Aniversário',
    name: 'Pacote 1 — Aniversário',
    shortPackName: 'FESTA PACK 01',
    subtitle: 'Cobertura essencial para festas infantis ou celebrações íntimas',
    originalPriceKz: 33000,
    promoPriceKz: 23100,
    discountPercent: 30,
    photoCountLabel: '45 Fotografias',
    features: [
      'Quantidade: 45 Fotografias profissionais',
      'Formato Digital em alta definição',
      'Registo do parabéns, corte do bolo e retratos principais',
      'Edição de cor vibrante'
    ],
    flyerImage: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_14.33.55_4b3197fe.jpeg',
    showcaseLeftImage: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.54.jpeg',
    showcaseRightImage: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.56.jpeg'
  },
  {
    id: 'aniversario-pacote-2',
    categoryId: 'aniversario',
    categoryLabel: 'Aniversário',
    name: 'Pacote 2 — Aniversário',
    shortPackName: 'FESTA PACK 02',
    subtitle: 'O equilíbrio ideal para registar toda a família e convidados',
    originalPriceKz: 46000,
    promoPriceKz: 32200,
    discountPercent: 30,
    photoCountLabel: '75 Fotografias',
    features: [
      'Quantidade: 75 Fotografias profissionais',
      'Formato Digital em alta definição',
      'Cobertura da recepção, decoração, animação e parabéns',
      'Entrega digital rápida'
    ],
    flyerImage: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_14.33.55_4b3197fe.jpeg',
    showcaseLeftImage: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.55.jpeg',
    showcaseRightImage: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.53 (1).jpeg'
  },
  {
    id: 'aniversario-pacote-3',
    categoryId: 'aniversario',
    categoryLabel: 'Aniversário',
    name: 'Pacote 3 — Aniversário Completo',
    shortPackName: 'FESTA PACK 03',
    subtitle: 'Cobertura alargada para grandes festas de aniversário e galas',
    originalPriceKz: 73000,
    promoPriceKz: 51100,
    discountPercent: 30,
    isPremium: true,
    photoCountLabel: '105 Fotografias',
    features: [
      'Quantidade: 105 Fotografias profissionais',
      'Formato Digital em alta definição',
      'Cobertura completa de todos os momentos da festa',
      'Ensaio do aniversariante com cenário e familiares'
    ],
    flyerImage: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_14.33.55_4b3197fe.jpeg',
    showcaseLeftImage: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.52 (1).jpeg',
    showcaseRightImage: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.54 (1).jpeg'
  }
];

export const VIDEO_REELS: VideoReelItem[] = [
  {
    id: 'video-casamentos-spot',
    title: 'Spot Oficial Casamentos — "O Seu Dia, A Sua História Para Sempre"',
    subtitle: 'Filmagem, Fotografia e Cobertura Cinematográfica de Casamentos',
    category: 'Casamentos & Cinema',
    duration: '00:38',
    src: '/assets/aistudio/galeria/WhatsApp Video 2026-10-24 at 15.48.15.mp4',
    poster: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.03.jpeg',
    description:
      '"Existem dias que passam e existem momentos que ficam para sempre. Nós não registamos apenas imagens, registamos histórias." — Produção oficial Evren Visual Studio.'
  },
  {
    id: 'video-logo-intro',
    title: 'Identidade Animada 3D — Evren Visual Studio',
    subtitle: 'Motion Design & Vinheta Oficial de Estúdio',
    category: 'Motion & Branding',
    duration: '00:08',
    src: '/assets/aistudio/Animate_logo_video_intro_20260911141728_2747170e.mp4',
    poster: '/assets/aistudio/PORTF_LIO_EVREN.jpg_56e905d9.jpeg',
    description:
      'Vinheta oficial tridimensional da Evren Visual Studio ambientada em estúdio de produção audiovisual.'
  },
  {
    id: 'video-talento-cameras',
    title: 'Direcção & Comunicação — "Desenvolvendo Talento Diante das Câmaras"',
    subtitle: 'Produção de Conteúdo Corporativo & Media Training com Áudio Lapela',
    category: 'Conteúdo & Direcção',
    duration: '00:20',
    src: '/assets/aistudio/galeria/WhatsApp Video 2026-10-24 at 15.48.22.mp4',
    poster: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.07.jpeg',
    description:
      '"Tu também sentes medo quando a câmara aponta para si? Está na hora de transformar esse medo em confiança. Evren Visual Studio — desenvolvendo talento diante das câmaras."'
  },
  {
    id: 'video-conferencia-magna',
    title: 'Conferência Magna de Gestão 2026 — Chik Chik 2',
    subtitle: 'Cobertura Audiovisual & Reportagem Corporativa no Lobito',
    category: 'Cobertura de Eventos',
    duration: '01:15',
    src: '/assets/aistudio/WhatsApp_Video_2026-10-24_at_15.58.51_a4707e47.mp4',
    poster: '/assets/aistudio/PORTF_LIO_EVREN10.jpg_6e30f4e5.jpeg',
    description:
      'Equipa Evren Visual Studio em acção na Conferência Magna de Gestão 2026 (28 de Agosto, Chik Chik 2), com captação multi-câmara, entrevistas a oradores e registo protocolar.'
  },
  {
    id: 'video-bastidores-camera',
    title: 'Setup Cinematográfico & Estúdio Evren',
    subtitle: 'Equipamento de Cinema Digital, Iluminação Softbox & Estabilização',
    category: 'Bastidores & Estúdio',
    duration: '00:16',
    src: '/assets/aistudio/WhatsApp_Video_2026-10-24_at_15.48.49_6adfc7c4.mp4',
    poster: '/assets/aistudio/PORTF_LIO_EVREN9.jpg_d5776310.jpeg',
    description:
      'Bastidores técnicos no estúdio da Evren Visual Studio com câmara de cinema, iluminação contínua com grelha e equipa criativa.'
  },
  {
    id: 'video-equipa-estudio-1',
    title: 'Equipa Criativa Evren Visual Studio',
    subtitle: 'Jovens empreendedores comprometidos com a inovação em Angola',
    category: 'Institucional',
    duration: '00:15',
    src: '/assets/aistudio/WhatsApp_Video_2026-10-24_at_15.48.48_a11ab629.mp4',
    poster: '/assets/aistudio/PORTF_LIO_EVREN2.jpg_a81ce197.jpeg',
    description:
      'Apresentação da equipa Evren Visual Studio no nosso estúdio na Zona Comercial 28, Lobito.'
  },
  {
    id: 'video-equipa-estudio-2',
    title: 'Cultura & Energia no Estúdio Evren',
    subtitle: 'Direcção Criativa, Fotografia e Pós-Produção',
    category: 'Bastidores & Estúdio',
    duration: '00:14',
    src: '/assets/aistudio/WhatsApp_Video_2026-10-24_at_15.48.49__1__34d12232.mp4',
    poster: '/assets/aistudio/PORTF_LIO_EVREN8.jpg_ebec7752.jpeg',
    description:
      'Momentos de bastidores da equipa técnica e criativa durante sessões em estúdio.'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // 1. Client Campaigns & Creative Works (7)
  {
    id: 'campanha-ltc-1',
    title: 'Campanha Institucional: "Venha Adquirir Conhecimento"',
    client: 'LTC — Lobito Training Center',
    category: 'design-campanhas',
    categoryLabel: 'Design & Campanhas',
    description:
      'Fotografia corporativa em ambiente de formação e design publicitário desenvolvido para o Lobito Training Center.',
    mediaType: 'image',
    src: '/assets/aistudio/file_000000004c2481f488672ff0719bc238_37201fe4.png',
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Lobito',
    deliverables: 'Fotografia + Direcção de Arte + Social Media'
  },
  {
    id: 'campanha-ltc-2',
    title: 'Campanha Executiva: "Investe no Teu Futuro"',
    client: 'LTC — Lobito Training Center',
    category: 'design-campanhas',
    categoryLabel: 'Design & Campanhas',
    description:
      'Retrato corporativo de estúdio com iluminação dramática azul e tipografia de alto impacto para atracção de formandos.',
    mediaType: 'image',
    src: '/assets/aistudio/IMG_9956_712663b3.PNG',
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Lobito',
    deliverables: 'Fotografia de Estúdio + Key Visual'
  },
  {
    id: 'campanha-tuca-mama-1',
    title: 'Campanha: "Não Basta Ter Boas Ideias, É Preciso Fazê-las Acontecer"',
    client: 'Tuca Mama — Beleza e Estética Avançada',
    category: 'design-campanhas',
    categoryLabel: 'Design & Campanhas',
    description:
      'Posicionamento executivo e direcção fotográfica de estúdio para a marca Tuca Mama Beleza e Estética Avançada.',
    mediaType: 'image',
    src: '/assets/aistudio/file_00000000a48482118900fd5cd075af62_5502d691.png',
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Lobito',
    deliverables: 'Retrato Executivo + Design Gráfico'
  },
  {
    id: 'campanha-tuca-mama-2',
    title: 'Campanha: "Mulher Que Se Conhece, Não Se Limita"',
    client: 'Tuca Mama — Beleza e Estética Avançada',
    category: 'design-campanhas',
    categoryLabel: 'Design & Campanhas',
    description:
      'Série visual de empoderamento feminino e liderança empreendedora para comunicação institucional nas redes sociais.',
    mediaType: 'image',
    src: '/assets/aistudio/file_000000006b808208987d407968eb22a2_dd9dd657.png',
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Lobito',
    deliverables: 'Fotografia + Social Media Design'
  },
  {
    id: 'campanha-ltc-3',
    title: 'Campanha: "Empoderamento Intelectual"',
    client: 'LTC — Lobito Training Center',
    category: 'design-campanhas',
    categoryLabel: 'Design & Campanhas',
    description:
      'Peça publicitária focada em formação profissional contínua com composição em dupla exposição e identidade azul.',
    mediaType: 'image',
    src: '/assets/aistudio/file_00000000f5c081f4b5196fdaf7a9a2ba_266ebf1a.png',
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Lobito',
    deliverables: 'Design Publicitário + Fotografia'
  },
  {
    id: 'campanha-ltc-4',
    title: 'Campanha: "O Conhecimento É Poder"',
    client: 'LTC — Lobito Training Center',
    category: 'design-campanhas',
    categoryLabel: 'Design & Campanhas',
    description:
      'Criativo para redes sociais destacando liderança jovem e qualificação técnica no Município do Lobito.',
    mediaType: 'image',
    src: '/assets/aistudio/IMG_9957_43caf9cc.PNG',
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Lobito',
    deliverables: 'Fotografia de Estúdio + Social Media'
  },
  {
    id: 'criativo-thumbnail-80t',
    title: 'Manipulação Visual & Thumbnail: "80 Toneladas — Afundou vs Aguentou"',
    client: 'Produção de Conteúdo Digital',
    category: 'design-campanhas',
    categoryLabel: 'Design & Campanhas',
    description:
      'Composição avançada de manipulação de imagem, color grading e contraste dramático para criativos digitais de alto CTR.',
    mediaType: 'image',
    src: '/assets/aistudio/IMFZ2geR_vwqQ_ba376e00.png',
    aspectRatio: 'landscape',
    year: '2026',
    location: 'Angola',
    deliverables: 'Manipulação Fotográfica + Thumbnail Design'
  },

  // 2. Branding & Corporate Identity Cases
  {
    id: 'branding-navia',
    title: 'Sistema de Identidade Corporativa — NaVia Logística & Navegação',
    client: 'NaVia — Soluções de Navegação e Logística',
    category: 'identidade-branding',
    categoryLabel: 'Identidade & Branding',
    description:
      'Desenvolvimento de logotipo, grelha construtiva, estacionário completo, fardamento, bonés, crachás e personalização de frota.',
    mediaType: 'image',
    src: '/assets/aistudio/PORTF_LIO_EVREN7.jpg_e40f9cc3.jpeg',
    aspectRatio: 'landscape',
    year: '2026',
    location: 'Lobito / Benguela',
    deliverables: 'Logotipo + Manual da Marca + Estacionário + Frota'
  },
  {
    id: 'branding-impressao-outdoors',
    title: 'Produção Gráfica, Grandes Formatos & Materiais Personalizados',
    client: 'Kode Foods · Neotrix · NaVia · Evren',
    category: 'identidade-branding',
    categoryLabel: 'Identidade & Branding',
    description:
      'Exposição de trabalhos realizados em impressão digital Roland, outdoors de estrada, roll-ups corporativos e vestuário personalizado.',
    mediaType: 'image',
    src: '/assets/aistudio/PORTF_LIO_EVREN5.jpg_7b7ebcca.jpeg',
    aspectRatio: 'landscape',
    year: '2026',
    location: 'Lobito',
    deliverables: 'Outdoors + Roll-ups + T-shirts + Impressão Roland'
  },
  {
    id: 'branding-el-soares',
    title: 'Gestão de Redes Sociais & Posicionamento Digital',
    client: 'El Soares Entertainment',
    category: 'identidade-branding',
    categoryLabel: 'Identidade & Branding',
    description:
      'Planeamento mensal, calendário editorial, design de posts e gestão estratégica de perfil no Instagram para El Soares Entertainment.',
    mediaType: 'image',
    src: '/assets/aistudio/PORTF_LIO_EVREN12.jpg_d5611f7a.jpeg',
    aspectRatio: 'landscape',
    year: '2026',
    location: 'Angola',
    deliverables: 'Social Media Management + Content Design'
  },
  {
    id: 'branding-evren-logos',
    title: 'Sistema Oficial de Logotipo & Monograma — Evren Visual Studio',
    client: 'Evren Visual Studio — Manual de Identidade',
    category: 'identidade-branding',
    categoryLabel: 'Identidade & Branding',
    description:
      'Versões oficiais da marca Evren Visual Studio em vermelho carmesim, azul-marinho profundo e monograma circular.',
    mediaType: 'image',
    src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.57.jpeg',
    aspectRatio: 'landscape',
    year: '2026',
    location: 'Lobito, Angola',
    deliverables: 'Identidade Visual Oficial + Variantes Cromáticas'
  },

  // 3. Casamentos & Noivados Tradicionais (Real Photography from Zip)
  {
    id: 'casamento-real-1',
    title: 'Cerimónia de Casamento & Retrato Real da Família',
    client: 'Cobertura de Casamento Evren',
    category: 'casamentos-noivados',
    categoryLabel: 'Casamentos & Noivados',
    description:
      'Registo fotográfico noturno de alta definição com iluminação dedicada para os noivos e damas de honor.',
    mediaType: 'image',
    src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.03.jpeg',
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Lobito / Benguela',
    deliverables: 'Fotografia de Casamento + Iluminação Externa'
  },
  {
    id: 'casamento-real-2',
    title: 'Retrato da Noiva — Bouquet & Coroa de Cristal',
    client: 'Cobertura de Casamento Evren',
    category: 'casamentos-noivados',
    categoryLabel: 'Casamentos & Noivados',
    description:
      'Retrato editorial da noiva junto à piscina com tratamento de pele e brilho de alta costura.',
    mediaType: 'image',
    src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.05.jpeg',
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Lobito / Benguela',
    deliverables: 'Retrato de Noiva + Edição Fine Art'
  },
  {
    id: 'casamento-real-3',
    title: 'Momentos Maternos & Preparação da Noiva',
    client: 'Making Of & Cerimónia Evren',
    category: 'casamentos-noivados',
    categoryLabel: 'Casamentos & Noivados',
    description:
      'Fotografia intimista e emocionante da noiva com as filhas antes da cerimónia principal.',
    mediaType: 'image',
    src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.04.jpeg',
    aspectRatio: 'landscape',
    year: '2026',
    location: 'Lobito / Benguela',
    deliverables: 'Making Of da Noiva + Fotografia Documental'
  },
  {
    id: 'casamento-real-4',
    title: 'Noivado Tradicional (Alambamento) & Traje Africano',
    client: 'Cerimónia Tradicional & Familiar',
    category: 'casamentos-noivados',
    categoryLabel: 'Casamentos & Noivados',
    description:
      'Registo oficial do casal em traje tradicional angolano com cores vibrantes e fidelidade cromática.',
    mediaType: 'image',
    src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.06.jpeg',
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Lobito / Benguela',
    deliverables: 'Cobertura de Noivado & Pedido Tradicional'
  },
  {
    id: 'casamento-real-5',
    title: 'Retrato dos Noivos & Família no Altar Azul',
    client: 'Cobertura de Casamento Evren',
    category: 'casamentos-noivados',
    categoryLabel: 'Casamentos & Noivados',
    description: 'Composição clássica de casamento com direção de pose e iluminação balanceada.',
    mediaType: 'image',
    src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.03 (1).jpeg',
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Lobito / Benguela',
    deliverables: 'Fotografia Oficial de Casamento'
  },
  {
    id: 'casamento-real-6',
    title: 'Celebração & Cortejo dos Noivos',
    client: 'Cobertura de Casamento Evren',
    category: 'casamentos-noivados',
    categoryLabel: 'Casamentos & Noivados',
    description: 'Registo espontâneo de alegria e cumplicidade durante a recepção do casamento.',
    mediaType: 'image',
    src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.03 (2).jpeg',
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Lobito / Benguela',
    deliverables: 'Cobertura Social Completa'
  },
  {
    id: 'casamento-real-7',
    title: 'Ensaio Pós-Cerimónia & Detalhes de Gala',
    client: 'Cobertura de Casamento Evren',
    category: 'casamentos-noivados',
    categoryLabel: 'Casamentos & Noivados',
    description: 'Sessão fotográfica dedicada aos noivos em ambiente exterior noturno.',
    mediaType: 'image',
    src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.05 (2).jpeg',
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Lobito / Benguela',
    deliverables: 'Sessão dos Noivos + Quadro Digital'
  },
  {
    id: 'casamento-real-8',
    title: 'Retrato Tradicional — Detalhes e Elegância Cultural',
    client: 'Cerimónia Tradicional Evren',
    category: 'casamentos-noivados',
    categoryLabel: 'Casamentos & Noivados',
    description: 'Retrato de casal celebrando a união tradicional e familiar.',
    mediaType: 'image',
    src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.06 (2).jpeg',
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Lobito / Benguela',
    deliverables: 'Fotografia de Noivado & Família'
  },

  // 4. Cobertura de Grandes Eventos, Concertos & Festivais (Real Photography from Zip)
  {
    id: 'evento-festival-1',
    title: 'Equipa Evren Visual Studio — Cobertura Oficial de Grandes Eventos',
    client: 'Festival & Evento Unitel / Cuca / Wiliete',
    category: 'fotografia-eventos',
    categoryLabel: 'Eventos & Festivais',
    description:
      'Profissional da Evren Visual Studio devidamente credenciado e fardado com colete oficial em cobertura de grande evento.',
    mediaType: 'image',
    src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.50.jpeg',
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Benguela / Lobito',
    deliverables: 'Cobertura de Imprensa & Red Carpet'
  },
  {
    id: 'evento-festival-2',
    title: 'Performance de Palco Ao Vivo — Concerto 3 Finer',
    client: 'Cobertura de Espectáculo Musical',
    category: 'fotografia-eventos',
    categoryLabel: 'Eventos & Festivais',
    description:
      'Captação de palco de alta velocidade com teleobjetiva, congelando a energia do artista perante o ecrã LED.',
    mediaType: 'image',
    src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.51.jpeg',
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Benguela / Lobito',
    deliverables: 'Fotografia de Espectáculo & Palco'
  },
  {
    id: 'evento-festival-3',
    title: 'Red Carpet & Bastidores VIP com Artistas',
    client: 'Evento Unitel / Cuca / LS & Republicano',
    category: 'fotografia-eventos',
    categoryLabel: 'Eventos & Festivais',
    description:
      'Registo fotográfico no tapete vermelho oficial com equipa Evren e convidados especiais.',
    mediaType: 'image',
    src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.52.jpeg',
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Benguela / Lobito',
    deliverables: 'Fotografia VIP & Backstage'
  },
  {
    id: 'evento-festival-4',
    title: 'Palco Noturno — Expressão e Luz em Concerto Ao Vivo',
    client: 'Cobertura de Espectáculo Musical',
    category: 'fotografia-eventos',
    categoryLabel: 'Eventos & Festivais',
    description:
      'Domínio de baixa luminosidade e contraste dramático em actuação musical ao vivo.',
    mediaType: 'image',
    src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.53.jpeg',
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Benguela / Lobito',
    deliverables: 'Fotografia de Concerto & Show'
  },
  {
    id: 'evento-festival-5',
    title: 'Retrato Editorial no Red Carpet — Moda & Lifestyle',
    client: 'Cobertura Social VIP',
    category: 'fotografia-eventos',
    categoryLabel: 'Eventos & Festivais',
    description:
      'Iluminação de flash direccional no tapete vermelho destacando texturas e estilo.',
    mediaType: 'image',
    src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.54.jpeg',
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Benguela / Lobito',
    deliverables: 'Fotografia Social & Flash Editorial'
  },
  {
    id: 'evento-festival-6',
    title: 'Presença VIP & Convidados no Lounge Oficial',
    client: 'Cobertura de Evento Cultural',
    category: 'fotografia-eventos',
    categoryLabel: 'Eventos & Festivais',
    description: 'Registo de personalidades e convidados no backdrop oficial do evento.',
    mediaType: 'image',
    src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.55.jpeg',
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Benguela / Lobito',
    deliverables: 'Cobertura Fotográfica de Eventos'
  },
  {
    id: 'evento-festival-7',
    title: 'Entrevistas & Imprensa no Tapete Vermelho',
    client: 'Cobertura Multimédia Evren',
    category: 'fotografia-eventos',
    categoryLabel: 'Eventos & Festivais',
    description:
      'Momento descontraído durante entrevistas de imprensa e reportagem audiovisual.',
    mediaType: 'image',
    src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.56.jpeg',
    aspectRatio: 'landscape',
    year: '2026',
    location: 'Benguela / Lobito',
    deliverables: 'Reportagem & Fotografia de Imprensa'
  },
  {
    id: 'evento-festival-8',
    title: 'Cobertura de Palco & Artistas Convidados',
    client: 'Festival Musical em Benguela',
    category: 'fotografia-eventos',
    categoryLabel: 'Eventos & Festivais',
    description: 'Fotografia de acção e presença de palco em grande festival.',
    mediaType: 'image',
    src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.51 (2).jpeg',
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Benguela / Lobito',
    deliverables: 'Fotografia de Palco'
  },
  {
    id: 'evento-festival-9',
    title: 'Equipa Técnica Evren no Backstage',
    client: 'Evren Visual Studio — Operações',
    category: 'fotografia-eventos',
    categoryLabel: 'Eventos & Festivais',
    description: 'Equipa Evren Visual Studio pronta para cobertura integral de grandes eventos.',
    mediaType: 'image',
    src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.50 (1).jpeg',
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Benguela / Lobito',
    deliverables: 'Equipa de Cobertura Profissional'
  },

  // 5. Retratos de Estúdio & Sessões Corporativas (Real Photography from Zip)
  {
    id: 'retrato-estudio-1',
    title: 'Retrato Executivo em Estúdio — Iluminação Low-Key',
    client: 'Sessão de Posicionamento Profissional',
    category: 'retratos-estudio',
    categoryLabel: 'Retratos & Estúdio',
    description:
      'Retrato corporativo em fundo negro texturizado com recorte de luz lateral no estúdio Evren.',
    mediaType: 'image',
    src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.23.jpeg',
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Estúdio Evren, Lobito',
    deliverables: 'Retrato Executivo de Estúdio'
  },
  {
    id: 'retrato-estudio-2',
    title: 'Retrato Corporativo — Liderança e Confiança',
    client: 'Sessão de Estúdio Evren',
    category: 'retratos-estudio',
    categoryLabel: 'Retratos & Estúdio',
    description:
      'Direcção de expressão e postura para fotografia de perfil executivo e campanhas institucionais.',
    mediaType: 'image',
    src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.24.jpeg',
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Estúdio Evren, Lobito',
    deliverables: 'Fotografia Corporativa & Retrato'
  },
  {
    id: 'retrato-estudio-3',
    title: 'Sessão Corporativa em Ambiente de Escritório',
    client: 'LTC — Lobito Training Center (Fotografia Original)',
    category: 'retratos-estudio',
    categoryLabel: 'Retratos & Estúdio',
    description:
      'Fotografia base de alta resolução captada pela Evren para as campanhas do Lobito Training Center.',
    mediaType: 'image',
    src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.28.jpeg',
    aspectRatio: 'landscape',
    year: '2026',
    location: 'Lobito',
    deliverables: 'Fotografia Corporativa In-Loco'
  },
  {
    id: 'retrato-estudio-4',
    title: 'Gravação Exterior & Entrevista Executiva',
    client: 'Produção de Conteúdo Evren',
    category: 'retratos-estudio',
    categoryLabel: 'Retratos & Estúdio',
    description:
      'Sessão fotográfica e audiovisual realizada em ambiente exterior com microfone de lapela sem fios.',
    mediaType: 'image',
    src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.07.jpeg',
    aspectRatio: 'landscape',
    year: '2026',
    location: 'Lobito',
    deliverables: 'Fotografia Lifestyle & Gravação Vídeo'
  },
  {
    id: 'retrato-estudio-5',
    title: 'Ensaio Executivo em Estúdio — Variante Editorial',
    client: 'Sessão de Posicionamento Profissional',
    category: 'retratos-estudio',
    categoryLabel: 'Retratos & Estúdio',
    description: 'Retrato de estúdio com luz recortada e acabamento editorial.',
    mediaType: 'image',
    src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.24 (1).jpeg',
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Estúdio Evren, Lobito',
    deliverables: 'Retrato Profissional'
  },
  {
    id: 'retrato-estudio-6',
    title: 'Ensaio Corporativo — Equipa em Formação',
    client: 'Lobito Training Center',
    category: 'retratos-estudio',
    categoryLabel: 'Retratos & Estúdio',
    description: 'Registo espontâneo de colaboração profissional em escritório.',
    mediaType: 'image',
    src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.28 (1).jpeg',
    aspectRatio: 'landscape',
    year: '2026',
    location: 'Lobito',
    deliverables: 'Fotografia Institucional'
  },

  // 6. Official Portfolio Presentation Slides (All 13 slides including PORTFÓLIO EVREN11!)
  {
    id: 'slide-capa',
    title: 'Portfólio Oficial — Capa Institucional (Pág. 01)',
    client: 'Evren Visual Studio',
    category: 'slides-oficiais',
    categoryLabel: 'Apresentação Oficial',
    description: 'Capa oficial do portfólio corporativo da Evren Visual Studio.',
    mediaType: 'image',
    src: '/assets/aistudio/PORTF_LIO_EVREN.jpg_56e905d9.jpeg',
    aspectRatio: 'landscape',
    year: '2026',
    location: 'Lobito, Angola',
    deliverables: 'Apresentação Institucional (Pág. 01)'
  },
  {
    id: 'slide-quem-somos',
    title: 'Portfólio Oficial — Quem Somos? (Pág. 02)',
    client: 'Evren Visual Studio',
    category: 'slides-oficiais',
    categoryLabel: 'Apresentação Oficial',
    description: 'História, visão empreendedora e localização na Zona Comercial 28, Município do Lobito.',
    mediaType: 'image',
    src: '/assets/aistudio/PORTF_LIO_EVREN2.jpg_a81ce197.jpeg',
    aspectRatio: 'landscape',
    year: '2026',
    location: 'Lobito, Angola',
    deliverables: 'Apresentação Institucional (Pág. 02)'
  },
  {
    id: 'slide-servicos',
    title: 'Portfólio Oficial — Nossos 10 Serviços (Pág. 03)',
    client: 'Evren Visual Studio',
    category: 'slides-oficiais',
    categoryLabel: 'Apresentação Oficial',
    description: 'Quadro sinóptico das 10 áreas de actuação em design, vídeo, fotografia e impressão.',
    mediaType: 'image',
    src: '/assets/aistudio/PORTF_LIO_EVREN3.jpg_fbf61186.jpeg',
    aspectRatio: 'landscape',
    year: '2026',
    location: 'Lobito, Angola',
    deliverables: 'Apresentação Institucional (Pág. 03)'
  },
  {
    id: 'slide-design-grafico',
    title: 'Portfólio Oficial — Design Gráfico e Comunicação Visual (Pág. 04)',
    client: 'Evren Visual Studio',
    category: 'slides-oficiais',
    categoryLabel: 'Apresentação Oficial',
    description: 'Detalhamento das ferramentas e entregáveis de Design Gráfico e Comunicação Visual.',
    mediaType: 'image',
    src: '/assets/aistudio/PORTF_LIO_EVREN4.jpg_fcce24ef.jpeg',
    aspectRatio: 'landscape',
    year: '2026',
    location: 'Lobito, Angola',
    deliverables: 'Apresentação Institucional (Pág. 04)'
  },
  {
    id: 'slide-identidade-corporativa',
    title: 'Portfólio Oficial — Criação de Identidade Corporativa (Pág. 06)',
    client: 'Evren Visual Studio',
    category: 'slides-oficiais',
    categoryLabel: 'Apresentação Oficial',
    description: 'Metodologia de criação de logotipos, manuais de marca e estacionário executivo.',
    mediaType: 'image',
    src: '/assets/aistudio/PORTF_LIO_EVREN6.jpg_9d4f0fd1.jpeg',
    aspectRatio: 'landscape',
    year: '2026',
    location: 'Lobito, Angola',
    deliverables: 'Apresentação Institucional (Pág. 06)'
  },
  {
    id: 'slide-producao-video',
    title: 'Portfólio Oficial — Produção e Edição de Vídeos (Pág. 08)',
    client: 'Evren Visual Studio',
    category: 'slides-oficiais',
    categoryLabel: 'Apresentação Oficial',
    description: 'Serviços de vídeos institucionais, publicitários, spots de eventos, entrevistas e videoclipes.',
    mediaType: 'image',
    src: '/assets/aistudio/PORTF_LIO_EVREN8.jpg_ebec7752.jpeg',
    aspectRatio: 'landscape',
    year: '2026',
    location: 'Lobito, Angola',
    deliverables: 'Apresentação Institucional (Pág. 08)'
  },
  {
    id: 'slide-bastidores-video',
    title: 'Portfólio Oficial — Equipamento & Produção Audiovisual (Pág. 09)',
    client: 'Evren Visual Studio',
    category: 'slides-oficiais',
    categoryLabel: 'Apresentação Oficial',
    description: 'Mosaico de produção audiovisual, câmaras Sony/Canon e estabilizadores profissionais.',
    mediaType: 'image',
    src: '/assets/aistudio/PORTF_LIO_EVREN9.jpg_d5776310.jpeg',
    aspectRatio: 'landscape',
    year: '2026',
    location: 'Lobito, Angola',
    deliverables: 'Apresentação Institucional (Pág. 09)'
  },
  {
    id: 'slide-cobertura-fotografica',
    title: 'Portfólio Oficial — Cobertura Fotográfica Profissional (Pág. 10)',
    client: 'Evren Visual Studio',
    category: 'slides-oficiais',
    categoryLabel: 'Apresentação Oficial',
    description: 'Especialidades em eventos corporativos, inaugurações, formaturas, produtos, retratos e eventos sociais.',
    mediaType: 'image',
    src: '/assets/aistudio/PORTF_LIO_EVREN10.jpg_6e30f4e5.jpeg',
    aspectRatio: 'landscape',
    year: '2026',
    location: 'Lobito, Angola',
    deliverables: 'Apresentação Institucional (Pág. 10)'
  },
  {
    id: 'slide-cobertura-fotografica-11',
    title: 'Portfólio Oficial — Mosaico de Fotografia & Canon EOS RP (Pág. 11)',
    client: 'Evren Visual Studio',
    category: 'slides-oficiais',
    categoryLabel: 'Apresentação Oficial',
    description:
      'Mosaico oficial de fotografia: Formaturas, Brindes e Cerimónias, Retratos Executivos, Fotografia de Produto e Eventos Culturais.',
    mediaType: 'image',
    src: '/assets/aistudio/PORTF_LIO_EVREN11.jpg.jpeg',
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Lobito, Angola',
    deliverables: 'Apresentação Institucional (Pág. 11)'
  },
  {
    id: 'slide-contactos',
    title: 'Portfólio Oficial — Contactos & QR Code (Pág. 13)',
    client: 'Evren Visual Studio',
    category: 'slides-oficiais',
    categoryLabel: 'Apresentação Oficial',
    description: 'Página oficial de contactos, redes sociais e código QR de acesso directo.',
    mediaType: 'image',
    src: '/assets/aistudio/PORTF_LIO_EVREN13.jpg_3b4ac114.jpeg',
    aspectRatio: 'landscape',
    year: '2026',
    location: 'Lobito, Angola',
    deliverables: 'Apresentação Institucional (Pág. 13)'
  },

  // 7. Promotional Flyers (5)
  {
    id: 'flyer-casamento-premium',
    title: 'Cartaz Oficial: Pacote Premium Casamento Ilimitado (700 Mil Kz)',
    client: 'Campanha Promocional Evren (30% OFF)',
    category: 'flyers-promocionais',
    categoryLabel: 'Cartazes & Promoções',
    description: 'Cartaz oficial da Grande Promoção de Pacotes Ilimitados de Casamento com 30% de desconto.',
    mediaType: 'image',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_14.35.30_d17ff0d4.jpeg',
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Lobito, Angola',
    deliverables: '1.000.000 Kz por 700.000 Kz · Válido até Dezembro'
  },
  {
    id: 'flyer-casamento-todos',
    title: 'Tabela Oficial: Pacotes de Casamento 1, 2 e 3',
    client: 'Campanha Promocional Evren (30% OFF)',
    category: 'flyers-promocionais',
    categoryLabel: 'Cartazes & Promoções',
    description: 'Cartaz informativo com os pacotes de Casamento a partir de 121.100 Kz.',
    mediaType: 'image',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_14.33.54_cc614ad1.jpeg',
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Lobito, Angola',
    deliverables: 'Pacotes 1, 2 e 3 com 30% de Desconto'
  },
  {
    id: 'flyer-corporativo',
    title: 'Tabela Oficial: Pacotes de Eventos Corporativos',
    client: 'Campanha Promocional Evren (30% OFF)',
    category: 'flyers-promocionais',
    categoryLabel: 'Cartazes & Promoções',
    description: 'Cartaz oficial dos pacotes de cobertura fotográfica e vídeo reportagem para eventos empresariais.',
    mediaType: 'image',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_14.33.56_e8e1f087.jpeg',
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Lobito, Angola',
    deliverables: 'De 32.900 Kz a 119.000 Kz'
  },
  {
    id: 'flyer-cha-panela',
    title: 'Tabela Oficial: Pacotes de Chá de Panela',
    client: 'Campanha Promocional Evren (30% OFF)',
    category: 'flyers-promocionais',
    categoryLabel: 'Cartazes & Promoções',
    description: 'Cartaz oficial com 3 opções de cobertura fotográfica para Chá de Panela.',
    mediaType: 'image',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_14.33.52_490df666.jpeg',
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Lobito, Angola',
    deliverables: '45, 105 ou 155 Fotografias Digitais'
  },
  {
    id: 'flyer-aniversario',
    title: 'Tabela Oficial: Pacotes de Aniversário',
    client: 'Campanha Promocional Evren (30% OFF)',
    category: 'flyers-promocionais',
    categoryLabel: 'Cartazes & Promoções',
    description: 'Cartaz oficial com os pacotes promocionais de fotografia para festas de aniversário.',
    mediaType: 'image',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_14.33.55_4b3197fe.jpeg',
    aspectRatio: 'portrait',
    year: '2026',
    location: 'Lobito, Angola',
    deliverables: 'De 23.100 Kz a 51.100 Kz'
  }
];


export interface ArchivePhotoItem {
  id: string;
  src: string;
  title: string;
  group: 'Casamentos & Noivados' | 'Eventos & Festivais' | 'Estúdio & Corporativo' | 'Identidade Evren';
}

export const COMPLETE_ARCHIVE_PHOTOS: ArchivePhotoItem[] = [
  // Casamentos & Noivados (13)
  { id: 'zip-03-0', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.03.jpeg', title: 'Casamento Evren #01', group: 'Casamentos & Noivados' },
  { id: 'zip-03-1', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.03 (1).jpeg', title: 'Casamento Evren #02', group: 'Casamentos & Noivados' },
  { id: 'zip-03-2', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.03 (2).jpeg', title: 'Casamento Evren #03', group: 'Casamentos & Noivados' },
  { id: 'zip-03-3', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.03 (3).jpeg', title: 'Casamento Evren #04', group: 'Casamentos & Noivados' },
  { id: 'zip-04-0', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.04.jpeg', title: 'Making Of Noiva & Filhas #01', group: 'Casamentos & Noivados' },
  { id: 'zip-04-1', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.04 (1).jpeg', title: 'Making Of Noiva & Filhas #02', group: 'Casamentos & Noivados' },
  { id: 'zip-05-0', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.05.jpeg', title: 'Retrato da Noiva #01', group: 'Casamentos & Noivados' },
  { id: 'zip-05-1', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.05 (1).jpeg', title: 'Retrato da Noiva #02', group: 'Casamentos & Noivados' },
  { id: 'zip-05-2', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.05 (2).jpeg', title: 'Retrato dos Noivos #03', group: 'Casamentos & Noivados' },
  { id: 'zip-05-3', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.05 (3).jpeg', title: 'Retrato dos Noivos #04', group: 'Casamentos & Noivados' },
  { id: 'zip-06-0', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.06.jpeg', title: 'Noivado Tradicional #01', group: 'Casamentos & Noivados' },
  { id: 'zip-06-1', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.06 (1).jpeg', title: 'Noivado Tradicional #02', group: 'Casamentos & Noivados' },
  { id: 'zip-06-2', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.06 (2).jpeg', title: 'Noivado Tradicional #03', group: 'Casamentos & Noivados' },

  // Estúdio & Corporativo (9)
  { id: 'zip-07-0', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.07.jpeg', title: 'Produção Exterior & Entrevista', group: 'Estúdio & Corporativo' },
  { id: 'zip-23-0', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.23.jpeg', title: 'Retrato Executivo Estúdio #01', group: 'Estúdio & Corporativo' },
  { id: 'zip-24-0', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.24.jpeg', title: 'Retrato Executivo Estúdio #02', group: 'Estúdio & Corporativo' },
  { id: 'zip-24-1', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.24 (1).jpeg', title: 'Retrato Executivo Estúdio #03', group: 'Estúdio & Corporativo' },
  { id: 'zip-24-2', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.24 (2).jpeg', title: 'Retrato Executivo Estúdio #04', group: 'Estúdio & Corporativo' },
  { id: 'zip-24-3', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.24 (3).jpeg', title: 'Retrato Executivo Estúdio #05', group: 'Estúdio & Corporativo' },
  { id: 'zip-28-0', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.28.jpeg', title: 'Sessão Corporativa LTC #01', group: 'Estúdio & Corporativo' },
  { id: 'zip-28-1', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.28 (1).jpeg', title: 'Sessão Corporativa LTC #02', group: 'Estúdio & Corporativo' },
  { id: 'zip-28-2', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.28 (2).jpeg', title: 'Sessão Corporativa LTC #03', group: 'Estúdio & Corporativo' },

  // Eventos & Festivais (20)
  { id: 'zip-50-0', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.50.jpeg', title: 'Equipa Evren em Evento #01', group: 'Eventos & Festivais' },
  { id: 'zip-50-1', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.50 (1).jpeg', title: 'Equipa Evren em Evento #02', group: 'Eventos & Festivais' },
  { id: 'zip-50-2', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.50 (2).jpeg', title: 'Cobertura de Evento #03', group: 'Eventos & Festivais' },
  { id: 'zip-51-0', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.51.jpeg', title: 'Concerto Ao Vivo 3 Finer #01', group: 'Eventos & Festivais' },
  { id: 'zip-51-1', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.51 (1).jpeg', title: 'Concerto Ao Vivo #02', group: 'Eventos & Festivais' },
  { id: 'zip-51-2', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.51 (2).jpeg', title: 'Concerto Ao Vivo #03', group: 'Eventos & Festivais' },
  { id: 'zip-52-0', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.52.jpeg', title: 'Red Carpet & Artistas #01', group: 'Eventos & Festivais' },
  { id: 'zip-52-1', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.52 (1).jpeg', title: 'Red Carpet & Convidados #02', group: 'Eventos & Festivais' },
  { id: 'zip-53-0', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.53.jpeg', title: 'Performance em Palco #01', group: 'Eventos & Festivais' },
  { id: 'zip-53-1', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.53 (1).jpeg', title: 'Cobertura VIP #02', group: 'Eventos & Festivais' },
  { id: 'zip-53-2', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.53 (2).jpeg', title: 'Cobertura VIP #03', group: 'Eventos & Festivais' },
  { id: 'zip-54-0', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.54.jpeg', title: 'Editorial Red Carpet #01', group: 'Eventos & Festivais' },
  { id: 'zip-54-1', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.54 (1).jpeg', title: 'Editorial Red Carpet #02', group: 'Eventos & Festivais' },
  { id: 'zip-54-2', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.54 (2).jpeg', title: 'Editorial Red Carpet #03', group: 'Eventos & Festivais' },
  { id: 'zip-55-0', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.55.jpeg', title: 'Convidados VIP #01', group: 'Eventos & Festivais' },
  { id: 'zip-55-1', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.55 (1).jpeg', title: 'Convidados VIP #02', group: 'Eventos & Festivais' },
  { id: 'zip-56-0', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.56.jpeg', title: 'Entrevista & Imprensa #01', group: 'Eventos & Festivais' },
  { id: 'zip-56-1', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.56 (1).jpeg', title: 'Entrevista & Imprensa #02', group: 'Eventos & Festivais' },
  { id: 'zip-56-2', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.56 (2).jpeg', title: 'Bastidores do Evento #03', group: 'Eventos & Festivais' },
  { id: 'zip-56-3', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.56 (3).jpeg', title: 'Bastidores do Evento #04', group: 'Eventos & Festivais' },

  // Identidade Oficial Evren (7)
  { id: 'zip-57-0', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.57.jpeg', title: 'Logotipo Oficial Evren (Bicolor)', group: 'Identidade Evren' },
  { id: 'zip-57-1', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.57 (1).jpeg', title: 'Wordmark Evren Vermelho', group: 'Identidade Evren' },
  { id: 'zip-57-2', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.57 (2).jpeg', title: 'Logotipo Evren Azul-Marinho', group: 'Identidade Evren' },
  { id: 'zip-58-0', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.58.jpeg', title: 'Logotipo Evren Vermelho Integral', group: 'Identidade Evren' },
  { id: 'zip-58-1', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.58 (1).jpeg', title: 'Logotipo Evren Oficial Principal', group: 'Identidade Evren' },
  { id: 'zip-59-0', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.59.jpeg', title: 'Símbolo Monograma "e" Evren', group: 'Identidade Evren' },
  { id: 'zip-59-1', src: '/assets/aistudio/galeria/WhatsApp Image 2026-10-24 at 15.48.59 (1).jpeg', title: 'Logotipo Evren Vermelho Compacto', group: 'Identidade Evren' }
];
