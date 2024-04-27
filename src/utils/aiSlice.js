import { createSlice } from "@reduxjs/toolkit";

const aiSlice = createSlice({
  name: "aiSearch",
  initialState: {
    showAISearch: false,
    filteredResults: [],
    isAISearchLoading: false,
  },
  reducers: {
    toggleAISearchView: (state) => {
      state.showAISearch = !state.showAISearch;
    },
    closeAISearchView: (state) => {
      state.showAISearch = false;
    },
    setFilteredResults: (state, action) => {
      state.filteredResults = action.payload;
    },
    setIsAISearchLoading: (state, action) => {
      state.isAISearchLoading = action.payload
    }
  },
});

export const { toggleAISearchView, closeAISearchView, setFilteredResults, setIsAISearchLoading } = aiSlice.actions;

export default aiSlice.reducer;
