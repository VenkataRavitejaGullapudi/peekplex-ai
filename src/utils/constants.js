export const LOGO = "./logo1-white.png";
export const USER_AVATAR =
  "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png";
export const LOGIN_BACKGROUND_IMG = "./login-background.jpeg";
export const SEARCH_BACKGROUND_IMG = "./search_logo.jpeg";

export const MOVIE_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
  },
};
export const NOW_PLAYING_MOVIES_API_ENDPOINT =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const POPULAR_MOVIES_API_ENDPOINT =
  "https://api.themoviedb.org/3/movie/popular?page=1";

export const TOP_RATED_MOVIES_API_ENDPOINT =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";

export const UPCOMING_MOVIES_API_ENDPOINT =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";

export const MOVIE_VIDEOS_ENDPOINT =
  "https://api.themoviedb.org/3/movie/{movie_id}/videos";

export const TRAILER_VIDEO_TYPE = "Trailer";
export const TMDB_IMAGES_PATH =
  "https://image.tmdb.org/t/p/w{width}{imagePath}";

export const MOVIE_SEARCH_ENDPOINT = "https://api.themoviedb.org/3/search/movie?query={query}&include_adult={include_adult}&year={year}&language={language}&page={pageId}"


export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "te",
    name: "Telugu",
  },
  {
    identifier: "hi",
    name: "Hindi",
  },
  {
    identifier: "es",
    name: "Spanish",
  },
];
