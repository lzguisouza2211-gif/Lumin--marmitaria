# Luminá

Site institucional + painel admin para marmitaria fitness (protocolos, sabores da semana, kits por quantidade). Contexto completo em `Ecossistema/NorthCode/Projeto Luminá.md`.

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

- `src/app/(site)` — páginas públicas (a organizar)
- `src/app/admin` — painel administrativo
- `src/lib/db/schema.ts` — schema Drizzle (`protocolos`, `sabores_semana`, `lanches_sobremesas`, `kits`, `pedidos`)
- `src/lib/supabase` — clientes Supabase (browser/server)
- `middleware.ts` — protege as rotas `/admin/*`, redireciona para `/admin/login` sem sessão
