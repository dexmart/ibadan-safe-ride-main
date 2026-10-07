import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Sections live on the home page; from any other page, go home first.
  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSectionClick = (event: React.MouseEvent, id: string) => {
    event.preventDefault();
    scrollToSection(id);
  };

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "About Us", id: "about" },
    { label: "Our Fleet", id: "fleet" },
    { label: "Areas", id: "areas" },
    { label: "Pricing", id: "pricing" },
    { label: "FAQ", id: "faq" },
    { label: "Contact Us", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? "bg-primary/80 backdrop-blur-md shadow-lg" : "bg-primary"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={(event) => handleSectionClick(event, "hero")}
            className="flex items-center gap-3 group"
            aria-label="Safety Plus Car Hire home"
          >
            <img 
              src={logo} 
              alt="Safety Plus Car Hire logo" 
              width={192}
              height={192}
              className="h-40 sm:h-48 w-auto brightness-0 invert transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`/#${link.id}`}
                onClick={(event) => handleSectionClick(event, link.id)}
                className="text-primary-foreground/90 hover:text-accent transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="cta"
              size="sm"
              onClick={() => scrollToSection("booking")}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/20">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`/#${link.id}`}
                  onClick={(event) => handleSectionClick(event, link.id)}
                  className="text-primary-foreground/90 hover:text-accent transition-colors font-medium text-left py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="cta"
                onClick={() => scrollToSection("booking")}
                className="w-full"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
