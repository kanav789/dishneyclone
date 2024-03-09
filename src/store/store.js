import { configureStore } from "@reduxjs/toolkit";

import userSlice from "../features/user/userSlice";

import movieSlice from "../features/movie/movieSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    movie: movieSlice,
  },
});
export default store;
