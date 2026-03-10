import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppState } from '../context/AppContext';
import { ExternalLink, FileText, Github, ChevronRight, MessageCircle, Briefcase, X } from 'lucide-react';

const QuickScanPanel = () => {
    const { setCurrentSection } = useAppState();
    const [isExpanded, setIsExpanded] = useState(false);

    const links = [
        { label: 'Gateway', type: 'internal', target: 'landing' },
        { label: 'Projects', type: 'internal', target: 'projects' },
        { label: 'Proof of Work', type: 'internal', target: 'proof_of_work' },
        { label: 'Skills', type: 'internal', target: 'skills' },
        { label: 'GitHub', type: 'external', href: 'https://github.com/kshitij0309', icon: <Github size={14} /> },
        { label: 'Contact', type: 'internal', target: 'contact' },
        { label: 'WhatsApp', type: 'external', href: 'https://wa.me/918777659594?text=Hello%20Kshitij%20I%20visited%20your%20portfolio', icon: <MessageCircle size={14} /> },
        { label: 'Resume', type: 'external', href: '/resume.pdf', icon: <FileText size={14} /> },
    ];

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 z-[999]">
            <AnimatePresence>
                {isExpanded ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="w-[280px] md:w-[200px] bg-zinc-950 md:bg-black/90 md:backdrop-blur-md border border-accent-red/20 rounded-[15px] p-5 elevated-content"
                    >
                        <div className="flex justify-between items-center mb-4 border-b border-accent-red/10 pb-2">
                            <h4 className="text-[10px] text-accent-red/80 font-bold tracking-[2px] title-font uppercase">
                                RECRUITER MODE
                            </h4>
                            <button onClick={() => setIsExpanded(false)} className="text-white/40 hover:text-white transition-colors">
                                <X size={16} />
                            </button>
                        </div>

                        <nav className="flex flex-col gap-3">
                            {links.map((link) => (
                                link.type === 'internal' ? (
                                    <button
                                        key={link.label}
                                        onClick={() => {
                                            setCurrentSection(link.target);
                                            if (window.innerWidth < 768) setIsExpanded(false);
                                        }}
                                        className="flex items-center gap-2 text-text-muted hover:text-accent-red text-sm font-medium transition-all group w-full text-left"
                                    >
                                        <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span className="group-hover:neon-text transition-all tracking-wide">{link.label}</span>
                                    </button>
                                ) : (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-text-muted hover:text-accent-red text-sm font-medium transition-all group"
                                    >
                                        <div className="opacity-60 group-hover:opacity-100 transition-opacity">
                                            {link.icon}
                                        </div>
                                        <span className="group-hover:neon-text transition-all tracking-wide">{link.label}</span>
                                        <ExternalLink size={10} className="ml-auto opacity-30 group-hover:opacity-100" />
                                    </a>
                                )
                            ))}
                        </nav>
                    </motion.div>
                ) : (
                    <motion.button
                        layoutId="recruiter-toggle"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsExpanded(true)}
                        className="bg-black border border-accent-red/40 text-accent-red p-4 rounded-full shadow-[0_0_15px_rgba(229,9,20,0.3)] flex items-center gap-3 hover:bg-accent-red hover:text-white transition-all group"
                    >
                        <Briefcase size={20} />
                        <span className="text-[10px] font-bold tracking-[2px] uppercase">Recruiter Mode</span>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default QuickScanPanel;
