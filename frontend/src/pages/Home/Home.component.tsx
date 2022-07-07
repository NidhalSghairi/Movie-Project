import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard/MovieCard.component";
import MovieForm from "../../components/MovieForm/MovieForm.component";
import { selectAllMovies } from "../../modules/Dashboard.selectors";
import { useStyles, Container } from "./Home.styles";

const HomePage: React.FC = () => {
  const allMovies = useSelector(selectAllMovies);
  const classes = useStyles();

  const [isMovieFormOpen, setIsMovieFormOpen] = useState(false);

  return (
    <Container>
      <Button variant="outlined" onClick={() => setIsMovieFormOpen(true)}>
        Ajouter un nouveau film
      </Button>
      <MovieForm
        open={isMovieFormOpen}
        handleClose={() => setIsMovieFormOpen(false)}
      />
      <Grid container spacing={6} className={classes.moviesWrapper}>
        {allMovies.map((movie, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={`${movie.title} ${index}`}>
              <MovieCard
                title={movie.title}
                description={movie.description}
                image={movie.coverImage}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default HomePage;
