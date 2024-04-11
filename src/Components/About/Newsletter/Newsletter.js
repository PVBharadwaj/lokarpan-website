import React, { Component } from "react";
import "./Newsletter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

import {
  faCirclePlus,
  faNewspaper,
  faCalendarDays,
  faComputer,
  faMicroscope,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

class Newslettert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNewsletters: [],
      counter: 0,
    };
  }

  handleNewsletterSelection = (newsletter) => {
    console.log("news", newsletter);
    const { selectedNewsletters } = this.state;
    if (selectedNewsletters.includes(newsletter)) {
      this.setState({
        selectedNewsletters: selectedNewsletters.filter(
          (item) => item !== newsletter
        ),
      });
    } else {
      this.setState({
        selectedNewsletters: [...selectedNewsletters, newsletter],
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { selectedNewsletters } = this.state;
    if (prevState.selectedNewsletters !== selectedNewsletters) {
      console.log("list", selectedNewsletters);
      const len = selectedNewsletters.length;
      console.log("len", len);
      this.setState({
        counter: len,
      });
    }
  }

  componentDidMount() {
    // Initialize counter to the length of selectedNewsletters
    this.setState({
      counter: this.state.selectedNewsletters.length,
    });
  }

  render() {
    const { selectedNewsletters, counter } = this.state;

    return (
      <div>
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
                    selectedNewsletters.includes("Daily") ? "selected-item" : ""
                  }`}
                  onClick={() => this.handleNewsletterSelection("Daily")}
                >
                  <input type="checkbox" id="newsletter-checkbox-daily" />
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
                    selectedNewsletters.includes("Weekly")
                      ? "selected-item"
                      : ""
                  }`}
                  onClick={() => this.handleNewsletterSelection("Weekly")}
                >
                  <input type="checkbox" id="newsletter-checkbox-weekly" />
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
                    selectedNewsletters.includes("NewYorker")
                      ? "selected-item"
                      : ""
                  }`}
                  onClick={() => this.handleNewsletterSelection("NewYorker")}
                >
                  <input type="checkbox" id="newsletter-checkbox-newyorker" />
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
                    selectedNewsletters.includes("Science")
                      ? "selected-item"
                      : ""
                  }`}
                  onClick={() => this.handleNewsletterSelection("Science")}
                >
                  <input type="checkbox" id="newsletter-checkbox-science" />
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
          <div className="email">
            <div className="counter">{counter}</div>
            <div>E-mail address</div>
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export default Newslettert;
