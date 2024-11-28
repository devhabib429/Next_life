import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Handshake, Building2, Globe, Users } from "lucide-react";

const Partnership = () => {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent -z-10" />
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              Partner With Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Strategic Partnerships</h1>
            <p className="text-xl text-secondary/80 leading-relaxed">
              Join forces with us to create meaningful impact and drive positive change together.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "NGO Partnerships",
                description: "Collaborate with other organizations to amplify our impact.",
                icon: Building2
              },
              {
                title: "Corporate Alliances",
                description: "Create meaningful partnerships with businesses.",
                icon: Handshake
              },
              {
                title: "Global Networks",
                description: "Join our international network of change-makers.",
                icon: Globe
              },
              {
                title: "Community Partners",
                description: "Work together with local community organizations.",
                icon: Users
              }
            ].map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <type.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                  <p className="text-secondary/70 mb-6">{type.description}</p>
                  <Button className="w-full">Learn More</Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Partnership Benefits</h2>
            <p className="text-secondary/70 max-w-2xl mx-auto">
              Discover the advantages of partnering with our organization.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Access to our global network",
              "Shared resources and expertise",
              "Enhanced visibility and reach",
              "Joint funding opportunities",
              "Collaborative project development",
              "Impact measurement support"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center">
                  <p className="text-secondary/70">{benefit}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnership;