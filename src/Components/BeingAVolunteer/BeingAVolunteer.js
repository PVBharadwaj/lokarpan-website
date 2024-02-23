import FlipCard from "../Carousals/FlipCards/FlipCard";
import VolunteerCarousel from "../Carousals/VolunteerCarousal/VolunteerCarousel";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import SupportSubNav from "../Navbar/SupportSubNav/SupportSubNav";
import { Link } from "react-router-dom";
import "./BeingAVolunteer.css";
const BeingAVolunteer = () => {
  return (
    <>
      <Navbar />
      <SupportSubNav />
      <div className="being-a-volunteer volunteer-top">
        <div className="volunteer-first-div">
          <h1>Being a Volunteer</h1>
          <p>
            The road to end educational inequity is long and we cannot do this
            on our own. If you are passionate about our vision and have a
            certain number of hours a week to put in, you can volunteer with
            Fellows in their classroom or with different departments on staff.
          </p>
        </div>
        <FlipCard />
      </div>
      <div className="being-a-volunteer-second">
        <VolunteerCarousel />
      </div>
      <div className="volunter-opp">
          <h1>
            An AI power play: Fueling the <br /> next wave of innovation in the{" "}
            <br /> energy sector
          </h1>
          <div className="hyperlinks">
          <div className="apply-btn transparent">
              <Link to="/donate" className="apply-btn-text-black body-btn">Donate</Link>
          </div>
          </div>
        </div>
        <Footer />
    </>
  );
};

export default BeingAVolunteer;