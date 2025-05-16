// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingResumeButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [scrollY, setScrollY] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        // cleanup
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const shouldShowText = isHovered || scrollY <= 100;

    return (
        <motion.a
            href="https://drive.google.com/file/d/1vL-z1ys33zv8rQINuaelSDSEBnHwEi13/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            initial={false}
            animate={{ width: shouldShowText ? 180 : 56 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group fixed bottom-15 right-6 z-50 flex items-center bg-orange-400 text-white font-bold pl-3 py-2 rounded-full shadow-lg overflow-hidden cursor-pointer"
        >
            {/* File Icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                className="w-5 h-5 flex-shrink-0"
            >
                <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm1 7V3.5L18.5 9H15zM8 14h8v1.5H8V14zm0 3h8v1.5H8V17zm0-6h8v1.5H8V11z" />
            </svg>

            {/* Text & Arrow (Shown when shouldShowText is true) */}
            <motion.span
                initial={false}
                animate={{ opacity: shouldShowText ? 1 : 0 }}
                className="whitespace-nowrap flex items-center ml-2 select-none"
            >
                Resume
                <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 -rotate-45"
                    viewBox="0 0 24 24"
                >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </motion.span>
        </motion.a>
    );
};

export default FloatingResumeButton;
