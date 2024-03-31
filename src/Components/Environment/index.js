import { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// import "./index.css";
import "../Health/index.css";
import { Link } from "react-router-dom";

class Environment extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="fellowship-nav">
          <h1>Environment</h1>
        </div>
        <div className="health-container">
          {/* <div className="health-full-img"> */}
          <div className="health-full-img-text">
            {/* <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704818233/image_176_tcqfoh.png"
              alt="health-img"
            /> */}
            <p>
              Lokarpan addresses gaps in education systems with innovative,
              technology-assisted solutions that span the age spectrum. Our
              goal? To showcase excellence by representing India in the PISA
              rankings by 2027 with over 100k beneficiaries. We work directly
              and through government systems to reach thousands of children and
              school dropouts each year. Our instructors engage with children
              either in schools or within the community. We are working to
              create better teaching tools, scale up skill development and
              integrate technology to aid teachers in delivering the very best
              educational standards across rural India.{" "}
            </p>
          </div>
          <div className="health-container-section">
            <div className="health-each-container">
              {/* <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704897449/Rectangle_1764_nfpppj.png"
                alt="learn-img"
                className="health-cont-img"
              /> */}
              <div className="health-cont-img-div health-img1"></div>
              <div className="health-content-section content-right">
                <h1 className="health-lokarpan-head3">Tree Plantations</h1>
                <p className="health-para">
                  Lokarpan’s learning centre heavily invests in creating a
                  specially designed curriculum that aims to address learning
                  gaps in children. With digital classrooms, we’re making
                  learning more fun and memorable. 1 lakh trees planted.
                  <br />
                  <span>
                    <Link className="learn-more" to="/">
                      Learn more
                    </Link>
                  </span>
                </p>
              </div>
            </div>
            <div className="health-each-container">
              <div className="health-content-section content-left">
                <h1 className="health-lokarpan-head3">
                  Annual Migratory Bird Survey
                </h1>
                <p className="health-para">
                  We are bridging the education gap with a digital content
                  library for English and STEM subjects, empowering young
                  learners. Dive into our engaging audio podcasts, where
                  children can practise and explore new worlds of knowledge.
                  Identification survey, building heatmaps.
                  <br />
                  <span>
                    <Link className="learn-more" to="/">
                      Learn more
                    </Link>
                  </span>
                </p>
              </div>
              {/* <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704897449/Rectangle_1764_nfpppj.png"
                alt="learn-img"
                className="health-cont-img"
              /> */}
              <div className="health-cont-img-div health-img2"></div>
            </div>
            <div className="health-each-container">
              <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704897449/Rectangle_1764_nfpppj.png"
                alt="learn-img"
                className="health-cont-img"
              />
              <div className="health-content-section content-right">
                <h1 className="health-lokarpan-head3">
                  Water Quality Assessment and Freshwater Availability
                </h1>
                <p className="health-para">
                  We've gathered a passionate group committed to making a
                  difference. Our Fellows volunteer in classrooms and support
                  various departments, uniting to build a brighter future for
                  rural education.
                  <br />
                  <span>
                    <Link className="learn-more" to="/">
                      Learn more
                    </Link>
                  </span>
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

export default Environment;
