import React, { useState } from "react";
import bgImage from "../assets/backgroundImg1.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const codingProfiles = [
    {
        name: "LeetCode",
        url: "https://leetcode.com/omteja04",
        desc: "650+ problems, Max Rating 1725*",
    },
    {
        name: "GeeksforGeeks",
        url: "https://auth.geeksforgeeks.org/user/omteja04",
        desc: "500+ problems, 3★, Rating 1708*",
    },
    {
        name: "Codeforces",
        url: "https://codeforces.com/profile/omteja04",
        desc: "Pupil, Max Rating 1392*",
    },
    {
        name: "CodeChef",
        url: "https://www.codechef.com/users/omteja04",
        desc: "3★, Max Rating 1669*",
    },
    {
        name: "HackerRank",
        url: "https://www.hackerrank.com/omteja04",
        desc: "5★ in Problem-Solving, C, C++, Java, Python",
    },
];

const certifications = [
    {
        title: "Red Hat Certified System Administrator (RHCSA)",
        issuer: "Red Hat",
        link: "https://rhtapps.redhat.com/verify?certId=240-110-783",
    },
    {
        title: "GitHub Administration",
        issuer: "GitHub",
        link: "https://www.credly.com/badges/f561aab0-a5e3-4c9b-b892-88e69a024728/public_url",
    },
    {
        title: "IT Specialist in HTML & CSS",
        issuer: "Certiport Pearson",
        link: "https://www.credly.com/badges/aea2b491-a0e3-4ed8-8e4b-2da4ec311639/public_url",
    },
    {
        title: "IT Specialist in Java",
        issuer: "Certiport Pearson",
        link: "https://www.credly.com/badges/17ee233e-54bd-4955-94a4-999a9468809f/public_url",
    },
];

const achievements = [
    "Adobe GenSolve'24 Hackathon: Ranked Top 50 among 1,00,000+ participants from 400+ universities across India.",
];

const tabs = ["Coding Profiles", "Certifications", "Achievements"];

const Achievements = () => {
    const [activeTab, setActiveTab] = useState("Coding Profiles");

    const renderContent = () => {
        switch (activeTab) {
            case "Coding Profiles":
                return (
                    <ul className="space-y-3 text-sm">
                        {codingProfiles.map((profile, idx) => (
                            <li
                                key={idx}
                                className="flex justify-between items-center gap-4 text-sm text-white"
                            >
                                <span>
                                    <span className="font-bold">
                                        {profile.name}
                                    </span>
                                    : {profile.desc}
                                </span>
                                <a
                                    href={profile.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-300 underline hover:text-orange-400 whitespace-nowrap"
                                >
                                    omteja04
                                </a>
                            </li>
                        ))}
                    </ul>
                );
            case "Certifications":
                return (
                    <ul className="space-y-3 text-sm">
                        {certifications.map((cert, idx) => (
                            <li
                                key={idx}
                                className="flex justify-between items-center gap-4 text-sm text-white"
                            >
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-orange-200 whitespace-nowrap"
                                >
                                    <span className="font-bold">
                                        {cert.title}
                                    </span>
                                </a>
                                <span className="italic">{cert.issuer}</span>
                            </li>
                        ))}
                    </ul>
                );
            case "Achievements":
                return (
                    <ul className="list-disc list-inside space-y-3 text-sm text-white">
                        {achievements.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                );
            default:
                return null;
        }
    };

    return (
        <section
            id="achievements"
            className="select-none scroll-mt-[10vh] pt-10 w-full max-w-full z-10 h-[90vh] mx-auto bg-white dark:bg-neutral-900"
        >
            <div
                style={{ backgroundImage: `url(${bgImage})` }}
                className=" border-2 border-white/30 z-10 rounded-[4rem] h-full w-full bg-cover bg-center bg-no-repeat px-4 md:px-16 py-12 flex flex-col items-center"
            >
                {/* Title */}
                <motion.h1
                    className="text-white text-5xl font-bold font-mulish mb-4"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    Certifications &{" "}
                    <span className="text-orange-400">Achievements</span>
                </motion.h1>

                <motion.span
                    className="h-1 bg-orange-400 mb-8"
                    initial={{ width: 0 }}
                    whileInView={{ width: "7rem" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                />

                {/* Tab Buttons */}
                <div className="flex justify-center space-x-4 mb-8 mt-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`cursor-pointer px-4 py-2 rounded-full text-sm font-semibold transition duration-300 ${
                                activeTab === tab
                                    ? "bg-orange-400 text-white shadow-md"
                                    : "bg-white/20 text-white hover:bg-orange-300/40"
                            } backdrop-blur-lg border border-white/20`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content Box */}
                <motion.div
                    className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/20 w-full max-w-4xl min-h-[200px]"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {/* <h3 className="text-orange-400 text-2xl font-bold mb-4">
                        {activeTab}
                    </h3> */}
                    {renderContent()}
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
