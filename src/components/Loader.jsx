import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    // Simulate loading progress
    useEffect(() => {
        const duration = 2000; // 2 seconds to reach 100%
        const interval = 20; // update every 20ms
        const steps = duration / interval;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
            setProgress(newProgress);

            if (currentStep >= steps) {
                clearInterval(timer);
                // Wait a tiny bit at 100% before triggering complete
                setTimeout(() => {
                    if (onComplete) onComplete();
                }, 400);
            }
        }, interval);

        return () => clearInterval(timer);
    }, [onComplete]);

    // Path definitions for SVG
    // Outer Hexagon
    const hexagonPath = "M110,20 L188,65 L188,155 L110,200 L32,155 L32,65 Z";
    
    // Inner Code Brackets < >
    const leftBracket = "M90,75 L60,110 L90,145";
    const rightBracket = "M130,75 L160,110 L130,145";
    const slash = "M120,70 L100,150";

    return (
        <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-[#0A0A0A] flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vh] h-[40vh] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Matrix Particles (Subtle) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-orange-400 rounded-full"
                        style={{
                            width: Math.random() * 2 + 1 + "px",
                            height: Math.random() * 2 + 1 + "px",
                            left: Math.random() * 100 + "%",
                            top: Math.random() * 100 + "%",
                        }}
                        animate={{
                            y: [0, -100],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col items-center">
                
                {/* SVG Hexagon */}
                <motion.svg
                    width="180"
                    height="180"
                    viewBox="0 0 220 220"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="drop-shadow-[0_0_15px_rgba(251,146,60,0.5)] mb-6"
                >
                    <defs>
                        <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#F97316" />
                            <stop offset="100%" stopColor="#FDBA74" />
                        </linearGradient>
                    </defs>

                    <motion.path
                        d={hexagonPath}
                        stroke="url(#orangeGrad)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    
                    <motion.path
                        d={hexagonPath}
                        stroke="url(#orangeGrad)"
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="blur-md opacity-40"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.4 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />

                    <motion.path
                        d={leftBracket}
                        stroke="url(#orangeGrad)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    />
                    
                    <motion.path
                        d={slash}
                        stroke="url(#orangeGrad)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                    />

                    <motion.path
                        d={rightBracket}
                        stroke="url(#orangeGrad)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
                    />
                </motion.svg>

                {/* Subtitle / Quote */}
                <motion.div 
                    className="mt-4 text-neutral-400 font-mono text-xs sm:text-sm tracking-[0.3em] uppercase opacity-80 text-center flex flex-col items-center gap-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <span>"I can do this all day."</span>
                    <span className="text-orange-500/50 text-[10px] sm:text-[11px] mt-1 tracking-[0.4em]">— Steve Rogers</span>
                </motion.div>

                {/* Loading Counter */}
                <motion.div
                    className="mt-12 flex items-center gap-2 text-orange-400 font-mono text-xl sm:text-2xl font-bold tracking-widest"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <span>{progress.toString().padStart(3, "0")}%</span>
                    
                    {/* Blinking Cursor */}
                    <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        className="inline-block w-3 h-5 bg-orange-400"
                    />
                </motion.div>
                
                <motion.div 
                    className="mt-2 text-neutral-500 font-mulish text-xs tracking-[0.3em] uppercase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    System Initialization
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Loader;
