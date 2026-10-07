import { SITE, absoluteUrl } from "./site";
import type { Faq } from "./pages";

const BUSINESS_ID = `${SITE.url}/#business`;
const WEBSITE_ID = `${SITE.url}/#website`;

const place = (name: string) => {
  if (name === "Nigeria") return { "@type": "Country", name };
  if (name.endsWith("State")) return { "@type": "State", name };
  return { "@type": "City", name };
};

export const businessSchema = () => ({
  "@type": ["AutoRental", "LocalBusiness"],
  "@id": BUSINESS_ID,
  name: SITE.name,
  alternateName: SITE.alternateName,
  description: SITE.description,
  url: absoluteUrl("/"),
  logo: absoluteUrl("/logo.png"),
  image: absoluteUrl(SITE.ogImage),
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: "₦₦",
  currenciesAccepted: "NGN",
  paymentAccepted: "Cash, Bank Transfer, Mobile Payment",
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.locality,
    addressRegion: SITE.region,
    addressCountry: SITE.country,
  },
  areaServed: [
    "Ibadan", "Lagos", "Oyo State", "Lagos State", "Ogun State", "Osun State", "Nigeria",
  ].map(place),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.phone,
    email: SITE.email,
    contactType: "reservations",
    areaServed: "NG",
    availableLanguage: ["English", "Yoruba"],
  },
  hasMap: SITE.googleMapsUrl,
  sameAs: [SITE.googleMapsUrl, SITE.whatsapp],
  knowsAbout: [
    "Car hire in Ibadan", "Car hire in Lagos", "Airport transfers",
    "Lagos to Ibadan transport", "Chauffeur service", "Corporate car hire",
    "Wedding car hire", "Interstate travel in Nigeria",
  ],
});

export const websiteSchema = () => ({
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: absoluteUrl("/"),
  name: SITE.name,
  inLanguage: "en-NG",
  publisher: { "@id": BUSINESS_ID },
});

export const serviceSchema = (opts: {
  name: string;
  serviceType: string;
  description: string;
  path: string;
  areaServed: string[];
}) => ({
  "@type": "Service",
  "@id": `${absoluteUrl(opts.path)}#service`,
  name: opts.name,
  serviceType: opts.serviceType,
  description: opts.description,
  url: absoluteUrl(opts.path),
  provider: { "@id": BUSINESS_ID },
  areaServed: opts.areaServed.map(place),
  availableChannel: {
    "@type": "ServiceChannel",
    servicePhone: { "@type": "ContactPoint", telephone: SITE.phone },
    serviceUrl: absoluteUrl(opts.path),
  },
});

export const faqSchema = (faqs: Faq[]) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const graph = (...nodes: object[]) => ({
  "@context": "https://schema.org",
  "@graph": nodes,
});
