import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { 
  fetchDonorStats, 
  addDonorStat, 
  deleteDonorStat, 
  updateDonorStat 
} from "@/lib/supabase";

const DonorsSection = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [newStat, setNewStat] = useState({ label: "", value: "" });
  const [editingStat, setEditingStat] = useState<any>(null);

  const { data: donorStats = [], isLoading } = useQuery({
    queryKey: ['donorStats'],
    queryFn: fetchDonorStats
  });

  const addStatMutation = useMutation({
    mutationFn: addDonorStat,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['donorStats'] });
      toast({ title: "Success", description: "Statistic added successfully" });
    }
  });

  const updateStatMutation = useMutation({
    mutationFn: ({ id, stat }: { id: number; stat: any }) => updateDonorStat(id, stat),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['donorStats'] });
      toast({ title: "Success", description: "Statistic updated successfully" });
    }
  });

  const deleteStatMutation = useMutation({
    mutationFn: deleteDonorStat,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['donorStats'] });
      toast({ title: "Success", description: "Statistic deleted successfully" });
    }
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
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
        {donorStats.map((stat: any) => (
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
    </div>
  );
};

export default DonorsSection;