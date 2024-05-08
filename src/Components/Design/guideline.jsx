import React, { Component } from "react";
import "./d_home.css";
import Home from "./sliderimage";
import Navbar from "../Navbar/Navbar";
import SubnavBar from "./DesignSubNavbar/index";
import Footer from "../Footer/Footer";
export default class d_home3 extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SubnavBar />
        {/* ------------------------------------------------------------- */}
        <section className="guideline_design">
          <h1>
            At Lokarpan, we set the standard for education infrastructure in
            rural areas.
          </h1>
        </section>
        {/* ------------------------------------------------------------- */}

        {/* <section className="d_home_section1_mobile">
          <div className="d_home_section1_mobile_image"></div>
          <h1 className="d_home_section1_mobile_text">
            Leveraging local materials and innovative approaches, Lokarpan
            pioneers rural design and landscaping, envisioning vibrant
            communities rooted in sustainability. Our guidance empowers
            community leaders, shaping rural construction policies for a better,
            more sustainable future
          </h1>
        </section>
        <section className="d_home_section1_mobile">
          <div className="d_home_section1_mobile_image"></div>
          <h1 className="d_home_section1_mobile_text">
            Our comprehensive design manual offers a blueprint for constructing
            large-footprint schools, integrating local resources and sustainable
            practices to create optimal learning environments
          </h1>
        </section> */}
        {/* ------------------------------------------------------------- */}
        {/* <section className="d_home_section1">
          <div className="d_home_section1_left image_left"></div>

          <div className="d_home_section1_right">
            <h1>
              Our comprehensive design manual offers a blueprint for
              constructing large-footprint schools, integrating local resources
              and sustainable practices to create optimal learning environments
            </h1>
          </div>
        </section> */}

        <div className="new-guidelines-sec">
          <h1>
            Our comprehensive design manual offers a blueprint for constructing
            large-footprint schools, integrating local resources and sustainable
            practices to create optimal learning environments.
          </h1>

          <a href="#">View our design manual</a>
        </div>
        {/* ------------------------------------------------------------- */}
        <Home />
        {/* ------------------------------------------------------------- */}
        {/* <section className="d_home_section1">
          <div className="d_home_section1_right">
            <p className="design-p2">
              Leveraging local materials and innovative approaches, Lokarpan
              pioneers rural design and landscaping, envisioning vibrant
              communities rooted in sustainability. Our guidance empowers
              community leaders, shaping rural construction policies for a
              better, more sustainable future
            </p>
          </div>
          <div className="d_home_section1_left image_right"></div>
        </section> */}

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
        <Footer />
      </div>
    );
  }
}
