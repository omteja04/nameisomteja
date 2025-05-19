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

const HamburgerIcon = ({ isOpen }) => (
    <svg
        className="w-6 h-6 text-white dark:text-black"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
    >
        {isOpen ? (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
            />
        ) : (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
            />
        )}
    </svg>
);

const Navbar = ({ onNavClick }) => {
    const { isDarkMode, toggleDarkMode } = useTheme();
    const [indicator, setIndicator] = useState({ left: 0, width: 0 });
    const [activeKey, setActiveKey] = useState("home");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const linkRefs = useRef({});

    const updateIndicator = (key) => {
        const el = linkRefs.current[key];
        if (el) {
            const { offsetLeft, offsetWidth } = el;
            setIndicator({ left: offsetLeft, width: offsetWidth });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const viewportHeight = window.innerHeight;
            let maxVisibleHeight = 0;
            let activeSectionId = null;

            links.forEach((link) => {
                const el = document.getElementById(link.toLowerCase());
                if (el) {
                    const rect = el.getBoundingClientRect();
                    const visibleHeight =
                        Math.min(rect.bottom, viewportHeight) -
                        Math.max(rect.top, 0);

                    if (
                        visibleHeight > maxVisibleHeight &&
                        visibleHeight > viewportHeight * 0.4
                    ) {
                        maxVisibleHeight = visibleHeight;
                        activeSectionId = link.toLowerCase();
                    }
                }
            });

            if (activeSectionId) {
                setActiveKey(activeSectionId);
                updateIndicator(activeSectionId);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useLayoutEffect(() => {
        updateIndicator(activeKey);
    }, [activeKey]);

    const handleClick = () => {
        onNavClick?.();
        setMobileMenuOpen(false); // Close mobile menu on nav click
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <div className="flex justify-center items-center mt-10 mx-auto max-w-[1440px] select-none">
                <div className="relative w-11/12 h-16 px-2.5 rounded-[40px] outline outline-offset-[-1px] outline-black backdrop-blur-sm inline-flex justify-between items-center bg-black dark:bg-white">
                    <h1 className="text-2xl font-bold font-mulish pl-6 cursor-default text-white dark:text-black">
                        Omteja<span className="text-orange-400">.</span>
                    </h1>

                    {/* Desktop nav links - hidden on small screens */}
                    <div className="hidden nav_break:flex relative  gap-4 pr-6 items-center">
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
                                    className="group relative z-10 px-3 w-fit h-fit rounded-[50px] flex justify-center items-center gap-2 cursor-pointer transition-all duration-100 ease-in-out"
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

                        {/* Dark mode toggle for desktop */}
                        <div className="pl-4 nav_break:flex items-center justify-center">
                            <button
                                onClick={toggleDarkMode}
                                className="cursor-pointer p-2 rounded-full transition text-white dark:text-black hover:text-orange-400 dark:hover:text-orange-400"
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

                    {/* Hamburger button - visible only on small screens */}
                    <div className="nav_break:hidden flex items-center pr-4">
                        {/* Dark mode toggle for mobile */}
                        <button
                            onClick={toggleDarkMode}
                            className="cursor-pointer p-2 rounded-full transition text-white dark:text-black hover:text-orange-400 dark:hover:text-orange-400 mr-3"
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

                        <button
                            onClick={() => setMobileMenuOpen((prev) => !prev)}
                            aria-label="Toggle menu"
                            className="cursor-pointer p-2 rounded-md"
                        >
                            <HamburgerIcon isOpen={mobileMenuOpen} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu - visible only on small screens */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.nav
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="nav_break:hidden bg-black dark:bg-white overflow-hidden  px-4"
                    >
                        <ul className="flex flex-col py-2">
                            {links.map((text) => {
                                const key = text.toLowerCase();
                                const path = key === "home" ? "/" : `/${key}`;
                                const isActive = activeKey === key;

                                return (
                                    <li key={key}>
                                        <NavLink
                                            to={path}
                                            className={`block py-3 px-4 rounded-lg font-mulish font-medium text-lg transition-colors duration-150 ${
                                                isActive
                                                    ? "bg-orange-400 text-black dark:text-white"
                                                    : "text-white hover:bg-orange-400 hover:text-black dark:text-black dark:hover:text-white"
                                            }`}
                                            onClick={() => {
                                                handleClick();
                                            }}
                                        >
                                            {text}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
