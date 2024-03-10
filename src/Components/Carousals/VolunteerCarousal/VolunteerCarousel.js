import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./VolunteerCarousel.css";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

const VolunteerCarousel = () => {
  const persons = [
    {
      name: "Ellen",
      position: "SOFTWARE ENGINEER",
      desp: "Our goal was to help make proper diagnosis of bacterial infections more equitable and accessible, and ultimately to slow the spread of antibiotic-resistant bacteria. Working with Médecins Sans Frontières (MSF or Doctors without Borders) through the Google.org Fellowship has been a dream come true. First and foremost, it was fulfilling to work on saving lives. Secondarily, I was able to grow new skills very quickly, which has made me a more well-rounded engineer.",
      img: "https://lh3.googleusercontent.com/9REEk-wB0sHICrkyVRTy80exW_7CWIQPjUBdvyuRjsJ4Bn2cbW12G_oaZZY8TOJjwwVLd5-HhhwORP0VIDJYnq6W2enbDDgNm8rt9Q=w1424-h1600-n-l80-sg-rj",
    },
    {
      name: "Charniece",
      position: "PRODUCT MANAGER",
      desp: "I was motivated by the opportunity to combine my technical skills with my passion for criminal justice reform. My fellowship with the Vera Institute offered me the rigor and challenge I was craving professionally, while simultaneously enabling me to have a bigger impact on our legal system.",
      img: "https://lh3.googleusercontent.com/vndE4LkIZBHKAM9ZkPqbJaQZUaOtEuFQVFiuw5fbsDhotYBpCJjmMx0B1KVBlJ26OvX6j7wC5RSoal9RrbN0797vUhpJlO5CHmZT=w1424-h1600-n-l80-sg-rj",
    },
    {
      name: "Ben",
      position: "SOFTWARE ENGINEER",
      desp: "Full Fact is a UK-based independent fact checking organization. We worked together to create machine learning-based software that can identify claims and quotes from various news sources, including online newspapers, social media, and online radio, and help fact checkers verify their accuracy.",
      img: "https://lh3.googleusercontent.com/pxmzlbe911EcLkLZ1FsRg5hrzARbSlfwHqbjqYEsY_l5AQrLIq12OuW9YEr-saw8O_CSi4PcIJzTy5AdGrdEHkXbgGJTnHUpfM1W9S4=w1424-h1600-n-l80-sg-rj",
    },
    {
      name: "Aamir",
      position: "PRODUCT MANAGER",
      desp: "TalkingPoints is using AI to enable parent-teacher communication to help improve student outcomes in underserved communities. The best part of the experience was getting to work with an inspiring nonprofit, facing the same challenges and issues as them and figuring out creative solutions that scale.",
      img: "https://lh3.googleusercontent.com/sxQDSkuwvYgGthGmITPd-Uda9GCnajOumttBLqKgQnV1abpAWCIibt-xGgGVowZlLvBUuyTjUM6Xxy4E999DSHPNWtSuBC9AoTAP0Ak=w1424-h1600-n-l80-sg-rj",
    },
    {
      name: "Samantha",
      position: "SOFTWARE ENGINEER",
      desp: "Thorn focuses on building technology to defend children from online sexual abuse. During my fellowship, I was reminded that our mission as engineers is not to simply build the newest and fastest technologies: our mission is to seek solutions to pressing problems no matter how daunting.",
      img: "https://lh3.googleusercontent.com/x5GrNOcE9BRqQ9hXl91EOBxEvSq7rZzy8ARrSrn1NPMP3RdqpXvGhhvX02ph3EKjp9iyX0R5tswT_d54GtC3ABBaL9npRLVC9A3lwA=w1424-h1600-n-l80-sg-rj",
    },
  ];

  const CustomPrevArrow = (props) => (
    <div
      {...props}
      className="custom-arrow prev-arrow"
      style={{
        ...props.style,
        bottom: "5%",
        left: "17%",
        transform: "translateX(-50%)",
        zIndex: 1,
      }}
    >
      <IoChevronBackOutline className="app-nav-icon"/>
    </div>
  );

  const CustomNextArrow = (props) => (
    <div
      {...props}
      className="custom-arrow next-arrow"
      style={{
        ...props.style,
        bottom: "5%",
        left: "19%",
        transform: "translateX(50%)",
        zIndex: 1,
      }}
    >
      <IoChevronForward className="app-nav-icon"/>
    </div>
  );

  const [activeSlide, setActiveSlide] = useState(0);
  
  const handleAfterChange = (index) => {
    setActiveSlide(index);
  };

  const [showDots, setShowDots] = useState(window.innerWidth > 1170);

  useEffect(() => {
    const handleResize = () => {
      setShowDots(window.innerWidth > 1170);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    customPaging: function (i) {
      const { name, img } = persons[i];
      return (
        <a>
          <img
            style={{
              width: "70px",
              height: "70px",
              opacity: "1",
            }}
            src={img}
            title={name}
            alt=""
          />
        </a>
      );
    },
    dots:  showDots, 
    dotsClass: "slick-dots slick-thumb",
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          padding: "10px",
          top: "70%",
          left: "-37%",
        }}
      >
        <ul style={{ margin: "0px", opacity: "1" }}> {dots} </ul>
      </div>
    ),
    afterChange: handleAfterChange,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <>
      <div className="volunteer-carousel-main">
        <div className="carousel-container">
          <div>
            <Slider className="slider" {...settings}>
              {persons.map((item, index) => (
                <div className="remove-inline-block">
                  <div className="carousel-container1">
                    <div key={index} className="carousel-inner">
                      <h2>{item.name}</h2>
                      <h3>{item.position}</h3>
                      <p>{item.desp}</p>
                    </div>
                  </div>
                  <div className="carousel-container2">
                    <div
                      key={index}
                      className="main-img"
                      style={{
                        // padding: "20px",
                      }}
                    >
                      <img src={item.img} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default VolunteerCarousel;
