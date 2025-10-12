import { useState } from "react";
import Movie from "./Movie";

function Movies() {
  const [movies] = useState([
    {
      title: "Midnight Family",
      genre: "Documentary, Action, Crime, Drama",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMGYyZTk5MjYtNGY2ZS00NzRhLTgwMWMtZjhmMmQ4OGFkNTNiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    },
    {
      title: "Pain & Gain",
      genre: "Action, Comedy, Crime, Drama",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTU0NDE5NTU0OV5BMl5BanBnXkFtZTcwMzI1OTMzOQ@@._V1_SX300.jpg",
    },
    {
      title: "The Irishman",
      genre: "Biography, Crime, Drama",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg",
    },
    {
      title: "Once Upon a Time... in Hollywood",
      genre: "Comedy, Drama",
      poster:
        "https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg",
    },
    {
      title: "Marriage Story",
      genre: "Comedy, Drama, Romance",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZGVmY2RjNDgtMTc3Yy00YmY0LTgwODItYzBjNWJhNTRlYjdkXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg",
    },
    {
      title: "Parasite",
      genre: "Comedy, Drama, Thriller",
      poster:
        "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    },
    {
      title: "Knives Out",
      genre: "Comedy, Crime, Drama, Mystery, Thriller",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SX300.jpg",
    },
  ]);
  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "40px", color: "white" }}>
        Movies
      </h1>
      <div
        style={{
          margin: "20px",
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {movies.map((movie) => (
          <Movie {...movie} />
        ))}
      </div>
    </>
  );
}

export default Movies;
