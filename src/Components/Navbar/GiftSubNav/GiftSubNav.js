import { BsChevronDown } from "react-icons/bs";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./GiftSubNav.css";

const GiftSubNav = () => {
  const [isNavmenuOpen, setNavmenuOpen] = useState(null);
  const toggleNavmenu = () => {
    setNavmenuOpen(!isNavmenuOpen);
  };
  return (
    <nav className="SecNavbar">
      <div className="navbar-logo">Ways to Give</div>
      <div className="navbar-rest">
        <ul className="navbar-links">
          <li className="navbar-item dropdown">
            <p onClick={toggleNavmenu}>
              <span className="desktop-only">Browse All</span>
              <BsChevronDown className="react-icon"/>
            </p>
            <div
              className={` navbar-links click-dropdown ${
                isNavmenuOpen ? "active" : ""
              }`}
            >
              <div className="dropdown-container">
                <ul>
                  <li>
                    <Link to="/why-donate">Annual Fund</Link>
                  </li>
                  <li>
                    <Link to="/being-a-volunteer">Work of Art</Link>
                  </li>
                  <li>
                    <Link to="/our-role">Endowment Gifts</Link>
                  </li>
                  <li>
                    <Link to="/ways-to-give">Planned giving</Link>
                  </li>
                  <li>
                    <Link to="/donate">Other ways to give</Link>
                  </li>
                  <li>
                    <Link to="/donate">Expanding Vision</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="navbar-item apply-btn orange">
              <Link to="/donate" className="apply-btn-text">Donate</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default GiftSubNav;

