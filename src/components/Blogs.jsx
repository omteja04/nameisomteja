import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const allPosts = [
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
        title: "SQL vs NoSQL: When to Use Each in Real-World Applications",
        description: "A practical guide to understanding the differences, trade-offs, and real-world use cases of SQL and NoSQL databases.",
        date: "April 4, 2026",
        readTime: "4 min read",
        link: "https://omteja04.hashnode.dev/sql-vs-nosql-when-to-use-each",
        category: "Databases",
        icon: "mdi:database",
    },
    {
        title: "Implementing OAuth2 with Node.js and Express",
        description: "A comprehensive tutorial on securing your backend APIs using OAuth2 and JWTs.",
        date: "Feb 20, 2026",
        readTime: "6 min read",
        link: "#",
        category: "Auth",
        icon: "mdi:security",
    },
    {
        title: "Building Scalable APIs with GraphQL",
        description: "Why GraphQL is often better than REST for complex query requirements, and how to set it up efficiently.",
        date: "Jan 15, 2026",
        readTime: "5 min read",
        link: "#",
        category: "Backend",
        icon: "mdi:graphql",
    },
    {
        title: "Caching Strategies using Redis",
        description: "Explore the different caching strategies such as Write-Through, Cache-Aside, and more using Redis.",
        date: "Nov 30, 2025",
        readTime: "8 min read",
        link: "#",
        category: "Backend",
        icon: "mdi:memory",
    },
    {
        title: "Designing a URL Shortener Service",
        description: "Step-by-step system design of a Bitly-like URL shortener focusing on scale and high availability.",
        date: "Oct 10, 2025",
        readTime: "10 min read",
        link: "#",
        category: "System Design",
        icon: "mdi:link-variant",
    }
];

const categories = ["All", "Backend", "System Design", "Databases", "Auth"];

const Blogs = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = allPosts.filter(post => {
        const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section id="blogs" className="min-h-screen pt-32 pb-20 px-6 sm:px-12 lg:px-24 bg-white dark:bg-neutral-800 transition-colors duration-500 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-20 left-0 w-96 h-96 bg-orange-300/20 dark:bg-orange-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-70 pointer-events-none"></div>
            <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-300/20 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-70 pointer-events-none"></div>

            <div className="max-w-[1280px] mx-auto relative z-10">

                {/* Header */}
                <div className="flex flex-col items-center justify-center mb-12 gap-3">
                    <motion.h1
                        className="text-black dark:text-white text-4xl sm:text-5xl font-bold font-mulish text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        My <span className="text-orange-400">Articles</span>
                    </motion.h1>
                    <motion.span
                        className="h-1 bg-orange-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: "8rem" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    />
                    <motion.p
                        className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-center font-mulish mt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Thoughts, deep dives, and tutorials on backend engineering, databases, and system design.
                    </motion.p>
                </div>

                {/* Filters & Search */}
                <motion.div
                    className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {/* Category Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`cursor-pointer px-5 py-2 rounded-full font-mulish font-bold text-sm transition-all duration-300 ${selectedCategory === cat
                                    ? "bg-orange-400 text-black dark:text-white shadow-md shadow-orange-400/20"
                                    : "bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-72">
                        <Icon icon="fluent:search-20-regular" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-500 text-lg" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white font-mulish rounded-full py-3 pl-12 pr-4 border border-transparent focus:border-orange-400 focus:outline-none transition-all duration-300"
                        />
                    </div>
                </motion.div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredPosts.length > 0 ? (
                            filteredPosts.map((post, index) => (
                                <motion.article
                                    key={post.title}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="group flex flex-col bg-neutral-50 dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 cursor-pointer"
                                >
                                    <div className="p-8 flex flex-col h-full relative overflow-hidden">
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
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-full py-20 text-center flex flex-col items-center justify-center text-neutral-500"
                            >
                                <Icon icon="fluent:document-search-24-regular" className="text-5xl mb-4 opacity-50" />
                                <p className="text-lg font-mulish">No articles found matching "{searchQuery}"</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Blogs;
