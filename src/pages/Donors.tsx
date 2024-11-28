import { motion } from "framer-motion";
import { Users, Building2, Users2 } from "lucide-react";

const Donors = () => {
  const donorCategories = [
    {
      title: "Individual Donors",
      icon: Users,
      donors: [
        { name: "John Smith", amount: "$5,000", date: "2024-03-01" },
        { name: "Sarah Johnson", amount: "$3,500", date: "2024-02-28" },
        { name: "Michael Brown", amount: "$2,000", date: "2024-02-25" }
      ]
    },
    {
      title: "Corporate Donors",
      icon: Building2,
      donors: [
        { name: "Tech Solutions Inc.", amount: "$50,000", date: "2024-03-01" },
        { name: "Green Energy Corp", amount: "$35,000", date: "2024-02-15" },
        { name: "Global Finance Ltd", amount: "$25,000", date: "2024-02-10" }
      ]
    },
    {
      title: "Group Donors",
      icon: Users2,
      donors: [
        { name: "Local Community Trust", amount: "$15,000", date: "2024-03-01" },
        { name: "University Alumni Group", amount: "$12,000", date: "2024-02-20" },
        { name: "Sports Club Association", amount: "$8,000", date: "2024-02-15" }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Our Generous Donors</h1>
          <p className="text-secondary/70 max-w-2xl mx-auto">
            We are grateful to all our donors who support our mission to create positive change.
            Their generosity enables us to continue our work in communities worldwide.
          </p>
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
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-semibold">{category.title}</h2>
                </div>
                <div className="space-y-4">
                  {category.donors.map((donor) => (
                    <div
                      key={donor.name}
                      className="p-4 rounded-lg bg-white/50 hover:bg-white/80 transition-colors"
                    >
                      <div className="font-semibold text-lg">{donor.name}</div>
                      <div className="text-primary font-medium">{donor.amount}</div>
                      <div className="text-sm text-secondary/60">{donor.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Donors;