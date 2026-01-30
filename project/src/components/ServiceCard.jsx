import React from "react";
import { getModifierClass } from "../script/helpers";
import { useLanguage } from "../hooks/useLanguage";

const ServiceCard = (props) => {
  const { isEN } = useLanguage();
  const { classname } = props;
  const { data } = props;
  const { imageSrc } = data;
  const { imageAlt } = data;
  const { title } = data;
  const { highlightedText } = data;
  const { description } = data;

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
        <span
          className={`service-card__highlighted-text ${getModifierClass(
            highlightedText(isEN),
          )}`}
        >
          {highlightedText(isEN)}
        </span>
      </h3>
      <p className="service-card__description">{description(isEN)}</p>
    </article>
  );
};

export default ServiceCard;
