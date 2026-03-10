import React from 'react';
import { motion } from 'framer-motion';
import { useAppState } from '../../context/AppContext';
import Portal from '../../components/Portal/Portal';
import { Network } from 'lucide-react';

const Landing = () => {
    const { setCurrentSection, setIsMapOpen } = useAppState();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4"
        >
            <motion.div variants={itemVariants} className="text-center z-10 mb-20">
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-black title-font tracking-tighter text-white mb-4 neon-text">
                    KSHITIJ MISHRA
                </h1>
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center text-text-muted title-font tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-lg">
                    <span>ENGINEERING STUDENT</span>
                    <span className="hidden md:inline">•</span>
                    <span>APPLICATION DEVELOPER</span>
                    <span className="hidden md:inline">•</span>
                    <span>AI SYSTEMS BUILDER</span>
                </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 z-10">
                <Portal label="ABOUT" target="about" onClick={setCurrentSection} />
                <Portal label="PROJECTS" target="projects" onClick={setCurrentSection} />
                <Portal label="SKILLS" target="skills" onClick={setCurrentSection} />
                <Portal label="CONTACT" target="contact" onClick={setCurrentSection} />
            </motion.div>

            <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMapOpen(true)}
                className="mt-20 flex items-center gap-3 px-8 py-4 border-2 border-accent-red text-white title-font tracking-widest hover:bg-accent-red transition-all group"
            >
                <Network className="group-hover:rotate-180 transition-transform duration-500" />
                OPEN DIMENSIONAL MAP
            </motion.button>

            {/* Background drifting particles (Landing specific) - Reduced for performance */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(window.innerWidth < 768 ? 10 : 30)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800), Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
                            x: [Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200), Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)],
                            opacity: [0.05, 0.2, 0.05],
                            scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                            duration: 15 + Math.random() * 25,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute w-1 h-1 bg-accent-red/20 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`
                        }}
                    />
                ))}
            </div>
        </motion.section>
    );
};

export default Landing;
