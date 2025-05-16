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
            className="select-none scroll-mt-[10vh]  w-full max-w-full z-10 h-fit gap-16 mx-auto "
        >
            <div className="bg-[#F2F4F7] rounded-4xl h-fit py-10 pb-16 ">
                <div className="max-w-[1280px] mx-auto my-0 rounded-4xl">
                    <div className="flex flex-col items-center justify-center pt-4 gap-6">
                        <motion.h1
                            className="text-black text-5xl font-bold font-mulish pl-6"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            My Work{" "}
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
                        <div className="w-full max-w-6xl flex flex-row gap-6 items-center justify-center ml-32">
                            <div className="flex flex-row gap-6 items-start justify-center">
                                {/* Tab List */}
                                <div className="flex flex-col w-40">
                                    {experiences.map((exp, index) => {
                                        const isActive = activeTab === index;
                                        return (
                                            <button
                                                key={index}
                                                onClick={() =>
                                                    setActiveTab(index)
                                                }
                                                className={`cursor-pointer group flex items-center px-3 pl-5 py-2 text-left text-lg transition-all duration-300 border-l-4
                    ${
                        isActive
                            ? "border-orange-500  text-orange-500 font-semibold"
                            : "border-transparent text-gray-600 hover:bg-orange-100 hover:font-semibold hover:text-orange-500 hover:border-orange-500"
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
                                    className="flex-1 space-y-6 w-xl"
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
                                            <div key={i}>
                                                <h3 className="text-xl font-semibold text-black">
                                                    {role.role}
                                                    <span className="text-orange-400">
                                                        {" "}
                                                        @{" "}
                                                        <a
                                                            href={
                                                                experiences[
                                                                    activeTab
                                                                ].link
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="underline hover:text-orange-500"
                                                        >
                                                            {
                                                                experiences[
                                                                    activeTab
                                                                ].company
                                                            }
                                                        </a>
                                                    </span>
                                                </h3>
                                                <p className="text-sm text-gray-500 mb-2">
                                                    {role.period}
                                                </p>
                                                <ul className="list-disc list-inside space-y-2">
                                                    {role.bullets.map(
                                                        (item, idx) => (
                                                            <li
                                                                key={idx}
                                                                className="text-gray-700 text-sm"
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
                                                        className="text-sm text-orange-400 underline hover:text-orange-500"
                                                    >
                                                        View Offer Letter
                                                    </a>
                                                )}
                                            </div>
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
