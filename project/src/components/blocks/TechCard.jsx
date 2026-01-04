import React from "react";

const TechCard = ({ label, delay, modifierClass = "", icon }) => {
  return (
    <article
      className={`technologies__card tech-card ${modifierClass}`}
      data-aos="fade-right"
      data-aos-delay={delay}
    >
      <div className="tech-card__icon-wrapper">{icon}</div>
      <span className="tech-card__label">{label}</span>
    </article>
  );
};

export default TechCard;

