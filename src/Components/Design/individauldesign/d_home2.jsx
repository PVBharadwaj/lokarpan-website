import React, { Component } from "react";
import "./d_home.css";
import "./d_home2.css";
import ImageSlider from "./image";

export default class d_home extends Component {
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
        <section className="d_home_section2">
          <h1>
            Browse accessories or find new colours to go with your devices.
          </h1>

          <div className="d_home_section2_image"></div>
        </section>
        <section className="d_our_team">
          <div className="our_team"> Our Team</div>
          <div className="our_team1">
            <div className="our_team_image"></div>
            <div className="our_team_image"></div>
            <div className="our_team_image"></div>
            <div className="our_team_image"></div>
          </div>
          <div className="ourteam_name">
            By David Jon ,Charli Mathew, Rajiv Shah, Megan Rox, Tom Will
          </div>
        </section>
        <section className="our_team_content">
          <div className="our_team_para">
            A description of the current state of the school in UP, as well as
            issues facing the school's infrastructure and practices
          </div>
          <div className="our_team_para">
            A description of the current state of the school in UP, as well as
            issues facing the school's infrastructure and practices
          </div>
          <div className="our_team_para">
            A description of the current state of the school in UP, as well as
            issues facing the school's infrastructure and practices
          </div>
          <div className="our_team_para">
            A description of the current state of the school in UP, as well as
            issues facing the school's infrastructure and practices
          </div>
          <div className="our_team_para">
            Knowing the general dimensions and government standards for school
            designs that can be considered for government approval
          </div>
          <div className="our_team_para">
            Examining three examples of design and studying them in-depth
          </div>
        </section>
        {/* ------------------------------------------------------------- */}
        <div style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>
      </div>
    );
  }
}
