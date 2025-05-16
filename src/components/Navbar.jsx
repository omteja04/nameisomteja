import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Navbar = ({ onNavClick }) => {
    const links = ["Home", "About", "Skills", "Projects", "Experience", "Achievements", "Contact"];
    const location = useLocation();
    const [indicator, setIndicator] = useState({ left: 0, width: 0 });
    const [activeKey, setActiveKey] = useState("home");
    const [isHovering, setIsHovering] = useState(false);
    const linkRefs = useRef({});

    useEffect(() => {
        const key = location.pathname === "/" ? "home" : location.pathname.slice(1);
        setActiveKey(key);
        const el = linkRefs.current[key];
        if (el && !isHovering) {
            const { offsetLeft, offsetWidth } = el;
            setIndicator({ left: offsetLeft, width: offsetWidth });
        }
    }, [location, isHovering]);
    const handleMouseEnter = (key) => {
        const el = linkRefs.current[key];
        if (el) {
            const { offsetLeft, offsetWidth } = el;
            setIndicator({ left: offsetLeft, width: offsetWidth });
            setIsHovering(true);
        }
    };

    const handleMouseLeave = () => {
        const el = linkRefs.current[activeKey];
        if (el) {
            const { offsetLeft, offsetWidth } = el;
            setIndicator({ left: offsetLeft, width: offsetWidth });
            setIsHovering(false);
        }
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <div className="flex justify-center items-center mt-10 mx-auto my-0 max-w-[1440px] select-none">
                <div className="relative w-[1280px] h-15 px-2.5 bg-neutral-900 rounded-[40px] outline outline-offset-[-1px] outline-black backdrop-blur-sm inline-flex justify-between items-center">                    <h1 className="text-white text-2xl font-bold font-mulish pl-6 cursor-default">
                        Omteja<span className="text-orange-400">.</span>
                    </h1>


                    <div className="relative flex gap-4 pr-6">
                        {/* Orange animated background */}
                        <motion.div
                            className="absolute top-[15%] bottom-[15%] py-3 px-3 bg-orange-400 rounded-[50px] z-0"
                            animate={{ left: indicator.left, width: indicator.width }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        />


                        {/* Nav Links */}
                        {links.map((text) => {
                            const key = text.toLowerCase();
                            const path = key === "home" ? "/" : `/${key}`;
                            return (
                                <NavLink
                                    key={text}
                                    to={path}
                                    ref={(el) => (linkRefs.current[key] = el)}
                                    className="relative z-10 px-3 py-3 rounded-[50px] flex justify-center items-center gap-2 overflow-hidden cursor-pointer transition-all duration-100 ease-in-out"
                                    onMouseEnter={() => handleMouseEnter(key)}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => onNavClick && onNavClick()}
                                >
                                    <div className="font-mulish text-white text-base tracking-wide font-medium">
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
