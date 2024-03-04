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
    <div className="footer-container footer-mobile">
      <div className="footer-container-inner">
        <div className="content">
          <div className="footer-list">
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1707625023/Frame_48098098_rag4wi.svg"
              className="lokarpan-logo"
            />
            <div className="icons-container icons-list">
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
                <a href="/history">History</a>
              </li>
              <li>
                <a href="/mission">Mission</a>
              </li>
              <li>
                <a href="/leadership">Leadership</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/">Financials</a>
              </li>
            </ul>
            <hr className="footer-hor-line" />
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
                <a href="/newsletter">Newsletter</a>
              </li>
            </ul>
            <hr className="footer-hor-line" />
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
            <hr className="footer-hor-line" />
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
            <hr className="footer-hor-line" />
          </div>
        </div>

        <div className="social-links">
          <div className="policy-text">
            <span>Copyright @ {year} Lokarpan Inc. All right reserved.</span>
            <span className="desktop-footer-last-sec">
              <a href="/">Privacy Policy</a>
            </span>
            <span className="desktop-footer-last-sec">
              <a href="/">Terms of Use</a>
            </span>
            <span className="mobile-footer-last-sec">
              <a href="/">Privacy Policy</a> | <a href="/">Terms of Use</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
