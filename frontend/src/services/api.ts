import axios from "axios";

type CreateNewMovieProps = {
  title: string;
  description: string;
  coverImage: string;
};

export const createNewMovie = ({
  title,
  description,
  coverImage,
}: CreateNewMovieProps) => {
  axios.post("http://localhost:8000/api/movies/create-new-movie/", {
    title,
    description,
    coverImage,
  });
};
