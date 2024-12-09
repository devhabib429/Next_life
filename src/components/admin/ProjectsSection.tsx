import { Card } from "@/components/ui/card";
import ProjectStatsList from "./projects/ProjectStatsList";
import ProjectList from "./projects/ProjectList";

const ProjectsSection = () => {
  return (
    <div className="space-y-6">
      <ProjectStatsList />
      <ProjectList />
    </div>
  );
};

export default ProjectsSection;