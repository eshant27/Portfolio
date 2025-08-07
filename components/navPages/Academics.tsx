import React, { JSX, useState } from "react";
import AcademicsCard from "../AcademicsCard";
import ProjectModal from "../ProjectModal";
import { jetbrainsMono } from "@/app/font";

import {SiHtml5} from "react-icons/si";
import { SlGraduation} from "react-icons/sl";

export const techIconMap: Record<string, JSX.Element> = {
  html5: <SlGraduation className="text-yellow-500" />,
};

const projects = [
  { 
    title: "GRADUATION",
    duration: "2022-Till",
    description: "Currently I am a final-year student at SRMCEM, Lucknow pursuing B.tech from Computer Science Stream where I have excelled many of the techincal tools and skills. Actively building skills through coding challenges and internships, and modern web technologies.",
    techStack: ["html5",],
    gradient: "#51fbfb, rgb(13, 1, 60)",
  },
  {
    title: "Secondary",
    duration: "2021",
    description: "St. Antony's Inter College | 2021 Specialized in Physics, Chemistry, and Mathematics (PCM) under the ICSE board, securing 89% overall. This academic phase developed my problem-solving abilities and deepened my interest in technology.",
    techStack: ["html5",],
    gradient: "#14f195, rgb(13, 1, 60)",
  },
  {
    title: "High School",
    duration: "2019",
    description: "St. Antony's Inter College | 2019 Achieved a solid academic foundation with a 90% overall score under the Indian Certificate of Secondary Education (ICSE) curriculum. This phase built strong fundamentals across core subjects including Mathematics, Science, and English.",
    techStack: ["html5",],
    gradient: "#64e, rgb(13, 1, 60)",
  },
];

export function Academics() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div id="academics" className={` ${jetbrainsMono.className} flex flex-col gap-10 items-center justify-center px-4 pb-20  pt-25 w-full max-w-4xl`}>
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl md:text-6xl text-center font-bold ">
          Academics
        </h1>
      </div>

      {/* Cards */}
      <div className={`${jetbrainsMono.className} flex gap-6 `}>
        {projects.map((project, index) => (
          <AcademicsCard
            key={index}
            {...project}
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
