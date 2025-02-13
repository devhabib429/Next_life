import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CheckCircle, Users, Target, Heart, Award, Globe, Sparkles } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchTeamMembers, type TeamMember } from "@/lib/api/team";

const About = () => {
  const { data: teamMembers = [], isLoading } = useQuery({
    queryKey: ['teamMembers'],
    queryFn: fetchTeamMembers
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent -z-10" />
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Making a Difference Together</h1>
            <p className="text-xl text-secondary/80 leading-relaxed">
              Since 2010, we've been dedicated to creating positive change through 
              sustainable development and community empowerment initiatives worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-8 h-full glass-card">
                <Target className="w-12 h-12 text-primary mb-6" />
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-secondary/70 leading-relaxed">
                  To create a world where every community has the resources and opportunities 
                  they need to thrive and prosper sustainably. We envision a future where 
                  social equality and environmental sustainability go hand in hand.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-8 h-full glass-card">
                <Heart className="w-12 h-12 text-primary mb-6" />
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-secondary/70 leading-relaxed">
                  To empower communities through education, sustainable development, 
                  and grassroots initiatives that create lasting positive change. We work 
                  tirelessly to implement programs that address critical needs while 
                  building local capacity.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Our Core Values</h2>
            <p className="text-secondary/70 max-w-2xl mx-auto">
              These principles guide everything we do and help us make a meaningful impact.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Impact",
                description: "Creating positive change across borders and cultures."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Maintaining the highest standards in all our initiatives."
              },
              {
                icon: Sparkles,
                title: "Innovation",
                description: "Finding creative solutions to complex challenges."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-6 glass-card text-center">
                  <value.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-secondary/70">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Our Leadership Team</h2>
            <p className="text-secondary/70 max-w-2xl mx-auto">
              Meet the dedicated individuals working to make our vision a reality.
            </p>
          </div>
          {isLoading ? (
            <div className="text-center">Loading team members...</div>
          ) : (
            <div className="grid md:grid-cols-4 gap-8">
              {teamMembers.map((member: TeamMember, index: number) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="p-6 glass-card text-center">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary mb-2">{member.role}</p>
                    <p className="text-sm text-secondary/70">{member.experience}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default About;