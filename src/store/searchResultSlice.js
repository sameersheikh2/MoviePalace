import { createSlice } from "@reduxjs/toolkit";
import { options, searchMovieLink } from "../utils/constant";

const searchResultSlice = createSlice({
  name: "searchResult",
  initialState: [],
  reducers: {
    setSearchResult(state, action) {
      return [...action.payload];
    },
  },
});

export const searchHandler = (movieName) => async (dispatch) => {
  try {
    const res = await fetch(
      searchMovieLink +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const data = await res.json();
    dispatch(setSearchResult(data.results));
  } catch (err) {
    console.error(err);
  }
};

export const { setSearchResult } = searchResultSlice.actions;
export default searchResultSlice.reducer;
