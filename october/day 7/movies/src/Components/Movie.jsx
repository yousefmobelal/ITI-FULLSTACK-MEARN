function Movie(props) {
  return (
    <>
      <div
        style={{
          overflow: "hidden",
        }}
      >
        <img
          style={{ width: "100%", height: "75%", objectFit: "cover" }}
          src={props.poster}
          alt=""
        />
        <div style={{ paddingInline: "5px", marginTop: "10px" }}>
          <h3 style={{ color: "white" }}>{props.title}</h3>
          <p style={{ color: "grey" }}>{props.genre}</p>
        </div>
      </div>
    </>
  );
}

export default Movie;
