import React from "react";
import "./Admission.css";
import KithNavbar from "../Navbar/KithNavbar/index";
import KithAdmissionSubNavbar from "../Navbar/KithAdmissionSubNavbar";
import KithFooter from "../KithFooter";

const Admission = () => {
  return (
    <>
      <KithNavbar />
      <KithAdmissionSubNavbar />
      <div className="admissions-upper-section">
        <h1>
          We are thrilled to extend a warm welcome to you as part of the
          Lokarpan family.
        </h1>
      </div>
      <div className="admissions-div">
        <div className="admission-card">
          <div className="admission-card-img admission-card-img-1"></div>
          <div className="admission-card-text">
            <h3>Who we are?</h3>
            <p>
              As you embark on this journey with us, your commitment and
              enthusiasm are integral to our success. Lokarpan is built on the
              principles of transparency, inclusivity, and empowerment.
            </p>
          </div>
        </div>
        <div className="admission-card admission-card-reverse">
          <div className="admission-card-text">
            <h3>Our faculty</h3>
            <p>
              We are proud to introduce the talented and dedicated individuals
              who make up our esteemed faculty at Lokarpan Non-Profit
              Organization. Our faculty members bring a wealth of experience,
              expertise, and a shared commitment to our mission
            </p>
          </div>
          <div className="admission-card-img admission-card-img-2"></div>
        </div>
      </div>
      <div className="admissions-div2">
        <div className="mobile-admissions-faculty-content">
          <h3>Faculty</h3>
          <p>
            Harvard faculty are invested in helping you celebrate your passions.
            You'll build close and enduring relationships with professors who
            challenge you to see with new eyes and serve as models of engaged,
            conscientious leadership.
          </p>
        </div>
        <div className="admissions-grid">
          <div className="admission-grid-inner1 admissions-grid-inner">
            <h3>Faculty</h3>
            <p>
              Harvard faculty are invested in helping you celebrate your
              passions. You'll build close and enduring relationships with
              professors who challenge you to see with new eyes and serve as
              models of engaged, conscientious leadership.
            </p>
          </div>
          <div className="admission-grid-inner2 admissions-grid-inner">
            <p>Faculty Engagement by the Numbers</p>
          </div>
          <div className="admission-grid-inner3 admissions-grid-inner side-div">
            <h3>110</h3>
            <p>Faculty teaching first year seminars</p>
          </div>
          <div className="admission-grid-inner4 admissions-grid-inner side-div">
            <h3>260</h3>
            <p>Pre-concentration advisors</p>
          </div>
          <div className="admission-grid-inner5 admissions-grid-inner side-div">
            <h3>7:1</h3>
            <p>Student-to-faculty ratio</p>
          </div>
          <div className="admission-grid-inner6 admissions-grid-inner side-div">
            <h3>10</h3>
            <p>Median course size</p>
          </div>
        </div>
      </div>
      <KithFooter />
    </>
  );
};

export default Admission;
