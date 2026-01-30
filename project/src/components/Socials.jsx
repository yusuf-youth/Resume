import React from "react";
import { useLanguage } from "../hooks/useLanguage";

const Socials = ({ socials = [] }) => {
  const { isEN } = useLanguage();
  if (!socials.length) return null;

  return (
    <div className="hero__socials socials">
      <ul className="socials__list">
        {socials.map((social, index) => (
          <li key={index} className="socials__item">
            <a
              className="socials__link"
              href={social.url}
              aria-label={social.accessibilityText(isEN)}
              title={social.accessibilityText(isEN)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
