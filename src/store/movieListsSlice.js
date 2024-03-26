import { createSlice } from "@reduxjs/toolkit";
import { movieLink, options } from "../constant";

const movieListsSlice = createSlice({
  name: "movieLists",
  initialState: {
    now_playing: [],
    popular: [],
    upcoming: [],
    top_rated: [],
  },
  reducers: {
    setNowPlaying(state, action) {
      const { type, data } = action.payload;
      state[type] = data;
    },
  },
});

export const fetchMovies = (type) => async (dispatch) => {
  try {
    const res = await fetch(
      movieLink + `${type}?language=en-US&page=1`,
      options
    );
    const data = await res.json();
    dispatch(setNowPlaying({ type, data: data.results }));
  } catch (error) {
    console.error(error.message);
  }
};

export const { setNowPlaying } = movieListsSlice.actions;
export default movieListsSlice.reducer;
