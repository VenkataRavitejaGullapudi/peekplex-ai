import { createSlice } from "@reduxjs/toolkit";

const aiSlice = createSlice({
  name: "aiSearch",
  initialState: {
    showAISearch: false,
  },
  reducers: {
    toggleAISearchView: (state) => {
      state.showAISearch = !state.showAISearch;
    },
    closeAISearchView: (state) => {
      state.showAISearch = false
    }
  },
});

export const { toggleAISearchView, closeAISearchView } = aiSlice.actions;

export default aiSlice.reducer;
