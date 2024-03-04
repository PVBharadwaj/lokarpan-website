import { Component } from "react";
import { PiPauseCircleThin, PiPlayCircleThin } from "react-icons/pi";
import Marquee from "react-fast-marquee";
import "./sliderimage.css";



class Home extends Component {
  state = { isPaused: false, isAnimationPaused: false };

  handlePauseClick = () => {
    this.setState((prevState) => ({
      isPaused: !prevState.isPaused,
    }));
  };
  toggleAnimation = () => {
    this.setState((prevState) => ({
      isAnimationPaused: !prevState.isAnimationPaused,
    }));
  };

  render() {
    const { isPaused, isAnimationPaused } = this.state;
    return (
      <div className="home-container">
       
        <div className="carousal-container">
          <div className="arrows-cont">
            <button className="button" onClick={this.handlePauseClick}>
              {!isPaused ? (
                <PiPauseCircleThin className="carousal-icon" />
              ) : (
                <PiPlayCircleThin className="carousal-icon" />
              )}
            </button>
          </div>
          <Marquee play={!isPaused} className="marquee">
            <div className="each-carousal">
              <div className="carousal">
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                  alt="Slide 1"
                  className="carousal-img"
                />
                <div className="link-cont">
                  <button className="link">Home</button>
                </div>
              </div>

              <p className="lokarpan-para2">Home</p>
            </div>

            <div className="each-carousal">
              <div className="carousal">
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                  alt="Slide 1"
                  className="carousal-img"
                />
                <div className="link-cont">
                  <button className="link">Education</button>
                </div>
              </div>

              <p className="lokarpan-para2">Education</p>
            </div>
            <div className="each-carousal">
              <div className="carousal">
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                  alt="Slide 1"
                  className="carousal-img"
                />
                <div className="link-cont">
                  <button className="link">Career</button>
                </div>
              </div>

              <p className="lokarpan-para2">Career</p>
            </div>
            <div className="each-carousal">
              <div className="carousal">
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                  alt="Slide 1"
                  className="carousal-img"
                />
                <div className="link-cont">
                  <button className="link">Livelihood</button>
                </div>
              </div>

              <p className="lokarpan-para2">Livelihood</p>
            </div>
          </Marquee>
        </div>
        
      </div>
    );
  }
}

export default Home;
