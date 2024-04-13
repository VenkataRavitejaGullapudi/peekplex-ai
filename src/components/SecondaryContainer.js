import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies || {});
  return (
    <div className="bg-black px-5 flex flex-col gap-5">
      <div className="relative z-5 -mt-[12%]">
        {movies.nowPlayingMovies?.length && (
          <MovieList title={"Now playing"} movies={movies.nowPlayingMovies} />
        )}
        {movies.upcomingMovies?.length && (
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        )}
        {movies.popularMovies?.length && (
          <MovieList title={"Popular"} movies={movies.popularMovies} />
        )}
        {movies.nowPlayingMovies?.length && (
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        )}
      </div>
      {/* 
      MovieList - Popular
      MovieList - Now playing
      MovieList - Trending
      MovieList - Horror
    */}
    </div>
  );
};

export default SecondaryContainer;
