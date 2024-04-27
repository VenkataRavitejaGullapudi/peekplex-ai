import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    landingCarouselVideo: null,
    nowPlayingMovies: [],
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    setLandingCarouselVideo(state, action) {
      state.landingCarouselVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  setLandingCarouselVideo,
} = moviesSlice.actions;
export default moviesSlice.reducer;
