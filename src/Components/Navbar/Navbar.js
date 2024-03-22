import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FiSearch } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
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
  const [activeIconDropdown, setActiveIconDropdown] = useState(null)
  const [isSearchmenuOpen, setSearchmenuOpen] = useState(false);
  const [isProfilemenuOpen, setProfilemenuOpen] = useState(false);
  const [queryText, setqueryText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchState, setSearchLength] = useState(false);
  const timeoutRef = useRef(null);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setSearchmenuOpen(false);
      setProfilemenuOpen(false);
    }
  });

  const ToggleSearchmenu = () => {
    if(isSearchmenuOpen) {
      setSearchmenuOpen(false)
    } else {
      clearTimeout(timeoutRef.current);
      setSearchmenuOpen(true)
      setqueryText("");
    }
  };

  const OpenSearchmenu = () => {
    clearTimeout(timeoutRef.current);
    setSearchmenuOpen(true)
    setqueryText("");
  };

  const ToggleProfilemenu = () => {
    if(isProfilemenuOpen) {
      setProfilemenuOpen(false)
    } else {
      clearTimeout(timeoutRef.current);
      setProfilemenuOpen(true)
    }
  };

  const OpenProfilemenu = () => {
    clearTimeout(timeoutRef.current);
    setProfilemenuOpen(true)
  };

  const closeSearchMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setSearchmenuOpen(false);
    }, 500); 
  };

  const closeProfileMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setProfilemenuOpen(false);
    }, 500);
  };

  const toggleMenu = () => {
    setActiveDropdown(null);
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavlinkClick = (e) => {
    if (window.innerWidth <= 922) {
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
        <li className="navbar-item mobile-padding-left">
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li
          className="navbar-item mobile-padding-left dropdown"
          onClick={toggleDropdown}
        >
          <Link to="/about" onClick={handleNavlinkClick}>
            About
          </Link>
          <div
            className={`dropdown-content ${
              activeDropdown !== null ? "active" : ""
            }`}
          >
            <div className="dropdown-content-inner">
              <div className="dropdown-container">
                <h1 className="nav-heading">Explore About</h1>

                <ul className="list-item-container">
                  <li className="mobile-explore">
                    <Link to="/about" onClick={toggleMenu}>
                      Explore About
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={toggleMenu}>
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
                      Financials
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown-container">
                <h1 className="quicklinks-heading">Quick Links</h1>
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
          </div>
        </li>
        <li
          className="navbar-item mobile-padding-left dropdown"
          onClick={toggleDropdown}
        >
          <Link to="/approach" onClick={handleNavlinkClick}>
            Education
          </Link>
          <div
            className={`dropdown-content ${
              activeDropdown !== null ? "active" : ""
            }`}
          >
            <div className="dropdown-content-inner">
              <div className="dropdown-container">
                <h1 className="nav-heading">Explore Education</h1>
                <ul className="list-item-container">
                  <li className="mobile-explore">
                    <Link to="/approach" onClick={toggleMenu}>
                      Explore Education
                    </Link>
                  </li>
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
                <h1 className="quicklinks-heading">Quick Links</h1>
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
          </div>
        </li>
        <li className="navbar-item mobile-padding-left">
          <Link to="/fellowship" onClick={toggleMenu}>
            Fellowship
          </Link>
        </li>
        <li className="navbar-item mobile-padding-left">
          <Link to="/kith/overview" onClick={toggleMenu}>
            Kith
          </Link>
        </li>
        <li
          className="navbar-item mobile-padding-left dropdown"
          onClick={toggleDropdown}
        >
          <Link to="/design" onClick={handleNavlinkClick}>
            Design
          </Link>
          <div
            className={`dropdown-content ${
              activeDropdown !== null ? "active" : ""
            }`}
          >
            <div className="dropdown-content-inner">
              <div className="dropdown-container">
                <h1 className="nav-heading">Explore Design</h1>
                <ul className="list-item-container">
                  <li className="mobile-explore">
                    <Link to="/designlist" onClick={toggleMenu}>
                      Explore Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/designlist" onClick={toggleMenu}>
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link to="/guideline" onClick={toggleMenu}>
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
          </div>
        </li>
        <li className="navbar-item mobile-padding-left">
          <Link to="/health" onClick={toggleMenu}>
            Health
          </Link>
        </li>
        <li className="navbar-item mobile-padding-left">
          <Link to="/environment" onClick={toggleMenu}>
            Environment
          </Link>
        </li>
        <li className="navbar-item mobile-padding-left">
          <Link to="/livelihood" onClick={toggleMenu}>
            Livelihood
          </Link>
        </li>
        <li
          className="navbar-item mobile-padding-left dropdown"
          onClick={toggleDropdown}
        >
          <Link to="/ways-to-give" onClick={handleNavlinkClick}>
            Support
          </Link>
          <div
            className={`dropdown-content ${
              activeDropdown !== null ? "active" : ""
            }`}
          >
            <div className="dropdown-content-inner">
              <div className="dropdown-container">
                <h1 className="nav-heading">Explore Donate</h1>
                <ul className="list-item-container">
                  <li className="mobile-explore">
                    <Link to="/why-donate" onClick={toggleMenu}>
                      Explore Donate
                    </Link>
                  </li>
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
                <h1 className="quicklinks-heading">Quick Links</h1>
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
            onClick={ToggleSearchmenu}
          />
          <div
            className={`click-dropdown click-dropdown-search  ${
              isSearchmenuOpen ? "active" : ""
            }`}
            onMouseEnter={OpenSearchmenu}
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
                    <>
                      <h4>Suggested Links</h4>
                      <ul>
                        {searchResults.map((result) => (
                          <li key={result.item.id}>
                            <a href={result.item.link}>{result.item.name}</a>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </li>
        <li 
          className="navbar-item dropdown navbar-icon nav-search"
          onMouseLeave={closeProfileMenu}
        >
          <IoPersonOutline
            className="navbar-icon-inner"
            style={{ color: "#6B7280", height: "100%" }}
            onClick={ToggleProfilemenu}
          />
          <div 
            className={`click-dropdown click-dropdown-search  ${
            isProfilemenuOpen ? "active" : ""
            }`}
            onMouseEnter={OpenProfilemenu}
          >
            <div className="click-dropdown-inner nav-profile-click-dropdown">
              <RxCross2
                className="cross"
                onClick={closeProfileMenu}
                style={{ fontSize: "20px" }}
              />
              <div className="nav-profile">
                <h1 className="nav-profile-heading">LOKARPAN</h1>
                <div className="nav-profile-inner">
                  <div className="nav-profile-inner-in">
                    <span className=" nav-profile-in-left"><img className="nav-icon-profile" src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1710945989/d8ed05d14bd539cdbc1ed938ac2ffbb5-sticker_2_elml8g.png" /></span>
                    Staff
                  </div>
                  <div className="nav-profile-inner-in">
                    <span className="nav-profile-in-right"><img className="nav-icon-profile" src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1710945990/fa3df21e576434e675e8236c5903f98e-sticker_1_cqn6t3.png" /></span>
                    Student
                  </div>
                </div>
              </div>
            </div>
          </div>
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
