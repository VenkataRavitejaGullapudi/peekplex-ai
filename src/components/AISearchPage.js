import React from "react";
import AISearchBar from "./AISearchBar";
import AIMovieSuggestions from "./AIMovieSuggestions";
import { SEARCH_BACKGROUND_IMG } from "../utils/constants";

const AISearchPage = () => {
  return (
    <div className="pt-[15%] w-full h-full relative">
      <div className="-z-10 fixed top-0 bottom-0 left-0 right-0 h-screen w-screen">
        <img
          className="bg-fixed w-full h-full"
          src={SEARCH_BACKGROUND_IMG}
          alt="backgroundImage"
        />
      </div>
      <AISearchBar />
      <AIMovieSuggestions />
      {/* 
            Gpt search bar
            Movie suggestions
        */}
    </div>
  );
};

export default AISearchPage;
