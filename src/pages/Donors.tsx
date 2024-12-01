import { motion } from "framer-motion";
import { Users, Building2, Users2, DollarSign, PieChart, BarChart, Award, Heart, Globe2, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const Donors = () => {
  const donorCategories = [
    {
      title: "Individual Donors",
      icon: Users,
      description: "Passionate individuals making a difference",
      donors: [
        { name: "Emily & James Wilson", amount: "$25,000", date: "2024-03-01", impact: "Funded complete education for 50 children", badge: "Platinum Donor" },
        { name: "Dr. Sarah Chen", amount: "$15,000", date: "2024-02-28", impact: "Established 3 medical camps", badge: "Gold Donor" },
        { name: "Robert Martinez", amount: "$10,000", date: "2024-02-25", impact: "Supported clean water projects", badge: "Silver Donor" }
      ]
    },
    {
      title: "Corporate Partners",
      icon: Building2,
      description: "Leading businesses driving social change",
      donors: [
        { name: "TechVision Global", amount: "$150,000", date: "2024-03-01", impact: "Digital literacy program sponsor", badge: "Diamond Partner" },
        { name: "EcoSolutions Inc.", amount: "$100,000", date: "2024-02-15", impact: "Sustainable development initiatives", badge: "Platinum Partner" },
        { name: "Future Finance Group", amount: "$75,000", date: "2024-02-10", impact: "Microfinance program supporter", badge: "Gold Partner" }
      ]
    },
    {
      title: "Foundation Partners",
      icon: Users2,
      description: "Foundations committed to lasting change",
      donors: [
        { name: "Global Change Foundation", amount: "$200,000", date: "2024-03-01", impact: "Multi-year education initiative", badge: "Legacy Partner" },
        { name: "Hope & Progress Trust", amount: "$175,000", date: "2024-02-20", impact: "Healthcare infrastructure development", badge: "Impact Leader" },
        { name: "Future Generation Fund", amount: "$150,000", date: "2024-02-15", impact: "Youth empowerment programs", badge: "Change Maker" }
      ]
    }
  ];

  const impactMetrics = [
    { icon: Globe2, value: "50+", label: "Countries Reached" },
    { icon: Users, value: "1M+", label: "Lives Impacted" },
    { icon: Trophy, value: "95%", label: "Success Rate" },
    { icon: Heart, value: "$5M+", label: "Funds Raised" }
  ];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">Our Supporters</span>
          <h1 className="text-4xl font-bold mb-6 gradient-text">Champions of Change</h1>
          <p className="text-xl text-secondary/70 max-w-3xl mx-auto mb-12">
            We celebrate the extraordinary individuals, corporations, and foundations whose generosity 
            and commitment drive our mission forward. Together, we're creating lasting positive change.
          </p>

          {/* Impact Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <metric.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold gradient-text">{metric.value}</div>
                <div className="text-sm text-secondary/70">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {donorCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="glass-card p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-full bg-primary/10">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold">{category.title}</h2>
                    <p className="text-sm text-secondary/70">{category.description}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {category.donors.map((donor) => (
                    <div
                      key={donor.name}
                      className="p-4 rounded-lg bg-white/50 hover:bg-white/80 transition-colors border border-primary/10"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-semibold text-lg">{donor.name}</div>
                        <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                          {donor.badge}
                        </span>
                      </div>
                      <div className="text-primary font-medium">{donor.amount}</div>
                      <div className="text-sm text-secondary/60 mt-1">{donor.date}</div>
                      <div className="text-sm text-emerald-600 mt-2 font-medium flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        {donor.impact}
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6" variant="outline">
                  View All {category.title}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 glass-card max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-4">Join Our Community of Donors</h2>
          <p className="text-secondary/70 mb-6">
            Your support can help us create lasting change. Join our community of donors and make a difference today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="px-8">
              <DollarSign className="w-4 h-4 mr-2" />
              Donate Now
            </Button>
            <Button variant="outline">Learn More About Impact</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Donors;