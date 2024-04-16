import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Moonshots.css";
import { Link } from "react-router-dom";
const Moonshots = () => {
  return (
    <>
      <Navbar />
      <div className="moonshots-top"></div>
      <div className="fellowship-page">
        <div className="second-div">
          <div className="sub-div">
            <img
              className="fellow-img"
              src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708623658/100_2093_1_zr9bw1.png"
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
              src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708623659/IMG_3313_2_zapx1r.png"
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
          <h5 className="impact-head">ACCLERATING IMPACT</h5>
          <h2 className="impact-title">
            We provide support through a combination of funding, innovation and
            technical expertise.
          </h2>
        </div>
        <div className="second-div">
          <div className="sub-div">
            <img
              className="fellow-img"
              src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708623659/DSC04890_1_xxtsrn.png"
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
              src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708623657/Rectangle_1875_akaqkc.png"
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
      </div>

      <div className="opp moonshots-opp">
        <h3 className="opp-head fellow-data">Be a Catalyst for Change
</h3>
        <p className="opp-data impact-title">
        Join Lokarpan in our mission to combat educational disparities, empowering at-risk communities for a brighter future. Your support fuels innovation and transformative impact.

        </p>
        <div className="apply-btn white">
          <Link to="/" className="apply-btn-text-black body-btn">Apply</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Moonshots;
