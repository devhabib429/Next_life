import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface VolunteerFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const toastStyles = [
  { bg: "bg-primary text-white", title: "Thank you!" },
  { bg: "bg-accent text-white", title: "Wonderful!" },
  { bg: "bg-[#8B5CF6] text-white", title: "Amazing!" },
  { bg: "bg-[#D946EF] text-white", title: "Fantastic!" },
  { bg: "bg-[#F97316] text-white", title: "Great!" },
];

const VolunteerForm = ({ open, onOpenChange }: VolunteerFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    interests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomStyle = toastStyles[Math.floor(Math.random() * toastStyles.length)];
    
    toast({
      title: randomStyle.title,
      description: "Your volunteer application has been submitted successfully. We'll contact you soon!",
      className: `${randomStyle.bg} border-none`,
    });
    
    onOpenChange(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      interests: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95%] max-w-[425px] p-4 sm:p-6 bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl">Volunteer Application</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium mb-2">Address</label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="interests" className="block text-sm font-medium mb-2">Areas of Interest</label>
            <Textarea
              id="interests"
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              placeholder="Tell us about your interests and how you'd like to help..."
              required
            />
          </div>
          <Button type="submit" className="w-full">Submit Application</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default VolunteerForm;