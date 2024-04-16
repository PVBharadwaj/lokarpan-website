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
            <h3 className="impact-title">Progressive Curriculum:</h3>
            <p className="fellow-data">
            Developing technology-driven, innovative curriculum to empower rural students for a brighter future.

            </p>
          </div>
          <div className="sub-div">
            <img
              className="fellow-img"
              src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708623659/IMG_3313_2_zapx1r.png"
              alt="img2"
            />
            <h3 className="impact-title">Empowering Educators:</h3>
            <p className="fellow-data">
            Empowering Educators: Equipping teachers with skills for engaging lesson plans, enhancing Mathematics and Science education quality.

            </p>
          </div>
        </div>
        
        <div className="second-div">
          <div className="sub-div">
            <img
              className="fellow-img"
              src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708623659/DSC04890_1_xxtsrn.png"
              alt="img1"
            />
            <h3 className="impact-title">Strategic Partnerships: </h3>
            <p className="fellow-data">
            Forging collaborations with higher education institutes, fostering innovation in education practices.

            </p>
          </div>
          <div className="sub-div">
            <img
              className="fellow-img"
              src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708623657/Rectangle_1875_akaqkc.png"
              alt="img2"
            />
            <h3 className="impact-title">Infrastructure Investment:</h3>
            <p className="fellow-data">
            Building modern facilities and classrooms to inspire creativity and ensure access to quality education.


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
