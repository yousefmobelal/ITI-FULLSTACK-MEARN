import { useState } from "react";

function CounterButtons({ changeCurrentCounter }) {
  const [currentCount, setCurrentCount] = useState(1);

  const incrementCount = () => {
    setCurrentCount((prevCount) => prevCount + 1);
    changeCurrentCounter(true);
  };

  const decrementCount = () => {
    if (currentCount === 1) return;
    setCurrentCount((prevCount) => prevCount - 1);
    changeCurrentCounter(false);
  };
  return (
    <div style={Styles.divStyle}>
      <button onClick={decrementCount} style={Styles.buttonStyle}>
        -
      </button>
      <p style={{ color: "white", fontSize: "20px" }}>{currentCount}</p>
      <button onClick={incrementCount} style={Styles.buttonStyle}>
        +
      </button>
    </div>
  );
}

export default CounterButtons;

const Styles = {
  divStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    flex: "1",
    height: "40px",
    margin: "20px",
    fontSize: "20px",
    cursor: "pointer",
  },
};
