import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Award, Target, ArrowRight } from "lucide-react";

const CorporateSponsorship = () => {
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
              Corporate Sponsorship
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Partner for Impact</h1>
            <p className="text-xl text-secondary/80 leading-relaxed">
              Join our network of corporate sponsors and make a lasting difference in communities worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Platinum Sponsor",
                amount: "$50,000+",
                benefits: [
                  "Premium logo placement",
                  "VIP event access",
                  "Custom impact reports",
                  "Media recognition",
                  "Employee engagement opportunities"
                ]
              },
              {
                title: "Gold Sponsor",
                amount: "$25,000+",
                benefits: [
                  "Featured logo placement",
                  "Event invitations",
                  "Quarterly impact reports",
                  "Social media recognition",
                  "Volunteer opportunities"
                ]
              },
              {
                title: "Silver Sponsor",
                amount: "$10,000+",
                benefits: [
                  "Logo on website",
                  "Event recognition",
                  "Annual impact report",
                  "Newsletter features",
                  "Team building activities"
                ]
              }
            ].map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{tier.title}</h3>
                  <p className="text-2xl font-bold text-primary mb-4">{tier.amount}</p>
                  <ul className="space-y-2 mb-6">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-secondary/70">
                        <Award className="w-4 h-4 mr-2 text-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Become a Sponsor</Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Partner With Us?</h2>
            <p className="text-secondary/70 max-w-2xl mx-auto">
              Discover the benefits of becoming a corporate sponsor.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Enhanced brand reputation",
              "Social impact measurement",
              "Employee engagement",
              "Marketing opportunities",
              "Tax benefits",
              "Community recognition",
              "Networking opportunities",
              "Sustainable development goals"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center">
                  <Target className="w-8 h-8 mx-auto mb-3 text-primary" />
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

export default CorporateSponsorship;