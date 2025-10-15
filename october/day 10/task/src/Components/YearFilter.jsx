function YearFilter({ onFilterByYear, isSelected, year, style }) {
  return (
    <button
      onClick={onFilterByYear}
      style={{
        ...style,
        backgroundColor: isSelected ? "white" : "black",
        color: isSelected ? "black" : "white",
      }}
    >
      {year}
    </button>
  );
}

export default YearFilter;
