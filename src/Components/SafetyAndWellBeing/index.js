import { Component } from "react";
import "./index.css";

class SafetyAndWellBeing extends Component {
  render() {
    return (
      <div className="safety-wellbeing-container">
        <div className="safety-wellbeing-upper-section">
          <h1 className="safety-font48 safety-space-below">
            Safety & WellBeing
          </h1>
        </div>
        <ul className="safety-upper-section-content">
          <li className="safety-font24">
            We have implemented comprehensive safety measures to protect your
            privacy and personal information.
          </li>
          <li className="safety-font24">
            Our online platforms are secure, and we continuously update our
            systems to maintain a safe digital space.
          </li>
          <li className="safety-font24">
            In all our activities, whether virtual or in person, we adhere to
            guidelines that prioritize the health and safety of our members.
          </li>
        </ul>
        <ul className="safety-upper-section-content">
          <li className="safety-font24">
            Lokarpan is committed to supporting the mental health and wellbeing
            of our members.
          </li>
          <li className="safety-font24">
            Look out for workshops, webinars, and resources focused on mental
            health and self-care. Our community encourages open communication.
          </li>
          <li className="safety-font24">
            If you ever need support, our team and fellow members are here to
            listen and assist.
          </li>
        </ul>
        <div className="safety-last-section">
          <h1 className="safety-font48">Committee & Clubs</h1>
          <div className="safety-last-section-content">
            <div className="safety-last-section-content-left">
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1707807265/Rectangle_1810_lkylax.png"
                className="safety-last-img"
              />
              <ul className="safety-last-section-content-list">
                <li>
                  <b>Program Development Committee:</b> Shape the direction of
                  our programs and initiatives.
                </li>
                <li>
                  <b>Community Outreach Committee:</b> Connect with external
                  partners and extend Lokarpan's reach.
                </li>
                <li>
                  <b>Innovation and Technology Committee:</b> Explore
                  cutting-edge solutions to drive positive change.
                </li>
              </ul>
            </div>
            <div className="safety-last-section-content-right">
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1707807257/Rectangle_1811_sqkv2u.png"
                className="safety-last-img"
              />
              <ul className="safety-last-section-content-list">
                <li>
                  <b>Program Development Committee:</b> Shape the direction of
                  our programs and initiatives.
                </li>
                <li>
                  <b>Community Outreach Committee:</b> Connect with external
                  partners and extend Lokarpan's reach.
                </li>
                <li>
                  <b>Innovation and Technology Committee:</b> Explore
                  cutting-edge solutions to drive positive change.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SafetyAndWellBeing;
