import { useCallback, useEffect, useRef, useState } from "react";
import Movie from "./Movie";
import Search from "./Search";
import Filters from "./Filters";
import useTimer from "../Hooks/useTimer";

function Movies() {
  let originalMovies = useRef([]);
  const [movies, setMovies] = useState(null);
  const [counter, setCounter] = useState(0);
  const [formattedTime] = useTimer();

  useEffect(() => {
    async function getMovies() {
      const res = await fetch(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
      );

      const data = await res.json();
      originalMovies.current = data.results;
      setMovies(data.results);
      setCounter(data.results.length);
    }
    getMovies();
  }, []);

  const searchMovies = useCallback((input) => {
    const searchText = input.target.value.toLowerCase();
    setMovies(
      originalMovies.current.filter((movie) =>
        movie.title.toLowerCase().includes(searchText)
      )
    );
  }, []);

  const filterMoviesByRating = useCallback((rate) => {
    setMovies(
      originalMovies.current.filter((movie) => +movie.vote_average > rate)
    );
  }, []);

  const filterMoviesByYear = useCallback((year) => {
    if (year === null) {
      setMovies(originalMovies.current);
      return;
    }
    setMovies(
      originalMovies.current.filter(
        (movie) => new Date(movie.release_date).getFullYear() >= +year
      )
    );
  }, []);

  const changeCurrentCounter = useCallback((isIncrementing) => {
    setCounter((prev) => (isIncrementing ? prev + 1 : prev - 1));
  }, []);

  if (movies === null) {
    return (
      <div style={Styles.loadingStyle}>
        <h1 style={{ color: "white" }}>Loading.....</h1>
      </div>
    );
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginInline: "30px",
        }}
      >
        <h1
          style={{
            ...Styles.titleStyle,
          }}
        >
          Movies
        </h1>
        <h1 style={{ color: "white" }}>
          The Number of Movies to watch: {counter}
        </h1>
      </div>
      <h1 style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>
        {formattedTime}
      </h1>

      <Search searchMovies={searchMovies} />
      <div style={Styles.moviesSection}>
        <Filters
          filterMoviesByRating={filterMoviesByRating}
          filterMoviesByYear={filterMoviesByYear}
        />
        <div style={Styles.moviesCardsStyle}>
          {movies.map((movie) => (
            <Movie
              changeCurrentCounter={changeCurrentCounter}
              key={movie.id}
              {...movie}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Movies;

const Styles = {
  titleStyle: { textAlign: "center", marginBottom: "40px", color: "white" },
  moviesSection: {
    margin: "20px",
    display: "flex",
    gap: "30px",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "start",
  },
  moviesCardsStyle: {
    margin: "20px",
    display: "flex",
    gap: "30px",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "start",
    flex: "1",
  },

  loadingStyle: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
