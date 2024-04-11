import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[30%] px-[5%] bg-gradient-to-r from-black absolute bottom-2 text-white">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="px-1 py-6 text-lg w-3/4 max-h-20 text-ellipsis overflow-hidden">
        {overview}
      </p>
      <div className="flex gap-2 my-5 px-1">
        <button className="text-primary bg-white text-lg rounded-md px-6 py-1 hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="text-white text-lg bg-primary bg-opacity-50 rounded-md px-5 py-1 hover:bg-opacity-30">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
