import React from "react";
import useText from "../../hooks/useText";
import { TEXTS } from "../../script/constants";
import avatarSrc from "../../icons/avatar.svg";
import Section from "../Section";

const AboutMe = () => {
  const text = useText(TEXTS.ABOUT_ME);

  return (
    <Section id="aboutMe" title={text.title} description={text.description}>
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
    </Section>
  );
};

export default AboutMe;
