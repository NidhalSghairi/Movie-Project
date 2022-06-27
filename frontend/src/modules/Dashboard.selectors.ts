import { DashboardState } from "./Dashboard.types";

export const selectAllMovies = (state: DashboardState) => {
  return state.allMovies;
};
