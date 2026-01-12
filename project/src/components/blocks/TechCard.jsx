import React from "react";

const TechCard = (props) => {
  const { label } = props;
  const { delay } = props;
  const { modifierClass = "" } = props;
  const { icon } = props;

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