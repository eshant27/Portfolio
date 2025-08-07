import Image from "next/image";
import React, { useEffect, useState } from "react";
import { techIconMap } from "./navPages/Projects";

interface AcademicsCardProps {
    title: string;
    duration: string;
    description: string;
    thumbnail: string;
    techStack: string[];
    gradient: string;
}

export default function AcademicsCard({
    title,
    description,
    duration,
    thumbnail,
    techStack,
    gradient,
}: AcademicsCardProps) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
        }
    }, []);

    const lightShadow = {
        boxShadow: `
      rgba(0, 0, 0, 0.5) 0px 15px 25px,
      rgba(0, 0, 0, 0.35) 0px 10px 15px,
      rgba(0, 0, 0, 0.25) 0px 4px 6px
    `,
    };

    const darkShadow = {
        boxShadow: `
      rgba(200, 200, 200, 0.2) 2px 2px 6px,
      rgba(160, 160, 160, 0.15) 0px 6px 10px
    `,
    };

    return (
        <div
            className="relative cursor-pointer border-[10px] dark:border-slate-900 rounded-xl overflow-hidden group transition-all duration-300"
            style={{
                ...(isDarkMode ? lightShadow : darkShadow),
                background: `radial-gradient(circle at 50% 0%, ${gradient})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

            {/* Main content */}
            <div className="relative z-10 flex flex-col md:flex-row items-start justify-center gap-6 px-6 pt-4">
                {/* Text */}
                <div className="text-white w-64 pb-10">
                    <div className="flex justify-between items-center ">
                        <h2 className="text-xl md:text-2xl font-bold ">{title.toUpperCase()  }</h2>
                        <p>{duration}</p>
                    </div>
                    <p className="mt-2 text-sm md:text-base text-white/80">{description}</p>
                </div>

                {/* Tech stack with overlapping icons */}
                {/* <div className="flex md:justify-end transition-all duration-500">
                    {techStack.map((tech, index) => (
                        <div
                            key={index}
                            className={`w-12 h-12 rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center text-[24px] sm:text-[28px] shadow-md transition-all duration-500
        -ml-4 group-hover:ml-0`}
                            style={{ zIndex: techStack.length - index }}
                        >
                            {techIconMap[tech] || null}
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    );
}
