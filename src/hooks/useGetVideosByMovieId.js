import { useDispatch, useSelector } from "react-redux";
import {
  MOVIE_API_OPTIONS,
  MOVIE_VIDEOS_ENDPOINT,
  TRAILER_VIDEO_TYPE,
} from "../utils/constants";
import { setLandingCarouselVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

export const useGetVideosByMovieId = (movieId) => {
  const landingCarouselVideo = useSelector(
    (store) => store.movies.landingCarouselVideo
  );
  const dispatch = useDispatch()

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

  useEffect(() => {
    !landingCarouselVideo &&
      getCarouselVideo()
        .then((video) => {
          video && dispatch(setLandingCarouselVideo(video));
        })
        .catch((err) =>
          console.error("error while fetching movie video for carousel", err)
        );
  }, []);

  return { getCarouselVideo, getMovieLatestTrailerVideo, getMovieVideos };
};
