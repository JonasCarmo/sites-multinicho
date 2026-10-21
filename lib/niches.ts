export type NicheId = "farmacia" | "padaria" | "acougue" | "contabilidade";

export type NicheService = {
  title: string;
  description: string;
  icon: "pill" | "delivery" | "clock" | "shield" | "bread" | "cake" | "coffee" | "wheat" | "meat" | "cut" | "cold" | "grill" | "tax" | "chart" | "doc" | "people";
};

export type NicheConfig = {
  id: NicheId;
  label: string;
  brandName: string;
  colors: {
    brand: string;
    brandDark: string;
    brandSoft: string;
    accent: string;
  };
  whatsapp: {
    phone: string;
    message: string;
  };
  hero: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
  };
  servicesTitle: string;
  servicesSubtitle: string;
  services: NicheService[];
  about: {
    title: string;
    body: string;
    stats: { value: string; label: string }[];
  };
  testimonialsTitle: string;
  testimonials: { name: string; role: string; quote: string }[];
  hours: { days: string; time: string }[];
  location: {
    address: string;
    city: string;
    mapsUrl: string;
  };
  footerBlurb: string;
};

export const NICHES: Record<NicheId, NicheConfig> = {
  farmacia: {
    id: "farmacia",
    label: "Farmácia",
    brandName: "VitaFarma",
    colors: {
      brand: "#0f766e",
      brandDark: "#134e4a",
      brandSoft: "#ccfbf1",
      accent: "#14b8a6",
    },
    whatsapp: {
      phone: "5511999990001",
      message: "Olá! Gostaria de falar com a VitaFarma.",
    },
    hero: {
      badge: "Cuidado de verdade, perto de você",
      title: "Sua saúde em boas mãos,",
      highlight: "todos os dias",
      subtitle:
        "Medicamentos, genéricos e orientação farmacêutica com atendimento humano. Entrega rápida no bairro e plantão nos finais de semana.",
      cta: "Falar no WhatsApp",
      secondaryCta: "Ver serviços",
    },
    servicesTitle: "Serviços e produtos",
    servicesSubtitle: "Tudo o que você precisa para cuidar da família, com segurança e agilidade.",
    services: [
      {
        title: "Medicamentos e genéricos",
        description: "Linha completa de referência e genéricos, com conferência de receita e orientação de uso.",
        icon: "pill",
      },
      {
        title: "Entrega no mesmo dia",
        description: "Pedidos pelo WhatsApp com entrega rápida na região. Frete especial para clientes frequentes.",
        icon: "delivery",
      },
      {
        title: "Plantão e horários estendidos",
        description: "Atendimento noturno e aos domingos para emergências e medicação contínua.",
        icon: "clock",
      },
      {
        title: "Aferição e vacinas",
        description: "Pressão, glicemia e calendário vacinal com profissionais habilitados.",
        icon: "shield",
      },
    ],
    about: {
      title: "Mais de 18 anos cuidando da comunidade",
      body: "A VitaFarma nasceu como farmácia de bairro e cresceu sem perder o atendimento de balcão. Aqui o farmacêutico conhece o cliente pelo nome e explica cada tratamento com clareza.",
      stats: [
        { value: "18+", label: "anos no bairro" },
        { value: "12 mil", label: "clientes atendidos/ano" },
        { value: "30 min", label: "entrega média" },
      ],
    },
    testimonialsTitle: "O que dizem nossos clientes",
    testimonials: [
      {
        name: "Helena Martins",
        role: "Cliente há 9 anos",
        quote:
          "Sempre encontro o que preciso e a orientação é clara. A entrega salvou o tratamento do meu pai várias vezes.",
      },
      {
        name: "Carlos Nogueira",
        role: "Convênio local",
        quote:
          "Equipe atenciosa, preços justos nos genéricos e plantão que realmente funciona no domingo.",
      },
      {
        name: "Ana Beatriz",
        role: "Mãe de dois",
        quote:
          "Levo as crianças para vacina e saio com tudo resolvido. Confiança que a gente não troca.",
      },
    ],
    hours: [
      { days: "Segunda a sexta", time: "07h00 – 22h00" },
      { days: "Sábado", time: "08h00 – 20h00" },
      { days: "Domingo e feriados", time: "08h00 – 14h00" },
    ],
    location: {
      address: "Av. das Palmeiras, 420",
      city: "Centro — São Paulo/SP",
      mapsUrl: "https://maps.google.com/?q=Av.+das+Palmeiras+420+Sao+Paulo",
    },
    footerBlurb: "Farmácia de confiança, com atendimento humano e entrega rápida.",
  },
  padaria: {
    id: "padaria",
    label: "Padaria",
    brandName: "Pão & Tempo",
    colors: {
      brand: "#b45309",
      brandDark: "#78350f",
      brandSoft: "#ffedd5",
      accent: "#f59e0b",
    },
    whatsapp: {
      phone: "5511999990002",
      message: "Olá! Quero fazer um pedido na Pão & Tempo.",
    },
    hero: {
      badge: "Forno aceso desde as 5h",
      title: "Pão quentinho,",
      highlight: "feito na hora",
      subtitle:
        "Padaria artesanal com fermentação natural, café da manhã completo e encomendas para festa. O aroma que marca o começo do dia no bairro.",
      cta: "Pedir no WhatsApp",
      secondaryCta: "Ver cardápio",
    },
    servicesTitle: "Do forno para a mesa",
    servicesSubtitle: "Receitas de família, ingredientes selecionados e produção diária.",
    services: [
      {
        title: "Pães artesanais",
        description: "Francês, italiano, ciabatta e fermentação natural. Saem do forno de hora em hora.",
        icon: "bread",
      },
      {
        title: "Doces e bolos",
        description: "Confeitaria clássica, bolos de aniversário e sobremesas para encomenda com 48h.",
        icon: "cake",
      },
      {
        title: "Café da manhã",
        description: "Salão aconchegante com pão na chapa, sucos naturais e café especial.",
        icon: "coffee",
      },
      {
        title: "Encomendas corporativas",
        description: "Cestas, coffee break e kits para escritório com entrega programada.",
        icon: "wheat",
      },
    ],
    about: {
      title: "Tradição que começa de madrugada",
      body: "A Pão & Tempo é uma padaria de família. O mesmo mestre padeiro que abre o forno às 4h30 ainda testa cada fornada. Qualidade que se sente no crocante da casca.",
      stats: [
        { value: "5h", label: "primeira fornada" },
        { value: "40+", label: "itens no balcão" },
        { value: "12", label: "anos de forno" },
      ],
    },
    testimonialsTitle: "Quem passa aqui, volta",
    testimonials: [
      {
        name: "Mariana Lopes",
        role: "Vizinha da esquina",
        quote: "O pão de fermentação natural é o melhor da região. E o atendimento é sempre com sorriso.",
      },
      {
        name: "Roberto Dias",
        role: "Cliente do café",
        quote: "Café da manhã perfeito antes do expediente. Bolo de fubá parece o da minha avó.",
      },
      {
        name: "Juliana Freitas",
        role: "Encomenda de festa",
        quote: "Encomendei o bolo da formatura e todo mundo perguntou de onde era. Pontual e lindo.",
      },
    ],
    hours: [
      { days: "Segunda a sábado", time: "05h00 – 20h00" },
      { days: "Domingo", time: "06h00 – 13h00" },
      { days: "Feriados", time: "06h00 – 12h00" },
    ],
    location: {
      address: "Rua do Forno, 88",
      city: "Vila Harmonia — São Paulo/SP",
      mapsUrl: "https://maps.google.com/?q=Rua+do+Forno+88+Sao+Paulo",
    },
    footerBlurb: "Padaria artesanal com pão quente, café especial e encomendas.",
  },
  acougue: {
    id: "acougue",
    label: "Açougue",
    brandName: "Corte Nobre",
    colors: {
      brand: "#9f1239",
      brandDark: "#4c0519",
      brandSoft: "#ffe4e6",
      accent: "#e11d48",
    },
    whatsapp: {
      phone: "5511999990003",
      message: "Olá! Quero um corte no Açougue Corte Nobre.",
    },
    hero: {
      badge: "Carne selecionada, corte na hora",
      title: "Qualidade que se vê",
      highlight: "no corte",
      subtitle:
        "Açougue boutique com origem rastreada, cortes especiais e preparo para churrasco. Peça pelo WhatsApp e retire ou receba em casa.",
      cta: "Encomendar no WhatsApp",
      secondaryCta: "Ver cortes",
    },
    servicesTitle: "Cortes e serviços",
    servicesSubtitle: "Do dia a dia ao churrasco de domingo, com o ponto e a espessura que você pede.",
    services: [
      {
        title: "Cortes nobres",
        description: "Picanha, ancho, maminha e wagyu com maturação controlada e origem identificada.",
        icon: "meat",
      },
      {
        title: "Corte personalizado",
        description: "Espessura, limpeza e porcionamento sob medida. Diga o prato que a gente prepara.",
        icon: "cut",
      },
      {
        title: "Câmara fria",
        description: "Conservação rigorosa e giro rápido do estoque para carne sempre fresca.",
        icon: "cold",
      },
      {
        title: "Kit churrasco",
        description: "Combos prontos com linguiça artesanal, carvão e temperos da casa.",
        icon: "grill",
      },
    ],
    about: {
      title: "Açougue de ofício, não de gôndola",
      body: "No Corte Nobre o açougueiro ainda é o protagonista. Cada peça é avaliada, cada pedido é montado na sua frente — ou descrito com precisão pelo WhatsApp.",
      stats: [
        { value: "100%", label: "origem rastreada" },
        { value: "25", label: "cortes no balcão" },
        { value: "8", label: "anos de casa" },
      ],
    },
    testimonialsTitle: "Quem entende de carne, recomenda",
    testimonials: [
      {
        name: "Paulo Henrique",
        role: "Churrasqueiro de fim de semana",
        quote: "Picanha no ponto certo, sem surpresa. O kit churrasco virou ritual aqui em casa.",
      },
      {
        name: "Fernanda Alves",
        role: "Cliente semanal",
        quote: "Peço pelo WhatsApp, escolho a espessura e chega no horário. Carne de verdade.",
      },
      {
        name: "Diego Ramos",
        role: "Restaurante parceiro",
        quote: "Fornecimento estável e cortes padronizados. Parceria que segura o cardápio.",
      },
    ],
    hours: [
      { days: "Terça a sexta", time: "08h00 – 19h00" },
      { days: "Sábado", time: "07h00 – 18h00" },
      { days: "Domingo", time: "07h00 – 12h00" },
    ],
    location: {
      address: "Rua das Churrasqueiras, 210",
      city: "Jardim Grill — São Paulo/SP",
      mapsUrl: "https://maps.google.com/?q=Rua+das+Churrasqueiras+210+Sao+Paulo",
    },
    footerBlurb: "Açougue boutique com cortes nobres, personalizados e kit churrasco.",
  },
  contabilidade: {
    id: "contabilidade",
    label: "Contabilidade",
    brandName: "Nexo Contábil",
    colors: {
      brand: "#1e3a8a",
      brandDark: "#172554",
      brandSoft: "#dbeafe",
      accent: "#2563eb",
    },
    whatsapp: {
      phone: "5511999990004",
      message: "Olá! Quero uma conversa com a Nexo Contábil.",
    },
    hero: {
      badge: "Contabilidade para quem cresce",
      title: "Números claros,",
      highlight: "decisões melhores",
      subtitle:
        "Escritório digital-first para MEI, ME e empresas em expansão. Fiscal, folha e consultoria com linguagem simples e prazos sob controle.",
      cta: "Agendar pelo WhatsApp",
      secondaryCta: "Conhecer serviços",
    },
    servicesTitle: "Como podemos ajudar",
    servicesSubtitle: "Do primeiro CNPJ ao planejamento tributário, com acompanhamento próximo.",
    services: [
      {
        title: "Abertura e regularização",
        description: "Abertura de empresa, alteração contratual e enquadramento no regime mais vantajoso.",
        icon: "doc",
      },
      {
        title: "Fiscal e contábil",
        description: "Obrigações acessórias, DAS, DCTF e balancetes mensais com painel simples.",
        icon: "tax",
      },
      {
        title: "Folha e departamentos",
        description: "Admissão, férias, 13º e eSocial sem dor de cabeça para o gestor.",
        icon: "people",
      },
      {
        title: "Consultoria gerencial",
        description: "Indicadores, fluxo de caixa e reuniões trimestrais para crescer com previsibilidade.",
        icon: "chart",
      },
    ],
    about: {
      title: "Parceiros do seu negócio, não só do seu imposto",
      body: "A Nexo nasceu para traduzir contabilidade em decisão. Atendemos empreendedores que querem clareza fiscal sem abrir mão de estratégia.",
      stats: [
        { value: "320+", label: "empresas ativas" },
        { value: "98%", label: "entregas no prazo" },
        { value: "15", label: "anos de mercado" },
      ],
    },
    testimonialsTitle: "Empresários que confiam na Nexo",
    testimonials: [
      {
        name: "Camila Souza",
        role: "CEO de e-commerce",
        quote: "Pela primeira vez entendi meu regime tributário. As reuniões trimestrais mudaram o caixa.",
      },
      {
        name: "Eduardo Pires",
        role: "MEI em crescimento",
        quote: "Abriram minha ME em poucos dias e cuidam de tudo no WhatsApp. Comunicação excelente.",
      },
      {
        name: "Patrícia Gomes",
        role: "Clínica odontológica",
        quote: "Folha e pró-labore organizados. Consigo focar nos pacientes sem medo de obrigação atrasada.",
      },
    ],
    hours: [
      { days: "Segunda a sexta", time: "09h00 – 18h00" },
      { days: "Sábado", time: "Sob agendamento" },
      { days: "Domingo", time: "Fechado" },
    ],
    location: {
      address: "Av. Paulista, 1578 — Cj. 1204",
      city: "Bela Vista — São Paulo/SP",
      mapsUrl: "https://maps.google.com/?q=Av.+Paulista+1578+Sao+Paulo",
    },
    footerBlurb: "Contabilidade consultiva para MEI, ME e empresas em crescimento.",
  },
};

export const NICHE_LIST = Object.values(NICHES);

export function whatsappUrl(niche: NicheConfig) {
  const text = encodeURIComponent(niche.whatsapp.message);
  return `https://wa.me/${niche.whatsapp.phone}?text=${text}`;
}
