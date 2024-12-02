import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TeamSection from "./TeamSection";
import ProjectsSection from "./ProjectsSection";
import DonorsSection from "./DonorsSection";
import ContactSection from "./ContactSection";

const ContentManager = () => {
  return (
    <Card className="p-6">
      <Tabs defaultValue="team">
        <TabsList className="mb-4">
          <TabsTrigger value="team">Leadership Team</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="donors">Donors</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>

        <TabsContent value="team">
          <TeamSection />
        </TabsContent>

        <TabsContent value="projects">
          <ProjectsSection />
        </TabsContent>

        <TabsContent value="donors">
          <DonorsSection />
        </TabsContent>

        <TabsContent value="contact">
          <ContactSection />
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default ContentManager;