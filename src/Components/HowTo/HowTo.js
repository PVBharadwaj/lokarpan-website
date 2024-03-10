import React from "react";
import "./HowTo.css";
import { Link } from "react-router-dom";
import SegmentButton from "../Carousals/SegmentButton/SegmentButton";
import Navbar from "../Navbar/KithNavbar";
import Footer from "../KithFooter";
import KithAdmissionSubNavbar from "../Navbar/KithAdmissionSubNavbar";

const HowTo = () => {
  const howtoFaqs = [
    {
      id: 1,
      question: "1. What is Lokarpan?",
      answer: "Add Text",
    },
    {
      id: 2,
      question: "2. How can I involved with Lokarpan?",
      answer: "Add Text",
    },
    {
      id: 3,
      question: "3. Are there any employment opportunities at Lokarpan?",
      answer: "Add Text",
    },
    {
      id: 4,
      question: "4. How can I support Lokarpan mission financially?",
      answer: "Add Text",
    },
    {
      id: 5,
      question:
        "5. NIs Lokarpan open to collaborations with other organisations?",
      answer: "Add Text",
    },
    {
      id: 6,
      question: "6. How can I stay updated on Lokarpan activities and events?",
      answer: "Add Text",
    },
    {
      id: 7,
      question: "7. Is Lokarpan only online or does it have physical presence?",
      answer: "Add Text",
    },
  ];

  return (
    <>
      <Navbar />
      <KithAdmissionSubNavbar />
      <div className="how-to-upper-section">
        <h1>
          We are thrilled to extend a warm welcome to you as part of the
          Lokarpan family.
        </h1>
      </div>
      <div className="howto-page">
        <div className="howto-card">
          <div className="howto-card-img"></div>
          {/* <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRXf_v9HN0mLlUntyj1dgMwC7buO0yVfOxnml4yhTKr3lut_kUO" /> */}
          <div className="howto-card-text">
            <h3>How to?</h3>
            <p>
              As you embark on this journey with us, your commitment and
              enthusiasm are integral to our success. Lokarpan is built on the
              principles of transparency, inclusivity, and empowerment.
            </p>
          </div>
        </div>
        <SegmentButton />
      </div>
      <div className="how-to-questions-section">
        <div className="how-to-faq-section">
          <div className="how-to-head-sec">
            <h1 className="how-to-faqs-head">Frequently asked Questions</h1>
            <p className="how-to-faqs-para-1">Show All</p>
          </div>

          <ul className="how-to-questions-container-1">
            {howtoFaqs.map((each) => (
              <li className="how-to-each-question-1">
                <input
                  type="checkbox"
                  id={each.id}
                  name={each.id}
                  className="how-to-input-1"
                />
                <label htmlFor={each.id} className="how-to-question-1">
                  {each.question}
                </label>
                <div className="how-to-ans-sec-1">
                  <p className="how-to-faq-answer-1">{each.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="howto-apply">
        <h1>Ready to apply</h1>
        <button className="how-to-apply-btn">Apply</button>
      </div>
      <Footer />
    </>
  );
};

export default HowTo;
