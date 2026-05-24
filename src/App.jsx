import { BrowserRouter as Router, useLocation, Routes, Route, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import FloatingResumeButton from "./components/FloatingResumeButton";
import PageTransition from "./components/PageTransition";
import Loader from "./components/Loader";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import TechnicalWriting from "./components/TechnicalWriting";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Articles from "./components/Articles";
import NotFound from "./components/NotFound";

// ---------------------------------------------------------------------------
// PortfolioPage — the single-page scroll experience
// ---------------------------------------------------------------------------
const PortfolioPage = () => {
    const { sectionId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    // Reusable scroll function with a broader retry window
    const performScroll = (id) => {
        const attempt = (tries = 0) => {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            } else if (tries < 15) {
                setTimeout(() => attempt(tries + 1), 100); // 1.5s total window
            }
        };
        attempt();
    };

    // 1. Unified Scroll Logic — Handles both initial mount AND URL changes
    useEffect(() => {
        const target = location.state?.scrollTo || sectionId;

        if (target) {
            // Clean up legacy state if present
            if (location.state?.scrollTo) {
                navigate(location.pathname, { replace: true, state: {} });
            }
            performScroll(target);
        } else if (location.pathname === "/" || !sectionId) {
            // If we're truly at home and no section is targeted, go to top
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [sectionId, location.pathname, location.state]);

    return (
        <>
            <Home />
            <About />
            <Experience />
            <Projects />
            <TechnicalWriting />
            <Skills />
            <Achievements />
            <Contact />
            <Footer />
        </>
    );
};

// ---------------------------------------------------------------------------
// AppRoutes — lives inside the Router so it can call useLocation
// ---------------------------------------------------------------------------
const AppRoutes = () => {
    const location = useLocation();

    // Scroll to top whenever navigating to /articles (full page route)
    useEffect(() => {
        if (location.pathname === "/articles") {
            window.scrollTo({ top: 0, behavior: "instant" });
        }
    }, [location.pathname]);

    // Logic to determine if page transition should trigger
    // Moving from / to /about should NOT trigger it.
    // Moving from / to /articles SHOULD trigger it.
    const isFullPage = ["/articles", "/404"].includes(location.pathname);
    const transitionKey = isFullPage ? location.pathname : "portfolio";

    return (
        <>
            <Navbar />
            <FloatingResumeButton />

            <AnimatePresence mode="wait" initial={false}>
                <Routes location={location} key={transitionKey}>
                    {/* Full-page article route */}
                    <Route
                        path="/articles"
                        element={
                            <PageTransition>
                                <Articles />
                            </PageTransition>
                        }
                    />

                    {/* Homepage scroll experience (also handles all /<section> aliases) */}
                    <Route path="/:sectionId" element={<PortfolioPage />} />
                    <Route path="/" element={<PortfolioPage />} />

                    {/* 404 */}
                    <Route
                        path="*"
                        element={
                            <PageTransition>
                                <NotFound />
                            </PageTransition>
                        }
                    />
                </Routes>
            </AnimatePresence>
        </>
    );
};

// ---------------------------------------------------------------------------
// App root
// ---------------------------------------------------------------------------
export default function App() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <Router>
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <Loader key="loader" onComplete={() => setIsLoading(false)} />
                ) : (
                    <motion.div
                        key="main-app"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full"
                    >
                        <AppRoutes />
                    </motion.div>
                )}
            </AnimatePresence>
        </Router>
    );
}
