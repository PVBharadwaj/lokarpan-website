import React, { useState } from "react";
import "./Navbar.css";
import NavSearchbar from "../NavSearchbar/NavSearchbar";
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  // const [searchdropdown, setSearchdropdown] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleBackClick = () => {
    setActiveDropdown(null);
  };

  // const handleSearchDropdown = () => {
  //   setSearchdropdown(!searchdropdown);
  // }

  return (
    <nav className="navbar">
      <div className="navbar-logo">Lokarpan</div>
        <div class="back" onClick={handleBackClick}>
          <IoIosArrowBack
            className={activeDropdown !== null ? "down active" : "down"}
          />
        </div>

        <ul
          className={`navbar-links navbar-menu ${isMenuOpen ? "active" : ""}`}
        >
          <RxCross2 className="cross" onClick={toggleMenu}/>
          <li className="navbar-item">
            <a href="/">Home</a>
          </li>
          <li className="navbar-item dropdown" onClick={toggleDropdown}>
            <a href="/about">About</a>
            <FaChevronRight className="up" />
            <div
              className={`dropdown-content ${
                activeDropdown !== null ? "active" : ""
              }`}
            >
              <div className="dropdown-container">
                <h4>Explore About</h4>
                <ul>
                  <li>
                    <a href="/our-role">Our Role</a>
                  </li>
                  <li>
                    <a href="/history">History</a>
                  </li>
                  <li>
                    <a href="/our-role">Mission</a>
                  </li>
                  <li>
                    <a href="/leadership">Leadership</a>
                  </li>
                  <li>
                    <a href="/career">Careers</a>
                  </li>
                  <li>
                    <a href="/financials">Financial</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown-container">
                <h4>Quick Links</h4>
                <ul className="quick-links">
                  <li>
                    <a href="/our-role">Alumini</a>
                  </li>
                  <li>
                    <a href="/our-role">Contact</a>
                  </li>
                  <li>
                    <a href="/our-role">Blog</a>
                  </li>
                  <li>
                    <a href="/leadership">Subscribe</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="navbar-item dropdown" onClick={toggleDropdown}>
            <a href="/approach">Education</a>
            <FaChevronRight className="up" />
            <div
              className={`dropdown-content ${
                activeDropdown !== null ? "active" : ""
              }`}
            >
              <div className="dropdown-container">
                <h4>Explore Education</h4>
                <ul>
                  <li>
                    <a href="/approach">Approach</a>
                  </li>
                  <li>
                    <a href="/digital-tool">Digital Tools</a>
                  </li>
                  <li>
                    <a href="/application">Application</a>
                  </li>
                  <li>
                    <a href="/podcasts">Podcast</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown-container">
                <h4>Quick Links</h4>
                <ul className="quick-links">
                  <li>
                    <a href="/impact">Impact</a>
                  </li>
                  <li>
                    <a href="/moonshots">Moonshots</a>
                  </li>
                  <li>
                    <a href="/our-role">Volunteer</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="navbar-item">
            <a href="/fellowship">Fellowship</a>
          </li>
          <li className="navbar-item">
            <a href="/">Kith</a>
          </li>
          <li className="navbar-item dropdown" onClick={toggleDropdown}>
            <a href="/design">Design</a>
            <FaChevronRight className="up" />
            <div
              className={`dropdown-content ${
                activeDropdown !== null ? "active" : ""
              }`}
            >
              <div className="dropdown-container">
                <ul>
                  <li>
                    <a href="/our-role">Projects</a>
                  </li>
                  <li>
                    <a href="/our-role">Design Guidelines</a>
                  </li>
                  <li>
                    <a href="/our-role">Resources</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="navbar-item">
            <a href="/">Health</a>
          </li>
          <li className="navbar-item">
            <a href="/">Environment</a>
          </li>
          <li className="navbar-item">
            <a href="/">Livelihood</a>
          </li>
          <li className="navbar-item dropdown" onClick={toggleDropdown}>
            <a href="/ways-to-give">Support</a>
            <FaChevronRight className="up" />
            <div
              className={`dropdown-content ${
                activeDropdown !== null ? "active" : ""
              }`}
            >
              <div className="dropdown-container">
                <h4>Explore Support</h4>
                <ul>
                  <li>
                    <a href="/why-donate">Why Donate</a>
                  </li>
                  <li>
                    <a href="/being-a-volunteer">Being a Volunteer</a>
                  </li>
                  <li>
                    <a href="/our-supporter">Our Supporters</a>
                  </li>
                  <li>
                    <a href="/ways-to-give">Ways to Give</a>
                  </li>
                  <li>
                    <a href="/donate">Donate Now</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown-container">
                <h4>Quick Links</h4>
                <ul className="quick-links">
                  <li>
                    <a href="/financials">Financials</a>
                  </li>
                  <li>
                    <a href="/our-role">Apply for Fellowship</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <ul className="navbar-links navbar-icons">
          <li className="navbar-item dropdown" onClick={toggleDropdown}>
            <CiSearch className="navbar-icon-inner" />
            <div
              className={`dropdown-content ${
                activeDropdown !== null ? "active" : ""
              }`}
            >
              <NavSearchbar />
            </div>
          </li>
          <li className="navbar-item">
            <IoPersonOutline className="navbar-icon-inner" />
          </li>
          <li className="navbar-item">
            <RxHamburgerMenu className="hamburger navbar-icon-inner" onClick={toggleMenu}/>
          </li>
        </ul>
    </nav>
  );
};

export default Navbar;
