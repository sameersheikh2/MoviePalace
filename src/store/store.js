import { configureStore } from "@reduxjs/toolkit";
import movieListsReducer from "./movieListsSlice";
import movieInfoReducer from "./movieInfoSlice";
import searchResultReducer from "./searchResultSlice";
import sideMenuReducer from "./sideMenuSlice";

const store = configureStore({
  reducer: {
    movieLists: movieListsReducer,
    movieInfo: movieInfoReducer,
    searchResults: searchResultReducer,
    sideMenu: sideMenuReducer,
  },
});

export default store;
