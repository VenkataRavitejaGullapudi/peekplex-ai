import React from "react";
import { useNavigate } from "react-router-dom";

const VideoTitle = ({ movieId, title, overview }) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/movie?id=${movieId}`);
  };
  return (
    <div className="w-full aspect-video pt-0 sm:pt-[5%] pb-[1%] px-[5%] bg-gradient-to-r from-black absolute bottom-2 text-white flex items-center">
      <div className="">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="px-0.5 pt-2 pb-6 text-sm w-3/4 line-clamp-1">
          {overview}
        </p>
        <div className="flex gap-2 my-5 px-1">
          <button className="text-primary bg-white text-sm rounded-md px-6 py-1 hover:bg-opacity-80" onClick={handleOnClick}>
            ▶️ Play
          </button>
          <button className="text-white text-sm bg-primary bg-opacity-50 rounded-md px-5 py-1 hover:bg-opacity-30" onClick={handleOnClick}>
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
