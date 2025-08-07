import { Heart } from "lucide-react";
import React, { JSX, useState } from "react";
import ProjectCard from "../ProjectCard";
import ProjectModal from "../ProjectModal"; // ⬅️ You must have this file
import { jetbrainsMono } from "@/app/font";

import { FaReact, FaNodeJs } from "react-icons/fa";
import {SiHtml5, SiCss3, SiMongodb, SiExpress, SiJavascript, SiNextdotjs, SiPostgresql } from "react-icons/si";

export const techIconMap: Record<string, JSX.Element> = {
  react: <FaReact className="text-cyan-300" />,
  node: <FaNodeJs className="text-green-500" />,
  express: <SiExpress className="text-white" />,
  mongo: <SiMongodb className="text-green-400" />,
  ts: <SiJavascript className="text-blue-500" />,
  next: <SiNextdotjs className="text-white" />,
  postgres: <SiPostgresql className="text-sky-500" />,
  html5: <SiHtml5 className="text-orange-500" />,
  css3: <SiCss3 className="text-blue-500" />,
};

const projects = [
  {
    title: "Dashboard Panel",
    description: "A creator brand collaboration website",
    thumbnail: "/Dashboard_Panel.png",
    techStack: ["react", "ts",],
    gradient: "#51fbfb, rgb(13, 1, 60)",
    github: "https://github.com/eshant27/DASHBOARD_PANEL",
    live: "https://dashboardpanel-ivory.vercel.app/",
  },
  {
    title: "Weather App",
    description: "Your personal fitness companion",
    thumbnail: "/weather.jpg",
    techStack: ["html5", "css3", "node"],
    gradient: "#14f195, rgb(13, 1, 60)",
    github: "https://github.com/eshant27/WeatherSphere",
    live: "https://weather-sphere-nine.vercel.app/",
  },
  {
    title: "Prolingo",
    description: "A Duolingo-inspired app for programming languages",
    thumbnail: "/project3.png",
    techStack: ["ts", "node", "postgres"],
    gradient: "#64e, rgb(13, 1, 60)",
    github: "https://github.com/Ayushdas1904/Hack-5.0-ProLingo",
    live: "https://prolingo-alpha.vercel.app/",
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div id="projects" className={`  ${jetbrainsMono.className} flex flex-col gap-10 items-center justify-center px-4 pb-20 w-full max-w-4xl`}>
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="flex gap-2 text-[#e8390d]">
          Made with <Heart />
        </p>
        <h1 className="text-4xl md:text-6xl text-center font-bold">
          My Projects
        </h1>
      </div>

      {/* Cards */}
      <div className={`${jetbrainsMono.className} flex flex-col gap-6 w-full `}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          {...selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
