import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [currentSection, setCurrentSection] = useState('landing');
    const [isMapOpen, setIsMapOpen] = useState(false);

    return (
        <AppContext.Provider value={{
            currentSection,
            setCurrentSection,
            isMapOpen,
            setIsMapOpen
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppState = () => useContext(AppContext);
