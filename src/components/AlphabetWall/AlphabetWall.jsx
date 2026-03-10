import React, { useState, useEffect } from 'react';
import { useAppState } from '../../context/AppContext';
import { motion } from 'framer-motion';

const ALPHABET = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z'
];

const AlphabetWall = () => {
    const { setCurrentSection } = useAppState();
    const [activeLetter, setActiveLetter] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [isAnimating, setIsAnimating] = useState(false);

    const animateSequence = async (word) => {
        setIsAnimating(true);
        const upperWord = word.toUpperCase();
        for (let char of upperWord) {
            if (ALPHABET.includes(char)) {
                setActiveLetter(char);
                await new Promise(resolve => setTimeout(resolve, 800));
                setActiveLetter(null);
                await new Promise(resolve => setTimeout(resolve, 200));
            }
        }
        setIsAnimating(false);

        // Check if word corresponds to a section
        const sections = ['ABOUT', 'PROJECTS', 'SKILLS', 'CONTACT'];
        if (sections.includes(upperWord)) {
            setCurrentSection(upperWord.toLowerCase());
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue && !isAnimating) {
            animateSequence(inputValue);
            setInputValue('');
        }
    };

    return (
        <div className="flex flex-col items-center py-10 md:py-20 px-4 bg-black/80 md:bg-black/40 md:backdrop-blur-sm rounded-xl border border-accent-red/20 my-10">
            <h3 className="text-2xl title-font text-white mb-10 tracking-widest text-center">LIGHT COMMUNICATION</h3>

            <div className="grid grid-cols-4 sm:grid-cols-7 gap-4 md:gap-8 mb-12 max-w-4xl mx-auto">
                {ALPHABET.map((letter) => (
                    <div key={letter} className="flex flex-col items-center">
                        <motion.div
                            animate={{
                                backgroundColor: activeLetter === letter ? '#e50914' : '#222',
                                boxShadow: activeLetter === letter
                                    ? '0 0 20px #e50914, 0 0 40px #8b0000'
                                    : '0 0 5px rgba(229, 9, 20, 0.1)'
                            }}
                            className="w-4 h-4 md:w-6 md:h-6 rounded-full mb-2"
                        />
                        <span className={`text-xl md:text-3xl font-bold title-font transition-colors duration-300 ${activeLetter === letter ? 'text-accent-red' : 'text-text-muted'}`}>
                            {letter}
                        </span>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="TYPE A WORD (E.G. PROJECTS)"
                    disabled={isAnimating}
                    className="w-full bg-black border-b-2 border-accent-red p-4 text-white title-font text-center focus:outline-none focus:border-white transition-colors"
                />
                <p className="text-xs text-text-muted mt-2 text-center uppercase tracking-widest">
                    {isAnimating ? 'TRANSMITTING SIGNAL...' : 'SIGNAL READY'}
                </p>
            </form>
        </div>
    );
};

export default AlphabetWall;
