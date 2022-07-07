import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DashboardState, Movie } from "./Dashboard.types";

const initialState: DashboardState = {
  allMovies: [],
};

export const movieSlice = createSlice({
  name: "Movies",
  initialState,
  reducers: {
    fetchAllMovies: (state, action: PayloadAction<Movie[]>) => {
      state.allMovies = [...state.allMovies, ...action.payload];
    },
    addOneMovie: (state, action: PayloadAction<Movie>) => {
      state.allMovies = [...state.allMovies, action.payload];
    },
  },
});

export const { fetchAllMovies, addOneMovie } = movieSlice.actions;
export default movieSlice.reducer;
