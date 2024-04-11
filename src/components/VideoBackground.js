import React, { useEffect, useState } from "react";
import { useGetVideosByMovieId } from "../hooks/useGetVideosByMovieId";

const VideoBackground = ({ movieId }) => {
  const [trailerVideo, setTrailerVideo] = useState(null);
  const { getCarouselVideo } = useGetVideosByMovieId(movieId);
  useEffect(() => {
    getCarouselVideo()
      .then((video) => {
        video && setTrailerVideo(video);
      })
      .catch((err) =>
        console.error("error while fetching movie video for carousel", err)
      );
  }, []);

  return (
    <div className="w-full">
      {trailerVideo && (
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?&autoplay=1&mute=1&controls=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
