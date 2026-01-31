import React from "react";
import { useLanguage } from "../hooks/useLanguage";

const ServiceCard = (props) => {
  const { isEN } = useLanguage();
  const { classname } = props;
  const { imageSrc } = props;
  const { imageAlt } = props;
  const { title } = props;
  const { highlightedText } = props;
  const { description } = props;
  const { modifierClass } = props;

  return (
    <article className={`${classname} service-card`}>
      <div className={`box`}>
        <div className="box__background">
          <div className="box__floating-layer">
            <img
              className="box__image"
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <h3 className="service-card__title h4">
        {title(isEN)}{" "}
        <span className={`service-card__highlighted-text ${modifierClass}`}>
          {highlightedText(isEN)}
        </span>
      </h3>
      <p className="service-card__description">{description(isEN)}</p>
    </article>
  );
};

export default ServiceCard;
