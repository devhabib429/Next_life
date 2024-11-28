import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

const Fundraising = () => {
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
              Fundraising Events
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Events</h1>
            <p className="text-xl text-secondary/80 leading-relaxed">
              Participate in our fundraising events and help us make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Annual Charity Gala",
                date: "September 15, 2024",
                location: "Grand Hotel, New York",
                description: "An elegant evening of dining and entertainment to support our cause."
              },
              {
                title: "Community Fun Run",
                date: "July 4, 2024",
                location: "Central Park",
                description: "A family-friendly 5K run/walk event supporting local initiatives."
              },
              {
                title: "Art Auction",
                date: "October 1, 2024",
                location: "City Gallery",
                description: "Featuring works from local and international artists."
              },
              {
                title: "Benefit Concert",
                date: "August 20, 2024",
                location: "Civic Auditorium",
                description: "A night of music and entertainment for a good cause."
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-secondary/70">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-secondary/70">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-secondary/70 mb-4">{event.description}</p>
                  <Button className="w-full">Register Now</Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Host Your Own Fundraiser</h2>
            <p className="text-secondary/70 max-w-2xl mx-auto">
              Start your own fundraising campaign to support our cause.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Virtual Fundraiser",
                description: "Organize an online event or campaign."
              },
              {
                title: "Community Event",
                description: "Plan a local gathering or activity."
              },
              {
                title: "Challenge Fundraiser",
                description: "Create a sponsored challenge or competition."
              }
            ].map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                  <p className="text-secondary/70 mb-6">{type.description}</p>
                  <Button variant="outline" className="w-full">Start Now</Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fundraising;