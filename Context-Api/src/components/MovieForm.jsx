import React, { useContext, useState } from "react";
import { movieContext } from "../contexts/MovieContextProvider";
const MovieForm = () => {
  const { addMovie } = useContext(movieContext);
  const [title, setTitle] = useState();
  const [director, setDirector] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(title, director);
    setTitle("");
    setDirector("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        style={{
          borderRadius: "5px",
          padding: "4px",
          display: "block",
          width: "230px",
          marginBottom: "10px",
        }}
        type="text"
        placeholder="Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        style={{
          borderRadius: "5px",
          padding: "4px",
          display: "block",
          width: "230px",
          marginBottom: "10px",
        }}
        type="text"
        placeholder="Movie Director"
        value={director}
        onChange={(e) => setDirector(e.target.value)}
        required
      />
      <button
        style={{
          backgroundColor: "#999",
          border: "none",
          width: "240px",
          padding: "7px",
          borderRadius: "7px",
          color: "white",
          fontSize: "medium",
          cursor: "pointer",
        }}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default MovieForm;
