# Ariamena — website

Next.js 16 (App Router), React 19, TypeScript, CSS Modules. Static export.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

- Copy lives in `src/content/site.ts` (single source of truth). Regenerate the copy deck with `node scripts/copy-doc.mjs`.
- Contact form posts to `NEXT_PUBLIC_FORM_ENDPOINT` when set; otherwise it opens a prepared email to partnerships@ariamena.com.
- Design documentation and identity boards are in `design/`.
