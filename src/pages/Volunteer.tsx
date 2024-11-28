import { motion } from "framer-motion";
import { Calendar, Users, Heart, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Volunteer = () => {
  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Volunteer Opportunities</h1>
          <p className="text-secondary/70 max-w-2xl mx-auto text-sm sm:text-base">
            Join our community of dedicated volunteers and make a real difference in the lives of others.
            We offer various opportunities to match your skills and interests.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-16">
          {[
            {
              title: "Education Support",
              icon: Users,
              description: "Help children and adults learn through our educational programs.",
              commitment: "4-6 hours/week",
              impact: "Support 20+ students"
            },
            {
              title: "Community Events",
              icon: Calendar,
              description: "Assist in organizing and running community engagement events.",
              commitment: "Flexible hours",
              impact: "Reach 100+ people"
            },
            {
              title: "Healthcare Initiatives",
              icon: Heart,
              description: "Support our healthcare programs and medical camps.",
              commitment: "8 hours/week",
              impact: "Help 50+ patients"
            },
            {
              title: "Skill Training",
              icon: Award,
              description: "Share your expertise through skill development workshops.",
              commitment: "2-4 hours/week",
              impact: "Train 30+ individuals"
            },
            {
              title: "Administrative Support",
              icon: Clock,
              description: "Help with office work and program coordination.",
              commitment: "Flexible hours",
              impact: "Support multiple programs"
            }
          ].map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-4 sm:p-6"
            >
              <opportunity.icon className="w-8 h-8 sm:w-12 sm:h-12 text-primary mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{opportunity.title}</h3>
              <p className="text-secondary/70 text-sm sm:text-base mb-4">{opportunity.description}</p>
              <div className="space-y-2 text-xs sm:text-sm text-secondary/70">
                <p>Time Commitment: {opportunity.commitment}</p>
                <p>Impact: {opportunity.impact}</p>
              </div>
              <Button className="w-full mt-4">Apply Now</Button>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Make a Difference?</h2>
          <p className="text-secondary/70 text-sm sm:text-base mb-4 sm:mb-6">
            Fill out our volunteer application form and join our community of change-makers.
            We'll match you with opportunities that align with your interests and availability.
          </p>
          <Button size="lg" className="w-full sm:w-auto">Start Volunteering Today</Button>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;