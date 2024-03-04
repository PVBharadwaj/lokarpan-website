import { BsChevronDown } from "react-icons/bs";
import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const EducationSubNav = () => {
  const [isNavmenuOpen, setNavmenuOpen] = useState(null);
  const toggleNavmenu = () => {
    setNavmenuOpen(!isNavmenuOpen);
  };

  return (
    <nav className="SecNavbar">
      <div className="navbar-logo">Education</div>
      <div className="navbar-rest">
        <ul className="navbar-links">
          <li className="navbar-item desktop-only">
            <Link to="/approach">Approach</Link>
          </li>
          <li className="navbar-item desktop-only">
            <Link to="/digital-tool">Digital Tools</Link>
          </li>
          <li className="navbar-item dropdown education">
            <p onClick={toggleNavmenu}>
              <span className="desktop-only">Browse All</span>
              <BsChevronDown
                className="react-icon"
                style={{ fontSize: "20px" }}
              />
            </p>
            <div
              className={` navbar-links click-dropdown ${
                isNavmenuOpen ? "active" : ""
              }`}
            >
              <div className="dropdown-container">
                <h4 className="mobile-heading">Explore About</h4>
                <ul className="edu-subnav-list">
                  <li className="navbar-item desktop-only">
                    <Link to="/approach">Approach</Link>
                  </li>
                  <li className="navbar-item desktop-only">
                    <Link to="/digital-tool">Digital Tools</Link>
                  </li>
                  <li>
                    <Link to="/our-role">Our Role</Link>
                  </li>
                  <li>
                    <Link to="/history">History</Link>
                  </li>
                  <li>
                    <Link to="/our-role">Mission</Link>
                  </li>
                  <li>
                    <Link to="/leadership">Leadership</Link>
                  </li>
                  <li>
                    <Link to="/career">Careers</Link>
                  </li>
                  <li>
                    <Link to="/financials">Financial</Link>
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
