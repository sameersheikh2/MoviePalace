import { createSlice } from "@reduxjs/toolkit";
import { movieLink, options } from "../utils/constant";

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
      const { type, data, page } = action.payload;
      state[type] = page === 1 ? data : [...state[type], ...data];
    },
  },
});

export const fetchMovies = (type, page) => async (dispatch) => {
  try {
    const res = await fetch(
      movieLink + `${type}?language=en-US&page=${page}`,
      options
    );
    const data = await res.json();
    dispatch(setNowPlaying({ type, data: data.results, page }));
  } catch (error) {
    console.error(error.message);
  }
};

export const { setNowPlaying } = movieListsSlice.actions;
export default movieListsSlice.reducer;
