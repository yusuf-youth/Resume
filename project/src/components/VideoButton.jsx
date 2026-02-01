import React from "react";
import useText from "../hooks/useText";
import { CLASS_STATES, TEXTS } from "../script/constants";
import { ArrowClockwise, Dot, PauseIcon, PlayIcon } from "../script/icons";
import { useLanguage } from "../hooks/useLanguage";

const VideoButton = (props) => {
  const { className = "" } = props;
  const { isPlaying } = props;
  const { onClick = () => null } = props;
  const { isEN } = useLanguage();
  const accessibilityText = isEN ? "Play video" : "Відтворити відео";
  const isPlayingState = isPlaying ? CLASS_STATES.isPlaying : "";

  return (
    <button
      className={`${className} video-button ${isPlayingState}`}
      onClick={onClick}
      aria-label={accessibilityText}
      title={accessibilityText}
    >
      {isPlaying ? <span className="video-button__dot"></span> : <PlayIcon />}
    </button>
  );
};

export default VideoButton;
