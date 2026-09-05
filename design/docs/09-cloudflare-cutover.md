# Cloudflare cut-over for ariamena.com

The current site is a Cloudflare Worker named `ariamena-website` with the custom domain attached. The new site deploys as the same Worker (static assets only), so the domain, TLS, and Cloudflare settings stay untouched.

## One-time setup (dashboard, about ten minutes)
1. Cloudflare dashboard → Workers & Pages → Create → **Import a repository** → choose `mvphut/ariamena-site-v2`.
2. Project name: `ariamena-website` (must match `wrangler.jsonc`, so it replaces the existing Worker rather than creating a second one). If the dashboard refuses the name because the Worker already exists, connect the repo to the existing Worker instead: open `ariamena-website` → Settings → Builds → Connect repository.
3. Build command: `npm run build`. Deploy command: `npx wrangler deploy`. Root directory: `/`. Node version: 22.
4. Leave `NEXT_PUBLIC_BASE_PATH` unset. Set `NEXT_PUBLIC_FORM_ENDPOINT` once a form service exists. Set `NEXT_PUBLIC_ANALYTICS_SRC` only if you adopt analytics, and add its host to `connect-src` and `script-src` in `public/_headers`.
5. Production branch: `main`. Every push to `main` then rebuilds and redeploys ariamena.com in about two minutes.

## Preview before switching
- `npm run deploy:preview` (or a non-production branch in Workers Builds) deploys to `ariamena-website-preview.<account>.workers.dev` without touching the live domain.

## What the repo already carries
- `wrangler.jsonc`: assets directory `out`, real 404 page, trailing-slash handling.
- `public/_redirects`: every old URL (`/en`, `/en/services/*`, `/en/how-we-work`, `/en/quality`, `/en/company`, Arabic equivalents) redirects permanently to its new home. Search rankings and shared links survive.
- `public/_headers`: HSTS, no-sniff, frame denial, referrer policy, a strict Content-Security-Policy, one-year immutable caching for hashed assets.
- `sitemap.xml`, `robots.txt`, Open Graph image, structured data, favicons.

## Go-live checklist
- [ ] Placeholders replaced in `src/content/site.ts` and `src/content/ar.ts`, `preview: false` in both.
- [ ] Arabic reviewed by a native reader.
- [ ] Legal entity, governing law, jurisdiction in Privacy and Terms.
- [ ] Form endpoint configured, or email fallback accepted for launch.
- [ ] Deploy to preview, click through both languages on a phone.
- [ ] Deploy to production. Old URLs tested: `/en`, `/en/services/egocentric-physical-ai`, `/ar/how-we-work`.
- [ ] Submit `https://ariamena.com/sitemap.xml` in Google Search Console.

## Rollback
Workers keeps previous versions. Dashboard → `ariamena-website` → Deployments → roll back to the prior version. Under a minute.
