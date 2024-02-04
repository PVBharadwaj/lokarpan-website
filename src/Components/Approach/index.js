import { Component } from "react";
import EducationSubNav from "../Navbar/EducationSubNav";
import "./index.css";

class Approach extends Component {
  render() {
    const { isDropdownVisible } = this.props;
    return (
      <>
        <EducationSubNav isDropdownVisible={isDropdownVisible} />

        <div className="approach-container">
          <div className="health-full-img">
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704818233/image_176_tcqfoh.png"
              alt="health-img"
            />
          </div>
          <div className="container">
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704897449/Rectangle_1764_nfpppj.png"
              alt="learn-img"
              className="img"
            />
            <div className="content-section">
              <h1 className="lokarpan-head3">
                Exceptional can come from anywhere
              </h1>
              <p className="para">
                At McKinsey, we hire people, not degrees. There is no set
                definition for what exceptional looks like, and we know it can
                come from anywhere. We believe in your potential, regardless of
                your pedigree.
              </p>
              <a href="#">Learn more about our interviews</a>
              <a href="#">Discover what it’s like to work here</a>
            </div>
          </div>
          <div className="container">
            <div className="content-section">
              <h1 className="lokarpan-head3">Our Leadership</h1>
              <p className="para">
                Impact at the firm looks different every day, and that vision is
                changing every year along with the world around us. One day you
                could design a product for your client, and the next you could
                create a five-year growth strategy. The variety of work is
                endless.
              </p>
              <button type="button" className="subscribe-btn">
                See more about our Leadership
              </button>
            </div>
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704897440/image_189_dyccic.png"
              alt="leadership-img"
              className="img"
            />
          </div>
          <div className="container">
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704897435/image_190_ssmaol.png"
              alt="apply-img"
              className="img"
            />
            <div className="content-section">
              <h1 className="lokarpan-head3">
                We know you have questions...and we really like the tough ones
              </h1>
              <p className="para">
                We asked some McKinsey colleagues to get real about what it’s
                like working here. Take a moment to listen to what they have to
                say – you might be surprised. We are a firm made up of people
                who love sharing our authentic stories, and answering tough
                questions. If you meet one of us, try us out by asking!
              </p>
              <a href="#">Ready to Apply ? Search our open Roles</a>
            </div>
          </div>
          <div className="health-full-img">
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704818233/image_176_tcqfoh.png"
              alt="health-img"
            />
          </div>
          <div className="approach-row-container">
            <div className="app-row-cont-left-container">
              <h3>Plaid</h3>
              <h3>Beyond Ludicrous</h3>
              <button className="sub-btn">Order Now</button>
              <button className="sub-btn">Compare Model</button>
            </div>
            <div className="app-row-cont-right-container">
              <p>
                Model S Plaid has the quickest acceleration of any vehicle in
                production. Updated battery architecture for all Model S trims
                enables back-to-back track runs without performance degradation.
                Chat with a Tesla Advisor to learn more about Model S or
                schedule a demo drive today.
              </p>
            </div>
          </div>
          <div className="approach-modal-container">
            <div className="approach-modal-each-cont">
              <h2>Model S</h2>
              <p>
                Dual Motor All-Wheel Drive unlocks more range than any other
                vehicle in our current lineup, with insane power and maximum
                control.
              </p>
              <div className="approach-modal-col">
                <div className="app-modal-each-col">
                  <h3>3.1s</h3>
                  <p>0-60mph</p>
                </div>
                <div className="app-modal-each-col">
                  <h3>3.1s</h3>
                  <p>0-60mph</p>
                </div>
                <div className="app-modal-each-col">
                  <h3>3.1s</h3>
                  <p>0-60mph</p>
                </div>
              </div>
            </div>
            <div className="approach-modal-each-cont">
              <h2>Model S</h2>
              <p>
                Dual Motor All-Wheel Drive unlocks more range than any other
                vehicle in our current lineup, with insane power and maximum
                control.
              </p>
              <div className="approach-modal-col">
                <div className="app-modal-each-col">
                  <h3>3.1s</h3>
                  <p>0-60mph</p>
                </div>
                <div className="app-modal-each-col">
                  <h3>3.1s</h3>
                  <p>0-60mph</p>
                </div>
                <div className="app-modal-each-col">
                  <h3>3.1s</h3>
                  <p>0-60mph</p>
                </div>
              </div>
            </div>
          </div>
          <div className="approach-last-sec-cont">
            <h2>Freedom to Travel</h2>
            <p>
              Enter a destination on your touchscreen and Trip Planner will
              automatically calculate your route with Superchargers along the
              way.
            </p>
            <div className="approach-last-sec-each-cont">
              <div>
                <p>San Francisco to Los Angeles</p>
                <h3>178 miles</h3>
              </div>
              <div>
                <p>San Francisco to Los Angeles</p>
                <h3>178 miles</h3>
              </div>
              <div>
                <p>San Francisco to Los Angeles</p>
                <h3>178 miles</h3>
              </div>
              <div>
                <p>San Francisco to Los Angeles</p>
                <h3>178 miles</h3>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Approach;
