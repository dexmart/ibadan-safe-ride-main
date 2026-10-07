// Content for the location and service landing pages. Each entry becomes a
// prerendered route (see scripts/prerender.mjs), an entry in sitemap.xml and
// a line in llms.txt.

export type Faq = { question: string; answer: string };

export type LandingPage = {
  path: string;
  navLabel: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string[];
  image: "prado-black" | "prado-blue" | "prado-side" | "camry" | "corolla" | "bus" | "interior";
  imageAlt: string;
  serviceType: string;
  areaServed: string[];
  highlights: { title: string; text: string }[];
  areasHeading: string;
  areas: string[];
  faqs: Faq[];
  related: string[];
};

export const IBADAN_AREAS = [
  "Bodija", "Agodi GRA", "Jericho", "Iyaganku", "Oluyole Estate", "Ring Road",
  "Challenge", "Dugbe", "Mokola", "Sango", "University of Ibadan (UI)", "Ojoo",
  "Akobo", "Samonda", "Apata", "Iwo Road", "Moniya", "Alalubosa GRA", "Felele",
  "Idi-Ishin", "Odo-Ona", "Gate",
];

export const LAGOS_AREAS = [
  "Ikeja", "Ikeja GRA", "Lekki", "Victoria Island", "Ikoyi", "Ajah", "Surulere",
  "Yaba", "Maryland", "Magodo", "Gbagada", "Ogba", "Ikorodu", "Festac", "Apapa",
  "Oshodi", "Ojota", "Berger",
];

export const INTERSTATE_DESTINATIONS = [
  "Lagos", "Abeokuta", "Ijebu-Ode", "Sagamu", "Ogbomoso", "Oyo", "Iseyin",
  "Saki", "Osogbo", "Ile-Ife", "Ilesa", "Ilorin", "Akure", "Ado-Ekiti",
  "Ondo", "Benin City", "Abuja",
];

