import React, { useState, Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// import "./index.css";
import "../Health/index.css";
import FAQ from "../About/Mission/faq";
import { Link } from "react-router-dom";

const Environment = () => {
  
    const [faqs, setFaqs] = useState([
      {
        question: "Enhancing Green Cover for a Sustainable Future",
        answer:
          "Lokarpan's tree planting endeavours are paving the way for a greener, healthier environment for generations to come.",
        open: false,
      },
      {
        question: "Tracking Exotic Bird Populations for Biodiversity Conservation",
        answer:
          "Our efforts in bird migration tracking contribute to scientific knowledge and vital conservation strategies, ensuring the continued existence of these fascinating avian species.",
        open: false,
      },
      {
        question: "Promoting Sustainable Water Management for Community Well-being",
        answer:
          "Through education and advocacy, we work towards the maintenance and restoration of local water bodies, ensuring sustainable access to clean water for rural communities.",
        open: false,
      },
      {
        question: "Renewable Energy Solutions for a Sustainable Tomorrow",
        answer:
          "Lokarpan leads the charge in renewable energy production, committed to a low carbon footprint for a cleaner, greener future.",
        open: false,
      },
      {
        question: "Addressing Indoor Air Pollution",
        answer:
          "We promote environmentally-friendly, renewable energy sources such as Biogas to educate rural communities on safe cooking methods, including smokeless technologies like improved chulhas and solar cookers to mitigate indoor air pollution.",
        open: false,
      },
    ]);
  
    const toggleFAQ = (index) => {
      setFaqs(
        faqs.map((faq, i) => {
          if (i === index) {
            faq.open = !faq.open;
          } else {
            faq.open = false;
          }
  
          return faq;
        })
      );
    };


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
            <h1 className="environment-main-head">
              We aim to cultivate a greener, more sustainable future, ensuring the well-being of both people and the environment. 
            </h1>
          </div>
          <div className="health-container-section environment-container-section">
            
            <div className="health-each-container">
              {/* <img
                src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704897449/Rectangle_1764_nfpppj.png"
                alt="learn-img"
                className="health-cont-img"
              /> */}
              <div className="health-cont-img-div health-img1"></div>
                <div className="health-content-section justify-top content-right">
                  <div className="mission-principles-container-in">
                  <p className="health-lokarpan-head4">Will you help transform lives today?</p>
                  {/* <p className="health-para">Will you help transform lives today?</p> */}
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
                {/* <p className="health-para">
                  Lokarpan’s learning centre heavily invests in creating a
                  specially designed curriculum that aims to address learning
                  gaps in children. With digital classrooms, we’re making
                  learning more fun and memorable. 1 lakh trees planted.
                </p> */}
              </div>
            </div>
            {/* <div className="health-each-container">
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
              <div className="health-cont-img-div health-img2"></div>
            </div> */}
            {/* <div className="health-each-container">
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
            </div> */}

            <div className="livelihood-top-section environment-bottom-section">
              <h1>Imagine the impact of clean water in a rural village for the very first time. It marks the beginning of a transformation, a turning point towards a brighter future.</h1>
              <p>Right now, in countless rural areas like those we serve, millions of families lack access to safe water, clean toilets, and proper hygiene. For children like those in our communities, this means enduring long walks to collect water, missing school, and facing the risk of illness.</p>
              <p>By supporting Lokarpan's initiatives, you're not just providing water—you're changing lives. Your contribution helps us conserve precious water sources, ensuring that rural communities can spend more time learning and growing, rather than struggling for the basics.</p>
              <p>Join us in our mission to safeguard water resources, replenish depleted ponds, and protect freshwater ecosystems. Together, we'll make sure that every community we touch has access to clean water, decent sanitation, and the knowledge to maintain a healthy environment for generations to come.</p>
              <p>To make lasting change happen on a massive scale, we work with local governments and people on the ground; change attitudes and behaviours; pool knowledge and resources; and rally support from partners and organisations around the world.</p>
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

export default Environment;
