import { Clock, BadgeCheck, Car, Smile, Plane } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Ready to serve you any time, day or night",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Pricing",
    description: "No hidden fees, clear upfront costs",
  },
  {
    icon: Car,
    title: "Clean, Inspected Vehicles",
    description: "Regularly maintained and sanitized",
  },
  {
    icon: Smile,
    title: "Courteous, Verified Drivers",
    description: "Professional and background-checked",
  },
  {
    icon: Plane,
    title: "Fast Airport Pickups",
    description: "Always on time for your flights",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Ride With Safety Plus
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the difference with our premium service
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
