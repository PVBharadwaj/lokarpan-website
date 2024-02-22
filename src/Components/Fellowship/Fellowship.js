import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Fellowship.css";

const Fellowship = () => {
  return (
    <>
    <Navbar />
    <div className="fellowship-nav"><h1>Fellowship</h1></div>
      <div className="fellowship-top">
        <h1>
          We know the best answers often come from those closest to the problem.
        </h1>
      </div>
      <div className="fellowship-page">
        <div className="second-div">
          <div className="sub-div">
            <img
              className="fellow-img"
              src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708613081/DSC03865_1_qx9uvp.png"
              alt="img1"
            />
            <h3 className="impact-title">We look for big ideas.</h3>
            <p className="fellow-data">
              We believe big things can happen when you dont shy from big ideas.
              We look for non-profits, social enterprises and civic entities who
              understand the needs of marginilized and vulnerable populations
              andare working to address inequities at scale.
            </p>
          </div>
          <div className="sub-div">
            <img
              className="fellow-img"
              src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708613080/cannon_040_1_skwlle.png"
              alt="img2"
            />
            <h3 className="impact-title">We ask communities what they need.</h3>
            <p className="fellow-data">
              We believe big things can happen when you dont shy from big ideas.
              We look for non-profits, social enterprises and civic entities who
              understand the needs of marginilized and vulnerable populations
              andare working to address inequities at scale.
            </p>
          </div>
        </div>
        <div className="third-div">
          <h3 className="impact-head">ACCLERATING IMPACT</h3>
          <h2 className="impact-title">
            We provide support through a combination of funding, innovation and
            technical expertise.
          </h2>
          <div className="impact-div">
            <img
              className="impact-img"
              src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708614197/DSC03458_1_tjuemh.png"
              alt="img3"
            />
            <img
              className="impact-img"
              src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708614186/DSC06753_1_yrt9xp.png"
              alt="img4"
            />
            <img
              className="impact-img"
              src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708614181/BNF_visited_at_Community_level_during_VHND_1_ogldwj.png"
              alt="img5"
            />
          </div>
        </div>
        <div className="fourth-div">
          <h3 className="impact-title">The Google.org Fellowship</h3>
          <p className="fourth-div-data fellow-data">
            The google.org fellowship is a pro bono program that matched Google
            employees with non-profits and civic entities for up to six months
            on full time technical projects. Fellows leave their day jobs at
            Google to work alongside the organization's staff to build scalable
            slutions, working as a team to ensure that the work has sustined and
            lasting impact.
          </p>
        </div>
      </div>

      <div className="opp">
        <h3 className="opp-head fellow-data">OPPORTUNITIES</h3>
        <p className="opp-data impact-title">
          Through Google.org Impact challenges, we award nonprofits and social
          enterprises with support to help bring their ideas to life.
        </p>
        <div className="apply-btn white">
          <Link to="/" className="apply-btn-text-black body-btn">Apply</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Fellowship;
