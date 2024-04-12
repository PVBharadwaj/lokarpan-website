import React, { Component } from "react";
import "./Newsletter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Popup from "reactjs-popup";

import {
  faNewspaper,
  faCalendarDays,
  faComputer,
  faMicroscope,
} from "@fortawesome/free-solid-svg-icons";
import { counter } from "@fortawesome/fontawesome-svg-core";
import { IoMdClose } from "react-icons/io";

class Newslettert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNewsletters: [],
      counter: 0,
    };
  }

  handleNewsletterSelection = (e, newsletter) => {
    console.log("Hi");
    const { selectedNewsletters } = this.state;
    let updatedNewsletters;

    if (selectedNewsletters.includes(newsletter)) {
      updatedNewsletters = selectedNewsletters.filter(
        (item) => item !== newsletter
      );
    } else {
      updatedNewsletters = [...selectedNewsletters, newsletter];
    }

    this.setState({
      selectedNewsletters: updatedNewsletters,
      counter: updatedNewsletters.length,
    });
  };

  // componentDidUpdate(prevProps, prevState) {
  //   const { selectedNewsletters } = this.state;
  //   if (prevState.selectedNewsletters !== selectedNewsletters) {
  //     console.log("list", selectedNewsletters);
  //     const len = selectedNewsletters.length;
  //     console.log("len", len);
  //     this.setState({
  //       counter: len,
  //     });
  //   }
  // }

  // componentDidMount() {
  //   // Initialize counter to the length of selectedNewsletters
  //   this.setState({
  //     counter: this.state.selectedNewsletters.length,
  //   });
  // }

  render() {
    const { selectedNewsletters, counter } = this.state;

    console.log("count", counter);
    return (
      <div className="newsletter">
        <Navbar />
        <div className="newsletter-top-section">
          <h1 className="newsletter-heading">
            Get the best of The New Yorker in your in-box.
          </h1>
          <h2 className="newsletter-heading2">
            Select the newsletters you’d like to receive. Then, add your e-mail
            to sign up.
          </h2>
        </div>
        <section className="newsletter-letters">
          {/* Your existing newsletter sections */}
          <h3 className="news-head3">Newsletters</h3>
          <div className="newletter-inner-section">
            <div className="daily">
              <div className="daily-icon">
                <FontAwesomeIcon icon={faNewspaper} className="daily-icon1" />
                <div
                  className={`newsletter-icon-container ${
                    selectedNewsletters.includes("Daily") ? "" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    id="newsletter-checkbox-daily"
                    onClick={(e) => this.handleNewsletterSelection(e, "Daily")}
                  />
                  <label
                    htmlFor="newsletter-checkbox-daily"
                    className="ihmHAQ"
                  ></label>
                </div>
              </div>
              <div className="newsbox-heading">Daily</div>
              <div className="newsbox-content">
                Our flagship newsletter highlights the best of The New Works,
                including top stories, fiction, horror and podcasts.
              </div>
              <button className="newsbox-tag">Daily</button>
            </div>

            <div className="daily">
              <div className="daily-icon">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="daily-icon12"
                />
                <div
                  className={`newsletter-icon-container ${
                    selectedNewsletters.includes("Weekly") ? "" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    id="newsletter-checkbox-weekly"
                    onClick={(e) => this.handleNewsletterSelection(e, "Weekly")}
                  />
                  <label
                    htmlFor="newsletter-checkbox-weekly"
                    className="ihmHAQ"
                  ></label>
                </div>
              </div>
              <div className="newsbox-heading">Weekly</div>
              <div className="newsbox-content">
                Our flagship newsletter highlights the best of The New Works,
                including top stories, fiction, horror and podcasts.
              </div>
              <button className="newsbox-tag">Weekly</button>
            </div>
          </div>
        </section>
        <section className="newsletter-letters-1">
          {/* Your existing newsletter sections */}
          <div className="kith">Kith</div>
          <div className="newsletter-letters-1-newsboxs">
            <div className="daily">
              <div className="daily-icon">
                <FontAwesomeIcon icon={faComputer} className="ic1" />
                <div
                  className={`newsletter-icon-container ${
                    selectedNewsletters.includes("NewYorker") ? "" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    id="newsletter-checkbox-newyorker"
                    onClick={(e) =>
                      this.handleNewsletterSelection(e, "NewYorker")
                    }
                  />
                  <label
                    htmlFor="newsletter-checkbox-newyorker"
                    className="ihmHAQ"
                  ></label>
                </div>
              </div>
              <div className="newsbox-heading">New Yorker</div>
              <div className="newsbox-content">
                Our flagship newsletter highlights the best of The New Works,
                including top stories, fiction, horror and podcasts.
              </div>
              <button className="newsbox-tag">Twice Weekly</button>
            </div>
            <div className="daily">
              <div className="daily-icon">
                <FontAwesomeIcon icon={faMicroscope} className="ic1" />
                <div
                  className={`newsletter-icon-container ${
                    selectedNewsletters.includes("Science") ? "" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    id="newsletter-checkbox-science"
                    onClick={(e) =>
                      this.handleNewsletterSelection(e, "Science")
                    }
                  />
                  <label
                    htmlFor="newsletter-checkbox-science"
                    className="ihmHAQ"
                  ></label>
                </div>
              </div>
              <div className="newsbox-heading">Science</div>
              <div className="newsbox-content">
                Our flagship newsletter highlights the best of The New Works,
                including top stories, fiction, horror and podcasts.
              </div>
              <button className="newsbox-tag">Weekly</button>
            </div>
          </div>
        </section>
        <section className="subs-newsletter">
          <ul>
            <li>Daily</li>
            <li>Weekly</li>
          </ul>
        </section>

        <section className="subs-newsletter">
          <ul>
            <li>Daily</li>
            <li>Weekly</li>
          </ul>
        </section>
        {counter > 0 && (
          <Popup
            className="newsletter-popup-container"
            modal
            trigger={
              <div className="email">
                <div className="counter">{counter}</div>
                <div>E-mail address</div>
              </div>
            }
          >
            {(close) => (
              <div className="modal">
                <button className="btn-close" onClick={close}>
                  <IoMdClose style={{ fontSize: "24px" }} />
                </button>
                <div className="n-header"> Email Address </div>
                <div className="n-content">
                  <input
                    type="text"
                    className="n-input"
                    placeholder="E-mail Address"
                  />
                  <div className="n-email-box">
                    <span className="span-c">{counter}</span>
                    <p>complete sign-up</p>
                  </div>
                  <p className="n-para">
                    By signing up, you agree to our User Agreement and Privacy
                    Policy & Cookie Statement. This site is protected by
                    reCAPTCHA and the Google Privacy Policy and Terms of Service
                    apply.
                  </p>
                </div>
              </div>
            )}
          </Popup>
        )}
        <Footer />
      </div>
    );
  }
}

export default Newslettert;
