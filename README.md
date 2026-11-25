# cup-divisa

Cup Divisa: Is a service who lets you see the current and reliable value of foreign currencies — mainly the USD — quickly and easily, for the people in Cuba buying or selling them, without needing a VPN.

Programmer measures: the backend is separate from the frontend so we can consume the ELTOQUE API server-side and store the latest records in a database — the service keeps working even if the ELTOQUE API is down; the frontend data is fetched at build time for near-instant access, refreshed every 30 minutes; and a worker forces GitHub to recompile and consume the API every 30 minutes.

## Stack

| Area    | Technologies                                                                         |
| ------- | ------------------------------------------------------------------------------------ |
| Backend | Node 22, Express 5, TypeScript (tsc), pnpm, Postgres (pg), axios, swagger-ui-express |
| Web     | Astro 7, Preact, @tailwindcss/vite (v4), timeago.js                                  |
| Workers | Cloudflare Workers, wrangler                                                         |
| Tooling | tsx, oxlint, prettier, astro CLI                                                     |

## Demo

The API is live on Render as `cup-divisa-api` (see `backend/render.yaml`), and the web assets are served from GitHub Pages: https://trev7or23.github.io/cup-divisa.

## How to run

> **Note**: Both packages ship `.env.example` (`backend/.env.example`, `web/.env.example`). Copy each to `.env` and insert the correct values (database credentials, API URLs, etc.) so the backend and frontend run.

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
