import { Component } from "react";
import { PiPauseCircleThin, PiPlayCircleThin } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./index.css";

const row1 = [
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708663836/surface1_xiupje.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708663824/Group_1732_qqspqz.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708663814/Group_1731_iir03j.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708663805/layer1_mkt7ox.png",
];

const row2 = [
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708663769/g11008_w9uizp.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708663779/Group_1733_wsfgis.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708663789/Group_1730_vmmgvj.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708663795/Clip_path_group_gp994w.png",
];

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
      <>
        <Navbar />
        <div className="home-container">
          <div className="home-banner">
            <p>
              Transform entire communities with your support.
              <a href="#">Take action</a>
              <FaArrowRight style={{ color: "#3F86F0" }} className="arrow" />
            </p>
          </div>
          <div className="home-top-container1">
            <p className="home-head1">The Mission</p>
            <h1 className="home-upper-section-head3">
              Commitment beyond conventional boundaries
            </h1>
            <p className="home-para1">
              Lokarpan is India's leading non-profit with a mission to offer
              solutions to empower communities living in stress. We work to
              enable poor, rural communities to improve their social and
              economic conditions through participatory projects in health,
              education, income generation, and veterinary care.
            </p>
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708659568/image_306_ianuff.png"
              className="home-top-container-img"
            />
          </div>
          <div className="home-logo-animation-section">
            {/* Animation-section */}
          </div>

          <div className="who-we-are">
            <p className="lokarpan-head4">Our Approach</p>
            <h1 className="home-head3">
              Big change is impossible without a little help. For 27 years, we
              have worked closely with communities to identify their needs and
              aspirations in order to serve them.
            </h1>
          </div>
          <div className="row-container">
            <div className="row-element">
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708661167/image_307_zahwbv.png"
                className="design-img"
              />
              <div className="under-cont">
                <h3>Understanding our approach to Rural Design Principles</h3>
                <button className="read-btn1">Read Now</button>
              </div>
            </div>
            <div className="row-element">
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708661156/image_308_eg055b.png"
                className="design-img"
              />
              <div className="under-cont">
                <h3>How do we solve the education crisis?</h3>
                <button className="read-btn1">Read Now</button>
              </div>
            </div>
          </div>
          <div className="home-images-container">
            <div className="lok-head-cont">
              <p className="home-head3">The Lokarpan Fellowship</p>
              <p className="lokarpan-head4 color">
                The Lokarpan Fellowship is a pro bono program that matches
                Lokarpan employees with beneficiaries and civic entities for up
                to six months on full-time technical and research projects.
                Fellows may leave their day jobs to work alongside the
                organization’s staff to build scalable solutions, or opt for
                working remotely as a team to ensure that the work has sustained
                and lasting impact.
              </p>
            </div>

            <div className="images-container">
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704820084/image_177_gagtm0.png"
                alt="lokarpan-image2"
                className="img2"
              />
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704820096/image_178_wjbsby.png"
                alt="lokarpan-image3"
                className="img3"
              />
            </div>
          </div>
          <div className="get-in-touch-container">
            <h3 className="home-head3">Take the next step</h3>
            <p className="lokarpan-head4 center">
              Join hands with us, and let's weave stories of change together.
            </p>
            <button className="get-in-touch-btn1">Apply</button>
          </div>
          <div className="lokarpan-container">
            <p className="lokarpan-head5">Our Programs</p>
            <h1 className="home-head3">
              Keeping people safe and making a positive impact
            </h1>
            <p className="lokarpan-container-para1">
              Since our formation in 1996, Lokarpan has strived to organise and
              empower rural poor to promote development as a liberating force
              aimed at social justice, economic growth and self-reliance
            </p>
          </div>
          <div className="carousal-container1">
            <div className="arrows-cont1">
              <button className="button1" onClick={this.handlePauseClick}>
                {!isPaused ? (
                  <PiPauseCircleThin className="carousal-icon1" />
                ) : (
                  <PiPlayCircleThin className="carousal-icon1" />
                )}
              </button>
            </div>
            <Marquee play={!isPaused} className="marquee">
              <div className="each-carousal1">
                <div className="carousal1">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709612877/Rectangle_1930_avwuhk.png"
                    alt="Slide 1"
                    className="carousal-img1"
                  />
                  <div className="link-cont">
                    <button className="home-link">Education</button>
                  </div>
                </div>

                <p className="lokarpan-para2">Education</p>
              </div>
              <div className="each-carousal1">
                <div className="carousal1">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709612862/image_310_xda1ln.png"
                    alt="Slide 1"
                    className="carousal-img1"
                  />
                  <div className="link-cont">
                    <button className="home-link">Environment</button>
                  </div>
                </div>

                <p className="lokarpan-para2">Environemnt</p>
              </div>
              <div className="each-carousal1">
                <div className="carousal1">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709612870/image_311_ezc53r.png"
                    alt="Slide 1"
                    className="carousal-img1"
                  />
                  <div className="link-cont">
                    <button className="home-link">Health</button>
                  </div>
                </div>

                <p className="lokarpan-para2">Health</p>
              </div>
              <div className="each-carousal1">
                <div className="carousal1">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709612885/image_309_h7scgq.png"
                    alt="Slide 1"
                    className="carousal-img1"
                  />
                  <div className="link-cont">
                    <button className="home-link">Livelihood</button>
                  </div>
                </div>

                <p className="lokarpan-para2">Livelihood</p>
              </div>
            </Marquee>
          </div>

          <button
            className="button1 mobile-home"
            onClick={this.handlePauseClick}
          >
            {!isPaused ? (
              <PiPauseCircleThin className="carousal-icon1" />
            ) : (
              <PiPlayCircleThin className="carousal-icon1" />
            )}
          </button>

          <div className="app-container-m1">
            <div className="wrapper-m1">
              <h1 className="text-m1">Our Supporters</h1>
              <h1 className="note-m1">Follow the leaders</h1>
              <div className="marquee-m1">
                <div
                  className="marquee-group-m1"
                  style={{
                    animationPlayState: isAnimationPaused
                      ? "paused"
                      : "running",
                  }}
                >
                  {row1.map((each) => (
                    <div className="image-group-m1">
                      <img src={each} className="image-m1" />
                    </div>
                  ))}
                </div>
                <div
                  className="marquee-group-m1"
                  style={{
                    animationPlayState: isAnimationPaused
                      ? "paused"
                      : "running",
                  }}
                >
                  {row1.map((each) => (
                    <div className="image-group-m1">
                      <img src={each} className="image-m1" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="marquee-m1">
                <div
                  className="marquee-group2-m1"
                  style={{
                    animationPlayState: isAnimationPaused
                      ? "paused"
                      : "running",
                  }}
                >
                  {row2.map((each) => (
                    <div className="image-group-m1">
                      <img src={each} className="image-m1" />
                    </div>
                  ))}
                </div>
                <div
                  className="marquee-group2-m1"
                  style={{
                    animationPlayState: isAnimationPaused
                      ? "paused"
                      : "running",
                  }}
                >
                  {row2.map((each) => (
                    <div className="image-group-m1">
                      <img src={each} className="image-m1" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button onClick={this.toggleAnimation} className="animation-btn-m1">
              {!isAnimationPaused ? (
                <PiPauseCircleThin
                  className="play-pause-icon"
                  style={{
                    color: "white",
                  }}
                />
              ) : (
                <PiPlayCircleThin
                  className="play-pause-icon"
                  style={{
                    color: "white",
                  }}
                />
              )}
            </button>
          </div>
          <div className="next-step-section1">
            <h1 className="lokarpan-head6">Take Action to Support Change</h1>
            <p className="lokarpan-head4 lok center">
              Lokarpan grants support transformational programs for children and
              adults to lead better and safer lives. Get involved to give every
              person a fair chance to suceed in life.
            </p>
            <a href="#">Learn More</a>
            <button type="button" className="home-donate-btn1">
              Donate
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
