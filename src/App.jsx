import React, { useEffect, useState } from 'react';
import { useAppState } from './context/AppContext';
import Landing from './sections/Landing/Landing';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import ProofOfWork from './sections/ProofOfWork/ProofOfWork';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import AlphabetWall from './components/AlphabetWall/AlphabetWall';
import FogParticles from './components/FogParticles/FogParticles';
import UpsideDownOverlay from './components/UpsideDownOverlay/UpsideDownOverlay';
import DimensionalMap from './components/DimensionalMap/DimensionalMap';
import AITransmission from './components/AITransmission/AITransmission';
import QuickScanPanel from './components/QuickScanPanel';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const { currentSection, setCurrentSection, isUpsideDown, setIsUpsideDown, toggleUpsideDown } = useAppState();
  const [showGlitch, setShowGlitch] = useState(false);

  // Scroll logic for Upside Down trigger
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
      const clientHeight = window.innerHeight;

      if (scrollTop + clientHeight >= scrollHeight - 30) {
        if (!isUpsideDown) {
          triggerGlitch();
          setIsUpsideDown(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isUpsideDown, setIsUpsideDown]);

  // Sync body class for global CSS effects
  useEffect(() => {
    if (isUpsideDown) {
      document.body.classList.add('upside-down');
    } else {
      document.body.classList.remove('upside-down');
    }
  }, [isUpsideDown]);

  const triggerGlitch = () => {
    setShowGlitch(true);
    setTimeout(() => setShowGlitch(false), 800);
  };

  // Section render logic
  const renderSection = () => {
    switch (currentSection) {
      case 'landing': return <Landing />;
      case 'about': return <About />;
      case 'projects': return <Projects />;
      case 'proof_of_work': return <ProofOfWork />;
      case 'skills': return <Skills />;
      case 'contact': return <Contact />;
      default: return <Landing />;
    }
  };

  return (
    <div className={`relative min-h-screen transition-all duration-1000 ${isUpsideDown
      ? 'bg-[#050000]'
      : 'bg-[#050505]'
      }`}>
      {/* Cinematic Overlays */}
      <FogParticles isUpsideDown={isUpsideDown} />
      <div className="noise-overlay" />

      {/* Global Red Filter Overlay (Higher Z-index than content) */}
      <AnimatePresence>
        {isUpsideDown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[35] pointer-events-none bg-[#330000] mix-blend-color transition-colors"
          />
        )}
      </AnimatePresence>

      {/* Vignette Effect (Upside Down specific) */}
      <AnimatePresence>
        {isUpsideDown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[40] pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,1)]"
          />
        )}
      </AnimatePresence>

      <UpsideDownOverlay />
      <DimensionalMap />
      <AITransmission />
      <QuickScanPanel />

      {/* Glitch Transition Overlay */}
      <AnimatePresence>
        {showGlitch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-white mix-blend-difference pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Mysterious Rift Toggle (Always Available) */}
      <button
        onClick={() => {
          triggerGlitch();
          setIsUpsideDown(!isUpsideDown);
        }}
        className="fixed top-6 right-6 z-[999] p-3 rounded-full border border-accent-red/20 text-accent-red/40 hover:text-accent-red hover:border-accent-red transition-all group overflow-hidden"
        title="Open Dimension"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="glitch-svg">
            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
          </svg>
        </motion.div>
        <div className="absolute inset-0 bg-accent-red/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>

      <main className="relative z-10 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
            transition={{ duration: 0.8 }}
          >
            {renderSection()}

            {/* Common components across sections (except landing) */}
            {currentSection !== 'landing' && (
              <div className="flex flex-col items-center pb-20">
                <AlphabetWall />
                <button
                  onClick={() => setCurrentSection('landing')}
                  className="mt-10 px-6 py-2 border border-white/20 text-white/50 hover:text-white transition-colors title-font text-xs tracking-widest"
                >
                  RETURN TO GATEWAY
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
