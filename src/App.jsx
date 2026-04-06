import { BrowserRouter as Router, useLocation, Routes, Route, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import FloatingResumeButton from "./components/FloatingResumeButton";
import PageTransition from "./components/PageTransition";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import TechnicalInsights from "./components/TechnicalInsights";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Blogs from "./components/Blogs";
import NotFound from "./components/NotFound";

// ---------------------------------------------------------------------------
// PortfolioPage — the single-page scroll experience
// ---------------------------------------------------------------------------
const PortfolioPage = () => {
    const { sectionId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    // Reusable scroll function
    const performScroll = (id) => {
        const attempt = (tries = 0) => {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            } else if (tries < 10) {
                setTimeout(() => attempt(tries + 1), 50);
            }
        };
        attempt();
    };

    // 1. Initial mount — handle legacy state or direct link
    useEffect(() => {
        const target = location.state?.scrollTo || sectionId;
        if (target) {
            // If it's a legacy state 'scrollTo', clear it
            if (location.state?.scrollTo) {
                navigate(location.pathname, { replace: true, state: {} });
            }
            performScroll(target);
        }
    }, []);

    // 2. Respond to URL changes (when clicking nav links)
    useEffect(() => {
        if (sectionId) {
            performScroll(sectionId);
        } else if (location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [sectionId, location.pathname]);

    return (
        <>
            <Home />
            <About />
            <Projects />
            <TechnicalInsights />
            <Experience />
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

    // Scroll to top whenever navigating to /blogs (full page route)
    useEffect(() => {
        if (location.pathname === "/blogs") {
            window.scrollTo({ top: 0, behavior: "instant" });
        }
    }, [location.pathname]);

    // Logic to determine if page transition should trigger
    // Moving from / to /about should NOT trigger it.
    // Moving from / to /blogs SHOULD trigger it.
    const isFullPage = ["/blogs", "/404"].includes(location.pathname);
    const transitionKey = isFullPage ? location.pathname : "portfolio";

    return (
        <>
            <Navbar />
            <FloatingResumeButton />

            <AnimatePresence mode="wait" initial={false}>
                <Routes location={location} key={transitionKey}>
                    {/* Full-page blog route */}
                    <Route
                        path="/blogs"
                        element={
                            <PageTransition>
                                <Blogs />
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
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
}
