import { useState } from "react";
import RatingFilter from "./RatingFilter";
import YearFilter from "./YearFilter";

function Filters({ filterMoviesByRating, filterMoviesByYear }) {
  const ratings = [3, 5, 7, 9];
  const years = [2023, 2024, 2025];
  const [selectedRateIndex, setSelectedRateIndex] = useState(-1);
  const [selectedYearIndex, setSelectedYearIndex] = useState(-1);

  const onFilterByRate = (index, rate) => {
    if (selectedRateIndex === index) {
      setSelectedRateIndex(-1);
      filterMoviesByRating(0);
      return;
    }
    setSelectedRateIndex(index);
    filterMoviesByRating(rate);
  };

  const onFilterByYear = (index, year) => {
    if (selectedYearIndex === index) {
      setSelectedYearIndex(-1);
      filterMoviesByYear(null);
      return;
    }
    setSelectedYearIndex(index);
    filterMoviesByYear(year);
  };

  return (
    <div style={Styles.cardStyle}>
      <h1 style={{ marginBottom: "10px" }}>🎬 Filters</h1>
      <h2>Rating</h2>
      <div style={Styles.filtersStyle}>
        {ratings.map((rate, index) => {
          return (
            <RatingFilter
              onFilterByRate={() => onFilterByRate(index, rate)}
              isSelected={selectedRateIndex === index}
              rate={rate}
              style={Styles.filterStyle}
            />
          );
        })}
      </div>
      <h2 style={{ marginTop: "20px" }}>Year</h2>
      <div style={Styles.filtersStyle}>
        {years.map((year, index) => {
          return (
            <YearFilter
              onFilterByYear={() => onFilterByYear(index, year)}
              isSelected={selectedYearIndex === index}
              year={year}
              style={Styles.filterStyle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Filters;

const Styles = {
  cardStyle: {
    width: "25%",
    height: "100%",
    border: "1px solid white",
    borderRadius: "5px",
    color: "white",
    padding: "10px 10px 20px",
  },
  filtersStyle: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "10px",
  },
  filterStyle: {
    border: "1px solid white",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
  },
};
