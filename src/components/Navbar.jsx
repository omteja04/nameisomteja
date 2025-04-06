import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const links = ["Home", "About", "Skills", "Projects", "Contact"];
    const location = useLocation();

    return (
        <div className=" flex justify-center items-center mt-10 mx-auto my-0 max-w-[1280px] select-none">
            <div className="w-[1280px] h-20 px-2.5 bg-neutral-900 rounded-[50px] outline outline-offset-[-1px] outline-white backdrop-blur-sm inline-flex justify-between items-center">
                <h1 className="text-white text-3xl font-bold font-mulish pl-7 cursor-default">
                    Omteja<span className="text-orange-400">.</span>
                </h1>
                <div className="flex gap-4 pr-6">
                    {links.map((text) => {
                        const path = text.toLowerCase() === "home" ? "/" : `/${text.toLowerCase()}`;
                        const isHomeActive =
                            (location.pathname === "/" || location.pathname === "/home") && text === "Home";

                        return (
                            <NavLink
                                key={text}
                                to={path}
                                className={({ isActive }) =>
                                    `px-10 py-5 rounded-[60px] flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer transition-all duration-100 ease-in-out ${isActive || isHomeActive
                                        ? "bg-orange-400 font-bold "
                                        : "outline outline-offset-[-1px] hover:bg-white/15"
                                    }`
                                }
                            >
                                <div className="font-mulish justify-start text-white text-xl">
                                    {text}
                                </div>
                            </NavLink>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
