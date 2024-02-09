import React, { useState } from "react";
import { Link } from "react-router-dom"
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
            
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item dropdown" onClick={toggleDropdown}>
            <Link to="/about">About</Link>
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
                    <Link to="/our-role">Our Role</Link>
                  </li>
                  <li>
                    <Link to="/history">History</Link>
                  </li>
                  <li>
                    <Link to="/our-role">Mission</Link>
                  </li>
                  <li>
                    <Link to="/leadership">Leadership</Link>
                  </li>
                  <li>
                    <Link to="/career">Careers</Link>
                  </li>
                  <li>
                    <Link to="/financials">Financial</Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown-container">
                <h4>Quick Links</h4>
                <ul className="quick-links">
                  <li>
                    <Link to="/our-role">Alumini</Link>
                  </li>
                  <li>
                    <Link to="/our-role">Contact</Link>
                  </li>
                  <li>
                    <Link to="/our-role">Blog</Link>
                  </li>
                  <li>
                    <Link to="/leadership">Subscribe</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="navbar-item dropdown" onClick={toggleDropdown}>
            <Link to="/approach">Education</Link>
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
                    <Link to="/approach">Approach</Link>
                  </li>
                  <li>
                    <Link to="/digital-tool">Digital Tools</Link>
                  </li>
                  <li>
                    <Link to="/application">Application</Link>
                  </li>
                  <li>
                    <Link to="/podcasts">Podcast</Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown-container">
                <h4>Quick Links</h4>
                <ul className="quick-links">
                  <li>
                    <Link to="/impact">Impact</Link>
                  </li>
                  <li>
                    <Link to="/moonshots">Moonshots</Link>
                  </li>
                  <li>
                    <Link to="/our-role">Volunteer</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="navbar-item">
            <Link to="/fellowship">Fellowship</Link>
          </li>
          <li className="navbar-item">
            <Link to="/">Kith</Link>
          </li>
          <li className="navbar-item dropdown" onClick={toggleDropdown}>
            <Link to="/design">Design</Link>
            <FaChevronRight className="up" />
            <div
              className={`dropdown-content ${
                activeDropdown !== null ? "active" : ""
              }`}
            >
              <div className="dropdown-container">
                <ul>
                  <li>
                    <Link to="/our-role">Projects</Link>
                  </li>
                  <li>
                    <Link to="/our-role">Design Guidelines</Link>
                  </li>
                  <li>
                    <Link to="/our-role">Resources</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="navbar-item">
            <Link to="/">Health</Link>
          </li>
          <li className="navbar-item">
            <Link to="/">Environment</Link>
          </li>
          <li className="navbar-item">
            <Link to="/">Livelihood</Link>
          </li>
          <li className="navbar-item dropdown" onClick={toggleDropdown}>
            <Link to="/ways-to-give">Support</Link>
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
                    <Link to="/why-donate">Why Donate</Link>
                  </li>
                  <li>
                    <Link to="/being-a-volunteer">Being a Volunteer</Link>
                  </li>
                  <li>
                    <Link to="/our-supporter">Our Supporters</Link>
                  </li>
                  <li>
                    <Link to="/ways-to-give">Ways to Give</Link>
                  </li>
                  <li>
                    <Link to="/donate">Donate Now</Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown-container">
                <h4>Quick Links</h4>
                <ul className="quick-links">
                  <li>
                    <Link to="/financials">Financials</Link>
                  </li>
                  <li>
                    <Link to="/our-role">Apply for Fellowship</Link>
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
