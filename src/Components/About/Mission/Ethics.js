import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import SubNavbar from "../../Navbar/SubNavbar";
import "./MissionHead.css";
const Ethics = () => {
  return (
    <>
    <Navbar />
      <SubNavbar />
      <div className="mission-img">
        <h1 className="mission-head-div-head">Ethics and Compliance</h1>
      </div>
      <div className="mission-head-div">
        <p className="mission-para">
        At Lokarpan, our ethics and compliance policy is deeply rooted in a set of core principles that guide our every action and decision. First and foremost, we uphold honesty as a fundamental value, ensuring transparency and integrity in all our dealings. This commitment to honesty extends to maintaining strict confidentiality, respecting the privacy and trust of all individuals involved in our programs.
        </p>
        <p className="mission-para">
        Central to our approach is the belief in giving everyone a voice, from our dedicated staff to the communities we serve. We empower individuals to become self-reliant by fostering an environment where their opinions are valued and their ideas are heard. Through participatory approaches, we collaborate with communities to co-create solutions that address their unique needs and challenges.
        </p>
        <p className="mission-para">
        As an organisation, we actively disincentivize ourselves from actions that may compromise the well-being or interests of those we serve. We believe in help through action, not just words, and strive to make a tangible difference in the lives of individuals and communities. Our ethics are grounded in first principles thinking, constantly questioning assumptions and seeking innovative, sustainable solutions to complex problems.
        </p>
        <p className="mission-para">
        Through these guiding principles, Lokarpan remains steadfast in our commitment to ethical conduct, ensuring that every action we take aligns with our mission of creating a more equitable, inclusive, and empowered society.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Ethics;
