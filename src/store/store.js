import { configureStore } from "@reduxjs/toolkit";
import movieoReducer from "./movieSlice";

export default configureStore({
  reducer: {
    movieoData: movieoReducer,
  },
});
