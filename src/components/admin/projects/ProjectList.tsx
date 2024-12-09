import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Target } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchProjects, addProject, deleteProject, Project } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";

const initialProjects = [
  {
    title: "Clean Water Initiative",
    location: "Rural Communities, Africa",
    status: "Ongoing",
    participants: "2,000+ beneficiaries",
    description: "Providing access to clean water through sustainable infrastructure and community education."
  },
  {
    title: "Education for All",
    location: "Southeast Asia",
    status: "Active",
    participants: "5,000+ students",
    description: "Building schools and providing educational resources to underserved communities."
  },
  {
    title: "Sustainable Agriculture",
    location: "South America",
    status: "Ongoing",
    participants: "1,000+ farmers",
    description: "Teaching sustainable farming practices to improve food security and economic stability."
  },
  {
    title: "Healthcare Access",
    location: "Multiple Regions",
    status: "Active",
    participants: "10,000+ patients",
    description: "Improving access to essential healthcare services in remote areas."
  },
  {
    title: "Youth Empowerment",
    location: "Global",
    status: "Ongoing",
    participants: "3,000+ youth",
    description: "Providing skills training and mentorship to young people."
  },
  {
    title: "Environmental Conservation",
    location: "Various Locations",
    status: "Active",
    participants: "100+ communities",
    description: "Protecting natural resources and promoting sustainable practices."
  }
];

const ProjectList = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [newProject, setNewProject] = useState<Omit<Project, 'id'>>({
    title: "",
    location: "",
    status: "",
    participants: "",
    description: ""
  });

  const { data: projects = [], isLoading: projectsLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects
  });

  const addProjectMutation = useMutation({
    mutationFn: addProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast({ title: "Success", description: "Project added successfully" });
    },
    onError: (error: any) => {
      console.error('Error adding project:', error);
      toast({ 
        title: "Error", 
        description: error.message || "Failed to add project", 
        variant: "destructive" 
      });
    }
  });

  const deleteProjectMutation = useMutation({
    mutationFn: deleteProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast({ title: "Success", description: "Project deleted successfully" });
    }
  });

  const handleAddProject = async () => {
    try {
      await addProjectMutation.mutateAsync(newProject);
      setNewProject({
        title: "",
        location: "",
        status: "",
        participants: "",
        description: ""
      });
    } catch (error) {
      console.error('Error in handleAddProject:', error);
    }
  };

  if (projectsLoading) return <div>Loading...</div>;

  return (
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
              <DialogDescription>
                Add a new project to the database. Fill in all fields below.
              </DialogDescription>
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
                placeholder="Status (e.g., Active, Ongoing)"
                value={newProject.status}
                onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}
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
              <Button onClick={handleAddProject}>
                Add Project
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      {projects.map((project: Project) => (
        <div key={project.id} className="p-4 bg-muted rounded-lg mb-2">
          <div className="flex justify-between">
            <div>
              <h4 className="font-medium">{project.title}</h4>
              <p className="text-sm text-muted-foreground">{project.location}</p>
              <p className="text-sm text-muted-foreground">{project.status}</p>
              <p className="text-sm text-muted-foreground">{project.participants}</p>
              <p className="text-sm mt-2">{project.description}</p>
            </div>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => project.id && deleteProjectMutation.mutate(project.id)}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
