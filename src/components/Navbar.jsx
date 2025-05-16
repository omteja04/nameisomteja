import { NavLink } from "react-router-dom";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const links = ["Home", "About", "Skills", "Projects", "Experience", "Achievements", "Contact"];

const Navbar = ({ onNavClick }) => {
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
        // setActiveKey(key);
        // updateIndicator(key);
        onNavClick?.(); // Optional chaining in case onNavClick is undefined
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <div className="flex justify-center items-center mt-10 mx-auto max-w-[1440px] select-none">
                <div className="relative w-[1280px] h-15 px-2.5 bg-neutral-900 rounded-[40px] outline outline-offset-[-1px] outline-black backdrop-blur-sm inline-flex justify-between items-center">
                    <h1 className="text-white text-2xl font-bold font-mulish pl-6 cursor-default">
                        Omteja<span className="text-orange-400">.</span>
                    </h1>

                    <div className="relative flex gap-4 pr-6">
                        <motion.div
                            className="absolute top-[15%] bottom-[15%] py-3 px-3 bg-orange-400 rounded-[50px] z-0"
                            initial={false}
                            animate={{ left: indicator.left, width: indicator.width }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
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
                                    onClick={() => handleClick()}
                                >
                                    <div className={`font-mulish text-base tracking-wide font-medium transition-colors duration-150 ${isActive ? "text-white" : "text-white group-hover:text-orange-400"
                                        }`}>
                                        {text}
                                    </div>
                                </NavLink>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
