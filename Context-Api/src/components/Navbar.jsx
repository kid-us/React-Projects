import React, { useContext } from "react";
import { movieContext } from "../contexts/MovieContextProvider";
const Navbar = () => {
  const { movies } = useContext(movieContext);

  return (
    <div>
      <p>Vidly Movie Lists</p>
      <p>Currently you have {movies.length} movies to get through</p>
    </div>
  );
};

export default Navbar;
