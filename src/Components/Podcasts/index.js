import React, { useState, useEffect, useRef, Component } from "react";
import { FaSpotify, FaYoutube } from "react-icons/fa";
import EducationSubNav from "../Navbar/EducationSubNav";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { RxCross2 } from "react-icons/rx";
import { SiApplepodcasts, SiGooglepodcasts } from "react-icons/si";

import "./index.css";

const PodCasts = () => {
  const [popupVisibility, setPopupVisibility] = useState([false, false]);
  const headingRefs = useRef(Array.from({ length: 3 }, () => null));
  let intersectionObserver = null;

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

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-animation");
      } else {
        entry.target.classList.remove("fade-in-animation");
      }
    });
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

  
  useEffect(() => {
    intersectionObserver = new IntersectionObserver(
      handleIntersection,
      { threshold: 0.5 }
    );

    headingRefs.current.forEach((ref) => {
      if (ref) {
        intersectionObserver.observe(ref);
      }
    });

    return () => {
      if (intersectionObserver) {
        intersectionObserver.disconnect();
      }
    };
  }, []);



    return (
      <>
        <Navbar />
        <EducationSubNav />

        <div className="podcasts-container">
          <div className="podcasts-upper-section">
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708787270/Group_1603_ohioem.png"
              className="podcasts-img"
            />
            <h1 className="font64-podcasts">
            Connecting Classrooms, Bridging Learning Horizons
            </h1>
            <p className="font32-podcasts">
            Embark on an educational journey with our story podcasts, weaving captivating narratives to inspire young minds
            </p>
            <p className="font25-podcasts">Subscribe on</p>
            <div className="podcasts-icon-cont">
              <img src="https://res.cloudinary.com/digbzwlfx/image/upload/v1705863902/Group_1616_osia6s.svg" />
              <img src="https://res.cloudinary.com/digbzwlfx/image/upload/v1710060477/Group_1617_1_embkes.png" />
              <img src="https://res.cloudinary.com/digbzwlfx/image/upload/v1705863983/Capa_1_irtwa4.svg" />
              <img src="https://res.cloudinary.com/digbzwlfx/image/upload/v1705863949/Google_Podcasts_dadavu.svg" />
            </div>
          </div>
          <div className="podcast">
            <h1 className="font48-podcasts" 
            ref={(el) => headingRefs.current[0] = el}
            >
            Empowering Minds with Diverse Podcasts
            </h1>
            <h1 className="font48-podcasts" 
            ref={(el) => headingRefs.current[1] = el}
            >
            Seamless Learning, Anywhere, Anytime
            </h1>
            <h1 className="font48-podcasts" 
            ref={(el) => headingRefs.current[2] = el}
            >
            Virtual Experts Enriching Classroom Experiences
            </h1>
          </div>
          <h1 className="font24-podcasts space-blw">Speaker profiles</h1>
          <div className="like-container">
            <div className="like-left-cont">
              {/* <h1 className="font48-left-podcasts">Personalized Discovery</h1> */}
              <p className="font24-podcasts">
              Delve into the minds behind Lokarpan's captivating podcasts, where experts from diverse fields share their insights, experiences, and knowledge. Meet our speakers, ranging from educators to scientists, as they engage in thought-provoking discussions aimed at enriching young minds and inspiring curiosity. 
              </p>
            </div>
            <div className="like-right-cont">
              {/* <p className="font24-podcasts space-blw">Speaker profiles</p> */}
              <div className="like-right-img-cont">
                <img
                  src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1713273901/Screenshot_2024-04-16_185311_gwamnh.png"
                  className="like-img"
                  onClick={() => openpopup(0)}
                />
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708787838/Rectangle_1812_1_dhzqgy.png"
                  className="like-img"
                  onClick={() => openpopup(1)}
                />
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708787838/Rectangle_1812_1_dhzqgy.png"
                  className="like-img"
                  onClick={() => openpopup(2)}
                />
              </div>

              {popupVisibility[0] && (
              <div className="misson-popup">
                <div className="misson-popup-content">
                  <RxCross2 
                    onClick={() => closepopup(0)} 
                    className="x"
                  />
                  <div className="podcasts-pop">
                    <div className="podcasts-pop-img"></div>
                    <div className="podcasts-pop-text">
                      <h1>Osnat Pavese Rafael</h1>
                    <p className="mission-para">
                    Born and raised in Johannesburg, South Africa, Osnat is a qualified architect from the Technion-Israel Institute of Technology and an urban designer from the Bezalel Academy of Arts and Design. With a passion for leveraging her skills to empower marginalised communities, she is multilingual and deeply committed to amplifying the voices of the unheard. Osnat's master's project, spotlighting an informal settlement in Johannesburg, has been showcased at national and international conferences, alongside publication in a local newspaper and journal. Always eager to explore new cultures, she thrives on research and continual learning.
                    </p>
                    </div>
                  </div>
                  
                  
                </div>
              </div>
              )}
              {popupVisibility[1] && (
              <div className="misson-popup">
                <div className="misson-popup-content">
                  <RxCross2 
                    onClick={() => closepopup(1)} 
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
              {popupVisibility[2] && (
              <div className="misson-popup">
                <div className="misson-popup-content">
                  <RxCross2 
                    onClick={() => closepopup(2)} 
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
          </div>
          <div className="lower-podcasts-cont">
            <h1 className="font40-podcasts">Exploring Lokarpan's Podcast Universe</h1>
            <p className="font24-podcasts">
            Stay up to date on the latest news, features, and best practices that help us create an enriching content library
            </p>
            <div className="podcasts-icon-cont2">
              <FaSpotify className="icon-size" />
              <FaYoutube className="icon-size" />
              <SiApplepodcasts className="icon-size" />
              <SiGooglepodcasts className="icon-size" />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
// }

export default PodCasts;
