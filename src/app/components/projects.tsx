/* eslint-disable react/no-array-index-key */

"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

type Data = {
  skills: string[];
  projects: {
    id: number;
    name: string;
    description: string;
    image: string;
    url: string;
    technologies: string[];
    git?: string;
  }[];
  technologies?: string[];
};

const data: Data = require("../../../public/data.json");

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  return (
    <div className="my-16 p-8" id="projects">
      <div className="flex items-center justify-between">
        <h2 className="mb-4 text-4xl font-bold">Projects</h2>
        <div className="my-4">
          {data.technologies && (
            <select
              className="bg-primary rounded-md px-4 py-2 font-bold text-white"
              onChange={(e) => setSelectedTech(e.target.value)}
            >
              <option value="">All</option>
              {data.technologies.map((tech, index) => (
                <option key={index} value={tech}>
                  {tech}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
      <div className="projects flex flex-wrap items-center justify-around gap-4 ">
        {data.projects
          .filter(
            (project) =>
              !selectedTech || project.technologies.includes(selectedTech),
          )
          .map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>
    </div>
  );
};

export default Projects;
