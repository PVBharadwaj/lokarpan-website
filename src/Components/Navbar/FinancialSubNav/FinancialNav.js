import { FaAngleDown } from "react-icons/fa";
import "./FinancialNav.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
          <Link to="/financials" className="disabled">Overview</Link>
        </li>
        <li className="navbar-item">
          <Link to="/publications">Publications</Link>
        </li>
      </ul>
    </nav>
  );
};

export default FinancialNav;
