import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DashboardState, Movie } from "./Dashboard.types";

const initialState: DashboardState = {
  allMovies: [
    {
      title: "Spiderhead",
      years: "2019",
      owner: "Joseph Kosinski",
      description:
        "Dans un futur proche, les détenus se voient offrir la possibilité de se porter volontaires comme sujets médicaux afin d'écourter leur peine. L'un d'entre eux, qui teste un nouveau médicament capable de générer des sentiments amoureux, commence à s'interroger sur la réalité de ses émotions.",
      coverImage:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSRj6APAJg_K37zyU_RcjW-9NWX7lBvW3aKevGHEl6YwVCqDfmU",
    },
    {
      title: "Spiderhead",
      years: "2019",
      owner: "Joseph Kosinski",
      description:
        "Dans un futur proche, les détenus se voient offrir la possibilité de se porter volontaires comme sujets médicaux afin d'écourter leur peine. L'un d'entre eux, qui teste un nouveau médicament capable de générer des sentiments amoureux, commence à s'interroger sur la réalité de ses émotions.",
      coverImage:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSRj6APAJg_K37zyU_RcjW-9NWX7lBvW3aKevGHEl6YwVCqDfmU",
    },
  ],
};

export const movieSlice = createSlice({
  name: "Movies",
  initialState,
  reducers: {
    fetchAllMovies: (state, action: PayloadAction<Movie[]>) => {
      state.allMovies = [...state.allMovies, ...action.payload];
    },
  },
});

export const { fetchAllMovies } = movieSlice.actions;
export default movieSlice.reducer;
