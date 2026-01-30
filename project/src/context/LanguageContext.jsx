import React from "react";
import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext({
  language: null,
  isEN: null,
  toggleLanguage: () => null,
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "EN";
  });
  const isEN = language === "EN";

  const toggleLanguage = (isUA) => {
    setLanguage(isUA ? "UA" : "EN");
  };

  useEffect(() => {
    document.documentElement.lang = language.toLowerCase();
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext value={{ language, isEN, toggleLanguage }}>
      {children}
    </LanguageContext>
  );
};
