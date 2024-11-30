import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[calc(100vh-76px)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Making a Difference, One Life at a Time
          </h1>
          <p className="text-lg md:text-xl text-secondary/70 mb-8 max-w-2xl mx-auto">
            Join us in our mission to create positive change and empower communities worldwide through sustainable development and compassionate action.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8"
            >
              Donate Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/contact')}
              className="border-primary text-primary hover:bg-primary/10"
            >
              Contact Us Today
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;