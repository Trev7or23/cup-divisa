# cup-divisa

> Currency actual value: a server that hosts and serves the real value of the currency, plus the web frontend that consumes it.

## For recruiters

This repo contains the `cup-divisa` project — a full application with three independent packages:

- **`backend/`** — The API that hosts the cup currency actual value. Express 5 on Node 22, pnpm, TypeScript, Postgres (pg), swagger-ui-express + swagger-autogen for interactive docs.
- **`web/`** — The frontend. Astro 7 with Preact and Tailwind v4, deployed to GitHub Pages (https://trev7or23.github.io).
- **`workers/`** — Cloudflare Workers (wrangler) for deploys, e.g. the `github-cron-trigger-cup-divisa` trigger.

## Stack

| Area | Technologies |
| --- | --- |
| Backend | Node 22, Express 5, TypeScript (tsc), pnpm, Postgres (pg), axios, swagger-ui-express |
| Web | Astro 7, Preact, @tailwindcss/vite (v4), timeago.js |
| Workers | Cloudflare Workers, wrangler |
| Tooling | tsx, oxlint, prettier, astro CLI |

## Demo

The API is live on Render as `cup-divisa-api` (see `backend/render.yaml`), and the web assets are served from GitHub Pages: https://trev7or23.github.io.

## How to run

### Web

From the repo root:

```sh
cd web
bun install
bun dev
```

`bun dev` runs `astro dev`; the web `AGENTS.md` suggests `astro dev --background` when a dev server is needed.

### Backend

From the repo root:

```sh
cd backend
pnpm install
pnpm dev
```

`pnpm dev` runs `swagger` generation plus `tsx watch src/server.ts`. Other backend scripts: `pnpm build`, `pnpm lint`, `pnpm start`, `pnpm migrate:postgres`.

## Repo structure

```
backend/  Express API + DB, pnpm
web/      Astro frontend, bun
workers/  GitHub cron trigger worker (Cloudflare)
design/   design assets (DESIGN.md, screen.png)
```

## Contact

[Trev7or23](https://github.com/Trev7or23) on GitHub — the repo is [Trev7or23/cup-divisa](https://github.com/Trev7or23/cup-divisa).
