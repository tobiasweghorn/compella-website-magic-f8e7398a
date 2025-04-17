
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the available languages
type LanguageType = 'en' | 'de';

type LanguageContextType = {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<LanguageType>('en');

  useEffect(() => {
    // Detect browser language on component mount
    const detectBrowserLanguage = () => {
      const browserLang = navigator.language || (navigator as any).userLanguage;
      if (browserLang.startsWith('de')) {
        setLanguage('de');
      }
    };

    detectBrowserLanguage();
    
    // Store language preference in localStorage
    const storedLanguage = localStorage.getItem('language') as LanguageType;
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: LanguageType) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
