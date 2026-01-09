import React from "react";
import SwitchButton from "../blocks/SwitchButton";
import Socials from "../blocks/Socials";
import { SOCIALS, TEXTS } from "../../script/constants";
import useText from "../../hooks/useText";
import iconSrc from "../../icons/profile.svg";
import Button from "../blocks/Button";

const Home = () => {
  const text = useText(TEXTS.HOME);

  return (
    <section id="home" className="section section--no-padding">
      <div className="section__body">
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
            <h3 className="home__subtitle h5">{text.subheading}</h3>
            <h2 className="home__title h1">{text.heading}</h2>
            <p className="home__description">
              {text.text} <br />
            </p>

            <div className="home__actions">
              <Socials socials={SOCIALS} />
              <Button className="home__button" href="/cv.pdf">
                {text.buttonLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
