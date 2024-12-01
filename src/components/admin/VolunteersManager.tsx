import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, Filter, UserPlus, Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const VolunteersManager = () => {
  const { toast } = useToast();
  const [volunteers, setVolunteers] = useState([
    { 
      id: 1, 
      name: "Sarah Wilson", 
      email: "sarah@example.com",
      role: "Education Support",
      status: "Active",
      joinDate: "2024-02-15",
      phone: "+1 234-567-8901",
      skills: ["Teaching", "Mentoring"]
    },
    { 
      id: 2, 
      name: "Michael Chen", 
      email: "michael@example.com",
      role: "Healthcare",
      status: "Active",
      joinDate: "2024-02-10",
      phone: "+1 234-567-8902",
      skills: ["First Aid", "Patient Care"]
    },
    { 
      id: 3, 
      name: "Emily Brown", 
      email: "emily@example.com",
      role: "Community Events",
      status: "Pending",
      joinDate: "2024-03-01",
      phone: "+1 234-567-8903",
      skills: ["Event Planning", "Social Media"]
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVolunteer, setSelectedVolunteer] = useState<null | typeof volunteers[0]>(null);
  const [newVolunteer, setNewVolunteer] = useState({
    name: "",
    email: "",
    role: "",
    phone: "",
    skills: ""
  });

  const handleAddVolunteer = () => {
    if (!newVolunteer.name || !newVolunteer.email || !newVolunteer.role) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const volunteer = {
      id: volunteers.length + 1,
      ...newVolunteer,
      status: "Pending",
      joinDate: new Date().toISOString().split('T')[0],
      skills: newVolunteer.skills.split(',').map(skill => skill.trim())
    };

    setVolunteers([...volunteers, volunteer]);
    toast({
      title: "Success",
      description: "New volunteer added successfully"
    });
    setNewVolunteer({
      name: "",
      email: "",
      role: "",
      phone: "",
      skills: ""
    });
  };

  const handleExport = () => {
    toast({
      title: "Export Started",
      description: "Volunteer data is being exported..."
    });
  };

  const handleFilter = () => {
    toast({
      title: "Filtering Applied",
      description: "Volunteers have been filtered according to your criteria."
    });
  };

  const handleStatusChange = (volunteerId: number, newStatus: string) => {
    setVolunteers(volunteers.map(volunteer => 
      volunteer.id === volunteerId 
        ? { ...volunteer, status: newStatus }
        : volunteer
    ));
    toast({
      title: "Status Updated",
      description: "Volunteer status has been updated successfully"
    });
  };

  const filteredVolunteers = volunteers.filter(volunteer =>
    volunteer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    volunteer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    volunteer.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Volunteers Management</h2>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search volunteers..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
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
                <Button onClick={handleAddVolunteer}>Add Volunteer</Button>
              </div>
            </DialogContent>
          </Dialog>
          <Button variant="outline" onClick={handleFilter}>
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" onClick={handleExport}>
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredVolunteers.map((volunteer) => (
              <TableRow key={volunteer.id}>
                <TableCell className="font-medium">{volunteer.name}</TableCell>
                <TableCell>{volunteer.email}</TableCell>
                <TableCell>{volunteer.role}</TableCell>
                <TableCell>
                  <Select
                    defaultValue={volunteer.status}
                    onValueChange={(value) => handleStatusChange(volunteer.id, value)}
                  >
                    <SelectTrigger className="w-[120px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>{volunteer.joinDate}</TableCell>
                <TableCell className="text-right">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setSelectedVolunteer(volunteer)}
                  >
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={!!selectedVolunteer} onOpenChange={() => setSelectedVolunteer(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Volunteer Details</DialogTitle>
          </DialogHeader>
          {selectedVolunteer && (
            <div className="space-y-4 mt-4">
              <div>
                <p className="text-sm font-medium">Name</p>
                <p className="text-sm text-muted-foreground">{selectedVolunteer.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">{selectedVolunteer.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">{selectedVolunteer.phone}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Role</p>
                <p className="text-sm text-muted-foreground">{selectedVolunteer.role}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Skills</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {selectedVolunteer.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Status</p>
                <p className="text-sm text-muted-foreground">{selectedVolunteer.status}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Join Date</p>
                <p className="text-sm text-muted-foreground">{selectedVolunteer.joinDate}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default VolunteersManager;