import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code, ExternalLink, Shield, Activity, Bell } from 'lucide-react';

const proofOfWorkData = [
    {
        title: "AI Fraud Detection System",
        description: "A machine learning system analyzing transaction networks to detect suspicious financial activity using graph analytics.",
        tech: ["Python", "Machine Learning", "Graph Analysis"],
        github: "https://github.com/kshitij0309",
        icon: <Shield size={24} />
    },
    {
        title: "Health Tracker Application",
        description: "A Flutter mobile application for monitoring daily health metrics and habits.",
        tech: ["Flutter", "Dart", "Firebase"],
        github: "https://github.com/kshitij0309",
        icon: <Activity size={24} />
    },
    {
        title: "Notification Logger",
        description: "An Android system tool that records and analyzes incoming notifications to understand digital behavior.",
        tech: ["Flutter", "Android APIs", "SQLite"],
        github: "https://github.com/kshitij0309",
        icon: <Bell size={24} />
    }
];

const ProofOfWork = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen py-24 px-6 max-w-7xl mx-auto flex flex-col items-center"
        >
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="text-4xl md:text-6xl font-bold title-font text-accent-red mb-4 neon-text"
                >
                    PROOF OF WORK
                </motion.h2>
                <div className="h-1 w-24 bg-accent-red mx-auto blur-[1px] mb-4" />
                <p className="text-text-muted title-font tracking-[0.3em] text-sm uppercase">Evidence of development & repositories</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {proofOfWorkData.map((proof, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 25px rgba(229, 9, 20, 0.4)",
                            borderColor: "#e50914"
                        }}
                        className="group relative bg-[#0a0a0a] border border-accent-red/20 p-8 rounded-xl transition-all duration-300"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="p-3 bg-accent-red/10 rounded-lg text-accent-red group-hover:bg-accent-red group-hover:text-white transition-all transform group-hover:rotate-12">
                                {proof.icon}
                            </div>
                            <Code size={20} className="text-accent-red/30" />
                        </div>

                        <h3 className="text-2xl font-bold title-font text-white mb-4 group-hover:text-accent-red transition-colors capitalize">
                            {proof.title.toLowerCase()}
                        </h3>

                        <p className="text-text-muted mb-6 leading-relaxed font-light text-sm">
                            {proof.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {proof.tech.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-1 bg-accent-red/5 border border-accent-red/10 text-[10px] text-accent-red font-bold uppercase tracking-wider rounded"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <a
                            href={proof.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 w-full justify-center px-4 py-3 bg-zinc-900 border border-white/5 rounded-lg text-white title-font text-xs tracking-widest hover:bg-accent-red hover:border-accent-red transition-all"
                        >
                            <Github size={16} />
                            VIEW REPOSITORY
                            <ExternalLink size={14} className="ml-1 opacity-50" />
                        </a>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default ProofOfWork;
