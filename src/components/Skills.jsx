import React from "react";
import { VscVscode } from "react-icons/vsc";
import { SiPostman, SiMarkdown, SiExpress, SiC } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const programmingLanguages = [
    { name: "C", icon: "bx bx-code-alt" },
    { name: "C++", icon: "bx bxl-c-plus-plus" },
    { name: "Java", icon: "bx bxl-java" },
    { name: "Python", icon: "bx bxl-python" },
];

const frontendAndBackend = [
    { name: "HTML5", icon: "bx bxl-html5" },
    { name: "CSS3", icon: "bx bxl-css3" },
    { name: "JavaScript", icon: "bx bxl-javascript" },
    { name: "React", icon: "bx bxl-react" },
    { name: "Node.js", icon: "bx bxl-nodejs" },
    { name: "Express.js", icon: null, importedIcon: <SiExpress /> },
];
const databasesAndCloud = [
    { name: "MySQL", icon: null, importedIcon: <GrMysql /> },
    { name: "MongoDB", icon: "bx bxl-mongodb" },
    { name: "AWS Cloud", icon: "bx bxl-aws" },
];
const tools = [
    { name: "Git", icon: "bx bxl-git" },
    { name: "GitHub", icon: "bx bxl-github" },
    { name: "Figma", icon: "bx bxl-figma" },
    { name: "Markdown", icon: null, importedIcon: <SiMarkdown /> },
    { name: "Postman", icon: null, importedIcon: <SiPostman /> },
    { name: "VS Code", icon: null, importedIcon: <VscVscode /> },
    { name: "Linux (RedHat)", icon: "bx bxl-tux" },
];

const softSkills = [
    { name: "Team Collaboration", icon: "bx bx-group" },
    { name: "Problem Solving", icon: "bx bx-wrench" },
    { name: "Effective Communication", icon: "bx bx-message-rounded" },
    { name: "Time Management", icon: "bx bx-timer" },
    { name: "Adaptability", icon: "bx bx-sync" },
    { name: "Critical Thinking", icon: "bx bx-brain" },
];
const SkillList = ({ items }) => (
    <ul className="list-none mt-4 flex flex-wrap gap-3">
        {items.map((item, index) => {
            const {
                name,
                icon,
                importedIcon,
                delay = 0.2 * index,
            } = item || {};
            return (
                <motion.li
                    key={name}
                    className="flex items-center gap-3 hover:cursor-pointer bg-white dark:bg-neutral-800 rounded-md px-4 py-4 shadow-md text-neutral-900 dark:text-white font-semibold font-mulish transition-colors duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{
                        color: "#fb923c",
                        scale: 1.05,
                        backgroundColor: "rgba(251, 146, 60, 0.1)",
                        transition: { delay: 0, duration: 0.1 },
                    }}
                    transition={{ duration: 0.5, delay }}
                    viewport={{ once: true }}
                    title={name}
                >
                    {icon ? (
                        <i className={`${icon} text-orange-400 text-2xl`}></i>
                    ) : (
                        <span className="text-orange-400 text-2xl">
                            {importedIcon}
                        </span>
                    )}
                    <span>{name}</span>
                </motion.li>
            );
        })}
    </ul>
);

const Skills = () => {
    return (
        <section
            id="skills"
            className="select-none scroll-mt-[10vh] py-10 pb-16 w-full max-w-full z-10 h-fit gap-16 mx-auto bg-white dark:bg-neutral-900 transition-colors duration-500"
        >
            <div className="max-w-[1280px] mx-auto my-0">
                <div className="flex flex-col items-center justify-center pt-4 gap-3">
                    <motion.h1
                        className="text-black dark:text-white text-5xl font-bold font-mulish pl-6"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        Skills &{" "}
                        <span className="text-orange-400">Tech Stack</span>
                    </motion.h1>
                    <motion.span
                        className="h-1 bg-orange-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: "7rem" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    />
                </div>

                <div className="flex flex-col gap-12 pt-16 px-6 md:px-0">
                    {/* Repeat for each section */}
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="bg-amber-400 dark:bg-orange-400 h-6 w-[0.5rem] rounded-sm"></span>
                            <h2 className="text-3xl font-semibold font-mulish text-black dark:text-white">
                                Programming Languages
                            </h2>
                        </div>
                        <SkillList items={programmingLanguages} />
                    </div>

                    {/* Frontend & Backend */}
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="bg-amber-400 dark:bg-orange-400 h-6 w-[0.5rem] rounded-sm"></span>
                            <h2 className="text-3xl font-semibold font-mulish text-black dark:text-white">
                                Frontend & Backend
                            </h2>
                        </div>
                        <SkillList items={frontendAndBackend} />
                    </div>
                    {/* Databases & Cloud */}
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="bg-amber-400 dark:bg-orange-400 h-6 w-[0.5rem] rounded-sm"></span>
                            <h2 className="text-3xl font-semibold font-mulish text-black dark:text-white">
                                Databases & Cloud
                            </h2>
                        </div>
                        <SkillList items={databasesAndCloud} />
                    </div>

                    {/* Tools */}
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="bg-amber-400 dark:bg-orange-400 h-6 w-[0.5rem] rounded-sm"></span>
                            <h2 className="text-3xl font-semibold font-mulish text-black dark:text-white">
                                Tools
                            </h2>
                        </div>
                        <SkillList items={tools} />
                    </div>

                    {/* Soft Skills */}
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="bg-amber-400 dark:bg-orange-400 h-6 w-[0.5rem] rounded-sm"></span>
                            <h2 className="text-3xl font-semibold font-mulish text-black dark:text-white">
                                Soft Skills
                            </h2>
                        </div>
                        <SkillList items={softSkills} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
