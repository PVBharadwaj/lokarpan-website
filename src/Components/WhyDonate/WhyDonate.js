import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import SupportSubNav from "../Navbar/SupportSubNav/SupportSubNav";
import "./WhyDonate.css";
import { Link } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";
import { RxFontSize } from "react-icons/rx";

const WhyDonate = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto", // Optional: Add smooth scrolling behavior
    });
  };
  return (
    <>
      <Navbar />
      <SupportSubNav />
      <div className="donate-first-div">
        <h1>Why Donate to Lokarpan?</h1>
        <p>
          We are facing our worst inequity ever. Millions of children in India
          do not have access to quality education. We envision a future where
          each one of these children will have an opportunity to attain an
          excellent education. It is this belief that every child can and must
          attain an excellent education, that drives each one of us at Lokarpan
          to work harder. We do all that we can to support every Fellow with
          training, mentors and resources to help them put children on a
          different life path.
        </p>
      </div>
      <div className="why-donate">
        <div className="donate-card">
          <div className="donate-card-img donate-card-img-1"></div>
          <div className="donate-card-text">
            <h1>Adding years to life and life to years</h1>
            <p>
              Immerse yourself in stories that will challenge your mind and
              capture your heart. Explore new interests and stay on top of
              what’s trending. Our global catalogue features leading voices on
              the topics you care about — from the biggest names to independent
              creators.
            </p>
          </div>
        </div>
        <div className="donate-card donate-second">
          <div className="donate-card-text">
            <h1>Adding years to life and life to years</h1>
            <p>
              Immerse yourself in stories that will challenge your mind and
              capture your heart. Explore new interests and stay on top of
              what’s trending. Our global catalogue features leading voices on
              the topics you care about — from the biggest names to independent
              creators.
            </p>
          </div>
          <div className="donate-card-img donate-card-img-2"></div>
        </div>
        <div className="donate-card">
          <div className="donate-card-img donate-card-img-3"></div>

          <div className="donate-card-text">
            <h1>Adding years to life and life to years</h1>
            <p>
              Immerse yourself in stories that will challenge your mind and
              capture your heart. Explore new interests and stay on top of
              what’s trending. Our global catalogue features leading voices on
              the topics you care about — from the biggest names to independent
              creators.
            </p>
          </div>
        </div>
        <div className="donate-card donate-second">
          <div className="donate-card-text">
            <h1>Adding years to life and life to years</h1>
            <p>
              Immerse yourself in stories that will challenge your mind and
              capture your heart. Explore new interests and stay on top of
              what’s trending. Our global catalogue features leading voices on
              the topics you care about — from the biggest names to independent
              creators.
            </p>
          </div>
          <div className="donate-card-img donate-card-img-4"></div>
        </div>
      </div>
      <div className="whydonate-opp">
        <h1>
          An AI power play: Fueling the next wave of innovation in the energy
          sector
        </h1>
        <div className="hyperlinks">
          <div className="apply-btn orange">
            <div>
              <Link
                to="/donate"
                onClick={scrollToTop}
                className="apply-btn-text-white body-btn"
              >
                Donate
              </Link>
            </div>
          </div>
          <div>
            <Link
              to="/faqs"
              onClick={scrollToTop}
              className="donate-hyperlink"
              href="/faqs"
            >
              FAQ
              <IoIosArrowForward style={{ fontSize: "15px" }} />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WhyDonate;
