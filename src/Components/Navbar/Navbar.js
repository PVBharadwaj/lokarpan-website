import React, { useState } from "react";
import { Link } from "react-router-dom"
import "./Navbar.css";
import NavSearchbar from "../NavSearchbar/NavSearchbar";
import { CiSearch } from "react-icons/ci";
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
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMenuOnClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleBackClick = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo"><img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1707625023/Frame_48098098_rag4wi.svg"
              className="lokarpan-logo"
            /></div>
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
            <IoIosArrowForward className="up" />
            <div
              className={`dropdown-content ${
                activeDropdown !== null ? "active" : ""
              }`}
            >
              <div className="dropdown-container">
                <h4>Explore About</h4>
                <ul>
                  <li>
                    <Link to="/our-role" onClick={toggleMenu}>Our Role</Link>
                  </li>
                  <li>
                    <Link to="/history" onClick={toggleMenu}>History</Link>
                  </li>
                  <li>
                    <Link to="/our-role" onClick={toggleMenu}>Mission</Link>
                  </li>
                  <li>
                    <Link to="/leadership" onClick={toggleMenu}>Leadership</Link>
                  </li>
                  <li>
                    <Link to="/career" onClick={toggleMenu}>Careers</Link>
                  </li>
                  <li>
                    <Link to="/financials" onClick={toggleMenu}>Financial</Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown-container">
                <h4>Quick Links</h4>
                <ul className="quick-links">
                  <li>
                    <Link to="/our-role" onClick={toggleMenu}>Alumini</Link>
                  </li>
                  <li>
                    <Link to="/our-role" onClick={toggleMenu}>Contact</Link>
                  </li>
                  <li>
                    <Link to="/our-role" onClick={toggleMenu}>Blog</Link>
                  </li>
                  <li>
                    <Link to="/leadership" onClick={toggleMenu}>Subscribe</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="navbar-item dropdown" onClick={toggleDropdown}>
            <Link to="/approach">Education</Link>
            <IoIosArrowForward className="up" />
            <div
              className={`dropdown-content ${
                activeDropdown !== null ? "active" : ""
              }`}
            >
              <div className="dropdown-container">
                <h4>Explore Education</h4>
                <ul>
                  <li>
                    <Link to="/approach" onClick={toggleMenu}>Approach</Link>
                  </li>
                  <li>
                    <Link to="/digital-tool" onClick={toggleMenu}>Digital Tools</Link>
                  </li>
                  <li>
                    <Link to="/application" onClick={toggleMenu}>Application</Link>
                  </li>
                  <li>
                    <Link to="/podcasts" onClick={toggleMenu}>Podcast</Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown-container">
                <h4>Quick Links</h4>
                <ul className="quick-links">
                  <li>
                    <Link to="/impact" onClick={toggleMenu}>Impact</Link>
                  </li>
                  <li>
                    <Link to="/moonshots" onClick={toggleMenu}>Moonshots</Link>
                  </li>
                  <li>
                    <Link to="/our-role" onClick={toggleMenu}>Volunteer</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="navbar-item">
            <Link to="/fellowship">Fellowship</Link>
          </li>
          <li className="navbar-item">
            <Link to="/kith-overview">Kith</Link>
          </li>
          <li className="navbar-item dropdown" onClick={toggleDropdown}>
            <Link to="/design">Design</Link>
            <IoIosArrowForward className="up" />
            <div
              className={`dropdown-content ${
                activeDropdown !== null ? "active" : ""
              }`}
            >
              <div className="dropdown-container">
                <ul>
                  <li>
                    <Link to="/our-role" onClick={toggleMenu}>Projects</Link>
                  </li>
                  <li>
                    <Link to="/our-role" onClick={toggleMenu}>Design Guidelines</Link>
                  </li>
                  <li>
                    <Link to="/our-role" onClick={toggleMenu}>Resources</Link>
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
            <IoIosArrowForward className="up" />
            <div
              className={`dropdown-content ${
                activeDropdown !== null ? "active" : ""
              }`}
            >
              <div className="dropdown-container">
                <h4>Explore Support</h4>
                <ul>
                  <li>
                    <Link to="/why-donate" onClick={toggleMenu}>Why Donate</Link>
                  </li>
                  <li>
                    <Link to="/being-a-volunteer" onClick={toggleMenu}>Being a Volunteer</Link>
                  </li>
                  <li>
                    <Link to="/our-supporter" onClick={toggleMenu}>Our Supporters</Link>
                  </li>
                  <li>
                    <Link to="/ways-to-give" onClick={toggleMenu}>Ways to Give</Link>
                  </li>
                  <li>
                    <Link to="/donate" onClick={toggleMenu}>Donate Now</Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown-container">
                <h4>Quick Links</h4>
                <ul className="quick-links">
                  <li>
                    <Link to="/financials" onClick={toggleMenu}>Financials</Link>
                  </li>
                  <li>
                    <Link to="/our-role" onClick={toggleMenu}>Apply for Fellowship</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <ul className="navbar-links navbar-icons">
          <li className="navbar-item dropdown nav-search" >
            <CiSearch className="navbar-icon-inner" onClick={toggleSearchmenu} />
            {/* <div
              className={`dropdown-content ${
                activeDropdown !== null ? "active" : ""
              }`}
            > */}
            <div
              className={`click-dropdown  ${
                isSearchmenuOpen ? "active" : ""
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