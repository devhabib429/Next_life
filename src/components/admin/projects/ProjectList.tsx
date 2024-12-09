import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Target } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchProjects, addProject, deleteProject } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";

const ProjectList = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [newProject, setNewProject] = useState({
    title: "",
    location: "",
    date: "",
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
    }
  });

  const deleteProjectMutation = useMutation({
    mutationFn: deleteProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast({ title: "Success", description: "Project deleted successfully" });
    }
  });

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
              <Button onClick={() => {
                addProjectMutation.mutate(newProject);
                setNewProject({
                  title: "",
                  location: "",
                  date: "",
                  participants: "",
                  description: ""
                });
              }}>
                Add Project
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      {projects.map((project: any) => (
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
              onClick={() => deleteProjectMutation.mutate(project.id)}
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