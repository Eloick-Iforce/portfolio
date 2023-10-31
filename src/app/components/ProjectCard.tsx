"use client";
type ProjectCardProps = {
  project: {
    id: number;
    name: string;
    description: string;
    image: string;
    url: string;
    git?: string;
    technologies: string[];
  };
};

const ProjectCard = ({ project }: ProjectCardProps) => (
  <div className="card my-4 overflow-hidden rounded-lg bg-[#2C4251] shadow-lg">
    <img
      className="h-96 w-full object-cover"
      src={project.image}
      alt={project.name}
    />
    <div className="p-4">
      <h2 className="text-2xl font-bold">{project.name}</h2>
      <p className="mt-2 text-gray-300">{project.description}</p>
      <ul className="mt-2 flex gap-2">
        {project.technologies &&
          project.technologies.map((tech) => (
            <li
              className="text-secondary rounded-lg bg-transparent p-2"
              key={tech}
            >
              {tech}
            </li>
          ))}
      </ul>
      <div className="mt-4">
        <button
          className="bg-primary mr-2 rounded px-2 py-1 text-white"
          onClick={() => window.open(project.url, "_blank")}
        >
          Open Project
        </button>
        {project.git && (
          <button
            className="rounded bg-green-500 px-2 py-1 text-white"
            onClick={() => window.open(project.git, "_blank")}
          >
            Open Git
          </button>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard;
