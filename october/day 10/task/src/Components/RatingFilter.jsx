function RatingFilter({ onFilterByRate, isSelected, rate, style }) {
  return (
    <button
      onClick={onFilterByRate}
      style={{
        ...style,
        backgroundColor: isSelected ? "white" : "black",
        color: isSelected ? "black" : "white",
      }}
    >
      +{rate}
    </button>
  );
}

export default RatingFilter;
