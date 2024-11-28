import { motion } from "framer-motion";
import { Handshake, Target, Users, Building, ChartBar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Partnership = () => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Partner with Us</h1>
          <p className="text-secondary/70 max-w-2xl mx-auto">
            Join forces with us to create meaningful impact. We believe in the power of
            collaboration to drive positive change in communities worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              title: "Strategic Partnerships",
              icon: Handshake,
              description: "Collaborate on long-term initiatives that align with our mission.",
              benefits: [
                "Joint program development",
                "Shared resources and expertise",
                "Enhanced community impact"
              ]
            },
            {
              title: "Project Collaboration",
              icon: Target,
              description: "Work together on specific projects or campaigns.",
              benefits: [
                "Focused objectives",
                "Measurable outcomes",
                "Time-bound achievements"
              ]
            },
            {
              title: "Knowledge Exchange",
              icon: Users,
              description: "Share expertise and best practices for mutual growth.",
              benefits: [
                "Capacity building",
                "Innovation sharing",
                "Professional development"
              ]
            },
            {
              title: "Corporate Alliances",
              icon: Building,
              description: "Create meaningful partnerships with businesses.",
              benefits: [
                "CSR initiatives",
                "Employee engagement",
                "Sustainable development"
              ]
            }
          ].map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <type.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
              <p className="text-secondary/70 mb-4">{type.description}</p>
              <ul className="space-y-2">
                {type.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-secondary/70">
                    <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-6">Learn More</Button>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 text-center">
            <ChartBar className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">Our Impact Together</h2>
            <p className="text-secondary/70 mb-6">
              Through partnerships, we've achieved remarkable results. Join us in creating
              even greater impact for communities in need.
            </p>
            <Button size="lg">Become a Partner</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;