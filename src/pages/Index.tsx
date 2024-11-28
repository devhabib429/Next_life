import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { Globe, Users, Target, Sparkles, BarChart3 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Featured Initiatives */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Our Key Initiatives</h2>
              <p className="text-secondary/70 max-w-2xl mx-auto">
                Discover how we're making a difference through our strategic programs and initiatives.
              </p>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Sustainable Development",
                description: "Implementing eco-friendly projects that promote sustainable growth.",
                color: "bg-emerald-500"
              },
              {
                icon: Sparkles,
                title: "Education Empowerment",
                description: "Providing quality education and learning resources to communities.",
                color: "bg-blue-500"
              },
              {
                icon: BarChart3,
                title: "Economic Growth",
                description: "Supporting local businesses and entrepreneurship initiatives.",
                color: "bg-violet-500"
              }
            ].map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-6 hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-lg ${initiative.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <initiative.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{initiative.title}</h3>
                <p className="text-secondary/70 mb-4">{initiative.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;