import { configureStore } from "@reduxjs/toolkit";
import movieListsReducer from "./movieListsSlice";
import movieInfoReducer from "./movieInfoSlice";
import searchResultReducer from "./searchResultSlice";

const store = configureStore({
  reducer: {
    movieLists: movieListsReducer,
    movieInfo: movieInfoReducer,
    searchResults: searchResultReducer,
  },
});

export default store;
