import { BsChevronDown } from "react-icons/bs";
import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const KithInfoSubNavbar = () => {
  const [isNavmenuOpen, setNavmenuOpen] = useState(null);
  const toggleNavmenu = () => {
    setNavmenuOpen(!isNavmenuOpen);
  };

  const closeBrowseMenu = () => {
    setNavmenuOpen(false);
  };

  return (
    <nav className="SecNavbar support-nav">
      <div className="navbar-logo">
        <Link to="/kith/information" className="link">
          Information
        </Link>
      </div>
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
                <h1 className="sub-heading">Explore Information</h1>
                <li>
                  <Link to="/kith/leadership">Leadership</Link>
                </li>
                <li>
                  <Link to="/kith/career">Career</Link>
                </li>
                <li>
                  <Link to="/kith/alumni">Alumni</Link>
                </li>
                <li>
                  <Link to="/kith/faqs">FAQ</Link>
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
      <div className="mobile-view-dropdown" onClick={toggleNavmenu}>
        <p>
          <BsChevronDown className="react-icon" />
        </p>
      </div>
    </nav>
  );
};

export default KithInfoSubNavbar;
