import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Smartphone, Bell, Activity, ShieldCheck } from 'lucide-react';

const projects = [
    {
        title: "AI Fraud Detection System",
        description: "A machine learning system analyzing financial transaction flows to detect suspicious activity using graph analytics.",
        tech: ["Python", "Machine Learning", "Graph Analysis"],
        icon: <ShieldCheck size={32} />
    },
    {
        title: "Health Tracker Application",
        description: "A Flutter-based mobile application for tracking daily wellness metrics and habits.",
        tech: ["Flutter", "Dart", "Firebase"],
        icon: <Activity size={32} />
    },
    {
        title: "Notification Logger System",
        description: "An Android tool that records incoming notifications and analyzes digital behavior patterns.",
        tech: ["Flutter", "Android APIs", "SQLite"],
        icon: <Bell size={32} />
    }
];

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: index * 0.2 }}
        whileHover={{ y: -10, scale: 1.02 }}
        className="bg-zinc-900/90 md:bg-zinc-900/60 md:backdrop-blur-md border border-accent-red/20 p-6 md:p-8 rounded-xl group hover:border-accent-red transition-all duration-300 relative overflow-hidden"
    >
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-red/5 blur-2xl rounded-full group-hover:bg-accent-red/10 transition-all" />

        <div className="text-accent-red mb-6 bg-accent-red/10 w-fit p-3 rounded-lg group-hover:bg-accent-red group-hover:text-white transition-all">
            {project.icon}
        </div>

        <h3 className="text-2xl font-bold title-font text-white mb-4 group-hover:text-accent-red transition-colors">
            {project.title}
        </h3>

        <p className="text-text-muted mb-8 leading-relaxed font-light">
            {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map(t => (
                <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 text-white/60 text-xs rounded-full uppercase tracking-widest font-bold">
                    {t}
                </span>
            ))}
        </div>

        <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-white/50 hover:text-accent-red transition-colors text-sm uppercase tracking-tighter">
                <Github size={16} /> Code
            </button>
            <button className="flex items-center gap-2 text-white/50 hover:text-accent-red transition-colors text-sm uppercase tracking-tighter">
                <ExternalLink size={16} /> Live Demo
            </button>
        </div>
    </motion.div>
);

const Projects = () => {
    return (
        <motion.section
            className="min-h-screen py-20 px-6 max-w-7xl mx-auto"
        >
            <div className="text-center mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold title-font text-accent-red mb-4 neon-text"
                >
                    THE LAB
                </motion.h2>
                <p className="text-text-muted title-font tracking-widest">EXPERIMENTAL PROJECTS & SYSTEMS</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((p, i) => (
                    <ProjectCard key={p.title} project={p} index={i} />
                ))}
            </div>
        </motion.section>
    );
};

export default Projects;
