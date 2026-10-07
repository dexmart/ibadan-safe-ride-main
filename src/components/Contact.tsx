import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg">
            Get in touch with us for bookings and inquiries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Phone Card */}
          <Card className="border-border hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                  <a
                    href="tel:+2348165884235"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    +234 816 588 4235
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* WhatsApp Card */}
          <Card className="border-border hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                  <a
                    href="https://wa.me/2348165884235"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Message Us
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Email Card */}
          <Card className="border-border hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <a
                    href="mailto:Safetyplusventure@gmail.com"
                    className="text-muted-foreground hover:text-accent transition-colors break-all"
                  >
                    Safetyplusventure@gmail.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5 text-accent" />
            <span>Ibadan, Oyo State &middot; Serving Ibadan, Lagos &amp; across Nigeria</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Clock className="w-5 h-5 text-accent" />
            <span>24/7 Service Available</span>
          </div>

          <Button
            variant="cta"
            size="lg"
            onClick={() => {
              const bookingSection = document.getElementById("booking");
              if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Book a Ride Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
