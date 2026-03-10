import React from 'react';
import { motion } from 'framer-motion';

const Portal = ({ label, target, onClick }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onClick(target)}
            className="cursor-pointer group flex flex-col items-center"
        >
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-accent-red flex items-center justify-center overflow-hidden group-hover:neon-border transition-all duration-500">
                {/* Swirling particles inner */}
                <div className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 border-[20px] border-dotted border-accent-red/30 animate-[spin_10s_linear_infinite]" />
                    <div className="absolute inset-0 border-[10px] border-dotted border-white/20 animate-[spin_15s_linear_infinite_reverse]" />
                </div>

                {/* Inner glow */}
                <div className="absolute inset-4 rounded-full bg-accent-red/10 blur-xl group-hover:bg-accent-red/20 transition-all" />

                <span className="relative z-10 text-white font-bold tracking-widest title-font group-hover:neon-text transition-all text-xs md:text-sm">
                    {label}
                </span>
            </div>

            <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mt-4 w-1 h-8 bg-gradient-to-b from-accent-red to-transparent opacity-50"
            />
        </motion.div>
    );
};

export default Portal;
