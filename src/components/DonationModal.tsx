import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DonationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DonationModal = ({ open, onOpenChange }: DonationModalProps) => {
  const donations = [
    { id: 1, name: "John Doe", amount: "$5,000", date: "2024-03-15", project: "Education Initiative" },
    { id: 2, name: "Sarah Smith", amount: "$3,000", date: "2024-03-14", project: "Healthcare Program" },
    { id: 3, name: "Tech Corp", amount: "$10,000", date: "2024-03-13", project: "Community Development" },
    { id: 4, name: "Anonymous", amount: "$1,000", date: "2024-03-12", project: "Youth Empowerment" },
    { id: 5, name: "Green Future", amount: "$7,500", date: "2024-03-11", project: "Environmental Care" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white w-full max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Recent Donations</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Donor Name</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Project</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {donations.map((donation) => (
                <TableRow key={donation.id}>
                  <TableCell className="font-medium">{donation.name}</TableCell>
                  <TableCell>{donation.amount}</TableCell>
                  <TableCell>{donation.date}</TableCell>
                  <TableCell>{donation.project}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;