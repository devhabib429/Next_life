import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Users, Target, Heart, Lightbulb } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchProjectStats, fetchProjects } from "@/lib/supabase";

const Projects = () => {
  const { data: projectStats = [], isLoading: statsLoading } = useQuery({
    queryKey: ['projectStats'],
    queryFn: fetchProjectStats
  });

  const { data: projects = [], isLoading: projectsLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              Our Impact
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Transforming Lives Through Action</h1>
            <p className="text-xl text-secondary/80 leading-relaxed">
              Discover our innovative projects that are making real differences in communities worldwide.
              Join us in creating lasting positive change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-6">
          {statsLoading ? (
            <div className="text-center">Loading statistics...</div>
          ) : (
            <div className="grid md:grid-cols-4 gap-8">
              {projectStats.map((stat: any, index: number) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="glass-card p-6">
                    <Target className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-2 gradient-text">{stat.value}</h3>
                    <p className="text-secondary/70">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {projectsLoading ? (
            <div className="text-center">Loading projects...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project: any, index: number) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden group">
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
          )}
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Focus Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Education Initiatives",
                description: "Empowering communities through knowledge and skill development.",
                icon: Lightbulb,
                projects: "12 active projects"
              },
              {
                title: "Healthcare Access",
                description: "Providing essential medical services to underserved areas.",
                icon: Heart,
                projects: "8 active projects"
              },
              {
                title: "Sustainable Development",
                description: "Creating long-term solutions for environmental challenges.",
                icon: Target,
                projects: "15 active projects"
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 glass-card hover:shadow-lg transition-shadow">
                  <category.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-secondary/70 mb-4">{category.description}</p>
                  <p className="text-sm text-primary">{category.projects}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
