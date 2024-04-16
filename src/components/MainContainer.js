import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = ({ carouselMovies = [] }) => {
  if (carouselMovies?.length <= 0) return;
  const mainMovie = carouselMovies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
