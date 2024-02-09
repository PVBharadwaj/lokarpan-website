import "./index.css";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import React, { useState } from "react";


const DonateSubNav = () => {
  const [isNavmenuOpen, setNavmenuOpen] = useState(null);
  const toggleNavmenu = () => {
    setNavmenuOpen(!isNavmenuOpen);
  };
  return (
    <nav className="SecNavbar">
      <div className="navbar-logo">Donate</div>
      <div className="mobile-view-dropdown" onClick={toggleNavmenu}>
        <p>
          Browse all <FaAngleDown />
        </p>
      </div>
        <ul className={` navbar-links ${isNavmenuOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <Link to="/donate" className="disabled">Donate</Link>
          </li>
          <li className="navbar-item">
            <Link to="/faqs">FAQ</Link>
          </li>
        </ul>
    </nav>
  );
};

export default DonateSubNav;
