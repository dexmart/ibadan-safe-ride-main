import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Seo from "@/components/Seo";
import { Card, CardContent } from "@/components/ui/card";
import {
  IBADAN_AREAS,
  INTERSTATE_DESTINATIONS,
  LAGOS_AREAS,
  LANDING_PAGES,
} from "@/seo/pages";
import { breadcrumbSchema, businessSchema, graph } from "@/seo/schema";

const GROUPS = [
  { heading: "Ibadan, Oyo State", link: "/car-hire-ibadan", areas: IBADAN_AREAS },
  { heading: "Lagos State", link: "/car-hire-lagos", areas: LAGOS_AREAS },
  { heading: "Interstate destinations", link: "/interstate-car-hire-nigeria", areas: INTERSTATE_DESTINATIONS },
];

const AreasWeServe = () => {
  return (
    <main className="min-h-screen">
      <Seo
        title="Areas We Serve | Car Hire in Ibadan, Lagos & Nigeria | Safety Plus"
        description="Every area Safety Plus Car Hire serves: Ibadan neighbourhoods, Lagos (Ikeja, Lekki, VI, Ikoyi), Lagos and Ibadan airports, and interstate trips across Nigeria."
        path="/areas-we-serve"
        jsonLd={graph(
          businessSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas We Serve", path: "/areas-we-serve" },
          ]),
        )}
      />
      <Navbar />

      <section className="bg-primary text-primary-foreground pt-28 sm:pt-32 pb-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-primary-foreground/70">
            <ol className="flex items-center gap-1">
              <li><Link to="/" className="hover:text-accent">Home</Link></li>
              <li aria-hidden="true"><ChevronRight className="w-4 h-4" /></li>
              <li aria-current="page" className="text-primary-foreground">Areas We Serve</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Areas We Serve in Ibadan, Lagos and Across Nigeria
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-3xl">
            Safety Plus Car Hire is based in Ibadan and serves Ibadan and Lagos every day, with
            airport transfers at Lagos (MMIA) and Ibadan airports and private trips to cities across Nigeria.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-12">
          {GROUPS.map((group) => (
            <div key={group.heading}>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{group.heading}</h2>
                <Link to={group.link} className="text-primary font-semibold hover:text-primary/80">
                  Learn more →
                </Link>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.areas.map((area) => (
                  <li key={area} className="px-4 py-2 rounded-full bg-card border border-border text-sm">
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Our services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {LANDING_PAGES.map((page) => (
                <Link key={page.path} to={page.path}>
                  <Card className="h-full hover:shadow-lg hover:border-accent transition-all">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-foreground">{page.navLabel}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{page.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default AreasWeServe;
