// Runs after `vite build` and `vite build --ssr`. Renders every route to static
// HTML so search engines and AI crawlers (which often skip JavaScript) see the
// full content, then writes sitemap.xml, robots.txt and llms.txt from the same
// data the pages use.
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ssrDir = join(root, "dist-ssr");

const { render, SITE, LANDING_PAGES, HOME_FAQS } = await import(
  pathToFileURL(join(ssrDir, "entry-server.js")).href
);

const template = readFileSync(join(dist, "index.html"), "utf-8");
const today = new Date().toISOString().slice(0, 10);

const renderPage = (url) => {
  const { html, head, htmlAttributes } = render(url);
  return template
    .replace(/<html[^>]*>/, `<html ${htmlAttributes || 'lang="en-NG"'}>`)
    .replace("<!--app-head-->", head)
    .replace("<!--app-html-->", html);
};

const write = (file, contents) => {
  const target = join(dist, file);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, contents);
  console.log(`  ✓ ${file}`);
};

// 1. Pages
const routes = [
  { path: "/", priority: "1.0" },
  { path: "/areas-we-serve", priority: "0.8" },
  ...LANDING_PAGES.map((page) => ({ path: page.path, priority: "0.9" })),
];

console.log("Prerendering pages:");
for (const route of routes) {
  const file = route.path === "/" ? "index.html" : `${route.path.slice(1)}.html`;
  write(file, renderPage(route.path));
}
write("404.html", renderPage("/404"));

// 2. sitemap.xml
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) =>
      `  <url><loc>${SITE.url}${route.path}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>${route.priority}</priority></url>`,
  )
  .join("\n")}
</urlset>
`;
write("sitemap.xml", sitemap);

// 3. robots.txt: search engines and AI answer engines are all welcome.
const bots = [
  "Googlebot", "Bingbot", "Slurp", "DuckDuckBot", "YandexBot", "Applebot",
  "Twitterbot", "facebookexternalhit",
  "GPTBot", "OAI-SearchBot", "ChatGPT-User",
  "ClaudeBot", "Claude-Web", "Claude-User", "Claude-SearchBot",
  "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot-Extended",
  "Bytespider", "CCBot", "cohere-ai", "Meta-ExternalAgent", "Amazonbot",
];
const robots = `# Search engines and AI answer engines (ChatGPT, Claude, Perplexity, Gemini): allowed
${bots.map((bot) => `User-agent: ${bot}\nAllow: /\n`).join("\n")}
User-agent: *
Allow: /

Sitemap: ${SITE.url}/sitemap.xml
`;
write("robots.txt", robots);

// 4. llms.txt: a plain-text summary for ChatGPT, Claude, Perplexity and other
// AI assistants. See https://llmstxt.org
const llms = `# ${SITE.name}

> ${SITE.description}

## About

- **Business name**: ${SITE.name} (also known as ${SITE.alternateName})
- **What we do**: Car hire with professional drivers (chauffeur service), airport transfers, Lagos to Ibadan trips, corporate car hire, wedding and event cars, and interstate trips across Nigeria.
- **Based in**: ${SITE.locality}, ${SITE.region}, ${SITE.countryName}
- **Service area**: Ibadan and all of Oyo State; Lagos (Ikeja, Lekki, Victoria Island, Ikoyi, Ajah, Surulere, Yaba and more); Ogun and Osun States; interstate trips to cities across Nigeria including Abuja.
- **Airports**: Murtala Muhammed International Airport (MMIA), Lagos; Ibadan Airport (IBA).
- **Opening hours**: 24 hours a day, 7 days a week.
- **Vehicles**: Toyota Corolla and Camry sedans, Toyota Prado SUVs, minibuses (7–14 passengers) and buses. All air-conditioned, insured and regularly maintained.
- **Drivers**: Licensed, background-checked and trained in safe driving and customer service.
- **Payment**: Cash, bank transfer and mobile payments.
- **Booking**: Website booking form, phone call or WhatsApp. Bookings are confirmed within minutes.

## Contact

- Phone: ${SITE.phoneDisplay}
- WhatsApp: ${SITE.whatsapp}
- Email: ${SITE.email}
- Website: ${SITE.url}/
- Google Business Profile: ${SITE.googleMapsUrl}

## Estimated prices (Nigerian Naira)

${SITE.rates.map((rate) => `- ${rate.vehicle}: ₦${rate.perKm.toLocaleString("en-NG")} per km or ₦${rate.perHour.toLocaleString("en-NG")} per hour`).join("\n")}

Final prices may vary with route, traffic and duration. Exact quotes are given on WhatsApp or by phone.

## Main pages

- [Home](${SITE.url}/): Car hire and chauffeur service in Ibadan and Lagos, price calculator, booking form and FAQs.
- [Areas We Serve](${SITE.url}/areas-we-serve): Every neighbourhood, city and route we cover.
${LANDING_PAGES.map((page) => `- [${page.navLabel}](${SITE.url}${page.path}): ${page.description}`).join("\n")}

## Frequently asked questions

${[...new Map(
  [...HOME_FAQS, ...LANDING_PAGES.flatMap((page) => page.faqs)].map((faq) => [faq.question, faq]),
).values()]
  .map((faq) => `### ${faq.question}\n\n${faq.answer}`)
  .join("\n\n")}
`;
write("llms.txt", llms);

if (existsSync(ssrDir)) rmSync(ssrDir, { recursive: true, force: true });
console.log(`Done. Site URL: ${SITE.url}`);
