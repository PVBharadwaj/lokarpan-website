import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import SubNavbar from "../../Navbar/SubNavbar";
import "./MissionHead.css";
const OurCulture = () => {
  return (
    <>
    <Navbar />
      <SubNavbar />
      <div className="mission-img">
        <h1 className="mission-head-div-head">Our Culture</h1>
      </div>
      <div className="mission-head-div">
        <p className="mission-para">
        Central to our culture is the principle of including all voices, from every member of our diverse team to the individuals and communities we work with. We believe that everyone has a valuable perspective to contribute, and we actively seek out and respect diverse viewpoints in our decision-making processes.
        </p>
        <p className="mission-para">
        In times of crisis, our culture shines through as we respond swiftly and effectively to provide support and assistance where it is most needed. We are committed to advancing sustainability, both environmentally and socially, by implementing practices that promote long-term well-being and resilience.
        </p>
        <p className="mission-para">
        At Lokarpan, our work culture is more than just a set of values – it is a way of life that guides us in everything we do. We are driven by a shared passion for making a positive impact in the world, and we strive to create an environment where every individual can thrive and contribute to creating a brighter future for all.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default OurCulture;
