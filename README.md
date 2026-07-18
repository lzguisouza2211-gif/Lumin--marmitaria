# Luminá

Site institucional + painel admin para marmitaria fitness — protocolos por objetivo, sabores da semana e kits por quantidade, com pedido via WhatsApp.

Projeto desenvolvido pela NorthCode. Contexto completo do projeto (escopo, decisões, proposta) em `Ecossistema/NorthCode/Luminá/`.

## Funcionalidades

- **Site público**: Home, Cardápio (Protocolos, Sabores da Semana, Lanches/Sobremesas) e Kits, com botão "Pedir via WhatsApp" em cada item
- **Painel admin** (`/admin`): protegido por login, para o cliente gerenciar cardápio, kits e pedidos sem depender de programador
- Sem carrinho, sem conta de cliente e sem pagamento online — pedido e pagamento acontecem via WhatsApp/Pix, fora do site
- Design responsivo (mobile-first, já que é o uso predominante do público)

## Stack

Next.js 14 (App Router) + TypeScript + Tailwind CSS + shadcn/ui + Supabase (Postgres + Auth + Storage) + Drizzle ORM. Sem backend separado — Server Actions/Route Handlers do próprio Next.js.

## Setup

1. Criar um projeto em [supabase.com](https://supabase.com).
2. Copiar `.env.example` para `.env` e preencher:
   - `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY` (Settings > API)
   - `DATABASE_URL` (Settings > Database > Connection string > URI)
3. Instalar dependências e subir o schema:

```bash
pnpm install
pnpm exec drizzle-kit push
```

4. Criar o usuário admin (único usuário do sistema) direto no painel do Supabase (Authentication > Users > Add user).
5. Rodar o projeto:

```bash
pnpm dev
```

Site público em `/`, painel admin em `/admin` (protegido por login Supabase).

## Estrutura

- `src/app/(site)` — páginas públicas (Home, Cardápio, Kits) com Header/Footer compartilhados
- `src/app/admin` — painel administrativo (login + dashboard)
- `src/lib/menu-data.ts` — dados reais do cardápio (protocolos, sabores da semana, lanches, kits)
- `src/lib/db/schema.ts` — schema Drizzle (`protocolos`, `sabores_semana`, `lanches_sobremesas`, `kits`, `pedidos`)
- `src/lib/supabase` — clientes Supabase (browser/server)
- `src/lib/site-config.ts` — dados de contato do cliente (placeholders até serem fornecidos)
- `middleware.ts` — protege as rotas `/admin/*`, redireciona para `/admin/login` sem sessão

## Status

Em desenvolvimento. Páginas públicas com dados reais do cardápio prontas; falta conectar ao Supabase (schema ainda não aplicado em nenhum banco) e construir os CRUDs do painel admin.
