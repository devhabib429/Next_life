import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/donors", label: "Donors" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-accent/10">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NGOWebverse
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-secondary relative py-2 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {link.label}
              </Link>
            ))}
            <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
              Donate Now
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-lg">
              <div className="flex flex-col gap-6 mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-lg font-medium text-secondary hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                  Donate Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;