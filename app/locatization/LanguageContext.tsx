import React, { createContext, useState, ReactNode, useEffect } from 'react';
import i18n from './translations';

interface LanguageContextType {
  language: string;
  changeLanguage: (lang: string) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  changeLanguage: () => {},
});

interface Props {
  children: ReactNode;
}

export const LanguageProvider: React.FC<Props> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang: string) => {
    i18n.locale = lang;
    setLanguage(lang);
  };

  useEffect(() => {
    const defaultLang = i18n.locale.split('-')[0]; // Example: en-US -> en
    changeLanguage(defaultLang);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
