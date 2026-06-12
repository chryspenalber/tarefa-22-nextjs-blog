[Versão em Português](#portugues) | [English Version](#english)

---
<a id="portugues"></a>
## Versão em Português

# Blog de Viagens — Next.js + TypeScript
**Projeto desenvolvido por Chrys Penalber**

Aplicação de blog/portal de viagens desenvolvida com **Next.js (App Router)** e **TypeScript**. O projeto apresenta uma página inicial, listagem de artigos (`/artigos`) e páginas individuais geradas a partir de dados locais.

---

## Objetivos

- Criar experiência de navegação entre a página inicial, listagem de artigos e páginas de detalhe.
- Demonstrar rotas dinâmicas no Next.js com `/artigos/[slug]` usando a pasta `src/app`.
- Organizar a interface em componentes reutilizáveis (`Layout`, `ArtigoCard`) e centralizar dados em `src/data/artigos.json` e `lib/artigos.ts`.

---

## Links

- **Live Site**: https://tarefa-22-nextjs-blog.vercel.app/
- **Repositório no GitHub**: https://github.com/chryspenalber/tarefa-22-nextjs-blog

---

## Principais Funcionalidades

- Página inicial (`/`) com chamada para a listagem de artigos.
- Página de artigos (`/artigos`) com cards renderizados a partir do array local `artigos`.
- Páginas dinâmicas de detalhe (`/artigos/[slug]`) para cada artigo cadastrado.
- Geração estática/SSG conforme configuração do projeto (App Router) com fetch dos dados locais.
- Navegação entre páginas com `next/link`.
- Imagens otimizadas com `next/image` se houver assets em `public`.

---

## Estrutura do Projeto

```text
next-env.d.ts
next.config.js
package.json
tsconfig.json
public/
src/
  app/
    layout.tsx
    page.tsx
    not-found.tsx
    artigos/
      page.tsx
      [slug]/
        page.tsx
  components/
    ArtigoCard/
      index.tsx
  data/
    artigos.json
  lib/
    artigos.ts
  types/
    Artigo.ts
```

---

## Estilos

- Estilos globais em `src/styles/globals.css` (se presente).
- As páginas e componentes podem usar CSS Modules ou estilos em arquivo próprio.

---

## Tecnologias

- Next.js — Framework React com App Router e suporte a geração estática
- React — Biblioteca de UI
- TypeScript — Tipagem da aplicação
- CSS Modules / CSS — Estilos por componente e globais

---

## Como executar

1. Instale dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra `http://localhost:3000` no navegador.

---

## Contato

- GitHub — [@chryspenalber](https://github.com/chryspenalber)
- LinkedIn — [Chrystiana Penalber](https://www.linkedin.com/in/chrystiana-penalber/)

---

<a id="english"></a>
## English Version

# Travel Blog — Next.js + TypeScript
**Project developed by Chrys Penalber**

Travel blog/portal built with **Next.js (App Router)** and **TypeScript**. The project includes a home page, an articles listing and individual article pages generated from local data.

---

## Goals

- Create a navigation flow between the home page, articles listing and individual detail pages.
- Demonstrate dynamic routes in Next.js with `/artigos/[slug]` using the `src/app` router.
- Organize the UI into reusable components (`Layout`, `ArtigoCard`) and centralize article data in `src/data/artigos.json` and `lib/artigos.ts`.

---

## Links

- **Live Site**: https://tarefa-22-nextjs-blog.vercel.app/
- **GitHub Repository**: https://github.com/chryspenalber/tarefa-22-nextjs-blog

---

## Key Features

- Home page (`/`) with a call-to-action to the articles listing.
- Articles page (`/artigos`) with cards rendered from the local `artigos` array.
- Dynamic detail pages (`/artigos/[slug]`) for each article.
- Static generation/fetching according to the App Router setup.
- Page navigation with `next/link`.
- Optimized images with `next/image` if assets are available in `public`.

---

## Project Structure

```text
next-env.d.ts
next.config.js
package.json
tsconfig.json
public/
src/
  app/
    layout.tsx
    page.tsx
    not-found.tsx
    artigos/
      page.tsx
      [slug]/
        page.tsx
  components/
    ArtigoCard/
      index.tsx
  data/
    artigos.json
  lib/
    artigos.ts
  types/
    Artigo.ts
```

---

## Styles

- Global styles in `src/styles/globals.css` (if present).
- Pages use CSS Modules or scoped component styles.

---

## Technologies

- Next.js — React framework with App Router and static generation
- React — UI library
- TypeScript — Application typing
- CSS Modules — Scoped styles by component and page

---

## How to Run

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## Author / Contact

- GitHub — [@chryspenalber](https://github.com/chryspenalber)
- LinkedIn — [Chrystiana Penalber](https://www.linkedin.com/in/chrystiana-penalber/)
