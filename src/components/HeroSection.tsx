import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[calc(100vh-76px)] flex items-center justify-center overflow-hidden">
      {/* Background with professional gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-primary/20" />
      
      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),rgba(99,102,241,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(129,140,248,0.1),rgba(129,140,248,0))]" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 px-6 mx-auto">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-white/90">Transforming Lives Through Innovation</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
              >
                <span className="text-white">Building a Better</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Future Together
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg lg:text-xl text-white/80 mb-8 max-w-xl"
              >
                Join our mission to create lasting impact through innovative solutions 
                and transformative action. Together, we can shape a brighter tomorrow.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 h-14 text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/20 text-white hover:bg-white/10 px-8 h-14 text-lg rounded-full backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => navigate('/about')}
                >
                  Learn More
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Image/Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-accent/10 to-transparent rounded-3xl" />
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Professional workspace"
                  className="rounded-3xl shadow-2xl shadow-black/20 border border-white/10 backdrop-blur-sm"
                />
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/10"
          >
            {[
              { number: "15K+", label: "Lives Impacted" },
              { number: "100+", label: "Global Projects" },
              { number: "98%", label: "Success Rate" },
              { number: "50+", label: "Countries Reached" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</h3>
                <p className="text-white/60 font-medium">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;