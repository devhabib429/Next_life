import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              Our Projects
            </span>
            <h1 className="heading-lg mb-6">Current Initiatives</h1>
            <p className="body-text max-w-2xl mx-auto">
              Explore our ongoing projects and initiatives that are making a difference in communities around the world.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Clean Water Initiative",
                description: "Providing access to clean water through sustainable infrastructure and community education.",
                image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                status: "Ongoing"
              },
              {
                title: "Education for All",
                description: "Building schools and providing educational resources to underserved communities.",
                image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                status: "Active"
              },
              {
                title: "Sustainable Agriculture",
                description: "Teaching sustainable farming practices to improve food security and economic stability.",
                image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c10?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                status: "Ongoing"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-secondary/70 mb-4">{project.description}</p>
                    <Button className="w-full">Learn More</Button>
                  </div>
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