import React from "react";
import Navbar from "./components/Navbar";
import MovieContextProvider from "./contexts/MovieContextProvider";
import MovieList from "./components/MovieList";
import MovieForm from "./components/MovieForm";
function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <Navbar />
        <MovieList />
        <MovieForm />
      </MovieContextProvider>
    </div>
  );
}

export default App;
