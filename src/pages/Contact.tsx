import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Clock, Globe, MessageSquare } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent -z-10" />
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Let's Make a Difference Together</h1>
            <p className="text-xl text-secondary/80 leading-relaxed">
              Have questions or want to get involved? We'd love to hear from you.
              Our team is here to help and respond to your inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: "Main Office",
                    details: [
                      "456 NGO Plaza, Suite 789",
                      "San Francisco, CA 94105",
                      "United States"
                    ]
                  },
                  {
                    icon: Globe,
                    title: "Regional Offices",
                    details: [
                      "London, United Kingdom",
                      "Singapore",
                      "Sydney, Australia"
                    ]
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    details: [
                      "+1 (415) 555-0123 (Main)",
                      "+1 (415) 555-0124 (Support)",
                      "Mon-Fri 9am-6pm PST"
                    ]
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    details: [
                      "info@ngowebverse.org",
                      "support@ngowebverse.org",
                      "partnerships@ngowebverse.org"
                    ]
                  },
                  {
                    icon: Clock,
                    title: "Hours of Operation",
                    details: [
                      "Monday - Friday: 9:00 AM - 6:00 PM PST",
                      "Saturday: 10:00 AM - 2:00 PM PST",
                      "Sunday: Closed"
                    ]
                  }
                ].map((item, index) => (
                  <Card key={index} className="p-6 glass-card">
                    <div className="flex items-start">
                      <div className="p-3 rounded-full bg-primary/10 mr-4">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-secondary/70">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2"
            >
              <Card className="p-8 glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Send us a Message</h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can we help you?" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..." 
                      className="min-h-[150px]" 
                      required 
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text">Visit Our Office</h2>
          <p className="text-xl text-secondary/70 mb-8">
            We're always happy to welcome visitors and discuss potential collaborations in person.
          </p>
          <Card className="p-4 glass-card">
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201064.8356831922!2d-122.57768294765226!3d37.75781489799105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1647043276541!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;