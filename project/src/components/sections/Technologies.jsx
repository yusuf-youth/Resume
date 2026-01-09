import React from "react";
import TechCard from "../blocks/TechCard";
import { TECHNOLOGIES, TEXTS } from "../../script/constants";
import useText from "../../hooks/useText";

const Technologies = () => {
  const text = useText(TEXTS.TECHNOLOGIES);

  return (
    <section id="technologies" className="section">
      <header className="section__header">
        <h2 className="section__title">{text.title}</h2>
        <p className="section__description">{text.description} </p>
      </header>
      <div className="section__body">
        <div className="technologies">
          <ul className="technologies__list">
            {TECHNOLOGIES.map((tech, index) => (
              <li key={index} className="technologies__item">
                <TechCard {...tech} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
