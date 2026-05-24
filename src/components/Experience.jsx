import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const experiences = [
    {
        company: "DeltaX",
        link: "https://www.deltax.com/",
        roles: [
            {
                role: "Associate Product Engineer Intern",
                period: "January 2026 - Present",
                bullets: [
                    "Architected a scalable content management backend using ASP.NET Core and MSSQL, designing optimized database schemas to accelerate data retrieval.",
                    "Implemented secure JWT-based authentication and role-based access control (RBAC), ensuring robust API security and isolating business logic for high-concurrency workflows.",
                ],
                offer:
                    "https://drive.google.com/file/d/13L8BFz7NusyxWmz4IkpRHADflLo005so/view?usp=drive_link",
            },
        ],
    },
    {
        company: "LG Soft India",
        link: "https://www.lgsoftindia.com/",
        roles: [
            {
                role: "Intern",
                period: "July 2025 - February 2026",
                bullets: [
                    "Diagnosed and resolved core connectivity issues in APN and mobile data services, implementing C++ source-code fixes to ensure high-availability network operations.",
                    "Engineered robust unit testing frameworks using GTest for mission-critical telephony modules, boosting code coverage by 30% and reducing post-release defects.",
                ],
                offer:
                    "https://drive.google.com/file/d/1Qac-2r1O_kUq0wjMU4eaCXHbD1v9VGVy/view?usp=drive_link",
                completionLetter:
                    "https://drive.google.com/file/d/1yxVmpWVVh-MNPBMqc7pP42tXQTxPteT4/view?usp=sharing",
            },
        ],
    },
    {
        company: "Technical Hub",
        link: "https://technicalhub.io/",
        roles: [
            {
                role: "Java Student Intern",
                period: "Aug 2024 - November 2024",
                bullets: [
                    "Mentored 2nd-year students in OOP and Java fundamentals, providing individualized guidance on structured problem-solving and coding best practices.",
                    "Conducted 10+ coding assessments and 5+ mock interviews to enhance students' logical thinking, communication skills, and technical confidence.",
                ],
                offer:
                    "https://drive.google.com/file/d/1BWpYTEwwtKKIZWe4UT1tJJxIDuY0vzN6/view?usp=drive_link",
                completionLetter:
                    "https://drive.google.com/file/d/1jVWEe5JMzxfd1cWywz9jC58M_xSlYhl2/view?usp=sharing",
            },
        ],
    },
];

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section
            id="experience"
            className="scroll-mt-[10vh] w-full z-10  h-full gap-16 mx-auto bg-[#F2F4F7] dark:bg-[#0F1115] "
        >
            <div className="bg-[#F2F4F7] dark:bg-[#0F1115] rounded-4xl w-full min-h-[77vh] py-10 pb-16">
                <div className="mx-auto my-0 rounded-4xl max-w-8/10">
                    {/* Heading */}
                    <div className="flex flex-col items-center justify-center pt-4 gap-6">
                        <motion.h1
                            className="text-black dark:text-white text-3xl sm:text-4xl md:text-5xl font-bold font-mulish text-center pl-6"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                        >
                            Where I've{" "}
                            <span className="text-orange-400">
                                Worked
                            </span>
                        </motion.h1>

                        <motion.span
                            className="h-1 bg-orange-400"
                            initial={{ width: 0 }}
                            whileInView={{ width: "7rem" }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3,
                            }}
                            viewport={{ once: true }}
                        />
                    </div>

                    {/* Main Content */}
                    <div className="w-full flex justify-center items-center px-4 py-16">
                        <div className="w-full flex flex-row gap-6 items-center justify-center">
                            <div className="flex md:flex-row flex-col gap-6 items-start justify-center">

                                {/* Tabs */}
                                <div className="flex flex-row md:flex-col mx-auto relative md:border-l-[3px] md:border-gray-300 dark:md:border-neutral-700 overflow-x-auto md:overflow-visible no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

                                    {experiences.map((exp, index) => {
                                        const isActive =
                                            activeTab === index;

                                        return (
                                            <button
                                                key={index}
                                                onClick={() =>
                                                    setActiveTab(index)
                                                }
                                                className={`relative cursor-pointer group flex items-center px-4 py-3 text-left md:text-lg text-sm sm:text-base font-bold whitespace-nowrap min-w-max transition-colors duration-500 ease-in-out border-b-[3px] md:border-b-0
                                                
                                                ${isActive
                                                        ? "text-orange-500 border-orange-500"
                                                        : "text-gray-600 dark:text-gray-400 hover:text-orange-500 border-gray-300 dark:border-neutral-700 md:border-transparent dark:md:border-transparent"
                                                    }
                                            `}
                                            >
                                                {/* Desktop Active Indicator */}
                                                {isActive && (
                                                    <div
                                                        className="hidden md:block absolute top-0 -left-[3px] h-full w-[3px] bg-orange-500"
                                                    />
                                                )}

                                                <span className="relative z-10">
                                                    {exp.company}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Content */}
                                <motion.div
                                    key={activeTab}
                                    className="flex-1 space-y-6 max-w-xl"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeOut",
                                    }}
                                >
                                    {experiences[activeTab].roles.map(
                                        (role, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{
                                                    opacity: 0,
                                                    y: 30,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: i * 0.15,
                                                }}
                                            >
                                                <h3 className="text-xl font-semibold text-black dark:text-white flex flex-wrap gap-1">
                                                    {role.role}

                                                    <span className="text-orange-400 hover:text-orange-500 relative group inline-block">
                                                        @
                                                        <a
                                                            href={
                                                                experiences[
                                                                    activeTab
                                                                ].link
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="relative inline-block"
                                                        >
                                                            {
                                                                experiences[
                                                                    activeTab
                                                                ].company
                                                            }
                                                            <span className="absolute -bottom-[1px] left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                                                        </a>
                                                    </span>
                                                </h3>

                                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 mt-1">
                                                    {role.period}
                                                </p>

                                                <ul className="space-y-3">
                                                    {role.bullets.map(
                                                        (
                                                            item,
                                                            idx
                                                        ) => (
                                                            <li
                                                                key={idx}
                                                                className="flex items-start text-gray-700 dark:text-gray-200 text-base"
                                                            >
                                                                <span className="text-orange-400 mr-3 mt-1.5 flex-shrink-0">
                                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                                                        <path d="M8 5v14l11-7z" />
                                                                    </svg>
                                                                </span>
                                                                <span>{item}</span>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>

                                                <div className="flex flex-wrap gap-3 mt-4">
                                                    {role.completionLetter && (
                                                        <a
                                                            href={role.completionLetter}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            title="Completion Letter"
                                                            className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-orange-500 bg-orange-50 dark:bg-[#1C0E05] border border-orange-100 dark:border-orange-900/30 hover:bg-orange-100 dark:hover:bg-[#2A1508] transition-colors rounded-full group"
                                                        >
                                                            Completion Letter
                                                            <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                            </svg>
                                                        </a>
                                                    )}
                                                    {role.offer && !role.completionLetter && (
                                                        <a
                                                            href={role.offer}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            title="Offer Letter"
                                                            className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-orange-500 bg-orange-50 dark:bg-[#1C0E05] border border-orange-100 dark:border-orange-900/30 hover:bg-orange-100 dark:hover:bg-[#2A1508] transition-colors rounded-full group"
                                                        >
                                                            Offer Letter
                                                            <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                            </svg>
                                                        </a>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )
                                    )}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;