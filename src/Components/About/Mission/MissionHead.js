import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import SubNavbar from "../../Navbar/SubNavbar";
import "./MissionHead.css";
const MissionHead = () => {
  return (
    <>
    <Navbar />
      <SubNavbar />
      <div className="mission-img">
        <h1 className="mission-head-div-head">Our Mission</h1>
      </div>
      <div className="mission-head-div">
        <p className="mission-para">
        At Lokarpan, a spirit of innovation has always guided our path. From our early days, our team has been driven by a relentless pursuit of excellence, refusing to settle for anything less than the best. This ethos was embodied by our founder, H.V. Singh, a man of unwavering patience and a sincere belief in the shared responsibility of all community members for fostering true transformation.
        </p>
        <p className="mission-para">
        In 1996, Lokarpan was born from Singh's vision, dedicated to addressing some of the most pressing challenges in our communities: high child mortality, unemployment, socio-economic disparities, and inadequate education. The organisation helped revitalise the communities, reform the education system and rescue mothers and their children from neonatal complications in the region.
        </p>
        <p className="mission-para">
        Over the past 28 years, we have worked hand-in-hand with communities, listening to their needs and aspirations to develop tailored solutions. Today, we are pioneering a new era of education with fully immersive, cross-compatible technologies designed to enhance learning outcomes and empower both students and teachers.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default MissionHead;
