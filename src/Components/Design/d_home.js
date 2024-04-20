import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./d_home.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SubnavBar from "./DesignSubNavbar/index";
export default class d_home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SubnavBar />
        {/* ------------------------------------------------------------- */}
        <section className="d_home_hero">
          <div className="d_home_hero_head1">
            Lokarpan's Design Approach: Building Sustainable Foundations for
            Rural Education
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
        <section className="d_home_section1_mobile">
          <div className="d_home_section1_mobile_image"></div>
          <h1 className="d_home_section1_mobile_text">
            Design can be a powerful force for positive environmental impact.
          </h1>
          <Link to="/designlist" className="link-text">
            Browse our design initiatives tailored for rural school
            infrastructure
          </Link>
        </section>

        {/* ------------------------------------------------------------- */}
        <section className="d_home_section1">
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
        </section>
        {/* ------------------------------------------------------------- */}
        <section className="d_home_section2">
          <h1>
            Navigating the complexity of rural infrastructure, our Design
            fellowship brings together a diverse team of planners, designers,
            and engineers to shape resilient environments for the future.
          </h1>
          <Link to="/fellowship">
            <button className="join-us-btn">Join Us</button>
          </Link>

          <div className="d_home_section2_image"></div>
        </section>
        {/* ------------------------------------------------------------- */}

        <section className="d_home_section3">
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
        </section>
        {/* ------------------------------------------------------------- */}
        <section className="d_home_section1">
          <div className="d_home_section1_left image_left"></div>

          <div className="d_home_section1_right">
            <p className="design-p">
              Lokarpan's latest initiative—the Rural Planning and School Design
              Guidelines—ushers in a new era of educational infrastructure. By
              setting benchmarks for construction, we ensure learning
              environments integrate universal accessibility standards, robust
              electrification solutions, and stringent safety measures. By
              adhering to government norms and dimensions while allowing for
              flexibility and innovation, we aim to empower schools with
              enduring and adaptable structures.
            </p>
          </div>
        </section>
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
        <section className="d_home_section1_mobile">
          <div className="d_home_section1_mobile_image"></div>
          <h1 className="d_home_section1_mobile_text1">
            Lokarpan's latest initiative—the Rural Planning and School Design
            Guidelines—ushers in a new era of educational infrastructure. By
            setting benchmarks for construction, we ensure learning environments
            integrate universal accessibility standards, robust electrification
            solutions, and stringent safety measures. By adhering to government
            norms and dimensions while allowing for flexibility and innovation,
            we aim to empower schools with enduring and adaptable structures.
          </h1>
        </section>
        {/* ------------------------------------------------------------- */}
        <Footer />
      </div>
    );
  }
}
