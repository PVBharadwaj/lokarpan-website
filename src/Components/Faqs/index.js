import { Component } from "react";
import DonateSubNav from "../Navbar/DonateSubNav";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaCirclePlus } from "react-icons/fa6";
import "./index.css";

const questions = [
  {
    id: 1,
    question: "Non-indian Citizens?",
    answer:
      "Through the Stronger Together campaign, our goal is to bridge the learning loss and strengthen our core program in Akanksha schools and communities",
  },
  {
    id: 2,
    question: "Non-indian Citizens?",
    answer:
      "Through the Stronger Together campaign, our goal is to bridge the learning loss and strengthen our core program in Akanksha schools and communities",
  },
  {
    id: 3,
    question: "Non-indian Citizens?",
    answer:
      "Through the Stronger Together campaign, our goal is to bridge the learning loss and strengthen our core program in Akanksha schools and communities",
  },
  {
    id: 4,
    question: "Non-indian Citizens?",
    answer:
      "Through the Stronger Together campaign, our goal is to bridge the learning loss and strengthen our core program in Akanksha schools and communities",
  },
  {
    id: 5,
    question: "Non-indian Citizens?",
    answer:
      "Through the Stronger Together campaign, our goal is to bridge the learning loss and strengthen our core program in Akanksha schools and communities",
  },
  {
    id: 6,
    question: "Non-indian Citizens?",
    answer:
      "Through the Stronger Together campaign, our goal is to bridge the learning loss and strengthen our core program in Akanksha schools and communities",
  },
  {
    id: 7,
    question: "Non-indian Citizens?",
    answer:
      "Through the Stronger Together campaign, our goal is to bridge the learning loss and strengthen our core program in Akanksha schools and communities",
  },
  {
    id: 8,
    question: "Non-indian Citizens?",
    answer:
      "Through the Stronger Together campaign, our goal is to bridge the learning loss and strengthen our core program in Akanksha schools and communities",
  },
];

class Faqs extends Component {
  render() {
    return (
      <>
        <Navbar />
        <DonateSubNav />
        <div className="faqs-container">
          <div className="donate-upper-section">
            <h1 className="faqs-font64">In case you missed anything.</h1>
          </div>
          <div className="faqs-browse-sec">
            <h2>
              Browse accessories or find new colours to go with your devices.
            </h2>
            <p>
              Here are some common questions that you might have. If you don’t
              find what you’re looking for, please write to us and we’ll be
              happy to address your query!
            </p>
          </div>
          <div className="donate-faq-section">
            <div className="faqs-head-sec">
              <h1 className="faqs-head">frequently asked Questions</h1>
              <p className="faqs-para">Show All</p>
            </div>

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
        </div>

        <Footer />
      </>
    );
  }
}

export default Faqs;
