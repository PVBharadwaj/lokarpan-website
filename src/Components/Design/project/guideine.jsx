import React, { Component } from "react";
import "./d_home.css";
import ImageSlider from "./imageslider";
export default class d_home3 extends Component {
  render() {
    const slides = [
      { url: "http://localhost:3000/image-1.jpg", title: "beach" },
      { url: "http://localhost:3000/image-2.jpg", title: "boat" },
      { url: "http://localhost:3000/image-3.jpg", title: "forest" },
      { url: "http://localhost:3000/image-4.jpg", title: "city" },
      { url: "http://localhost:3000/image-5.jpg", title: "italy" },
    ];
    const containerStyles = {
      width: "500px",
      height: "280px",
      margin: "0 auto",
    };
    return (
      <div>
        {/* ------------------------------------------------------------- */}
        <section className="guideline_design"></section>
        {/* ------------------------------------------------------------- */}
        <div style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>

        {/* ------------------------------------------------------------- */}
        <section className="d_home_section1">
          <div className="d_home_section1_left image_left"></div>

          <div className="d_home_section1_right">
            <h1>
              Browse accessories or find new colours to go with your devices.
            </h1>
          </div>
        </section>
        {/* ------------------------------------------------------------- */}

        {/* ------------------------------------------------------------- */}
        <section className="d_home_section1">
          <div className="d_home_section1_right">
            <h1>
              Help management understand how planning can cut long term costs
              and add value to construction
            </h1>
          </div>
          <div className="d_home_section1_left image_right"></div>
        </section>

        {/* ------------------------------------------------------------- */}
      </div>
    );
  }
}
