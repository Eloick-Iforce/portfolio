/* eslint-disable */

"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import Image from "next/image";

import LanguageContext from "./LanguageContext";

type ProjectCardProps = {
  project: {
    id: number;
    name: string;
    description: {
      en: string;
      fr: string;
      de: string;
    };
    image: string;
    url: string;
    git?: string;
    technologies: string[];
  };
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { language } = useContext(LanguageContext);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      className="card my-4 w-[30rem] overflow-hidden rounded-lg bg-[#2C4251] shadow-lg "
      data-aos="fade-up"
    >
      <div className="relative h-96">
        <Image
          src={project.image}
          alt={project.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold">{project.name}</h2>
        <p className="mt-2 text-gray-300">{project.description[language]}</p>
        <ul className="mt-2 flex gap-2">
          {project.technologies &&
            project.technologies.map((tech) => (
              <li
                className="rounded-lg bg-transparent p-2 text-secondary"
                key={tech}
              >
                {tech}
              </li>
            ))}
        </ul>
        <div className="mt-4">
          <button
            className="mr-2 rounded bg-primary px-2 py-1 text-white"
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
};

export default ProjectCard;
