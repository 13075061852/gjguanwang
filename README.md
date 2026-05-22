# GJ Guangjun Plastics Technology Website

React + Vite frontend for Cloudflare Pages, with a Cloudflare Worker backend prepared for D1 and R2.

## Scripts

- `npm.cmd run dev` starts the Vite site locally.
- `npm.cmd run build` builds the Pages static output into `dist`.
- `npm.cmd run worker:dev` starts the Worker API with Wrangler.
- `npm.cmd run deploy:pages` builds and deploys the frontend to Cloudflare Pages.
- `npm.cmd run deploy:worker` deploys the Worker API.

## Cloudflare Setup

1. Create a D1 database and replace `database_id` in `wrangler.toml`.
2. Create an R2 bucket named `gj-guangjun-assets` or update the bucket name.
3. Run `wrangler d1 migrations apply gj-guangjun` to initialize D1 tables.
4. Deploy Pages from `dist` and the Worker from `src/worker/index.ts`.
