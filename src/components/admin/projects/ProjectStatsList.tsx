import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchProjectStats, addProjectStat, deleteProjectStat, updateProjectStat } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";

const ProjectStatsList = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [newStat, setNewStat] = useState({ label: "", value: "" });
  const [editingStat, setEditingStat] = useState<any>(null);

  const { data: projectStats = [], isLoading: statsLoading } = useQuery({
    queryKey: ['projectStats'],
    queryFn: fetchProjectStats
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

  if (statsLoading) return <div>Loading...</div>;

  return (
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
  );
};

export default ProjectStatsList;