import { PureComponent } from "react";
import CustomButton from "./CustomButton";

class Slider extends PureComponent {
  constructor() {
    super();
    this.state = { index: 0 };
    this.startSlidingId = null;
  }

  componentWillUnmount() {
    clearInterval(this.startSlidingId);
  }

  render() {
    const images = [
      "https://images.unsplash.com/photo-1509226704106-8a5a71ffbfa4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
      "https://media.istockphoto.com/id/809971888/photo/night-sky-landscape.jpg?s=612x612&w=0&k=20&c=ku3RWu4DQ8ErN-KbT1Act72LMocTwSAAm3UDkLiako0=",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1494",
      "https://plus.unsplash.com/premium_photo-1686050878751-89499d28d153?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
      "https://plus.unsplash.com/premium_photo-1677362425101-a11ef7eaae03?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1553",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
      "https://plus.unsplash.com/premium_photo-1675826774815-35b8a48ddc2c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    ];

    const nextSlide = () => {
      this.setState({ index: (this.state.index + 1) % images.length });
    };

    const prevSlide = () => {
      let newIndex = this.state.index - 1;
      if (newIndex < 0) {
        newIndex = images.length - 1;
      }
      this.setState({ index: newIndex });
    };

    const start = () => {
      clearInterval(this.startSlidingId);
      this.startSlidingId = setInterval(() => {
        nextSlide();
      }, 1000);
    };

    const stop = () => {
      clearInterval(this.startSlidingId);
    };

    return (
      <>
        <div
          style={{
            position: "absolute",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              width: "50%",
              height: "500px",
              borderRadius: "10px",
              border: "1px white solid",
              marginBottom: "20px",
            }}
            src={images[this.state.index]}
            alt=""
          />
          <div style={{ position: "absolute", bottom: "10%" }}>
            <CustomButton onClick={prevSlide} title="Previous" />
            <CustomButton onClick={nextSlide} title="Next" />
            <CustomButton onClick={start} title="Start" />
            <CustomButton onClick={stop} title="Stop" />
          </div>
        </div>
      </>
    );
  }
}

export default Slider;
