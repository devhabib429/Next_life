import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Filter, Search } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchVolunteers, addVolunteer, updateVolunteerStatus } from "@/lib/supabase";
import VolunteerList from "./volunteers/VolunteerList";
import AddVolunteerDialog from "./volunteers/AddVolunteerDialog";
import VolunteerDetails from "./volunteers/VolunteerDetails";

const VolunteersManager = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);

  const { data: volunteers = [], isLoading } = useQuery({
    queryKey: ['volunteers'],
    queryFn: fetchVolunteers
  });

  const addVolunteerMutation = useMutation({
    mutationFn: addVolunteer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['volunteers'] });
      toast({
        title: "Success",
        description: "New volunteer added successfully"
      });
    },
    onError: (error) => {
      console.error('Error adding volunteer:', error);
      toast({
        title: "Error",
        description: "Failed to add volunteer",
        variant: "destructive"
      });
    }
  });

  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: number; status: string }) => 
      updateVolunteerStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['volunteers'] });
      toast({
        title: "Status Updated",
        description: "Volunteer status has been updated successfully"
      });
    }
  });

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

  const filteredVolunteers = volunteers.filter(volunteer =>
    volunteer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    volunteer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    volunteer.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return <div>Loading...</div>;

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
          <AddVolunteerDialog onAdd={addVolunteerMutation.mutate} />
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

      <VolunteerList
        volunteers={filteredVolunteers}
        onStatusChange={(id, status) => updateStatusMutation.mutate({ id, status })}
        onViewDetails={setSelectedVolunteer}
      />

      <VolunteerDetails
        volunteer={selectedVolunteer}
        onClose={() => setSelectedVolunteer(null)}
      />
    </Card>
  );
};

export default VolunteersManager;