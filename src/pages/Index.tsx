import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRight, Heart, Globe, Users, Target, Sparkles, BarChart3, History } from "lucide-react";
import { Link } from "react-router-dom";

const DonationHistory = () => {
  const donations = [
    { id: 1, name: "John Doe", amount: "$5,000", date: "2024-03-15", project: "Education Initiative" },
    { id: 2, name: "Sarah Smith", amount: "$3,000", date: "2024-03-14", project: "Healthcare Program" },
    { id: 3, name: "Tech Corp", amount: "$10,000", date: "2024-03-13", project: "Community Development" },
    { id: 4, name: "Anonymous", amount: "$1,000", date: "2024-03-12", project: "Youth Empowerment" },
    { id: 5, name: "Green Future", amount: "$7,500", date: "2024-03-11", project: "Environmental Care" },
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Donor Name</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Project</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {donations.map((donation) => (
          <TableRow key={donation.id}>
            <TableCell>{donation.name}</TableCell>
            <TableCell>{donation.amount}</TableCell>
            <TableCell>{donation.date}</TableCell>
            <TableCell>{donation.project}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[90vh] relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent -z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-5 -z-20" />
        
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
                <Heart className="w-4 h-4" /> Making a Difference Together
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Empowering
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                  Communities Worldwide
                </span>
              </h1>
              <p className="text-xl text-secondary/80 mb-8 leading-relaxed">
                Join our mission to create lasting change through innovative solutions 
                and sustainable development. Together, we can build a better future for all.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group">
                  Get Involved
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="outline" className="gap-2">
                      <History className="w-4 h-4" />
                      Recent Donations
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle>Recent Donations</DialogTitle>
                    </DialogHeader>
                    <DonationHistory />
                  </DialogContent>
                </Dialog>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-6">
                {[
                  { label: "Lives Impacted", value: "50K+" },
                  { label: "Active Projects", value: "120+" },
                  { label: "Global Reach", value: "30+" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-accent/10"
                  >
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-secondary/70">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:block"
            >
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&auto=format&fit=crop"
                alt="Hero"
                className="rounded-2xl shadow-2xl shadow-primary/20 border-8 border-white"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of the content */}
      {/* Featured Initiatives */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Our Key Initiatives</h2>
              <p className="text-secondary/70 max-w-2xl mx-auto">
                Discover how we're making a difference through our strategic programs and initiatives.
              </p>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Sustainable Development",
                description: "Implementing eco-friendly projects that promote sustainable growth.",
                color: "bg-emerald-500"
              },
              {
                icon: Sparkles,
                title: "Education Empowerment",
                description: "Providing quality education and learning resources to communities.",
                color: "bg-blue-500"
              },
              {
                icon: BarChart3,
                title: "Economic Growth",
                description: "Supporting local businesses and entrepreneurship initiatives.",
                color: "bg-violet-500"
              }
            ].map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-6 hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-lg ${initiative.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <initiative.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{initiative.title}</h3>
                <p className="text-secondary/70 mb-4">{initiative.description}</p>
                <Button variant="link" className="p-0">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
