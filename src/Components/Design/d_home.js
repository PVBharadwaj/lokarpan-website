import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./d_home.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SubnavBar from "./DesignSubNavbar/index";
import { IoIosArrowForward } from "react-icons/io";

export default class d_home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SubnavBar />
        {/* ------------------------------------------------------------- */}
        <section className="d_home_hero">
          <div className="d_home_hero_head1">
            Building Sustainable Foundations for Rural Education.
          </div>
          {/* <div className="d_home_hero_head2">Entertainment.</div> */}
          <div className="d_home_hero_content">
            Sustainable design is the cornerstone of long-term solutions,
            fostering well-being for societies and harmony with the environment
            across generations. At Lokarpan, we are committed to revolutionising
            education in rural India through innovative design initiatives.
          </div>
        </section>
        {/* ------------------------------------------------------------- */}
        {/* <section className="d_home_section1_mobile">
          <div className="d_home_section1_mobile_image"></div>
          <h1 className="d_home_section1_mobile_text">
            Help management understand how planning can cut long term costs and
            add value to construction
          </h1>
        </section> */}

        {/* ------------------------------------------------------------- */}
        <div className="new-total-cont">
          <div className="new-our-projects-cont">
            <div className="new-our-projects-each-cont">
              <div className="new-our-projects-each-left-cont">
                <p className="new-our-projects-head">OUR PROJECTS</p>
                <h1>
                  Design can be a powerful force for positive environmental
                  impact.
                </h1>

                <p className="link-para">
                  Browse our design initiatives tailored for rural school
                  infrastructure.
                </p>
                <button className="new-btn-design">Read More</button>
              </div>
              <div className="new-our-projects-each-right-cont"></div>
            </div>
          </div>

          <div className="new-our-projects-cont">
            <div className="new-our-projects-each-cont">
              <div className="new-our-projects-each-right-cont"></div>
              <div className="new-our-projects-each-left-cont new-space-left">
                <p className="new-our-projects-head">DESIGN GUIDELINES</p>
                <h1>
                  We build, design and model perfect rural structures serving
                  their best interests of its communities.
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* <section className="d_home_section1">
          <div className="d_home_section1_left image_left"></div>

          <div className="d_home_section1_right">
            <h1>
              Design can be a powerful force for positive environmental impact.
            </h1>
            <Link to="/" className="link-text">
              Browse our design initiatives tailored for rural school
              infrastructure
            </Link>
          </div>
        </section> */}
        {/* <section className="d_home_section1_mobile">
          <div className="d_home_section1_mobile_image"></div>
          <h1 className="d_home_section1_mobile_text">
            Design can be a powerful force for positive environmental impact.
          </h1>
          <Link to="/designlist" className="link-text">
            Browse our design initiatives tailored for rural school
            infrastructure
          </Link>
        </section> */}

        {/* ------------------------------------------------------------- */}

        {/* ------------------------------------------------------------- */}

        {/* <section className="d_home_section3">
          <h1>Design Guidelines</h1>
          <div className="d_home_section3_box">
            <div className="d_home_section3_content">
              <h1>
                We build, design and model perfect rural structures serving
                their best interests of its communities
              </h1>
            </div>

            <div className="d_home_section3_image"></div>
          </div>
        </section> */}
        {/* ------------------------------------------------------------- */}
        <section className="d_home_section1_mobile">
          <h1 className="d_home_section1_mobile_guideline">
            Design Guidelines
          </h1>
          <div className="d_home_section1_mobile_image"></div>
          <h1 className="d_home_section1_mobile_text">
            We build, design and model perfect rural structures serving their
            best interests of its communities
          </h1>
        </section>
        {/* <p className="design-p">
          Lokarpan's latest initiative—the Rural Planning and School Design
          Guidelines—ushers in a new era of educational infrastructure. By
          setting benchmarks for construction, we ensure learning environments
          integrate universal accessibility standards, robust electrification
          solutions, and stringent safety measures. By adhering to government
          norms and dimensions while allowing for flexibility and innovation, we
          aim to empower schools with enduring and adaptable structures.
        </p> */}

        <div className="d_home_section2_image"></div>

        <section className="d_home_section2">
          <h1>
            Navigating the complexity of rural infrastructure, our Design
            fellowship brings together a diverse team of planners, designers,
            and engineers to shape resilient environments for the future.
          </h1>
          <Link to="/fellowship" className="d-home-link">
            {/* <button className="join-us-btn">Join Us</button> */}
            Join Us
            <IoIosArrowForward className="mar-below-space" />
          </Link>
        </section>

        {/* ------------------------------------------------------------- */}
        <Footer />
      </div>
    );
  }
}
