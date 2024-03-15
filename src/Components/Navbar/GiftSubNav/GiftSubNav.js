import { BsChevronDown } from "react-icons/bs";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./GiftSubNav.css";

const GiftSubNav = () => {
  const [isNavmenuOpen, setNavmenuOpen] = useState(null);
  const toggleNavmenu = () => {
    setNavmenuOpen(!isNavmenuOpen);
  };

  const closeBrowseMenu = () => {
    setNavmenuOpen(false);
   };

  return (
    <nav className="SecNavbar support-nav">
      <div className="navbar-logo">Ways to Give</div>
        <ul className="navbar-links">
          <li 
            className="navbar-item sup-nav-browse dropdown"
            onMouseLeave={closeBrowseMenu}  
          >
            <p onClick={toggleNavmenu}>
              <span className="desktop-only">Browse All</span>
              <BsChevronDown 
              className={`react-icon arrow-down ${isNavmenuOpen ? "arrow-rotate" : ""}`} 
            />
            </p>
            <div
              className={` navbar-links click-dropdown ${
                isNavmenuOpen ? "active" : ""
              }`}
            >
              <div className="dropdown-container">
                <ul>
                  <h4 className="gift-nav-head">Explore Make a Gift</h4>
                  <li>
                    <Link className="gift-nav-item" to="/why-donate">Annual Fund</Link>
                  </li>
                  <li>
                    <Link className="gift-nav-item" to="/being-a-volunteer">Work of Art</Link>
                  </li>
                  <li>
                    <Link className="gift-nav-item" to="/our-role">Endowment Gifts</Link>
                  </li>
                  <li>
                    <Link className="gift-nav-item" to="/ways-to-give">Planned giving</Link>
                  </li>
                  <li>
                    <Link className="gift-nav-item" to="/donate">Other ways to give</Link>
                  </li>
                  <li>
                    <Link className="gift-nav-item" to="/donate">Expanding Vision</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="navbar-item apply-btn orange">
              <Link to="/donate" className="apply-btn-text-white navbar-btn">Donate</Link>
          </li>
        </ul>
    </nav>
  );
};

export default GiftSubNav;

