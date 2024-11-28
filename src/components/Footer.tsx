import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NGOWebverse
            </h3>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Making a difference in communities through sustainable development and empowerment.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/projects", label: "Our Projects" },
                { to: "/donors", label: "Our Donors" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-secondary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-secondary-foreground/80">
                <MapPin className="w-5 h-5 text-accent" />
                123 NGO Street, City, 12345
              </li>
              <li className="flex items-center gap-2 text-secondary-foreground/80">
                <Mail className="w-5 h-5 text-accent" />
                contact@ngowebverse.org
              </li>
              <li className="flex items-center gap-2 text-secondary-foreground/80">
                <Phone className="w-5 h-5 text-accent" />
                (555) 123-4567
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="p-2 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-accent" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-secondary-foreground/10 text-center">
          <p className="text-secondary-foreground/60">
            &copy; {new Date().getFullYear()} NGOWebverse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;