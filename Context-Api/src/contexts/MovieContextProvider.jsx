import React, { createContext, useState } from "react";

export const movieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    { title: "Passengers", director: "Jon Doe", id: 1 },
    { title: "Mad Max", director: "Doe Jon", id: 2 },
    { title: "Avengers", director: "Malcome", id: 3 },
  ]);

  const addMovie = (title, director) => {
    const newMovie = {
      title: title,
      director: director,
      id: Date.now(),
    };

    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const removeMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <movieContext.Provider value={{ movies, addMovie, removeMovie }}>
      {children}
    </movieContext.Provider>
  );
};

export default MovieContextProvider;
