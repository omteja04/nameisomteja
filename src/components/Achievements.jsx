import React from "react";
import bgImage from "../assets/backgroundImg1.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Achievements = () => {
    return (
        <section
            id="achievements"
            className="select-none scroll-mt-[10vh] pt-10 w-full max-w-full z-10 h-[90vh] flex justify-center items-end gap-16 mx-auto bg-white"
        >
            <div
                style={{ backgroundImage: `url(${bgImage})` }}
                className="z-10 rounded-[4rem] h-full w-full bg-cover bg-center bg-no-repeat"
            >
                {/* Title */}
                <div className="flex flex-col items-center justify-center pt-12 gap-6">
                    <motion.h1
                        className="text-white text-5xl font-bold font-mulish pl-6"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        Certifications &{" "}
                        <span className="text-orange-400">Achievements</span>
                    </motion.h1>
                    <motion.span
                        className="h-1 bg-orange-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: "7rem" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    />
                </div>

                {/* Content Section */}
                <div className="w-full flex flex-col justify-center items-center px-4 py-12 md:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white w-full max-w-6xl">
                        {/* Coding Profiles */}
                        <motion.div
                            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/20"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-orange-400 text-2xl font-semibold mb-4">
                                Coding Profiles
                            </h3>
                            <ul className="list-disc list-inside space-y-3 text-sm">
                                <li>
                                    <a
                                        href="https://leetcode.com/omteja04"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-orange-300 underline hover:text-orange-400"
                                    >
                                        LeetCode
                                    </a>
                                    : 650+ problems, Max Rating 1725*
                                </li>
                                <li>
                                    <a
                                        href="https://auth.geeksforgeeks.org/user/omteja04"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-orange-300 underline hover:text-orange-400"
                                    >
                                        GeeksforGeeks
                                    </a>
                                    : 500+ problems, 3★, Rating 1708*
                                </li>
                                <li>
                                    <a
                                        href="https://codeforces.com/profile/omteja04"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-orange-300 underline hover:text-orange-400"
                                    >
                                        Codeforces
                                    </a>
                                    : Pupil, Max Rating 1392*
                                </li>
                                <li>
                                    <a
                                        href="https://www.codechef.com/users/omteja04"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-orange-300 underline hover:text-orange-400"
                                    >
                                        CodeChef
                                    </a>
                                    : 3★, Max Rating 1669*
                                </li>
                                <li>
                                    <a
                                        href="https://www.hackerrank.com/omteja04"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-orange-300 underline hover:text-orange-400"
                                    >
                                        HackerRank
                                    </a>
                                    : 5★ in DSA, C, C++, Java, Python
                                </li>
                            </ul>
                        </motion.div>

                        {/* Certifications */}
                        <motion.div
                            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/20"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-orange-400 text-2xl font-semibold mb-4">
                                Certifications
                            </h3>
                            <ul className="list-disc list-inside space-y-3 text-sm">
                                <li>
                                    Red Hat Certified System Administrator
                                    (RHCSA) - Red Hat (
                                    <a
                                        href="https://rhtapps.redhat.com/verify?certId=240-110-783"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-orange-300 underline hover:text-orange-400"
                                    >
                                        Verify
                                    </a>
                                    )
                                </li>
                                <li>
                                    GitHub Administration - GitHub (
                                    <a
                                        href="https://www.credly.com/badges/f561aab0-a5e3-4c9b-b892-88e69a024728/public_url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-orange-300 underline hover:text-orange-400"
                                    >
                                        View
                                    </a>
                                    )
                                </li>
                                <li>
                                    IT Specialist in HTML & CSS, JAVA -
                                    Certiport Pearson (
                                    <a
                                        href="https://certiport.pearsonvue.com/verify/XXXXXXX"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-orange-300 underline hover:text-orange-400"
                                    >
                                        Verify
                                    </a>
                                    )
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Achievements */}
                    <motion.div
                        className="mt-10 bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/20 w-full max-w-4xl"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-orange-400 text-2xl font-semibold mb-4">
                            Achievements
                        </h3>
                        <ul className="list-disc list-inside space-y-3 text-sm text-white">
                            <li>
                                Adobe GenSolve'24 Hackathon: Ranked Top 50 among
                                1,00,000+ participants from 400+ universities
                                across India.
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
