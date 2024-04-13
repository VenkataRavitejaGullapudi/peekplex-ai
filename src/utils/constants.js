export const LOGO = "./logo1-white.png";
export const USER_AVATAR =
  "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png";
export const LOGIN_BACKGROUND_IMG = "./login-background.jpeg";

export const MOVIE_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWQzMDFlODYyMjUwOWQ3NTY0YzFmZmY0NTY4YmI4ZSIsInN1YiI6IjY2MTdhYjg1OTBiODdlMDE3YzNkYmQ0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9b9tqwos8_cknTDtbjCDwXlOPaKFj7ShDr50O5EiNnU",
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
