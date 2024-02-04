import { Component } from "react";
import ContactSubNav from "../Navbar/ContactSubNav";
import "./index.css";

class ContactUs extends Component {
  state = { active: "General" };

  updateActive = (event) => {
    console.log(event);
    this.setState({ active: event.target.value });
  };
  render() {
    const { active } = this.state;
    const { isDropdownVisible } = this.props;
    return (
      <>
        <ContactSubNav isDropdownVisible={isDropdownVisible} />

        <div className="contact-us-container">
          <div className="contact-us-top-section">
            <div className="contact-sec">
              <h1 className="font64">Contact Us</h1>
              <p className="font24">
                Thank you for visiting our website. Help us connect you with the
                right person.
              </p>
            </div>
            <div className="btn-section">
              <button
                className={
                  active === "General"
                    ? "contact-each-ele active"
                    : "contact-each-ele"
                }
                value="General"
                onClick={this.updateActive}
              >
                General
              </button>
              <button
                className={
                  active === "Press"
                    ? "contact-each-ele active"
                    : "contact-each-ele"
                }
                value="Press"
                onClick={this.updateActive}
              >
                Press
              </button>
            </div>
          </div>
          {active === "General" && (
            <div className="inquiries-sec">
              <h1 className="font48">General Queries</h1>
              <div className="inquiries-below-section">
                <div>
                  <p className="font24-left">Phone</p>
                  <p className="font24-left">0000-0000-0000</p>
                </div>
                <div>
                  <p className="font24-left">Email</p>
                  <p className="font24-left">support@lokarpan.com</p>
                </div>
              </div>
            </div>
          )}
          {active === "Press" && (
            <div className="inquiries-sec">
              <h1 className="font48">Press</h1>
              <div className="inquiries-below-section">
                <div>
                  <p className="font24-left">Phone</p>
                  <p className="font24-left">0000-0000-0000</p>
                </div>
                <div>
                  <p className="font24-left">Email</p>
                  <p className="font24-left">support@lokarpan.com</p>
                </div>
              </div>
            </div>
          )}
          <div className="maps-section">
            <h1 className="font48">Maps & Directions</h1>
            <div className="maps-below-section">
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1706005062/Rectangle_1899_etymet.png"
                className="img"
              />
              <div className="maps-below-right-sec">
                <h3 className="font24-left">Address</h3>
                <p className="font16">Lokarpan HQ</p>
                <p className="font16-normal">V&P Malhausi</p>
                <p className="font16-normal">Auariya, UP 206255</p>
                <p className="font16-normal">India</p>
                <a>Directions</a>
                <h3 className="font24-left">How to access</h3>
                <p>
                  The Apple Store faces Union Square. Parking: Union Square
                  Garage, accessed from Post or Geary. Public Transit: Bart to
                  Powell St. ; use Stockton exit. Light Rail F line to Market &
                  4th. Powell St cable cars to Post St. Multiple SF MTA bus
                  lines stop in the area.
                </p>
              </div>
            </div>
          </div>
          <div className="contact-last-section">
            <h1 className="font64-left">In case you missed anything</h1>
            <p className="font48-left">Resources</p>
            <ul className="list">
              <li className="each-item">
                <p className="font28">Donate</p>
                <p>
                  Visit our <a href="#">Support</a> Page to find how can help
                </p>
              </li>
              <li className="each-item">
                <p className="font28">LeaderShip</p>
                <p>
                  Visit our <a href="#">LeaderShip</a> to ...
                </p>
              </li>
              <li className="each-item">
                <p className="font28">Alumni</p>
                <p>
                  Visit our <a href="#">Alumni Page</a> to ...
                </p>
              </li>
              <li className="each-item">
                <p className="font28">Careers</p>
                <p>
                  Visit our <a href="#">Careers Page</a> to ...
                </p>
              </li>
              <li className="each-item">
                <p className="font28">Financial Info</p>
                <p>
                  Visit our <a href="#">Financial Info </a> to ...
                </p>
              </li>
              <li className="each-item">
                <p className="font28">Careers</p>
                <p>
                  Visit our <a href="#">Careers Page</a> to ...
                </p>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default ContactUs;
