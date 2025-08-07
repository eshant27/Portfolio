'use client';

import React, { useState } from 'react';
import Lottie from 'lottie-react';
import Typewriter from 'typewriter-effect';
import scrollDownAnimation from '@/public/scroll-down.json';
import { jetbrainsMono } from '@/app/font';
import Image from 'next/image';
import EshantImg from "@/public/Eshant.jpg";
import EshantImg2 from "@/public/Eshant2.jpg"
import { MapPin } from 'lucide-react';
import Socials from '../Socials';
import { InteractiveHoverButton } from '../ui/interactive-hover-button';
export function Home() {
    const [isHovered, setIsHovered] = useState(false);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Resume.pdf';
        link.download = 'Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    

    return (
        <div id='home' className="w-full max-w-4xl flex flex-col items-center justify-center px-6 pt-20 pb-45 sm:min-h-screen relative">
            <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10 w-full max-w-5xl mt-15">
                <div className="flex-1">
                    <div className="flex items-center gap-3">
                        <h1 className="text-4xl sm:text-6xl font-bold ">
                            Hey, I&apos;m <span className='text-[#e8390d]'>Eshant</span>
                        </h1>
                        <span
                            className="text-4xl sm:text-5xl"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            style={{
                                transformOrigin: '70% 70%',
                                animation: isHovered ? 'wave 1.2s ease-in-out infinite' : 'none',
                                display: 'inline-block',
                            }}
                        >
                            👋
                        </span>
                    </div>
                    <p className={` ${jetbrainsMono.className} flex items-center mt-4 text-[#dd431d] gap-2 text-sm sm:text-lg text-right`}> <MapPin /> Lucknow , Uttar Pradesh, India</p>

                    <span className="tailwind-wrapper mt-4 text-lg sm:text-3xl font-medium block text-left text-zinc-800 dark:text-zinc-200">
                        <Typewriter
                            options={{
                                strings: ['FULL STACK DEVELOPER', 'CS STUDENT'],
                                autoStart: true,
                                loop: true,
                                delay: 20,
                                deleteSpeed: 5,
                            }}
                        />
                    </span>

                    <div className="flex flex-wrap gap-4 items-center">
                        <Socials />
                        <InteractiveHoverButton onClick={handleDownload} />
                    </div>


                    <p
                        className={`mt-4 text-sm sm:text-lg dark:text-zinc-500 text-justify leading-relaxed ${jetbrainsMono.className}`}
                    >
                        B.Tech CS student at SRMCEM, Lucknow. MERN stack developer building practical projects and improving problem-solving ability with Data Structure & Algorithm in Java.
                    </p>
                </div>

                {/* Image Section */}
                <div
                    className="w-48 h-48 sm:w-70 sm:h-70 relative shrink-0 rounded-full overflow-hidden transition-all duration-300"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Base image */}
                    <Image
                        src={EshantImg}
                        alt="Ayush"
                        fill
                        className={`object-cover rounded-full transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"
                            }`}
                    />

                    {/* Hover image */}
                    <Image
                        src={EshantImg2}
                        alt="Eshant Hover"
                        fill
                        className={`object-cover rounded-full absolute top-0 left-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"
                            }`}
                    />
                </div>

            </div>

            {/* Scroll Down Animation */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-17 z-10 hidden md:block ">
                <Lottie animationData={scrollDownAnimation} loop />
            </div>
        </div>
    );
}
