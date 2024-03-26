import { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// import "./index.css";
import "../Health/index.css";
import { Link } from "react-router-dom";

class Livelihood extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="fellowship-nav"><h1>Livelihood</h1></div>
        <div className="health-container">
          {/* <div className="health-full-img"> */}
          <div className="livelihood-full-img-text">
            {/* <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704818233/image_176_tcqfoh.png"
              alt="health-img"
            /> */}
            <p>Lokarpan is committed to alleviating poverty in rural India. Through tailored skill development programs, microfinance initiatives, and entrepreneurship support, we empower individuals to improve economic conditions and enhance social mobility. Our goal is to foster stronger, more self-reliant communities.</p>
          </div>
          <div className="health-container-section">
            <div className="health-each-container">
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704897449/Rectangle_1764_nfpppj.png"
                alt="learn-img"
                className="health-cont-img"
              />
              <div className="health-content-section content-right">
                <h1 className="health-lokarpan-head3">
                Skill Development
                </h1>
                <p className="health-para">
                Lokarpan empowers individuals through tailored skill development programs, fostering entrepreneurship and self-reliance. Our initiatives enhance employability, creating sustainable livelihoods for community growth.
                  <br/><span><Link className="learn-more" to='/'>Learn more</Link></span>
                </p>
              </div>
            </div>
            <div className="health-each-container">
              <div className="health-content-section content-left">
                <h1 className="health-lokarpan-head3">
                Microfinance
                </h1>
                <p className="health-para">
                Empowering individuals through financial inclusion, Lokarpan offers small loans and financial services to low-income individuals and budding entrepreneurs.
                  <br/><span><Link className="learn-more" to='/'>Learn more</Link></span>
                </p>
              </div>
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704897449/Rectangle_1764_nfpppj.png"
                alt="learn-img"
                className="health-cont-img"
              />
            </div>
            <div className="health-each-container">
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704897449/Rectangle_1764_nfpppj.png"
                alt="learn-img"
                className="health-cont-img"
              />
              <div className="health-content-section content-right">
                <h1 className="health-lokarpan-head3">
                  Adding years to life and life to years
                </h1>
                <p className="health-para">
                  Immerse yourself in stories that will challenge your mind and
                  capture your heart. Explore new interests and stay on top of
                  what’s trending. Our global catalogue features leading voices
                  on the topics you care about — from the biggest names to
                  independent creators.
                </p>
              </div>
            </div>
          </div>
          <div className="health-full-img space-below">
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704818233/image_176_tcqfoh.png"
              alt="health-img"
            />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Livelihood;
