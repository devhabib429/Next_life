import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Edit2, Trash2, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

const ContentManager = () => {
  const { toast } = useToast();
  const [pages, setPages] = useState([
    { id: 1, title: "Home Page", content: "Welcome to our organization", lastUpdated: "2024-03-10" },
    { id: 2, title: "About Us", content: "Learn about our mission", lastUpdated: "2024-03-09" },
    { id: 3, title: "Projects", content: "Our ongoing projects", lastUpdated: "2024-03-08" },
    { id: 4, title: "Contact", content: "Get in touch with us", lastUpdated: "2024-03-07" }
  ]);

  const [editingPage, setEditingPage] = useState<null | typeof pages[0]>(null);
  const [newPageTitle, setNewPageTitle] = useState("");
  const [newPageContent, setNewPageContent] = useState("");

  const handleAddPage = () => {
    if (!newPageTitle.trim()) {
      toast({
        title: "Error",
        description: "Page title is required",
        variant: "destructive",
      });
      return;
    }

    const newPage = {
      id: pages.length + 1,
      title: newPageTitle,
      content: newPageContent,
      lastUpdated: new Date().toISOString().split('T')[0]
    };

    setPages([...pages, newPage]);
    setNewPageTitle("");
    setNewPageContent("");
    
    toast({
      title: "Success",
      description: "New page added successfully",
    });
  };

  const handleDeletePage = (id: number) => {
    setPages(pages.filter(page => page.id !== id));
    toast({
      title: "Success",
      description: "Page deleted successfully",
    });
  };

  const handleUpdatePage = () => {
    if (!editingPage) return;
    
    setPages(pages.map(page => 
      page.id === editingPage.id 
        ? { ...editingPage, lastUpdated: new Date().toISOString().split('T')[0] }
        : page
    ));
    
    setEditingPage(null);
    toast({
      title: "Success",
      description: "Page updated successfully",
    });
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Content Management</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add New Page
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Page</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <Input
                placeholder="Page Title"
                value={newPageTitle}
                onChange={(e) => setNewPageTitle(e.target.value)}
              />
              <Textarea
                placeholder="Page Content"
                value={newPageContent}
                onChange={(e) => setNewPageContent(e.target.value)}
                rows={5}
              />
              <Button onClick={handleAddPage}>Add Page</Button>
            </div>
          </DialogContent>
        </Dialog>
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
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Edit2 className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Page</DialogTitle>
                  </DialogHeader>
                  {editingPage && (
                    <div className="space-y-4 mt-4">
                      <Input
                        value={editingPage.title}
                        onChange={(e) => setEditingPage({ ...editingPage, title: e.target.value })}
                      />
                      <Textarea
                        value={editingPage.content}
                        onChange={(e) => setEditingPage({ ...editingPage, content: e.target.value })}
                        rows={5}
                      />
                      <Button onClick={handleUpdatePage}>Update Page</Button>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
              <Button 
                variant="destructive" 
                size="sm"
                onClick={() => handleDeletePage(page.id)}
              >
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