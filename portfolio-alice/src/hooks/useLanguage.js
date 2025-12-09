import { useContext } from 'react';
import { LanguageContext } from '../contexts/language';

export const useLanguage = () => useContext(LanguageContext);
