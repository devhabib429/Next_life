import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Edit2, Trash2, Plus } from "lucide-react";

const ContentManager = () => {
  const [pages] = useState([
    { id: 1, title: "Home Page", lastUpdated: "2024-03-10" },
    { id: 2, title: "About Us", lastUpdated: "2024-03-09" },
    { id: 3, title: "Projects", lastUpdated: "2024-03-08" },
    { id: 4, title: "Contact", lastUpdated: "2024-03-07" }
  ]);

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Content Management</h2>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add New Page
        </Button>
      </div>

      <div className="space-y-4">
        {pages.map((page) => (
          <div
            key={page.id}
            className="flex items-center justify-between p-4 bg-muted rounded-lg"
          >
            <div>
              <h3 className="font-medium">{page.title}</h3>
              <p className="text-sm text-secondary/70">Last updated: {page.lastUpdated}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Edit2 className="w-4 h-4 mr-2" />
                Edit
              </Button>
              <Button variant="destructive" size="sm">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ContentManager;