import React, { useState } from "react";
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
  faCircleCheck
} from "@fortawesome/free-solid-svg-icons";

const Newslettert = () => {
  const [newsletterData, setNewsletterData] = useState([
    { showIcon: true, showIcont: false },
    { showIcon: true, showIcont: false },
    { showIcon: true, showIcont: false },
    { showIcon: true, showIcont: false }
  ]);
  const [counter, setCounter] = useState(0);

  const handleIconClick = (index, type) => {
    setNewsletterData((prevData) => {
      const newData = [...prevData];
      newData[index] = {
        showIcon: !newData[index].showIcon,
        showIcont: !newData[index].showIcont
      };
      return newData;
    });
    if (type === "plus") {
      setCounter(counter + 1);
    } else if (type === "check" && counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <Navbar />
      <section className="newsletter-letters">
        {/* Your existing newsletter sections */}
        <div className="daily">
    <div className="daily-icon">
      <FontAwesomeIcon icon={faNewspaper} className="daily-icon1" />
      {newsletterData[0].showIcon && (
        <FontAwesomeIcon
          icon={faCirclePlus}
          className="daily-icon2"
          onClick={() => handleIconClick(0, "plus")}
        />
      )}
      {newsletterData[0].showIcont && (
        <FontAwesomeIcon
          icon={faCircleCheck}
          className="daily-icon3"
          onClick={() => handleIconClick(0, "check")}
        />
      )}
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
      {newsletterData[1].showIcon && (
        <FontAwesomeIcon
          icon={faCirclePlus}
          className="daily-icon2"
          onClick={() => handleIconClick(1, "plus")}
        />
      )}
      {newsletterData[1].showIcont && (
        <FontAwesomeIcon
          icon={faCircleCheck}
          className="daily-icon3"
          onClick={() => handleIconClick(1, "check")}
        />
      )}
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
        {newsletterData[2].showIcon && (
          <FontAwesomeIcon
            icon={faCirclePlus}
            className="daily-icon2"
            onClick={() => handleIconClick(2, "plus")}
          />
        )}
        {newsletterData[2].showIcont && (
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="daily-icon3"
            onClick={() => handleIconClick(2, "check")}
          />
        )}
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
        {newsletterData[3].showIcon && (
          <FontAwesomeIcon
            icon={faCirclePlus}
            className="daily-icon2"
            onClick={() => handleIconClick(3, "plus")}
          />
        )}
        {newsletterData[3].showIcont && (
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="daily-icon3"
            onClick={() => handleIconClick(3, "check")}
          />
        )}
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
