import { useDispatch, useSelector } from "react-redux";
import {
  NOW_PLAYING_MOVIES_API_ENDPOINT,
  MOVIE_API_OPTIONS,
} from "../utils/constants";
import {
  addNowPlayingMovies,
  setTopFiveMoviesForCarousel,
} from "../utils/moviesSlice";
import { useEffect } from "react";

export const useNowPlayingMovies = () => {
  // Fetching data from TMDB API and update in store
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    let response = await fetch(
      NOW_PLAYING_MOVIES_API_ENDPOINT,
      MOVIE_API_OPTIONS
    );
    response = await response.json();
    dispatch(addNowPlayingMovies(response.results));
  };

  const getTopFiveNowPlayingMovies = (nowPlayingMovies) => {
    if (nowPlayingMovies?.length <= 0) return [];
    const movies = [...nowPlayingMovies];
    movies.sort((movie1, movie2) => {
      if (movie1.popularity < movie2.popularity) return -1;
      if (movie1.popularity > movie2.popularity) return 1;
      return 0;
    });
    return nowPlayingMovies;
  };

  useEffect(() => {
    !nowPlayingMovies?.length && getNowPlayingMovies();
  }, []);

  return { getTopFiveNowPlayingMovies };
};
