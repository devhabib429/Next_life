import { motion } from "framer-motion";
import { Users, Building2, Users2, DollarSign, PieChart, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Donors = () => {
  const donorCategories = [
    {
      title: "Individual Donors",
      icon: Users,
      description: "Passionate individuals contributing to positive change",
      donors: [
        { name: "John Smith", amount: "$5,000", date: "2024-03-01", impact: "Funded 2 educational programs" },
        { name: "Sarah Johnson", amount: "$3,500", date: "2024-02-28", impact: "Supported clean water initiative" },
        { name: "Michael Brown", amount: "$2,000", date: "2024-02-25", impact: "Helped 10 families" }
      ]
    },
    {
      title: "Corporate Partners",
      icon: Building2,
      description: "Organizations committed to social responsibility",
      donors: [
        { name: "Tech Solutions Inc.", amount: "$50,000", date: "2024-03-01", impact: "Major education program sponsor" },
        { name: "Green Energy Corp", amount: "$35,000", date: "2024-02-15", impact: "Environmental project funding" },
        { name: "Global Finance Ltd", amount: "$25,000", date: "2024-02-10", impact: "Community development support" }
      ]
    },
    {
      title: "Community Groups",
      icon: Users2,
      description: "Collective giving for greater impact",
      donors: [
        { name: "Local Community Trust", amount: "$15,000", date: "2024-03-01", impact: "Youth program funding" },
        { name: "University Alumni Group", amount: "$12,000", date: "2024-02-20", impact: "Scholarship program" },
        { name: "Sports Club Association", amount: "$8,000", date: "2024-02-15", impact: "Health initiative support" }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-b from-muted to-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Our Generous Supporters</h1>
          <p className="text-secondary/70 max-w-2xl mx-auto mb-8">
            We believe in complete transparency and accountability. Every donation makes a difference, 
            and we're proud to showcase how our supporters are helping create positive change.
          </p>
          
          {/* Impact Statistics */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
            {[
              { icon: DollarSign, label: "Total Donations", value: "$250K+" },
              { icon: PieChart, label: "Project Success Rate", value: "95%" },
              { icon: BarChart, label: "Community Impact Score", value: "9.8/10" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-lg bg-white shadow-sm"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-semibold text-lg">{stat.value}</div>
                <div className="text-sm text-secondary/60">{stat.label}</div>
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
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-semibold">{category.title}</h2>
                </div>
                <p className="text-secondary/70 mb-6">{category.description}</p>
                <div className="space-y-4">
                  {category.donors.map((donor) => (
                    <div
                      key={donor.name}
                      className="p-4 rounded-lg bg-white/50 hover:bg-white/80 transition-colors"
                    >
                      <div className="font-semibold text-lg">{donor.name}</div>
                      <div className="text-primary font-medium">{donor.amount}</div>
                      <div className="text-sm text-secondary/60 mt-1">{donor.date}</div>
                      <div className="text-sm text-emerald-600 mt-2 font-medium">
                        Impact: {donor.impact}
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
      </div>
    </div>
  );
};

export default Donors;