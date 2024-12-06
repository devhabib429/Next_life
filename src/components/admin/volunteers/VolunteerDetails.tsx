import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

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

interface VolunteerDetailsProps {
  volunteer: Volunteer | null;
  onClose: () => void;
}

const VolunteerDetails = ({ volunteer, onClose }: VolunteerDetailsProps) => {
  if (!volunteer) return null;

  return (
    <Dialog open={!!volunteer} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Volunteer Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <div>
            <p className="text-sm font-medium">Name</p>
            <p className="text-sm text-muted-foreground">{volunteer.name}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Email</p>
            <p className="text-sm text-muted-foreground">{volunteer.email}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Phone</p>
            <p className="text-sm text-muted-foreground">{volunteer.phone}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Role</p>
            <p className="text-sm text-muted-foreground">{volunteer.role}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Skills</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {volunteer.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium">Status</p>
            <p className="text-sm text-muted-foreground">{volunteer.status}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Join Date</p>
            <p className="text-sm text-muted-foreground">{volunteer.join_date}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VolunteerDetails;