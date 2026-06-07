import React, { useRef } from "react";

interface VideoCardProps {
  src: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ src, onMouseEnter, onMouseLeave }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    if (onMouseEnter) {
      onMouseEnter();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    if (onMouseLeave) {
      onMouseLeave();
    }
  };

  // Toggle play/pause on tap (mobile)
  const handleClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="w-full h-full rounded-2xl overflow-hidden shadow-lg"
    >
      {/* 2026-06-07 (perf/a11y): preload="none" so videos don't download until the user hovers/taps
          (play() triggers the fetch) — cuts wasted bytes and helps mobile LCP. Removed loading="lazy"
          (not a valid <video> attribute). aria-label names the media for assistive tech. */}
      <video
        ref={videoRef}
        src={src}
        loop
        playsInline
        preload="none"
        aria-label="PinkCity Mouth Freshener product showcase video"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default VideoCard;
