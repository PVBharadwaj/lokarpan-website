import { FaAngleDown } from "react-icons/fa";
import React from "react";
import "./index.css";

const EducationSubNav = () => {

  return (
    <nav className="SecNavbar">
      <div className="navbar-logo">Education</div>
        <ul className="navbar-links">
          <li className="navbar-item mobile">
            <a href="/approach">Approach</a>
          </li>
          <li className="navbar-item mobile">
            <a href="/digital-tool">Digital Tools</a>
          </li>
          <li className="navbar-item dropdown">
            <p>
              Browse all <FaAngleDown />
            </p>
            <div className="dropdown-content">
              <div className="dropdown-container">
                <h4>Explore About</h4>
                <ul>
                  <li>
                    <a href="/our-role">Our Role</a>
                  </li>
                  <li>
                    <a href="/history">History</a>
                  </li>
                  <li>
                    <a href="/our-role">Mission</a>
                  </li>
                  <li>
                    <a href="/leadership">Leadership</a>
                  </li>
                  <li>
                    <a href="/career">Careers</a>
                  </li>
                  <li>
                    <a href="/financials">Financial</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
    </nav>
  );
};

export default EducationSubNav;
