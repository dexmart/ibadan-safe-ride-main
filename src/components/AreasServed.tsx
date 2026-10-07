import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { LANDING_PAGES } from "@/seo/pages";

const AreasServed = () => {
  return (
    <section id="areas" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Car Hire in Ibadan, Lagos and Across Nigeria
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Based in Ibadan, Oyo State, we serve Ibadan and Lagos every day, with airport
            transfers at Lagos (MMIA) and Ibadan airports and private trips to cities across Nigeria.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {LANDING_PAGES.map((page) => (
            <Link key={page.path} to={page.path} className="group">
              <Card className="h-full border-border hover:shadow-lg hover:border-accent transition-all duration-300">
                <CardContent className="pt-6 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {page.navLabel}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{page.eyebrow}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground mt-1 group-hover:translate-x-1 transition-transform" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/areas-we-serve" className="text-primary hover:text-primary/80 font-semibold">
            See every area we serve →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AreasServed;
