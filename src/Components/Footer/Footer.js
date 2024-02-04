import "./Footer.css";
import { FaAngleDown } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import React, { useState } from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  const [openStates, setOpenStates] = useState({
    about: false,
    contact: false,
    social: false,
    contribute: false,
  });

  const toggleList = (listName) => {
    setOpenStates((prevState) => ({
      ...prevState,
      [listName]: !prevState[listName],
    }));
  };

  return (
    <div className="footer-container">
      <div className="footer-container-inner">
        <div className="footer-brand-name">
          <h1>Lokarpan</h1>
        </div>
        <div className="content">
          <div className="footer-list">
            <div
              className="footer-list-title"
              onClick={() => toggleList("about")}
            >
              <h4>About Lokarpan</h4>
              <FaAngleDown
                className={`footerArrow ${openStates.about ? "active" : ""}`}
              />
            </div>

            <ul
              className={`footer-list-items ${openStates.about ? "open" : ""}`}
            >
              <li>
                <a href="/">Our Role</a>
              </li>
              <li>
                <a href="/">History</a>
              </li>
              <li>
                <a href="/">Mission</a>
              </li>
              <li>
                <a href="/">Leadership</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Financials</a>
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <div
              className="footer-list-title"
              onClick={() => toggleList("contact")}
            >
              <h4>Contact Us</h4>
              <FaAngleDown
                className={`footerArrow ${openStates.contact ? "active" : ""}`}
              />
            </div>

            <ul
              className={`footer-list-items ${
                openStates.contact ? "open" : ""
              }`}
            >
              <li>
                <a href="/">Get in Touch</a>
              </li>
              <li>
                <a href="/">Newsletter</a>
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <div
              className="footer-list-title"
              onClick={() => toggleList("social")}
            >
              <h4>Social</h4>
              <FaAngleDown
                className={`footerArrow ${openStates.social ? "active" : ""}`}
              />
            </div>
            <ul
              className={`footer-list-items ${openStates.social ? "open" : ""}`}
            >
              <li>
                <a href="/">Facebook</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <div
              className="footer-list-title"
              onClick={() => toggleList("contribute")}
            >
              <h4>Contribute</h4>
              <FaAngleDown
                className={`footerArrow ${
                  openStates.contribute ? "active" : ""
                }`}
              />
            </div>
            <ul
              className={`footer-list-items ${
                openStates.contribute ? "open" : ""
              }`}
            >
              <li>
                <a href="/">Donate</a>
              </li>
              <li>
                <a href="/">Volunteer</a>
              </li>
              <li>
                <a href="/">Our Supporters</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="social-links">
          <div className="policy-text">
            <span>Copyright @ {year} Lokarpan Inc. All right reserved.</span>
            <span>
              <a href="/">Privacy Policy</a>
            </span>
            <span>
              <a href="/">Terms of Use</a>
            </span>
          </div>

          <div className="icons-container">
            <a href="">
              <FaFacebook className="footer-icon" />
            </a>
            <a href="">
              <FaInstagramSquare className="footer-icon" />
            </a>
            <a href="">
              <FaLinkedin className="footer-icon" />
            </a>
            <a href="">
              <FaMedium className="footer-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
