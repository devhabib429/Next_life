import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Volunteer {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  join_date: string;  // Changed from joinDate to join_date
  phone: string;
  skills: string[];
}

interface VolunteerListProps {
  volunteers: Volunteer[];
  onStatusChange: (volunteerId: number, newStatus: string) => void;
  onViewDetails: (volunteer: Volunteer) => void;
}

const VolunteerList = ({ volunteers, onStatusChange, onViewDetails }: VolunteerListProps) => {
  return (
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
          {volunteers.map((volunteer) => (
            <TableRow key={volunteer.id}>
              <TableCell className="font-medium">{volunteer.name}</TableCell>
              <TableCell>{volunteer.email}</TableCell>
              <TableCell>{volunteer.role}</TableCell>
              <TableCell>
                <Select
                  defaultValue={volunteer.status}
                  onValueChange={(value) => onStatusChange(volunteer.id, value)}
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
              <TableCell>{volunteer.join_date}</TableCell>
              <TableCell className="text-right">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => onViewDetails(volunteer)}
                >
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default VolunteerList;