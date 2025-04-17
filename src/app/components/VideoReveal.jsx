'use client';

import { useState, useRef } from 'react';

export default function VideoReveal() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setShowVideo(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  return (
    <div className="video-play-button">
      {!showVideo ? (
        <>
          <a  href='/images/video.mp4' className="popup-video">
            <i className="fa-solid fa-play"></i>
          </a>
          <h3>Play video</h3>
        </>
      ) : (
        <video
          ref={videoRef}
          src="/images/video.mp4"
          controls
          className="revealed-video"
        />
      )}
    </div>
  );
}
