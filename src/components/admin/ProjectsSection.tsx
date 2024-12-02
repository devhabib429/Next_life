import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Target } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { 
  fetchProjectStats, 
  addProjectStat, 
  deleteProjectStat, 
  updateProjectStat,
  fetchProjects,
  addProject,
  deleteProject
} from "@/lib/supabase";

const ProjectsSection = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [newStat, setNewStat] = useState({ label: "", value: "" });
  const [newProject, setNewProject] = useState({
    title: "",
    location: "",
    date: "",
    participants: "",
    description: ""
  });
  const [editingStat, setEditingStat] = useState<any>(null);

  const { data: projectStats = [], isLoading: statsLoading } = useQuery({
    queryKey: ['projectStats'],
    queryFn: fetchProjectStats
  });

  const { data: projects = [], isLoading: projectsLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects
  });

  const addStatMutation = useMutation({
    mutationFn: addProjectStat,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projectStats'] });
      toast({ title: "Success", description: "Statistic added successfully" });
    }
  });

  const updateStatMutation = useMutation({
    mutationFn: ({ id, stat }: { id: number; stat: any }) => updateProjectStat(id, stat),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projectStats'] });
      toast({ title: "Success", description: "Statistic updated successfully" });
    }
  });

  const deleteStatMutation = useMutation({
    mutationFn: deleteProjectStat,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projectStats'] });
      toast({ title: "Success", description: "Statistic deleted successfully" });
    }
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

  if (statsLoading || projectsLoading) return <div>Loading...</div>;

  return (
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
                <Button onClick={() => {
                  addStatMutation.mutate(newStat);
                  setNewStat({ label: "", value: "" });
                }}>
                  Add Statistic
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        {projectStats.map((stat: any) => (
          <div key={stat.id} className="flex justify-between items-center p-4 bg-muted rounded-lg mb-2">
            <div>
              {editingStat?.id === stat.id ? (
                <div className="space-y-2">
                  <Input
                    value={editingStat.label}
                    onChange={(e) => setEditingStat({ ...editingStat, label: e.target.value })}
                  />
                  <Input
                    value={editingStat.value}
                    onChange={(e) => setEditingStat({ ...editingStat, value: e.target.value })}
                  />
                  <Button size="sm" onClick={() => {
                    updateStatMutation.mutate({ id: stat.id, stat: editingStat });
                    setEditingStat(null);
                  }}>
                    Save
                  </Button>
                </div>
              ) : (
                <>
                  <p className="font-medium">{stat.label}</p>
                  <p className="text-lg">{stat.value}</p>
                </>
              )}
            </div>
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setEditingStat(stat)}
              >
                Edit
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => deleteStatMutation.mutate(stat.id)}
              >
                Delete
              </Button>
            </div>
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
    </div>
  );
};

export default ProjectsSection;