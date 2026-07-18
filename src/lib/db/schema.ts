import { pgTable, uuid, text, integer, numeric, boolean, timestamp, pgEnum } from "drizzle-orm/pg-core";

export const tipoItemEnum = pgEnum("tipo_item", ["protocolo", "kit", "sabor_semana", "lanche_sobremesa"]);
export const statusPedidoEnum = pgEnum("status_pedido", ["novo", "confirmado", "entregue", "cancelado"]);
export const tipoLancheSobremesaEnum = pgEnum("tipo_lanche_sobremesa", ["lanche", "sobremesa"]);

export const protocolos = pgTable("protocolos", {
  id: uuid("id").defaultRandom().primaryKey(),
  nome: text("nome").notNull(),
  gramagem: text("gramagem").notNull(),
  carboidratoG: numeric("carboidrato_g"),
  proteinaG: numeric("proteina_g"),
  legumesG: numeric("legumes_g"),
  preco: numeric("preco").notNull(),
  proteinasDisponiveis: text("proteinas_disponiveis").array().notNull().default([]),
  carboidratosDisponiveis: text("carboidratos_disponiveis").array().notNull().default([]),
  observacaoLegumes: text("observacao_legumes").default("Sazonal"),
  ativo: boolean("ativo").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const saboresSemana = pgTable("sabores_semana", {
  id: uuid("id").defaultRandom().primaryKey(),
  nome: text("nome").notNull(),
  descricao: text("descricao"),
  gramagem: text("gramagem"),
  ativo: boolean("ativo").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const lanchesSobremesas = pgTable("lanches_sobremesas", {
  id: uuid("id").defaultRandom().primaryKey(),
  tipo: tipoLancheSobremesaEnum("tipo").notNull(),
  nome: text("nome").notNull(),
  descricao: text("descricao"),
  preco: numeric("preco"),
  ativo: boolean("ativo").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const kits = pgTable("kits", {
  id: uuid("id").defaultRandom().primaryKey(),
  quantidadeMarmitas: integer("quantidade_marmitas").notNull(),
  preco: numeric("preco").notNull(),
  brindes: text("brindes"),
  sobremesasInclusas: integer("sobremesas_inclusas").notNull().default(0),
  ativo: boolean("ativo").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const pedidos = pgTable("pedidos", {
  id: uuid("id").defaultRandom().primaryKey(),
  nomeCliente: text("nome_cliente").notNull(),
  contato: text("contato").notNull(),
  tipoItem: tipoItemEnum("tipo_item").notNull(),
  itemId: uuid("item_id"),
  observacoes: text("observacoes"),
  status: statusPedidoEnum("status").notNull().default("novo"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
