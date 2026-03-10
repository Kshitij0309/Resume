import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [currentSection, setCurrentSection] = useState('landing');
    const [isUpsideDown, setIsUpsideDown] = useState(false);
    const [isMapOpen, setIsMapOpen] = useState(false);

    const toggleUpsideDown = () => setIsUpsideDown(!isUpsideDown);

    return (
        <AppContext.Provider value={{
            currentSection,
            setCurrentSection,
            isUpsideDown,
            setIsUpsideDown,
            toggleUpsideDown,
            isMapOpen,
            setIsMapOpen
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppState = () => useContext(AppContext);
