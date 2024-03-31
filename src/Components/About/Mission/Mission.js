import "./Mission.css";
import FAQ from "./faq";
import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import SubNavbar from "../../Navbar/SubNavbar";
import { Link } from "react-router-dom";
const Mission = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Community centric collaboration",
      answer:
        "Lokarpan is dedicated to actively engaging and empowering rural communities, ensuring their voices are heard and their needs are addressed through collaborative projects. We believe that true progress is achieved when communities are active participants in their own development, and we work to build partnerships that foster sustainable growth and self-reliance.",
      open: false,
    },
    {
      question: "Equity and Inclusivity",
      answer:
        "Lokarpan upholds the principles of equity and inclusivity, striving to create a world where every individual has equal access to opportunities, resources, and rights, regardless of their background or circumstance. We are committed to breaking down barriers and addressing systemic inequalities, working towards a society where everyone can thrive and contribute to the common good.",
      open: false,
    },
    {
      question: "Innovate solutions that are sustainable.",
      answer:
        "Our goal is to improve the socioeconomic status of rural India. We are working hard to ensure that our projects provide the necessary support and resources to our beneficiaries. Lokarpan supports its partners with capacity building, institutional development, planning, review, financial management, documentation and overall supportive supervision.",
      open: false,
    },
    {
      question: "Create connections that make a difference.",
      answer:
        "Lokarpan strives to create a world where individuals have dignity and self-respect. A world where people respect each other across the barriers of poverty, gender, caste and religion. Over the years, Lokarpan has driven incredible growth and created entirely new opportunities for our beneficiaries.",
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
            <div className="mission-head">Lokarpan offers solutions to empower communities living in stress.</div>
            <div className="mission-content1">
            Lokarpan is dedicated to bringing the best minds together and offering innovative solutions to support and empower underserved communities. We create and support participatory projects to address socio-economic issues in rural India.<Link to={"/mission-text"} className="mission-read-more">Read more</Link>
            </div>
          </div>
        </section>
        {/* <section className="our-mission-mobile">
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
        </section> */}

        <div className="our-principles">
          <h1 className="our-principles-main-head">Our Vision</h1>
          <div className="our-principles-inner">
            <div className="ourp-left">
              <h3 className="our-principles-head">Innovate solutions that are sustainable.</h3>
              <p>Our goal is to improve the socioeconomic status of rural India. We are working hard to ensure that our projects provide the necessary support and resources to our beneficiaries. Lokarpan supports its partners with capacity building, institutional development, planning, review, financial management, documentation and overall supportive supervision.</p>
            </div>
            <div className="ourp-right">
              <h3 className="our-principles-head">Create connections that make a difference.</h3>
              <p>Lokarpan strives to create a world where individuals have dignity and self-respect. A world where people respect each other across the barriers of poverty, gender, caste and religion. Over the years, Lokarpan has driven incredible growth and created entirely new opportunities for our beneficiaries.</p>
          </div>
          </div>
        </div>

        <div className="our-principles">
          <h1 className="our-principles-main-head">Our Principles</h1>
          <div className="our-principles-inner">
            <div className="ourp-left">
              <h3 className="our-principles-head">Community centric collaboration</h3>
              <p>Lokarpan is dedicated to actively engaging and empowering rural communities, ensuring their voices are heard and their needs are addressed through collaborative projects. We believe that true progress is achieved when communities are active participants in their own development, and we work to build partnerships that foster sustainable growth and self-reliance.</p>
            </div>
            <div className="ourp-right">
              <h3 className="our-principles-head">Equity and Inclusivity</h3>
              <p>Lokarpan upholds the principles of equity and inclusivity, striving to create a world where every individual has equal access to opportunities, resources, and rights, regardless of their background or circumstance. We are committed to breaking down barriers and addressing systemic inequalities, working towards a society where everyone can thrive and contribute to the common good.</p>
          </div>
          </div>
        </div>

        {/* <section className="our-principles">
          <div className="our-principles-inner">
            <div className="our-principles-text">
              <h1>Our Principles</h1>
              <div className="faqs">
                {lastTwoFaqs.map((faq, index) => (
                  <FAQ
                    faq={faq}
                    // index={index}
                    // key={index}
                    // toggleFAQ={toggleFAQ}
                    index={index + 2}
                    key={index}
                    toggleFAQ={() => toggleFAQ(index + 2)}

                  />
                ))}
              </div>
            </div>
            <div className="our-principles-image">
            </div>
          </div>
        </section> */}

        {/* <section className="our-purpose">
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
            <img src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1711614679/cannon_013_1_df4fp7.png"/>
          </div>
        </section> */}

        <section className="our-purpose">
          <div className="give-card give-card-reverse">
            <div className="give-card-text">
              <h1>Our Culture</h1>
              <p>
              At Lokarpan, our work culture is defined by a steadfast commitment to growth, both for our organisation and the communities we serve. Our goal is to expand opportunities for all, breaking down barriers to access and creating pathways to success.
              <span><Link to={'/our-culture'} className="mission-read-more">Know more</Link></span>
              </p>
            </div>
            <div className="give-card-img mission-card-img-1"></div>
          </div>
        </section>
        <section className="our-purpose">
          <div className="give-card">
          <div className="give-card-img mission-card-img-1"></div>
            <div className="give-card-text">
              <h1>Ethics and Compliance</h1>
              <p>
              At Lokarpan, we conduct our operations ethically, honestly, and in strict compliance with the law. We believe that our conduct is just as crucial to our success as our commitment to empowering communities. Our Ethics and Compliance policies form the bedrock of our business practices, guiding us in upholding our values and principles each day.
              <span><Link to={'/ethics'} className="mission-read-more">Know more</Link></span>
              </p>
            </div>
            {/* <div className="give-card-img mission-card-img-1"></div> */}
          </div>
        </section>

        {/* <section className="our-vision">
          <div className="our-vision-head">Our Culture</div>
          <div className="our-vision-subhead">
            Adhere to the highest professional standards
          </div>
          <div className="our-vision-text">
          At Lokarpan, our work culture is defined by a steadfast commitment to growth, both for our organisation and the communities we serve. Our goal is to expand opportunities for all, breaking down barriers to access and creating pathways to success.
          </div>
          <div className="hyperlinks">
          <div className="apply-btn transparent">
              <Link to="/our-culture" className="apply-btn-text-black body-btn">Know more</Link>
          </div>
          </div>
        </section> */}
        {/* <section className="our-vision"> */}
          {/* <div className="our-vision-head">Ethics and Compliance</div>
          <div className="our-vision-text">
          At Lokarpan, we conduct our operations ethically, honestly, and in strict compliance with the law. We believe that our conduct is just as crucial to our success as our commitment to empowering communities. Our Ethics and Compliance policies form the bedrock of our business practices, guiding us in upholding our values and principles each day.
          </div>
          <div className="hyperlinks">
          <div className="apply-btn transparent">
              <Link to="/ethics" className="apply-btn-text-black body-btn">Know more</Link>
          </div>
          </div> */}
          <div className="hyperlinks coc-link">
          <div className="apply-btn transparent">
              <Link to="/code-of-conduct" className="apply-btn-text-black body-btn">Code of Conduct</Link>
          </div>
          </div>
        {/* </section> */}
      </div>
      <Footer />
    </div>
  );
};

export default Mission;
