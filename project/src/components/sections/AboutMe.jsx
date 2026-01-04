import React from "react";
import useText from "../../hooks/useText";
import { TEXTS } from "../../script/constants";
import avatarSrc from "../../icons/avatar.svg";

function AboutMe() {
  const text = useText(TEXTS.ABOUT_ME);

  return (
    <section id="aboutMe" className="section">
      <header className="section__header">
        <h2 className="section__title">{text.title}</h2>
        <p className="section__description">{text.description}</p>
      </header>
      <div className="section__body">
        <div className="about-me">
          <div className="about-me__image-wrapper">
            <img
              className="about-me__image"
              src={avatarSrc}
              alt="Person's portrait"
              width="250"
              height="250"
              loading="lazy"
            />
          </div>
          <div className="about-me__content">
            <p className="about-me__description">
              {text.startingText}{" "}
              <span className="about-me__highlighted">
                {text.highlightedText}
              </span>{" "}
              {text.trailingText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
