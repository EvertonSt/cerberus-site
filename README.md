# Cerberus CI Website

[![CI](https://github.com/EvertonSt/cerberus-site/actions/workflows/ci.yml/badge.svg)](https://github.com/EvertonSt/cerberus-site/actions)

Marketing and documentation site for [Cerberus CI](https://github.com/EvertonSt/cerberus-ci) — the AI-powered test-health and performance-regression gate for CI pipelines.

## Pages

| Route | Content |
|---|---|
| `/` | Hero, features, architecture diagram, quick-start |
| `/features` | Deep feature breakdown with code examples |
| `/docs` | CLI reference, config reference, GitHub Action guide |
| `/architecture` | Technical deep-dive with interactive diagrams |

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export
```

## Deployment

Auto-deploys to Vercel on push to `main`. Connect the repo at [vercel.com/new](https://vercel.com/new).

## Tech Stack

- Next.js 15 (App Router)
- Tailwind CSS v4
- TypeScript
- Zero external JS dependencies (pure React + CSS animations)
