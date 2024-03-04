import { Component } from "react";
import { FaLinkedin } from "react-icons/fa6";
import SubNavbar from "../Navbar/SubNavbar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../Health/index.css";

import "./index.css";

class Career extends Component {
  render() {
    return (
      <>
        <Navbar />
        <SubNavbar />
        <div className="career-container">
          <div className="career-top-container">
            <h1 className="head2">Join Us!</h1>
            <h3 className="head1">You’ve come to the right place</h3>
            <p className="career-para1">
              Are you seeking an exciting role that will challenge and inspire
              you? Are you looking for guidance on our interview process? Or do
              you want to learn more about what consulting is and what it’s like
              working at Lokarpan? Whatever the reason, you’ve come to the right
              place.
            </p>
            <div className="linked-in-section">
              <FaLinkedin style={{ fontSize: "28px", color: "#ffffff" }} />
              <p className="para2">Follow us on LinkedIn</p>
            </div>
          </div>
          <div className="mobile-career-top-container">
            <img src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708687751/image_319_hvmynw.png" />
            <h1 className="mobile-head2">Join Us!</h1>
            <h3 className="mobile-head1">You’ve come to the right place</h3>
            <p className="mobile-career-para1">
              Are you seeking an exciting role that will challenge and inspire
              you? Are you looking for guidance on our interview process? Or do
              you want to learn more about what consulting is and what it’s like
              working at Lokarpan? Whatever the reason, you’ve come to the right
              place.
            </p>
            <div className="linked-in-section">
              <FaLinkedin style={{ fontSize: "28px" }} />
              <p className="mobile-para2">Follow us on LinkedIn</p>
            </div>
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
                <a href="#" className="career-anchor">
                  Read about our culture
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
                <a href="#" className="career-anchor">
                  Read about our culture
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
                <a href="#" className="career-anchor">
                  Read about our culture
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
                  We know you have questions and we really like the tough ones.
                </h1>
                <p className="health-para">
                  Immerse yourself in stories that will challenge your mind and
                  capture your heart. Explore new interests and stay on top of
                  what’s trending. Our global catalogue features leading voices
                  on the topics you care about — from the biggest names to
                  independent creators.
                </p>
                <a href="#" className="career-anchor">
                  Read about our culture
                </a>
              </div>
            </div>
          </div>

          <div className="health-full-img">
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708687736/Rectangle_1931_zuy1zr.png"
              alt="health-img"
            />
          </div>
          <div className="career-next-step-section">
            <h1 className="head3">Working At Lokarpan</h1>
            <p>
              See our areas of work, worldwide Locations and opportunities for
              students
            </p>
            <button type="button" className="career-apply-btn">
              Apply
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Career;
