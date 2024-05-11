import { Component } from "react";
import KithNavbar from "../Navbar/KithNavbar/index";
import KithLifeAtSchoolSubNavbar from "../Navbar/KithLifeAtSchoolSubNavbar";
import KithFooter from "../KithFooter/index";
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
      <>
        <KithNavbar />
        <KithLifeAtSchoolSubNavbar />
        <div className="campus-culture-container">
          <div className="campus-culture-upper-section">
            <h1 className="campus-font48">Discover what it’s like to work here</h1>
            <p className="campus-font32">
            Welcome to a place where passion meets purpose, and where every individual is a valued contributor to our shared vision. Lokarpan's culture is one of inclusivity, collaboration, and a deep commitment to making a positive impact.
            </p>
          </div>
          <div className="campus-faq-section">
            <div className="campus-faq-section-left">
              <h1>Our Clubs</h1>
              <p className="campus-font20">
              Our campus is a more dynamic hub of activity than it has ever been and this is well reflected in the growing popularity of clubs and committees that celebrate and champion innovation and academic excellence in its many forms – from our x and y clubs to the z club. Over the years, our clubs have been blessed with a rich array of experts in their fields who are able to communicate their knowledge and experience with passion and enthusiasm.
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
            {/* <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1707799693/Rectangle_1882_uamn0n.png"
              className="campus-last-section-img"
            /> */}
            <div className="health-cont-img-div campus-culture-img1"></div>
            <div className="campus-last-section-content">
              <h1 className="campus-font48 mobile-no-space-above">
              Our Culture
              </h1>
              <p className="campus-font18">
              At Kith, we foster a deeply inclusive environment where every member of our community—children, staff, and families alike—feels valued and welcomed without exception. Our commitment to fostering a culture of acceptance, diversity, and inclusion is fundamental to our ethos. Every educator is responsible for ensuring that no child's self-worth is undermined or their potential hindered by any form of bullying. We strive to identify and eliminate any obstacles that may impede a child's growth and fulfillment. Inclusive education guides us in respectfully navigating disagreements and coexisting harmoniously, even with diverse perspectives.
              </p>
              {/* <ul className="campus-last-section-list">
                <li>Inspiring discussions and thought-provoking events.</li>
                <li>Opportunities to collaborate on impactful projects.</li>
                <li>
                  Networking with professionals, experts, and fellow
                  change-makers.
                </li>
                <li>A supportive and encouraging community.</li>
              </ul> */}
            </div>
          </div>
        </div>
        <KithFooter />
      </>
    );
  }
}

export default CampusAndCulture;
