import { DashboardState } from "./Dashboard.types";

export const selectAllMovies = (state: { dashboard: DashboardState }) => {
  return state.dashboard.allMovies;
};
