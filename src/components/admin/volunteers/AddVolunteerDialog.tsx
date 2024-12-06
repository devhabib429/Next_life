import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserPlus } from "lucide-react";
import { useState } from "react";

interface AddVolunteerDialogProps {
  onAdd: (volunteer: any) => void;
}

const AddVolunteerDialog = ({ onAdd }: AddVolunteerDialogProps) => {
  const [newVolunteer, setNewVolunteer] = useState({
    name: "",
    email: "",
    role: "",
    phone: "",
    skills: ""
  });

  const handleSubmit = () => {
    onAdd({
      ...newVolunteer,
      status: "Pending",
      joinDate: new Date().toISOString().split('T')[0],
      skills: newVolunteer.skills.split(',').map(skill => skill.trim())
    });
    setNewVolunteer({
      name: "",
      email: "",
      role: "",
      phone: "",
      skills: ""
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <UserPlus className="w-4 h-4 mr-2" />
          Add Volunteer
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Volunteer</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <Input
            placeholder="Full Name"
            value={newVolunteer.name}
            onChange={(e) => setNewVolunteer({ ...newVolunteer, name: e.target.value })}
          />
          <Input
            placeholder="Email"
            type="email"
            value={newVolunteer.email}
            onChange={(e) => setNewVolunteer({ ...newVolunteer, email: e.target.value })}
          />
          <Input
            placeholder="Phone"
            value={newVolunteer.phone}
            onChange={(e) => setNewVolunteer({ ...newVolunteer, phone: e.target.value })}
          />
          <Select
            onValueChange={(value) => setNewVolunteer({ ...newVolunteer, role: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Education Support">Education Support</SelectItem>
              <SelectItem value="Healthcare">Healthcare</SelectItem>
              <SelectItem value="Community Events">Community Events</SelectItem>
              <SelectItem value="Administrative">Administrative</SelectItem>
            </SelectContent>
          </Select>
          <Input
            placeholder="Skills (comma-separated)"
            value={newVolunteer.skills}
            onChange={(e) => setNewVolunteer({ ...newVolunteer, skills: e.target.value })}
          />
          <Button onClick={handleSubmit}>Add Volunteer</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddVolunteerDialog;