import data from "../../../public/data.json";
import ProjectCard from "./ProjectCard";

const Projects = () => (
  <div className="projects grid grid-cols-1 items-center justify-center gap-4 p-8 md:grid-cols-2 lg:grid-cols-3">
    {data.projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
);

export default Projects;
