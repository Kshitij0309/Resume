import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppState } from '../../context/AppContext';

const UpsideDownOverlay = () => {
    const { isUpsideDown } = useAppState();

    return (
        <AnimatePresence>
            {isUpsideDown && (
                <>
                    {/* Main Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 pointer-events-none z-[40] overflow-hidden"
                    >
                        {/* Dark Red Haze */}
                        <div className="absolute inset-0 bg-[#330000]/30 mix-blend-multiply" />

                        {/* Shifting "Vines" / Creeper Growth */}
                        <svg className="absolute inset-0 w-full h-full opacity-20">
                            <filter id="distort">
                                <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turb" />
                                <feDisplacementMap in2="turb" in="SourceGraphic" scale="20" xChannelSelector="R" yChannelSelector="G" />
                            </filter>
                            <g filter="url(#distort)">
                                {[...Array(6)].map((_, i) => (
                                    <motion.path
                                        key={i}
                                        d={`M${Math.random() * 100} 0 Q ${Math.random() * 100} ${Math.random() * 100} ${Math.random() * 100} 100`}
                                        stroke="#1a0000"
                                        strokeWidth="4"
                                        fill="none"
                                        animate={{
                                            d: [
                                                `M${Math.random() * 100} 0 Q ${Math.random() * 100} ${50} ${Math.random() * 100} 100`,
                                                `M${Math.random() * 100} 0 Q ${Math.random() * 100} ${50} ${Math.random() * 100} 100`
                                            ]
                                        }}
                                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                                        pathLength="100"
                                        style={{ transform: `scaleX(${window.innerWidth / 100}) scaleY(${window.innerHeight / 100})` }}
                                    />
                                ))}
                            </g>
                        </svg>

                        {/* Distant Screams / Audio Distortion Visualized (Persistent flickering) */}
                        <motion.div
                            animate={{ opacity: [0, 0.1, 0] }}
                            transition={{ duration: 0.1, repeat: Infinity }}
                            className="absolute inset-0 bg-white/5"
                        />

                        {/* Floating Spores (Dense for visibility) */}
                        <div className="spores-container absolute inset-0">
                            {[...Array(60)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{
                                        y: -20,
                                        x: Math.random() * 100 + "%",
                                        opacity: 0
                                    }}
                                    animate={{
                                        y: ["0vh", "100vh"],
                                        x: [
                                            (Math.random() * 100) + "%",
                                            (Math.random() * 100 + (Math.random() * 10 - 5)) + "%"
                                        ],
                                        opacity: [0, 0.8, 0],
                                    }}
                                    transition={{
                                        duration: 5 + Math.random() * 7,
                                        repeat: Infinity,
                                        delay: Math.random() * 5,
                                    }}
                                    className="absolute w-[4px] h-[4px] bg-accent-red rounded-full blur-[2px]"
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Upside Down HUD */}
                    <motion.div
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        exit={{ y: -100 }}
                        className="fixed top-10 left-0 w-full z-[45] flex justify-center pointer-events-none"
                    >
                        <div className="px-10 py-2 border-2 border-accent-red bg-black/80 text-accent-red title-font text-2xl tracking-[1em] neon-text glitch" data-text="THE UPSIDE DOWN">
                            THE UPSIDE DOWN
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default UpsideDownOverlay;
