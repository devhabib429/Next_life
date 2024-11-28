import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Users, ArrowRight } from "lucide-react";

const DonationPrograms = () => {
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
              Donation Programs
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Support Our Cause</h1>
            <p className="text-xl text-secondary/80 leading-relaxed">
              Your generous donations help us create lasting positive change in communities worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Monthly Giving",
                description: "Make a sustained impact through regular monthly donations.",
                icon: Heart
              },
              {
                title: "One-Time Donation",
                description: "Support our cause with a single contribution.",
                icon: Target
              },
              {
                title: "Legacy Giving",
                description: "Leave a lasting legacy through planned giving.",
                icon: Users
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center">
                  <program.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                  <p className="text-secondary/70 mb-6">{program.description}</p>
                  <Button className="w-full">Donate Now</Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Your Impact</h2>
            <p className="text-secondary/70 max-w-2xl mx-auto">
              See how your donations make a difference in the lives of others.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { amount: "$25", impact: "Provides clean water for one person for a month" },
              { amount: "$50", impact: "Supplies educational materials for a student" },
              { amount: "$100", impact: "Funds medical supplies for a rural clinic" },
              { amount: "$250", impact: "Supports a small business startup" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">{item.amount}</div>
                  <p className="text-secondary/70">{item.impact}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonationPrograms;