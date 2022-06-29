import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { fetchAllMovies } from "./modules/Dashboard.slice";
import HomePage from "./pages/Home/Home.component";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/movies/list-all-movies/")
      .then((data) => {
        dispatch(fetchAllMovies(data.data));
      });
  }, []);
  return <HomePage />;
}

export default App;
