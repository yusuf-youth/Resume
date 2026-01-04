import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../script/translation";

function useText(type) {
  const { language } = useContext(LanguageContext);
  const text = translations[language][type];

  return text;
}

export default useText;
