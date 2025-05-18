import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import project1 from "../assets/UrlShortener.jpg";
import project2 from "../assets/sushi-shinobi.jpg";
import project3 from "../assets/portfolio.jpg";
const projectsData = [
    {
        img: project3,
        title: "Personal Developer Portfolio",
        description: `Designed and developed a modern, interactive portfolio to showcase projects, skills, and experience. Optimized for performance, accessibility, and responsiveness across 15+ screen sizes and devices, with smooth animations and clean UI/UX.`,
        services: "React • Tailwind CSS • Framer Motion • Vercel",
        liveDemo: "https://nameisomteja.vercel.app/",
        repo: "https://github.com/omteja04/nameisomteja",
        overlayColor: "orange-500",
    },
    {
        img: project1,
        title: "Serverless URL Shortener With AWS Lambda",
        description: `A cloud-based URL shortener that enables quick creation of compact links and reliably tracks user visits. Designed for seamless scalability and high availability.`,
        services:
            "AWS Services — AWS Lambda with Node.js • DynamoDB • API Gateway",
        liveDemo: "https://omteja04.github.io/levi",
        repo: "https://github.com/omteja04/levi",
        overlayColor: "orange-400",
    },
    {
        img: project2,
        title: "Sushi Shinobi — Frontend Landing Page of a Restaurant ",
        description: `Designed a comprehensive and user-friendly restaurant landing page, optimized for responsiveness and tested across multiple devices to ensure consistent and smooth performance.`,
        services: "HTML • CSS • JavaScript — AOS (Animate On Scroll) • Vercel",
        liveDemo: "https://sushi-shinobi.vercel.app/",
        repo: "https://github.com/omteja04/sushi-shinobi",
        overlayColor: "orange-500",
    },

    // Add more project objects here similarly
];

const Projects = () => {
    return (
        <section
            id="projects"
            className="select-none scroll-mt-[10vh] pt-10  w-full max-w-full z-10 h-fit gap-16 mx-auto bg-white dark:bg-neutral-900"
        >
            <div className="max-w-[1280px] mx-auto my-0 rounded-4xl">
                <div className="flex flex-col items-center justify-center  gap-6">
                    <motion.h1
                        className="text-black dark:text-white text-5xl font-bold font-mulish pl-6"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        Some things{" "}
                        <span className="text-orange-400">I've Built</span>
                    </motion.h1>

                    <motion.span
                        className=" h-1 bg-orange-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: "7rem" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    />
                </div>

                <div className="max-w-[1280px] mx-auto mt-[4rem] pb-2 flex flex-col gap-16 px-10">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`flex ${
                                index % 2 === 0
                                    ? "flex-row"
                                    : "flex-row-reverse"
                            } justify-center items-center gap-8 relative`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.15,
                            }}
                            viewport={{ once: true, amount: 0.32 }}
                        >
                            {/* Left: Image with Overlay */}
                            <div className="relative group">
                                <a
                                    href={project.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="View Live Demo"
                                >
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        width={600}
                                        className="shadow-xl rounded-xl relative z-10 transition-opacity duration-300 group-hover:opacity-100"
                                    />
                                    {/* Black Overlay */}
                                    <div
                                        className={`absolute inset-0 bg-${project.overlayColor} opacity-40 border-2 dark:border-white/20 border-black/20 rounded-xl z-20 group-hover:opacity-0 transition-opacity duration-300`}
                                    ></div>
                                </a>
                            </div>
                            {/* Right: Content */}
                            <div
                                className={`max-w-xl relative z-30 ${
                                    index % 2 === 0
                                        ? "text-right -ml-16"
                                        : "text-left -mr-16"
                                }`}
                            >
                                <a
                                    href={project.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black  dark:text-white hover:text-orange-500 dark:hover:text-orange-500 transition-colors"
                                    aria-label="View Live Demo"
                                >
                                    <h2 className="text-2xl font-bold mb-4 px-6 leading-tight">
                                        {project.title}
                                    </h2>
                                </a>
                                <motion.p
                                    whileHover={{ scale: 1.01 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}
                                    className="text-black dark:text-white mb-3 bg-white dark:bg-neutral-800 px-10 py-6 rounded-md shadow-xl cursor-pointer"
                                >
                                    {project.description}
                                </motion.p>

                                <p className="text-black dark:text-white font-semibold py-2 mb-2">
                                    {project.services}
                                </p>

                                <div
                                    className={`flex space-x-6 ${
                                        index % 2 === 0
                                            ? "justify-end pr-6"
                                            : "justify-start pl-6"
                                    }`}
                                >
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-black dark:text-white hover:text-orange-500 transition-colors"
                                        aria-label="View GitHub Repo"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            role="img"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-github w-6 h-6"
                                        >
                                            <title>Source Code</title>
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                    </a>
                                    <a
                                        href={project.liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-black dark:text-white hover:text-orange-500 transition-colors"
                                        aria-label="View Live Demo"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            role="img"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-external-link w-6 h-6"
                                        >
                                            <title>Live Demo</title>
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line
                                                x1="10"
                                                y1="14"
                                                x2="21"
                                                y2="3"
                                            ></line>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
