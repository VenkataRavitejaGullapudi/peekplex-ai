import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LANGUAGE } from "../utils/languageConstants";

const AISearchBar = () => {
  const [currentSuggestionPhrase, setCurrentSuggestionPhrase] = useState(0);
  const langKey = useSelector((store) => store.config.lang);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSuggestionPhrase(
        (currentSuggestionPhrase + 1) %
          LANGUAGE[langKey].aiSearchSuggestionPhrases.length
      );
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full py-2 px-10">
      <form className="py-3 px-4 w-full rounded-xl flex gap-3 bg-gradient-to-tr from-primary to-black">
        <input
          type="text"
          className="px-4 py-2 rounded-md grow"
          placeholder={
            LANGUAGE[langKey].aiSearchSuggestionPhrases[currentSuggestionPhrase]
          }
        />
        <button className="flex-2 py-2 px-4 bg-primary text-white rounded-lg">
          🔎 {LANGUAGE[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default AISearchBar;
