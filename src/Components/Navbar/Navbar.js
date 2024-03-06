import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import NavSearchbar from "../NavSearchbar/NavSearchbar";
import { FiSearch } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchmenuOpen, setSearchmenuOpen] = useState(false);

 const closeSearchMenu = () => {
  setSearchmenuOpen(false);
 }


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
          src="https://res.cloudinary.com/digbzwlfx/image/upload/v1707625023/Frame_48098098_rag4wi.svg"
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
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li className="navbar-item dropdown" onClick={toggleDropdown}>
          <Link to="/about" onClick={handleNavlinkClick}>
            About
          </Link>
          {/* <IoIosArrowForward className="up" /> */}
          <div
            className={`dropdown-content ${
              activeDropdown !== null ? "active" : ""
            }`}
          >
            <div className="dropdown-container">
              <h4>Explore About</h4>
              <ul>
                <li>
                  <Link to="/our-role" onClick={toggleMenu}>
                    Our Role
                  </Link>
                </li>
                <li>
                  <Link to="/history" onClick={toggleMenu}>
                    History
                  </Link>
                </li>
                <li>
                  <Link to="/mission" onClick={toggleMenu}>
                    Mission
                  </Link>
                </li>
                <li>
                  <Link to="/leadership" onClick={toggleMenu}>
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link to="/career" onClick={toggleMenu}>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/financials" onClick={toggleMenu}>
                    Financial
                  </Link>
                </li>
              </ul>
            </div>
            <div className="dropdown-container">
              <h4 className="quicklinks-heading">Quick Links</h4>
              <ul className="quick-links">
                <li>
                  <Link to="/alumni" onClick={toggleMenu}>
                    Alumni
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" onClick={toggleMenu}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/our-role" onClick={toggleMenu}>
                    {/*  need to update to in Link  */}
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/leadership" onClick={toggleMenu}>
                    {/*  need to update to in Link  */}
                    Subscribe
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="navbar-item dropdown" onClick={toggleDropdown}>
          <Link to="/approach" onClick={handleNavlinkClick}>
            Education
          </Link>
          {/* <IoIosArrowForward className="up" /> */}
          <div
            className={`dropdown-content ${
              activeDropdown !== null ? "active" : ""
            }`}
          >
            <div className="dropdown-container">
              <h4>Explore Education</h4>
              <ul>
                <li>
                  <Link to="/approach" onClick={toggleMenu}>
                    Approach
                  </Link>
                </li>
                <li>
                  <Link to="/digital-tool" onClick={toggleMenu}>
                    Digital Tools
                  </Link>
                </li>
                <li>
                  <Link to="/application" onClick={toggleMenu}>
                    Application
                  </Link>
                </li>
                <li>
                  <Link to="/podcasts" onClick={toggleMenu}>
                    Podcast
                  </Link>
                </li>
              </ul>
            </div>
            <div className="dropdown-container">
              <h4 className="quicklinks-heading">Quick Links</h4>
              <ul className="quick-links">
                <li>
                  <Link to="/impact" onClick={toggleMenu}>
                    Impact
                  </Link>
                </li>
                <li>
                  <Link to="/moonshots" onClick={toggleMenu}>
                    Moonshots
                  </Link>
                </li>
                <li>
                  <Link to="/our-role" onClick={toggleMenu}>
                    {/*  need to update to in Link  */}
                    Volunteer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="navbar-item">
          <Link to="/fellowship" onClick={toggleMenu}>
            Fellowship
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/kith/overview" onClick={toggleMenu}>
            Kith
          </Link>
        </li>
        <li className="navbar-item dropdown" onClick={toggleDropdown}>
          <Link to="/design" onClick={handleNavlinkClick}>
            Design
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
                  <Link to="/our-role" onClick={toggleMenu}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/our-role" onClick={toggleMenu}>
                    Design Guidelines
                  </Link>
                </li>
                <li>
                  <Link to="/our-role" onClick={toggleMenu}>
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="navbar-item">
          <Link to="/health" onClick={toggleMenu}>
            Health
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/environment" onClick={toggleMenu}>
            Environment
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/livelihood" onClick={toggleMenu}>
            Livelihood
          </Link>
        </li>
        <li className="navbar-item dropdown" onClick={toggleDropdown}>
          <Link to="/ways-to-give" onClick={handleNavlinkClick}>
            Support
          </Link>
          {/* <IoIosArrowForward className="up" /> */}
          <div
            className={`dropdown-content ${
              activeDropdown !== null ? "active" : ""
            }`}
          >
            <div className="dropdown-container">
              <h4>Explore Support</h4>
              <ul>
                <li>
                  <Link to="/why-donate" onClick={toggleMenu}>
                    Why Donate
                  </Link>
                </li>
                <li>
                  <Link to="/being-a-volunteer" onClick={toggleMenu}>
                    Being a Volunteer
                  </Link>
                </li>
                <li>
                  <Link to="/our-supporter" onClick={toggleMenu}>
                    Our Supporters
                  </Link>
                </li>
                <li>
                  <Link to="/ways-to-give" onClick={toggleMenu}>
                    Ways to Give
                  </Link>
                </li>
                <li>
                  <Link to="/donate" onClick={toggleMenu}>
                    Donate Now
                  </Link>
                </li>
              </ul>
            </div>
            <div className="dropdown-container">
              <h4 className="quicklinks-heading">Quick Links</h4>
              <ul className="quick-links">
                <li>
                  <Link to="/financials" onClick={toggleMenu}>
                    Financials
                  </Link>
                </li>
                <li>
                  <Link to="/fellowship" onClick={toggleMenu}>
                    Apply for Fellowship
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
      <ul className="navbar-links navbar-icons">
        <li 
          className="navbar-item dropdown navbar-icon nav-search"
          onMouseLeave={closeSearchMenu}
        >
          <FiSearch
            style={{ color: "#6B7280", height: "100%" }}
            className="navbar-icon-inner"
            onClick={toggleSearchmenu}
          />
          <div
            className={`click-dropdown click-dropdown-search  ${isSearchmenuOpen ? "active" : ""}`}
          >
            <RxCross2 
              className="cross"
              onClick={toggleSearchmenu}
              style={{ fontSize: "20px" }}
            />
            <NavSearchbar />
          </div>
        </li>
        <li className="navbar-item navbar-icon">
          <IoPersonOutline
            className="navbar-icon-inner"
            style={{ color: "#6B7280", height: "100%" }}
          />
        </li>
        <li className="navbar-item">
          <RxHamburgerMenu
            className="hamburger navbar-icon-inner"
            style={{ color: "#6B7280", height: "100%" }}
            onClick={toggleMenu}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
