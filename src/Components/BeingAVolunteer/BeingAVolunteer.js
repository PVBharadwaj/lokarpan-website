import FlipCard from "../Carousals/FlipCards/FlipCard";
import VolunteerCarousel from "../Carousals/VolunteerCarousal/VolunteerCarousel";
import SupportSubNav from "../Navbar/SupportSubNav/SupportSubNav";
import "./BeingAVolunteer.css";
const BeingAVolunteer = () => {
  return (
    <>
      <SupportSubNav />
      <div className="being-a-volunteer">
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
        <VolunteerCarousel />

      </div>
      <div className="opp">
          <h1>
            An AI power play: Fueling the <br /> next wave of innovation in the{" "}
            <br /> energy sector
          </h1>
          <div className="hyperlinks">
            <a className="donate-hyperlink" href="/donate">
              Apply
            </a>
          </div>
        </div>
    </>
  );
};

export default BeingAVolunteer;
