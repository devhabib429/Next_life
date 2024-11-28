import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { Globe, Users, Target, Sparkles, BarChart3, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Mission Statement */}
      <section className="bg-gradient-to-b from-white to-primary/5 py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-secondary/70 leading-relaxed">
              We believe in creating lasting change through sustainable development and community empowerment. 
              Our mission is to build a world where every individual has access to education, healthcare, and opportunities for growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Our Impact Areas</h2>
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
                description: "Implementing eco-friendly projects that promote sustainable growth and environmental conservation.",
                color: "bg-emerald-500"
              },
              {
                icon: Sparkles,
                title: "Education Empowerment",
                description: "Providing quality education and learning resources to underserved communities worldwide.",
                color: "bg-blue-500"
              },
              {
                icon: BarChart3,
                title: "Economic Growth",
                description: "Supporting local businesses and entrepreneurship initiatives to foster economic independence.",
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

      {/* Success Stories */}
      <section className="py-24 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-secondary/70 max-w-2xl mx-auto">
              Real stories of impact and transformation from our beneficiaries around the world.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
                title: "Community Education Center",
                location: "Rural Tanzania",
                description: "Established a learning center serving over 500 children annually."
              },
              {
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
                title: "Women Entrepreneurship",
                location: "New Delhi, India",
                description: "Empowered 200+ women through business skills training."
              },
              {
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
                title: "Digital Literacy Program",
                location: "Colombia",
                description: "Trained 1000+ youth in essential digital skills."
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                  <p className="text-primary font-medium mb-3">{story.location}</p>
                  <p className="text-secondary/70">{story.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Join Us in Making a Difference</h2>
            <p className="text-xl mb-8 opacity-90">
              Your support can help us create lasting change in communities around the world.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
              >
                Donate Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Become a Volunteer
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;