import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { projectsData } from "../data/projects";

const Projects = () => {
    return (
        <section
            id="projects"
            className="scroll-mt-[10vh] pt-16 w-full max-w-full z-10 h-fit mx-auto bg-white dark:bg-neutral-800"
        >
            <div className="max-w-7xl mx-auto rounded-4xl">

                {/* Heading */}
                <div className="flex flex-col items-center justify-center gap-6">
                    <motion.h1
                        className="text-black dark:text-white text-3xl sm:text-4xl md:text-5xl font-bold font-mulish text-center"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        Some things{" "}
                        <span className="text-orange-400">
                            I've Built
                        </span>
                    </motion.h1>

                    <motion.span
                        className="h-1 bg-orange-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "7rem" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    />
                </div>

                {/* Projects */}
                <div className="max-w-325 mx-auto mt-24 pb-8 flex flex-col gap-32 px-4 sm:px-10">

                    {projectsData.filter(p => p.featured).map((project, index) => (
                        <motion.div
                            key={index}
                            className="grid grid-cols-1 lg:grid-cols-12 items-center relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true, amount: 0.25 }}
                        >

                            {/* IMAGE SECTION */}
                            <div
                                className={`
                                    relative group row-start-1
                                    min-h-80
                                    lg:min-h-105
                                    rounded-2xl overflow-hidden
                                    transition-all duration-500
                                    shadow-2xl
                                    hover:shadow-[0_0_40px_rgba(251,146,60,0.25)]
                                    bg-black

                                    col-start-1 col-end-2
                                    opacity-[0.2] lg:opacity-100

                                    ${index % 2 === 0
                                        ? "lg:col-start-1 lg:col-end-8"
                                        : "lg:col-start-6 lg:col-end-13"
                                    }
                                `}
                            >
                                {(project.liveDemo || project.repo) ? (
                                    <a
                                        href={project.liveDemo || project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="View Project"
                                        className="relative block w-full h-full transition-all duration-300 group-hover:shadow-orange-500/20 z-10"
                                    >
                                        {/* Overlay */}
                                        <div
                                            className={`
                                                absolute inset-0
                                                bg-${project.overlayColor}
                                                opacity-20
                                                rounded-2xl
                                                z-20
                                                transition-opacity duration-500
                                                group-hover:opacity-0
                                            `}
                                        />

                                        <img
                                            src={project.img}
                                            alt={project.title}
                                            className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </a>
                                ) : (
                                    <div className="relative block w-full h-full">
                                        <div
                                            className={`
                                                absolute inset-0
                                                bg-${project.overlayColor}
                                                opacity-20
                                                rounded-2xl
                                                z-20
                                            `}
                                        />

                                        <img
                                            src={project.img}
                                            alt={project.title}
                                            className="w-full h-full object-contain object-center"
                                        />
                                    </div>
                                )}
                            </div>

                            {/* CONTENT SECTION */}
                            <div
                                className={`
                                    relative z-30 row-start-1
                                    flex flex-col
                                    text-left items-start
                                    p-6 sm:p-8 lg:p-0

                                    ${index % 2 === 0
                                        ? `
                                            lg:col-start-6 lg:col-end-13
                                            lg:items-end
                                            lg:text-right
                                          `
                                        : `
                                            lg:col-start-1 lg:col-end-8
                                            lg:items-start
                                            lg:text-left
                                          `
                                    }
                                `}
                            >

                                {/* Featured */}
                                {project.featured && (
                                    <p className="text-orange-400 font-mono text-[11px] tracking-[0.2em] uppercase mb-3 font-semibold">
                                        Featured Project
                                    </p>
                                )}

                                {/* Title */}
                                {(project.liveDemo || project.repo) ? (
                                    <a
                                        href={project.liveDemo || project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/title mb-6"
                                    >
                                        <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white transition-colors duration-300 group-hover/title:text-orange-400">
                                            {project.title}
                                        </h2>

                                        {project.caption && (
                                            <p className="text-base sm:text-lg mt-2 text-gray-600 dark:text-gray-400 transition-colors duration-300 group-hover/title:text-orange-400">
                                                {project.caption}
                                            </p>
                                        )}
                                    </a>
                                ) : (
                                    <div className="mb-6">
                                        <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white">
                                            {project.title}
                                        </h2>

                                        {project.caption && (
                                            <p className="text-base sm:text-lg mt-2 text-gray-600 dark:text-gray-400">
                                                {project.caption}
                                            </p>
                                        )}
                                    </div>
                                )}

                                {/* Description Card */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.25 }}
                                    className="
                                        relative z-20
                                        w-fit max-w-[550px]
                                        px-6 py-6 sm:px-8 sm:py-8
                                        rounded-2xl
                                        bg-[#ffffff10]
                                        dark:bg-neutral-900/90
                                        backdrop-blur-md
                                        border border-white/10
                                        shadow-2xl
                                        text-gray-800 dark:text-gray-300
                                        text-left
                                    "
                                >
                                    <ul className="space-y-3">
                                        {Array.isArray(project.description) ? project.description.map((item, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start text-sm sm:text-base leading-relaxed"
                                            >
                                                <span className="text-orange-400 mr-3 mt-1.5 flex-shrink-0">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                </span>
                                                <span>{item}</span>
                                            </li>
                                        )) : (
                                            <p className="text-sm sm:text-base leading-relaxed">
                                                {project.description}
                                            </p>
                                        )}
                                    </ul>
                                </motion.div>

                                {/* Tech Stack */}
                                <ul
                                    className={`
                                        flex flex-wrap gap-x-5 gap-y-2
                                        mt-6 mb-5
                                        text-[13px]
                                        font-mono
                                        text-gray-700 dark:text-gray-400
                                        w-full

                                        ${index % 2 === 0
                                            ? "lg:justify-end"
                                            : "lg:justify-start"
                                        }
                                    `}
                                >
                                    {project.services
                                        .split("•")
                                        .map((tech, i) => (
                                            <li
                                                key={i}
                                                className="whitespace-nowrap"
                                            >
                                                {tech.trim().replace(/^—\s*/, "")}
                                            </li>
                                        ))}
                                </ul>

                                {/* Icons */}
                                <div
                                    className={`
                                        flex items-center gap-5 w-full

                                        ${index % 2 === 0
                                            ? "lg:justify-end"
                                            : "lg:justify-start"
                                        }
                                    `}
                                >
                                    {/* GitHub */}
                                    {project.repo && (
                                        <a
                                            href={project.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 dark:text-gray-400 hover:text-orange-400 transition-colors duration-300"
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
                                                className="w-5 h-5"
                                            >
                                                <title>Source Code</title>

                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                            </svg>
                                        </a>
                                    )}

                                    {/* External Link */}
                                    {project.liveDemo && (
                                        <a
                                            href={project.liveDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 dark:text-gray-400 hover:text-orange-400 transition-colors duration-300"
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
                                                className="w-5 h-5"
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
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Other Projects Section */}
                {projectsData.filter(p => !p.featured).length > 0 && (
                    <div className="max-w-[1100px] mx-auto mt-20 px-4 sm:px-10 pb-20">
                        <motion.h2
                            className="text-black dark:text-white text-2xl sm:text-3xl font-bold font-mulish text-center mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Other Projects
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {projectsData.filter(p => !p.featured).map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-50 dark:bg-neutral-900 rounded-xl p-6 sm:p-8 flex flex-col justify-between h-full group hover:-translate-y-2 transition-all duration-300 shadow-md hover:shadow-xl border border-gray-100 dark:border-neutral-700/50"
                                >
                                    <div>
                                        {/* Top Icons */}
                                        <div className="flex justify-between items-center mb-8">
                                            <div className="text-orange-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 feather feather-folder">
                                                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                                </svg>
                                            </div>
                                            <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
                                                {project.repo && (
                                                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors" aria-label="GitHub Link">
                                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                                    </a>
                                                )}
                                                {(project.liveDemo || project.repo) && (
                                                    <a href={project.liveDemo || project.repo} target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors" aria-label="External Link">
                                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        {/* Title & Description */}
                                        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-black dark:text-gray-200 group-hover:text-orange-400 transition-colors">
                                            <a href={project.liveDemo || project.repo} target="_blank" rel="noopener noreferrer">
                                                {project.title}
                                            </a>
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                                            {Array.isArray(project.description) ? project.description[0] : project.description}
                                        </p>
                                    </div>

                                    {/* Tech Stack Footer */}
                                    <ul className="flex flex-wrap gap-x-3 gap-y-2 mt-auto text-[13px] font-mono text-gray-500 dark:text-gray-500">
                                        {project.services.split("•").map((tech, i) => (
                                            <li key={i} className="whitespace-nowrap">
                                                {tech.trim().replace(/^—\s*/, "")}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;