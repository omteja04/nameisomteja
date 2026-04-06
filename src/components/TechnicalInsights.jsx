import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const blogPosts = [
    {
        title: "SQL vs NoSQL: When to Use Each in Real-World Applications",
        description: "A practical guide to understanding the differences, trade-offs, and real-world use cases of SQL and NoSQL databases.",
        date: "April 4, 2026",
        readTime: "4 min read",
        link: "https://omteja04.hashnode.dev/sql-vs-nosql-when-to-use-each",
        category: "Databases",
        icon: "mdi:database",
    },
    {
        title: "Understanding Microservices vs Monoliths in 2026",
        description: "A deep dive into architecture choices, operational complexity, and when to actually use microservices.",
        date: "May 12, 2026",
        readTime: "7 min read",
        link: "#",
        category: "System Design",
        icon: "mdi:server-network",
    },
    {
        title: "Implementing OAuth2 with Node.js and Express",
        description: "A comprehensive tutorial on securing your backend APIs using OAuth2 and JWTs.",
        date: "Feb 20, 2026",
        readTime: "6 min read",
        link: "#",
        category: "Auth",
        icon: "mdi:security",
    }
];

const TechnicalInsights = () => {
    return (
        <section
            id="insights"
            className="relative scroll-mt-[10vh] py-20 px-6 sm:px-12 lg:px-24 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-500 overflow-hidden"
        >
            {/* Ambient Background Glow */}
            <div className="absolute top-40 left-0 w-96 h-96 bg-orange-300/20 dark:bg-orange-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-70 pointer-events-none"></div>
            <div className="absolute bottom-40 right-0 w-96 h-96 bg-blue-300/20 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-70 pointer-events-none"></div>

            <div className="max-w-[1280px] mx-auto relative z-10">
                {/* Header Section */}
                <div className="flex flex-col items-center justify-center mb-16 gap-3">
                    <motion.h1
                        className="text-black dark:text-white text-3xl sm:text-4xl md:text-5xl font-bold font-mulish text-center"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        Technical{" "}
                        <span className="text-orange-400">Insights</span>
                    </motion.h1>
                    <motion.span
                        className="h-1 bg-orange-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: "8rem" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    />
                    <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-center max-w-2xl font-mulish">
                        Sharing my thoughts, experiences, and deep dives into the world of backend engineering, cloud systems, and problem-solving.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.slice(0, 3).map((post, index) => (
                        <motion.article
                            key={index}
                            className="group flex flex-col bg-neutral-50 dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {/* Card Content */}
                            <div className="p-8 flex flex-col h-full relative overflow-hidden">
                                {/* Subtle Background Icon */}
                                <div className="absolute -right-4 -top-4 opacity-[0.03] dark:opacity-[0.05] pointer-events-none group-hover:scale-110 transition-transform duration-500">
                                    <Icon icon={post.icon} className="text-9xl" />
                                </div>

                                <div className="flex items-center justify-between mb-4 relative z-10">
                                    <div className="flex items-center gap-2">
                                        <Icon icon={post.icon} className="text-orange-400 text-lg" />
                                        <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-bold rounded-full uppercase tracking-wider">
                                            {post.category}
                                        </span>
                                    </div>
                                    <span className="text-neutral-500 dark:text-neutral-500 text-xs">
                                        {post.readTime}
                                    </span>
                                </div>

                                <a href={post.link} target="_blank" rel="noopener noreferrer">
                                    <h3 className="text-xl font-bold font-mulish mb-3 text-neutral-900 dark:text-white group-hover:text-orange-400 transition-colors duration-200 line-clamp-2">
                                        {post.title}
                                    </h3>
                                </a>

                                <p className="text-neutral-600 dark:text-neutral-400 text-sm font-mulish mb-6 line-clamp-3 leading-relaxed border-b border-neutral-200 dark:border-neutral-800 pb-6 flex-grow">
                                    {post.description}
                                </p>

                                <div className="mt-auto pt-2 flex items-center justify-between">
                                    <span className="text-xs text-neutral-500 dark:text-neutral-500 font-medium italic">
                                        {post.date}
                                    </span>
                                    <a
                                        href={post.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-orange-400 font-bold text-sm hover:gap-2.5 transition-all duration-300"
                                    >
                                        Read
                                        <Icon icon="fluent:arrow-right-16-filled" />
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* View All CTA */}
                <motion.div
                    className="mt-12 flex justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    >
                        <Link
                            to="/blogs"
                            className="flex items-center gap-2 px-8 py-3 bg-neutral-900 dark:bg-white text-white dark:text-black font-bold font-mulish rounded-full hover:bg-black dark:hover:bg-neutral-900 dark:hover:text-white transition-colors duration-200"
                        >
                            View More Articles
                            <Icon icon="fluent:arrow-right-16-filled" className="text-xl" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default TechnicalInsights;
