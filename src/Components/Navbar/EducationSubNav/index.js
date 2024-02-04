import { FaAngleDown } from "react-icons/fa";
import React, { useState } from "react";
import "./index.css";

const EducationSubNav = () => {
  const [isNavmenuOpen, setNavmenuOpen] = useState(null);
  const toggleNavmenu = () => {
    setNavmenuOpen(!isNavmenuOpen);
  };
  const [isMobileNavmenuOpen, setMobileNavmenuOpen] = useState(null);
  const toggleMobileNavmenu = () => {
    setMobileNavmenuOpen(!isMobileNavmenuOpen);
  };
  return (
    <nav className="SecNavbar">
      <div className="navbar-logo">Education</div>
      <div className="navbar-rest">
        <p className="mobile-item navbar-item" onClick={toggleMobileNavmenu}>
          Browse all <FaAngleDown />
        </p>
        <ul
          className={`navbar-links mobile-none click-dropdown ${
            isMobileNavmenuOpen ? "active" : ""
          }`}
        >
          <li className="navbar-item">
            <a href="/approach">Approach</a>
          </li>
          <li className="navbar-item">
            <a href="/digital-tool">Digital Tools</a>
          </li>
          <li className="navbar-item dropdown">
            {/* <a href="/about">
              Browse all <FaAngleDown />
            </a> */}
            <p onClick={toggleNavmenu}>
              Browse all <FaAngleDown />
            </p>

            {/* <div className="dropdown-content"> */}
            <div
              className={` navbar-links click-dropdown ${
                isNavmenuOpen ? "active" : ""
              }`}
            >
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
      </div>
    </nav>
  );
};

export default EducationSubNav;
