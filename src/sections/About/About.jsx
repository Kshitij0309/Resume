import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-black/50"
        >
            <div className="max-w-4xl w-full">
                <motion.h2
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="text-4xl md:text-6xl font-bold title-font text-accent-red mb-12 neon-text text-center md:text-left"
                >
                    THE BEGINNING
                </motion.h2>

                <div className="space-y-8 text-lg md:text-2xl text-text-primary leading-relaxed font-light">
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="border-l-4 border-accent-red pl-6"
                    >
                        A curious engineering student exploring the world of technology.
                    </motion.p>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Focused on building applications and intelligent systems that solve real problems.
                    </motion.p>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-text-muted italic"
                    >
                        Combining software engineering, machine learning, and creative system design.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1 }}
                    className="mt-20 h-[2px] w-full bg-gradient-to-r from-transparent via-accent-red to-transparent"
                />
            </div>
        </motion.section>
    );
};

export default About;
