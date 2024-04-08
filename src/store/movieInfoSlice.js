import { createSlice } from "@reduxjs/toolkit";
import { options, movieLink } from "../utils/constant";

const movieInfoSlice = createSlice({
  name: "movieInfo",
  initialState: [],
  reducers: {
    setMovieDetails(state, action) {
      return action.payload;
    },
  },
});

export const fetchMovieDetail = (movie_id) => async (dispatch) => {
  try {
    console.log("i am running");
    const res = await fetch(
      movieLink +
        movie_id +
        "?append_to_response=videos%2Cimages%2Ccredits%2Csimilar",
      options
    );
    const data = await res.json();
    console.log(data);
    dispatch(setMovieDetails(data));
  } catch (error) {
    console.error(error);
  }
};

export const { setMovieDetails } = movieInfoSlice.actions;
export default movieInfoSlice.reducer;
