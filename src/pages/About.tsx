import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              About Us
            </span>
            <h1 className="heading-lg mb-6">Our Story & Mission</h1>
            <p className="body-text max-w-2xl mx-auto">
              We are dedicated to creating positive change through sustainable development and community empowerment initiatives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6 glass-card h-full">
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-secondary/70">
                  To create a world where every community has the resources and opportunities 
                  they need to thrive and prosper sustainably.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-6 glass-card h-full">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-secondary/70">
                  To empower communities through education, sustainable development, 
                  and grassroots initiatives that create lasting positive change.
                </p>
              </Card>
            </motion.div>
          </div>

          <div className="text-center">
            <h2 className="heading-lg mb-8">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Sustainability",
                  description: "We believe in creating long-term solutions that benefit both people and the planet."
                },
                {
                  title: "Transparency",
                  description: "We maintain open communication and accountability in all our operations."
                },
                {
                  title: "Community-First",
                  description: "We prioritize community needs and involvement in all our initiatives."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="p-6 glass-card">
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-secondary/70">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;