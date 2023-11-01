import data from "../../../public/data.json";
import ProjectCard from "./ProjectCard";

const Projects = () => (
  <div className="my-16 p-8">
    <h2 className="mb-4 text-4xl font-bold">Projects</h2>
    <div className="projects flex flex-wrap items-center justify-around gap-4 ">
      {data.projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>
);

export default Projects;
