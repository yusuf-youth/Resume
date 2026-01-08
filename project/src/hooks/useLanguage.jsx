import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const useLanguage = () => useContext(LanguageContext);
