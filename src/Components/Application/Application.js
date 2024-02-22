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
  },
  {
    color: "red",
    name: "Plus",
    cost: "₹100/mo.",
    features: "loremipsum loremipsum",
  },
  {
    color: "green",
    name: "Pro",
    cost: "₹100/mo.",
    features: "loremipsum loremipsum",
  },
];

const Application = () => {
  return (
    <>
      <Navbar />
      <EducationSubNav />
      <div className="app-page">
        <div className="app-div">
          <h1 className="app-title title2">Work as one. or one thousand.</h1>
          <img
            className="application-img"
            src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708623660/Rectangle_1932_qjoyip.png"
            alt=""
          />
          <p className="application-para1">
          Immerse yourself in stories that will challenge your mind and capture your heart. Explore new interests and stay on top of what’s trending. Our global catalogue features leading voices on the topics you care about — from the biggest names to independent creators.
          </p>
          <h2 className="app-title title3">
            We ask communities what they need
          </h2>
          <p className="application-para2">
            Lokarpan is a non-profit organization registered under the Societies
            Registration Act 1860. Lokarpan is registered u/s 12A of the Income
            Tax Act, 1961. Lokarpan is registered under the Foreign
            Contributions (Regulation) Act FCRA 136550133, and renewed dated
            01.1.2016 for the receipt of foreign donations. Lokarpan assumes no
            obligation to update any forward looking statement or information,
            which speak as of their respective dates.
          </p>
        </div>
      </div>
      <AppCarousel />
      <div className="app-page">
        <div className="app-div">
          <div className="plan">
            <h1 className="app-title title3">Lokarpan</h1>
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
          <div className="browse">
            <div className="browse-text">
              <h1 className="title3">
                Browse accessories or find new colours to go with your devices.
              </h1>
              <div className="apply-btn browse-text-button transparent">
                <Link to="/" className="apply-btn-text-black body-btn">Learn more</Link>
              </div>
            </div>
            <img
              className="browse-img"
              src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708625144/Rectangle_1889_z8esn3.png"
              alt=""
            />
          </div>
        </div>
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
        {/* <i className="bi bi-gem"></i> */}
        {item.name}
      </h1>
      <h1>{item.cost}</h1>
      <p>
        <FaCheckCircle className={`app-card-icon ${item.color}`} />
        {/* <i className={`bi bi-check-circle-fill ${item.color}`}></i> */}
        {item.features}
      </p>
      <p>
        <FaCheckCircle className={`app-card-icon ${item.color}`} />
        {/* <i className={`bi bi-check-circle-fill ${item.color}`}></i> */}
        {item.features}
      </p>
      <p>
        <FaCheckCircle className={`app-card-icon  ${item.color}`} />
        {/* <i className={`bi bi-check-circle-fill ${item.color}`}></i> */}
        {item.features}
      </p>
      <p>
        <FaCheckCircle className={`app-card-icon  ${item.color}`} />
        {/* <i className={`bi bi-check-circle-fill ${item.color}`}></i> */}
        {item.features}
      </p>
    </div>
  );
};

export default Application;
