import React from "react";
import useText from "../../hooks/useText";
import { TEXTS } from "../../script/constants";
import { PauseIcon, PlayIcon } from "../../script/icons";

function VideoButton({ className, isPlaying, onClick = () => null }) {
  const title = useText(TEXTS.VIDEO_BUTTON);
  const modifier = `${isPlaying ? "is-playing" : ""}`;

  return (
    <button
      className={`${className} video-button ${modifier}`}
      onClick={onClick}
      aria-label={title}
      title={title}
    >
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </button>
  );
}

export default VideoButton;
