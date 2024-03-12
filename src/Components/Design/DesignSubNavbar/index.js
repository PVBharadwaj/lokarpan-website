import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./index.css";
import "../.././Navbar/Navbar.css";


const SubNavbar = () => {
  const [isNavmenuOpen, setNavmenuOpen] = useState(null);
  const toggleNavmenu = () => {
    setNavmenuOpen(!isNavmenuOpen);
  };

  const closeBrowseMenu = () => {
    setNavmenuOpen(false);
   }

  return (
    <nav className="SecNavbar">
      <div className="navbar-logo">Design</div>
      <div className="navbar-rest">
        <ul className="navbar-links">
          <li className="navbar-item desktop">
            <Link to="/designlist">Projects</Link>
          </li>
          <li className="navbar-item desktop">
            <Link to="/guideline">Design Guidelines</Link>
          </li>
          <li 
            className="navbar-item dropdown"
            onMouseLeave={closeBrowseMenu}
          >
            <p onClick={toggleNavmenu}>
              <span className="desktop">Browse All</span>
              <BsChevronDown className="react-icon" />
            </p>
            <div
              className={` navbar-links click-dropdown ${
                isNavmenuOpen ? "active" : ""
              }`}
            >
              <div className="dropdown-container">
                <h4>Explore Design</h4>
                <ul className="subnav-ul">
                  <li>
                    <Link to="/design">Overview</Link>
                  </li>
                  <li>
                    <Link to="/designlist">Projects</Link>
                  </li>
                  <li>
                    <Link to="/guideline">Design Guidelines</Link>
                  </li>
                  <li>
                    <Link to="/resources">Resources</Link>
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

export default SubNavbar;
