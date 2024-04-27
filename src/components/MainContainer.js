import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = ({ carouselMovies = [] }) => {
  if (carouselMovies?.length <= 0) return;
  const mainMovie = carouselMovies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative pt-[20%] sm:pt-0">
      <VideoTitle movieId={id} title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
