import React from 'react';
import { motion } from 'framer-motion';

const Portal = ({ label, target, onClick }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onClick(target)}
            className="cursor-pointer group flex flex-col items-center animate-float-subtle"
        >
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-accent-red/40 flex items-center justify-center overflow-hidden group-hover:border-accent-red glow-soft group-hover:glow-strong transition-all duration-700">
                {/* Swirling particles inner */}
                <div className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                    <div className="absolute inset-0 border-[15px] border-dotted border-accent-red/20 animate-[spin_12s_linear_infinite]" />
                    <div className="absolute inset-0 border-[8px] border-dotted border-white/10 animate-[spin_18s_linear_infinite_reverse]" />
                </div>

                {/* Inner glow */}
                <div className="absolute inset-6 rounded-full bg-accent-red/5 blur-2xl group-hover:bg-accent-red/10 transition-all duration-700" />

                <span className="relative z-10 text-white/70 font-bold tracking-[0.2em] title-font group-hover:text-white group-hover:neon-text transition-all text-[10px] md:text-sm">
                    {label}
                </span>
            </div>

            <motion.div
                animate={{ y: [0, 8, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="mt-6 w-[2px] h-12 bg-gradient-to-b from-accent-red via-accent-red/20 to-transparent"
            />
        </motion.div>
    );
};

export default Portal;
