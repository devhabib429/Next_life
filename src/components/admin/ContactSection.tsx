import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchAddresses, addAddress, deleteAddress } from "@/lib/supabase";

const ContactSection = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [newAddress, setNewAddress] = useState({
    title: "",
    details: ["", "", ""]
  });

  const { data: addresses = [], isLoading } = useQuery({
    queryKey: ['addresses'],
    queryFn: fetchAddresses
  });

  const addAddressMutation = useMutation({
    mutationFn: addAddress,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['addresses'] });
      toast({ title: "Success", description: "Address added successfully" });
    }
  });

  const deleteAddressMutation = useMutation({
    mutationFn: deleteAddress,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['addresses'] });
      toast({ title: "Success", description: "Address deleted successfully" });
    }
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Office Addresses</h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <MapPin className="w-4 h-4 mr-2" />
              Add Address
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Office Address</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Office Title"
                value={newAddress.title}
                onChange={(e) => setNewAddress({ ...newAddress, title: e.target.value })}
              />
              <Input
                placeholder="Address Line 1"
                value={newAddress.details[0]}
                onChange={(e) => setNewAddress({
                  ...newAddress,
                  details: [e.target.value, newAddress.details[1], newAddress.details[2]]
                })}
              />
              <Input
                placeholder="Address Line 2"
                value={newAddress.details[1]}
                onChange={(e) => setNewAddress({
                  ...newAddress,
                  details: [newAddress.details[0], e.target.value, newAddress.details[2]]
                })}
              />
              <Input
                placeholder="Address Line 3"
                value={newAddress.details[2]}
                onChange={(e) => setNewAddress({
                  ...newAddress,
                  details: [newAddress.details[0], newAddress.details[1], e.target.value]
                })}
              />
              <Button onClick={() => {
                addAddressMutation.mutate(newAddress);
                setNewAddress({ title: "", details: ["", "", ""] });
              }}>
                Add Address
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      {addresses.map((address: any) => (
        <div key={address.id} className="p-4 bg-muted rounded-lg">
          <div className="flex justify-between">
            <div>
              <h4 className="font-medium">{address.title}</h4>
              {address.details.map((detail: string, index: number) => (
                <p key={index} className="text-sm text-muted-foreground">{detail}</p>
              ))}
            </div>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => deleteAddressMutation.mutate(address.id)}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactSection;