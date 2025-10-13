import { PureComponent } from "react";
import Movie from "./Movie";

class Movies extends PureComponent {
  constructor() {
    super();
    this.state = {
      movies: null,
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(`This is the data: ${data.results}`);
        this.setState({
          movies: data.results,
        });
      });
  }

  render() {
    const movies = this.state.movies;
    if (movies === null) {
      return (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "white" }}>Loading.....</h1>
        </div>
      );
    }
    return (
      <>
        <h1
          style={{ textAlign: "center", marginBottom: "40px", color: "white" }}
        >
          Movies
        </h1>
        <div
          style={{
            margin: "20px",
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          {movies.map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}
        </div>
      </>
    );
  }
}

export default Movies;
