import {
  MOVIE_API_OPTIONS,
  MOVIE_VIDEOS_ENDPOINT,
  TRAILER_VIDEO_TYPE,
} from "../utils/constants";

export const useGetVideosByMovieId = (movieId) => {
  const getMovieVideos = async () => {
    let response = await fetch(
      MOVIE_VIDEOS_ENDPOINT.replace("{movie_id}", movieId),
      MOVIE_API_OPTIONS
    );
    response = await response.json();
    return response?.results;
  };

  const getMovieLatestTrailerVideo = (movieVideos) => {
    const trailerVideos = movieVideos.filter(
      (video) => video.type === TRAILER_VIDEO_TYPE
    );
    if (trailerVideos?.length <= 0) return null;

    const latestVideo = trailerVideos.reduce((latestVideo, curVideo) => {
      const latestVideoDate = new Date(latestVideo.published_at);
      const curVideoDate = new Date(curVideo.published_at);
      if (latestVideoDate < curVideoDate) return curVideo;
      return latestVideo;
    });

    return latestVideo;
  };

  const getCarouselVideo = async () => {
    const movieVideos = (await getMovieVideos()) || [];
    const latestTrailerVideo = getMovieLatestTrailerVideo(movieVideos);

    if (latestTrailerVideo === null) return movieVideos[0];
    return latestTrailerVideo;
  };

  return { getCarouselVideo, getMovieLatestTrailerVideo, getMovieVideos };
};
