import { BsChevronDown } from "react-icons/bs";
import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const KithLifeAtSchoolSubNavbar = () => {
  const [isNavmenuOpen, setNavmenuOpen] = useState(null);
  const toggleNavmenu = () => {
    setNavmenuOpen(!isNavmenuOpen);
  };
  
  const closeBrowseMenu = () => {
    setNavmenuOpen(false);
  };

  return (
    <nav className="SecNavbar support-nav">
      <div className="navbar-logo">Life At School</div>
      <ul className="navbar-links">
        <li 
          className="navbar-item sup-nav-browse dropdown"
          onMouseLeave={closeBrowseMenu}
        >
          <p className="desktop-only" onClick={toggleNavmenu}>
            <span>Browse All</span>
            <BsChevronDown className="react-icon" />
          </p>
          <div
            className={` navbar-links click-dropdown ${
              isNavmenuOpen ? "active" : ""
            }`}
          >
            <div className="dropdown-container">
              <ul className="support-subnav-list">
                <h4 className="mobile-heading">Explore Life at School</h4>
                <li>
                  <Link to="/kith/campus-and-culture">Campus & Culture</Link>
                </li>
                <li>
                  <Link to="/kith/club-and-commitee">Committee & Club</Link>
                </li>
                <li>
                  <Link to="/kith/safety-and-wellbeing">
                    Safety & WellBeing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="navbar-item apply-btn orange">
          <Link to="/donate" className="apply-btn-text-white navbar-btn">
            Donate
          </Link>
        </li>
      </ul>
      <div className="mobile-view-dropdown" onClick={toggleNavmenu}>
        <p>
          <BsChevronDown className="react-icon"/>
        </p>
      </div>
    </nav>
  );
};

export default KithLifeAtSchoolSubNavbar;
