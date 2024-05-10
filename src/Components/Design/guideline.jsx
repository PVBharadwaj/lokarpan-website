import React, { Component } from "react";
import Slider from "react-slick";
import "./d_home.css";
import Home from "./sliderimage";
import Navbar from "../Navbar/Navbar";
import SubnavBar from "./DesignSubNavbar/index";
import Footer from "../Footer/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class d_home3 extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }
  next = () => {
    if (this.sliderRef.current) {
      this.sliderRef.current.slickNext();
    }
  };

  previous = () => {
    if (this.sliderRef.current) {
      this.sliderRef.current.slickPrev();
    }
  };
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "13%",
      arrows: true,
    };
    return (
      <div>
        <Navbar />
        <SubnavBar />

        <section className="guideline_design">
          <h1>
            At Lokarpan, we set the standard for education infrastructure in
            rural areas.
          </h1>
        </section>

        <div className="new-guidelines-sec">
          <h1>Our comprehensive design manual</h1>
          <p>
            Offers a blueprint for constructing large-footprint schools,
            integrating local resources and sustainable practices to create
            optimal learning environments.
          </p>

          <a href="#">View our design manual</a>
        </div>

        {/* <Home /> */}

        <div className="new-guidelines-last-head">
          <span className="g-l1">
            Leveraging local materials and innovative approaches,
          </span>

          <br />
          <span className="g-l2">
            Lokarpan pioneers rural design and landscaping, envisioning vibrant
            communities rooted in sustainability. Our guidance empowers
            community leaders, shaping rural construction policies for a better,
            more sustainable future.
          </span>
        </div>

        {/* ------------------------------------------------------------- */}
        <div className="new-design-carousal-container">
          <Slider {...settings} ref={this.sliderRef}>
            <div className="new-design-carousal-card-out">
              <div className="new-design-carousal-card des-card1"></div>
            </div>
            <div className="new-design-carousal-card-out">
              <div className="new-design-carousal-card des-card2"></div>
            </div>
            <div className="new-design-carousal-card-out">
              <div className="new-design-carousal-card des-card3"></div>
            </div>
            <div className="new-design-carousal-card-out">
              <div className="new-design-carousal-card des-card4"></div>
            </div>
          </Slider>
          <div className="env-arrows-cont">
            <button className="left-arrow-box" onClick={this.previous}>
              <div className="left-arrow"></div>
            </button>
            <button className="right-arrow-box" onClick={this.next}>
              <div className="right-arrow"></div>
            </button>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
