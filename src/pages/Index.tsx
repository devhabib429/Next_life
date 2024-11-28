import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Globe, Users, Target, Sparkles, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[90vh] relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 -z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop')] bg-cover bg-center opacity-5 -z-20" />
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
              Transforming Lives Together
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Creating Positive Change
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                For a Better World
              </span>
            </h1>
            <p className="text-xl text-secondary/80 mb-8 leading-relaxed">
              Join our mission to empower communities, protect the environment, and build a sustainable future 
              through innovative solutions and collective action.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group">
                Get Involved
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/donors">
                <Button size="lg" variant="outline">
                  Our Impact
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-b from-muted to-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, number: "50K+", label: "Lives Impacted", color: "text-pink-500" },
              { icon: Globe, number: "30+", label: "Countries Reached", color: "text-emerald-500" },
              { icon: Users, number: "1000+", label: "Active Volunteers", color: "text-blue-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-8 text-center hover:shadow-lg transition-shadow"
              >
                <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-secondary/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                <Button variant="link" className="p-0">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;