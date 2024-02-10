import { Component } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import "./index.css";
import FinancialNav from "../Navbar/FinancialSubNav/FinancialNav";

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
    // const {} = this.props;
    return (
      <>
        <FinancialNav navbarTitle="Donate" navitem1="Donate" navitem2="FAQ" />
        <div className="faqs-container">
          <div className="donate-upper-section">
            <p className="faqs-para1">
              Through the Stronger Together campaign, our goal is to bridge the
              learning loss and strengthen our core program in Akanksha schools
              and communities
            </p>
            <p className="faqs-para1">Non-Indian Citizens?</p>
          </div>
          <hr className="hor-line" />
          <div className="donate-faq-section">
            <p className="faqs-para1">
              Here are some common questions that you might have. If you don’t
              find what you’re looking for, please write to us and we’ll be
              happy to address your query!
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
                    <p className="answer">{each.answer}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button type="button" className="subscribe-btn">
              Show more FAQ's Here
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Faqs;
