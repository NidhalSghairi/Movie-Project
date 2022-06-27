import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DashboardState, Movie } from "./Dashboard.types";

const initialState: DashboardState = {
  allMovies: [{ title: "Spiderhead", years: "2019", owner: "Joseph Kosinski" }],
};

export const movieSlice = createSlice({
  name: "Movies",
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<Movie>) => {
      state.allMovies = [...state.allMovies, action.payload];
    },
  },
});

export const { addMovie } = movieSlice.actions;
export default movieSlice.reducer;
