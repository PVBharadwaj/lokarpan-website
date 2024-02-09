import { FaAngleDown } from "react-icons/fa";
import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const EducationSubNav = () => {

  return (
    <nav className="SecNavbar">
      <div className="navbar-logo">Education</div>
        <ul className="navbar-links">
          <li className="navbar-item mobile">
            <Link to="/approach">Approach</Link>
          </li>
          <li className="navbar-item mobile">
            <Link to="/digital-tool">Digital Tools</Link>
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
    </nav>
  );
};

export default EducationSubNav;
