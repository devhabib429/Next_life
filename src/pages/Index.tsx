import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Globe, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[90vh] relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 -z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop')] bg-cover bg-center opacity-10 -z-20" />
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              Welcome to NGOWebverse
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Making the World Better, 
              <span className="text-primary">Together</span>
            </h1>
            <p className="text-xl text-secondary/80 mb-8 leading-relaxed">
              Join us in our mission to create positive change through sustainable development 
              and community empowerment initiatives worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group">
                Get Involved
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, number: "50K+", label: "Lives Impacted" },
              { icon: Globe, number: "30+", label: "Countries Reached" },
              { icon: Users, number: "1000+", label: "Active Volunteers" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-8 text-center"
              >
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-secondary/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-secondary/70 max-w-2xl mx-auto">
              Discover our latest initiatives making real impact in communities worldwide.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Clean Water Initiative",
                description: "Providing access to clean water in rural communities.",
                image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&auto=format&fit=crop"
              },
              {
                title: "Education for All",
                description: "Building schools and supporting education programs.",
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop"
              },
              {
                title: "Sustainable Agriculture",
                description: "Promoting sustainable farming practices.",
                image: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?w=800&auto=format&fit=crop"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="glass-card overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-secondary/70 mb-4">{project.description}</p>
                    <Button variant="link" className="p-0">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;