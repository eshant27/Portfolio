"use client";
import { FaReact } from "react-icons/fa6";
import { RiJavaFill, RiCss3Fill, RiHtml5Fill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiJavascript } from "react-icons/si";
import SkillCard from "../SkillCard";
import { jetbrainsMono } from "@/app/font";

const skills = [
    { name: "Java", icon: <RiJavaFill />, hoverColor: "group-hover:text-yellow-500" },
    { name: "HTML 5", icon: <RiHtml5Fill />, hoverColor: "group-hover:text-orange-500" },
    { name: "CSS", icon: <RiCss3Fill />, hoverColor: "group-hover:text-blue-500" },
    { name: "React.js", icon: <FaReact />, hoverColor: "group-hover:text-cyan-300" },
    { name: "JavaScript", icon: <SiJavascript />, hoverColor: "group-hover:text-yellow-500" },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill />, hoverColor: "group-hover:text-cyan-400" },
];

export default function SkillsSection() {
    return (
        <section id="skills" className={` ${jetbrainsMono.className} flex flex-col gap-10 py-16 px-4 pt-26`}>
            <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-4xl md:text-6xl text-center font-bold">
                    My Skills
                </h1>
            </div>
            <div className="flex flex-wrap max-w-4xl mx-auto gap-6 items-center justify-center">
                {skills.map((skill, index) => (
                    <SkillCard key={index} {...skill} />
                ))}
            </div>
        </section>
    );
}
