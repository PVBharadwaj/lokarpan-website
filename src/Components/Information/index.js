import { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./index.css";

const questions = [
  {
    id: 1,
    question: "What is Lokarpan?",
    answer:
      "Through the Stronger Together campaign, our goal is to bridge the learning loss and strengthen our core program in Akanksha schools and communities",
  },
  {
    id: 2,
    question: "How can i involved with Lokarpan ?",
    answer:
      "Through the Stronger Together campaign, our goal is to bridge the learning loss and strengthen our core program in Akanksha schools and communities",
  },
  {
    id: 3,
    question: "Are there any employment opportunities at Lokarpan ?",
    answer:
      "Through the Stronger Together campaign, our goal is to bridge the learning loss and strengthen our core program in Akanksha schools and communities",
  },
  {
    id: 4,
    question: "How can I support Lokarpan mission Financially ?",
    answer:
      "Through the Stronger Together campaign, our goal is to bridge the learning loss and strengthen our core program in Akanksha schools and communities",
  },
  {
    id: 5,
    question: "Is Lokarpan open to collaboration with other Organization?",
    answer:
      "Through the Stronger Together campaign, our goal is to bridge the learning loss and strengthen our core program in Akanksha schools and communities",
  },
  {
    id: 6,
    question: "How can i stay updated on Lokarpan’s activities and events?",
    answer:
      "Through the Stronger Together campaign, our goal is to bridge the learning loss and strengthen our core program in Akanksha schools and communities",
  },
  {
    id: 7,
    question: "Is Lokarpan only online, or does it have a physical presence?",
    answer:
      "Through the Stronger Together campaign, our goal is to bridge the learning loss and strengthen our core program in Akanksha schools and communities",
  },
];

class Information extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="information-container">
          <div className="information-upper-section">
            <div>
              <h1>Leadership</h1>
              <p>
                At Lokarpan, we believe that leadership is not just about
                holding a title; it's about inspiring positive change and
                fostering growth within our community. We are excited to share
                the various leadership opportunities available and the qualities
                that define our leaders.
              </p>
            </div>
            <img src="https://res.cloudinary.com/digbzwlfx/image/upload/v1707978452/Rectangle_1809_ke4omy.png" />
          </div>
          <div className="mobile-information-upper-section">
            <h1>Leadership</h1>
            <p>
              At Lokarpan, we believe that leadership is not just about holding
              a title; it's about inspiring positive change and fostering growth
              within our community. We are excited to share the various
              leadership opportunities available and the qualities that define
              our leaders.
            </p>
          </div>
          <ul className="information-list">
            <li>
              <b> Executive Leadership Team:</b> Guide the strategic direction
              of Lokarpan and oversee organizational initiatives.
            </li>
            <li>
              <b> Committee Leadership: </b> Lead one of our dynamic committees,
              shaping the path for program development, community outreach, and
              innovation.
            </li>
            <li>
              <b> Club Leadership:</b> Inspire and guide members as you lead a
              club dedicated to environmental stewardship, youth empowerment, or
              art for social change.
            </li>
          </ul>
          <div className="information-alumni-employment-section">
            <div className="information-employment-container info-space-above">
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1707978527/Rectangle_1809_1_tbt5nd.png"
                className="information-img"
              />
              <div className="information-employment-content">
                <h1>Employment</h1>
                <ul>
                  <li>
                    <b>Impactful Work:</b> Contribute to initiatives that
                    address critical issues and drive positive change.
                  </li>
                  <li>
                    <b>Inclusive Environment:</b> Join a diverse and inclusive
                    community that values different perspectives and
                    backgrounds.
                  </li>
                  <li>
                    <b> Professional Growth: </b>Access opportunities for skill
                    development, mentorship, and career advancement.
                  </li>
                  <li>
                    <b>Collaborative Culture:</b> Be part of a team that values
                    collaboration, innovation, and collective achievement.
                  </li>
                </ul>
              </div>
            </div>
            <div className="information-alumni-container info-space-below">
              <div className="information-employment-content">
                <h1>Alumni</h1>
                <ul>
                  <li>
                    <b>Impactful Work:</b> Contribute to initiatives that
                    address critical issues and drive positive change.
                  </li>
                  <li>
                    <b>Inclusive Environment:</b> Join a diverse and inclusive
                    community that values different perspectives and
                    backgrounds.
                  </li>
                  <li>
                    <b> Professional Growth: </b>Access opportunities for skill
                    development, mentorship, and career advancement.
                  </li>
                  <li>
                    <b>Collaborative Culture:</b> Be part of a team that values
                    collaboration, innovation, and collective achievement.
                  </li>
                </ul>
              </div>
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1707978520/Rectangle_1810_1_kmcxec.png"
                className="information-img"
              />
            </div>
          </div>
          <div className="information-faqs-section">
            <h1>Frequently Asked Questions</h1>
            <ul className="info-questions-container">
              {questions.map((each) => (
                <li className="info-each-question">
                  <input
                    type="checkbox"
                    id={each.id}
                    name={each.id}
                    className="info-input"
                  />
                  <label htmlFor={each.id} className="info-question">
                    {each.question}
                  </label>
                  <div className="info-ans-sec">
                    <p className="info-faq-answer">{each.answer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Information;
