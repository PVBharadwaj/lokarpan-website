import "./Footer.css";
import { FaAngleDown } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto", // Optional: Add smooth scrolling behavior
    });
  };

  return (
    <>
      <div className="footer-container footer-mobile">
        {/* <hr className="hor-line4" /> */}
        <div className="footer-container-inner">
          <div className="content">
            <div className="icons-footer-list">
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1707625023/Frame_48098098_rag4wi.svg"
                className="lokarpan-logo"
              />
              <div className="icons-container icons-list">
                <Link to="/">
                  <FaFacebook className="footer-icon" />
                </Link>
                <Link to="/">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1710866199/instagram-with-circle-svgrepo-com_whdr2l.svg"
                    className="footer-icon1"
                  />
                </Link>
                <Link to="/">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1710866191/linkedin-round-svgrepo-com_nnnkkd.svg"
                    className="footer-icon1"
                  />
                </Link>
                <Link to="/">
                  <FaMedium className="footer-icon" />
                </Link>
              </div>
            </div>
            <hr className="hor-line3" />
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
                className={`footer-list-items ${
                  openStates.about ? "open" : ""
                }`}
              >
                <li>
                  <Link to="/our-role" onClick={scrollToTop()}>
                    Our Role
                  </Link>
                </li>
                <li>
                  <Link to="/history" onClick={scrollToTop()}>
                    History
                  </Link>
                </li>
                <li>
                  <Link to="/mission" onClick={scrollToTop()}>
                    Mission
                  </Link>
                </li>
                <li>
                  <Link to="/leadership" onClick={scrollToTop()}>
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link to="/career" onClick={scrollToTop()}>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/financials" onClick={scrollToTop()}>
                    Financials
                  </Link>
                </li>
              </ul>
              <hr className="footer-hor-line" />
            </div>
            <div className="mobile-footer-list">
              <ul className="footer-questions-container-1">
                <div className="footer-each-question-1">
                  <input
                    type="checkbox"
                    id="about-lokarpan"
                    name="about-lokarpan"
                    className="footer-input-1"
                  />
                  <label htmlFor="about-lokarpan" className="footer-question-1">
                    About Lokarpan
                  </label>
                  <div className="footer-ans-sec-1">
                    <ul className="footer-faq-answer-1">
                      <li>
                        <Link to="/our-role" onClick={scrollToTop()}>
                          Our Role
                        </Link>
                      </li>
                      <li>
                        <Link to="/history" onClick={scrollToTop()}>
                          History
                        </Link>
                      </li>
                      <li>
                        <Link to="/mission" onClick={scrollToTop()}>
                          Mission
                        </Link>
                      </li>
                      <li>
                        <Link to="/leadership" onClick={scrollToTop()}>
                          Leadership
                        </Link>
                      </li>
                      <li>
                        <Link to="/careers" onClick={scrollToTop()}>
                          Careers
                        </Link>
                      </li>
                      <li>
                        <Link to="/financials" onClick={scrollToTop()}>
                          Financials
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </ul>
            </div>
            <hr className="footer-hor-line" />
            <div className="footer-list">
              <div
                className="footer-list-title"
                onClick={() => toggleList("contact")}
              >
                <h4>Contact Us</h4>
                <FaAngleDown
                  className={`footerArrow ${
                    openStates.contact ? "active" : ""
                  }`}
                />
              </div>

              <ul
                className={`footer-list-items ${
                  openStates.contact ? "open" : ""
                }`}
              >
                <li>
                  <Link to="/" onClick={scrollToTop()}>
                    Get in Touch
                  </Link>
                </li>
                <li>
                  <Link onClick={scrollToTopAndNavigate} to="/newsletter">
                    Newsletter
                  </Link>
                </li>
                <li>
                  <Link to="/sitemap" onClick={scrollToTop()}>
                    Sitemap
                  </Link>
                </li>
              </ul>
              <hr className="footer-hor-line" />
            </div>
            <div className="mobile-footer-list">
              <ul className="footer-questions-container-1">
                <div className="footer-each-question-1">
                  <input
                    type="checkbox"
                    id="contact-us"
                    name="contact-us"
                    className="footer-input-1"
                  />
                  <label htmlFor="contact-us" className="footer-question-1">
                    Contact Us
                  </label>
                  <div className="footer-ans-sec-1">
                    <ul className="footer-faq-answer-1">
                      <li>
                        <Link to="/" onClick={scrollToTop()}>
                          Get in Touch
                        </Link>
                      </li>
                      <li>
                        <Link to="/newsletter" onClick={scrollToTop()}>
                          Newsletter
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </ul>
            </div>
            <hr className="footer-hor-line" />
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
                className={`footer-list-items ${
                  openStates.social ? "open" : ""
                }`}
              >
                <li>
                  <Link to="/" onClick={scrollToTop()}>
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={scrollToTop()}>
                    Blog
                  </Link>
                </li>
              </ul>
              <hr className="footer-hor-line" />
            </div>
            <div className="mobile-footer-list">
              <ul className="footer-questions-container-1">
                <div className="footer-each-question-1">
                  <input
                    type="checkbox"
                    id="social"
                    name="social"
                    className="footer-input-1"
                  />
                  <label htmlFor="social" className="footer-question-1">
                    Social
                  </label>
                  <div className="footer-ans-sec-1">
                    <ul className="footer-faq-answer-1">
                      <li>
                        <Link to="/" onClick={scrollToTop()}>
                          Facebook
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={scrollToTop()}>
                          Blog
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </ul>
            </div>
            <hr className="footer-hor-line" />
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
                  <Link to="/donate" onClick={scrollToTop()}>
                    Donate
                  </Link>
                </li>
                <li>
                  <Link to="/being-a-volunteer" onClick={scrollToTop()}>
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={scrollToTop()}>
                    Our Supporters
                  </Link>
                </li>
              </ul>
              <hr className="footer-hor-line" />
            </div>
            <div className="mobile-footer-list">
              <ul className="footer-questions-container-1">
                <div className="footer-each-question-1">
                  <input
                    type="checkbox"
                    id="contribute"
                    name="contribute"
                    className="footer-input-1"
                  />
                  <label htmlFor="contribute" className="footer-question-1">
                    Contribute
                  </label>
                  <div className="footer-ans-sec-1">
                    <ul className="footer-faq-answer-1">
                      <li>
                        <Link to="/donate" onClick={scrollToTop()}>
                          Donate
                        </Link>
                      </li>
                      <li>
                        <Link to="/being-a-volunteer" onClick={scrollToTop()}>
                          Volunteer
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={scrollToTop()}>
                          Our Supporters
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </ul>
            </div>
            <hr className="footer-hor-line" />
          </div>

          <div className="social-links">
            <div className="policy-text">
              <span>Copyright @ {year} Lokarpan Inc. All right reserved.</span>
              <span className="desktop-footer-last-sec">
                <Link to="/">Privacy Policy</Link>
              </span>
              <span className="desktop-footer-last-sec">
                <Link to="/">Terms of Use</Link>
              </span>
              <span className="mobile-footer-last-sec">
                <Link to="/">Privacy Policy</Link> |{" "}
                <Link to="/">Terms of Use</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
