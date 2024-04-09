import React, { useState, useEffect } from "react";
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

const Newslettert = () => {
  const [selectedNewsletters, setSelectedNewsletters] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleNewsletterSelection = (newsletter) => {
    if (selectedNewsletters.includes(newsletter)) {
      setSelectedNewsletters(
        selectedNewsletters.filter((item) => item !== newsletter)
      );
    } else {
      setSelectedNewsletters([...selectedNewsletters, newsletter]);
    }
  };

  useEffect(() => {
    setCounter(selectedNewsletters.length);
  }, [selectedNewsletters]);

  return (
    <div>
      <Navbar />
      <section className="newsletter-letters">
        {/* Your existing newsletter sections */}
        <div className="daily">
          <div className="daily-icon">
            <FontAwesomeIcon icon={faNewspaper} className="daily-icon1" />
            <div
              className={`newsletter-icon-container ${
                selectedNewsletters.includes("Daily") ? "selected" : ""
              }`}
              onClick={() => handleNewsletterSelection("Daily")}
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
            <FontAwesomeIcon icon={faCalendarDays} className="daily-icon12" />
            <div
              className={`newsletter-icon-container ${
                selectedNewsletters.includes("Weekly") ? "selected" : ""
              }`}
              onClick={() => handleNewsletterSelection("Weekly")}
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
      </section>
      {counter > 0 && (
        <section className="email">
          <div className="counter">{counter}</div>
          <div>E-mail address</div>
        </section>
      )}
      <section className="newsletter-letters-1">
        {/* Your existing newsletter sections */}
        <div className="kith">Kith</div>
        <div className="newsletter-letters-1-newsboxs">
          <div className="daily">
            <div className="daily-icon">
              <FontAwesomeIcon icon={faComputer} className="ic1" />
              <div
                className={`newsletter-icon-container ${
                  selectedNewsletters.includes("NewYorker") ? "selected" : ""
                }`}
                onClick={() => handleNewsletterSelection("NewYorker")}
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
                  selectedNewsletters.includes("Science") ? "selected" : ""
                }`}
                onClick={() => handleNewsletterSelection("Science")}
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

      <Footer />
    </div>
  );
};

export default Newslettert;
