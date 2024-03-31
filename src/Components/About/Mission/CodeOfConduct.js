import { useState, Component } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import SubNavbar from "../../Navbar/SubNavbar";
import { FaCirclePlus } from "react-icons/fa6";

const questions = [
  {
    id: 1,
    question: "Integrity and Honesty",
    answer:
      "At Lokarpan, we conduct ourselves with the highest standards of integrity and honesty. We are committed to transparency in all our dealings and interactions, ensuring that our actions are always in alignment with our values.",
  },
  {
    id: 2,
    question: "Respect and Inclusivity",
    answer:
      "We respect the dignity and rights of every individual, valuing diversity and inclusivity in all aspects of our work. Discrimination of any kind is not tolerated, and we strive to create an environment where everyone feels valued and heard.",
  },
  {
    id: 3,
    question: "Confidentiality and Privacy",
    answer:
      "We understand the importance of confidentiality and privacy, especially when dealing with sensitive information. All personal and organisational data is handled with the utmost care and respect for privacy rights.",
  },
  {
    id: 4,
    question: "Empowerment and Self-Reliance",
    answer:
      "Our aim is to empower individuals and communities to become self-reliant and independent. We believe in fostering self-sufficiency through education, skill-building, and creating opportunities for growth.",
  },
  {
    id: 5,
    question: "Accountability and Responsibility",
    answer:
      "Every member of Lokarpan is accountable for their actions and decisions. We take responsibility for the impact of our work and strive to continuously improve and learn from both successes and failures.",
  },
  {
    id: 6,
    question: "Professionalism and Excellence",
    answer:
      "We uphold professional standards of conduct in all our interactions, maintaining a commitment to excellence in our work. We strive for quality, innovation, and continuous improvement in everything we do.",
  },
  {
    id: 7,
    question: "Compliance with Laws and Regulations",
    answer:
      "Lokarpan operates in full compliance with all applicable laws, regulations, and ethical standards. We ensure that our actions are legal, ethical, and in accordance with our mission and values.",
  },
  {
    id: 8,
    question: "Conflict Resolution and Open Communication",
    answer:
      "In the event of conflicts or disagreements, we encourage open and respectful communication to find constructive solutions. We value feedback and input from all stakeholders and work towards resolving issues in a fair and timely manner.",
  },
  {
    id: 9,
    question: "Environmental Responsibility",
    answer:
      "Recognizing our impact on the environment, we are committed to sustainable practices and minimising our ecological footprint. We strive to protect and preserve natural resources for future generations.",
  },
  {
    id: 10,
    question: "Community Engagement and Collaboration",
    answer:
      "Lokarpan values partnerships and collaboration with local communities, organisations, and stakeholders. We believe in the power of collective action and work together towards shared goals for the betterment of society.",
  },
];

const CodeOfConduct = () => {
    const [showAll, setShowAll] = useState(false);

    const [checkboxes, setCheckboxes] = useState(
      questions.reduce((acc, curr) => {
        acc[curr.id] = false;
        return acc;
      }, {})
    );
    const handleCheckboxChange = (id) => {
        setCheckboxes({
          // ...checkboxes,  //  Spread operator to keep the previous change
          [id]: !checkboxes[id]
        });
      };

    return (
      <>
        <Navbar />
        <SubNavbar />
        <div className="faqs-container">
          <div className="donate-faq-section">
            <div className="faqs-head-sec">
              <h1 className="faqs-head">Code of Conduct</h1>
              <p className="faqs-para-1" onClick={() => setShowAll(!showAll)}>Show All</p>
            </div>

            <ul className="questions-container-1">
              {questions.map((each) => (
                <li className="each-question-1">
                  {/* <input
                    type="checkbox"
                    id={each.id}
                    name={each.id}
                    className="input-1"
                  /> */}
                  <input
                  type="checkbox"
                  id={each.id}
                  name={each.id}
                  checked={showAll || checkboxes[each.id]}
                  onChange={() => handleCheckboxChange(each.id)}
                  className="input-1"
                />
                  <label
                    htmlFor={each.id}
                    className="question-1"
                    style={{ color: "#000000" }}
                  >
                    {each.question}
                  </label>
                  <div className="ans-sec-1">
                    <p className="faq-answer-1">{each.answer}</p>
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

export default CodeOfConduct;
