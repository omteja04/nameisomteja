import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <section
            id="skills"
            className="  select-none scroll-mt-[10vh] pt-10  w-full max-w-full z-10 h-[100vh] gap-16 mx-auto bg-gradient-to-br from-white via-blue-50 to-white"
        >
            <div className='flex flex-col items-center justify-center pt-4 gap-3'>
                <motion.h1
                    className="  text-black text-6xl font-bold font-mulish pl-6"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    Technical <span className="text-orange-400">Skills</span>
                </motion.h1>
                <motion.span
                    className="h-1 bg-orange-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: "9rem" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                />

            </div>

        </section>
    )
}

export default Skills
