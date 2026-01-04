import React from "react";
import { useRef, useState } from "react";
import References from "./References";
import VideoButton from "./VideoButton";

const ProjectCard = ({ title, label, videoSrc, poster, delay, links = [] }) => {
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
      <article className="projects__card project-card">
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
          <span className="project-card__label">{label}</span>
          <h3 className="project-card__title h4">{title}</h3>
          <References links={links} />
        </div>
      </article>
    </div>
  );
};

export default ProjectCard;
