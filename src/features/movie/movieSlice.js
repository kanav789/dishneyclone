// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {

//     recommend: [],
//     newDishney: [],
//     trending: [],
//     originals: [],

// };

// const moviesSlice = createSlice({
//   name: "movies",
//   initialState,
//   reducers: {
//     setMovies: (state, action) => {
//       state.recommend = action.payload.recommend;
//       state.newDishney = action.payload.newDishney;
//       state.originals = action.payload.originals;
//       state.trending = action.payload.trending;
//     },
//   },
// });

// export const { setMovies } = moviesSlice.actions;

// const selectRecommend = (state) => state.movies.recommend;
// const selectNewDishney = (state) => state.movies.newDishney;
// const selectOriginals = (state) => state.movies.originals;
// const selectTrending = (state) => state.movies.trending;
// export { selectRecommend, selectNewDishney, selectOriginals, selectTrending };
// export default moviesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: null,
  newDishney: null,
  original: null,
  trending: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.newDishney = action.payload.newDishney;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDishney = (state) => state.movie.newDishney;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;
