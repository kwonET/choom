import React, { useEffect, useState } from "react";
import styled from "styled-components";

const VideoPlayer = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentVideoIndex, videos.length]);

  return (
    <VideoContainer>
      {videos.map((video, index) => (
        <StyledVideo
          autoPlay
          key={index}
          src={`video/` + `${video}`}
          width="640"
          height="360"
          fadeOut={index !== currentVideoIndex}
        />
      ))}
      <p>현재 비디오: {currentVideoIndex + 1}</p>
    </VideoContainer>
  );
};

const VideoContainer = styled.div`
  position: relative;
`;

const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${({ fadeOut }) => (fadeOut ? 0 : 1)};
  transition: opacity 1s ease-in-out;
`;

export default VideoPlayer;
