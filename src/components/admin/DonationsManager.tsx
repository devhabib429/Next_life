import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DollarSign, Download, Filter, Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

const DonationsManager = () => {
  const { toast } = useToast();
  const [donations, setDonations] = useState([
    { id: 1, donor: "John Doe", amount: 1000, date: "2024-03-10", status: "Completed", email: "john@example.com" },
    { id: 2, donor: "Jane Smith", amount: 500, date: "2024-03-09", status: "Completed", email: "jane@example.com" },
    { id: 3, donor: "Bob Johnson", amount: 250, date: "2024-03-08", status: "Pending", email: "bob@example.com" }
  ]);

  const [selectedDonation, setSelectedDonation] = useState<null | typeof donations[0]>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleExport = () => {
    // In a real application, this would generate a CSV file
    toast({
      title: "Export Started",
      description: "Your donation data is being exported...",
    });
  };

  const handleFilter = () => {
    toast({
      title: "Filtering Applied",
      description: "Donations have been filtered according to your criteria.",
    });
  };

  const handleViewDetails = (donation: typeof donations[0]) => {
    setSelectedDonation(donation);
  };

  const filteredDonations = donations.filter(donation =>
    donation.donor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donation.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Donations Management</h2>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search donors..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
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

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Donor</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDonations.map((donation) => (
              <TableRow key={donation.id}>
                <TableCell>{donation.donor}</TableCell>
                <TableCell>${donation.amount}</TableCell>
                <TableCell>{donation.date}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    donation.status === "Completed" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {donation.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleViewDetails(donation)}
                  >
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={!!selectedDonation} onOpenChange={() => setSelectedDonation(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Donation Details</DialogTitle>
          </DialogHeader>
          {selectedDonation && (
            <div className="space-y-4 mt-4">
              <div>
                <p className="text-sm font-medium">Donor Name</p>
                <p className="text-sm text-muted-foreground">{selectedDonation.donor}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">{selectedDonation.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Amount</p>
                <p className="text-sm text-muted-foreground">${selectedDonation.amount}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Date</p>
                <p className="text-sm text-muted-foreground">{selectedDonation.date}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Status</p>
                <p className="text-sm text-muted-foreground">{selectedDonation.status}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default DonationsManager;