import React from 'react';
import { motion } from 'framer-motion';
import { useAppState } from '../context/AppContext';
import { ExternalLink, FileText, Github, ChevronRight, MessageCircle } from 'lucide-react';

const QuickScanPanel = () => {
    const { setCurrentSection } = useAppState();

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
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed bottom-6 left-6 md:left-6 z-[999] w-[140px] md:w-[180px] 
                 bg-zinc-950 md:bg-black/70 md:backdrop-blur-md border border-accent-red/40 rounded-[10px] 
                 p-4 md:shadow-[0_0_15px_rgba(229,9,20,0.3)]
                 max-md:left-1/2 max-md:-translate-x-1/2 max-md:bottom-4"
        >
            <div className="mb-3">
                <h4 className="text-[10px] md:text-[11px] text-accent-red font-bold tracking-[2px] neon-text uppercase">
                    RECRUITER MODE
                </h4>
            </div>

            <nav className="flex flex-col gap-2">
                {links.map((link) => (
                    link.type === 'internal' ? (
                        <button
                            key={link.label}
                            onClick={() => setCurrentSection(link.target)}
                            className="flex items-center gap-2 text-text-muted hover:text-accent-red text-xs md:text-sm font-medium transition-all group w-full text-left"
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
                            className="flex items-center gap-2 text-text-muted hover:text-accent-red text-xs md:text-sm font-medium transition-all group"
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
    );
};

export default QuickScanPanel;
