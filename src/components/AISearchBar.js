import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LANGUAGE } from "../utils/languageConstants";
import { callCohereChat } from "../utils/cohere";
import { MOVIE_API_OPTIONS, MOVIE_SEARCH_ENDPOINT } from "../utils/constants";
import { setFilteredResults, setIsAISearchLoading } from "../utils/aiSlice";
import ShimmerMovieCard from "./ShimmerMovieCard";

const AISearchBar = () => {
  const [currentSuggestionPhrase, setCurrentSuggestionPhrase] = useState(0);
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const isAISearchLoading = useSelector(
    (state) => state.aiSearch.isAISearchLoading
  );

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

  const searchMovieInTmdb = async (searchRequest) => {
    try {
      searchRequest.query =
        searchRequest.movieName ||
        searchRequest.suggestedMovies ||
        searchRequest.query;

      if (!searchRequest.movieName)
        searchRequest.query += "," + searchRequest.movieGenre;
      const searchArray = searchRequest.query.split(",");
      const movies = [];
      for (const searchQuery of searchArray) {
        searchRequest.query = searchQuery;
        let endpoint = MOVIE_SEARCH_ENDPOINT.replace("{pageId}", 1);
        Object.keys(searchRequest).forEach((key) => {
          endpoint = endpoint.replace(`{${key}}`, searchRequest?.[key]);
        });
        let response = await fetch(endpoint, MOVIE_API_OPTIONS);
        response = await response.json();
        movies.push(
          ...(Array.isArray(response.results) ? response.results : [])
        );
      }
      return movies;
    } catch (err) {
      console.log("Something wrong while getting movies: ", err);
      return [];
    }
  };

  const handleAISearchClick = async () => {
    dispatch(setIsAISearchLoading(true));
    const currentSearchText = searchText.current.value;

    // Make an api call to get results.
    const prompt = `Act as user's movie recommender by extracting the following properties based on user text input:

    - "query": The search query provided by the user.
    - "include_adult" (optional): Whether to include adult content in the search results. Default is "false".
    - "language" (optional): The language of the movie user wants. Default is "".
    - "year" (optional): The year of the movie being searched. Default is "".
    - "movieName" (optional):  The name of the movie if user is trying to ask for a specific movie by mentioning it else return default here. Default is "".
    - "movieGenre" (optional):  The name genre of the movie if user mentioned else you have the access to predict movie genre based on user input . Defualt is ""
    - "suggestedMovies" (optional): If there are no movie name nor genre extracted, you can give the suggested movie names based on users input context here as a comma separated list.
    
    You should analyze the user's input and extract these properties into a JSON string. If any of the optional properties are not present in the user's input, they should be omitted from the JSON string.
    And also keep in mind to not return your analysis in the output as it will break my json string conversion
    
    The JSON string should be in the following format:
    {
    "query": "string",
    "include_adult": boolean,
    "language": "string",
    "year": "string",
    "movieName": "string",
    "movieGenre": "string",
    suggestedMovies: "string",
    }
    
    Keep in mind that the output should be only a JSON string that is pure and can be directly parsed using "JSON.parse" in JavaScript.
    So you should not even add any text or content other than the above mention javascript stringified json that can break my JSON.parse method.
    User Input: ${currentSearchText}
    `;
    try {
      const response = await callCohereChat(prompt);
      if (response.text.includes("```")){
        response.text = response.text.match(/\{[^{}]*\}/)
      }
      const movieRequest = JSON.parse(response.text);
      if (typeof movieRequest === "object") {
        const movieResults = await searchMovieInTmdb(movieRequest);
        dispatch(setFilteredResults(movieResults));
      }
    } catch (error) {
      console.log("Something went wrong...");
    } finally {
      dispatch(setIsAISearchLoading(false));
    }
  };

  return (
    <div className="w-full py-7 px-4 text-sm">
      <form
        className="py-2 px-2 w-full rounded-xl flex gap-3 bg-gradient-to-tr from-primary to-black"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="px-2 rounded-md grow"
          placeholder={
            LANGUAGE[langKey].aiSearchSuggestionPhrases[currentSuggestionPhrase]
          }
        />
        <button
          className="flex-2 py-2 px-4 bg-primary text-white rounded-lg"
          disabled={isAISearchLoading}
          onClick={handleAISearchClick}
        >
          {!isAISearchLoading
            ? "🔎  " + LANGUAGE[langKey]?.search
            : "Loading..."}
        </button>
      </form>
    </div>
  );
};

export default AISearchBar;
