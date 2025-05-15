import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

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

export default function App() {
    return (
        <Router>
            <ScrollToSection />
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
        </Router>
    );
}
