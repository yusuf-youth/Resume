import React from "react";
import { SERVICES, TEXTS } from "../../script/constants";
import ServiceCard from "../blocks/ServiceCard";
import useText from "../../hooks/useText";
import Section from "../blocks/Section";

const Services = () => {
  const text = useText(TEXTS.SERVICES);

  return (
    <Section id="services" title={text.title} description={text.description}>
      <div className="services">
        <ul className="services__list">
          {SERVICES.map((service, index) => (
            <li key={index} className="services__item">
              <ServiceCard
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
                title={text.data[index].title}
                highlightedText={text.data[index]?.highlightedText}
              >
                {text.data[index].description}
              </ServiceCard>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Services;
