import React, { useContext } from "react";
import { movieContext } from "../contexts/MovieContextProvider";

const MovieList = () => {
  const { movies, removeMovie } = useContext(movieContext);
  return (
    <div>
      {movies.length ? (
        movies.map((movie) => (
          <li
            key={movie.id}
            style={{
              cursor: "pointer",
              listStyle: "none",
              backgroundColor: "purple",
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "10px",
              color: "white",
              width: "230px",
            }}
            onClick={() => removeMovie(movie.id)}
          >
            <div>{movie.title}</div>
            <div>{movie.director}</div>
          </li>
        ))
      ) : (
        <p>There is no movies to watch</p>
      )}
    </div>
  );
};

export default MovieList;
