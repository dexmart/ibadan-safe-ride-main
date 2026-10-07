import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import serviceAirport from "@/assets/fleet-corolla.png";
import serviceDailyHire from "@/assets/fleet-camry.png";
import serviceCorporate from "@/assets/fleet-prado-blue.png";
import serviceOccasions from "@/assets/fleet-bus.png";

const services = [
  {
    image: serviceAirport,
    title: "Airport Transfers",
    description: "Reliable pickups and drop-offs at Lagos (MMIA) and Ibadan airports.",
  },
  {
    image: serviceDailyHire,
    title: "Daily Car Hire",
    description: "Rent clean, air-conditioned vehicles with or without a driver.",
  },
  {
    image: serviceCorporate,
    title: "Corporate Rides",
    description: "Professional service for business meetings and conferences.",
  },
  {
    image: serviceOccasions,
    title: "Special Occasions",
    description: "Comfortable cars for weddings, family trips, or events.",
  },
];

const Services = () => {
  const handlePriceList = () => {
    window.open("https://wa.me/2348165884235?text=Hi,%20I'd%20like%20to%20see%20your%20price%20list", "_blank");
  };

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive transportation solutions tailored to your needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} by Safety Plus Car Hire`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg" onClick={handlePriceList}>
            See Full Price List
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
