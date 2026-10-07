import { Button } from "@/components/ui/button";
import { Clock, Car, Shield, Plane } from "lucide-react";
import heroImage from "@/assets/fleet-prado-black.png";

const Hero = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    bookingSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Black Toyota Prado from Safety Plus Car Hire, Ibadan"
          width={1600}
          height={900}
          {...{ fetchpriority: "high" }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Car Hire in Ibadan &amp; Lagos: Your Safe Ride, Anytime
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Affordable, reliable and comfortable car hire with professional drivers in Ibadan and Lagos. Airport transfers at Lagos (MMIA) and Ibadan airports, Lagos to Ibadan trips and interstate travel across Nigeria, 24/7.
          </p>
          
          <Button
            variant="hero"
            size="lg"
            onClick={scrollToBooking}
            className="mb-12"
          >
            Book a Ride Now
          </Button>

          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex flex-col items-center text-center p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg">
              <Clock className="w-8 h-8 text-accent mb-2" />
              <span className="text-sm font-medium text-primary-foreground">24/7 Service</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg">
              <Car className="w-8 h-8 text-accent mb-2" />
              <span className="text-sm font-medium text-primary-foreground">Clean Vehicles</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg">
              <Shield className="w-8 h-8 text-accent mb-2" />
              <span className="text-sm font-medium text-primary-foreground">Professional Drivers</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg">
              <Plane className="w-8 h-8 text-accent mb-2" />
              <span className="text-sm font-medium text-primary-foreground">Airport Transfers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
