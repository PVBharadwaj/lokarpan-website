import FlipCard from "../Carousals/FlipCards/FlipCard";
import VolunteerCarousel from "../Carousals/VolunteerCarousal/VolunteerCarousel";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import SupportSubNav from "../Navbar/SupportSubNav/SupportSubNav";
import { Link } from "react-router-dom";
import "./BeingAVolunteer.css";
import FlipCard2 from "../Carousals/FlipCards/FlipCard2";
import FlipCard3 from "../Carousals/FlipCards/FlipCard3";
import FlipCard4 from "../Carousals/FlipCards/FlipCard4";
const BeingAVolunteer = () => {
  return (
    <>
      <Navbar />
      <SupportSubNav />
      <div className="being-a-volunteer volunteer-top">
        <div className="volunteer-first-div">
          <h1>Being a Volunteer</h1>
          <p>
          The road to end educational inequity is long and we cannot do this on our own. If you are passionate about our vision and have a certain number of hours a week to put in, you can volunteer with Fellows in their classroom or with different departments on staff.
          </p>
        </div>
        <h1 className="vol-head-div-text">Why Volunteer with Lokarpan?</h1>
        <FlipCard />
        <FlipCard2 />
        <FlipCard3 />
        <FlipCard4 />
      </div>
      <div className="being-a-volunteer-second">
        <VolunteerCarousel />
      </div>
      <div className="volunter-opp">
        <div className="volunter-opp-inner">
          {/* <h1>
            An AI power play: Fueling the next wave of innovation in the{" "}
            energy sector
          </h1> */}
          <h1>Explore current volunteering opportunities</h1>
          <p>Lokarpan collaborates with volunteers primarily through our dedicated volunteer program. If you hold an undergraduate degree, possess relevant work experience, and are passionate about making a difference, you may qualify to join us as a volunteer.
            Our volunteer program provides opportunities for impactful assignments across various initiatives within Lokarpan. While we do not directly recruit volunteers, interested individuals can explore potential opportunities through our volunteer program. To learn more and register your interest, please visit our volunteer signup page.
            Additionally, volunteer positions may also be available through our affiliated partners and organisations.
          </p>
          <div style={{width: "150px"}} className="hyperlinks">
          <div className="apply-btn white">
              <Link to="/donate" className="apply-btn-text-black body-btn">Apply</Link>
          </div>
          </div>
        </div>

        </div>
        <Footer />
    </>
  );
};

export default BeingAVolunteer;
