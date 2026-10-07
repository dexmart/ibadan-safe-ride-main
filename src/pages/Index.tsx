import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Stats from "@/components/Stats";
import Fleet from "@/components/Fleet";
import Testimonials from "@/components/Testimonials";
import PricingCalculator from "@/components/PricingCalculator";
import FAQ from "@/components/FAQ";
import BookingForm from "@/components/BookingForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AreasServed from "@/components/AreasServed";
import Seo from "@/components/Seo";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SITE } from "@/seo/site";
import { HOME_FAQS } from "@/seo/faqs";
import { businessSchema, faqSchema, graph, serviceSchema, websiteSchema } from "@/seo/schema";

const HOME_TITLE = "Car Hire in Ibadan & Lagos | Airport Transfers 24/7 | Safety Plus";
const HOME_DESCRIPTION =
  "Safety Plus Car Hire: 24/7 car hire with professional drivers in Ibadan and Lagos. Lagos (MMIA) and Ibadan airport transfers, Lagos to Ibadan trips, corporate and wedding cars. Call +234 816 588 4235.";

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

const Index = () => {
  return (
    <main className="min-h-screen">
      <Seo
        title={HOME_TITLE}
        description={HOME_DESCRIPTION}
        path="/"
        jsonLd={graph(
          businessSchema(),
          websiteSchema(),
          serviceSchema({
            name: "Car hire and chauffeur service in Ibadan and Lagos",
            serviceType: "Car hire with driver",
            description: SITE.description,
            path: "/",
            areaServed: ["Ibadan", "Lagos", "Oyo State", "Lagos State", "Nigeria"],
          }),
          faqSchema(HOME_FAQS),
        )}
      />
      <Navbar />
      <Hero />
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <AnimatedSection>
        <AreasServed />
      </AnimatedSection>
      <AnimatedSection>
        <WhyChooseUs />
      </AnimatedSection>
      <AnimatedSection>
        <Stats />
      </AnimatedSection>
      <AnimatedSection>
        <Fleet />
      </AnimatedSection>
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection>
        <PricingCalculator />
      </AnimatedSection>
      <AnimatedSection>
        <FAQ />
      </AnimatedSection>
      <AnimatedSection>
        <BookingForm />
      </AnimatedSection>
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
