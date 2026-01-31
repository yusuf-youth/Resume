import React from "react";
import TechCard from "../TechCard";
import { TECHNOLOGIES, TEXTS } from "../../script/constants";
import useText from "../../hooks/useText";
import Section from "../Section";

const Technologies = () => {
  const { title, description } = useText(TEXTS.TECHNOLOGIES);

  return (
    <Section id="technologies" title={title} description={description}>
      <div className="technologies">
        <ul className="technologies__list">
          {TECHNOLOGIES.map((tech, index) => (
            <li key={index} className="technologies__item">
              <TechCard className="technologies__card" {...tech} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Technologies;
