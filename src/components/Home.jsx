import React from "react";
import { Typewriter } from "react-simple-typewriter";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div
            id="home"
            className="relative pt-[7.5rem] overflow-hidden
            bg-gradient-to-br
            from-pink-100 via-purple-100 to-blue-100
            dark:from-[#0f0f0f] dark:via-[#1f1f1f] dark:to-[#111827]
            min-h-screen"
        >
            {/* ── Decorative background blobs ── */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <svg
                    className="absolute top-[-80px] left-[-80px] w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] opacity-30 dark:opacity-20 blur-3xl"
                    viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
                >
                    <path fill="#f472b6" d="M55.4,-64.2C68.9,-50.7,75.2,-31.6,76.7,-13.3C78.1,5,74.7,22.6,64.6,33.6C54.5,44.6,37.8,48.9,21.9,57.4C6,65.8,-9.1,78.4,-24.4,76.3C-39.6,74.1,-55,57.2,-65.6,39.1C-76.2,21,-82,1.8,-76.5,-14.3C-70.9,-30.3,-54.1,-43.3,-38,-57.4C-21.9,-71.5,-11,-86.6,3.3,-91.2C17.6,-95.7,35.2,-89.8,55.4,-64.2Z" transform="translate(100 100)" />
                </svg>
                <div className="absolute bottom-[-120px] right-[-120px] w-[240px] h-[240px] sm:w-[340px] sm:h-[340px] bg-orange-300 dark:bg-orange-500 opacity-25 dark:opacity-20 blur-2xl rounded-full" />
                <svg
                    className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] sm:w-[240px] sm:h-[240px] opacity-20 dark:opacity-10 blur-2xl"
                    viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
                >
                    <path fill="#c084fc" d="M47.8,-58.4C62.4,-51.1,74.6,-35.1,75.1,-19.2C75.5,-3.3,64.2,12.6,53.1,27.5C42.1,42.4,31.3,56.3,16.5,63.2C1.6,70,-17.3,69.9,-33.2,62.5C-49.1,55.2,-62,40.6,-65.5,24.7C-69,-1.2,-63.1,-19.6,-56.8,-38.7C-50.4,-57.7,-43.6,-77.4,-30.4,-84.1C-17.2,-90.8,1.4,-84.5,20.1,-76.1C38.9,-67.6,57.6,-57.1,47.8,-58.4Z" transform="translate(100 100)" />
                </svg>
            </div>

            {/* ── HERO SECTION ── */}
            <section className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 min-h-[calc(100vh-7.5rem)] flex flex-col items-center justify-center gap-8">

                {/* Open to Opportunities badge */}
                <div className="flex items-center gap-2.5 h-10 sm:h-11 px-5 sm:px-6 bg-white/10 dark:bg-neutral-900/10 rounded-full outline-[1.27px] outline-offset-[-1.27px] outline-neutral-900 dark:outline-white">
                    {/* Glowing blinking dot */}
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75 shadow-[0_0_8px_2px_rgba(251,146,60,0.7)]"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-400 shadow-[0_0_6px_2px_rgba(251,146,60,0.6)]"></span>
                    </span>
                    <span className="select-none text-neutral-900 dark:text-white text-sm sm:text-base font-medium font-mulish whitespace-nowrap">Open to Opportunities</span>
                </div>

                {/* Heading */}
                <div className="w-full text-center select-none">
                    <h1 className="font-semibold leading-[1.15] font-jetBrains text-neutral-900 dark:text-white
                        text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                        I'm <span className="text-orange-400">Omteja</span>,
                        <br />
                        <Typewriter
                            words={["Software Engineer", "Backend Engineer", "AWS Certified Developer - Associate"]}
                            loop={0}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h1>
                </div>

                {/* Quote */}
                <motion.div
                    className="flex flex-col items-center gap-3 text-center max-w-sm"
                    initial={false}
                >
                    <p className="text-sm sm:text-base font-medium font-mulish select-none text-slate-700 dark:text-gray-200">
                        A soon-to-be Computer Science graduate<br />
                        passionate about building impactful<br />
                        digital solutions.
                    </p>
                </motion.div>

            </section>
        </div>
    );
};

export default Home;
