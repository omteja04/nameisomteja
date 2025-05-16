import { BrowserRouter as Router, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FloatingResumeButton from "./components/FloatingResumeButton";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";

const sections = ["home", "about", "skills", "projects", "experience", "achievements", "contact"];

function ScrollToSection() {
    const location = useLocation();

    useEffect(() => {
        const sectionId = location.pathname === "/" ? "home" : location.pathname.slice(1);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return null;
}

function ScrollSpy({ disable }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (disable) return;

        const onScroll = () => {
            let currentSection = "home";

            for (const id of sections) {
                const el = document.getElementById(id);
                if (!el) continue;
                const rect = el.getBoundingClientRect();
                // Check if the vertical line at 30% viewport height lies within this section
                if (rect.top <= (window.innerHeight * 4) / 10 && rect.bottom >= (window.innerHeight * 3) / 10) {
                    currentSection = id;
                    break;
                }
            }

            const currentPath = currentSection === "home" ? "/" : `/${currentSection}`;
            if (window.location.pathname !== currentPath) {
                navigate(currentPath, { replace: true });
            }
        };

        window.addEventListener("scroll", onScroll);
        onScroll(); // Run once on mount to set correct path

        return () => window.removeEventListener("scroll", onScroll);
    }, [navigate, disable]);

    return null;
}


export default function App() {
    const [scrollSpyDisabled, setScrollSpyDisabled] = useState(false);
    const timeoutRef = useRef(null);

    // This function should be called on NavLink clicks to temporarily disable scroll spy
    const onNavClick = () => {
        setScrollSpyDisabled(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setScrollSpyDisabled(false), 700);
    };

    return (
        <Router>
            <ScrollToSection />
            <ScrollSpy disable={scrollSpyDisabled} />
            <Navbar onNavClick={onNavClick} />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Achievements />
            <Contact />
            <FloatingResumeButton />
        </Router>
    );
}
