import React, { useEffect, useState } from "react";
import { useGetVideosByMovieId } from "../hooks/useGetVideosByMovieId";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useGetVideosByMovieId(movieId);
  const landingCarouselVideo = useSelector(
    (store) => store.movies.landingCarouselVideo
  );

  return (
    <div className="w-full">
      {landingCarouselVideo && (
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${landingCarouselVideo.key}?&autoplay=1&mute=1&controls=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
