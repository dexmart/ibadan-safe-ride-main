// Single source of truth for business facts used in page copy, meta tags,
// structured data, sitemap.xml, robots.txt and llms.txt.
// When the custom domain is connected, change `url` below and push.
export const SITE = {
  url: "https://ibadan-safe-ride-main.vercel.app",
  name: "Safety Plus Car Hire",
  alternateName: "Safety Plus Car Hire Services",
  tagline: "Your Safe Ride, Anytime in Ibadan & Lagos",
  description:
    "Safety Plus Car Hire is a 24/7 car hire and chauffeur service based in Ibadan, Oyo State, Nigeria. We provide airport transfers (Lagos MMIA and Ibadan Airport), daily car hire with a driver, Lagos to Ibadan trips, corporate rides, wedding cars and interstate travel across Nigeria.",
  phone: "+2348165884235",
  phoneDisplay: "+234 816 588 4235",
  whatsapp: "https://wa.me/2348165884235",
  email: "Safetyplusventure@gmail.com",
  locality: "Ibadan",
  region: "Oyo State",
  regionCode: "NG-OY",
  country: "NG",
  countryName: "Nigeria",
  // Approximate centre of Ibadan, used for geo meta tags only.
  geo: { lat: 7.3775, lng: 3.947 },
  googleMapsUrl:
    "https://www.google.com/search?hl=en-GB&gl=ng&kgmid=/g/11mv4ly7y5&q=Safety+plus+car+hire+services",
  ogImage: "/og-image.jpg",
  // Estimated rates, kept in sync with the price calculator.
  rates: [
    { vehicle: "Sedan (e.g. Toyota Corolla, Camry)", perKm: 200, perHour: 2500 },
    { vehicle: "SUV (e.g. Toyota Prado)", perKm: 300, perHour: 3500 },
    { vehicle: "Minibus", perKm: 400, perHour: 5000 },
    { vehicle: "Bus", perKm: 500, perHour: 6500 },
  ],
} as const;

export const absoluteUrl = (path = "/") =>
  `${SITE.url}${path === "/" ? "/" : path}`;
