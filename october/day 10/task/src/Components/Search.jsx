import { useEffect, useRef } from "react";

function Search({ searchMovies }) {
  const searchInput = useRef(null);

  useEffect(() => {
    searchInput.current.focus();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        ref={searchInput}
        style={{ width: "30%", height: "30px", textIndent: "10px" }}
        type="text"
        onChange={searchMovies}
        placeholder="Search..."
      />
    </div>
  );
}

export default Search;
