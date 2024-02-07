import React, { useState } from "react";
import "./SecondaryNav.css";
import { FaAngleDown } from "react-icons/fa";

const SecondaryNav = () => {
  const [isNavmenuOpen, setNavmenuOpen] = useState(null);
  const toggleNavmenu = () => {
    setNavmenuOpen(!isNavmenuOpen);
  };
  return (
    <nav className="SecNavbar">
      <div className="navbar-logo">Leadership</div>
      <div className="mobile-view-dropdown" onClick={toggleNavmenu}>
        <p>
          <FaAngleDown />
        </p>
      </div>
      <ul className={`navbar-links mobile-navbar-links ${isNavmenuOpen ? "active" : ""}`}>
        <li className="navbar-item">
          <a href="/board">Board</a>
        </li>
        <li className="navbar-item">
          <a href="/staff">Staff</a>
        </li>
        <li className="navbar-item">
          <a href="/educators">Educators</a>
        </li>
        <li className="navbar-item">
          <a href="/fellows">Fellows</a>
        </li>
        <li className="navbar-item">
          <button type="button" className="apply-btn">
            Apply Now
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default SecondaryNav;
