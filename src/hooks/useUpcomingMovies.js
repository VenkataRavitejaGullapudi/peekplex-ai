import { useDispatch, useSelector } from "react-redux";
import {
  MOVIE_API_OPTIONS,
  UPCOMING_MOVIES_API_ENDPOINT,
} from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

export const useUpcomingMovies = () => {
  // Fetching data from TMDB API and update in store
  const dispatch = useDispatch();

  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  const getUpcomingMovies = async () => {
    let response = await fetch(UPCOMING_MOVIES_API_ENDPOINT, MOVIE_API_OPTIONS);
    response = await response.json();
    dispatch(addUpcomingMovies(response.results));
  };

  const getTopFiveUpcomingMovies = (upcomingMovies) => {
    if (upcomingMovies?.length <= 0) return [];
    const movies = [...upcomingMovies];
    movies.sort((movie1, movie2) => {
      if (movie1.popularity < movie2.popularity) return -1;
      if (movie1.popularity > movie2.popularity) return 1;
      return 0;
    });
    return upcomingMovies;
  };

  useEffect(() => {
    !upcomingMovies?.length && getUpcomingMovies();
  }, []);

  return { getTopFiveUpcomingMovies };
};
