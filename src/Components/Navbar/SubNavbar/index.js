import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import React, {useState} from "react";
import "./index.css";
import "./../Navbar.css";

const SubNavbar = () => {

  const [isNavmenuOpen, setNavmenuOpen] = useState(null);
  const toggleNavmenu = () => {
    setNavmenuOpen(!isNavmenuOpen);
  };

  return (
    <nav className="SecNavbar">
      <div className="navbar-logo">About</div>
      <div className="navbar-rest">
      <ul className="navbar-links">
          <li className="navbar-item desktop-only">
            <Link to="/staff">History</Link>
          </li>
          <li className="navbar-item desktop-only">
            <Link to="/educators">Mission</Link>
          </li>
          <li className="navbar-item dropdown">
            <p onClick={toggleNavmenu}>
              <span className="desktop-only">Browse All</span>
              <BsChevronDown className="react-icon" />
            </p>
            <div
              className={` navbar-links click-dropdown ${
                isNavmenuOpen ? "active" : ""
              }`}
            >
              <div className="dropdown-container">
                <h4>Explore About</h4>
                <ul>
                <li className="navbar-item desktop-only">
                  <Link to="/staff">History</Link>
                </li>
                <li className="navbar-item desktop-only">
                  <Link to="/educators">Mission</Link>
                </li>
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
            </div>
          </li>
        </ul>
      </div>
        
    </nav>
  );
};

export default SubNavbar;
