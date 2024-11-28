import { motion } from "framer-motion";
import { Building2, Award, Target, Users, BarChart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CorporateSponsorship = () => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Corporate Sponsorship</h1>
          <p className="text-secondary/70 max-w-2xl mx-auto">
            Partner with us to make a meaningful impact while enhancing your corporate
            social responsibility initiatives and brand visibility.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Platinum Sponsor",
              amount: "$50,000+",
              benefits: [
                "Premium logo placement",
                "VIP event access",
                "Custom impact report",
                "Media recognition",
                "Employee engagement opportunities"
              ]
            },
            {
              title: "Gold Sponsor",
              amount: "$25,000+",
              benefits: [
                "Logo on materials",
                "Event tickets",
                "Quarterly reports",
                "Social media mentions",
                "Volunteer opportunities"
              ]
            },
            {
              title: "Silver Sponsor",
              amount: "$10,000+",
              benefits: [
                "Website recognition",
                "Event invitations",
                "Impact updates",
                "Brand visibility",
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
              className="glass-card p-6"
            >
              <Building2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{tier.title}</h3>
              <p className="text-2xl font-bold text-primary mb-4">{tier.amount}</p>
              <ul className="space-y-2 mb-6">
                {tier.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-secondary/70">
                    <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <Button className="w-full">Become a Sponsor</Button>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <Target className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-4">Impact Areas</h3>
            <p className="text-secondary/70 mb-4">
              Your sponsorship directly supports our key initiatives:
            </p>
            <ul className="space-y-2">
              {[
                "Education and Skills Development",
                "Healthcare Access",
                "Environmental Conservation",
                "Community Development",
                "Youth Empowerment"
              ].map((area, i) => (
                <li key={i} className="flex items-center text-secondary/70">
                  <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                  {area}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <Award className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-4">Why Partner With Us?</h3>
            <ul className="space-y-4">
              {[
                {
                  title: "Brand Enhancement",
                  description: "Align with a respected charitable organization"
                },
                {
                  title: "Employee Engagement",
                  description: "Meaningful volunteer opportunities for your team"
                },
                {
                  title: "Social Impact",
                  description: "Create lasting positive change in communities"
                },
                {
                  title: "Marketing Exposure",
                  description: "Reach our extensive network of supporters"
                }
              ].map((benefit, i) => (
                <li key={i} className="text-secondary/70">
                  <span className="font-semibold text-primary">{benefit.title}: </span>
                  {benefit.description}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Make an Impact?</h2>
          <p className="text-secondary/70 mb-6">
            Contact our corporate partnerships team to discuss sponsorship opportunities
            tailored to your organization's goals.
          </p>
          <Button size="lg">Contact Us Today</Button>
        </div>
      </div>
    </div>
  );
};

export default CorporateSponsorship;