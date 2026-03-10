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
function App() {
  const { currentSection, setCurrentSection } = useAppState();
  const [showGlitch, setShowGlitch] = useState(false);

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
    <div className="relative min-h-screen bg-[#050505] selection:bg-accent-red selection:text-white">
      {/* Cinematic Layer 1: Background Atmosphere */}
      <div className="fixed inset-0 z-0 pointer-events-none ambient-glow opacity-50" />
      <FogParticles />
      <div className="noise-overlay" />

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
