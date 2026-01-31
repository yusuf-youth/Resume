import React from "react";
import { SERVICES, TEXTS } from "../../script/constants";
import ServiceCard from "../ServiceCard";
import useText from "../../hooks/useText";
import Section from "../Section";

const Services = () => {
  const { title, description } = useText(TEXTS.SERVICES);

  return (
    <Section id="services" title={title} description={description}>
      <div className="services">
        <ul className="services__list">
          {SERVICES.map((service) => (
            <li key={service.key} className="services__item">
              <ServiceCard className="what-i-offer__card" data={service} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Services;
