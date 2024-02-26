import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import NavSearchbar from "../KithNavSearchbar/index";
import { CiSearch } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchmenuOpen, setSearchmenuOpen] = useState(null);

  const toggleSearchmenu = () => {
    setSearchmenuOpen(!isSearchmenuOpen);
  };

  const toggleMenu = () => {
    setActiveDropdown(null);
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavlinkClick = (e) => {
    if (window.innerWidth <= 805) {
      e.preventDefault();
      toggleDropdown();
    }
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleBackClick = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708862176/Frame_48098090_hvamgv.png"
          className="lokarpan-logo"
        />
      </div>
      <div class="back" onClick={handleBackClick}>
        <IoIosArrowBack
          style={{ fontSize: "20px" }}
          className={activeDropdown !== null ? "down active" : "down"}
        />
      </div>

      <ul className={`navbar-links navbar-menu ${isMenuOpen ? "active" : ""}`}>
        <RxCross2
          className="cross"
          onClick={toggleMenu}
          style={{ fontSize: "20px" }}
        />
        <li className="navbar-item">
          <Link to="/kith/overview" onClick={toggleMenu}>
            overview
          </Link>
        </li>
        <li className="navbar-item dropdown" onClick={toggleDropdown}>
          <Link to="/kith/admission" onClick={handleNavlinkClick}>
            Admission
          </Link>
          {/* <IoIosArrowForward className="up" /> */}
          <div
            className={`dropdown-content ${
              activeDropdown !== null ? "active" : ""
            }`}
          >
            <div className="dropdown-container">
              <ul>
                <li>
                  <Link to="/kith/how-to" onClick={toggleMenu}>
                    How to ?
                  </Link>
                </li>
                <li>
                  <Link to="/kith/enrollment" onClick={toggleMenu}>
                    Online Enrollment
                  </Link>
                </li>
                <li>
                  <Link to="/kith/financials" onClick={toggleMenu}>
                    Financials
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="navbar-item dropdown" onClick={toggleDropdown}>
          <Link to="/kith/life-at-school" onClick={handleNavlinkClick}>
            Life at School
          </Link>
          {/* <IoIosArrowForward className="up" /> */}
          <div
            className={`dropdown-content ${
              activeDropdown !== null ? "active" : ""
            }`}
          >
            <div className="dropdown-container">
              <ul>
                <li>
                  <Link to="/kith/campus-and-culture" onClick={toggleMenu}>
                    Campus & Culture
                  </Link>
                </li>
                <li>
                  <Link to="/kith/club-and-commitee" onClick={toggleMenu}>
                    Committees & Clubs
                  </Link>
                </li>
                <li>
                  <Link to="/kith/safety-and-wellbeing" onClick={toggleMenu}>
                    Safety & Wellbeing
                  </Link>
                </li>
                <li>
                  <Link to="/kith/academics" onClick={toggleMenu}>
                    Academics
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li className="navbar-item dropdown" onClick={toggleDropdown}>
          <Link to="/kith/information" onClick={handleNavlinkClick}>
            Information
          </Link>
          {/* <IoIosArrowForward className="up" /> */}
          <div
            className={`dropdown-content ${
              activeDropdown !== null ? "active" : ""
            }`}
          >
            <div className="dropdown-container">
              <ul>
                <li>
                  <Link to="/kith/leadership" onClick={toggleMenu}>
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link to="/kith/employment" onClick={toggleMenu}>
                    Employment
                  </Link>
                </li>
                <li>
                  <Link to="/kith/alumni" onClick={toggleMenu}>
                    Alumni
                  </Link>
                </li>
                <li>
                  <Link to="/kith/faqs" onClick={toggleMenu}>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/kith/donate" onClick={toggleMenu}>
                    Donate
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
      <ul className="navbar-links navbar-icons">
        <li className="navbar-item dropdown nav-search">
          <FiSearch
            style={{ color: "#6B7280" }}
            className="navbar-icon-inner"
            onClick={toggleSearchmenu}
          />
          <div
            className={`click-dropdown  ${isSearchmenuOpen ? "active" : ""}`}
          >
            <NavSearchbar />
          </div>
        </li>
        <li className="navbar-item">
          <IoPersonOutline
            className="navbar-icon-inner"
            style={{ color: "#6B7280" }}
          />
        </li>
        <li className="navbar-item">
          <RxHamburgerMenu
            className="hamburger navbar-icon-inner"
            style={{ color: "#6B7280" }}
            onClick={toggleMenu}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
