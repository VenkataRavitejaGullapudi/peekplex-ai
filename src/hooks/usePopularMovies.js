import { useDispatch, useSelector } from "react-redux";
import {
  NOW_PLAYING_MOVIES_API_ENDPOINT,
  MOVIE_API_OPTIONS,
  POPULAR_MOVIES_API_ENDPOINT,
} from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

export const usePopularMovies = () => {
  // Fetching data from TMDB API and update in store
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    let response = await fetch(
      POPULAR_MOVIES_API_ENDPOINT,
      MOVIE_API_OPTIONS
    );
    response = await response.json();
    dispatch(addPopularMovies(response.results));
  };

  const getTopFivePopularMovies = (popularMovies) => {
    if (popularMovies?.length <= 0) return [];
    const movies = [...popularMovies];
    movies.sort((movie1, movie2) => {
      if (movie1.popularity < movie2.popularity) return -1;
      if (movie1.popularity > movie2.popularity) return 1;
      return 0;
    });
    return popularMovies;
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return { getTopFivePopularMovies };
};
