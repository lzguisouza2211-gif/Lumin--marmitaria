export interface Protocolo {
  slug: string;
  nome: string;
  gramagem: string;
  carboG: number | null;
  proteinaG: number | null;
  legumesG: number | null;
  preco: number;
}

export const proteinasDisponiveis = [
  "Alcatra em cubos",
  "Patinho moído",
  "Hambúrguer de patinho",
  "Frango em cubos",
  "Músculo desfiado",
  "Cogumelos",
  "Hambúrguer de grão de bico",
];

export const carboidratosDisponiveis = [
  "Batata assada",
  "Purê de batata e misto",
  "Arroz e feijão",
];

export const legumesObservacao = "Sazonal";

export const protocolos: Protocolo[] = [
  {
    slug: "conforme-plano-alimentar",
    nome: "Conforme o Plano Alimentar",
    gramagem: "sob medida",
    carboG: null,
    proteinaG: null,
    legumesG: null,
    preco: 24.9,
  },
  {
    slug: "hipertrofia",
    nome: "Hipertrofia",
    gramagem: "350g",
    carboG: 120,
    proteinaG: 150,
    legumesG: 80,
    preco: 26.9,
  },
  {
    slug: "emagrecimento",
    nome: "Emagrecimento",
    gramagem: "250g",
    carboG: 80,
    proteinaG: 100,
    legumesG: 70,
    preco: 25.9,
  },
  {
    slug: "monjauro",
    nome: "Monjauro",
    gramagem: "250g",
    carboG: 70,
    proteinaG: 120,
    legumesG: 60,
    preco: 25.9,
  },
];

export const saboresSemana = [
  {
    nome: "Panqueca com creme de ricota e legumes",
    descricao: "Cogumelos ou frango",
  },
  {
    nome: "Salmão com purê de mandioquinha e brócolis",
    descricao: null,
  },
  {
    nome: "Filé mignon, purê de banana da terra, queijo coalho e brócolis",
    descricao: null,
  },
  {
    nome: "Sobrecoxa assada com molho de laranja e purê de batata",
    descricao: null,
  },
];

export const lanches = [
  { nome: "Atum", descricao: null },
  { nome: "Frango", descricao: null },
  { nome: "Bolinho de leite em pó", descricao: null },
];

// Sobremesa ainda indefinida pelo cliente — ver Pendências em Projeto Luminá.md
export const sobremesaDefinida = false;

export interface Kit {
  quantidade: number;
  preco: number;
  brindes: number;
  sobremesas: number;
}

export const kits: Kit[] = [
  { quantidade: 10, preco: 229.0, brindes: 0, sobremesas: 0 },
  { quantidade: 15, preco: 330.0, brindes: 0, sobremesas: 0 },
  { quantidade: 20, preco: 430.0, brindes: 1, sobremesas: 0 },
  { quantidade: 30, preco: 640.0, brindes: 2, sobremesas: 0 },
  { quantidade: 40, preco: 830.0, brindes: 2, sobremesas: 1 },
  { quantidade: 50, preco: 990.0, brindes: 2, sobremesas: 2 },
  { quantidade: 60, preco: 1080.0, brindes: 3, sobremesas: 3 },
];
