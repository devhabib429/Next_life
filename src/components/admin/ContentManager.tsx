import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Edit2, Trash2, Plus, Users, Target, Building2, MapPin } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContentManager = () => {
  const { toast } = useToast();
  
  // Team Members State
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "Sarah Johnson", role: "Executive Director", experience: "15+ years in nonprofit leadership" },
    { id: 2, name: "Michael Chen", role: "Operations Director", experience: "12+ years in project management" }
  ]);

  // Projects State
  const [projectStats, setProjectStats] = useState([
    { id: 1, label: "Active Projects", value: "50+" },
    { id: 2, label: "Lives Impacted", value: "100K+" },
    { id: 3, label: "Countries Reached", value: "25+" },
    { id: 4, label: "Volunteers", value: "10K+" }
  ]);

  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: "Clean Water Initiative",
      location: "Rural Communities, Africa",
      date: "Ongoing",
      participants: "2,000+ beneficiaries",
      description: "Providing access to clean water through sustainable infrastructure."
    }
  ]);

  // Donors State
  const [donorStats, setDonorStats] = useState([
    { id: 1, label: "Countries Reached", value: "50+" },
    { id: 2, label: "Lives Impacted", value: "1M+" },
    { id: 3, label: "Success Rate", value: "95%" },
    { id: 4, label: "Funds Raised", value: "$5M+" }
  ]);

  const [donorCategories, setDonorCategories] = useState([
    {
      id: 1,
      title: "Individual Donors",
      description: "Passionate individuals making a difference",
      donors: [
        { name: "Emily & James Wilson", amount: "$25,000", impact: "Funded education for 50 children" }
      ]
    }
  ]);

  // Contact Addresses State
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      title: "Main Office",
      details: ["456 NGO Plaza, Suite 789", "San Francisco, CA 94105", "United States"]
    }
  ]);

  // New Item States
  const [newTeamMember, setNewTeamMember] = useState({ name: "", role: "", experience: "" });
  const [newStat, setNewStat] = useState({ label: "", value: "" });
  const [newProject, setNewProject] = useState({
    title: "",
    location: "",
    date: "",
    participants: "",
    description: ""
  });
  const [newAddress, setNewAddress] = useState({
    title: "",
    details: ["", "", ""]
  });

  // Generic handlers
  const handleAdd = (type: string, data: any) => {
    switch(type) {
      case 'team':
        setTeamMembers([...teamMembers, { id: teamMembers.length + 1, ...data }]);
        break;
      case 'projectStat':
        setProjectStats([...projectStats, { id: projectStats.length + 1, ...data }]);
        break;
      case 'project':
        setProjects([...projects, { id: projects.length + 1, ...data }]);
        break;
      case 'donorStat':
        setDonorStats([...donorStats, { id: donorStats.length + 1, ...data }]);
        break;
      case 'address':
        setAddresses([...addresses, { id: addresses.length + 1, ...data }]);
        break;
    }
    toast({
      title: "Success",
      description: "Item added successfully",
    });
  };

  const handleDelete = (type: string, id: number) => {
    switch(type) {
      case 'team':
        setTeamMembers(teamMembers.filter(member => member.id !== id));
        break;
      case 'projectStat':
        setProjectStats(projectStats.filter(stat => stat.id !== id));
        break;
      case 'project':
        setProjects(projects.filter(project => project.id !== id));
        break;
      case 'donorStat':
        setDonorStats(donorStats.filter(stat => stat.id !== id));
        break;
      case 'address':
        setAddresses(addresses.filter(address => address.id !== id));
        break;
    }
    toast({
      title: "Success",
      description: "Item deleted successfully",
    });
  };

  return (
    <Card className="p-6">
      <Tabs defaultValue="team">
        <TabsList className="mb-4">
          <TabsTrigger value="team">Leadership Team</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="donors">Donors</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>

        {/* Team Management */}
        <TabsContent value="team">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Leadership Team</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Users className="w-4 h-4 mr-2" />
                    Add Team Member
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Team Member</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Input
                      placeholder="Name"
                      value={newTeamMember.name}
                      onChange={(e) => setNewTeamMember({ ...newTeamMember, name: e.target.value })}
                    />
                    <Input
                      placeholder="Role"
                      value={newTeamMember.role}
                      onChange={(e) => setNewTeamMember({ ...newTeamMember, role: e.target.value })}
                    />
                    <Input
                      placeholder="Experience"
                      value={newTeamMember.experience}
                      onChange={(e) => setNewTeamMember({ ...newTeamMember, experience: e.target.value })}
                    />
                    <Button onClick={() => handleAdd('team', newTeamMember)}>Add Member</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            {teamMembers.map((member) => (
              <div key={member.id} className="flex justify-between items-center p-4 bg-muted rounded-lg">
                <div>
                  <h4 className="font-medium">{member.name}</h4>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </div>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete('team', member.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Projects Management */}
        <TabsContent value="projects">
          <div className="space-y-6">
            {/* Project Stats */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Project Statistics</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Statistic
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add Project Statistic</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <Input
                        placeholder="Label"
                        value={newStat.label}
                        onChange={(e) => setNewStat({ ...newStat, label: e.target.value })}
                      />
                      <Input
                        placeholder="Value"
                        value={newStat.value}
                        onChange={(e) => setNewStat({ ...newStat, value: e.target.value })}
                      />
                      <Button onClick={() => handleAdd('projectStat', newStat)}>Add Statistic</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              {projectStats.map((stat) => (
                <div key={stat.id} className="flex justify-between items-center p-4 bg-muted rounded-lg mb-2">
                  <div>
                    <p className="font-medium">{stat.label}</p>
                    <p className="text-lg">{stat.value}</p>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete('projectStat', stat.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Projects List */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Projects</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Target className="w-4 h-4 mr-2" />
                      Add Project
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add Project</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <Input
                        placeholder="Title"
                        value={newProject.title}
                        onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                      />
                      <Input
                        placeholder="Location"
                        value={newProject.location}
                        onChange={(e) => setNewProject({ ...newProject, location: e.target.value })}
                      />
                      <Input
                        placeholder="Date"
                        value={newProject.date}
                        onChange={(e) => setNewProject({ ...newProject, date: e.target.value })}
                      />
                      <Input
                        placeholder="Participants"
                        value={newProject.participants}
                        onChange={(e) => setNewProject({ ...newProject, participants: e.target.value })}
                      />
                      <Textarea
                        placeholder="Description"
                        value={newProject.description}
                        onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                      />
                      <Button onClick={() => handleAdd('project', newProject)}>Add Project</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              {projects.map((project) => (
                <div key={project.id} className="p-4 bg-muted rounded-lg mb-2">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-medium">{project.title}</h4>
                      <p className="text-sm text-muted-foreground">{project.location}</p>
                      <p className="text-sm text-muted-foreground">{project.date}</p>
                      <p className="text-sm text-muted-foreground">{project.participants}</p>
                      <p className="text-sm mt-2">{project.description}</p>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete('project', project.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Donors Management */}
        <TabsContent value="donors">
          <div className="space-y-6">
            {/* Donor Stats */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Donor Statistics</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Statistic
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add Donor Statistic</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <Input
                        placeholder="Label"
                        value={newStat.label}
                        onChange={(e) => setNewStat({ ...newStat, label: e.target.value })}
                      />
                      <Input
                        placeholder="Value"
                        value={newStat.value}
                        onChange={(e) => setNewStat({ ...newStat, value: e.target.value })}
                      />
                      <Button onClick={() => handleAdd('donorStat', newStat)}>Add Statistic</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              {donorStats.map((stat) => (
                <div key={stat.id} className="flex justify-between items-center p-4 bg-muted rounded-lg mb-2">
                  <div>
                    <p className="font-medium">{stat.label}</p>
                    <p className="text-lg">{stat.value}</p>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete('donorStat', stat.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Contact Management */}
        <TabsContent value="contact">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Office Addresses</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <MapPin className="w-4 h-4 mr-2" />
                    Add Address
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Office Address</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Input
                      placeholder="Office Title"
                      value={newAddress.title}
                      onChange={(e) => setNewAddress({ ...newAddress, title: e.target.value })}
                    />
                    <Input
                      placeholder="Address Line 1"
                      value={newAddress.details[0]}
                      onChange={(e) => setNewAddress({
                        ...newAddress,
                        details: [e.target.value, newAddress.details[1], newAddress.details[2]]
                      })}
                    />
                    <Input
                      placeholder="Address Line 2"
                      value={newAddress.details[1]}
                      onChange={(e) => setNewAddress({
                        ...newAddress,
                        details: [newAddress.details[0], e.target.value, newAddress.details[2]]
                      })}
                    />
                    <Input
                      placeholder="Address Line 3"
                      value={newAddress.details[2]}
                      onChange={(e) => setNewAddress({
                        ...newAddress,
                        details: [newAddress.details[0], newAddress.details[1], e.target.value]
                      })}
                    />
                    <Button onClick={() => handleAdd('address', newAddress)}>Add Address</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            {addresses.map((address) => (
              <div key={address.id} className="p-4 bg-muted rounded-lg">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-medium">{address.title}</h4>
                    {address.details.map((detail, index) => (
                      <p key={index} className="text-sm text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete('address', address.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default ContentManager;