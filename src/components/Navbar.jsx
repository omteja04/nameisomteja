import { NavLink } from "react-router-dom";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const links = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Achievements",
    "Contact",
];

const SunIcon = () => (
    <motion.svg
        key="sun"
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1.5m0 15V21m9-9h-1.5M4.5 12H3m15.364-6.364l-1.06 1.06M6.696 17.304l-1.06 1.06m12.728 0l-1.06-1.06M6.696 6.696L5.636 5.636M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
        />
    </motion.svg>
);

const MoonIcon = () => (
    <motion.svg
        key="moon"
        initial={{ rotate: 90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: -90, opacity: 0 }}
        transition={{ duration: 0.3 }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
        />
    </motion.svg>
);

const Navbar = ({ onNavClick }) => {
    const { isDarkMode, toggleDarkMode } = useTheme();
    const [indicator, setIndicator] = useState({ left: 0, width: 0 });
    const [activeKey, setActiveKey] = useState("home");
    const linkRefs = useRef({});

    const updateIndicator = (key) => {
        const el = linkRefs.current[key];
        if (el) {
            const { offsetLeft, offsetWidth } = el;
            setIndicator({ left: offsetLeft, width: offsetWidth });
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(({ isIntersecting, target }) => {
                    if (isIntersecting) {
                        const key = target.id;
                        setActiveKey(key);
                        updateIndicator(key);
                    }
                });
            },
            { threshold: 0.6 }
        );

        links.forEach((link) => {
            const el = document.getElementById(link.toLowerCase());
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    useLayoutEffect(() => {
        updateIndicator(activeKey);
    }, [activeKey]);

    const handleClick = () => {
        onNavClick?.();
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <div className="flex justify-center items-center mt-10 mx-auto max-w-[1440px] select-none">
                <div className="relative w-[1280px] h-15 px-2.5 rounded-[40px] outline outline-offset-[-1px] outline-black backdrop-blur-sm inline-flex justify-between items-center bg-black dark:bg-white">
                    <h1 className="text-2xl font-bold font-mulish pl-6 cursor-default text-white dark:text-black">
                        Omteja<span className="text-orange-400">.</span>
                    </h1>

                    <div className="relative flex gap-4 pr-6 items-center">
                        <motion.div
                            className="absolute top-[15%] bottom-[15%] py-3 px-3 bg-orange-400 rounded-[50px] z-0"
                            initial={false}
                            animate={{
                                left: indicator.left,
                                width: indicator.width,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                            }}
                        />

                        {links.map((text) => {
                            const key = text.toLowerCase();
                            const path = key === "home" ? "/" : `/${key}`;
                            const isActive = activeKey === key;

                            return (
                                <NavLink
                                    key={key}
                                    to={path}
                                    ref={(el) => (linkRefs.current[key] = el)}
                                    className="group relative z-10 px-3 py-3 rounded-[50px] flex justify-center items-center gap-2 cursor-pointer transition-all duration-100 ease-in-out"
                                    onClick={handleClick}
                                >
                                    <div
                                        className={`font-mulish text-base tracking-wide font-medium transition-colors duration-150 ${
                                            isActive
                                                ? "text-black dark:text-white"
                                                : "text-white group-hover:text-orange-400 dark:group-hover:text-orange-400 dark:text-black"
                                        }`}
                                    >
                                        {text}
                                    </div>
                                </NavLink>
                            );
                        })}

                        <div className="pl-4 flex items-center justify-center">
                            <button
                                onClick={toggleDarkMode}
                                className="cursor-pointer  p-2 rounded-full transition text-white dark:text-black hover:text-orange-400 dark:hover:text-orange-400"
                                title={
                                    isDarkMode
                                        ? "Switch to Light Mode"
                                        : "Switch to Dark Mode"
                                }
                            >
                                <AnimatePresence mode="wait">
                                    {isDarkMode ? <SunIcon /> : <MoonIcon />}
                                </AnimatePresence>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
