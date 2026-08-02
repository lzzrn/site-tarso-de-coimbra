# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projeto

Portal institucional do Centro Educacional Tarso de Coimbra - escola parceira da PUC Minas.

## Comandos

```bash
npm run dev      # Servidor de desenvolvimento (Vite)
npm run build    # Build de produção (tsc + vite build)
npm run lint     # ESLint
npm run preview  # Preview do build local
npm run deploy   # Build + deploy no Firebase Hosting
```

Para adicionar componentes shadcn/ui:
```bash
npx shadcn-ui@latest add <component>
```

## Stack

- **React 19** + TypeScript
- **Vite 7** para bundling
- **React Router DOM** para roteamento (SPA)
- **Tailwind CSS 4** para estilos
- **shadcn/ui** (Radix UI) para componentes
- **Firebase Hosting** para deploy
- **VLibras** para acessibilidade em Libras

## Arquitetura

```
src/
├── pages/           # Páginas da aplicação
│   ├── Home.tsx
│   ├── CentroEducacional.tsx
│   ├── Academico.tsx
│   ├── NoticiasEventos.tsx
│   └── Contato.tsx
├── components/
│   ├── layout/      # Header e Footer (compartilhados)
│   ├── ui/          # Componentes shadcn/ui
│   └── VLibras.tsx  # Widget de acessibilidade
├── lib/utils.ts     # Utilitário cn() para classes
└── App.tsx          # Roteamento principal
```

## Diretrizes de Design

- Layout máximo de 1200px (`max-w-screen-xl`), centralizado
- Esquema de cores em tons de azul (sem dark mode)
- Header sticky no topo
- Conteúdo renderizado dentro de cards com fundo claro
- Design responsivo obrigatório

## Firebase

- Projeto: `tarso-de-coimbra`
- Apenas Hosting configurado (SPA com rewrites para index.html)
- Build output: `dist/`

## Convenções de Commit

Usar Conventional Commits em português:
```
<tipo>(<escopo>): <descrição em português>
```
- Tipos: feat, fix, docs, style, refactor, perf, test, chore, ci
- Escopo: web (este projeto é o frontend React)