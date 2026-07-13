# Site do LABED

Site institucional do **LABED — Laboratório de Eletrônica e Desenvolvimento** da Universidade Franciscana (UFN).

Construído com [Nuxt 4](https://nuxt.com) (geração estática) e [Tailwind CSS v4](https://tailwindcss.com).

## Requisitos

- Node.js 20 ou superior
- npm (o projeto usa `package-lock.json` — não use yarn/pnpm)

## Como rodar

```bash
npm install       # instala as dependências
npm run dev       # servidor de desenvolvimento em http://localhost:3000
```

## Build e deploy

```bash
npm run generate  # gera o site estático em .output/public
npm run preview   # pré-visualiza o build localmente
```

O deploy é feito na **Vercel**, que detecta o Nuxt automaticamente. Todas as rotas são
pré-renderizadas (SSG). Se o domínio de produção mudar, defina a variável de ambiente
`NUXT_PUBLIC_SITE_URL` no painel da Vercel (usada para sitemap e meta tags de compartilhamento).

## Como atualizar o conteúdo

O conteúdo editável fica em `app/data/`:

- **Membros** — [app/data/membros.ts](app/data/membros.ts). Cada membro tem nome, curso,
  e-mail e, opcionalmente, foto, Instagram, GitHub e Lattes. A foto deve ser colocada em
  `public/img/membros/` (arquivo local, nunca link externo) e referenciada como
  `/img/membros/nome-sobrenome.jpg`. A lista é ordenada alfabeticamente de forma automática.
- **Projetos** — [app/data/projetos.ts](app/data/projetos.ts). Cada projeto tem `slug`
  (vira a URL `/projetos/<slug>`), `tag` (área exibida no card), título, descrição curta
  (card e SEO), parágrafos de conteúdo e imagens em `public/img/projetos/`. Cada projeto
  ganha uma página própria, pré-renderizada e compartilhável. A home exibe os 3 primeiros
  como destaques; havendo mais que 3, aparece o botão "Ver todos" levando à página
  `/projetos` com a lista completa.
- **Apoiadores** — logos em `public/img/apoiadores/` e lista em
  [app/components/ApoiadoresSection.vue](app/components/ApoiadoresSection.vue).

Após editar, basta commitar — o deploy da Vercel publica automaticamente.

## Estrutura

```
app/
├── assets/css/main.css   # tokens de design (cores, fontes) e utilitários Tailwind
├── components/           # seções e componentes da interface
├── data/                 # conteúdo editável (membros, projetos)
├── pages/                # rotas (/, /projetos/[slug])
├── plugins/reveal.ts     # diretiva v-reveal (animações de entrada acessíveis)
├── app.vue               # layout raiz (navbar + página + footer)
└── error.vue             # página de erro (404 etc.)
public/img/               # imagens estáticas
```

## Qualidade

- `npm run lint` — ESLint (roda também no CI a cada push/PR)
- CI no GitHub Actions: lint + build estático (`.github/workflows/ci.yml`)
