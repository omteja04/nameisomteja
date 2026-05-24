import React, { useState } from "react";
import bgImage from "../assets/backgroundImg1.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const codingProfiles = [
    {
        name: "LeetCode",
        url: "https://leetcode.com/omteja04",
        desc: "850+ problems, Max Rating 1759*",
    },
    {
        name: "GeeksforGeeks",
        url: "https://auth.geeksforgeeks.org/user/omteja04",
        desc: "530+ problems, 3★, Rating 1708*",
    },
    {
        name: "Codeforces",
        url: "https://codeforces.com/profile/omteja04",
        desc: "Pupil, Max Rating 1392*",
    },
    {
        name: "CodeChef",
        url: "https://www.codechef.com/users/omteja04",
        desc: "3★, Max Rating 1740*",
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
        title: "Servicenow Certified System Administrator (CSA)",
        issuer: "Servicenow",
        link: "https://www.credly.com/badges/cb180a1f-3052-42de-ae4d-5a25136cccfb/public_url",
    },
    {
        title: "Servicenow Certified Application developer (CAD)",
        issuer: "Servicenow",
        link: "https://www.credly.com/badges/e1a7787d-1fac-4ff6-a336-c3cd7218df31/public_url",
    },
    {
        title: "GitHub Administration",
        issuer: "GitHub",
        link: "https://www.credly.com/badges/f561aab0-a5e3-4c9b-b892-88e69a024728/public_url",
    },
    {
        title: "IT Specialist in Java",
        issuer: "Certiport Pearson",
        link: "https://www.credly.com/badges/17ee233e-54bd-4955-94a4-999a9468809f/public_url",
    },
    {
        title: "IT Specialist in HTML & CSS",
        issuer: "Certiport Pearson",
        link: "https://www.credly.com/badges/aea2b491-a0e3-4ed8-8e4b-2da4ec311639/public_url",
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
                    <ul className="space-y-4 text-sm sm:text-base">
                        {codingProfiles.map((profile, idx) => (
                            <li
                                key={idx}
                                className="flex min-w-0 flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                            >
                                <div className="leading-relaxed">
                                    <span className="font-bold text-white text-base">
                                        {profile.name}
                                    </span>
                                    <span className="text-gray-300 ml-2 text-sm sm:text-base">
                                        {profile.desc}
                                    </span>
                                </div>
                                <a
                                    href={profile.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-orange-200 bg-orange-500/20 border border-orange-500/30 hover:bg-orange-500/40 hover:text-white transition-all rounded-full whitespace-nowrap group"
                                >
                                    @omteja04
                                    <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </li>
                        ))}
                    </ul>
                );
            case "Certifications":
                return (
                    <ul className="space-y-4 text-sm sm:text-base">
                        {certifications.map((cert, idx) => (
                            <li
                                key={idx}
                                className="flex min-w-0 flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                            >
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-white hover:text-orange-300 group transition-colors"
                                >
                                    <span className="font-bold text-base leading-snug">
                                        {cert.title}
                                    </span>
                                    <svg className="w-4 h-4 opacity-0 -ml-2 transition-all group-hover:opacity-100 group-hover:translate-x-1 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 whitespace-nowrap mt-1 sm:mt-0">
                                    {cert.issuer}
                                </span>
                            </li>
                        ))}
                    </ul>
                );
            case "Achievements":
                return (
                    <ul className="list-disc list-inside space-y-3 text-sm sm:text-base text-white">
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
            className="scroll-mt-[10vh] py-10 w-full max-w-full z-10 h-fit  mx-auto bg-white dark:bg-neutral-800"
        >
            <div
                style={{ backgroundImage: `url(${bgImage})` }}
                className="border-2 border-white/30 z-10 rounded-3xl h-full w-full bg-cover bg-center bg-no-repeat px-4 sm:px-8 md:px-16 py-12 sm:py-10 md:py-12 flex flex-col items-center"
            >
                {/* Title */}
                <motion.h1
                    className="text-white text-3xl sm:text-4xl md:text-5xl font-bold font-mulish text-center mb-4"
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
                <div className="flex flex-wrap justify-center gap-3 mb-8 mt-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`cursor-pointer px-4 py-2 rounded-full text-sm font-semibold transition duration-300 ${activeTab === tab
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
                    className="bg-white/10 backdrop-blur-lg p-6 pb-12 sm:pb-6 rounded-2xl shadow-lg border border-white/20 w-full max-w-4xl min-h-[260px]"
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
