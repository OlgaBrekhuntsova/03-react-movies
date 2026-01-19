import { useState } from "react";
import Loader from "../Loader/Loader";
import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import MovieModal from "../MovieModal/MovieModal";
// import "./App.css";

function App() {
  return (
    <div className="app">
      <SearchBar />
      <MovieGrid />
      <Loader />
      <ErrorMessage />
      <MovieModal />
    </div>
  );
}

export default App;
