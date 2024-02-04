import { FaAngleDown } from "react-icons/fa";
import React, { useState } from "react";
import "./SupportSubNav.css";

const SupportSubNav = () => {
  const [isNavmenuOpen, setNavmenuOpen] = useState(null);
  const toggleNavmenu = () => {
    setNavmenuOpen(!isNavmenuOpen);
  };
  return (
    <nav className="SecNavbar">
      <div className="navbar-logo">Support</div>
      <div className="navbar-rest">
        <ul className="navbar-links">
          <li className="navbar-item dropdown">
            <p onClick={toggleNavmenu}>
              Browse all <FaAngleDown />
            </p>
            <div
              className={` navbar-links click-dropdown ${
                isNavmenuOpen ? "active" : ""
              }`}
            >
              <div className="dropdown-container">
                <ul>
                  <li>
                    <a href="/why-donate">Why Donate</a>
                  </li>
                  <li>
                    <a href="/being-a-volunteer">Being a Volunteer</a>
                  </li>
                  <li>
                    <a href="/our-role">Our Supporters</a>
                  </li>
                  <li>
                    <a href="/ways-to-give">Ways to Give</a>
                  </li>
                  <li>
                    <a href="/donate">Donate Now</a>
                  </li>
                  <li className="navbar-item navbar-item-btn-browse">
                    <button type="button" className="apply-btn">
                      <a href="/donate">Donate</a>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="navbar-item navbar-item-btn">
            <button type="button" className="apply-btn">
              <a href="/donate">Donate</a>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SupportSubNav;
