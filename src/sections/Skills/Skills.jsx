import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { category: "PROGRAMMING", items: ["Python", "Dart", "JavaScript"] },
    { category: "FRAMEWORKS", items: ["Flutter", "React"] },
    { category: "CONCEPTS", items: ["Artificial Intelligence", "Machine Learning", "Data Structures", "Algorithms"] }
];

const Skills = () => {
    return (
        <motion.section
            className="min-h-screen py-20 px-6 max-w-5xl mx-auto"
        >
            <div className="text-center mb-20">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl md:text-6xl font-bold title-font text-accent-red mb-4 neon-text"
                >
                    ABILITIES
                </motion.h2>
                <p className="text-text-muted title-font tracking-widest uppercase">Augmented Knowledge Base</p>
            </div>

            <div className="space-y-16">
                {skills.map((cat, idx) => (
                    <div key={cat.category}>
                        <h3 className="text-xl title-font text-white mb-8 tracking-[0.5em] border-b border-white/10 pb-2">
                            {cat.category}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {cat.items.map((skill, sIdx) => (
                                <motion.div
                                    key={skill}
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: (idx * 0.2) + (sIdx * 0.1) }}
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(229, 9, 20, 0.4)" }}
                                    className="p-6 bg-zinc-900 border border-white/5 rounded-lg text-center group transition-all"
                                >
                                    <span className="text-text-primary font-bold tracking-widest group-hover:text-accent-red transition-colors">
                                        {skill.toUpperCase()}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
};

export default Skills;
