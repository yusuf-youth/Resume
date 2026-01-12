import React from "react";
import { getModifierClass } from "../script/helpers";

const ServiceCard = (props) => {
  const { imageSrc } = props;
  const { imageAlt } = props;
  const { title } = props;
  const { highlightedText } = props;
  const { children } = props;

  return (
    <article className="what-i-offer__card service-card">
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
        {title}{" "}
        <span
          className={`service-card__highlighted-text ${getModifierClass(
            highlightedText
          )}`}
        >
          {highlightedText}
        </span>
      </h3>
      <div className="service-card__description">{children}</div>
    </article>
  );
};

export default ServiceCard;
