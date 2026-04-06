import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useScrollSpy } from "../hooks/useScrollSpy";

// ---------------------------------------------------------------------------
// Nav configuration
// ---------------------------------------------------------------------------
const NAV_SECTIONS = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Insights", id: "insights" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Achievements", id: "achievements" },
    { label: "Contact", id: "contact" },
];

const SECTION_IDS = ["home", ...NAV_SECTIONS.map((s) => s.id)];

// ---------------------------------------------------------------------------
// Icon helpers
// ---------------------------------------------------------------------------
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        )}
    </svg>
);

// ---------------------------------------------------------------------------
// Navbar
// ---------------------------------------------------------------------------
const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();
    const location = useLocation();
    const navigate = useNavigate();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Track scroll for a secondary 'active' state if needed
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 1. URL & State Detection
    const isHomePage = ["/", ...SECTION_IDS.map(id => `/${id}`)].includes(location.pathname);
    const scrollId   = useScrollSpy(SECTION_IDS, isHomePage);
    const pathId     = location.pathname.split("/").filter(Boolean)[0];
    
    // priority: scroll tracking > URL path fallback > "home"
    const activeId   = scrollId || (isHomePage ? (pathId || "home") : null);

    // 2. Sync URL address bar with current active section
    useEffect(() => {
        if (!isHomePage || !activeId) return;
        
        if (activeId === "home") {
            if (window.location.pathname !== "/") {
                window.history.replaceState(null, "", "/");
            }
        } else {
            const currentPath = `/${activeId}`;
            if (window.location.pathname !== currentPath) {
                window.history.replaceState(null, "", currentPath);
            }
        }
    }, [activeId, isHomePage]);

    // ------------------------------------------------------------------
    // Navigation handlers
    // ------------------------------------------------------------------
    const handleSectionClick = (id) => {
        setMobileMenuOpen(false);
        navigate("/" + id);
    };

    const handleLogoClick = () => {
        setMobileMenuOpen(false);
        if (isHomePage) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.history.replaceState(null, "", "/");
        } else {
            navigate("/");
        }
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-6 sm:mt-10 px-4 sm:px-8 select-none pointer-events-none">
            <motion.nav
                className="pointer-events-auto relative overflow-hidden outline outline-offset-[-1px] outline-black dark:outline-neutral-200 backdrop-blur-md bg-black/95 dark:bg-white/95 shadow-2xl flex flex-col w-full break:w-fit max-w-[1440px]"
                initial={{ borderRadius: 40 }}
                animate={{ borderRadius: mobileMenuOpen ? 28 : 40 }}
                transition={{ type: "spring", stiffness: 450, damping: 35, mass: 0.8 }}
            >
                {/* ── Top bar ───────────────────────────────────────────── */}
                <div className="flex justify-between items-center h-[4rem] w-full px-2">

                    {/* Logo Section with Glow */}
                    <button
                        onClick={handleLogoClick}
                        className="group flex items-center text-2xl font-bold font-mulish pl-6 cursor-pointer text-white dark:text-black min-w-max transition-all duration-300"
                        aria-label="Go to top"
                    >
                        <span>Omteja</span>
                        <motion.span 
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]"
                        >
                            .
                        </motion.span>
                    </button>

                    {/* ── Desktop links ─────────────────────────────────── */}
                    <div className="hidden break:flex relative gap-4 pl-12 pr-6 items-center h-full">
                        {NAV_SECTIONS.map(({ label, id }) => {
                            const isActive = activeId === id;
                            return (
                                <button
                                    key={id}
                                    onClick={() => handleSectionClick(id)}
                                    className="group relative px-2 py-2 flex flex-col justify-center items-center cursor-pointer transition-all active:scale-95"
                                >
                                    <span
                                        className={`font-mulish text-[13px] tracking-widest uppercase font-bold transition-all duration-300 relative z-10 ${isActive
                                            ? "text-orange-400"
                                            : "text-neutral-400 dark:text-neutral-600 group-hover:text-orange-400/80"
                                            }`}
                                    >
                                        {label}
                                    </span>

                                    {/* Magnetic Underline indicator */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeUnderline"
                                            className="absolute -bottom-1 left-0 right-0 h-[3px] bg-orange-400 rounded-full shadow-[0_0_10px_rgba(251,146,60,0.4)]"
                                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                        />
                                    )}
                                </button>
                            );
                        })}

                        {/* Dark mode toggle — desktop */}
                        <div className="pl-4 flex items-center justify-center border-l border-neutral-800 dark:border-neutral-300 h-8">
                            <button
                                onClick={toggleDarkMode}
                                className="cursor-pointer ml-1 p-2 rounded-full transition-all text-neutral-400 dark:text-neutral-600 hover:text-orange-400 dark:hover:text-orange-400 hover:bg-neutral-900/50 dark:hover:bg-neutral-100/50"
                                title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                            >
                                <AnimatePresence mode="wait">
                                    {isDarkMode ? <SunIcon /> : <MoonIcon />}
                                </AnimatePresence>
                            </button>
                        </div>
                    </div>

                    {/* ── Mobile controls ───────────────────────────────── */}
                    <div className="break:hidden flex items-center pr-2">
                        <button
                            onClick={toggleDarkMode}
                            className="cursor-pointer p-2 rounded-full transition-colors text-white dark:text-black hover:text-orange-400 dark:hover:text-orange-400 mr-1"
                        >
                            <AnimatePresence mode="wait">
                                {isDarkMode ? <SunIcon /> : <MoonIcon />}
                            </AnimatePresence>
                        </button>

                        <button
                            onClick={() => setMobileMenuOpen((p) => !p)}
                            aria-label="Toggle menu"
                            className="cursor-pointer p-2 rounded-md transition-transform active:scale-95"
                        >
                            <HamburgerIcon isOpen={mobileMenuOpen} />
                        </button>
                    </div>
                </div>

                {/* ── Mobile dropdown ───────────────────────────────────── */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                            className="break:hidden w-full overflow-hidden"
                        >
                            <ul className="flex flex-col px-3 pb-4 space-y-1">
                                {NAV_SECTIONS.map(({ label, id }) => {
                                    const isActive = activeId === id;
                                    return (
                                        <li key={id}>
                                            <button
                                                onClick={() => handleSectionClick(id)}
                                                className={`w-full text-left block py-3 px-5 rounded-2xl font-mulish font-bold text-lg transition-colors duration-150 ${isActive
                                                    ? "bg-orange-400 text-black dark:text-white"
                                                    : "text-neutral-300 hover:bg-neutral-800 dark:text-neutral-600 dark:hover:bg-neutral-100"
                                                    }`}
                                            >
                                                {label}
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
};

export default Navbar;
