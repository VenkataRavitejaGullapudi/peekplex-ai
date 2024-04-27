import { useDispatch, useSelector } from "react-redux";
import {
  NOW_PLAYING_MOVIES_API_ENDPOINT,
  MOVIE_API_OPTIONS,
  TOP_RATED_MOVIES_API_ENDPOINT,
} from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

export const useTopRatedMovies = () => {
  // Fetching data from TMDB API and update in store
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    let response = await fetch(
      TOP_RATED_MOVIES_API_ENDPOINT,
      MOVIE_API_OPTIONS
    );
    response = await response.json();
    dispatch(addTopRatedMovies(response.results));
  };

  const getTopFiveTopRatedMovies = (topRatedMovies) => {
    if (topRatedMovies?.length <= 0) return [];
    const movies = [...topRatedMovies];
    movies.sort((movie1, movie2) => {
      if (movie1.popularity < movie2.popularity) return -1;
      if (movie1.popularity > movie2.popularity) return 1;
      return 0;
    });
    return topRatedMovies;
  };

  useEffect(() => {
    !topRatedMovies?.length && getTopRatedMovies();
  }, []);

  return { getTopFiveTopRatedMovies };
};
