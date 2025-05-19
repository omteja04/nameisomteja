import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import omteja from "../assets/omteja.png";
import popupImgLight from "../assets/popupImgLight.svg";
import popupImgDark from "../assets/popupImgDark.svg";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
    const { isDarkMode } = useTheme();
    const [showPopup, setShowPopup] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100 && window.scrollY < 560) {
                setShowPopup(true);
            } else {
                setShowPopup(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div
            id="home"
            className="pt-[7.5rem]
            bg-gradient-to-br 
        from-pink-100 via-purple-100 to-blue-100 
        dark:from-[#0f0f0f] dark:via-[#1f1f1f] dark:to-[#111827] h-fit"
        >
            {/* Abstract Shapes Background */}
            <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
                {/* Top-left pink blob */}
                <svg
                    className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] opacity-30 dark:opacity-20 blur-3xl"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="#f472b6"
                        d="M55.4,-64.2C68.9,-50.7,75.2,-31.6,76.7,-13.3C78.1,5,74.7,22.6,64.6,33.6C54.5,44.6,37.8,48.9,21.9,57.4C6,65.8,-9.1,78.4,-24.4,76.3C-39.6,74.1,-55,57.2,-65.6,39.1C-76.2,21,-82,1.8,-76.5,-14.3C-70.9,-30.3,-54.1,-43.3,-38,-57.4C-21.9,-71.5,-11,-86.6,3.3,-91.2C17.6,-95.7,35.2,-89.8,55.4,-64.2Z"
                        transform="translate(100 100)"
                    />
                </svg>

                {/* Bottom-right orange blur */}
                <div className="absolute bottom-[-150px] right-[-150px] w-[300px] h-[300px] bg-orange-300 dark:bg-orange-500 opacity-30 dark:opacity-20 blur-2xl rounded-full" />

                {/* Center floating purple shape */}
                <svg
                    className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] opacity-20 dark:opacity-10 blur-2xl"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="#c084fc"
                        d="M47.8,-58.4C62.4,-51.1,74.6,-35.1,75.1,-19.2C75.5,-3.3,64.2,12.6,53.1,27.5C42.1,42.4,31.3,56.3,16.5,63.2C1.6,70,-17.3,69.9,-33.2,62.5C-49.1,55.2,-62,40.6,-65.5,24.7C-69,-1.2,-63.1,-19.6,-56.8,-38.7C-50.4,-57.7,-43.6,-77.4,-30.4,-84.1C-17.2,-90.8,1.4,-84.5,20.1,-76.1C38.9,-67.6,57.6,-57.1,47.8,-58.4Z"
                        transform="translate(100 100)"
                    />
                </svg>
            </div>

            <section className="w-full max-w-[1440px] overflow-hidden h-[84.7vh] relative flex justify-center items-end gap-16 mx-auto">
                {/* Intro Section */}
                <section
                    className={`absolute left-64 top-0 flex flex-col items-center gap-6 transition-all duration-150 ease-in-out ${
                        showPopup ? "hidden" : "block"
                    }`}
                >
                    <div className="relative flex flex-col items-center gap-2.5">
                        <div className="absolute right-96 pointer-events-none z-0">
                            <svg
                                width="33"
                                height="33"
                                viewBox="0 0 33 33"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.74512 20C2.74512 17 5.74512 11 2.74512 2M10.2451 23.5C14.5785 19.3333 23.4451 9.2 24.2451 2M13.2451 30.5C15.9118 30.5 23.0451 29.1 30.2451 23.5"
                                    stroke="#FEB273"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <div className="mt-5 h-11 px-6 py-3 bg-white/10 dark:bg-neutral-900/10 rounded-full outline-[1.27px] outline-offset-[-1.27px] outline-neutral-900 dark:outline-white flex items-center gap-1.5">
                            <div className="select-none text-neutral-900 dark:text-white text-xl font-medium font-mulish">
                                Hello!
                            </div>
                        </div>

                        <div className="w-[913px] text-center select-none">
                            <h1 className="text-6xl font-semibold leading-[95.57px] font-jetBrains text-neutral-900 dark:text-white">
                                I'm{" "}
                                <span className="text-orange-400">Omteja</span>,
                                <br />
                                <span className="w-[1440px] text-7xl">
                                    <Typewriter
                                        words={[
                                            "Competitive Coder",
                                            "Front-End Developer",
                                            "AWS Cloud Developer",
                                        ]}
                                        loop={0}
                                        cursor
                                        cursorStyle="_"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </h1>
                        </div>
                    </div>
                </section>

                {/* Left Testimonial Section */}
                <motion.section
                    className="z-10 absolute flex flex-col items-start gap-6"
                    animate={
                        showPopup
                            ? { left: "71px", top: "90px" }
                            : { left: "71px", top: "360px" }
                    }
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <div data-svg-wrapper className="relative">
                        <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-slate-700 dark:text-gray-200"
                        >
                            <path
                                d="M12.135 17.445H5.1C5.22 10.44 6.6 9.285 10.905 6.735C11.4 6.435 11.565 5.805 11.265 5.295C10.98 4.8 10.335 4.635 9.84 4.935C4.77 7.935 3 9.765 3 18.48V26.565C3 29.13 5.085 31.2 7.635 31.2H12.135C14.775 31.2 16.77 29.205 16.77 26.565V22.065C16.77 19.44 14.775 17.445 12.135 17.445Z"
                                fill="currentColor"
                            />
                            <path
                                d="M28.365 17.445H21.33C21.45 10.44 22.83 9.285 27.135 6.735C27.63 6.435 27.795 5.805 27.495 5.295C27.195 4.8 26.565 4.635 26.055 4.935C20.985 7.935 19.215 9.765 19.215 18.495V26.58C19.215 29.145 21.3 31.215 23.85 31.215H28.35C30.99 31.215 32.985 29.22 32.985 26.58V22.08C33 19.44 31.005 17.445 28.365 17.445Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    <p className="0 text-xl font-medium font-mulish select-none text-slate-700 dark:text-gray-200">
                        A soon-to-be Computer Science graduate
                        <br />
                        passionate about building impactful <br />
                        digital solutions.
                    </p>
                </motion.section>

                {/* Profile Image Section */}
                <section className="relative w-full h-[300px] select-none">
                    {/* Background SVG */}
                    <div className="absolute inset-0 z-0 text-[#FEB273] dark:text-orange-300">
                        <svg
                            className="opacity-70"
                            width="100%"
                            height="100%"
                            viewBox="0 0 813 406"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M812.673 406C542.08 406 271.487 406 0.894409 406C0.894409 181.833 182.617 0.110565 406.784 0.110565C630.95 0.110565 812.673 181.833 812.673 406Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>

                    {/* Popup Image - Behind Profile Pic */}
                    {/* <img
                        src={popupImg}
                        alt="Popup visual"
                        className={`absolute -bottom-[300px] left-[680px] transform -translate-x-1/2 w-[620px] h-[860px] transition-all duration-150 ease-in-out ${showPopup ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-70'} z-0`}
                    /> */}
                    <motion.img
                        src={isDarkMode ? popupImgDark : popupImgLight}
                        alt="Popup visual"
                        className="absolute -bottom-[300px] left-[680px] transform -translate-x-1/2 w-[620px] h-[860px] z-0"
                        initial={{ opacity: 0, y: 70 }}
                        animate={
                            showPopup
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 70 }
                        }
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 20,
                        }}
                    />

                    {/* Foreground Image */}
                    <img
                        src={omteja}
                        alt="Omteja's profile"
                        loading="lazy"
                        className="absolute bottom-0 left-51/100 transform -translate-x-1/2 h-[520px] z-10"
                        onClick={() => setShowPopup(!showPopup)}
                    />
                </section>
            </section>
        </div>
    );
};

export default Home;
