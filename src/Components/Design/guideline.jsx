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
        <section className="guideline_design"></section>
        {/* ------------------------------------------------------------- */}

        <section className="d_home_section1_mobile">
          <div className="d_home_section1_mobile_image"></div>
          <h1 className="d_home_section1_mobile_text">
            Help management understand how planning can cut long term costs and
            add value to construction
          </h1>
        </section>
        <section className="d_home_section1_mobile">
          <div className="d_home_section1_mobile_image"></div>
          <h1 className="d_home_section1_mobile_text">
            Browse accessories or find new colours to go with your devices.
          </h1>
        </section>
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
        <Home />
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
        <Footer />
      </div>
    );
  }
}
