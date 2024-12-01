import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, Filter, UserPlus } from "lucide-react";

const VolunteersManager = () => {
  const volunteers = [
    { 
      id: 1, 
      name: "Sarah Wilson", 
      email: "sarah@example.com",
      role: "Education Support",
      status: "Active",
      joinDate: "2024-02-15"
    },
    { 
      id: 2, 
      name: "Michael Chen", 
      email: "michael@example.com",
      role: "Healthcare",
      status: "Active",
      joinDate: "2024-02-10"
    },
    { 
      id: 3, 
      name: "Emily Brown", 
      email: "emily@example.com",
      role: "Community Events",
      status: "Pending",
      joinDate: "2024-03-01"
    }
  ];

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Volunteers Management</h2>
        <div className="flex gap-2">
          <Button>
            <UserPlus className="w-4 h-4 mr-2" />
            Add Volunteer
          </Button>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
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
            {volunteers.map((volunteer) => (
              <TableRow key={volunteer.id}>
                <TableCell className="font-medium">{volunteer.name}</TableCell>
                <TableCell>{volunteer.email}</TableCell>
                <TableCell>{volunteer.role}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    volunteer.status === "Active" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {volunteer.status}
                  </span>
                </TableCell>
                <TableCell>{volunteer.joinDate}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">View Details</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default VolunteersManager;