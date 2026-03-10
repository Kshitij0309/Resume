import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Terminal } from 'lucide-react';

const AITransmission = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'ai', content: 'Connection established.\n\nYou have reached the Hawkins communication channel.\n\nAsk about Kshitij.' }
    ]);
    const [input, setInput] = useState('');
    const chatEndRef = useRef(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = { role: 'user', content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');

        // Simulate AI response
        setTimeout(() => {
            let aiResponse = "I am processing your request through the Upside Down sensors...";

            const lowerInput = input.toLowerCase();
            if (lowerInput.includes('project')) {
                aiResponse = "Kshitij has built several advanced systems including an AI Fraud Detection System, a Health Tracker App, and a Notification Logger.";
            } else if (lowerInput.includes('tech') || lowerInput.includes('skill')) {
                aiResponse = "His arsenal includes Python, Dart, JavaScript, Flutter, React, and deep knowledge in AI/ML and Algorithms.";
            } else if (lowerInput.includes('contact')) {
                aiResponse = "You can contact Kshitij Mishra via email at mkshitij86@gmail.com or view his work on GitHub at github.com/kshitij0309.";
            } else if (lowerInput.includes('who') || lowerInput.includes('kshitij')) {
                aiResponse = "Kshitij Mishra is an Engineering Student and AI Systems Builder focused on solving complex problems with intelligent applications.";
            }

            setMessages(prev => [...prev, { role: 'ai', content: aiResponse }]);
        }, 1000);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-[80] bg-accent-red text-white p-4 rounded-full shadow-neon hover:scale-110 transition-transform flex items-center gap-2"
            >
                <MessageSquare size={24} />
                <span className="hidden md:inline font-bold title-font text-xs tracking-widest">TRANSMISSION</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        className="fixed bottom-24 right-6 z-[80] w-[90vw] md:w-96 h-[500px] bg-black/90 border border-accent-red/50 rounded-lg flex flex-col overflow-hidden backdrop-blur-md"
                    >
                        <div className="p-4 bg-accent-red/20 border-b border-accent-red/30 flex justify-between items-center">
                            <div className="flex items-center gap-2 text-accent-red">
                                <Terminal size={18} />
                                <span className="font-bold title-font text-sm tracking-tighter uppercase">Signal Terminal</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex-grow overflow-y-auto p-4 space-y-4 custom-scrollbar">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.role === 'user'
                                        ? 'bg-accent-red/80 text-white rounded-tr-none'
                                        : 'bg-zinc-900 border border-white/10 text-zinc-300 rounded-tl-none'
                                        }`}>
                                        {msg.content.split('\n').map((line, idx) => (
                                            <p key={idx}>{line || <br />}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <div ref={chatEndRef} />
                        </div>

                        <div className="p-4 border-t border-white/10 flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Talk to Hawkins..."
                                className="flex-grow bg-zinc-900 border border-white/10 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-accent-red transition-colors"
                            />
                            <button
                                onClick={handleSend}
                                className="bg-accent-red text-white p-2 rounded hover:bg-red-700 transition-colors"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AITransmission;
