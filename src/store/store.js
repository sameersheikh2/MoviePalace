import { configureStore } from "@reduxjs/toolkit";
import movieListsReducer from "./movieListsSlice";

const store = configureStore({
  reducer: {
    movieLists: movieListsReducer,
  },
});

export default store;
