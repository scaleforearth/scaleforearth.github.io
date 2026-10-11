# Scale for Earth: company landing page

A one-page static site built with [Astro](https://astro.build), hosted on GitHub Pages.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Where to edit things

| What | Where |
| --- | --- |
| All text, links, email, bio, services | `src/data/site.ts` |
| Colour palette (4 built in, light + dark) | `palette` in `src/data/site.ts`; values in `src/styles/global.css` |
| Services layout (`cards` / `list` / `steps`) | `services.layout` in `src/data/site.ts` |
| Logo, hero image, social preview image | drop files in `public/`, then set `logo`, `heroImage`, `ogImage` in `src/data/site.ts` |
| Domain (canonical + social tags) | `site` in `astro.config.mjs` |
| Custom domain for GitHub Pages | `public/CNAME` |

Search the project for `TODO` to find every placeholder.

## Services are dynamic

`services.items` is just an array. Add or remove objects and the page adapts: the
`cards` layout reflows into as many columns as fit, `list` and `steps` simply get
longer. Each item can optionally have a `points` array for bullets.

## Deploy to GitHub Pages

1. Push this repo to GitHub (branch `main`).
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. Every push to `main` builds and deploys via `.github/workflows/deploy.yml`.
4. Set `site` in `astro.config.mjs` and the domain in `public/CNAME` to your real domain.

### Squarespace DNS

- **Apex domain** (`yourdomain.com`): add four `A` records pointing to
  `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`,
  and a `CNAME` for `www` pointing to `<github-user-or-org>.github.io`.
- **Subdomain only** (e.g. `www`): one `CNAME` pointing to `<github-user-or-org>.github.io`.
- Remove any default Squarespace records on the same host that conflict.
- In **Settings → Pages**, enter the custom domain, wait for the DNS check, then tick
  **Enforce HTTPS**.
