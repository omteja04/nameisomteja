import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const experiences = [
    {
        company: "Technical Hub",
        link: "https://technicalhub.io/",
        roles: [
            {
                role: "Java Intern",
                period: "Aug 2024 - November 2024",
                bullets: [
                    "Helped 2nd-year students in understanding the key concepts of Object-Oriented Programming (OOP) and Java fundamentals by creating a friendly, engaging learning environment.",
                    "Conducted 10+ coding assessments to improve students' logical thinking ability and held 5+ mock interviews to increase their confidence and communication in technical discussions.",
                    "Interacted with students individually, answering their doubts, sharing coding best practices, and guiding them toward a structured approach to problem-solving, helping them gain confidence and improve in Java.",
                ],
                offer: null,
            },
            {
                role: "AWS Development Intern",
                period: "May 2024 - July 2024",
                bullets: [
                    "Gained hands-on experience with 15+ AWS services, including Amazon EC2, AWS Lambda, Amazon S3, IAM Roles and Users, VPC, DynamoDB and more.",
                    "Developed strong proficiency in deploying, managing, and optimizing cloud-based solutions using AWS infrastructure to ensure scalability, security and performance.",
                ],
                offer: null,
            },
        ],
    },
    // Add more companies with multiple roles if needed
];

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section
            id="experience"
            className="select-none scroll-mt-[10vh] w-full z-10 h-fit gap-16 mx-auto bg-white dark:bg-neutral-800"
        >
            <div className="bg-[#F2F4F7] dark:bg-[#0F1115] rounded-4xl w-full h-fit py-10 pb-16">
                <div className="mx-auto my-0 rounded-4xl max-w-8/10">
                    <div className="flex flex-col items-center justify-center pt-4 gap-6">
                        <motion.h1
                            className="text-black dark:text-white text-3xl sm:text-4xl md:text-5xl font-bold font-mulish text-center pl-6"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Work{" "}
                            <span className="text-orange-400">Experience</span>
                        </motion.h1>
                        <motion.span
                            className="h-1 bg-orange-400"
                            initial={{ width: 0 }}
                            whileInView={{ width: "7rem" }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        />
                    </div>
                    <div className="w-full flex justify-center items-center px-4 py-16">
                        <div className="w-full flex flex-row gap-6 items-center justify-center">
                            <div className="flex md:flex-row  flex-col gap-6 items-start justify-center">
                                {/* Tab List */}
                                <div className="flex flex-row md:flex-col mx-auto">
                                    {experiences.map((exp, index) => {
                                        const isActive = activeTab === index;
                                        return (
                                            <button
                                                key={index}
                                                onClick={() =>
                                                    setActiveTab(index)
                                                }
                                                className={`cursor-pointer group flex items-center px-3 py-2 text-left md:text-lg tex-sm sm:tex-base transition-all duration-300 md:border-l-4 border-b-3  md:border-b-0 
                                                    ${
                                                        isActive
                                                            ? "border-orange-500 text-orange-500 font-semibold"
                                                            : "border-transparent text-gray-600 dark:text-gray-400 hover:bg-orange-100 dark:hover:bg-[#1C0E05] hover:font-semibold hover:text-orange-500 hover:border-orange-500"
                                                    }
                                                `}
                                            >
                                                {exp.company}
                                            </button>
                                        );
                                    })}
                                </div>
                                {/* Content */}
                                <motion.div
                                    key={activeTab}
                                    className="flex-1 space-y-6 max-w-xl"
                                    initial={{ opacity: 0, x: 0 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeOut",
                                        delay: 0.2,
                                    }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    {experiences[activeTab].roles.map(
                                        (role, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                transition={{
                                                    duration: 0.6,
                                                    ease: "easeOut",
                                                    delay: i * 0.2,
                                                }}
                                                viewport={{
                                                    once: true,
                                                    amount: 0.2,
                                                }}
                                            >
                                                <h3 className="text-xl font-semibold text-black dark:text-white flex flex-wrap gap-1">
                                                    {role.role}{" "}
                                                    <span className="text-orange-400 underline hover:text-orange-500">
                                                        @
                                                        <a
                                                            href={
                                                                experiences[
                                                                    activeTab
                                                                ].link
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            {
                                                                experiences[
                                                                    activeTab
                                                                ].company
                                                            }
                                                        </a>
                                                    </span>
                                                </h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 mt-1">
                                                    {role.period}
                                                </p>
                                                <ul className="list-disc list-inside space-y-2 flex flex-wrap">
                                                    {role.bullets.map(
                                                        (item, idx) => (
                                                            <li
                                                                key={idx}
                                                                className="text-gray-700 dark:text-gray-200 text-base"
                                                            >
                                                                {item}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                                {role.offer && (
                                                    <a
                                                        href={role.offer}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        title="Offer Letter"
                                                        className="text-sm text-orange-400 underline hover:text-orange-500"
                                                    >
                                                        View Offer Letter
                                                    </a>
                                                )}
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
