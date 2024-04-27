import React, { useEffect, useState } from "react";
import { useGetVideosByMovieId } from "../hooks/useGetVideosByMovieId";
import { useDispatch, useSelector } from "react-redux";
import { setLandingCarouselVideo } from "../utils/moviesSlice";

const VideoBackground = ({ movieId, isBackground=true }) => {
 const {getCarouselVideo} =  useGetVideosByMovieId(movieId);
 const dispatch = useDispatch()
  useEffect(() => {
    !landingCarouselVideo &&
      getCarouselVideo()
        .then((video) => {
          video && dispatch(setLandingCarouselVideo(video));
        })
        .catch((err) =>
          console.error("error while fetching movie video for carousel", err)
        );
  }, []);
  
  const landingCarouselVideo = useSelector(
    (store) => store.movies.landingCarouselVideo
  );

  return (
    <div className="w-full">
      {landingCarouselVideo && (
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${landingCarouselVideo.key}?&${
            isBackground && "autoplay=1&mute=1&controls=0"
          }`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
