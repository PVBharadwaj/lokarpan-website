import { BsChevronDown } from "react-icons/bs";
import React, { useState } from "react";
import "./SupportSubNav.css";
import { Link } from "react-router-dom";

const SupportSubNav = () => {
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
        <Link className="navbar-mainlink" to="/why-donate">
          Support
        </Link>
      </div>
      <ul className="navbar-links">
        <li
          className="navbar-item sup-nav-browse dropdown"
          onMouseLeave={closeBrowseMenu}
        >
          <p className="desktop-only" onClick={toggleNavmenu}>
            <span>Browse All</span>
            <BsChevronDown 
              className={`react-icon arrow-down ${isNavmenuOpen ? "arrow-rotate" : ""}`} 
            />
          </p>
          <div
            className={` navbar-links click-dropdown ${
              isNavmenuOpen ? "active" : ""
            }`}
          >
            <div className="click-dropdown-inner">
              <div className="dropdown-container">
                <ul className="support-subnav-list">
                  <h1 className="sub-heading">Explore Support</h1>
                  <li>
                    <Link to="/why-donate">Why Donate</Link>
                  </li>
                  <li>
                    <Link to="/being-a-volunteer">Being a Volunteer</Link>
                  </li>
                  <li>
                    <Link to="/our-role">Our Supporters</Link>
                  </li>
                  <li>
                    <Link to="/ways-to-give">Ways to Give</Link>
                  </li>
                  <li>
                    <Link to="/donate">Donate Now</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <div className="mobile-view-dropdown" onClick={toggleNavmenu}>
          <p>
          <BsChevronDown 
            className={`react-icon arrow-down ${isNavmenuOpen ? "arrow-rotate" : ""}`} 
          />
          </p>
        </div>
        <li className="navbar-item apply-btn orange">
          <Link to="/donate" className="apply-btn-text-white navbar-btn">
            Donate
          </Link>
        </li>
      </ul>
      {/* <div className="mobile-view-dropdown" onClick={toggleNavmenu}>
        <p>
          <BsChevronDown className="react-icon"/>
        </p>
      </div> */}
    </nav>
  );
};

export default SupportSubNav;
