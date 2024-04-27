import React, { useEffect, useState } from "react";
import VideoBackground from "./VideoBackground";
import { useSearchParams } from "react-router-dom";
import { useGetVideosByMovieId } from "../hooks/useGetVideosByMovieId";
import Header from "./Header";

const MovieDetailView = () => {
  const [searchParams, _setSearchParams] = useSearchParams();
  const [movieId, setMovieId] = useState(searchParams.get("id"));
  useEffect(() => {
    console.log("Movie", movieId);
    setMovieId(searchParams.get("id"));
  }, []);
  const [movieVideos, setMovieVideos] = useState([]);
  const { getMovieVideos } = useGetVideosByMovieId(movieId);

  useEffect(() => {
    getMovieVideos().then((results) => {
      console.log(results);
      setMovieVideos(results);
    });
  }, []);

  return (
    <div className="w-screen min-h-screen bg-gray-900">
      <Header />
      <div className="min-h-screen flex flex-col justify-around gap-8 pt-[10%]">
        {movieVideos?.length ? (
          movieVideos.map((video) => {
            return (
              <div className="flex flex-col" key={"MovieDetail" + video.key}>
                <h2 className="text-lg m-2 mt-3 text-white">{video.name}</h2>
                <iframe
                  className="w-[98%] aspect-video rounded-md m-2"
                  src={`https://www.youtube.com/embed/${video.key}?&$autoplay=0`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
                ></iframe>
              </div>
            );
          })
        ) : (
          <div className="text-xl text-white text-center">
            Currently no videos related to requested movie are found in our DB.
            Please search later.
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetailView;
