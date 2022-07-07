export type Movie = {
  title: string;
  years?: string;
  owner?: string;
  description: string;
  coverImage: string;
};

export type DashboardState = {
  allMovies: Movie[];
};
