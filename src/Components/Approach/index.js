import { Component } from "react";
import EducationSubNav from "../Navbar/EducationSubNav";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import "./index.css";
import "../Health/index.css";

class Approach extends Component {
  render() {
    return (
      <>
        <Navbar />
        <EducationSubNav />

        <div className="approach-container">
          <div className="health-full-img">
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704818233/image_176_tcqfoh.png"
              alt="health-img"
            />
          </div>

          <div className="health-container-section">
            <div className="health-each-container">
              <div className="health-content-section content-left">
                <h1 className="health-lokarpan-head3">
                  What does it take to create sustainable and inclusive growth?
                </h1>
                <p className="health-para">
                  It takes a lot. Dedication and passion. Boldness and
                  curiosity. Hard skills and soft skills. Some you are born
                  with, and others can be learned through experience or taught.
                  But one thing is certain: Creating impact takes exceptional
                  people who are driven and eager to learn.
                </p>
                <a href="#" className="approach-anchor">
                  Read About Our Culture
                </a>
              </div>
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704897449/Rectangle_1764_nfpppj.png"
                alt="learn-img"
                className="health-cont-img"
              />
            </div>
            <div className="health-each-container">
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704897449/Rectangle_1764_nfpppj.png"
                alt="learn-img"
                className="health-cont-img"
              />
              <div className="health-content-section content-right">
                <h1 className="health-lokarpan-head3">
                  Exceptional can come from anywhere
                </h1>
                <p className="health-para">
                  At McKinsey, we hire people, not degrees. There is no set
                  definition for what exceptional looks like, and we know it can
                  come from anywhere. We believe in your potential, regardless
                  of your pedigree.
                </p>
                <a href="#" className="approach-anchor">
                  Learn more about our interviews
                </a>
              </div>
            </div>
            <div className="health-each-container">
              <div className="health-content-section content-left">
                <h1 className="health-lokarpan-head3">Our Leadership</h1>
                <p className="health-para">
                  Impact at the firm looks different every day, and that vision
                  is changing every year along with the world around us. One day
                  you could design a product for your client, and the next you
                  could create a five-year growth strategy. The variety of work
                  is endless.
                </p>
                <a href="#" className="approach-anchor">
                  See more about our Leadership
                </a>
              </div>
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704897449/Rectangle_1764_nfpppj.png"
                alt="learn-img"
                className="health-cont-img"
              />
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
              <h3 className="sub-head1">Plaid</h3>
              <h3 className="sub-head2">Beyond Ludicrous</h3>
              <p className="app-mobile-para">
                Model S Plaid has the quickest acceleration of any vehicle in
                production. Updated battery architecture for all Model S trims
                enables back-to-back track runs without performance degradation.
                Chat with a Tesla Advisor to learn more about Model S or
                schedule a demo drive today.
              </p>
              <button className="sub-btn sub-btn-black">Order Now</button>
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
          {/* <div className="mobile-health-full-img">
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704818233/image_176_tcqfoh.png"
              alt="health-img"
            />
          </div> */}
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
                Maintain 1,000+ horsepower all the way to 200 mph with Tri-Motor
                All-Wheel Drive, featuring torque vectoring and three
                independent carbon-sleeved rotors.
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
          <div className="mobile-approach-modal-container">
            <div className="mobile-approach-modal-each-cont">
              <h2>Model S</h2>
              <p>
                Dual Motor All-Wheel Drive unlocks more range than any other
                vehicle in our current lineup, with insane power and maximum
                control.
              </p>
              <div className="mobile-approach-modal-col">
                <div className="mobile-app-modal-each-col">
                  <h3>3.1s</h3>
                  <p>0-60mph</p>
                </div>
                <div className="mobile-app-modal-each-col">
                  <h3>3.1s</h3>
                  <p>0-60mph</p>
                </div>
                <div className="mobile-app-modal-each-col">
                  <h3>3.1s</h3>
                  <p>0-60mph</p>
                </div>
              </div>
            </div>
            <div className="mobile-approach-modal-each-cont">
              <h2>Model S</h2>
              <p>
                Dual Motor All-Wheel Drive unlocks more range than any other
                vehicle in our current lineup, with insane power and maximum
                control.
              </p>
              <div className="mobile-approach-modal-col">
                <div className="mobile-app-modal-each-col">
                  <h3>3.1s</h3>
                  <p>0-60mph</p>
                </div>
                <div className="mobile-app-modal-each-col">
                  <h3>3.1s</h3>
                  <p>0-60mph</p>
                </div>
                <div className="mobile-app-modal-each-col">
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
          </div>
          {/* <div className="mobile-health-full-img">
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704818233/image_176_tcqfoh.png"
              alt="health-img"
            />
          </div> */}
          <div className="approach-last-sec-each-cont">
            <div style={{ marginLeft: "0px" }}>
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
          <div className="new-platform-sec">
            <h1>An all- new platform</h1>
            <h1>An all-new for developers</h1>
            <p>
              Immerse yourself in stories that will challenge your mind and
              capture your heart. Explore new interests and stay on top of
              what’s trending. Our global catalogue features leading voices on
              the topics you care about — from the biggest names to independent
              creators.
            </p>
            <a href="#" className="approach-anchor">
              Learn more Education Mannual
            </a>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Approach;
