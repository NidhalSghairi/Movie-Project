import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { selectAllMovies } from "./modules/Dashboard.selectors";

function App() {
  const allMovies = useSelector(selectAllMovies);
  return <div className="App"></div>;
}

export default App;
