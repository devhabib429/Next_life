import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NGOWebverse</h3>
            <p className="text-secondary-foreground/80">
              Making a difference in communities through sustainable development and empowerment.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-primary transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>123 NGO Street</li>
              <li>City, State 12345</li>
              <li>contact@ngowebverse.org</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 text-center text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} NGOWebverse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;