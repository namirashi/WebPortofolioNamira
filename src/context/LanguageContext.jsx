import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS } from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Retrieve saved language preference or default to Indonesian ('id')
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('namira_portfolio_lang');
      return saved === 'en' || saved === 'ko' ? saved : 'id';
    } catch {
      return 'id';
    }
  });

  const changeLanguage = (newLang) => {
    if (newLang === 'id' || newLang === 'en' || newLang === 'ko') {
      setLang(newLang);
      try {
        localStorage.setItem('namira_portfolio_lang', newLang);
      } catch {
        // Ignore localStorage error if cookies/storage disabled
      }
    }
  };

  const t = (key, fallback = '') => {
    const keys = key.split('.');
    let current = TRANSLATIONS[lang];
    for (const k of keys) {
      if (current && current[k] !== undefined) {
        current = current[k];
      } else {
        // Fallback to English, then Indonesian, then fallback string
        let eng = TRANSLATIONS['en'];
        for (const ek of keys) {
          if (eng && eng[ek] !== undefined) eng = eng[ek];
          else { eng = null; break; }
        }
        return eng || fallback || key;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
