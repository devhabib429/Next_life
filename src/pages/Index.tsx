import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding min-h-[90vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container text-center z-10"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            Making a Difference Together
          </span>
          <h1 className="heading-xl mb-6 max-w-4xl mx-auto">
            Empowering Communities for a Better Tomorrow
          </h1>
          <p className="body-text mb-8 max-w-2xl mx-auto">
            Join us in our mission to create lasting positive change through sustainable development and community empowerment.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Involved
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-secondary mb-6">
              Our Mission
            </span>
            <h2 className="heading-lg mb-6">
              Creating Sustainable Impact
            </h2>
            <p className="body-text max-w-2xl mx-auto">
              We believe in empowering communities through education, sustainable development, and grassroots initiatives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Education",
                description: "Providing quality education and learning resources to underserved communities.",
                icon: "📚"
              },
              {
                title: "Healthcare",
                description: "Ensuring access to essential healthcare services and medical support.",
                icon: "🏥"
              },
              {
                title: "Environment",
                description: "Promoting sustainable practices and environmental conservation efforts.",
                icon: "🌱"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-6 glass-card hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-secondary/70">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding bg-primary/5">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              Our Impact
            </span>
            <h2 className="heading-lg mb-6">
              Making Real Change Happen
            </h2>
            <p className="body-text max-w-2xl mx-auto">
              Through dedication and community support, we've achieved meaningful results in our mission.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Lives Impacted" },
              { number: "100+", label: "Projects Completed" },
              { number: "30+", label: "Communities Served" },
              { number: "1000+", label: "Volunteers" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center glass-card p-8"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-secondary/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;