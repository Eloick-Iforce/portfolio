import data from "../../../public/data.json";
import ProjectCard from "./ProjectCard";

const Projects = () => (
  <div className="projects flex flex-wrap items-center justify-around gap-4 p-8">
    {data.projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
);

export default Projects;
