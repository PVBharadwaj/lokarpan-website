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
      <div className="home-container-deg">
        <div className="carousal-container-deg">
          <div className="arrows-cont-deg">
            <button className="button-deg" onClick={this.handlePauseClick}>
              {!isPaused ? (
                <PiPauseCircleThin className="carousal-icon-deg" />
              ) : (
                <PiPlayCircleThin className="carousal-icon-deg" />
              )}
            </button>
          </div>
          <Marquee play={!isPaused} className="marquee-deg">
            <div className="each-carousal-deg">
              <div className="carousal-deg">
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                  alt="Slide 1"
                  className="carousal-img-deg"
                />
                <div className="link-cont-deg">
                  <button className="link-deg">Home</button>
                </div>
              </div>

              <p className="lokarpan-para2-deg">Home</p>
            </div>

            <div className="each-carousal-deg">
              <div className="carousal-deg">
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                  alt="Slide 1"
                  className="carousal-img-deg"
                />
                <div className="link-cont-deg">
                  <button className="link-deg">Education</button>
                </div>
              </div>

              <p className="lokarpan-para2-deg">Education</p>
            </div>
            <div className="each-carousal-deg">
              <div className="carousal-deg">
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                  alt="Slide 1"
                  className="carousal-img-deg"
                />
                <div className="link-cont-deg">
                  <button className="link-deg">Career</button>
                </div>
              </div>

              <p className="lokarpan-para2-deg">Career</p>
            </div>
            <div className="each-carousal-deg">
              <div className="carousal">
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                  alt="Slide 1"
                  className="carousal-img-deg"
                />
                <div className="link-cont-deg">
                  <button className="link-deg">Livelihood</button>
                </div>
              </div>

              <p className="lokarpan-para2-deg">Livelihood</p>
            </div>
          </Marquee>
        </div>
      </div>
    );
  }
}

export default Home;
