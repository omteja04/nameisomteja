import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const SocialIcon = ({ href, title, color, children }) => {
    const hoverColor =
        {
            gray: "hover:text-gray-400",
            pink: "hover:text-pink-500",
            blue: "hover:text-blue-500",
            red: "hover:text-red-700",
        }[color] || "";

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={title}
            title={title}
            className={`text-black transition-colors ${hoverColor}`}
        >
            {children}
        </a>
    );
};

const Contact = () => {
    return (
        <section
            id="contact"
            className="bg-white select-none scroll-mt-[20vh] w-full max-w-full z-10 h-fit py-16 px-4"
        >
            <div className="max-w-[800px] mx-auto text-center flex flex-col items-center gap-6">
                {/* Section Title */}
                <motion.h1
                    className="text-black text-5xl font-bold font-mulish"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    Get In <span className="text-orange-400">Touch</span>
                </motion.h1>
                <motion.span
                    className=" h-1 bg-orange-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: "7rem" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                />

                {/* Paragraph */}
                <motion.p
                    className="text-gray-700 max-w-xl text-md leading-relaxed mt-7"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    I'm currently exploring exciting opportunities where I can
                    contribute, learn, and grow as a developer. Whether you have
                    an opportunity, a collaboration idea, or just want to
                    connect, feel free to reach out — I'd love to hear from you!
                </motion.p>

                {/* Email Link */}
                <motion.a
                    href="mailto:yallapragadaomteja@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-10 py-4 bg-white/10 border border-orange-400 text-orange-400 font-semibold rounded-2xl shadow-lg backdrop-blur-md transition duration-300 hover:bg-orange-400 hover:text-white hover:shadow-orange-500/50"
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Say Hello
                </motion.a>
                {/* </div> */}
                <motion.div
                    className="flex items-center justify-center mt-2 gap-6"
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    {/* GitHub */}
                    <SocialIcon
                        href="https://github.com/omteja04"
                        title="github.com/omteja04"
                        color="gray"
                    >
                        <svg
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="30px"
                            height="30px"
                            viewBox="0 0 24 24"
                        >
                            <path d="M 12 1.9960938 C 6.4870865 1.9960938 1.9980469 6.4871845 1.9980469 12 C 1.9980469 16.677334 5.2220333 20.619398 9.5761719 21.701172 A 0.750075 0.750075 0 0 0 10.507812 20.972656 L 10.505859 16.025391 C 10.505859 15.766334 10.570059 15.533634 10.6875 15.316406 A 0.750075 0.750075 0 0 0 10.232422 14.238281 C 8.5307239 13.754483 7.4960938 12.633845 7.4960938 11.492188 C 7.4960938 10.858209 7.8013565 10.252189 8.4003906 9.7226562 A 0.750075 0.750075 0 0 0 8.640625 9.0253906 C 8.5799541 8.6938075 8.6097328 8.347841 8.5878906 8.0117188 C 8.9540667 8.200798 9.3482465 8.3268801 9.6835938 8.5898438 A 0.750075 0.750075 0 0 0 10.347656 8.7226562 C 10.850285 8.5827944 11.404585 8.5097656 11.994141 8.5097656 C 12.582602 8.5097656 13.137996 8.5827947 13.640625 8.7226562 A 0.750075 0.750075 0 0 0 14.304688 8.5917969 C 14.641312 8.3286502 15.035371 8.2011271 15.402344 8.0117188 C 15.380504 8.347908 15.410149 8.6944396 15.349609 9.0253906 A 0.750075 0.750075 0 0 0 15.589844 9.7226562 C 16.189391 10.252643 16.496094 10.859346 16.496094 11.492188 C 16.496094 12.634799 15.464799 13.742356 13.761719 14.240234 A 0.750075 0.750075 0 0 0 13.314453 15.318359 C 13.432133 15.534106 13.496094 15.766298 13.496094 16.025391 L 13.494141 20.972656 A 0.750075 0.750075 0 0 0 14.425781 21.701172 C 18.778065 20.619335 22.001953 16.677334 22.001953 12 C 22.001953 6.4871845 17.512913 1.9960938 12 1.9960938 z M 12 3.4960938 C 16.701087 3.4960938 20.501953 7.2988155 20.501953 12 C 20.501953 15.627166 18.183201 18.621141 14.994141 19.841797 L 14.996094 16.025391 C 14.996094 15.767521 14.875049 15.551989 14.8125 15.3125 C 16.590724 14.574639 17.996094 13.262697 17.996094 11.492188 C 17.996094 10.508176 17.517403 9.6415889 16.84375 8.9296875 C 16.951338 8.1958754 17.018307 7.4557338 16.960938 6.6914062 A 0.750075 0.750075 0 0 0 15.976562 6.0351562 C 15.183927 6.2993525 14.431753 6.7248824 13.710938 7.234375 C 13.157543 7.1085115 12.590385 7.0097656 11.994141 7.0097656 C 11.397137 7.0097656 10.830778 7.1085116 10.277344 7.234375 C 9.5571954 6.7246554 8.8040733 6.2989375 8.0136719 6.0351562 A 0.750075 0.750075 0 0 0 7.0292969 6.6894531 C 6.9699699 7.4560742 7.0387269 8.1962242 7.1464844 8.9296875 C 6.4729761 9.642007 5.9960938 10.509169 5.9960938 11.492188 C 5.9960936 13.262529 7.4026224 14.583169 9.1875 15.314453 C 9.12572 15.55323 9.0058594 15.768835 9.0058594 16.025391 L 9.0058594 16.503906 L 8.2480469 16.503906 C 7.995794 16.503906 7.8383185 16.419446 7.6054688 16.205078 C 7.3726189 15.990709 7.1214946 15.648063 6.8320312 15.289062 A 0.750075 0.750075 0 0 0 6.2480469 15.001953 A 0.750075 0.750075 0 0 0 5.6660156 16.230469 C 5.9135523 16.53747 6.1907403 16.942963 6.5878906 17.308594 C 6.9850409 17.674224 7.5572998 18.003906 8.2480469 18.003906 L 9.0078125 18.003906 L 9.0078125 19.841797 C 5.8172078 18.621106 3.4980469 15.627166 3.4980469 12 C 3.4980469 7.2988155 7.2989135 3.4960938 12 3.4960938 z"></path>
                        </svg>
                    </SocialIcon>

                    {/* LinkedIn */}
                    <SocialIcon
                        href="https://linkedin.com/in/omteja"
                        title="linkedin.com/in/omteja"
                        color="blue"
                    >
                        <svg
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                        >
                            <path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 6 5 L 18 5 C 18.56503 5 19 5.4349698 19 6 L 19 18 C 19 18.56503 18.56503 19 18 19 L 6 19 C 5.4349698 19 5 18.56503 5 18 L 5 6 C 5 5.4349698 5.4349698 5 6 5 z M 8.1855469 6.7851562 C 7.4445469 6.7851563 7 7.2293594 7 7.8183594 C 7 8.4113594 7.444375 8.8574219 8.109375 8.8574219 C 8.850375 8.8574219 9.2910156 8.4113594 9.2910156 7.8183594 C 9.2910156 7.2303594 8.8505469 6.7851562 8.1855469 6.7851562 z M 7.0625 9.9628906 L 7.0625 16 L 9.2363281 16 L 9.2363281 9.9628906 L 7.0625 9.9628906 z M 11.033203 9.9628906 L 11.033203 16 L 13.207031 16 L 13.207031 12.697266 C 13.207031 11.718266 13.908141 11.574219 14.119141 11.574219 C 14.330141 11.574219 14.892578 11.785266 14.892578 12.697266 L 14.892578 16 L 17 16 L 17 12.697266 C 17 10.806266 16.154516 9.9628906 15.103516 9.9628906 C 14.052516 9.9628906 13.490031 10.312641 13.207031 10.806641 L 13.207031 9.9628906 L 11.033203 9.9628906 z"></path>
                        </svg>
                    </SocialIcon>

                    {/* Instagram */}
                    <SocialIcon
                        href="https://instagram.com/nameisomteja"
                        color="pink"
                        title="instagram.com/nameisomteja"
                    >
                        <svg
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="30px"
                            height="30px"
                            viewBox="0 0 24 24"
                        >
                            <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                        </svg>
                    </SocialIcon>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
