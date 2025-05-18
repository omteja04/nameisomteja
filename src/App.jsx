import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FloatingResumeButton from "./components/FloatingResumeButton";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

const validSections = [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    "achievements",
    "contact",
];

function ScrollToSection({ setNotFound }) {
    const location = useLocation();

    useEffect(() => {
        const path =
            location.pathname === "/" ? "home" : location.pathname.slice(1);

        if (validSections.includes(path)) {
            setNotFound(false);
            const element = document.getElementById(path);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            setNotFound(true);
        }
    }, [location, setNotFound]);

    return null;
}

export default function App() {
    const [notFound, setNotFound] = useState(false);

    return (
        <Router>
            <ScrollToSection setNotFound={setNotFound} />
            <Navbar />
            <FloatingResumeButton />
            {!notFound ? (
                <>
                    <Home />
                    <About />
                    <Skills />
                    <Experience />
                    <Projects />
                    <Achievements />
                    <Contact />
                    <Footer />
                </>
            ) : (
                <NotFound />
            )}
        </Router>
    );
}
