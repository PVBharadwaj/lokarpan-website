import { Component } from "react";
import { Link } from "react-router-dom";
import EducationSubNav from "../Navbar/EducationSubNav";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { IoHomeOutline } from "react-icons/io5";
import "./index.css";

class DigitalTool extends Component {
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto", // Optional: Add smooth scrolling behavior
    });
  };
  render() {
    return (
      <>
        <Navbar />
        <EducationSubNav />

        <div className="digital-tool-container">
          <div className="digital-tool-head-cont">
            {/* <h1>Work as One.Or one thousand</h1>
            <p>
              Through Google.org Impact Challenges, we award nonprofits and
              social enterprises with support to help bring their ideas to life.
            </p> */}
            <img src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708782682/Group_1765_cvdn5q.png" />
          </div>
          <div className="digital-tool-img-sec">
            <h1>Heading</h1>
            <div className="img-cont">
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708784180/Group_1756_wixb2m.png"
                className="img-cont-img"
              />
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708784166/Group_1757_bkkh55.png"
                className="img-cont-img"
              />
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708784153/Group_1759_cdfdoy.png"
                className="img-cont-img"
              />
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708784144/Group_1762_qugdzn.png"
                className="img-cont-img"
              />
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708784137/Group_1761_xkcnfs.png"
                className="img-cont-img"
              />
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708784129/Group_1755_sfm8yd.png"
                className="img-cont-img"
              />
            </div>
          </div>
          <div className="browse-cont">
            <div>
              <h2>
                Browse accessories or find new colours to go with your devices.
              </h2>
            </div>
            <div>
              <p>
                Lokarpan is a non-profit organization registered under the
                Societies Registration Act 1860. Lokarpan is registered u/s 12A
                of the Income Tax Act, 1961. Lokarpan is registered under the
                Foreign Contributions (Regulation) Act FCRA 136550133, and
                renewed dated 01.11.2016 for the receipt of foreign donations.
                Lokarpan assumes no obligation to update any forward looking
                statement or information, which speak as of their respective
                dates.
              </p>
            </div>
          </div>
          <div className="temp-container">
            <div className="temp-each-cont">
              <div className="icon">
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708784180/Group_1756_wixb2m.png"
                  className="dig-icon-img"
                />
              </div>
              <h4>Temperature & Humanity</h4>
              <p>
                Model S Plaid has the quickest acceleration of any vehicle in
                production. Updated battery architecture for all Model S trims
                enables back-to-back track runs without performance degradation.
                Chat with a Tesla Advisor to learn more about Model S or
                schedule a demo drive today.
              </p>
            </div>
            <div className="temp-each-cont">
              <div className="icon">
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708784166/Group_1757_bkkh55.png"
                  className="dig-icon-img"
                />
              </div>
              <h4>Temperature & Humanity</h4>
              <p>
                Model S Plaid has the quickest acceleration of any vehicle in
                production. Updated battery architecture for all Model S trims
                enables back-to-back track runs without performance degradation.
                Chat with a Tesla Advisor to learn more about Model S or
                schedule a demo drive today.
              </p>
            </div>
            <div className="temp-each-cont">
              <div className="icon">
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708784153/Group_1759_cdfdoy.png"
                  className="dig-icon-img"
                />
              </div>
              <h4>Temperature & Humanity</h4>
              <p>
                Model S Plaid has the quickest acceleration of any vehicle in
                production. Updated battery architecture for all Model S trims
                enables back-to-back track runs without performance degradation.
                Chat with a Tesla Advisor to learn more about Model S or
                schedule a demo drive today.
              </p>
            </div>
            <div className="temp-each-cont">
              <div className="icon">
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708784144/Group_1762_qugdzn.png"
                  className="dig-icon-img"
                />
              </div>
              <h4>Temperature & Humanity</h4>
              <p>
                Model S Plaid has the quickest acceleration of any vehicle in
                production. Updated battery architecture for all Model S trims
                enables back-to-back track runs without performance degradation.
                Chat with a Tesla Advisor to learn more about Model S or
                schedule a demo drive today.
              </p>
            </div>
            <div className="temp-each-cont">
              <div className="icon">
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708784137/Group_1761_xkcnfs.png"
                  className="dig-icon-img"
                />
              </div>
              <h4>Temperature & Humanity</h4>
              <p>
                Model S Plaid has the quickest acceleration of any vehicle in
                production. Updated battery architecture for all Model S trims
                enables back-to-back track runs without performance degradation.
                Chat with a Tesla Advisor to learn more about Model S or
                schedule a demo drive today.
              </p>
            </div>
            <div className="temp-each-cont">
              <div className="icon">
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708784129/Group_1755_sfm8yd.png"
                  className="dig-icon-img"
                />
              </div>
              <h4>Temperature & Humanity</h4>
              <p>
                Model S Plaid has the quickest acceleration of any vehicle in
                production. Updated battery architecture for all Model S trims
                enables back-to-back track runs without performance degradation.
                Chat with a Tesla Advisor to learn more about Model S or
                schedule a demo drive today.
              </p>
            </div>
          </div>
          <div className="digital-tool-last-sec">
            <h3>
              Browse accessories or find new colours to go with your devices.
            </h3>
            <p>
              Lokarpan is a non-profit organization registered under the
              Societies Registration Act 1860. Lokarpan is registered u/s 12A of
              the Income Tax Act, 1961. Lokarpan is registered under the Foreign
              Contributions (Regulation) Act FCRA 136550133, and renewed dated
              01.11.2016 for the receipt of foreign donations. Lokarpan assumes
              no obligation to update any forward looking statement or
              information, which speak as of their respective dates.
            </p>
            <div className="digital-tool-btn-cont">
              <button className="digital-tool-btn">Volunteer</button>
              <Link
                to="/donate"
                style={{ textDecoration: "none" }}
                onClick={this.scrollToTop}
              >
                <button className="digital-tool-btn donate-orange">
                  Donate
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default DigitalTool;
