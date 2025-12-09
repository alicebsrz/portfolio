import React, { createContext, useState, useContext } from 'react';
import { translations } from '../utils/translations';

// 1. Cria o Contexto
const LanguageContext = createContext();

// 2. Cria o Provedor (O componente que envolve o App)
export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('pt'); // Começa em Português

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  // Garante que não quebre se o arquivo de tradução estiver incompleto
  const texts = translations[lang] || translations['pt'];

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 3. EXPORTA O HOOK (ESSA ERA A LINHA QUE FALTAVA!) 🚨
export const useLanguage = () => useContext(LanguageContext);
