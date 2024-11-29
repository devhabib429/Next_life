import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Heart, Globe, Users, Shield } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    scrollToTop();
  };

  return (
    <footer className="bg-gradient-to-b from-secondary to-secondary/95 text-secondary-foreground">
      <div className="container mx-auto">
        {/* Top Section with Mission */}
        <div className="border-b border-secondary-foreground/10">
          <div className="px-6 py-12 md:py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Heart className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  NGOWebverse
                </h3>
              </div>
              <p className="text-secondary-foreground/80 leading-relaxed max-w-md">
                Making a difference in communities through sustainable development and empowerment. Join us in creating positive change around the world.
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-accent">Our Impact</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Globe, label: "Global Reach", value: "30+ Countries" },
                  { icon: Users, label: "Lives Changed", value: "50K+" },
                  { icon: Heart, label: "Projects", value: "120+" },
                  { icon: Shield, label: "Success Rate", value: "95%" },
                ].map((stat, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <stat.icon className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <p className="text-sm text-secondary-foreground/60">{stat.label}</p>
                      <p className="font-semibold text-accent">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-accent">Newsletter</h4>
              <p className="text-secondary-foreground/80">Stay updated with our latest initiatives and success stories.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-secondary-foreground/10 focus:outline-none focus:border-accent"
                />
                <button className="px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section with Links */}
        <div className="px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-secondary-foreground/10">
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
                    className="text-secondary-foreground/80 hover:text-accent transition-colors inline-block"
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-secondary-foreground/80">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <span>123 NGO Street, Charity Square<br />New York, NY 12345</span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/80">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:contact@ngowebverse.org" className="hover:text-accent transition-colors">
                  contact@ngowebverse.org
                </a>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/80">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+15551234567" className="hover:text-accent transition-colors">
                  (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Get Involved</h4>
            <ul className="space-y-3">
              {[
                { to: "/volunteer", label: "Volunteer Opportunities" },
                { to: "/donation-programs", label: "Donation Programs" },
                { to: "/partnership", label: "Partner with Us" },
                { to: "/fundraising", label: "Fundraising Events" },
                { to: "/corporate-sponsorship", label: "Corporate Sponsorship" }
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-secondary-foreground/80 hover:text-accent transition-colors inline-block"
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Connect With Us</h4>
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="p-3 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
            <p className="text-secondary-foreground/60 text-sm">
              Follow us on social media for daily updates and inspiring stories.
            </p>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="px-6 py-8 text-center">
          <p className="text-secondary-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} NGOWebverse. All rights reserved. | 
            <a href="#" className="hover:text-accent ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-accent ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
