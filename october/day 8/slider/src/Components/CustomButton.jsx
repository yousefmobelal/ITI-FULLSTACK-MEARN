import { PureComponent } from "react";

class CustomButton extends PureComponent {
  constructor() {
    super();
  }
  render() {
    const { onClick, title } = this.props;

    return (
      <button
        style={{
          padding: "8px",
          marginRight: "20px",
          width: "100px",
          backgroundColor: "#000000A0",
          border: "2px white solid",
          color: "white",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        {title}
      </button>
    );
  }
}

export default CustomButton;
