import React from "react";
import useText from "../../hooks/useText";
import { CLASS_STATES, TEXTS } from "../../script/constants";
import { PauseIcon, PlayIcon } from "../../script/icons";

const VideoButton = (props) => {
  const { className = "" } = props;
  const { isPlaying } = props;
  const { onClick = () => null } = props;
  const title = useText(TEXTS.VIDEO_BUTTON);
  const isPlayingState = isPlaying ? CLASS_STATES.isPlaying : "";

  return (
    <button
      className={`${className} video-button ${isPlayingState}`}
      onClick={onClick}
      aria-label={title}
      title={title}
    >
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </button>
  );
};

export default VideoButton;
