import "./Mission.css";
import FAQ from "./faq";
import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import SubNavbar from "../../Navbar/SubNavbar";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
const Mission = () => {


  const [popupVisibility, setPopupVisibility] = useState([false, false]); // Initialize with false for each popup

  const openpopup = (index) => {
    const updatedVisibility = [...popupVisibility];
    updatedVisibility[index] = true;
    setPopupVisibility(updatedVisibility);
  };

  const closepopup = (index) => {
    const updatedVisibility = [...popupVisibility];
    updatedVisibility[index] = false;
    setPopupVisibility(updatedVisibility);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.which === 27) {
        setPopupVisibility(popupVisibility.map(() => false));
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [popupVisibility]);

  useEffect(() => {
    if (popupVisibility.some((isVisible) => isVisible)) {
      document.body.classList.add('body-no-scroll');
    } else {
      document.body.classList.remove('body-no-scroll');
    }
  }, [popupVisibility]);

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
              Lokarpan is dedicated to bringing the best minds together and offering innovative solutions to support and empower underserved communities. We create and support participatory projects to address socio-economic issues in rural India. <br/>
              <div className="hyperlinks mission-popup">
              <div className="apply-btn white">
                  <span  onClick={() => openpopup(0)} className="mission-read-more apply-btn-text-black body-btn">Read more</span>
              </div>
              </div>
            </div>
            {popupVisibility[0] && (
              <div className="misson-popup">
                <div className="misson-popup-content">
                  <RxCross2 
                    onClick={() => closepopup(0)} 
                    className="x"
                  />
                  <p className="mission-para">
                  At Lokarpan, a spirit of innovation has always guided our path. From our early days, our team has been driven by a relentless pursuit of excellence, refusing to settle for anything less than the best. This ethos was embodied by our founder, H.V. Singh, a man of unwavering patience and a sincere belief in the shared responsibility of all community members for fostering true transformation.
                  </p>
                  <p className="mission-para">
                  In 1996, Lokarpan was born from Singh's vision, dedicated to addressing some of the most pressing challenges in our communities: high child mortality, unemployment, socio-economic disparities, and inadequate education. The organisation helped revitalise the communities, reform the education system and rescue mothers and their children from neonatal complications in the region.
                  </p>
                  <p className="mission-para">
                  Over the past 28 years, we have worked hand-in-hand with communities, listening to their needs and aspirations to develop tailored solutions. Today, we are pioneering a new era of education with fully immersive, cross-compatible technologies designed to enhance learning outcomes and empower both students and teachers.
                  </p>
                </div>
              </div>
            )}
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

        {/* <div className="our-principles">
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
        </div> */}

        <section className="our-purpose">
          <div className="give-card give-card-reverse mission-principles-container">
            <div className="give-card-text">
              <div className="mission-principles-container-in">
              <h1>Our Principles</h1>
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
            </div>
            <div className="give-card-img mission-card-img-1"></div>
          </div>
        </section>

        <section className="our-purpose">
          <div className="give-card give-card-reverse">
            <div className="give-card-img mission-card-img-1"></div>
            <div className="give-card-text">
              <h1>Our Culture</h1>
              <p>
              At Lokarpan, our work culture is defined by a steadfast commitment to growth, both for our organisation and the communities we serve. Our goal is to expand opportunities for all, breaking down barriers to access and creating pathways to success. <br/>
              <span onClick={() => openpopup(1)} className="mission-read-more">Know more</span>
              </p>
              {popupVisibility[1] && (
                <div className="misson-popup">
                  <div className="misson-popup-content">
                    <RxCross2 
                      onClick={() => closepopup(1)} 
                      className="x"
                    />
                    <p className="mission-para">
                    Central to our culture is the principle of including all voices, from every member of our diverse team to the individuals and communities we work with. We believe that everyone has a valuable perspective to contribute, and we actively seek out and respect diverse viewpoints in our decision-making processes.
                    </p>
                    <p className="mission-para">
                    In times of crisis, our culture shines through as we respond swiftly and effectively to provide support and assistance where it is most needed. We are committed to advancing sustainability, both environmentally and socially, by implementing practices that promote long-term well-being and resilience.
                    </p>
                    <p className="mission-para">
                    At Lokarpan, our work culture is more than just a set of values – it is a way of life that guides us in everything we do. We are driven by a shared passion for making a positive impact in the world, and we strive to create an environment where every individual can thrive and contribute to creating a brighter future for all.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        <section className="our-purpose">
          <div className="give-card">
            <div className="give-card-text">
              <h1>Ethics and Compliance</h1>
              <p>
              At Lokarpan, we conduct our operations ethically, honestly, and in strict compliance with the law. We believe that our conduct is just as crucial to our success as our commitment to empowering communities. Our Ethics and Compliance policies form the bedrock of our business practices, guiding us in upholding our values and principles each day.<br/>
              <span onClick={() => openpopup(2)} className="mission-read-more">Know more</span>
              </p>
              {popupVisibility[2] && (
                <div className="misson-popup">
                  <div className="misson-popup-content">
                    <RxCross2 
                      onClick={() => closepopup(2)} 
                      className="x"
                    />
                    <p className="mission-para">
                    At Lokarpan, our ethics and compliance policy is deeply rooted in a set of core principles that guide our every action and decision. First and foremost, we uphold honesty as a fundamental value, ensuring transparency and integrity in all our dealings. This commitment to honesty extends to maintaining strict confidentiality, respecting the privacy and trust of all individuals involved in our programs.
                    </p>
                    <p className="mission-para">
                    Central to our approach is the belief in giving everyone a voice, from our dedicated staff to the communities we serve. We empower individuals to become self-reliant by fostering an environment where their opinions are valued and their ideas are heard. Through participatory approaches, we collaborate with communities to co-create solutions that address their unique needs and challenges.
                    </p>
                    <p className="mission-para">
                    As an organisation, we actively disincentivize ourselves from actions that may compromise the well-being or interests of those we serve. We believe in help through action, not just words, and strive to make a tangible difference in the lives of individuals and communities. Our ethics are grounded in first principles thinking, constantly questioning assumptions and seeking innovative, sustainable solutions to complex problems.
                    </p>
                    <p className="mission-para">
                    Through these guiding principles, Lokarpan remains steadfast in our commitment to ethical conduct, ensuring that every action we take aligns with our mission of creating a more equitable, inclusive, and empowered society.
                    </p>
                  </div>
                </div>
              )}
              <div className="hyperlinks coc-link">
              <div className="apply-btn transparent">
                  <Link to="/code-of-conduct" className="apply-btn-text-black body-btn">Code of Conduct</Link>
              </div>
              </div>
            </div>
          <div className="give-card-img mission-card-img-2"></div>
            {/* <div className="give-card-img mission-card-img-1"></div> */}
          </div>
        </section>
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
        {/* </section> */}
      </div>
      <Footer />
    </div>
  );
};

export default Mission;
