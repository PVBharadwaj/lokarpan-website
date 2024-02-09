import { FaAngleDown } from "react-icons/fa";
import React, { useState } from "react";
import "./SupportSubNav.css";
import { Link } from "react-router-dom"; 

const SupportSubNav = () => {
  const [isNavmenuOpen, setNavmenuOpen] = useState(null);
  const toggleNavmenu = () => {
    setNavmenuOpen(!isNavmenuOpen);
  };
  return (
    <nav className="SecNavbar">
      <div className="navbar-logo">Support</div>
        <ul className="navbar-links">
          <li className="navbar-item dropdown">
            <p onClick={toggleNavmenu}>
              <FaAngleDown />
            </p>
            <div
              className={` navbar-links click-dropdown ${
                isNavmenuOpen ? "active" : ""
              }`}
            >
              <div className="dropdown-container">
                <ul>
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
                  <li className="navbar-item navbar-item-btn-browse apply-btn">
                      <Link to="/donate">Donate</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="navbar-item navbar-item-btn apply-btn">
              <Link to="/donate">Donate</Link>
          </li>
        </ul>
    </nav>
  );
};

export default SupportSubNav;
