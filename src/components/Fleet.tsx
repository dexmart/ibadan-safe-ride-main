import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import fleetPradoBlue from "@/assets/fleet-prado-blue.png";
import fleetCamry from "@/assets/fleet-camry.png";
import fleetBus from "@/assets/fleet-bus.png";
import { Users, Briefcase, PartyPopper } from "lucide-react";

const fleetCategories = [
  {
    image: fleetCamry,
    title: "Executive Sedans",
    description: "Perfect for business trips and airport transfers",
    capacity: "1-4 passengers",
    icon: Briefcase,
  },
  {
    image: fleetPradoBlue,
    title: "Luxury SUVs",
    description: "Spacious and comfortable for families and groups",
    capacity: "1-6 passengers",
    icon: Users,
  },
  {
    image: fleetBus,
    title: "Executive Minibus",
    description: "Ideal for corporate events and special occasions",
    capacity: "7-14 passengers",
    icon: PartyPopper,
  },
];

const Fleet = () => {
  return (
    <section id="fleet" className="py-16 sm:py-20 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Fleet
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our range of clean, well-maintained vehicles for every occasion
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleetCategories.map((category, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={`${category.title} for hire in Ibadan and Lagos`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  {category.description}
                </p>
                <p className="text-sm font-medium text-foreground">
                  Capacity: {category.capacity}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
