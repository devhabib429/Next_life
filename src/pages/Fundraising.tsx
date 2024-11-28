import { motion } from "framer-motion";
import { Calendar, Users, Trophy, Target, Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Fundraising = () => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Fundraising Events</h1>
          <p className="text-secondary/70 max-w-2xl mx-auto">
            Join our upcoming fundraising events or organize your own to support our cause.
            Together, we can make a lasting impact on communities in need.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Annual Charity Gala",
              date: "September 15, 2024",
              location: "Grand Hotel",
              description: "An elegant evening of dinner, auctions, and entertainment.",
              goal: "$100,000"
            },
            {
              title: "Community Fun Run",
              date: "October 1, 2024",
              location: "City Park",
              description: "5K run/walk event supporting health initiatives.",
              goal: "$50,000"
            },
            {
              title: "Art for Change",
              date: "November 5, 2024",
              location: "Art Gallery",
              description: "Exhibition and auction of donated artworks.",
              goal: "$75,000"
            }
          ].map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <Calendar className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <div className="space-y-2 mb-4 text-secondary/70">
                <p>{event.date}</p>
                <p>{event.location}</p>
                <p>{event.description}</p>
                <p className="text-primary font-semibold">Goal: {event.goal}</p>
              </div>
              <Button className="w-full">Register Now</Button>
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
            <Trophy className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-4">Host Your Own Event</h3>
            <p className="text-secondary/70 mb-4">
              Create your own fundraising event with our support. We'll provide resources,
              guidance, and promotional materials.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Choose your event type",
                "Set your fundraising goal",
                "Get support materials",
                "Make an impact"
              ].map((step, i) => (
                <li key={i} className="flex items-center text-secondary/70">
                  <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                  {step}
                </li>
              ))}
            </ul>
            <Button className="w-full">Start Planning</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <Gift className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-4">Matching Gifts</h3>
            <p className="text-secondary/70 mb-4">
              Double your impact! Many companies match their employees' charitable
              contributions. Check if your employer participates.
            </p>
            <Button className="w-full">Check Eligibility</Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Fundraising;