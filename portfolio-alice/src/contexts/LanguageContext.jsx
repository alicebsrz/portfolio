import React, { useState } from 'react';
import { LanguageContext } from './language';
import { translations } from '../utils/translations';

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('pt');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, texts: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};
