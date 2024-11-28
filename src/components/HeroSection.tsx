import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import DonationModal from "./DonationModal";

const HeroSection = () => {
  const [showDonations, setShowDonations] = useState(false);

  return (
    <section className="min-h-[90vh] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 -z-10" />
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1600&auto=format&fit=crop')] 
        bg-cover bg-center opacity-[0.03] -z-20" 
      />
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
              🌟 Making Dreams Come True
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Transform Lives
              <span className="block mt-2 bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
                Through Giving
              </span>
            </h1>
            <p className="text-xl text-secondary/80 mb-8 leading-relaxed max-w-xl">
              Join our mission to create lasting change through innovative solutions 
              and sustainable development. Every donation makes a difference.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Donate Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => setShowDonations(true)}
                className="border-primary/20 hover:bg-primary/5"
              >
                View Recent Donations
              </Button>
            </div>

            {/* Impact Numbers */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { value: "50K+", label: "Lives Impacted" },
                { value: "120+", label: "Active Projects" },
                { value: "30+", label: "Countries Reached" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-colors"
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-secondary/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&auto=format&fit=crop"
                alt="Hero"
                className="rounded-2xl shadow-2xl shadow-primary/20 border-8 border-white"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      <DonationModal open={showDonations} onOpenChange={setShowDonations} />
    </section>
  );
};

export default HeroSection;