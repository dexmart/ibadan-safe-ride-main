# Safety Plus Car Hire

Website for Safety Plus Car Hire: car hire with professional drivers, airport transfers and chauffeur service in Ibadan, Lagos and across Nigeria.

Built with Vite, React, TypeScript, Tailwind CSS and shadcn/ui.

## Deployment (no manual builds)

The site deploys automatically on [Vercel](https://vercel.com) from this GitHub repo. **Push to `main` and the site rebuilds and goes live in about a minute.** There is no need to run `npm run build` or upload a zip.

One-time setup:

1. Sign in to Vercel with GitHub.
2. **Add New → Project**, pick `dexmart/ibadan-safe-ride-main`, click **Deploy**. Settings come from `vercel.json`.
3. **Settings → Domains**: add the business domain and follow the DNS instructions.
4. Put that domain in `SITE.url` in [`src/seo/site.ts`](src/seo/site.ts) and push. Canonical URLs, the sitemap, structured data and `llms.txt` all use it.

## Local development

```sh
npm install
npm run dev        # http://localhost:8080
npm run build      # production build + prerendered pages (what Vercel runs)
npm run preview    # serve the production build
```

## How the SEO works

- **Prerendered pages**: `npm run build` renders every route to static HTML (`scripts/prerender.mjs`), so Google, Bing and AI crawlers (ChatGPT, Claude, Perplexity) see the full content without running JavaScript.
- **Landing pages** for each location and service: Car Hire in Ibadan, Car Hire in Lagos, Lagos Airport Transfer (MMIA), Ibadan Airport Transfer, Lagos to Ibadan, Chauffeur Service, Corporate, Weddings and Interstate. Content is in [`src/seo/pages.ts`](src/seo/pages.ts). Add an entry there to create a new page; it appears in the sitemap, footer and `llms.txt` automatically.
- **Per-page meta tags** (title, description, canonical, Open Graph, Twitter) via `react-helmet-async` in [`src/components/Seo.tsx`](src/components/Seo.tsx).
- **Structured data** (JSON-LD): `AutoRental`/`LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList` and `WebSite`. See [`src/seo/schema.ts`](src/seo/schema.ts).
- **Generated at build**: `sitemap.xml`, `robots.txt` (search engines and AI crawlers allowed) and `llms.txt` (a plain-text business summary for AI assistants).
- **Business facts** (phone, email, rates, areas) live in [`src/seo/site.ts`](src/seo/site.ts). Edit them in one place.

## After launch: getting found on Google, Bing and ChatGPT

1. **Google Search Console** (search.google.com/search-console): add the domain, paste the verification tag into `index.html`, then submit `https://YOUR-DOMAIN/sitemap.xml`.
2. **Bing Webmaster Tools** (bing.com/webmasters): import from Search Console and submit the sitemap. ChatGPT search relies heavily on Bing's index, so don't skip this.
3. **Google Business Profile**: set the website field to the new domain. Keep the name, phone and address exactly as they appear on the site. Add photos, choose the categories "Car rental agency" and "Chauffeur service", list Ibadan and Lagos as service areas, and ask happy customers for reviews. Add the Lagos location if it has its own address.
4. **Consistent listings**: use the same name, phone and website on VConnect, BusinessList.com.ng, Facebook, Instagram and WhatsApp Business.
