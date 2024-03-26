import React from "react";
import "./Academics.css";
import { Link } from "react-router-dom";
import KithNavbar from "../Navbar/KithNavbar/index";
import KithLifeAtSchoolSubNavbar from "../Navbar/KithLifeAtSchoolSubNavbar";
import KithFooter from "../KithFooter/index";
import Footer from "../KithFooter";

const Academics = () => {
  return (
    <>
      <KithNavbar />
      <KithLifeAtSchoolSubNavbar />
      <div className="academics-upper-section">
        <div className="academics-upper-section-text">
          <h1>Academics</h1>
          <p>
            Stanford students create and apply knowledge by thinking and doing,
            preparing for leadership in a rapidly changing world.
          </p>
        </div>
      </div>
      <div className="academics-stats">
        <div>
          <p>2323</p>
          <p>Faculty Members</p>
        </div>
        <div>
          <p>6:1</p>
          <p>Student-to-faculty ratio</p>
        </div>
        <div>
          <p>Nearly 200</p>
          <p>Graduate fields of Study</p>
        </div>
      </div>
      <div className="academics-div">
        <h1>Undergraduate Studies</h1>
        <div className="academics-card">
          <div className="academics-card-img academics-card-img-1">
            {/* <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709277369/Rectangle_1922_ygjslo.png"
              alt=""
            /> */}
          </div>
          <div className="academics-card-text">
            <div>
              <h3>Undergraduate Education</h3>
              <p>
                Stanford Undergrad is your guide to undergraduate academics and
                opportunities run by the Vice Provost for Undergraduate
                Education.
              </p>
              <Link to="/" className="kith-link">
                Stanford Undergrad
              </Link>
            </div>
            <div>
              <h3>Majors</h3>
              <p>
                Explore the 66 major fields of undergraduate study at Stanford.
              </p>
              <Link to="/" className="kith-link">
                Explore Majors
              </Link>
            </div>
            <div>
              <h3>Undergraduate Facts & Figures</h3>
              <p>
                Approximately 7,800 undergraduate students attend Stanford.
                Learn more about the undergraduate program and student body.
              </p>
              <Link to="/" className="kith-link">
                Facts about the Undergraduate Program
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="academics-div academics-div-blue">
        <h3>
          Seven schools on one campus offer students boundless opportunities to
          pursue their passions and collaborate on solving complex global
          problems.
        </h3>
        <Link to="/donate" className="kith-apply-btn white">
          Apply
        </Link>
      </div>
      <div className="academics-div">
        <h1>Graduate Studies</h1>
        <div className="academics-card academics-card-reverse">
          <div className="academics-card-text">
            <div>
              <h3>Office of the Vice Provost for Graduate Education</h3>
              <p>
                The VPGE office works collaboratively across the University to
                ensure that every graduate student has the best possible
                education.
              </p>
              <Link to="/" className="kith-link">
                Graduate Education
              </Link>
            </div>
            <div>
              <h3>Graduate Facts & Figures</h3>
              <p>
                Today, 9,688 students are pursuing 14 distinct postbaccalaureate
                degrees in nearly 200 graduate programs in all seven of
                Stanford’s schools. Learn more about graduate studies at
                Stanford.
              </p>
              <Link to="/" className="kith-link">
                Graduate Educations
              </Link>
            </div>
          </div>
          <div className="academics-card-img academics-card-img-2">
            {/* <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709277385/Rectangle_1924_qhodkb.png"
              alt=""
            /> */}
          </div>
        </div>
      </div>
      <div className="academics-div academics-div-last">
        <h1>Life-long learning</h1>
        <div className="academics-card">
          <div className="academics-card-img academics-card-img-3">
            {/* <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709281412/Rectangle_1925_ue0lq3.png"
              alt=""
            /> */}
          </div>
          <div className="academics-card-text">
            <div>
              <h3>Undergraduate Education</h3>
              <p>
                Stanford Undergrad is your guide to undergraduate academics and
                opportunities run by the Vice Provost for Undergraduate
                Education.
              </p>
              <Link to="/" className="kith-link">
                Stanford Undergrad
              </Link>
            </div>
            <div>
              <h3>Majors</h3>
              <p>
                Explore the 66 major fields of undergraduate study at Stanford.
              </p>
              <Link to="/" className="kith-link">
                Explore Majors
              </Link>
            </div>
            <div>
              <h3>Undergraduate Facts & Figures</h3>
              <p>
                Approximately 7,800 undergraduate students attend Stanford.
                Learn more about the undergraduate program and student body.
              </p>
              <Link to="/" className="kith-link">
                Facts about the Undergraduate Program
              </Link>
            </div>
          </div>
        </div>
      </div>
      <KithFooter />
    </>
  );
};

export default Academics;
