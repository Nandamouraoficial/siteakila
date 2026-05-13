// Akila Consultoria — Configurações do site
// Substitua os placeholders [GOOGLE_FORM_URL_*] pelos URLs reais quando disponíveis.

export const CALENDLY_URL = "https://calendly.com/fernandamoura/30min";

export const FORM_URLS = {
  geral: "[GOOGLE_FORM_URL_GERAL]",
  imersao: "https://oppjunho.lovable.app",
  imersaoListaEspera: "[GOOGLE_FORM_URL_IMERSAO_LISTA_ESPERA]",
  diagnostico: "[GOOGLE_FORM_URL_DIAGNOSTICO]",
  comunicador: "[GOOGLE_FORM_URL_COMUNICADOR]",
  palestrante: "[GOOGLE_FORM_URL_PALESTRANTE]",
  reposicionamento: "[GOOGLE_FORM_URL_REPOSICIONAMENTO]",
  mentoriaExecutiva: "[GOOGLE_FORM_URL_MENTORIA_EXECUTIVA]",
  mentoriaNegocios: "[GOOGLE_FORM_URL_MENTORIA_NEGOCIOS]",
} as const;

export const SOCIAL = {
  linkedin: "https://linkedin.com/in/mourafernanda",
  instagram: "https://instagram.com/nandamouraoficial",
  email: "femoura007@gmail.com",
};

export type ProductLink = {
  number: string;
  name: string;
  short: string;
  description: string;
  to:
    | "/imersao"
    | "/diagnostico"
    | "/comunicador"
    | "/palestrante"
    | "/reposicionamento"
    | "/mentoria-executiva"
    | "/mentoria-negocios";
};

export const PRODUCTS: ProductLink[] = [
  {
    number: "01",
    name: "Imersão O Próximo Passo",
    short: "Imersão",
    description:
      "Um dia para clareza. O que vem depois de tudo que você já construiu.",
    to: "/imersao",
  },
  {
    number: "02",
    name: "Diagnóstico de Presença Executiva",
    short: "Diagnóstico",
    description:
      "Uma hora de análise honesta do que seu LinkedIn está comunicando.",
    to: "/diagnostico",
  },
  {
    number: "03",
    name: "Comunicador Magnético",
    short: "Comunicador",
    description:
      "Desbloqueie sua comunicação. Câmera, redes, reuniões que importam.",
    to: "/comunicador",
  },
  {
    number: "04",
    name: "Palestrante Magnético",
    short: "Palestrante",
    description:
      "Desenvolva presença de palco real — não técnica de slides.",
    to: "/palestrante",
  },
  {
    number: "05",
    name: "Reposicionamento LinkedIn",
    short: "Reposicionamento",
    description:
      "Transforme seu perfil em um ativo de posicionamento executivo.",
    to: "/reposicionamento",
  },
  {
    number: "06",
    name: "Mentoria Executiva",
    short: "Mentoria Executiva",
    description:
      "90 dias. Estratégia real. O movimento que você precisa fazer.",
    to: "/mentoria-executiva",
  },
];
