import { useLocation, useNavigate } from "react-router-dom";
import { useLayoutEffect, useRef, useState } from "react";
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

    // Indicator pill position (desktop)
    const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false });
    const linkRefs = useRef({});

    // Scroll spy — ONLY active on the homepage
    const isHomePage = ["/", ...SECTION_IDS.map(id => `/${id}`)].includes(location.pathname);
    const activeId = useScrollSpy(SECTION_IDS, isHomePage);

    // Update the orange pill position whenever activeId changes
    useLayoutEffect(() => {
        // If spy hasn't found a section yet, don't update anything or force a URL change.
        if (!activeId) return;

        if (activeId === "home") {
            setIndicator((prev) => ({ ...prev, visible: false }));
            if (isHomePage) window.history.replaceState(null, "", "/");
            return;
        }
        const el = linkRefs.current[activeId];
        if (el) {
            setIndicator({ left: el.offsetLeft, width: el.offsetWidth, visible: true });
            // Sync URL on scroll
            if (isHomePage) window.history.replaceState(null, "", `/${activeId}`);
        }
    }, [activeId, isHomePage]);

    // ------------------------------------------------------------------
    // Navigation handlers
    // ------------------------------------------------------------------
    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    const handleSectionClick = (id) => {
        setMobileMenuOpen(false);
        navigate("/" + id);
    };

    const handleLogoClick = () => {
        setMobileMenuOpen(false);
        if (isHomePage) {
            window.scrollTo({ top: 0, behavior: "smooth" });
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

                    {/* Logo */}
                    <button
                        onClick={handleLogoClick}
                        className="text-2xl font-bold font-mulish pl-5 cursor-default text-white dark:text-black min-w-max transition-opacity"
                        aria-label="Go to top"
                    >
                        Omteja<span className="text-orange-400">.</span>
                    </button>

                    {/* ── Desktop links ─────────────────────────────────── */}
                    <div className="hidden break:flex relative gap-1 pl-12 pr-4 items-center">

                        {/* Animated active pill */}
                        <motion.div
                            className="absolute top-[15%] bottom-[15%] bg-orange-400 rounded-[50px] z-0"
                            initial={false}
                            animate={{
                                left: indicator.visible ? indicator.left : indicator.left,
                                width: indicator.visible ? indicator.width : indicator.width,
                                opacity: indicator.visible ? 1 : 0,
                                scale: indicator.visible ? 1 : 0.8,
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 35 }}
                        />

                        {NAV_SECTIONS.map(({ label, id }) => {
                            const isActive = activeId === id;
                            return (
                                <button
                                    key={id}
                                    ref={(el) => (linkRefs.current[id] = el)}
                                    onClick={() => handleSectionClick(id)}
                                    className="group relative z-10 px-3.5 py-1.5 w-fit h-fit rounded-[50px] flex justify-center items-center cursor-pointer transition-all duration-100 ease-in-out"
                                >
                                    <span
                                        className={`font-mulish text-sm tracking-wide font-medium transition-colors duration-150 ${isActive
                                            ? "text-black dark:text-white"
                                            : "text-white group-hover:text-orange-400 dark:group-hover:text-orange-400 dark:text-black"
                                            }`}
                                    >
                                        {label}
                                    </span>
                                </button>
                            );
                        })}

                        {/* Dark mode toggle — desktop */}
                        <div className="pl-2 flex items-center justify-center border-l ml-2 border-neutral-700 dark:border-neutral-200">
                            <button
                                onClick={toggleDarkMode}
                                className="cursor-pointer ml-2 p-2 rounded-full transition-colors text-white dark:text-black hover:text-orange-400 dark:hover:text-orange-400"
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
