import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <motion.section
            className="min-h-screen py-20 px-6 flex flex-col items-center justify-center bg-gradient-to-t from-accent-redDark/10 to-transparent"
        >
            <div className="text-center max-w-3xl w-full">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-4xl md:text-6xl font-bold title-font text-accent-red mb-12 neon-text"
                >
                    TRANSMISSION TERMINAL
                </motion.h2>

                <p className="text-text-primary text-xl md:text-2xl font-light mb-16 leading-relaxed">
                    Signal open. Communication ready. <br />
                    Reach out across the dimensions.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <ContactButton
                        icon={<Mail />}
                        label="EMAIL"
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=mkshitij86@gmail.com"
                    />
                    <ContactButton
                        icon={<MessageCircle />}
                        label="WHATSAPP"
                        href="https://wa.me/918777659594?text=Hello%20Kshitij%20I%20visited%20your%20portfolio"
                    />
                    <ContactButton
                        icon={<Github />}
                        label="GITHUB"
                        href="https://github.com/kshitij0309"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-20 p-8 border-t border-white/5"
                >
                    <p className="text-accent-red title-font tracking-[0.8em] text-sm animate-pulse uppercase">
                        Waiting for incoming transmission...
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
};

const ContactButton = ({ icon, label, href }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, translateY: -5 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-4 px-8 py-4 bg-zinc-900/90 border border-white/10 rounded-full text-white/70 title-font tracking-widest hover:border-accent-red hover:text-white hover:neon-text elevated-content group transition-all"
    >
        <div className="group-hover:glow-strong transition-all duration-500">
            {icon}
        </div>
        <span>{label}</span>
    </motion.a>
);

export default Contact;
