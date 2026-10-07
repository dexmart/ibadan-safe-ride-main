import { Link } from "react-router-dom";
import { CheckCircle2, MapPin, MessageCircle, Phone, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Fleet from "@/components/Fleet";
import BookingForm from "@/components/BookingForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SITE } from "@/seo/site";
import { findLandingPage, type LandingPage } from "@/seo/pages";
import { breadcrumbSchema, businessSchema, faqSchema, graph, serviceSchema } from "@/seo/schema";
import pradoBlack from "@/assets/fleet-prado-black.png";
import pradoBlue from "@/assets/fleet-prado-blue.png";
import pradoSide from "@/assets/fleet-prado-side.png";
import camry from "@/assets/fleet-camry.png";
import corolla from "@/assets/fleet-corolla.png";
import bus from "@/assets/fleet-bus.png";
import interior from "@/assets/fleet-interior.png";

const IMAGES: Record<LandingPage["image"], string> = {
  "prado-black": pradoBlack,
  "prado-blue": pradoBlue,
  "prado-side": pradoSide,
  camry,
  corolla,
  bus,
  interior,
};

const ServicePage = ({ page }: { page: LandingPage }) => {
  const whatsappUrl = `${SITE.whatsapp}?text=${encodeURIComponent(
    `Hi Safety Plus, I'd like to book: ${page.navLabel}`,
  )}`;
  const related = page.related
    .map(findLandingPage)
    .filter((item): item is LandingPage => Boolean(item));

  return (
    <main className="min-h-screen">
      <Seo
        title={page.title}
        description={page.description}
        path={page.path}
        jsonLd={graph(
          businessSchema(),
          serviceSchema({
            name: page.h1,
            serviceType: page.serviceType,
            description: page.description,
            path: page.path,
            areaServed: page.areaServed,
          }),
          faqSchema(page.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: page.navLabel, path: page.path },
          ]),
        )}
      />
      <Navbar />

      <section className="bg-primary text-primary-foreground pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-primary-foreground/70">
            <ol className="flex items-center gap-1">
              <li>
                <Link to="/" className="hover:text-accent">Home</Link>
              </li>
              <li aria-hidden="true"><ChevronRight className="w-4 h-4" /></li>
              <li aria-current="page" className="text-primary-foreground">{page.navLabel}</li>
            </ol>
          </nav>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="flex items-center gap-2 text-accent font-medium mb-3">
                <MapPin className="w-4 h-4" />
                {page.eyebrow}
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                {page.h1}
              </h1>
              <p className="text-lg text-primary-foreground/90 leading-relaxed mb-8">
                {page.intro[0]}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="hero" size="lg">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Book on WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  <a href={`tel:${SITE.phone}`}>
                    <Phone className="w-5 h-5" />
                    Call {SITE.phoneDisplay}
                  </a>
                </Button>
              </div>
            </div>
            <img
              src={IMAGES[page.image]}
              alt={page.imageAlt}
              width={800}
              height={600}
              {...{ fetchpriority: "high" }}
              className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[4/3] bg-primary-foreground/5"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {page.intro.slice(1).map((paragraph) => (
            <p key={paragraph} className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-10">
              {paragraph}
            </p>
          ))}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {page.highlights.map((item) => (
              <Card key={item.title} className="border-border">
                <CardContent className="pt-6">
                  <CheckCircle2 className="w-7 h-7 text-accent mb-3" />
                  <h2 className="font-semibold text-lg text-foreground mb-2">{item.title}</h2>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">{page.areasHeading}</h2>
          <ul className="flex flex-wrap gap-2">
            {page.areas.map((area) => (
              <li
                key={area}
                className="px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Fleet />

      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {page.faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`} className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent forceMount className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Related services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {related.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block p-5 rounded-xl bg-card border border-border hover:border-accent hover:shadow-md transition-all"
              >
                <span className="font-semibold text-foreground">{item.navLabel}</span>
                <span className="block text-sm text-muted-foreground mt-1">{item.eyebrow}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BookingForm />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default ServicePage;
