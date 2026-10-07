import { Phone, Mail, MapPin, MessageCircle, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { LANDING_PAGES } from "@/seo/pages";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Safety Plus Car Hire logo" 
                loading="lazy"
                className="h-28 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Your trusted partner for safe and reliable car hire, chauffeur service and airport transfers in Ibadan, Lagos and across Nigeria.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+2348165884235"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                +234 816 588 4235
              </a>
              <a
                href="mailto:Safetyplusventure@gmail.com"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                Safetyplusventure@gmail.com
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                Ibadan, Oyo State, Nigeria
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="/#about" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                About Us
              </a>
              <a href="/#services" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Our Services
              </a>
              <a href="/#testimonials" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Testimonials
              </a>
              <a href="/#faq" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                FAQ
              </a>
              <a href="/#booking" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Book Now
              </a>
            </div>
          </div>

          {/* Areas & Services */}
          <div>
            <h4 className="font-semibold mb-4">Areas &amp; Services</h4>
            <div className="space-y-2 text-sm">
              {LANDING_PAGES.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {page.navLabel}
                </Link>
              ))}
              <Link to="/areas-we-serve" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                All Areas We Serve
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-3 text-sm">
              <a
                href="https://wa.me/2348165884235"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="https://www.google.com/search?sca_esv=6d56a4b81d83c992&hl=en-GB&gl=ng&output=search&kgmid=/g/11mv4ly7y5&q=Safety+plus+car+hire+services&shndl=30&shem=ptotplc,shrtsdl&source=sh/x/loc/act/m1/4&kgs=df511c4ac0cb653d&utm_source=ptotplc,shrtsdl,sh/x/loc/act/m1/4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Find Us on Google Maps
              </a>
            </div>
            <div className="mt-4 pt-4 border-t border-primary-foreground/20">
              <div className="flex items-center gap-2 text-primary-foreground/60 text-xs">
                <Shield className="w-4 h-4" />
                <span>Trusted & Verified Service</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Safety Plus Car Hire. All Rights Reserved. | Built by{" "}
            <a 
              href="https://rellatechvirtualassistantservices.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Rella Tech Virtual Assistant Services
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
