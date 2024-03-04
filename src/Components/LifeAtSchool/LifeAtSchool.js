import React from "react";
import { Link } from "react-router-dom";
import "./LifeAtSchool.css";
import KithNavbar from "../Navbar/KithNavbar/index";
import KithLifeAtSchoolSubNavbar from "../Navbar/KithLifeAtSchoolSubNavbar";
import KithFooter from "../KithFooter";
import Footer from "../KithFooter";

const LifeAtSchool = () => {
  return (
    <>
      <KithNavbar />
      <KithLifeAtSchoolSubNavbar />
      <div className="life-at-school-upper-section">
        <h1>Campus & Culture</h1>
        <p>
          Welcome to a place where passion meets purpose, and where every
          individual is a valued contributor to our shared vision. Lokarpan's
          culture is one of inclusivity, collaboration, and a deep commitment to
          making a positive impact.
        </p>
      </div>
      <div className="life-at-school-div">
        <h3>Our Campus</h3>
        <p>
          While Lokarpan may not have a physical campus in the traditional
          sense, our virtual space is a dynamic hub of activity. Engage with
          fellow members through our online forums, participate in virtual
          events, and collaborate on projects that align with your passions. Our
          "campus" is wherever you are, allowing you to connect with like-minded
          individuals from around the world.
        </p>
      </div>
      <div className="life-at-school-third-div life-at-school-div">
        <h3>Committee & Clubs</h3>
        <div className="clubs-div">
          <div>
            <img
              src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1709446763/Rectangle_1810_qknn4q.png"
              alt=""
            />
            <div className="give-card-text">
              <ul>
                <li>
                  <span>Program Development Committee:</span> Shape the
                  direction of our programs and initiatives.
                </li>
                <li>
                  <span>Community Outreach Committee:</span> Connect with
                  external partners and extend Lokarpan's reach.
                </li>
                <li>
                  <span>Innovation and Technology Committee:</span> Explore
                  cutting-edge solutions to drive positive change.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1709446763/Rectangle_1811_k1elbd.png"
              alt=""
            />
            <div className="give-card-text">
              <ul>
                <li>
                  <span>Program Development Committee:</span> Shape the
                  direction of our programs and initiatives.
                </li>
                <li>
                  <span>Community Outreach Committee:</span> Connect with
                  external partners and extend Lokarpan's reach.
                </li>
                <li>
                  <span>Innovation and Technology Committee:</span> Explore
                  cutting-edge solutions to drive positive change.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="life-at-school-div life-at-school-div-last">
        <h3>Our Campus</h3>
        <img src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1709446763/Rectangle_1804_jmnf5c.png" />
        <ul>
          <li>
            We have implemented comprehensive safety measures to protect your
            privacy and personal information.
          </li>
          <li>
            Our online platforms are secure, and we continuously update our
            systems to maintain a safe digital space.
          </li>
          <li>
            In all our activities, whether virtual or in person, we adhere to
            guidelines that prioritize the health and safety of our members.
          </li>
          <li>
            Lokarpan is committed to supporting the mental health and wellbeing
            of our members. Look out for workshops, webinars, and resources
            focused on mental health and self-care.
          </li>
          <li>
            Our community encourages open communication. If you ever need
            support, our team and fellow members are here to listen and assist.
          </li>
        </ul>
      </div>
      <KithFooter />
    </>
  );
};

export default LifeAtSchool;
