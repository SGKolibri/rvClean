import { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

// Create a context
const LanguageContext = createContext();

// Custom hook to use the LanguageContext
export const useUserProgress = () => {
    return useContext(LanguageContext);
};

// Provider component
export const UserProgressProvider = ({ children }) => {
    // Add prop validation for 'children'
    UserProgressProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };
    // Initialize state from localStorage or default to 0
    const [language, setLanguage] = useState(() => {
        const savedProgress = localStorage.getItem('selectedLanguage');
        return savedProgress ? JSON.parse(savedProgress) : 0;
    });


    // Save state to localStorage
    useEffect(() => {
        localStorage.setItem('selectedLanguage', JSON.stringify(language));
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );

};
