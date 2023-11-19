"use client";
import { useState, useContext } from "react";
import ProjectCard from "./ProjectCard";
import LanguageContext from "./LanguageContext";
import data from "../../../public/data.json";
import trad from "../../../public/trad.json";
import type { Translations } from "../../../public/trad";
const typedTrad = trad as Translations;

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  return (
    <div className="my-16 p-8" id="projects">
      <div className="flex items-center justify-between">
        <h2 className="mb-4 text-4xl font-bold">
          {typedTrad[language as keyof Translations].projectHeading}
        </h2>
        <div className="my-4">
          {data.technologies && (
            <select
              className="rounded-md bg-primary px-4 py-2 font-bold text-white"
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
          .map((project) => {
            const { EN: en, FR: fr, DE: de } = project.description;
            const newDescription = { en, fr, de };
            const newProject = { ...project, description: newDescription };
            return <ProjectCard key={newProject.id} project={newProject} />;
          })}
      </div>
    </div>
  );
};

export default Projects;
