import { Component } from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import FinancialNav from "../Navbar/FinancialSubNav/FinancialNav";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import "./index.css";

class ContactUs extends Component {
  state = { active: "General" };

  updateActive = (event) => {
    console.log(event);
    this.setState({ active: event.target.value });
  };
  render() {
    const { active } = this.state;

    return (
      <>
        <Navbar />
        <FinancialNav
          navbarTitle="Contact"
          navitem1="Get in Touch"
          navitem2="Subscribe"
          link1="/contact-us"
          link2="/subscribe"
        />

        <div className="contact-us-container">
          <div className="contact-us-top-section">
            {/* <img src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708797777/image_322_huxmrs.png" /> */}
            <div className="contact-us-top-sec"></div>
            {/* <div className="contact-sec">
              <h1 className="contact-font64">Contact Us</h1>
              <p className="contact-font24">
                Thank you for visiting our website. Help us connect you with the
                right person.
              </p>
            </div> */}
            {/* <div className="btn-section">
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
            </div> */}
          </div>
          {/* {active === "General" && (
            <div className="inquiries-sec">
              <h1 className="contact-font48">General Queries</h1>
              <div className="inquiries-below-section">
                <div>
                  <p className="contact-font24-left bold">Phone</p>
                  <p className="contact-font24-left">0000-0000-0000</p>
                </div>
                <div>
                  <p className="contact-font24-left bold">Email</p>
                  <p className="contact-font24-left">support@lokarpan.com</p>
                </div>
              </div>
            </div>
          )} */}
          {/* {active === "Press" && (
            <div className="inquiries-sec">
              <h1 className="contact-font48">Press</h1>
              <div className="inquiries-below-section">
                <div>
                  <p className="contact-font24-left bold">Phone</p>
                  <p className="contact-font24-left">0000-0000-0000</p>
                </div>
                <div>
                  <p className="contact-font24-left bold">Email</p>
                  <p className="contact-font24-left">support@lokarpan.com</p>
                </div>
              </div>
            </div>
          )} */}
          {/* <div className="maps-section">
            <h1 className="contact-font48">Maps & Directions</h1>
            <div className="maps-below-section">
              <div className="health-cont-img-div  contact-us-img1"></div>

              <div className="maps-below-right-sec">
                <h3 className="contact-font24-left">Address</h3>
                <p className="contact-font16">Lokarpan HQ</p>
                <p className="contact-font16-normal">V&P Malhausi</p>
                <p className="contact-font16-normal">Auariya, UP 206255</p>
                <p className="contact-font16-normal">India</p>
                <a href="#" className="contact-anchor">
                  Directions
                </a>
                <h3 className="contact-font24-left">How to access</h3>
                <p>
                  The Apple Store faces Union Square. Parking: Union Square
                  Garage, accessed from Post or Geary. Public Transit: Bart to
                  Powell St. ; use Stockton exit. Light Rail F line to Market &
                  4th. Powell St cable cars to Post St. Multiple SF MTA bus
                  lines stop in the area.
                </p>
              </div>
            </div>
          </div> */}
          {/* <div className="contact-last-section">
            <h1 className="contact-font64-left">In case you missed anything</h1>
            <p className="contact-font48-left">Resources</p>
            <ul className="list">
              <li className="each-item">
                <p className="contact-font28">Donate</p>
                <p className="each-item-p">
                  Visit our <a href="#">Support</a> Page to find how can help
                </p>
              </li>
              <li className="each-item">
                <p className="contact-font28">LeaderShip</p>
                <p className="each-item-p">
                  Visit our <a href="#">LeaderShip</a> to ...
                </p>
              </li>
              <li className="each-item">
                <p className="contact-font28">Alumni</p>
                <p className="each-item-p">
                  Visit our <a href="#">Alumni Page</a> to ...
                </p>
              </li>
              <li className="each-item">
                <p className="contact-font28">Careers</p>
                <p className="each-item-p">
                  Visit our <a href="#">Careers Page</a> to ...
                </p>
              </li>
              <li className="each-item">
                <p className="contact-font28">Financial Info</p>
                <p className="each-item-p">
                  Visit our <a href="#">Financial Info </a> to ...
                </p>
              </li>
              <li className="each-item">
                <p className="contact-font28">Careers</p>
                <p className="each-item-p">
                  Visit our <a href="#">Careers Page</a> to ...
                </p>
              </li>
            </ul>
          </div> */}
          <div className="new-contact-sec">
            <h1 className="new-contact-head1">Contact</h1>
            <p className="new-para1">
              Please use the contact information below to connect with us.
            </p>
            <p className="new-para1">
              While it is important to us to be available to our partners,
              potential grantees, and the public, due to the large number of
              emails received, we may be unable to respond directly to your
              inquiry.
            </p>
            <Link to="/contact-us/write-to-us">
              <button className="new-contact-btn">Write to Us</button>
            </Link>
          </div>
          <div className="new-follow-sec">
            <div className="new-f-left">
              <p className="new-f-p">Follow us:</p>
              <div className="new-icons-cont">
                <Link to="/">
                  <FaFacebook
                    className="footer-icon"
                    style={{ color: "black" }}
                  />
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
                  <FaMedium
                    className="footer-icon"
                    style={{ color: "black" }}
                  />
                </Link>
              </div>
            </div>
            <div className="new-f-right">
              <h1 className="new-f-h">Media Queries</h1>
              <p className="new-f-p2">
                Note: If you are a member of the news media, please use the
                phone number or email address below to leave a detailed message.
                Include your name, press affiliation, phone number, questions,
                and deadline.
              </p>
              <p className="new-f-p3">Phone:</p>
              <p className="new-f-p3">Email:</p>
            </div>
          </div>
          {/* <div className="new-last-sec">
            <h1 className="new-last-h">Career Seekers</h1>
            <p className="new-last-p">
              We'd love to have you make a difference with us at Lokarpan.
              Browse our openings now.
            </p>
            <h1 className="new-last-h">Grant Inquiries</h1>
            <p className="new-last-p">
              Please note: the foundation is unable to make grants directly to
              individuals. Visit our Grant Seeker FAQ for more information.
            </p>
            <h1 className="new-last-h">Give with us</h1>
            <p className="new-last-p">
              If you would like to support our work beyond grants, head to our
              Ways to Give page to know more.
            </p>
          </div> */}
          <div className="contact-last-section">
            <h1 className="contact-font64-left">In case you missed anything</h1>
            <p className="contact-font48-left">Resources</p>
            <ul className="list">
              <li className="each-item">
                <p className="contact-font28">Donate</p>
                <p className="each-item-p">
                  Visit our <a href="#">Support</a> Page to find how can help
                </p>
              </li>
              <li className="each-item">
                <p className="contact-font28">LeaderShip</p>
                <p className="each-item-p">
                  Visit our <a href="#">LeaderShip</a> to ...
                </p>
              </li>
              <li className="each-item">
                <p className="contact-font28">Alumni</p>
                <p className="each-item-p">
                  Visit our <a href="#">Alumni Page</a> to ...
                </p>
              </li>
              <li className="each-item">
                <p className="contact-font28">Careers</p>
                <p className="each-item-p">
                  Visit our <a href="#">Careers Page</a> to ...
                </p>
              </li>
              <li className="each-item">
                <p className="contact-font28">Financial Info</p>
                <p className="each-item-p">
                  Visit our <a href="#">Financial Info </a> to ...
                </p>
              </li>
              <li className="each-item">
                <p className="contact-font28">Careers</p>
                <p className="each-item-p">
                  Visit our <a href="#">Careers Page</a> to ...
                </p>
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default ContactUs;
