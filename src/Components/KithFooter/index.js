import "./index.css";
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
    contactUs: false,
    admissions: false,
    helpfulLinks: false,
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
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708862176/Frame_48098090_hvamgv.png"
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
            <div className="address">
              <p>Lokarpan HQ</p>
              <p>V&P Malhausi</p>
              <p>Auariya, U.P</p>
              <p>206255</p>
              <p>India</p>
              <p>Tel:91-00 0000 0000</p>
              <p>Tel:91-00 0000 0000</p>
            </div>
          </div>
          <div className="footer-list">
            <div
              className="footer-list-title"
              onClick={() => toggleList("about")}
            >
              <h4>About </h4>
              <FaAngleDown
                className={`footerArrow ${openStates.about ? "active" : ""}`}
              />
            </div>

            <ul
              className={`footer-list-items ${openStates.about ? "open" : ""}`}
            >
              <li>
                <a href="/">Overview</a>
              </li>
              <li>
                <a href="/">Leadership</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Events</a>
              </li>
            </ul>
            <hr className="footer-hor-line" />
          </div>
          <div className="footer-list">
            <div
              className="footer-list-title"
              onClick={() => toggleList("admissions")}
            >
              <h4>Admissions</h4>
              <FaAngleDown
                className={`footerArrow ${
                  openStates.admissions ? "active" : ""
                }`}
              />
            </div>

            <ul
              className={`footer-list-items ${
                openStates.admissions ? "open" : ""
              }`}
            >
              <li>
                <a href="/">How to ?</a>
              </li>
              <li>
                <a href="/">Online Enrollment</a>
              </li>
              <li>
                <a href="/">Scholorships</a>
              </li>
            </ul>
            <hr className="footer-hor-line" />
          </div>
          <div className="footer-list">
            <div
              className="footer-list-title"
              onClick={() => toggleList("helpfulLinks")}
            >
              <h4>Helpful Links</h4>
              <FaAngleDown
                className={`footerArrow ${
                  openStates.helpfulLinks ? "active" : ""
                }`}
              />
            </div>
            <ul
              className={`footer-list-items ${
                openStates.helpfulLinks ? "open" : ""
              }`}
            >
              <li>
                <a href="/">Donate</a>
              </li>
              <li>
                <a href="/">Employment</a>
              </li>
              <li>
                <a href="/">Alumni</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">Press</a>
              </li>
            </ul>
            <hr className="footer-hor-line" />
          </div>
          <div className="footer-list kith-footer-mobile">
            <div
              className="footer-list-title"
              onClick={() => toggleList("contactUs")}
            >
              <h4>Contact Us</h4>
              <FaAngleDown
                className={`footerArrow ${
                  openStates.contactUs ? "active" : ""
                }`}
              />
            </div>
            <ul
              className={`footer-list-items ${
                openStates.contactUs ? "open" : ""
              }`}
            >
              <li>
                <div className="address-mobile">
                  <p>Lokarpan HQ</p>
                  <p>V&P Malhausi</p>
                  <p>Auariya, U.P</p>
                  <p>206255</p>
                  <p>India</p>
                  <p>Tel:91-00 0000 0000</p>
                  <p>Tel:91-00 0000 0000</p>
                </div>
              </li>
            </ul>
            <hr className="footer-hor-line" />
          </div>

          {/* <div className="footer-list">
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
          </div> */}
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
