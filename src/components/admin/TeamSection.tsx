import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchTeamMembers, addTeamMember, deleteTeamMember } from "@/lib/supabase";

const TeamSection = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [newTeamMember, setNewTeamMember] = useState({ name: "", role: "", experience: "" });

  const { data: teamMembers = [], isLoading } = useQuery({
    queryKey: ['teamMembers'],
    queryFn: fetchTeamMembers
  });

  const addMemberMutation = useMutation({
    mutationFn: addTeamMember,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['teamMembers'] });
      toast({ title: "Success", description: "Team member added successfully" });
    },
    onError: (error) => {
      toast({ title: "Error", description: "Failed to add team member", variant: "destructive" });
    }
  });

  const deleteMemberMutation = useMutation({
    mutationFn: deleteTeamMember,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['teamMembers'] });
      toast({ title: "Success", description: "Team member deleted successfully" });
    },
    onError: (error) => {
      toast({ title: "Error", description: "Failed to delete team member", variant: "destructive" });
    }
  });

  if (isLoading) return <div>Loading...</div>;

  return (
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
              <Button onClick={() => {
                addMemberMutation.mutate(newTeamMember);
                setNewTeamMember({ name: "", role: "", experience: "" });
              }}>
                Add Member
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      {teamMembers.map((member: any) => (
        <div key={member.id} className="flex justify-between items-center p-4 bg-muted rounded-lg">
          <div>
            <h4 className="font-medium">{member.name}</h4>
            <p className="text-sm text-muted-foreground">{member.role}</p>
            <p className="text-sm text-muted-foreground">{member.experience}</p>
          </div>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => deleteMemberMutation.mutate(member.id)}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default TeamSection;