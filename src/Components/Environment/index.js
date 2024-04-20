import React, { useState, Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// import "./index.css";
import "../Health/index.css";
import FAQ from "../About/Mission/faq";
import { Link } from "react-router-dom";

const Environment = () => {
  
    // const [faqs, setFaqs] = useState([
    //   {
    //     question: "Enhancing Green Cover for a Sustainable Future",
    //     answer:
    //       "Lokarpan's tree planting endeavours are paving the way for a greener, healthier environment for generations to come.",
    //     open: false,
    //   },
    //   {
    //     question: "Tracking Exotic Bird Populations for Biodiversity Conservation",
    //     answer:
    //       "Our efforts in bird migration tracking contribute to scientific knowledge and vital conservation strategies, ensuring the continued existence of these fascinating avian species.",
    //     open: false,
    //   },
    //   {
    //     question: "Promoting Sustainable Water Management for Community Well-being",
    //     answer:
    //       "Through education and advocacy, we work towards the maintenance and restoration of local water bodies, ensuring sustainable access to clean water for rural communities.",
    //     open: false,
    //   },
    //   {
    //     question: "Renewable Energy Solutions for a Sustainable Tomorrow",
    //     answer:
    //       "Lokarpan leads the charge in renewable energy production, committed to a low carbon footprint for a cleaner, greener future.",
    //     open: false,
    //   },
    //   {
    //     question: "Addressing Indoor Air Pollution",
    //     answer:
    //       "We promote environmentally-friendly, renewable energy sources such as Biogas to educate rural communities on safe cooking methods, including smokeless technologies like improved chulhas and solar cookers to mitigate indoor air pollution.",
    //     open: false,
    //   },
    // ]);
  
    // const toggleFAQ = (index) => {
    //   setFaqs(
    //     faqs.map((faq, i) => {
    //       if (i === index) {
    //         faq.open = !faq.open;
    //       } else {
    //         faq.open = false;
    //       }
  
    //       return faq;
    //     })
    //   );
    // };


    const scrollToTopAndNavigate = () => {
      window.scrollTo(0, 0); 
    };



    const Desp = [
      {
        id: 1,
        img: "https://res.cloudinary.com/dtfzxqpoy/image/upload/v1713120024/shuffle_ehqjjw.png",
        head: "Enhancing Green Cover for a Sustainable Future",
        des: "Lokarpan's tree planting endeavours are paving the way for a greener, healthier environment for generations to come.",
      },
      {
        id: 2,
        img: "https://res.cloudinary.com/dtfzxqpoy/image/upload/v1713120024/shuffle_ehqjjw.png",
        head: "Tracking Exotic Bird Populations for Biodiversity Conservation",
        des: "Our efforts in bird migration tracking contribute to scientific knowledge and vital conservation strategies, ensuring the continued existence of these fascinating avian species.",
      },
      {
        id: 3,
        img: "https://res.cloudinary.com/dtfzxqpoy/image/upload/v1713120024/shuffle_ehqjjw.png",
        head: "Promoting Sustainable Water Management for Community Well-being",
        des: "Through education and advocacy, we work towards the maintenance and restoration of local water bodies, ensuring sustainable access to clean water for rural communities.",
      },
      {
        id: 4,
        img: "https://res.cloudinary.com/dtfzxqpoy/image/upload/v1713120024/shuffle_ehqjjw.png",
        head: "Renewable Energy Solutions for a Sustainable Tomorrow",
        des: "Lokarpan leads the charge in renewable energy production, committed to a low carbon footprint for a cleaner, greener future.",
      },
      {
        id: 5,
        img: "https://res.cloudinary.com/dtfzxqpoy/image/upload/v1713120024/shuffle_ehqjjw.png",
        head: "Addressing Indoor Air Pollution",
        des: "We promote environmentally-friendly, renewable energy sources such as Biogas to educate rural communities on safe cooking methods, including smokeless technologies like improved chulhas and solar cookers to mitigate indoor air pollution.",
      },
    ];


    return (
      <>
        <Navbar />
        <div className="fellowship-nav">
          <h1>Environment</h1>
        </div>
        <div className="health-container">
          <div className="health-full-img-text">
            <h1 className="environment-main-head">
              We aim to cultivate a greener, more sustainable future, ensuring the well-being of both people and the environment. 
            </h1>
          </div>
          <div className="health-container-section environment-container-section">
            
            {/* <div className="health-each-container"> */}
              {/* <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704897449/Rectangle_1764_nfpppj.png"
                alt="learn-img"
                className="health-cont-img"
              /> */}
              {/* <div className="health-cont-img-div health-img1"></div>
                <div className="health-content-section justify-top content-right">
                  <div className="mission-principles-container-in">
                  <p className="health-lokarpan-head4">Will you help transform lives today?</p>
                  <p className="health-lokarpan-head4">Our focus Areas</p>
                  <p className="health-para">Will you help transform lives today?</p>
                  <div className="faqs">
                    {faqs.map((faq, index) => (
                      <FAQ
                        faq={faq}
                        index={index}
                        key={index}
                        toggleFAQ={toggleFAQ}
                      />
                    ))}
                  </div>
                </div>
              </div> */}


              <div className="livelihood-top-section">
              <h1 className="livelihood-desp-cards-head">
                Our focus Areas
              </h1>
              <div className="desp-cards environment-desp-cards">
                {Desp.map((item, index) => (
                  <DespCard key={index} item={item} index={index} totalCount={Desp.length}/>
                ))}
              </div>
            {/* </div> */}

            
            </div>
         
            

            <div className="livelihood-top-section environment-bottom-section">
              <h1>Imagine the impact of clean water in a rural village for the very first time. It marks the beginning of a transformation, a turning point towards a brighter future.</h1>
              <p>Right now, in countless rural areas like those we serve, millions of families lack access to safe water, clean toilets, and proper hygiene. For children like those in our communities, this means enduring long walks to collect water, missing school, and facing the risk of illness.</p>
              <p>By supporting Lokarpan's initiatives, you're not just providing water—you're changing lives. Your contribution helps us conserve precious water sources, ensuring that rural communities can spend more time learning and growing, rather than struggling for the basics.</p>
              <p>Join us in our mission to safeguard water resources, replenish depleted ponds, and protect freshwater ecosystems. Together, we'll make sure that every community we touch has access to clean water, decent sanitation, and the knowledge to maintain a healthy environment for generations to come.</p>
              
            </div>
          </div>


          <div className="donate-section">
              <h1 className="last-space">Be a Catalyst for Change</h1>
              <p className="our-role-font24">
              Join Lokarpan in our mission to combat social and economic disparities, empowering at-risk communities for a brighter future. Your support fuels innovation and transformative impact.
              </p>
              {/* <Link to="/donate" onClick={this.scrollToTop}> */}
              <Link to="/donate" onClick={scrollToTopAndNavigate}>
                <button type="button" className="our-role-apply-btn">
                  Donate
                </button>
              </Link>
            </div>


          {/* <div className="health-full-img space-below">
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704818233/image_176_tcqfoh.png"
              alt="health-img"
            />
          </div> */}
        </div>

        <Footer />
      </>
    );
}




const DespCard = ({ item, index, totalCount }) => {
  const isOddTotalCount = totalCount % 2 !== 0;
  const isLastCard = index === totalCount - 1;
  const cardClassName = `desp-card-list livelihood-card-list ${isOddTotalCount && isLastCard ? 'last-card' : ''}`;

  return (
    <div className={cardClassName}>
      <img src={item.img} style={{width: "50px", height: "50px", paddingBottom: "20px"}}/>
      <h4>{item.head}</h4>
      <p>{item.des}</p>
    </div>
  );
};

export default Environment;
