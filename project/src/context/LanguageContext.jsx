import React from "react";
import { createContext, useState, useContext, useEffect } from "react";

export const LanguageContext = createContext({
  language: null,
  toggleLanguage: () => null,
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "EN";
  });

  const toggleLanguage = (isUA) => {
    setLanguage(isUA ? "UA" : "EN");
  };

  useEffect(() => {
    document.documentElement.lang = language.toLowerCase();
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
