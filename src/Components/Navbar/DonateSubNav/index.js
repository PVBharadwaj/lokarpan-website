import "./index.css";
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
            <a href="/donate">Donate</a>
          </li>
          <li className="navbar-item">
            <a href="/faqs">Faq</a>
          </li>
        </ul>
    </nav>
  );
};

export default DonateSubNav;
