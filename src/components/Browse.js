import React from "react";
import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import AISearchPage from "./AISearchPage";

const Browse = () => {
  const { getTopFiveNowPlayingMovies } = useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const showAISearch = useSelector((store) => store.aiSearch.showAISearch);

  return (
    <div className="w-screen h-screen">
      <Header />
      {showAISearch ? (
        <AISearchPage />
      ) : (
        <>
          <MainContainer
            carouselMovies={getTopFiveNowPlayingMovies(nowPlayingMovies)}
          />
          <SecondaryContainer />
        </>
      )}
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
