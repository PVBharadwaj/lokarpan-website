import AppCarousel from "../Carousals/ApplicationCarousal/AppCarousal";
import Footer from "../Footer/Footer";
import EducationSubNav from "../Navbar/EducationSubNav";
import Navbar from "../Navbar/Navbar";
import "./Application.css";
import { FaRegGem } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

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
  return (
    <>
      <Navbar />
      <EducationSubNav />
      <div className="app-page">
        <div className="app-div">
          <h1 className="app-title title2">
            Lokarpan presents a suite of digital applications to redefine
            classroom strategies
          </h1>
          <div className="application-img"></div>
          {/* <img
            className="application-img"
            src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708623660/Rectangle_1932_qjoyip.png"
            alt=""
          /> */}
          <p className="application-para1">
            The education sector is constantly evolving, and technology has
            played a significant role in shaping the way we learn. Our goal? To
            craft a digital roadmap that integrates our data repository,
            learning management systems, and predictive performance based
            analytics for educational success.
          </p>
          <h2 className="app-title title3">Adobe</h2>
          <p className="application-para2">
            Introducing Lokarpan's Adobe-powered web application, a
            transformative tool for tracking student performance and well-being.
            With modules like RankMaster for academic rankings and HealthMap for
            health monitoring, schools can efficiently manage exams and provide
            real-time feedback, empowering rural communities in Uttar Pradesh.
          </p>
          <h2 className="app-title title3">Horizon</h2>
          <p className="application-para2">
            Horizon, our innovative web application, harnesses Bayesian models
            to analyse student quizzes and assessments. This enables us to offer
            personalised recommendations for academic improvement, providing
            teachers with invaluable insights to tailor their teaching
            strategies effectively.
          </p>
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
      <AppCarousel />
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
          <div className="apply-btn browse-text-button transparent">
            <Link
              to="/code-of-conduct"
              className="apply-btn-text-black body-btn"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="browse-img"></div>
      </div>
      <div className="new-platform-sec">
        <h1>Be a Catalyst for Change</h1>
        {/* <h1>An all-new for developers</h1> */}
        <p>
          Join Lokarpan in our mission to combat educational disparities,
          empowering at-risk communities for a brighter future. Your support
          fuels innovation and transformative impact.
        </p>
        {/* <a href="#" className="approach-anchor">
            Learn More
          </a> */}
        <Link to="/ways-to-give" className="approach-anchor white-content">
          {/* <button type="button" className="our-role-apply-btn">
                Donate
              </button> */}
          Learn More
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
