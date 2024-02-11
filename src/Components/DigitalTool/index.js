import { Component } from "react";
import EducationSubNav from "../Navbar/EducationSubNav";
import { IoHomeOutline } from "react-icons/io5";
import "./index.css";

class DigitalTool extends Component {
  render() {
    return (
      <>
        <EducationSubNav />

        <div className="digital-tool-container">
          <div className="digital-tool-head-cont">
            <h1>Work as One.Or one thousand</h1>
            <p>
              Through Google.org Impact Challenges, we award nonprofits and
              social enterprises with support to help bring their ideas to life.
            </p>
          </div>
          <div className="digital-tool-img-sec">
            <h1>Heading</h1>
            <div className="img-cont">
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                className="img-cont-img"
              />
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                className="img-cont-img"
              />
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                className="img-cont-img"
              />
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                className="img-cont-img"
              />
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                className="img-cont-img"
              />
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                className="img-cont-img"
              />
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
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
                <IoHomeOutline style={{ fontSize: "30px" }} />
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
                <IoHomeOutline style={{ fontSize: "30px" }} />
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
                <IoHomeOutline style={{ fontSize: "30px" }} />
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
                <IoHomeOutline style={{ fontSize: "30px" }} />
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
                <IoHomeOutline style={{ fontSize: "30px" }} />
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
                <IoHomeOutline style={{ fontSize: "30px" }} />
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
            <h3>Build the future with Lokarpan</h3>
            <p>
              Lokarpan is a small nonprofit with a big dream. Join others
              helping to fight poverty, disease, school parity, and inequity for
              at risk communities.
            </p>
            <div className="digital-tool-btn-cont">
              <button className="digital-tool-btn">Volunteer</button>
              <button className="digital-tool-btn">Donate</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DigitalTool;
