import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="">
      <h1 className="text-xl my-1 text-white">{title}</h1>
      <div className="flex overflow-x-auto no-scrollbar">
        <div className="flex gap-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movieId={movie.id} imagePath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
