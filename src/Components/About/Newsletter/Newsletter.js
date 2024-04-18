import React, { Component } from "react";
import "./Newsletter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Popup from "reactjs-popup";
import axios from "axios";
// import clsx from "@mui/base/node_modules/clsx";

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
      email: "",
    };
  }

  // onChangeEmail = (event) => {
  //   this.setState({ email: event.target.email });
  // };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

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




  handleSubmit = async () => {
    const { email, selectedNewsletters } = this.state;
    
    try {
      // Check if email is provided and at least one newsletter is selected
      if (email.trim() !== "" && selectedNewsletters.length > 0) {
      // if (email && selectedNewsletters.length > 0) {
        // Prepare data to be sent to the backend
        const formData = {
          email: email,
          newsletters: selectedNewsletters
        };
  
        // Send a POST request to your Django backend
        const response = await axios.post(
          "http://127.0.0.1:8000/api/newsletter_subscribe/", 
          formData
        );
  
        // Handle the response from the backend
        if (response.status === 200) {
          console.log("Email submitted successfully");
          // Optionally, you can reset the form fields here
          this.setState({
            email: "",
            selectedNewsletters: [],
            counter: 0
          });
        } else {
          console.error("Failed to submit email", error);
        }
      } else {
        console.error("Email or newsletters not provided");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  



  // handleSubmit = async () => {
  //   const { email } = this.state;
  //   const formField = new FormData();
  //   formField.append("email", email);
  //   console.log(formField.get("email"));

  //   await axios({
  //     method: "post",
  //     url: "http://127.0.0.1:8000/api/newsletter_subscibe/",
  //     data: formField,
  //   }).then((response) => {
  //     console.log(response.data);
  //   });
  // };

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
    const { selectedNewsletters, counter, email } = this.state;

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
                    value={email}
                    onChange={this.onChangeEmail}
                  />
                  <button className="n-email-box" onClick={this.handleSubmit}>
                    <span className="span-c">{counter}</span>
                    <p>complete sign-up</p>
                  </button>
                  <p className="n-para">
                    By signing up, you agree to our User Agreement and Privacy
                    Policy & Cookie Statement. This site is protected by
                    reCAPTCHA and the Google Privacy Policy and Terms of Service
                    apply.
                  </p>
                </div>
              </div>
              // <iframe
              //   src="https://swathipyla.substack.com/embed"
              //   width="480"
              //   height="320"
              //   style={{ border: "1px solid #EEE", background: "white" }}
              //   sandbox="allow-scripts allow-same-origin"
              //   // scrolling="no"
              // />
            )}
          </Popup>
        )}
        <Footer />
      </div>
    );
  }
}

export default Newslettert;
