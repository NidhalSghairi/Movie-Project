import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard/MovieCard.component";
import { selectAllMovies } from "../../modules/Dashboard.selectors";
import { useStyles } from "./Home.styles";

const HomePage: React.FC = () => {
  const allMovies = useSelector(selectAllMovies);
  const classes = useStyles();

  return (
    <Grid container spacing={6} className={classes.moviesWrapper}>
      {allMovies.map((movie) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={movie.title}>
            <MovieCard
              title={movie.title}
              description={movie.description}
              image={movie.coverImage}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default HomePage;
