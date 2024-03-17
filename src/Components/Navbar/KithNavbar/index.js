import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { CiSearch } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import Fuse from "fuse.js";


const items = [
  {
    id: 1,
    link: "/staff",
    img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
    name: "Dummy",
    position: "Classroom Educator",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
    hyperlink1: <i class="bi bi-facebook"></i>,
    hyperlink2: <i class="bi bi-house-door"></i>,
  },
  {
    id: 2,
    link: "/staff",
    img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
    name: "test",
    position: "Classroom Educator",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
    hyperlink1: <i class="bi bi-facebook"></i>,
    hyperlink2: <i class="bi bi-house-door"></i>,
  },
  {
    id: 3,
    link: "/staff",
    img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
    name: "example",
    position: "Classroom Educator",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
    hyperlink1: <i class="bi bi-facebook"></i>,
    hyperlink2: <i class="bi bi-house-door"></i>,
  },
  {
    id: 4,
    link: "/staff",
    img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
    name: "person",
    position: "Classroom Educator",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
    hyperlink1: <i class="bi bi-facebook"></i>,
    hyperlink2: <i class="bi bi-house-door"></i>,
  },
  {
    id: 5,
    link: "/staff",
    img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
    name: "pupil",
    position: "Classroom Educator",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
    hyperlink1: <i class="bi bi-facebook"></i>,
    hyperlink2: <i class="bi bi-house-door"></i>,
  },
  {
    id: 6,
    link: "/staff",
    img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
    name: "people",
    position: "Classroom Educator",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
    hyperlink1: <i class="bi bi-facebook"></i>,
    hyperlink2: <i class="bi bi-house-door"></i>,
  },
  {
    id: 7,
    link: "/staff",
    img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
    name: "member",
    position: "Classroom Educator",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
    hyperlink1: <i class="bi bi-facebook"></i>,
    hyperlink2: <i class="bi bi-house-door"></i>,
  },
  {
    id: 8,
    link: "/staff",
    img: "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png",
    name: "item",
    position: "Classroom Educator",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat vero nemo accusamus, eum optio",
    hyperlink1: <i class="bi bi-facebook"></i>,
    hyperlink2: <i class="bi bi-house-door"></i>,
  },
];

const fuseOptions = {
  keys: ["name", "position", "description"],
  includeScore: true,
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchmenuOpen, setSearchmenuOpen] = useState(false);
  const [queryText, setqueryText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchState, setSearchLength] = useState(false);

  const OpenSearchmenu = () => {
    if(isSearchmenuOpen) {
      setSearchmenuOpen(false)
    } else {
      setSearchmenuOpen(true)
      setqueryText("");
    }
  };

  const closeSearchMenu = () => {
    setSearchmenuOpen(false);
  }

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        setSearchmenuOpen(false);
    }
  })

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

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setqueryText(value);

    const fuse = new Fuse(items, fuseOptions);
    const results = fuse.search(value);
    if (results.length > 0) {
      setSearchLength(true);
    }
    setSearchResults(results);
  };

  return (
    <nav className="global-nav">
      <div className="navbar">
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
          <li className="navbar-item mobile-padding-left">
            <Link to="/kith/overview" onClick={toggleMenu}>
              Overview
            </Link>
          </li>
          <li
            className="navbar-item mobile-padding-left dropdown"
            onClick={toggleDropdown}
          >
            <Link to="/kith/admission" onClick={handleNavlinkClick}>
              Admission
            </Link>
            {/* <IoIosArrowForward className="up" /> */}
            <div
              className={`dropdown-content ${
                activeDropdown !== null ? "active" : ""
              }`}
            >
              <div className="dropdown-content-inner">
                <div className="dropdown-container">
                  <ul className="list-item-container">
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
            </div>
          </li>
          <li
            className="navbar-item mobile-padding-left dropdown"
            onClick={toggleDropdown}
          >
            <Link to="/kith/life-at-school" onClick={handleNavlinkClick}>
              Life at School
            </Link>
            {/* <IoIosArrowForward className="up" /> */}
            <div
              className={`dropdown-content ${
                activeDropdown !== null ? "active" : ""
              }`}
            >
              <div className="dropdown-content-inner">
                <div className="dropdown-container">
                  <ul className="list-item-container">
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
            </div>
          </li>
          <li
            className="navbar-item mobile-padding-left dropdown"
            onClick={toggleDropdown}
          >
            <Link to="/kith/information" onClick={handleNavlinkClick}>
              Information
            </Link>
            <div
              className={`dropdown-content ${
                activeDropdown !== null ? "active" : ""
              }`}
            >
              <div className="dropdown-content-inner">
                <div className="dropdown-container">
                  <ul className="list-item-container">
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
            </div>
          </li>
        </ul>
        <ul className="navbar-links navbar-icons">
          <li
            className="navbar-item dropdown navbar-icon nav-search"
            onMouseLeave={closeSearchMenu}
          >
            {/* <div className="dummy-search"></div> */}
            <FiSearch
              style={{ color: "#6B7280", height: "100%" }}
              className="navbar-icon-inner"
              onClick={OpenSearchmenu}
            />
            <div
              className={`click-dropdown click-dropdown-search  ${
                isSearchmenuOpen ? "active" : ""
              }`}
            >
              <div className="click-dropdown-inner">
                <div className="nav-searchbar">
                  <RxCross2
                    className="cross"
                    onClick={closeSearchMenu}
                    style={{ fontSize: "20px" }}
                  />
                  <div className="nav-form">
                    <CiSearch className="react-icon size-80" />
                      <input
                        className="nav-form-control text-input"
                        type="text"
                        placeholder="Search..."
                        value={queryText}
                        onChange={handleSearchChange}
                        ref={(input) => {
                          if (input) {
                            input.focus();
                          }
                        }}
                      />
                  </div>
                  <div className="search-quick-links">
                    {queryText === "" ? (
                      <div>
                        <h4>Quick Links</h4>
                        <ul className="quick-links">
                          <li>
                            <Link to="/history">History</Link>
                          </li>
                          <li>
                            <Link to="/moonshots">Careers</Link>
                          </li>
                          <li>
                            <Link to="/our-role">Blog</Link>
                          </li>
                        </ul>
                      </div>
                    ) : searchResults.length === 0 ? (
                      "No results found"
                    ) : (
                      searchResults.map((result) => (
                        <ul>
                          <li key={result.item.id}>
                            {" "}
                            <a href={result.item.link}>{result.item.name}</a>
                          </li>
                        </ul>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="navbar-item navbar-icon">
            <IoPersonOutline
              className="navbar-icon-inner"
              style={{ color: "#6B7280", height: "100%" }}
            />
          </li>
          <li className="navbar-item hamburger-item">
            <RxHamburgerMenu
              className="hamburger navbar-icon-inner"
              style={{ color: "#6B7280", height: "100%" }}
              onClick={toggleMenu}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
