import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchButton = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://udemy-perfect-react-default-rtdb.asia-southeast1.firebasedatabase.app/movie.json"
      );

      if (!response.ok) {
        throw new Error("Response Error!");
      }
      const data = await response.json();
      if (data != null) {
        setMovies(
          Object.entries(data).map(([id, value]) => ({
            ...value,
            id,
          }))
        );
      }
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    handleFetchButton();
  }, [handleFetchButton]);

  const handleAddMovieEvent = async (movie) => {
    await fetch(
      "https://udemy-perfect-react-default-rtdb.asia-southeast1.firebasedatabase.app/movie.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  };

  let content = <p> No Results.</p>;
  if (movies.length > 0) content = <MoviesList movies={movies} />;
  if (error) content = <p>{error}</p>;
  if (isLoading) content = <p>Loading...</p>;

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={handleAddMovieEvent} />
      </section>
      <section>
        <button onClick={handleFetchButton}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
