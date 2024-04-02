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
          <div className="health-full-img no-space-above">
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1710768925/image_314_vscall.png"
              alt="health-img"
            />
          </div>

          <div className="health-container-section">
            <div className="health-each-container">
              <div className="health-content-section content-left">
                <h1 className="health-lokarpan-head3">
                  Discover how we are shaping the learning environment
                </h1>
                <p className="health-para">
                  Lokarpan's Learning Centre harnesses innovative technology and
                  tailored curriculums, empowering children and youth to take
                  control of their education.
                </p>
                <a href="#" className="approach-anchor">
                  Read more about our learing centers
                </a>
              </div>
              {/* <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1710768785/nehal-patel-aho7nVdauuc-unsplash_1_azf35q.png"
                alt="learn-img"
                className="health-cont-img"
              /> */}

              <div className="health-cont-img-div approach-img1"></div>
            </div>
            <div className="health-each-container">
              {/* <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1710768741/Rectangle_1764_1_mwljyp.png"
                alt="learn-img"
                className="health-cont-img"
              /> */}
              <div className="health-cont-img-div approach-img2"></div>
              <div className="health-content-section content-right">
                <h1 className="health-lokarpan-head3">
                  Dive into our Digital Content Hub
                </h1>
                <p className="health-para">
                  With an extensive library, centred on English and STEM
                  subjects, and captivating audio podcasts, our digital content
                  hub offers a world of exploration and skill-building.
                </p>
                <a href="#" className="approach-anchor">
                  Learn more about our digital resources
                </a>
              </div>
            </div>
            <div className="health-each-container">
              <div className="health-content-section content-left">
                <h1 className="health-lokarpan-head3">Get Involved </h1>
                <p className="health-para">
                  Be a part of Lokarpan's dedicated team, driven by a common
                  goal of creating a tangible impact. Our enthusiastic Fellows
                  actively engage in classrooms, coming together to shape a
                  brighter tomorrow for rural education.
                </p>
                <a href="#" className="approach-anchor">
                  Find out more in our careers page
                </a>
              </div>
              {/* <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1710768715/IMG_3648_1_lr2rgu.png"
                alt="learn-img"
                className="health-cont-img"
              /> */}
              <div className="health-cont-img-div approach-img3"></div>
            </div>
          </div>

          <div className="health-full-img">
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1710768797/divyanshi-verma-pxw2e3wnlgM-unsplash_1_1_jkzbvd.png"
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
