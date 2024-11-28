import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Calendar, MapPin, Users, ArrowRight } from "lucide-react";

const Volunteer = () => {
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
              Volunteer With Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a Difference Today</h1>
            <p className="text-xl text-secondary/80 leading-relaxed">
              Join our community of dedicated volunteers and help create positive change in the world.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Local Programs",
                description: "Support your local community through various initiatives.",
                image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23"
              },
              {
                title: "International Projects",
                description: "Make a global impact by volunteering abroad.",
                image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3"
              },
              {
                title: "Skill-based Volunteering",
                description: "Share your expertise to help our cause.",
                image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2"
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                    <p className="text-secondary/70 mb-4">{program.description}</p>
                    <Button className="w-full">Learn More</Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Current Opportunities</h2>
            <p className="text-secondary/70 max-w-2xl mx-auto">
              Browse our current volunteer positions and find the perfect opportunity to make an impact.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Community Outreach Volunteer",
                location: "New York, NY",
                commitment: "5-10 hours/week",
                participants: "10 spots available"
              },
              {
                title: "Education Program Assistant",
                location: "Remote",
                commitment: "Flexible hours",
                participants: "5 spots available"
              },
              {
                title: "Event Coordinator",
                location: "Los Angeles, CA",
                commitment: "Weekend availability",
                participants: "3 spots available"
              },
              {
                title: "Social Media Volunteer",
                location: "Remote",
                commitment: "3-5 hours/week",
                participants: "2 spots available"
              }
            ].map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{opportunity.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-secondary/70">
                      <MapPin className="w-4 h-4 mr-2" />
                      {opportunity.location}
                    </div>
                    <div className="flex items-center text-sm text-secondary/70">
                      <Calendar className="w-4 h-4 mr-2" />
                      {opportunity.commitment}
                    </div>
                    <div className="flex items-center text-sm text-secondary/70">
                      <Users className="w-4 h-4 mr-2" />
                      {opportunity.participants}
                    </div>
                  </div>
                  <Button className="w-full">Apply Now</Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;