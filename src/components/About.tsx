import aboutImage from "@/assets/fleet-prado-side.png";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src={aboutImage}
              alt="Clean Toyota Prado SUV for hire in Ibadan"
              loading="lazy"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Built on Trust, Driven by Safety
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At Safety Plus Car Hire, we make every trip safe, smooth, and stress-free. Our drivers are courteous and professional, our cars are clean and air-conditioned, and our prices are transparent.
              </p>
              <p>
                Based in Ibadan, Oyo State, we serve Ibadan and Lagos every day. Whether it's an airport transfer at Lagos or Ibadan airport, a business trip, a Lagos to Ibadan journey or a weekend getaway, we'll get you there on time with comfort and care.
              </p>
              <p className="font-medium text-foreground">
                Your safety and satisfaction are our top priorities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
