import React from "react";
import { useSelector } from "react-redux";
import ShimmerMovieCard from "./ShimmerMovieCard";
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";

const AIMovieSuggestions = () => {
  const isAISearchLoading = useSelector(
    (state) => state.aiSearch.isAISearchLoading
  );
  const filteredResults = useSelector(
    (state) => state.aiSearch.filteredResults
  );

  return (
    <div className="rounded-md bg-opacity-60 bg-black mx-5 py-3 mt-3 flex flex-col">
      {isAISearchLoading && (
        <div className="flex flex-wrap justify-around">
          {Array.from([0, 0, 0, 0, 0, 0, 0, 0]).map((_val, index) => (
            <ShimmerMovieCard key={index} />
          ))}
        </div>
      )}
      {!isAISearchLoading && !filteredResults?.length && (
        <h3 className="w-full font-bold self-center justify-self-center text-lg text-gray-200 text-center">
          No Suggested movies 🥲. <br/><br/>
          Lets do a search in the above input.
        </h3>
      )}
      {filteredResults?.length && (
        <div className="py-2 px-2">
          <h2 className="text-center font-bold text-xl text-white mb-5">Suggested Movies</h2>
          <div className="flex gap-5 flex-wrap justify-center">
            {filteredResults?.map(
              (movie) =>
                movie?.poster_path && (
                  <MovieCard key={movie.id} imagePath={movie?.poster_path} movieId={movie.id} />
                )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AIMovieSuggestions;
