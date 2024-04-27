import { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../Health/index.css";
import { Link } from "react-router-dom";
import { PiContactlessPaymentFill } from "react-icons/pi";

class Livelihood extends Component {
  render() {
    const Desp = [
      {
        id: 1,
        img: "https://res.cloudinary.com/dtfzxqpoy/image/upload/v1713120024/shuffle_ehqjjw.png",
        head: "Skill Development Initiatives",
        des: "Equipping individuals with the skills and knowledge necessary to excel in diverse livelihood opportunities.",
      },
      {
        id: 2,
        img: "https://res.cloudinary.com/dtfzxqpoy/image/upload/v1713120024/shuffle_ehqjjw.png",
        head: "Entrepreneurship Support",
        des: "Nurturing budding rural entrepreneurs, providing mentorship, training, and access to local producers and broader markets, expanding opportunities for sustainable income.",
      },
      {
        id: 3,
        img: "https://res.cloudinary.com/dtfzxqpoy/image/upload/v1713120024/shuffle_ehqjjw.png",
        head: "Financial Inclusion",
        des: "Promoting access to financial services, micro-loans, and savings mechanisms to empower economic independence.",
      },
      {
        id: 4,
        img: "https://res.cloudinary.com/dtfzxqpoy/image/upload/v1713120024/shuffle_ehqjjw.png",
        head: "Community Capacity Building",
        des: "Strengthening community resilience through education, awareness, and collaborative initiatives for long-term prosperity.",
      },
      // {
      //   id: 5,
      //   img: "https://res.cloudinary.com/dtfzxqpoy/image/upload/v1713120024/shuffle_ehqjjw.png",
      //   head: "Empowering Communities, Igniting Economic Growth",
      //   des: " Lokarpan is dedicated to creating avenues for economic growth and prosperity. We work tirelessly to identify and develop new opportunities for income generation, whether through entrepreneurship support, market linkages, or innovative business models.",
      // },
    ];

    return (
      <>
        <Navbar />
        <div className="fellowship-nav">
          <h1>Livelihood</h1>
        </div>
        <div className="health-container">
          <div className="livelihood-full-img-text">
            <h1 className="livelihood-full-img-text-head">
              Building sustainable futures for communities living in stress
            </h1>
          </div>
          <div className="health-container-section livelihood-cont-section">
            <div style={{marginBottom: "50px"}} className="health-each-container">
              <div className="health-content-section content-left">
                <h1 className="health-lokarpan-head3">Our Approach</h1>
                <p className="health-para">
                  At Lokarpan, our approach to livelihood development is rooted
                  in empowerment and sustainability. We believe in creating
                  lasting change by providing opportunities for skill
                  development, fostering entrepreneurship, and facilitating
                  access to markets. By focusing on self-sufficiency, improving
                  agricultural practices, and enhancing trade networks, we pave
                  the way for communities to thrive and grow economically.
                  <br />
                </p>
              </div>
              <div className="health-cont-img-div health-img2"></div>
            </div>
            <div className="livelihood-top-section environment-bottom-section">
              <h1>Strengthening Livelihoods Across Every Link in the Chain</h1>
              <p>
                In the face of growing economic challenges, particularly amidst
                the global pandemic, securing livelihoods stands as a crucial
                mission within Lokarpan's work across various sectors.
              </p>
              <p>
                As a dedicated advocate for empowering communities, Lokarpan
                focuses on bolstering each pivotal element in the livelihood
                supply chain. Our programs are designed to support every aspect
                of livelihood development, ensuring that underserved communities
                have access to the resources they need to thrive.
              </p>
            </div>
            <div className="livelihood-top-section">
              <h1 className="livelihood-desp-cards-head">Our Programs</h1>
              <div className="desp-cards">
                {Desp.map((item, index) => (
                <DespCard
                  key={index}
                  item={item}
                  index={index}
                  totalCount={Desp.length}
                />
              ))}
              </div>
            </div>
          </div>

          <div className="donate-section">
            <h1 className="last-space">Be a Catalyst for Change</h1>
            <p className="our-role-font24">
              Join Lokarpan in our mission to combat social and economic
              disparities, empowering at-risk communities for a brighter future.
              Your support fuels innovation and transformative impact.
            </p>
            <Link to="/donate">
              <button type="button" className="our-role-apply-btn">
                Donate
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const DespCard = ({ item, index, totalCount }) => {
  const isOddTotalCount = totalCount % 2 !== 0;
  const isLastCard = index === totalCount - 1;
  const cardClassName = `desp-card-list livelihood-card-list ${
    isOddTotalCount && isLastCard ? "last-card" : ""
  }`;

  return (
    <div className={cardClassName}>
      <img
        src={item.img}
        style={{ width: "50px", height: "50px", paddingBottom: "20px" }}
      />
      <h4>{item.head}</h4>
      <p>{item.des}</p>
    </div>
  );
};

export default Livelihood;
