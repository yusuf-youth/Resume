import React from "react";
import SwitchButton from "../SwitchButton";
import Socials from "../Socials";
import { SOCIALS, TEXTS } from "../../script/constants";
import useText from "../../hooks/useText";
import iconSrc from "../../icons/profile.svg";
import Button from "../Button";
import Section from "../Section";
import resumeFile from "../../assets/Ramil_Bayramov_Frontend_Developer_Confidential.pdf";

  const Home = () => {
    const { subheading, heading, text, buttonLabel } = useText(TEXTS.HOME);

    return (
      <Section id="home" hasNoPadding={true}>
        <div className="home">
          <SwitchButton />

          <div className="home__image-wrapper">
            <img
              className="home__image"
              src={iconSrc}
              alt="A profile photo"
              width="200"
              height="200"
              loading="lazy"
            />
          </div>
          <div className="home__content">
            <h3 className="home__subtitle h5">{subheading}</h3>
            <h2 className="home__title h1">{heading}</h2>
            <p className="home__description">
              {text} <br />
            </p>

            <div className="home__actions">
              <Socials socials={SOCIALS} />
              <Button className="home__button" href={resumeFile}>
                {buttonLabel}
              </Button>
            </div>
          </div>
        </div>
      </Section>
    );
  };

export default Home;
