import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const programmingLanguages = [
    { name: "C++", icon: "mdi:language-cpp" },
    { name: "C#", icon: "mdi:language-csharp" },
    { name: "Java", icon: "mdi:language-java" },
    { name: "JavaScript", icon: "mdi:language-javascript" },
];

const frontend = [
    { name: "React", icon: "mdi:react" },
];

const backend = [
    { name: "ASP.NET Core", icon: "mdi:dot-net" },
    { name: "Node.js", icon: "mdi:nodejs" },
    { name: "Express.js", icon: "simple-icons:express" },
];

const databases = [
    { name: "MySQL", icon: "simple-icons:mysql" },
    { name: "MongoDB", icon: "simple-icons:mongodb" },
    { name: "MSSQL", icon: "simple-icons:microsoftsqlserver" },
];

const cloud = [
    { name: "AWS Cloud", icon: "mdi:aws" },
];

const tools = [
    { name: "Git", icon: "mdi:git" },
    { name: "Linux (RedHat)", icon: "mdi:linux" },
];

const SkillList = ({ items }) => (
    <ul className="list-none mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
        {items.map((item, index) => {
            const {
                name,
                icon,
                delay = 0.2 * index,
            } = item || {};
            return (
                <motion.li
                    key={name}
                    className="flex items-center gap-3 hover:cursor-pointer bg-white dark:bg-neutral-900 rounded-md px-4 py-3 shadow-md text-neutral-900 dark:text-white font-semibold font-mulish transition-colors duration-300 min-w-[120px] max-w-fit text-center md:text-left"
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
                    <Icon icon={icon} className="text-orange-400 text-2xl" />
                    <span className="truncate">{name}</span>
                </motion.li>
            );
        })}
    </ul>
);

const Skills = () => {
    return (
        <section
            id="skills"
            className="scroll-mt-[10vh] py-10 pb-16 w-full max-w-full z-10 h-fit gap-16 mx-auto bg-white dark:bg-neutral-800 transition-colors duration-500"
        >
            <div className="max-w-[1280px] mx-auto my-0">
                <div className="flex flex-col items-center justify-center pt-4 gap-3">
                    <motion.h1
                        className="text-black dark:text-white text-3xl sm:text-4xl md:text-5xl font-bold font-mulish text-center "
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

                <div className="flex flex-col gap-12 pt-16 px-6">
                    {/* Repeat for each section */}
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="bg-amber-400 dark:bg-orange-400 h-6 w-[0.5rem] rounded-sm"></span>
                            <h2 className="md:text-3xl text-2xl sm:text-xl font-semibold font-mulish text-black dark:text-white">
                                Programming Languages
                            </h2>
                        </div>
                        <SkillList items={programmingLanguages} />
                    </div>

                    {/* Frontend */}
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="bg-amber-400 dark:bg-orange-400 h-6 w-[0.5rem] rounded-sm"></span>
                            <h2 className="text-3xl font-semibold font-mulish text-black dark:text-white">
                                Frontend
                            </h2>
                        </div>
                        <SkillList items={frontend} />
                    </div>

                    {/* Backend */}
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="bg-amber-400 dark:bg-orange-400 h-6 w-[0.5rem] rounded-sm"></span>
                            <h2 className="text-3xl font-semibold font-mulish text-black dark:text-white">
                                Backend
                            </h2>
                        </div>
                        <SkillList items={backend} />
                    </div>

                    {/* Databases */}
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="bg-amber-400 dark:bg-orange-400 h-6 w-[0.5rem] rounded-sm"></span>
                            <h2 className="text-3xl font-semibold font-mulish text-black dark:text-white">
                                Databases
                            </h2>
                        </div>
                        <SkillList items={databases} />
                    </div>

                    {/* Cloud */}
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="bg-amber-400 dark:bg-orange-400 h-6 w-[0.5rem] rounded-sm"></span>
                            <h2 className="text-3xl font-semibold font-mulish text-black dark:text-white">
                                Cloud
                            </h2>
                        </div>
                        <SkillList items={cloud} />
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
                    {/* <div>
                        <div className="flex items-center gap-3">
                            <span className="bg-amber-400 dark:bg-orange-400 h-6 w-[0.5rem] rounded-sm"></span>
                            <h2 className="text-3xl font-semibold font-mulish text-black dark:text-white">
                                Soft Skills
                            </h2>
                        </div>
                        <SkillList items={softSkills} />
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Skills;
