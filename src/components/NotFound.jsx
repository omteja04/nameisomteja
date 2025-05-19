import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white dark:bg-neutral-800 px-4 sm:px-6">
            <div className="text-center w-full max-w-md mx-auto flex flex-col items-center justify-center gap-4 sm:gap-6">
                {/* Animate 404 */}
                <motion.h1
                    className="font-bold text-gray-800 dark:text-gray-100 text-5xl sm:text-7xl md:text-8xl"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    404
                </motion.h1>

                {/* Animate "Page Not Found" */}
                <motion.h2
                    className="text-lg sm:text-2xl font-semibold text-gray-700 dark:text-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    Page Not Found
                </motion.h2>

                {/* Animate paragraph */}
                <motion.p
                    className="text-sm sm:text-base text-gray-600 dark:text-gray-300 px-2 sm:px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                >
                    Oops! The page you're looking for doesn't exist.
                </motion.p>

                {/* Animate button with hover scale */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                >
                    <Link
                        to="/"
                        className="mt-4 inline-block px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base bg-white/10 dark:bg-neutral-900/10 border border-orange-400 text-orange-400 font-semibold rounded-2xl shadow-lg backdrop-blur-md transition duration-300 hover:bg-orange-400 dark:hover:bg-orange-400 hover:text-white hover:shadow-orange-500/50 dark:hover:text-black"
                    >
                        Back to Home
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
