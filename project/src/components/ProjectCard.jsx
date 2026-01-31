import React from "react";
import { useRef, useState } from "react";
import References from "./References";
import VideoButton from "./VideoButton";
import { useLanguage } from "../hooks/useLanguage";

const ProjectCard = (props) => {
  const { isEN } = useLanguage();
  const { className } = props;
  const { label } = props;
  const { title } = props;
  const { videoSrc } = props;
  const { poster } = props;
  const { delay } = props;
  const { links = [] } = props;
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function onClick() {
    setIsPlaying(true);
    videoRef.current?.play();
  }

  function onEnded() {
    setIsPlaying(false);

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }

  return (
    <div data-aos="zoom-out" data-aos-delay={delay} data-aos-duration="800">
      <article className={`${className} project-card`}>
        <video
          className={`project-card__video ${isPlaying ? "is-hovered" : ""}`}
          ref={videoRef}
          src={videoSrc}
          poster={poster}
          onEnded={onEnded}
          loading="lazy"
          muted
        ></video>
        <VideoButton
          className="project-card__button"
          isPlaying={isPlaying}
          onClick={onClick}
        />
        <div className="project-card__body">
          <span className="project-card__label">{label(isEN)}</span>
          <h3 className="project-card__title h4">{title(isEN)}</h3>
          <References links={links} />
        </div>
      </article>
    </div>
  );
};

export default ProjectCard;
