import React from "react";

const TechCard = (props) => {
  const { className } = props
  const { modifierClass = "" } = props;
  const { delay } = props;
  const { icon } = props;
  const { label } = props;

  return (
    <article
      className={`${className} tech-card ${modifierClass}`}
      data-aos="fade-right"
      data-aos-delay={delay}
    >
      <div className="tech-card__icon-wrapper">{icon}</div>
      <span className="tech-card__label">{label}</span>
    </article>
  );
};

export default TechCard;