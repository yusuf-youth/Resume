import React from "react";
import useText from "../../hooks/useText";
import { TEXTS } from "../../script/constants";
import avatarSrc from "../../icons/avatar.svg";
import Section from "../Section";

const AboutMe = () => {
  const { title, description, startingText, highlightedText, trailingText } =
    useText(TEXTS.ABOUT_ME);

  return (
    <Section id="aboutMe" title={title} description={description}>
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
            {startingText}{" "}
            <span className="about-me__highlighted">{highlightedText}</span>{" "}
            {trailingText}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
