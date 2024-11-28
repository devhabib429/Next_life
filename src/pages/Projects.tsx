import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent -z-10" />
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              Our Projects
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Making Real Impact</h1>
            <p className="text-xl text-secondary/80 leading-relaxed">
              Explore our ongoing projects and initiatives that are making a difference 
              in communities around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Clean Water Initiative",
                location: "Rural Communities, Africa",
                date: "Ongoing",
                participants: "2,000+ beneficiaries",
                description: "Providing access to clean water through sustainable infrastructure and community education.",
                image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&auto=format&fit=crop"
              },
              {
                title: "Education for All",
                location: "Southeast Asia",
                date: "Active",
                participants: "5,000+ students",
                description: "Building schools and providing educational resources to underserved communities.",
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop"
              },
              {
                title: "Sustainable Agriculture",
                location: "South America",
                date: "Ongoing",
                participants: "1,000+ farmers",
                description: "Teaching sustainable farming practices to improve food security and economic stability.",
                image: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?w=800&auto=format&fit=crop"
              },
              {
                title: "Healthcare Access",
                location: "Multiple Regions",
                date: "Active",
                participants: "10,000+ patients",
                description: "Improving access to essential healthcare services in remote areas.",
                image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&auto=format&fit=crop"
              },
              {
                title: "Youth Empowerment",
                location: "Global",
                date: "Ongoing",
                participants: "3,000+ youth",
                description: "Providing skills training and mentorship to young people.",
                image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=800&auto=format&fit=crop"
              },
              {
                title: "Environmental Conservation",
                location: "Various Locations",
                date: "Active",
                participants: "100+ communities",
                description: "Protecting natural resources and promoting sustainable practices.",
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop"
              }
            ].map((project, index) => (
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
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-secondary/70">
                        <MapPin className="w-4 h-4 mr-2" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-sm text-secondary/70">
                        <Calendar className="w-4 h-4 mr-2" />
                        {project.date}
                      </div>
                      <div className="flex items-center text-sm text-secondary/70">
                        <Users className="w-4 h-4 mr-2" />
                        {project.participants}
                      </div>
                    </div>
                    <p className="text-secondary/70 mb-4">{project.description}</p>
                    <Button className="w-full group">
                      Learn More
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Want to Get Involved?</h2>
          <p className="text-xl text-secondary/70 mb-8 max-w-2xl mx-auto">
            Join us in making a difference. Whether through volunteering, donations, or 
            partnerships, there are many ways to support our projects.
          </p>
          <Button size="lg" className="group">
            Contact Us Today
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;