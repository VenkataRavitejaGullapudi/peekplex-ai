import React from "react";
import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";

const Browse = () => {
  const { getTopFiveNowPlayingMovies } = useNowPlayingMovies();
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );

  return (
    <div className="w-screen">
      <Header />
      <MainContainer
        carouselMovies={getTopFiveNowPlayingMovies(nowPlayingMovies)}
      />
      <SecondaryContainer />
      {/* 
        - Main container
          - Video background
          - Video Title
        - Secondary container
          - MovieList *n
            - cards * n
      */}
    </div>
  );
};

export default Browse;
