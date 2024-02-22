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
            
            <Link to="/">Overview</Link>
          </li>
          <li className="navbar-item">
            
            <Link to="/">Admissions</Link>
          </li>
         
        
                    {/* .......................... */}
          <li className="navbar-item dropdown" onClick={toggleDropdown}>
            <Link to="/design">Life at School</Link>
            <IoIosArrowForward className="up" />
            <div
              className={`dropdown-content ${
                activeDropdown !== null ? "active" : ""
              }`}
            >
              <div className="dropdown-container">
                <ul>
                  <li>
                    <Link to="/our-role" onClick={toggleMenu}>Campus & Culture</Link>
                  </li>
                  <li>
                    <Link to="/our-role" onClick={toggleMenu}>Committees & Clubs</Link>
                  </li>
                  <li>
                    <Link to="/our-role" onClick={toggleMenu}>Safety & Wellbeing</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li><li className="navbar-item dropdown" onClick={toggleDropdown}>
            <Link to="/design">Information</Link>
            <IoIosArrowForward className="up" />
            <div
              className={`dropdown-content ${
                activeDropdown !== null ? "active" : ""
              }`}
            >
              <div className="dropdown-container">
                <ul>
                  <li>
                    <Link to="/" onClick={toggleMenu}>Leadership</Link>
                  </li>
                  <li>
                    <Link to="/" onClick={toggleMenu}>Employment</Link>
                  </li>
                  <li>
                    <Link to="/" onClick={toggleMenu}>Alumni</Link>
                  </li>
                  <li>
                    <Link to="/" onClick={toggleMenu}>FAQ</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          {/* .......................... */}
         
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
