import { motion } from "framer-motion";
import { Book, Heart, Globe, Home, Leaf, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const DonationPrograms = () => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Donation Programs</h1>
          <p className="text-secondary/70 max-w-2xl mx-auto">
            Your generosity can transform lives. Choose from our various donation programs
            and help us create lasting positive change in communities worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Education Fund",
              icon: Book,
              description: "Support education initiatives for underprivileged children.",
              impact: "Educate 100+ children",
              amount: "$50/month"
            },
            {
              title: "Healthcare Support",
              icon: Heart,
              description: "Provide medical assistance to those in need.",
              impact: "Help 50+ patients",
              amount: "$100/month"
            },
            {
              title: "Global Outreach",
              icon: Globe,
              description: "Support our international development projects.",
              impact: "Aid 5+ communities",
              amount: "$200/month"
            },
            {
              title: "Housing Project",
              icon: Home,
              description: "Help build homes for displaced families.",
              impact: "House 10+ families",
              amount: "$150/month"
            },
            {
              title: "Environmental Care",
              icon: Leaf,
              description: "Support environmental conservation efforts.",
              impact: "Plant 1000+ trees",
              amount: "$75/month"
            }
          ].map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <program.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-secondary/70 mb-4">{program.description}</p>
              <div className="space-y-2 text-sm">
                <p className="text-emerald-600">Impact: {program.impact}</p>
                <p className="font-semibold">Suggested Donation: {program.amount}</p>
              </div>
              <Button className="w-full mt-4">
                <DollarSign className="w-4 h-4 mr-2" />
                Donate Now
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Other Ways to Give</h2>
          <p className="text-secondary/70 mb-6">
            Can't commit to a monthly donation? Make a one-time contribution or
            explore other ways to support our cause.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline">One-Time Donation</Button>
            <Button variant="outline">Legacy Giving</Button>
            <Button variant="outline">In-Kind Donations</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPrograms;