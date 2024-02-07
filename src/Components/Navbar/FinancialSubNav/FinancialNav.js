import { FaAngleDown } from "react-icons/fa";
import "./FinancialNav.css";
import React, { useState } from "react";

const FinancialNav = () => {
  const [isNavmenuOpen, setNavmenuOpen] = useState(null);
  const toggleNavmenu = () => {
    setNavmenuOpen(!isNavmenuOpen);
  };
  return (
    <nav className="SecNavbar">
      <div className="navbar-logo">Financials</div>
      <div className="mobile-view-dropdown" onClick={toggleNavmenu}>
        <p>
          <FaAngleDown />
        </p>
      </div>
      <ul className={` navbar-links mobile-navbar-links ${isNavmenuOpen ? "active" : ""}`}>
        <li className="navbar-item">
          <a className="disabled" href="/financials">Overview</a>
        </li>
        <li className="navbar-item">
          <a href="/publications">Publications</a>
        </li>
      </ul>
    </nav>
  );
};

export default FinancialNav;
