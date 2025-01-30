import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    searchTerm: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;

export const selectSearchTerm = (state) => state.filters.searchTerm;

export default slice.reducer;
