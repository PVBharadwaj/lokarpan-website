import AppCarousel from "../Carousals/ApplicationCarousal/AppCarousal";
import { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import EducationSubNav from "../Navbar/EducationSubNav";
import Navbar from "../Navbar/Navbar";
import "./Application.css";
import { FaRegGem } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const Plans = [
  {
    color: "appblue",
    name: "Basic",
    cost: "₹100/mo.",
    features: "loremipsum loremipsum",
    type: "Basic",
  },
  {
    color: "red",
    name: "Plus",
    cost: "₹100/mo.",
    features: "loremipsum loremipsum",
    type: "Plus",
  },
  {
    color: "green",
    name: "Pro",
    cost: "₹100/mo.",
    features: "loremipsum loremipsum",
    type: "Pro",
  },
];

const Application = () => {
  const [popupVisibility, setPopupVisibility] = useState([false]);

  const openpopup = (index) => {
    const updatedVisibility = [...popupVisibility];
    updatedVisibility[index] = true;
    setPopupVisibility(updatedVisibility);
  };

  const closepopup = (index) => {
    const updatedVisibility = [...popupVisibility];
    updatedVisibility[index] = false;
    setPopupVisibility(updatedVisibility);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.which === 27) {
        setPopupVisibility(popupVisibility.map(() => false));
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [popupVisibility]);

  useEffect(() => {
    if (popupVisibility.some((isVisible) => isVisible)) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }
  }, [popupVisibility]);

  return (
    <>
      <Navbar />
      <EducationSubNav />
      <div className="application-top-img"></div>
      <div className="app-page">
        <div className="app-div">
          {/* <div className="application-img"></div> */}
         
          <h1 className="app-title title2">
            Lokarpan presents a suite of digital applications to redefine
            classroom strategies
          </h1>
          <p className="application-para1">
            The education sector is constantly evolving, and technology has
            played a significant role in shaping the way we learn. Our goal? To
            craft a digital roadmap that integrates our data repository,
            learning management systems, and predictive performance based
            analytics for educational success.
          </p>
          <div className="adobe-horizon">
            <div className="adobe-horizon-in">
              <h2 className="app-title title3">Adobe</h2>
              <p style={{padding: "0px 30px 50px", textAlign: "left"}} className="application-para2">
                Introducing Lokarpan's Adobe-powered web application, a
                transformative tool for tracking student performance and well-being.
                With modules like RankMaster for academic rankings and HealthMap for
                health monitoring, schools can efficiently manage exams and provide
                real-time feedback, empowering rural communities in Uttar Pradesh.
              </p>
            </div>
            <div className="adobe-horizon-in">
              <h2 className="app-title title3">Horizon</h2>
              <p style={{padding: "0px 30px 50px",textAlign: "left"}} className="application-para2">
                Horizon, our innovative web application, harnesses Bayesian models
                to analyse student quizzes and assessments. This enables us to offer
                personalised recommendations for academic improvement, providing
                teachers with invaluable insights to tailor their teaching
                strategies effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="app-page">
        <h1 className="title2">
          Empower Teaching and Learning with Advanced Tools
        </h1>
        <p className="app-para-5">
          Unlock the potential of personalised learning experiences, instant
          feedback, enhanced accessibility, well-being tracking, fortified
          digital security, and time-saving solutions for educators.
        </p>
      </div>
      {/* <AppCarousel /> */}



      <div className="square-cards-out">
      <div className="square-cards">
            {/* <div className="temp-container"> */}
              <div className="square-cards-each-cont">
                <div className="icon">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708784153/Group_1759_cdfdoy.png"
                    className="dig-icon-img"
                  />
                </div>
                {/* <h4>Adobe</h4> */}
                <p>
                Track student performance on leaderboards
                </p>
              </div>
              <div className="square-cards-each-cont">
                <div className="icon">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708784144/Group_1762_qugdzn.png"
                    className="dig-icon-img"
                  />
                </div>
                {/* <h4>Content Creation</h4> */}
                <p>
                Gamify results to boost student engagement
                </p>
              </div>
              <div className="square-cards-each-cont">
                <div className="icon">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708784137/Group_1761_xkcnfs.png"
                    className="dig-icon-img"
                  />
                </div>
                {/* <h4>Analytics & Prediction</h4> */}
                <p>
                Track health and nutrition metrics and submit sickness reports
                </p>
              </div>
              <div className="square-cards-each-cont">
                <div className="icon">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708784129/Group_1755_sfm8yd.png"
                    className="dig-icon-img"
                  />
                </div>
                {/* <h4>Exams & Quizzes</h4> */}
                <p>
                Gather insights into education and health trends across institutions
                </p>
              </div>
              <div className="square-cards-each-cont">
                <div className="icon">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708784153/Group_1759_cdfdoy.png"
                    className="dig-icon-img"
                  />
                </div>
                {/* <h4>Adobe</h4> */}
                <p>
                Track student performance on leaderboards
                </p>
              </div>
              <div className="square-cards-each-cont">
                <div className="icon">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708784153/Group_1759_cdfdoy.png"
                    className="dig-icon-img"
                  />
                </div>
                {/* <h4>Adobe</h4> */}
                <p>
                Track student performance on leaderboards
                </p>
              </div>
            {/* </div> */}

          </div>
      </div>


      <div className="square-cards">
        {/* <div>Track student performance on leaderboards</div> */}
        {/* <div>Gamify results to boost student engagement</div> */}
        {/* <div>Track health and nutrition metrics and submit sickness reports</div> */}
        {/* <div>Gather insights into education and health trends across institutions</div>
        <div>Gather insights into education and health trends across institutions</div> */}
      </div>
      <div className="app-page">
        <div className="app-div app-div-bottom">
          <div className="plan">
            <h1 className="app-title title3">Access one of our plans below</h1>
            <p className="app-para-4">
              In education, technology serves as a powerful supplement to the
              expertise and creativity of educators. Our commitment to
              responsible tech practices ensures that our tools are
              human-centered and meticulously designed to enhance teaching and
              learning experiences.
            </p>
            <div className="choose-plan">
              <h4 className="choose-plan-head">Plans</h4>
              <p className="choose-plan-second-head">Choose your plan</p>
              <p className="choose-plan-para">
                We are here to help you to choose correct plan.
              </p>
            </div>
            <div className="app-card-list">
              {Plans.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="browse">
        <div className="browse-text">
          <h1 className="title3">
            Learn more about our organisation’s code of conduct.
          </h1>

          {/* <button className="app-apply-btn" onClick={() => openpopup(0)}>
            Code of Conduct
          </button> */}
        </div>
        <div className="browse-img"></div>
      </div>
      {popupVisibility[0] && (
        <div className="misson-popup">
          <div className="misson-popup-content">
            <RxCross2 onClick={() => closepopup(0)} className="x" />
            <div className="code-cont">
              <h1>Code of conduct</h1>

              <h3>Integrity and Honesty</h3>
              <p>
                At Lokarpan, we conduct ourselves with the highest standards of
                integrity and honesty. We are committed to transparency in all
                our dealings and interactions, ensuring that our actions are
                always in alignment with our values.
              </p>
              <h3>Respect and Inclusivity</h3>
              <p>
                We respect the dignity and rights of every individual, valuing
                diversity and inclusivity in all aspects of our work.
                Discrimination of any kind is not tolerated, and we strive to
                create an environment where everyone feels valued and heard.
              </p>
              <h3>Confidentiality and Privacy</h3>
              <p>
                We understand the importance of confidentiality and privacy,
                especially when dealing with sensitive information. All personal
                and organisational data is handled with the utmost care and
                respect for privacy rights.
              </p>
              <h3>Empowerment and Self-Reliance</h3>
              <p>
                Our aim is to empower individuals and communities to become
                self-reliant and independent. We believe in fostering
                self-sufficiency through education, skill-building, and creating
                opportunities for growth.
              </p>
              <h3>Accountability and Responsibility</h3>
              <p>
                Every member of Lokarpan is accountable for their actions and
                decisions. We take responsibility for the impact of our work and
                strive to continuously improve and learn from both successes and
                failures.
              </p>
              <h3>Professionalism and Excellence</h3>
              <p>
                We uphold professional standards of conduct in all our
                interactions, maintaining a commitment to excellence in our
                work. We strive for quality, innovation, and continuous
                improvement in everything we do.
              </p>
              <h3>Compliance with Laws and Regulations</h3>
              <p>
                Lokarpan operates in full compliance with all applicable laws,
                regulations, and ethical standards. We ensure that our actions
                are legal, ethical, and in accordance with our mission and
                values.
              </p>
              <h3>Conflict Resolution and Open Communication</h3>
              <p>
                In the event of conflicts or disagreements, we encourage open
                and respectful communication to find constructive solutions. We
                value feedback and input from all stakeholders and work towards
                resolving issues in a fair and timely manner.
              </p>
              <h3>Environmental Responsibility</h3>
              <p>
                Recognizing our impact on the environment, we are committed to
                sustainable practices and minimising our ecological footprint.
                We strive to protect and preserve natural resources for future
                generations.
              </p>
              <h3>Community Engagement and Collaboration</h3>
              <p>
                Lokarpan values partnerships and collaboration with local
                communities, organisations, and stakeholders. We believe in the
                power of collective action and work together towards shared
                goals for the betterment of society.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="donate-section">
        <h1 className="last-space">Be a Catalyst for Change</h1>
        <p className="our-role-font24">
        Join Lokarpan in our mission to combat educational disparities,
          empowering at-risk communities for a brighter future. Your support
          fuels innovation and transformative impact.
        </p>
        <Link to="/donate">
          <button type="button" className="our-role-apply-btn">
            Donate
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

const Card = ({ item }) => {
  return (
    <div className="plan-list">
      <h1 className={item.color}>
        <FaRegGem className="app-card-icon" />
        {item.name}
      </h1>
      <h1>{item.cost}</h1>
      <p>
        <FaCheckCircle className={`app-card-icon ${item.color}`} />
        {item.features}
      </p>
      <p>
        <FaCheckCircle className={`app-card-icon ${item.color}`} />
        {item.features}
      </p>
      <p>
        <FaCheckCircle className={`app-card-icon  ${item.color}`} />
        {item.features}
      </p>
      <p>
        <FaCheckCircle className={`app-card-icon  ${item.color}`} />
        {item.features}
      </p>
      <div className="apply-btn transparent">
        <Link to="/donate" className="apply-btn-text-black body-btn">
          Choose {item.type}
        </Link>
      </div>
    </div>
  );
};

export default Application;
