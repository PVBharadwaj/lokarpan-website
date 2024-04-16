import { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./index.css";

class Health extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="fellowship-nav">
          <h1>Health</h1>
        </div>
        <div className="health-container">
          {/* <div className="health-full-img">
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704818233/image_176_tcqfoh.png"
              alt="health-img"
            />
          </div> */}
          <div className="health-full-img-text">
            {/* <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704818233/image_176_tcqfoh.png"
              alt="health-img"
            /> */}
            <h1 className="environment-main-head">
              Join Lokarpan in Bridging the Healthcare Gap for Rural Communities
            </h1>
          </div>

          <h1 className="new-head-text">
            Join us in our unwavering commitment to make healthcare accessible
            and available to all, particularly in the regions we serve. Our
            health programmes represent our response to the growing healthcare
            needs of communities living in stress, ensuring that vital medicines
            and supplies reach those who need them most, precisely when they
            need them.
          </h1>
          <div className="health-container-section">
            <div className="health-each-container">
              <div className="health-cont-img-div health-img1"></div>
              {/* <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704897449/Rectangle_1764_nfpppj.png"
                alt="learn-img"
                className="health-cont-img"
              /> */}
              <div className="health-content-section content-right">
                <h1 className="health-lokarpan-head3">Healthcare for All</h1>
                <p className="health-para">
                  Lokarpan is dedicated to ensuring healthcare for all,
                  especially in regions where access to essential medicines
                  remains a challenge for millions. In Uttar Pradesh, where
                  maternal mortality rates pose significant challenges, we
                  actively support healthcare initiatives. Through tracking key
                  health indicators, organising immunisation camps, and
                  implementing wide-scale programmes, we equip local health
                  facilities and practitioners in rural areas. Additionally, we
                  train alternate medicine practitioners to diagnose and treat
                  common diseases, striving to bridge the healthcare gap and
                  save lives.
                </p>
              </div>
            </div>

            <div className="health-each-container">
              <div className="health-content-section content-left">
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
              {/* <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704897449/Rectangle_1764_nfpppj.png"
                alt="learn-img"
                className="health-cont-img"
              /> */}
              <div className="health-cont-img-div health-img2"></div>
            </div>
            <div className="health-each-container">
              {/* <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704897449/Rectangle_1764_nfpppj.png"
                alt="learn-img"
                className="health-cont-img"
              /> */}
              <div className="health-cont-img-div health-img3"></div>

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

          <div className="health-cards-section">
            <h1 className="health-head">Lokarpan's Health Initiatives</h1>
            <p className="health-para2">
              Lokarpan's commitment to healthcare is structured around four
              thematic areas, each addressing critical aspects of public health
              and well-being
            </p>
            <div className="health-cards-cont">
              <div className="health-cards-cont-each-card">
                <h1>Maternal and Child Health</h1>
                <p>
                  Lokarpan prioritises the reduction of infant and maternal
                  mortality rates through comprehensive care programs. We ensure
                  safe deliveries by providing essential midwife support to
                  expectant mothers. Our initiatives guarantee access to vital
                  support, nutrition, and education, nurturing healthy child
                  development from infancy.
                </p>
              </div>
              <div className="health-cards-cont-each-card">
                <h1>Preventive Healthcare</h1>
                <p>
                  Our nationwide vaccination programs target eight
                  life-threatening diseases, safeguarding communities against
                  preventable illnesses. We promote the completion of prescribed
                  vaccination programs for children through comprehensive
                  education efforts.
                </p>
              </div>
              <div className="health-cards-cont-each-card">
                <h1>Nutrition and Wellness</h1>
                <p>
                  Monitoring key health indicators, Lokarpan ensures children
                  and mothers receive adequate nutrition for optimal health. We
                  implement nutrition programs in schools and households,
                  combating malnutrition and fostering overall wellness. Our
                  education initiatives promote holistic wellness, empowering
                  communities with knowledge of healthy lifestyles and
                  practices.
                </p>
              </div>
              <div className="health-cards-cont-each-card">
                <h1>Community Health Empowerment</h1>
                <p>
                  Lokarpan supports family planning initiatives, advocating for
                  healthier pregnancies and facilitating social-economic
                  advancement. Through dental health camps and workshops, we
                  enhance oral hygiene awareness and practices in communities.
                  We train and empower alternative medicine practitioners,
                  expanding local healthcare access and strengthening community
                  health systems.
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
