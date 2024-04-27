import React from "react";
import { TMDB_IMAGES_PATH } from "../utils/constants";
import { createSearchParams, useNavigate } from "react-router-dom";

const MovieCard = ({ movieId, imagePath }) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/movie?id=${movieId}`);
  };

  return (
    <div className="w-28 sm:w-32 rounded-md cursor-pointer" onClick={handleOnClick}>
      <img
        style={{ borderRadius: "inherit" }}
        src={TMDB_IMAGES_PATH.replace("{width}", 500).replace(
          "{imagePath}",
          imagePath
        )}
        alt="Movie card"
      />
    </div>
  );
};

export default MovieCard;
