import React from "react";

const Socials = ({ socials = [] }) => {
  if (!socials.length) return null;

  return (
    <div className="hero__socials socials">
      <ul className="socials__list">
        {socials.map((social, index) => (
          <li key={index} className="socials__item">
            <a
              className={`socials__link ${
                social.title === "iCloud" ? "socials__link--icloud" : ""
              }`}
              href={social.url}
              aria-label={social.name}
              title={social.title}
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
