import { Component } from "react";
import "./index.css";

const questions = [
  {
    id: 1,
    question: "Campus-Tour",
    answer:
      "Through the Stronger Together campaign, our goal is to bridge the learning loss and strengthen our core program in Akanksha schools and communities",
  },
  {
    id: 2,
    question: "Community",
    answer:
      "Through the Stronger Together campaign, our goal is to bridge the learning loss and strengthen our core program in Akanksha schools and communities",
  },
  {
    id: 3,
    question: "Residentail Life",
    answer:
      "Through the Stronger Together campaign, our goal is to bridge the learning loss and strengthen our core program in Akanksha schools and communities",
  },
  {
    id: 4,
    question: "Support Service",
    answer:
      "Through the Stronger Together campaign, our goal is to bridge the learning loss and strengthen our core program in Akanksha schools and communities",
  },
];

class CampusAndCulture extends Component {
  render() {
    return (
      <div className="campus-culture-container">
        <div className="campus-culture-upper-section">
          <h1 className="campus-font48">Campus & Culture</h1>
          <p className="campus-font32">
            Welcome to a place where passion meets purpose, and where every
            individual is a valued contributor to our shared vision. Lokarpan's
            culture is one of inclusivity, collaboration, and a deep commitment
            to making a positive impact.
          </p>
        </div>
        <div className="campus-faq-section">
          <div className="campus-faq-section-left">
            <h1>Campus</h1>
            <p className="campus-font20">
              They embody what we stand for and guide our approach to how we
              build technology for people and their relationships.
            </p>

            <ul className="questions-container">
              {questions.map((each) => (
                <li className="each-question">
                  <input
                    type="checkbox"
                    id={each.id}
                    name={each.id}
                    className="input"
                  />
                  <label htmlFor={each.id} className="question">
                    {each.question}
                  </label>
                  <div className="ans-sec">
                    <p className="faq-answer">{each.answer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="campus-faq-section-right">
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1707799693/Rectangle_1882_uamn0n.png"
              className="right-img"
            />
          </div>
        </div>
        <div className="campus-culture-last-section">
          <img
            src="https://res.cloudinary.com/digbzwlfx/image/upload/v1707799693/Rectangle_1882_uamn0n.png"
            className="campus-last-section-img"
          />
          <div className="campus-last-section-content">
            <h1 className="campus-font48 mobile-no-space-above">Our Culture</h1>
            <p className="campus-font18">
              At Lokarpan, we celebrate diversity and believe that it is our
              differences that make us stronger. Our community is built on
              mutual respect, empathy, and a shared dedication to creating
              positive change. Whether you're a seasoned member or a newcomer,
              you'll find a welcoming atmosphere where your ideas and
              perspectives are not only heard but valued.
            </p>
            <ul className="campus-last-section-list">
              <li>Inspiring discussions and thought-provoking events.</li>
              <li>Opportunities to collaborate on impactful projects.</li>
              <li>
                Networking with professionals, experts, and fellow
                change-makers.
              </li>
              <li>A supportive and encouraging community.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CampusAndCulture;
