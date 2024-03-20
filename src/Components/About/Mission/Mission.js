import "./Mission.css";
import FAQ from "./faq";
import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import SubNavbar from "../../Navbar/SubNavbar";
const Mission = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Community Empowerment",
      answer:
        "Lokarpan is committed to actively engaging and empowering rural communities, ensuring their voices are heard and their needs are addressed through collaborative projects.",
      open: false,
    },
    {
      question: "Innovation for Impact",
      answer:
        "We believe in harnessing innovative and sustainable solutions to create meaningful and lasting change in the lives of those we serve, constantly seeking new ways to improve.",
      open: false,
    },
    {
      question: "Equity for All",
      answer:
        "Lokarpan upholds the principles of equity and inclusivity, striving to create a world where every individual has equal access to opportunities, resources, and rights, regardless of their background or circumstance.",
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
    <div>
      <Navbar />
      <SubNavbar />
      <div className="mission-section-container">
        <section className="mission-1st-secction">
          <div className="mission-1st-section-inner"> 
            <div className="mission-head">Our purpose, mission, and values</div>
            <div className="mission-content1">
              To help our clients make distinctive, lasting, and substantial
              improvements in their performance and to build a great firm that
              attracts, develops, excites, and retains exceptional people.
            </div>
            <div className="mission-content2">
              We are a values-driven organization. Our values reflect the thinking
              of our founder, James O. McKinsey, and Marvin Bower, managing
              director from 1950 to 1967, who was a major force in shaping the
              firm. Our values have been updated in small ways to reflect the
              changing times. They inform both our long-term strategy as a firm
              and the way we serve our clients on a daily basis. We put aside one
              day a year to reflect as a group on what our values mean to both our
              work and our lives.
            </div>
          </div>
        </section>
        <section className="our-purpose">
          {/* <div className="image-cont">
            <div className="h1">Our purpose</div>
            <div className="purpose-cont">
            We strive to create connections that transcend barriers of poverty, gender, caste, and religion. Lokarpan is committed to driving growth and creating opportunities that uplift our beneficiaries and foster dignity and self-respect.
            </div>
          </div>

          <div className="image-purpose">
            <div className="imgg"></div>
          </div> */}
          <div className="give-card give-card-reverse">
            <div className="give-card-text">
              <h1>Our purpose</h1>
              <p>
              We strive to create connections that transcend barriers of poverty, gender, caste, and religion. Lokarpan is committed to driving growth and creating opportunities that uplift our beneficiaries and foster dignity and self-respect.
              </p>
            </div>
            <div className="give-card-img give-card-img-1"></div>
          </div>
        </section>
        {/* <section className="our-purpose-mobile">
          <div className="our-purpose1-image"></div>
          <div className="our-purpose-mobile-h1">Our purpose</div>
          <div className="our-purpose-mobile-cont">
          We strive to create connections that transcend barriers of poverty, gender, caste, and religion. Lokarpan is committed to driving growth and creating opportunities that uplift our beneficiaries and foster dignity and self-respect.
          </div>
        </section> */}
        <section className="our-mission-mobile">
          <div className="our-mission-mobile-image"></div>
          <div className="our-mission-text">
            <div className="our-mission-text-heading">Our Mission</div>
            <div className="our-mission-text-content">
            At Lokarpan, our mission is to empower rural communities through innovative and sustainable solutions. Since 1996, we have been dedicated to improving the social and economic conditions of those living in stress.
            </div>
            <div className="our-mission-text-button">
              <button>Read More</button>
            </div>
          </div>
        </section>

        <section className="our-purpose">
          {/* <div className="image-cont">
            <div className="h1">Our Principles</div>
            <div className="purpose-cont">
              They embody what we stand for and guide our approach to how we
              build technology for people and their relationships.
            </div>
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

          <div className="image-purpose">
            <div className="imgg"></div>
          </div> */}
          <div className="give-card give-card-reverse">
            <div className="give-card-text">
              <h1>Our Principles</h1>
              <p>
                They embody what we stand for and guide our approach to how we
                build technology for people and their relationships.
              </p>
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
            <div className="give-card-img give-card-img-1"></div>
          </div>
        </section>
        {/* <section className="our-purpose1">
          <div className="our-purpose1-image"></div>

          <div className="image-cont1">
            <div className="h2">Our Principles</div>
            <div className="purpose-cont1">
              They embody what we stand for and guide our approach to how we
              build technology for people and their relationships.
            </div>
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
        </section> */}
        <section className="our-vision">
          <div className="our-vision-head">Our Values</div>
          <div className="our-vision-subhead">
            Adhere to the highest professional standards
          </div>
          <div className="our-vision-text">
            Lokarpan values education as a transformative tool. We have impacted over 14,000 children through our education programs, focusing on curriculum advancement and infrastructure development. Our commitment extends to training teachers and developing interactive, engaging learning tools to ensure every child reaches their full potential.
          </div>
          <div className="our-vision-button">
            <button>Loren Ipsun</button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Mission;
