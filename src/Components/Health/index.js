import { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./index.css";

class Health extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="health-container">
          <div className="health-full-img">
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704818233/image_176_tcqfoh.png"
              alt="health-img"
            />
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
                  Adding years to life and life to years
                </h1>
                <p className="health-para">
                  At McKinsey, we hire people, not degrees. There is no set
                  definition for what exceptional looks like, and we know it can
                  come from anywhere. We believe in your potential, regardless
                  of your pedigree.
                </p>
              </div>
            </div>
            <div className="health-each-container">
              <div className="health-content-section content-left">
                <h1 className="health-lokarpan-head3">
                  Adding years to life and life to years
                </h1>
                <p className="health-para">
                  At McKinsey, we hire people, not degrees. There is no set
                  definition for what exceptional looks like, and we know it can
                  come from anywhere. We believe in your potential, regardless
                  of your pedigree.
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
                  At McKinsey, we hire people, not degrees. There is no set
                  definition for what exceptional looks like, and we know it can
                  come from anywhere. We believe in your potential, regardless
                  of your pedigree.
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

export default Health;
