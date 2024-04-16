import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import aiReducer from "./aiSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    aiSearch: aiReducer,
    config: configReducer,
  },
});

export default appStore;
