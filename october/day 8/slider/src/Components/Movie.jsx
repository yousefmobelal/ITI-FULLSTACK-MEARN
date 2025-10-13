import { PureComponent } from "react";

class Movie extends PureComponent {
  constructor() {
    super();
  }

  render() {
    const { poster_path, title, overview, vote_average: rating } = this.props;
    const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    return (
      <>
        <div className="movie">
          <img
            style={{ width: "100%", objectFit: "scale-down" }}
            src={poster}
            alt=""
          />
          <div style={{ paddingInline: "5px", marginTop: "10px" }}>
            <h3 style={{ color: "white", marginBottom: "10px" }}>
              {title} {Math.floor(rating)}⭐
            </h3>
            <p style={{ color: "grey" }}>{overview}</p>
          </div>
        </div>
      </>
    );
  }
}

export default Movie;
