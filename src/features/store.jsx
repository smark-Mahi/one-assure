import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSlice";
import addcartReducer from "./movies/addToFavourites";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    addcart:addcartReducer
  },
});