export const LANDING_PAGES: LandingPage[] = [
  {
    path: "/car-hire-ibadan",
    navLabel: "Car Hire in Ibadan",
    title: "Car Hire in Ibadan with Driver | 24/7 | Safety Plus",
    description:
      "Hire a clean, air-conditioned car with a professional driver anywhere in Ibadan: Bodija, Ring Road, UI, Jericho, Oluyole and more. Available 24/7. Call or WhatsApp +234 816 588 4235.",
    h1: "Car Hire in Ibadan, With a Professional Driver",
    eyebrow: "Ibadan, Oyo State",
    intro: [
      "Safety Plus Car Hire is based in Ibadan. We move people around the city safely, every day. Whether you need a car for a few hours, a full day or a whole week, we send a clean, air-conditioned vehicle and a courteous, background-checked driver to wherever you are.",
      "We cover every part of Ibadan, from Bodija and Agodi GRA to Ring Road, Challenge, Akobo and the University of Ibadan, and we are available 24 hours a day, 7 days a week. Book by phone, WhatsApp or the form below and we confirm within minutes.",
    ],
    image: "camry",
    imageAlt: "Toyota Camry available for car hire in Ibadan",
    serviceType: "Car hire with driver",
    areaServed: ["Ibadan", "Oyo State"],
    highlights: [
      { title: "Hourly, daily or weekly hire", text: "Pay only for the time you need, from a short errand to a multi-day booking." },
      { title: "Driver included", text: "Experienced, licensed drivers who know Ibadan's roads, traffic and shortcuts." },
      { title: "Sedans, SUVs and buses", text: "Toyota Corolla and Camry sedans, Toyota Prado SUVs, minibuses and buses." },
      { title: "24/7 availability", text: "Early flights, late events and same-day bookings, subject to availability." },
    ],
    areasHeading: "Areas we cover in Ibadan",
    areas: IBADAN_AREAS,
    faqs: [
      {
        question: "How much does it cost to hire a car with a driver in Ibadan?",
        answer:
          "Our estimated rates start from ₦200 per km or ₦2,500 per hour for a sedan, and ₦300 per km or ₦3,500 per hour for an SUV. Use the price calculator on our home page for an instant estimate, or message us on WhatsApp for an exact quote.",
      },
      {
        question: "Can I hire a car in Ibadan for a full day?",
        answer:
          "Yes. We offer full-day and multi-day car hire in Ibadan with a driver. Contact us for special rates on extended bookings.",
      },
      {
        question: "Do you pick up from the University of Ibadan and Bodija?",
        answer:
          "Yes. We pick up from anywhere in Ibadan, including UI, Bodija, Agodi GRA, Jericho, Ring Road, Challenge, Akobo, Oluyole and Iwo Road.",
      },
      {
        question: "Can I book a car in Ibadan on the same day?",
        answer:
          "Often, yes. We recommend booking 24 hours ahead for guaranteed availability, but we regularly accommodate same-day requests. Call or WhatsApp +234 816 588 4235.",
      },
    ],
    related: ["/ibadan-airport-transfer", "/lagos-to-ibadan-car-hire", "/chauffeur-service", "/wedding-car-hire"],
  },
  {
    path: "/car-hire-lagos",
    navLabel: "Car Hire in Lagos",
    title: "Car Hire in Lagos with Driver | Ikeja, Lekki, VI | Safety Plus",
    description:
      "Reliable car hire with a professional driver in Lagos: Ikeja, Lekki, Victoria Island, Ikoyi, Ajah and more. Airport pickups, daily hire and trips to Ibadan. Call +234 816 588 4235.",
    h1: "Car Hire in Lagos, With a Driver You Can Trust",
    eyebrow: "Lagos State",
    intro: [
      "Safety Plus Car Hire serves Lagos as well as Ibadan. Hire a clean, air-conditioned sedan, SUV or bus with a professional driver for meetings, errands, events, airport runs or a full day around the city.",
      "We cover the Lagos mainland and island, including Ikeja, Lekki, Victoria Island, Ikoyi, Ajah, Surulere and Yaba, and we run daily trips between Lagos and Ibadan. Our drivers are courteous, background-checked and used to Lagos traffic.",
    ],
    image: "prado-black",
    imageAlt: "Black Toyota Prado SUV for car hire in Lagos",
    serviceType: "Car hire with driver",
    areaServed: ["Lagos", "Lagos State"],
    highlights: [
      { title: "Island and mainland", text: "Pickups across Lagos Island, Lekki, VI, Ikoyi, Ikeja and the mainland." },
      { title: "Airport pickups at MMIA", text: "Meet-and-greet at Murtala Muhammed International Airport, Ikeja." },
      { title: "Lagos to Ibadan and beyond", text: "One-way or return trips to Ibadan and other South-West cities." },
      { title: "Corporate and events", text: "Executive cars for business visitors, conferences, weddings and parties." },
    ],
    areasHeading: "Areas we cover in Lagos",
    areas: LAGOS_AREAS,
    faqs: [
      {
        question: "Do you offer car hire in Lagos?",
        answer:
          "Yes. Safety Plus Car Hire provides car hire with a driver in Lagos, including Ikeja, Lekki, Victoria Island, Ikoyi, Ajah, Surulere and Yaba, as well as airport transfers and trips between Lagos and Ibadan.",
      },
      {
        question: "Can I hire a car in Lagos and travel to Ibadan?",
        answer:
          "Yes. Lagos to Ibadan is one of our most popular routes. We offer one-way and return trips, and the journey on the Lagos–Ibadan Expressway usually takes about 2 to 3 hours depending on traffic.",
      },
      {
        question: "Do your drivers know Lagos?",
        answer:
          "Yes. Our drivers are experienced with Lagos roads and traffic and plan routes to get you to your destination on time.",
      },
      {
        question: "How do I book car hire in Lagos?",
        answer:
          "Fill in the booking form on this page, call +234 816 588 4235 or send us a WhatsApp message with your pickup point, destination, date and time. We confirm within minutes.",
      },
    ],
    related: ["/lagos-airport-transfer", "/lagos-to-ibadan-car-hire", "/corporate-car-hire", "/interstate-car-hire-nigeria"],
  },
  {
    path: "/lagos-airport-transfer",
    navLabel: "Lagos Airport Transfer",
    title: "Lagos Airport Transfer (MMIA) to Ibadan & Lagos | Safety Plus",
    description:
      "Airport pickup and drop-off at Murtala Muhammed International Airport (MMIA), Ikeja. Transfers to Ibadan, Abeokuta and anywhere in Lagos. Flight tracking, 24/7. Book on +234 816 588 4235.",
    h1: "Lagos Airport Transfers to Ibadan and Across Lagos",
    eyebrow: "Murtala Muhammed International Airport, Ikeja",
    intro: [
      "Landing in Lagos and heading to Ibadan, Abeokuta or somewhere in Lagos? Safety Plus Car Hire picks you up at Murtala Muhammed International Airport (MMIA) in Ikeja, international or domestic terminal, and drives you straight to your door.",
      "We track your flight, so your driver is waiting even if you land early or late. Our vehicles are clean, air-conditioned and roomy enough for your luggage. We also handle drop-offs to MMIA from Ibadan and anywhere in Lagos, timed so you never miss a flight.",
    ],
    image: "corolla",
    imageAlt: "Toyota Corolla used for Lagos airport transfers",
    serviceType: "Airport transfer",
    areaServed: ["Lagos", "Ikeja", "Ibadan", "Abeokuta", "Ogun State", "Oyo State"],
    highlights: [
      { title: "Flight tracking", text: "We monitor your flight and adjust the pickup time if it is delayed." },
      { title: "Meet and greet", text: "Your driver meets you at arrivals and helps with your luggage." },
      { title: "MMIA to Ibadan", text: "Direct transfers from Lagos airport to anywhere in Ibadan, 24/7." },
      { title: "Drop-offs too", text: "On-time rides to MMIA international and domestic terminals." },
    ],
    areasHeading: "Popular airport transfer routes",
    areas: [
      "MMIA to Ibadan", "MMIA to Abeokuta", "MMIA to Lekki", "MMIA to Victoria Island",
      "MMIA to Ikoyi", "MMIA to Ikeja GRA", "MMIA to Ajah", "Ibadan to MMIA",
      "MMIA to Ogbomoso", "MMIA to Osogbo", "MMIA to Ile-Ife",
    ],
    faqs: [
      {
        question: "How do I get from Lagos airport to Ibadan?",
        answer:
          "Book a private transfer with Safety Plus Car Hire. Your driver meets you at Murtala Muhammed International Airport (MMIA), Ikeja, and drives you directly to your address in Ibadan. The trip usually takes about 2 to 3 hours depending on traffic.",
      },
      {
        question: "Do you pick up from both the international and domestic terminals?",
        answer:
          "Yes. We pick up from the MMIA international terminal and the domestic terminals in Ikeja.",
      },
      {
        question: "What happens if my flight is delayed?",
        answer:
          "We monitor flight times, so your driver adjusts to your actual arrival time.",
      },
      {
        question: "Can you take me from Ibadan to Lagos airport for an early flight?",
        answer:
          "Yes. We run 24/7 and plan the departure time around your flight and expected traffic on the Lagos–Ibadan Expressway.",
      },
    ],
    related: ["/lagos-to-ibadan-car-hire", "/ibadan-airport-transfer", "/car-hire-lagos", "/corporate-car-hire"],
  },
  {
    path: "/ibadan-airport-transfer",
    navLabel: "Ibadan Airport Transfer",
    title: "Ibadan Airport Transfer | Pickup & Drop-off 24/7 | Safety Plus",
    description:
      "Reliable pickups and drop-offs at Ibadan Airport (IBA), Alakia, to and from anywhere in Ibadan and Oyo State. Clean cars, professional drivers, 24/7. Call +234 816 588 4235.",
    h1: "Ibadan Airport Transfers, Pickup and Drop-off",
    eyebrow: "Ibadan Airport (IBA), Alakia",
    intro: [
      "Safety Plus Car Hire provides reliable transfers to and from Ibadan Airport in Alakia. We pick you up at arrivals and take you anywhere in Ibadan, from Bodija and Jericho to Oluyole, Akobo and the University of Ibadan.",
      "Need to catch a flight? We get you to the airport on time, with room for your luggage and a driver who knows the fastest route across the city.",
    ],
    image: "prado-blue",
    imageAlt: "Toyota Prado SUV for Ibadan Airport transfers",
    serviceType: "Airport transfer",
    areaServed: ["Ibadan", "Oyo State"],
    highlights: [
      { title: "On-time pickups", text: "Your driver is at arrivals when you land, even if the flight changes." },
      { title: "Anywhere in Ibadan", text: "Door-to-door to hotels, homes, offices and campuses across the city." },
      { title: "Onward travel", text: "Continue to Ogbomoso, Oyo, Osogbo, Ile-Ife or Lagos in the same car." },
      { title: "Available 24/7", text: "Early morning and late night flights are no problem." },
    ],
    areasHeading: "Areas we cover from Ibadan Airport",
    areas: IBADAN_AREAS,
    faqs: [
      {
        question: "Do you offer pickups from Ibadan Airport?",
        answer:
          "Yes. We pick up from Ibadan Airport (IBA) in Alakia and drop you anywhere in Ibadan or nearby cities.",
      },
      {
        question: "How early should I book an Ibadan airport transfer?",
        answer:
          "We recommend booking at least 24 hours ahead, but we often accommodate same-day bookings. Call or WhatsApp +234 816 588 4235.",
      },
      {
        question: "Can I go from Ibadan Airport straight to Lagos?",
        answer:
          "Yes. We offer direct transfers from Ibadan to Lagos, including Lagos airport (MMIA).",
      },
    ],
    related: ["/car-hire-ibadan", "/lagos-airport-transfer", "/chauffeur-service", "/lagos-to-ibadan-car-hire"],
  },
  {
    path: "/lagos-to-ibadan-car-hire",
    navLabel: "Lagos to Ibadan Trips",
    title: "Lagos to Ibadan Car Hire | Private Car With Driver | Safety Plus",
    description:
      "Private car hire between Lagos and Ibadan, one-way or return. Door-to-door pickup, professional driver, clean air-conditioned car. 24/7. Book on +234 816 588 4235.",
    h1: "Lagos to Ibadan Car Hire, Door to Door",
    eyebrow: "Lagos ⇄ Ibadan",
    intro: [
      "Skip the crowded parks and travel between Lagos and Ibadan in a private, air-conditioned car with your own professional driver. We pick you up from your home, hotel, office or the airport and drop you exactly where you need to be.",
      "The journey on the Lagos–Ibadan Expressway is about 130 km and usually takes 2 to 3 hours depending on traffic. Choose a one-way trip or a return trip with the car waiting for you.",
    ],
    image: "prado-side",
    imageAlt: "Toyota Prado for Lagos to Ibadan trips",
    serviceType: "Intercity car hire",
    areaServed: ["Lagos", "Ibadan", "Lagos State", "Oyo State", "Ogun State"],
    highlights: [
      { title: "Door-to-door", text: "Pickup and drop-off at your exact address, not a motor park." },
      { title: "One-way or return", text: "Same-day return trips and multi-day bookings available." },
      { title: "Safe and comfortable", text: "Well-maintained cars and drivers trained in safe highway driving." },
      { title: "Groups welcome", text: "Minibuses and buses for families, staff and event guests." },
    ],
    areasHeading: "Routes we drive",
    areas: [
      "Lagos to Ibadan", "Ibadan to Lagos", "Lekki to Ibadan", "Ikeja to Ibadan",
      "Victoria Island to Ibadan", "Lagos airport (MMIA) to Ibadan", "Ibadan to Lagos airport",
      "Lagos to Abeokuta", "Ibadan to Abeokuta", "Lagos to Ogbomoso", "Lagos to Osogbo",
    ],
    faqs: [
      {
        question: "How long does it take to drive from Lagos to Ibadan?",
        answer:
          "Lagos to Ibadan is about 130 km on the Lagos–Ibadan Expressway and usually takes 2 to 3 hours, depending on where you start in Lagos and the traffic.",
      },
      {
        question: "How much is a private car from Lagos to Ibadan?",
        answer:
          "The price depends on the vehicle and your exact pickup and drop-off points. Our estimated rates start from ₦200 per km for a sedan. Message us on WhatsApp for an exact quote.",
      },
      {
        question: "Can the driver wait and bring me back the same day?",
        answer:
          "Yes. Book a return trip and the driver waits for you, or we can schedule your return for another day.",
      },
    ],
    related: ["/lagos-airport-transfer", "/car-hire-lagos", "/car-hire-ibadan", "/interstate-car-hire-nigeria"],
  },
  {
    path: "/chauffeur-service",
    navLabel: "Chauffeur Service",
    title: "Chauffeur Service in Ibadan & Lagos | Executive Drivers | Safety Plus",
    description:
      "Professional chauffeur-driven cars in Ibadan and Lagos for executives, visitors and families. Courteous, background-checked drivers, clean vehicles, 24/7. Call +234 816 588 4235.",
    h1: "Chauffeur Service in Ibadan and Lagos",
    eyebrow: "Chauffeur-driven cars",
    intro: [
      "Sit back while a professional chauffeur handles the driving. Safety Plus Car Hire provides chauffeur-driven sedans and SUVs in Ibadan and Lagos for executives, visiting guests, families and anyone who wants a calm, safe ride.",
      "Every chauffeur is licensed, background-checked and trained in safe driving and customer service. Book by the hour, by the day or for a longer engagement.",
    ],
    image: "interior",
    imageAlt: "Clean car interior for chauffeur service",
    serviceType: "Chauffeur service",
    areaServed: ["Ibadan", "Lagos", "Oyo State", "Lagos State"],
    highlights: [
      { title: "Vetted chauffeurs", text: "Licensed, background-checked and courteous." },
      { title: "Executive vehicles", text: "Toyota Camry sedans and Toyota Prado SUVs." },
      { title: "Flexible bookings", text: "Hourly, full-day and multi-day chauffeur hire." },
      { title: "Discreet and punctual", text: "On time, every time, with your schedule in mind." },
    ],
    areasHeading: "Where our chauffeurs drive",
    areas: ["Ibadan", "Lagos", "Abeokuta", "Ogbomoso", "Osogbo", "Ile-Ife", "Ilorin", "Akure", "Abuja"],
    faqs: [
      {
        question: "What is the difference between car hire and a chauffeur service?",
        answer:
          "With our chauffeur service, a professional driver comes with the car and stays with you for the booking, so you never have to drive or park. All Safety Plus bookings can include a driver.",
      },
      {
        question: "Can I book a chauffeur for several days?",
        answer:
          "Yes. We offer multi-day chauffeur hire in Ibadan, Lagos and for trips across Nigeria. Contact us for extended booking rates.",
      },
    ],
    related: ["/corporate-car-hire", "/car-hire-ibadan", "/car-hire-lagos", "/wedding-car-hire"],
  },
  {
    path: "/corporate-car-hire",
    navLabel: "Corporate Car Hire",
    title: "Corporate Car Hire in Ibadan & Lagos | Business Travel | Safety Plus",
    description:
      "Corporate car hire for meetings, conferences, staff movement and visiting executives in Ibadan and Lagos. Professional drivers, clean cars and clear pricing. Call +234 816 588 4235.",
    h1: "Corporate Car Hire for Businesses in Ibadan and Lagos",
    eyebrow: "Business travel",
    intro: [
      "Safety Plus Car Hire looks after the ground transport for businesses, NGOs and event organisers in Ibadan and Lagos. We move executives to meetings, collect visitors from the airport, shuttle staff and support conferences with sedans, SUVs and buses.",
      "You get punctual, professional drivers, clean vehicles and transparent pricing, with one point of contact for every booking.",
    ],
    image: "prado-blue",
    imageAlt: "Executive SUV for corporate car hire",
    serviceType: "Corporate car hire",
    areaServed: ["Ibadan", "Lagos", "Oyo State", "Lagos State", "Nigeria"],
    highlights: [
      { title: "Airport pickups for visitors", text: "MMIA and Ibadan Airport meet-and-greet for your guests." },
      { title: "Conferences and events", text: "Multiple vehicles and buses coordinated for your event." },
      { title: "Staff transport", text: "Minibuses and buses for team movement and offsites." },
      { title: "Clear invoicing", text: "Transparent pricing agreed before the trip." },
    ],
    areasHeading: "Where we support businesses",
    areas: ["Ibadan", "Lagos", "Abeokuta", "Ogbomoso", "Osogbo", "Ile-Ife", "Ilorin", "Akure", "Abuja"],
    faqs: [
      {
        question: "Do you provide cars for conferences and corporate events?",
        answer:
          "Yes. We supply sedans, SUVs, minibuses and buses with drivers for conferences, retreats and corporate events in Ibadan, Lagos and other cities.",
      },
      {
        question: "Can you pick up our visiting staff from Lagos airport?",
        answer:
          "Yes. We meet visitors at Murtala Muhammed International Airport and take them to Lagos, Ibadan or other destinations.",
      },
    ],
    related: ["/chauffeur-service", "/lagos-airport-transfer", "/car-hire-lagos", "/car-hire-ibadan"],
  },
  {
    path: "/wedding-car-hire",
    navLabel: "Wedding & Event Cars",
    title: "Wedding Car Hire in Ibadan & Lagos | Events & Occasions | Safety Plus",
    description:
      "Clean, elegant cars and buses for weddings, owambe parties, burials and family events in Ibadan and Lagos. Professional drivers. Book on +234 816 588 4235.",
    h1: "Wedding and Event Car Hire in Ibadan and Lagos",
    eyebrow: "Weddings, parties and special occasions",
    intro: [
      "Make your big day run smoothly. Safety Plus Car Hire provides clean, elegant cars for the couple and family, plus minibuses and buses for guests, at weddings, engagements, owambe parties, birthdays, burials and other family events in Ibadan and Lagos.",
      "Our drivers are punctual and well presented, and we plan timings with you so everyone gets to the church, mosque, venue and reception on time.",
    ],
    image: "prado-black",
    imageAlt: "Black Toyota Prado for wedding car hire",
    serviceType: "Wedding and event car hire",
    areaServed: ["Ibadan", "Lagos", "Oyo State", "Lagos State"],
    highlights: [
      { title: "Cars for the couple", text: "Clean, polished SUVs and sedans for the bride, groom and family." },
      { title: "Guest transport", text: "Minibuses and buses to move guests between venues." },
      { title: "Punctual drivers", text: "Well-presented drivers who keep to your programme." },
      { title: "Out-of-town events", text: "Travel to family events across the South-West." },
    ],
    areasHeading: "Where we serve events",
    areas: ["Ibadan", "Lagos", "Abeokuta", "Ogbomoso", "Oyo", "Osogbo", "Ile-Ife", "Ijebu-Ode"],
    faqs: [
      {
        question: "Can I hire several cars for a wedding?",
        answer:
          "Yes. We can supply multiple cars and buses for one event. Book early so we can reserve the vehicles you need.",
      },
      {
        question: "Do you provide buses for wedding guests?",
        answer:
          "Yes. We have minibuses (7 to 14 passengers) and buses for moving guests between the ceremony and reception.",
      },
    ],
    related: ["/car-hire-ibadan", "/car-hire-lagos", "/chauffeur-service", "/interstate-car-hire-nigeria"],
  },
  {
    path: "/interstate-car-hire-nigeria",
    navLabel: "Interstate Trips",
    title: "Interstate Car Hire in Nigeria from Ibadan & Lagos | Safety Plus",
    description:
      "Private interstate car hire from Ibadan and Lagos to Abeokuta, Ogbomoso, Osogbo, Ile-Ife, Ilorin, Akure, Benin, Abuja and more. Professional drivers, 24/7. Call +234 816 588 4235.",
    h1: "Interstate Car Hire Across Nigeria",
    eyebrow: "Long-distance trips from Ibadan and Lagos",
    intro: [
      "Travel between cities in a private car with a professional driver. Safety Plus Car Hire runs long-distance trips from Ibadan and Lagos to cities across the South-West and beyond, including Abeokuta, Ogbomoso, Osogbo, Ile-Ife, Ilorin, Akure, Benin City and Abuja.",
      "Our drivers are experienced on Nigerian highways and our vehicles are maintained for long journeys, so you arrive safe, rested and on time.",
    ],
    image: "bus",
    imageAlt: "Executive bus for interstate trips in Nigeria",
    serviceType: "Interstate car hire",
    areaServed: ["Nigeria", "Oyo State", "Lagos State", "Ogun State", "Osun State", "Kwara State", "Ondo State", "Ekiti State"],
    highlights: [
      { title: "Highway-experienced drivers", text: "Trained in safe long-distance driving." },
      { title: "Maintained vehicles", text: "Inspected before every long trip." },
      { title: "One-way or return", text: "Drop-off only, or keep the car and driver for your stay." },
      { title: "Groups and families", text: "SUVs, minibuses and buses for larger parties." },
    ],
    areasHeading: "Destinations we travel to",
    areas: INTERSTATE_DESTINATIONS,
    faqs: [
      {
        question: "Which cities do you travel to from Ibadan?",
        answer:
          "We travel from Ibadan to Lagos, Abeokuta, Ogbomoso, Oyo, Osogbo, Ile-Ife, Ilesa, Ilorin, Akure, Ado-Ekiti, Benin City, Abuja and other cities. Contact us to confirm your route.",
      },
      {
        question: "Can the car stay with me for several days on an interstate trip?",
        answer:
          "Yes. You can keep the car and driver for the length of your trip. Ask us about multi-day rates.",
      },
    ],
    related: ["/lagos-to-ibadan-car-hire", "/car-hire-ibadan", "/car-hire-lagos", "/corporate-car-hire"],
  },
];

export const findLandingPage = (path: string) =>
  LANDING_PAGES.find((page) => page.path === path);
