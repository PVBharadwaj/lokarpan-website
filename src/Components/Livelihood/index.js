import { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// import "./index.css";
import "../Health/index.css";
import { Link } from "react-router-dom";

class Livelihood extends Component {
  render() {

    const Desp = [
      {
        id: 1,
        head: "Skill Development Initiatives",
        des: "Equipping individuals with the skills and knowledge necessary to excel in diverse livelihood opportunities.",
      },
      {
        id: 2,
        head: "Entrepreneurship Support",
        des: "Nurturing budding rural entrepreneurs, providing mentorship, training, and access to local producers and broader markets, expanding opportunities for sustainable income.",
      },
      {
        id: 3,
        head: "Financial Inclusion",
        des: "Promoting access to financial services, micro-loans, and savings mechanisms to empower economic independence.",
      },
      {
        id: 4,
        head: "Community Capacity Building",
        des: "Strengthening community resilience through education, awareness, and collaborative initiatives for long-term prosperity.",
      },
    ];

    return (
      <>
        <Navbar />
        <div className="fellowship-nav">
          <h1>Livelihood</h1>
        </div>
        <div className="health-container">
          {/* <div className="health-full-img"> */}
          <div className="livelihood-full-img-text">
            {/* <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704818233/image_176_tcqfoh.png"
              alt="health-img"
            /> */}
            <h1 className="livelihood-full-img-text-head">Building sustainable futures for communities living in stress</h1>
            <p className="livelihood-full-img-text-para">
            At Lokarpan, our approach to livelihood development is rooted in empowerment and sustainability. We believe in creating lasting change by providing opportunities for skill development, fostering entrepreneurship, and facilitating access to markets. By focusing on self-sufficiency, improving agricultural practices, and enhancing trade networks, we pave the way for communities to thrive and grow economically.
            </p>
          </div>
          <div className="health-container-section">
            <div className="livelihood-top-section">
              <h1>Strengthening Livelihoods Across Every Link in the Chain</h1>
              <p>In the face of growing economic challenges, particularly amidst the global pandemic, securing livelihoods stands as a crucial mission within Lokarpan's work across various sectors.</p>
              <p>As a dedicated advocate for empowering communities, Lokarpan focuses on bolstering each pivotal element in the livelihood supply chain. Our programs are designed to support every aspect of livelihood development, ensuring that underserved communities have access to the resources they need to thrive.</p>
            </div>
            <div className="livelihood-top-section">
              <h1 className="livelihood-desp-cards-head">
                Our Programs
              </h1>
              <div className="desp-cards">
                {Desp.map((item, index) => (
                  <DespCard key={index} item={item} index={index} />
                ))}
              </div>
            </div>
            <div className="health-each-container">
              {/* <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704897449/Rectangle_1764_nfpppj.png"
                alt="learn-img"
                className="health-cont-img"
              /> */}
              <div className="health-cont-img-div health-img2"></div>
              <div className="health-content-section content-right">
                <h1 className="health-lokarpan-head3">Empowering Communities, Igniting Economic Growth</h1>
                <p className="health-para">
                Lokarpan is dedicated to creating avenues for economic growth and prosperity. We work tirelessly to identify and develop new opportunities for income generation, whether through entrepreneurship support, market linkages, or innovative business models.
                  <br />
                  {/* <span>
                    <Link className="learn-more" to="/">
                      Learn more
                    </Link>
                  </span> */}
                </p>
              </div>
            </div>
            <div className="health-each-container">
              <div className="health-content-section content-left">
                <h1 className="health-lokarpan-head3">Be a Catalyst for Change</h1>
                <p className="health-para">
                Join Lokarpan in our mission to combat social and economic disparities, empowering at-risk communities for a brighter future. Your support fuels innovation and transformative impact.
                  <br />
                  {/* <span>
                    <Link className="learn-more" to="/">
                      Learn more
                    </Link>
                  </span> */}
                </p>
              </div>
              {/* <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704897449/Rectangle_1764_nfpppj.png"
                alt="learn-img"
                className="health-cont-img"
              /> */}
              <div className="health-cont-img-div health-img2"></div>
            </div>
            {/* <div className="health-each-container">
              <div className="health-cont-img-div health-img2"></div>
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
            </div> */}
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
};

const DespCard = ({ item }) => {
  return (
    <div className="desp-card-list livelihood-card-list">
      <h4>{item.head}</h4>
      <p>{item.des}</p>
    </div>
  );
};

export default Livelihood;
