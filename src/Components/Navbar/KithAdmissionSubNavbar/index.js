import { BsChevronDown } from "react-icons/bs";
import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const KithAdmissionSubNavbar = () => {
  const [isNavmenuOpen, setNavmenuOpen] = useState(null);
  const toggleNavmenu = () => {
    setNavmenuOpen(!isNavmenuOpen);
  };
  return (
    <nav className="SecNavbar">
      <div className="navbar-logo">Admission</div>
      <ul className="navbar-links">
        <li className="navbar-item dropdown">
          <p onClick={toggleNavmenu}>
            <span className="desktop-only">Browse All</span>
            <BsChevronDown className="react-icon" />
          </p>
          <div
            className={` navbar-links click-dropdown ${
              isNavmenuOpen ? "active" : ""
            }`}
          >
            <div className="dropdown-container">
              <ul className="support-subnav-list">
                <li>
                  <Link to="/kith/how-to">How to?</Link>
                </li>
                <li>
                  <Link to="/kith/enrollment">OnlineEnrollment</Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="navbar-item apply-btn orange">
          <Link to="/kith/donate" className="apply-btn-text-white navbar-btn">
            Donate
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default KithAdmissionSubNavbar;
