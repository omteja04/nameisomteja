import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-white px-6">
            <div className="text-center">
                {/* Animate 404 */}
                <motion.h1
                    className="text-[100px] font-bold text-gray-800"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    404
                </motion.h1>

                {/* Animate "Page Not Found" */}
                <motion.h2
                    className="text-2xl font-semibold text-gray-700 mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    Page Not Found
                </motion.h2>

                {/* Animate paragraph */}
                <motion.p
                    className="text-md text-gray-600 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                >
                    Oops! The page you're looking for doesn't exist
                </motion.p>

                {/* Animate button with hover scale */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block"
                >
                    <Link
                        to="/"
                        className="px-6 py-3 bg-orange-400 text-white rounded-full hover:bg-orange-500 transition"
                    >
                        Back to Home
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
