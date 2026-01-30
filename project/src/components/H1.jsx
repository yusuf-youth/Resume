import React from "react";
import { useLanguage } from "../hooks/useLanguage";

const H1 = () => {
  const { isEN } = useLanguage();
  let title;

  if (isEN) {
    title = "Resume: Ramil's Personal Website";
  } else {
    title = "Resume: Персональний веб-сайт Раміля";
  }
  
  return <h1 className="visually-hidden">{title}</h1>;
};

export default H1;
