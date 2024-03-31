import React, { Component } from "react";
import { Link } from "react-router-dom";
import SubNavbar from "../Navbar/SubNavbar";
import { IoMdClose, IoMdExpand } from "react-icons/io";
import Popup from "reactjs-popup";
import Slider from "react-slick";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

class OurRole extends Component {
  constructor(props) {
    super(props);
    this.updatePopUpOpen = this.updatePopUpOpen.bind(this);
    this.containerRef = React.createRef();
    this.startX = null;
    this.startY = null;
    this.isMoving = false;
  }
  state = { active: "education", showContainer: true, isPopUpOpen: false };

  onChangeActive = (ele) => {
    this.setState({ active: ele, showContainer: true });
  };

  scrollBar = () => {
    const { isPopUpOpen } = this.state;
    if (isPopUpOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto", // Optional: Add smooth scrolling behavior
    });
  };

  updatePopUpOpen = () => {
    console.log("Entered");
    this.setState(
      (prevState) => ({
        isPopUpOpen: !prevState.isPopUpOpen,
      }),
      () => this.scrollBar()
    );
  };

  onKeyDown = (event, close) => {
    if (event.key === "Escape") {
      close();
    }
  };

  render() {
    const { active, showContainer, isPopUpOpen } = this.state;

    const containerClass = `our-role-each-container ${
      showContainer ? "show" : ""
    }`;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      arrows: false,
      centerMode: true,
    };

    return (
      <>
        <Navbar />
        <SubNavbar />
        <div className="our-role-container">
          <div className="top-section">
            <h1>
              We focus our work on the areas where we can have the largest
              impact.
            </h1>
          </div>
          <div className="menu-items">
            <div className="items">
              <div
                className={
                  active === "education" ? "element btn-active" : "element"
                }
                onClick={() => this.onChangeActive("education")}
              >
                Education
              </div>
              <div
                className={
                  active === "health" ? "element btn-active" : "element"
                }
                onClick={() => this.onChangeActive("health")}
              >
                Health
              </div>
              <div
                className={
                  active === "livelihood" ? "element btn-active" : "element"
                }
                onClick={() => this.onChangeActive("livelihood")}
              >
                Livelihood
              </div>
              <div
                className={
                  active === "design" ? "element btn-active" : "element"
                }
                onClick={() => this.onChangeActive("design")}
              >
                Design
              </div>
              <div
                className={
                  active === "environment" ? "element btn-active" : "element"
                }
                onClick={() => this.onChangeActive("environment")}
              >
                Environment
              </div>
            </div>
          </div>
          {active === "education" && (
            <div className={containerClass}>
              <div className="our-role-each-container-content">
                <h1>Education</h1>
                <p>
                  Lokarpan is dedicated to bridging gaps in the education system
                  through innovative, technology-assisted solutions for learners
                  of all ages. Our mission? To elevate India's representation in
                  the PISA rankings by 2027, benefiting over 100,000
                  individuals. With a diverse team of instructors, we actively
                  engage with students in schools and communities, focusing on
                  creating enhanced teaching tools, expanding skill development,
                  and integrating technology to deliver the very best
                  educational standards across rural India.
                </p>
              </div>
              <div className="education-cards-container ">
                <div className="cards-left-container">
                  <div className="card">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      <h4>Our Kith Programme</h4>
                      <h3>
                        Explore Lokarpan's engaging and tailored learning
                        solutions at our Kith n Kin centre. Learn more.
                      </h3>

                      <Popup
                        trigger={
                          <div className="expand-sec">
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onOpen={this.updatePopUpOpen}
                        onClose={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <button className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                  }}
                                  onClick={() => close()}
                                />
                              </button>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    Our Kith Programme
                                  </h3>
                                  <p className="popup-font20">
                                    At Lokarpan's Kith n Kin learning centre,
                                    we're dedicated to creating a specially
                                    designed curriculum that targets learning
                                    gaps in children.
                                  </p>
                                </div>
                                <div className="popup-right-container">
                                  <img
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <p className="popup-font16">
                                      Established in April 2014, the Kith and
                                      Kin School in Auraiya, Uttar Pradesh aims
                                      to elevate education levels in the region.
                                      Recognising the stark achievement gap
                                      between low-income and private schools,
                                      Lokarpan envisions a future where every
                                      child receives excellent education,
                                      fostering educational equity and unlocking
                                      India's potential.
                                    </p>
                                    <p className="popup-font16">
                                      The school's mission revolves around
                                      creating a holistic ecosystem for parents,
                                      students, and teachers. Through a
                                      specially designed curriculum, advanced
                                      teaching tools, skill development
                                      programs, and technology integration,
                                      Lokarpan seeks to empower students while
                                      supporting teachers in delivering the core
                                      curriculum effectively.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="popup-overlay"></div>
                          </>
                        )}
                      </Popup>
                    </div>
                  </div>
                </div>
                <div className="cards-right-container">
                  <div className="card space">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      <h4> Podcasts and Digital Content</h4>
                      <h3>
                        Bridging the education gap, Lokarpan offers a digital
                        content library focusing on English and STEM subjects,
                        empowering young learners. Immerse in our captivating
                        audio podcasts, where children can explore and practise
                        new realms of knowledge.
                      </h3>

                      <Popup
                        trigger={
                          <div className="expand-sec">
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onOpen={this.updatePopUpOpen}
                        onClose={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <button className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                  }}
                                  onClick={() => close()}
                                />
                              </button>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    PODCASTS AND DIGITAL CONTENT
                                  </h3>
                                  <p className="popup-font20">
                                    Lokarpan is dedicated to bridging gaps in
                                    the education system through innovative,
                                    technology-assisted solutions for learners
                                    of all ages. Our mission? To elevate India's
                                    representation in the PISA rankings by 2027,
                                    benefiting over 100,000 individuals. With a
                                    diverse team of instructors, we actively
                                    engage with students in schools and
                                    communities, focusing on creating enhanced
                                    teaching tools, expanding skill development,
                                    and integrating technology to deliver the
                                    very best educational standards across rural
                                    India.
                                  </p>
                                </div>
                                <div className="popup-right-container">
                                  <img
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <p className="popup-font16">
                                      GiveDirectly empowers marginalized
                                      communities and those affected by
                                      disasters like COVID-19 through direct
                                      cash transfers, which give people the
                                      flexibility to provide for their true
                                      needs, in contrast to in-kind donations.
                                      Since 2012, Google.org has provided over
                                      $10 million to GiveDirectly to support
                                      people in need and research the impact of
                                      GiveDirectly’s innovative approach.
                                    </p>
                                    <p className="popup-font16">
                                      GiveDirectly empowers marginalized
                                      communities and those affected by
                                      disasters like COVID-19 through direct
                                      cash transfers, which give people the
                                      flexibility to provide for their true
                                      needs, in contrast to in-kind donations.
                                      Since 2012, Google.org has provided over
                                      $10 million to GiveDirectly to support
                                      people in need and research the impact of
                                      GiveDirectly’s innovative approach.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="popup-overlay"></div>
                          </>
                        )}
                      </Popup>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      <h4>Fellowship</h4>
                      <h3>
                        Join Lokarpan's passionate team committed to making a
                        real impact. Our dedicated Fellows volunteer in
                        classrooms and support various departments, uniting to
                        shape a brighter future for rural education
                      </h3>

                      <Popup
                        trigger={
                          <div className="expand-sec">
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onOpen={this.updatePopUpOpen}
                        onClose={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <button className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                  }}
                                  onClick={() => close()}
                                />
                              </button>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">FELLOWSHIP</h3>
                                  <p className="popup-font20">
                                    Lokarpan is dedicated to bridging gaps in
                                    the education system through innovative,
                                    technology-assisted solutions for learners
                                    of all ages. Our mission? To elevate India's
                                    representation in the PISA rankings by 2027,
                                    benefiting over 100,000 individuals. With a
                                    diverse team of instructors, we actively
                                    engage with students in schools and
                                    communities, focusing on creating enhanced
                                    teaching tools, expanding skill development,
                                    and integrating technology to deliver the
                                    very best educational standards across rural
                                    India.
                                  </p>
                                </div>
                                <div className="popup-right-container">
                                  <img
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <p className="popup-font16">
                                      GiveDirectly empowers marginalized
                                      communities and those affected by
                                      disasters like COVID-19 through direct
                                      cash transfers, which give people the
                                      flexibility to provide for their true
                                      needs, in contrast to in-kind donations.
                                      Since 2012, Google.org has provided over
                                      $10 million to GiveDirectly to support
                                      people in need and research the impact of
                                      GiveDirectly’s innovative approach.
                                    </p>
                                    <p className="popup-font16">
                                      GiveDirectly empowers marginalized
                                      communities and those affected by
                                      disasters like COVID-19 through direct
                                      cash transfers, which give people the
                                      flexibility to provide for their true
                                      needs, in contrast to in-kind donations.
                                      Since 2012, Google.org has provided over
                                      $10 million to GiveDirectly to support
                                      people in need and research the impact of
                                      GiveDirectly’s innovative approach.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="popup-overlay"></div>
                          </>
                        )}
                      </Popup>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mobile-education-cards-container">
                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content" onClick={this.updatePopUpOpen}>
                    <h4>Kith n Kin</h4>
                    <h3>
                      At Lokarpan's learning centre, we're dedicated to creating
                      a specially designed curriculum that targets learning gaps
                      in children. With our digital classrooms, learning becomes
                      engaging and memorable.
                    </h3>

                    <Popup
                      trigger={
                        <div className="expand-sec">
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onOpen={this.updatePopUpOpen}
                      onClose={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <button className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                }}
                                onClick={() => close()}
                              />
                            </button>
                            <div className="popup-section">
                              <div className="popup-left-container">
                                <h3 className="popup-font40">KITH N KITH</h3>
                                <p className="popup-font20">
                                  Lokarpan is dedicated to bridging gaps in the
                                  education system through innovative,
                                  technology-assisted solutions for learners of
                                  all ages. Our mission? To elevate India's
                                  representation in the PISA rankings by 2027,
                                  benefiting over 100,000 individuals. With a
                                  diverse team of instructors, we actively
                                  engage with students in schools and
                                  communities, focusing on creating enhanced
                                  teaching tools, expanding skill development,
                                  and integrating technology to deliver the very
                                  best educational standards across rural India.
                                </p>
                              </div>
                              <div className="popup-right-container">
                                <img
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="popup-overlay"></div>
                        </>
                      )}
                    </Popup>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    <h4>Podcasts and Digital Content</h4>
                    <h3>
                      Bridging the education gap, Lokarpan offers a digital
                      content library focusing on English and STEM subjects,
                      empowering young learners. Immerse in our captivating
                      audio podcasts, where children can explore and practise
                      new realms of knowledge.
                    </h3>

                    <Popup
                      trigger={
                        <div className="expand-sec">
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onOpen={this.updatePopUpOpen}
                      onClose={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <button className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                }}
                                onClick={() => close()}
                              />
                            </button>
                            <div className="popup-section">
                              <div className="popup-left-container">
                                <h3 className="popup-font40">
                                  PODCASTS AND DIGITAL CONTENT
                                </h3>
                                <p className="popup-font20">
                                  Lokarpan is dedicated to bridging gaps in the
                                  education system through innovative,
                                  technology-assisted solutions for learners of
                                  all ages. Our mission? To elevate India's
                                  representation in the PISA rankings by 2027,
                                  benefiting over 100,000 individuals. With a
                                  diverse team of instructors, we actively
                                  engage with students in schools and
                                  communities, focusing on creating enhanced
                                  teaching tools, expanding skill development,
                                  and integrating technology to deliver the very
                                  best educational standards across rural India.
                                </p>
                              </div>
                              <div className="popup-right-container">
                                <img
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="popup-overlay"></div>
                        </>
                      )}
                    </Popup>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    <h4>Fellowship</h4>
                    <h3>
                      Join Lokarpan's passionate team committed to making a real
                      impact. Our dedicated Fellows volunteer in classrooms and
                      support various departments, uniting to shape a brighter
                      future for rural education
                    </h3>

                    <Popup
                      trigger={
                        <div className="expand-sec">
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onOpen={this.updatePopUpOpen}
                      onClose={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <button className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                }}
                                onClick={() => close()}
                              />
                            </button>
                            <div className="popup-section">
                              <div className="popup-left-container">
                                <h3 className="popup-font40">FELLOWSHIP</h3>
                                <p className="popup-font20">
                                  Lokarpan is dedicated to bridging gaps in the
                                  education system through innovative,
                                  technology-assisted solutions for learners of
                                  all ages. Our mission? To elevate India's
                                  representation in the PISA rankings by 2027,
                                  benefiting over 100,000 individuals. With a
                                  diverse team of instructors, we actively
                                  engage with students in schools and
                                  communities, focusing on creating enhanced
                                  teaching tools, expanding skill development,
                                  and integrating technology to deliver the very
                                  best educational standards across rural India.
                                </p>
                              </div>
                              <div className="popup-right-container">
                                <img
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="popup-overlay"></div>
                        </>
                      )}
                    </Popup>
                  </div>
                </div>
              </div>
            </div>
          )}
          {active === "health" && (
            <div className={containerClass}>
              <div className="education-cards-container">
                <div className="cards-right-container">
                  <div className="card space">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      <h4>Maternal and Child Health</h4>
                      <h3>
                        With a focus on reducing infant and maternal mortality
                        rates, Lokarpan prioritises providing essential midwife
                        support and valuable educational resources for families.
                      </h3>

                      <Popup
                        trigger={
                          <div className="expand-sec">
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onOpen={this.updatePopUpOpen}
                        onClose={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <button className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                  }}
                                  onClick={() => close()}
                                />
                              </button>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    MATERNAL AND CHILD HEALTH
                                  </h3>
                                  <p className="popup-font20">
                                    Lokarpan is committed to advancing community
                                    health through a range of impactful
                                    initiatives. Our goal is to reduce infant
                                    and mother mortality rates, ensuring a safe
                                    and healthy start for families. With a focus
                                    on providing midwife support, essential
                                    nutrition, and educational resources, we
                                    strive to empower mothers and children
                                    alike.
                                  </p>
                                </div>
                                <div className="popup-right-container">
                                  <img
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <p className="popup-font16">
                                      GiveDirectly empowers marginalized
                                      communities and those affected by
                                      disasters like COVID-19 through direct
                                      cash transfers, which give people the
                                      flexibility to provide for their true
                                      needs, in contrast to in-kind donations.
                                      Since 2012, Google.org has provided over
                                      $10 million to GiveDirectly to support
                                      people in need and research the impact of
                                      GiveDirectly’s innovative approach.
                                    </p>
                                    <p className="popup-font16">
                                      GiveDirectly empowers marginalized
                                      communities and those affected by
                                      disasters like COVID-19 through direct
                                      cash transfers, which give people the
                                      flexibility to provide for their true
                                      needs, in contrast to in-kind donations.
                                      Since 2012, Google.org has provided over
                                      $10 million to GiveDirectly to support
                                      people in need and research the impact of
                                      GiveDirectly’s innovative approach.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="popup-overlay"></div>
                          </>
                        )}
                      </Popup>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      <h4>Vaccination</h4>
                      <h3>
                        Lokarpan's Vaccination program is designed to protect
                        communities against eight life-threatening diseases. We
                        work diligently to complete vaccination schedules for
                        children, following government guidelines. Our focus
                        includes preventing diseases such as malaria and polio
                        to safeguard community health
                      </h3>

                      <Popup
                        trigger={
                          <div className="expand-sec">
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onOpen={this.updatePopUpOpen}
                        onClose={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <button className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                  }}
                                  onClick={() => close()}
                                />
                              </button>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">vACCINATION</h3>
                                  <p className="popup-font20">
                                    Lokarpan is committed to advancing community
                                    health through a range of impactful
                                    initiatives. Our goal is to reduce infant
                                    and mother mortality rates, ensuring a safe
                                    and healthy start for families. With a focus
                                    on providing midwife support, essential
                                    nutrition, and educational resources, we
                                    strive to empower mothers and children
                                    alike.
                                  </p>
                                </div>
                                <div className="popup-right-container">
                                  <img
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <p className="popup-font16">
                                      GiveDirectly empowers marginalized
                                      communities and those affected by
                                      disasters like COVID-19 through direct
                                      cash transfers, which give people the
                                      flexibility to provide for their true
                                      needs, in contrast to in-kind donations.
                                      Since 2012, Google.org has provided over
                                      $10 million to GiveDirectly to support
                                      people in need and research the impact of
                                      GiveDirectly’s innovative approach.
                                    </p>
                                    <p className="popup-font16">
                                      GiveDirectly empowers marginalized
                                      communities and those affected by
                                      disasters like COVID-19 through direct
                                      cash transfers, which give people the
                                      flexibility to provide for their true
                                      needs, in contrast to in-kind donations.
                                      Since 2012, Google.org has provided over
                                      $10 million to GiveDirectly to support
                                      people in need and research the impact of
                                      GiveDirectly’s innovative approach.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="popup-overlay"></div>
                          </>
                        )}
                      </Popup>
                    </div>
                  </div>
                </div>
                <div className="cards-left-container space-left">
                  <div className="card">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      <h4>Nutrition</h4>
                      <h3>
                        Ensuring adequate nutrition for children is a key focus
                        of our Nutrition initiatives. We monitor health
                        indicators closely to address any nutritional gaps and
                        implement programs that supply food to schools and
                        homes, combating malnutrition and promoting healthy
                        growth
                      </h3>
                      <Popup
                        trigger={
                          <div className="expand-sec">
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onOpen={this.updatePopUpOpen}
                        onClose={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <button className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                  }}
                                  onClick={() => close()}
                                />
                              </button>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">NUTRITION</h3>
                                  <p className="popup-font20">
                                    Lokarpan is committed to advancing community
                                    health through a range of impactful
                                    initiatives. Our goal is to reduce infant
                                    and mother mortality rates, ensuring a safe
                                    and healthy start for families. With a focus
                                    on providing midwife support, essential
                                    nutrition, and educational resources, we
                                    strive to empower mothers and children
                                    alike.
                                  </p>
                                </div>
                                <div className="popup-right-container">
                                  <img
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <p className="popup-font16">
                                      GiveDirectly empowers marginalized
                                      communities and those affected by
                                      disasters like COVID-19 through direct
                                      cash transfers, which give people the
                                      flexibility to provide for their true
                                      needs, in contrast to in-kind donations.
                                      Since 2012, Google.org has provided over
                                      $10 million to GiveDirectly to support
                                      people in need and research the impact of
                                      GiveDirectly’s innovative approach.
                                    </p>
                                    <p className="popup-font16">
                                      GiveDirectly empowers marginalized
                                      communities and those affected by
                                      disasters like COVID-19 through direct
                                      cash transfers, which give people the
                                      flexibility to provide for their true
                                      needs, in contrast to in-kind donations.
                                      Since 2012, Google.org has provided over
                                      $10 million to GiveDirectly to support
                                      people in need and research the impact of
                                      GiveDirectly’s innovative approach.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="popup-overlay"></div>
                          </>
                        )}
                      </Popup>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mobile-education-cards-container">
                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    <h4>Maternal and Child Health</h4>
                    <h3>
                      With a focus on reducing infant and maternal mortality
                      rates, Lokarpan prioritises providing essential midwife
                      support and valuable educational resources for families.
                    </h3>

                    <Popup
                      trigger={
                        <div className="expand-sec">
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onOpen={this.updatePopUpOpen}
                      onClose={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <button className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                }}
                                onClick={() => close()}
                              />
                            </button>
                            <div className="popup-section">
                              <div className="popup-left-container">
                                <h3 className="popup-font40">
                                  MATERNAL AND CHILD HEALTH
                                </h3>
                                <p className="popup-font20">
                                  Lokarpan is committed to advancing community
                                  health through a range of impactful
                                  initiatives. Our goal is to reduce infant and
                                  mother mortality rates, ensuring a safe and
                                  healthy start for families. With a focus on
                                  providing midwife support, essential
                                  nutrition, and educational resources, we
                                  strive to empower mothers and children alike
                                </p>
                              </div>
                              <div className="popup-right-container">
                                <img
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="popup-overlay"></div>
                        </>
                      )}
                    </Popup>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    <h4>Vaccination</h4>
                    <h3>
                      Lokarpan's Vaccination program is designed to protect
                      communities against eight life-threatening diseases. We
                      work diligently to complete vaccination schedules for
                      children, following government guidelines. Our focus
                      includes preventing diseases such as malaria and polio to
                      safeguard community health.
                    </h3>

                    <Popup
                      trigger={
                        <div className="expand-sec">
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onOpen={this.updatePopUpOpen}
                      onClose={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <button className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                }}
                                onClick={() => close()}
                              />
                            </button>
                            <div className="popup-section">
                              <div className="popup-left-container">
                                <h3 className="popup-font40">VACCINATION</h3>
                                <p className="popup-font20">
                                  Lokarpan is committed to advancing community
                                  health through a range of impactful
                                  initiatives. Our goal is to reduce infant and
                                  mother mortality rates, ensuring a safe and
                                  healthy start for families. With a focus on
                                  providing midwife support, essential
                                  nutrition, and educational resources, we
                                  strive to empower mothers and children alike
                                </p>
                              </div>
                              <div className="popup-right-container">
                                <img
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="popup-overlay"></div>
                        </>
                      )}
                    </Popup>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    <h4> Nutrition</h4>
                    <h3>
                      Ensuring adequate nutrition for children is a key focus of
                      our Nutrition initiatives. We monitor health indicators
                      closely to address any nutritional gaps and implement
                      programs that supply food to schools and homes, combating
                      malnutrition and promoting healthy growth
                    </h3>

                    <Popup
                      trigger={
                        <div className="expand-sec">
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onOpen={this.updatePopUpOpen}
                      onClose={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <button className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                }}
                                onClick={() => close()}
                              />
                            </button>
                            <div className="popup-section">
                              <div className="popup-left-container">
                                <h3 className="popup-font40">NUTRITION</h3>
                                <p className="popup-font20">
                                  Lokarpan is committed to advancing community
                                  health through a range of impactful
                                  initiatives. Our goal is to reduce infant and
                                  mother mortality rates, ensuring a safe and
                                  healthy start for families. With a focus on
                                  providing midwife support, essential
                                  nutrition, and educational resources, we
                                  strive to empower mothers and children alike.
                                </p>
                              </div>
                              <div className="popup-right-container">
                                <img
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="popup-overlay"></div>
                        </>
                      )}
                    </Popup>
                  </div>
                </div>
              </div>
              <div className="our-role-each-container-content">
                <h1>Health</h1>
                <p>
                  Lokarpan is committed to advancing community health through a
                  range of impactful initiatives. Our goal is to reduce infant
                  and mother mortality rates, ensuring a safe and healthy start
                  for families. With a focus on providing midwife support,
                  essential nutrition, and educational resources, we strive to
                  empower mothers and children alike.
                </p>
              </div>
            </div>
          )}
          {active === "livelihood" && (
            <div className={containerClass}>
              <div className="our-role-each-container-content">
                <h1>Liveliood</h1>
                <p>
                  Lokarpan is committed to alleviating poverty in rural India.
                  Through tailored skill development programs, microfinance
                  initiatives, and entrepreneurship support, we empower
                  individuals to improve economic conditions and enhance social
                  mobility. Our goal is to foster stronger, more self-reliant
                  communities.
                </p>
              </div>
              <div className="education-cards-container">
                <div className="cards-left-container">
                  <div className="card">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      <h4>Skill Development</h4>
                      <h3>
                        Lokarpan empowers individuals through tailored skill
                        development programs, fostering entrepreneurship and
                        self-reliance. Our initiatives enhance employability,
                        creating sustainable livelihoods for community growth
                      </h3>
                      <Popup
                        trigger={
                          <div className="expand-sec">
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onOpen={this.updatePopUpOpen}
                        onClose={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <button className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                  }}
                                  onClick={() => close()}
                                />
                              </button>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    SKILL DEVELOPMENT
                                  </h3>
                                  <p className="popup-font20">
                                    Lokarpan is committed to alleviating poverty
                                    in rural India. Through tailored skill
                                    development programs, microfinance
                                    initiatives, and entrepreneurship support,
                                    we empower individuals to improve economic
                                    conditions and enhance social mobility. Our
                                    goal is to foster stronger, more
                                    self-reliant communities
                                  </p>
                                </div>
                                <div className="popup-right-container">
                                  <img
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <p className="popup-font16">
                                      GiveDirectly empowers marginalized
                                      communities and those affected by
                                      disasters like COVID-19 through direct
                                      cash transfers, which give people the
                                      flexibility to provide for their true
                                      needs, in contrast to in-kind donations.
                                      Since 2012, Google.org has provided over
                                      $10 million to GiveDirectly to support
                                      people in need and research the impact of
                                      GiveDirectly’s innovative approach.
                                    </p>
                                    <p className="popup-font16">
                                      GiveDirectly empowers marginalized
                                      communities and those affected by
                                      disasters like COVID-19 through direct
                                      cash transfers, which give people the
                                      flexibility to provide for their true
                                      needs, in contrast to in-kind donations.
                                      Since 2012, Google.org has provided over
                                      $10 million to GiveDirectly to support
                                      people in need and research the impact of
                                      GiveDirectly’s innovative approach.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="popup-overlay"></div>
                          </>
                        )}
                      </Popup>
                    </div>
                  </div>
                </div>
                <div className="cards-right-container">
                  <div className="card space">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      <h4>Microfinance</h4>
                      <h3>
                        Empowering individuals through financial inclusion,
                        Lokarpan offers small loans and financial services to
                        low-income individuals and budding entrepreneurs
                      </h3>

                      <Popup
                        trigger={
                          <div className="expand-sec">
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onOpen={this.updatePopUpOpen}
                        onClose={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <button className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                  }}
                                  onClick={() => close()}
                                />
                              </button>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">MICROFINANCE</h3>
                                  <p className="popup-font20">
                                    Lokarpan is committed to alleviating poverty
                                    in rural India. Through tailored skill
                                    development programs, microfinance
                                    initiatives, and entrepreneurship support,
                                    we empower individuals to improve economic
                                    conditions and enhance social mobility. Our
                                    goal is to foster stronger, more
                                    self-reliant communities.
                                  </p>
                                </div>
                                <div className="popup-right-container">
                                  <img
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <p className="popup-font16">
                                      GiveDirectly empowers marginalized
                                      communities and those affected by
                                      disasters like COVID-19 through direct
                                      cash transfers, which give people the
                                      flexibility to provide for their true
                                      needs, in contrast to in-kind donations.
                                      Since 2012, Google.org has provided over
                                      $10 million to GiveDirectly to support
                                      people in need and research the impact of
                                      GiveDirectly’s innovative approach.
                                    </p>
                                    <p className="popup-font16">
                                      GiveDirectly empowers marginalized
                                      communities and those affected by
                                      disasters like COVID-19 through direct
                                      cash transfers, which give people the
                                      flexibility to provide for their true
                                      needs, in contrast to in-kind donations.
                                      Since 2012, Google.org has provided over
                                      $10 million to GiveDirectly to support
                                      people in need and research the impact of
                                      GiveDirectly’s innovative approach.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="popup-overlay"></div>
                          </>
                        )}
                      </Popup>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      <h3>
                        Helping Youth Business International support underserved
                        small business-owners
                      </h3>
                      <Popup
                        trigger={
                          <div className="expand-sec">
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onOpen={this.updatePopUpOpen}
                        onClose={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <button className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                  }}
                                  onClick={() => close()}
                                />
                              </button>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    PROVIDING ACCESS TO CAPITAL
                                  </h3>
                                  <p className="popup-font20">
                                    To help address financial barriers for
                                    people and communities underserved by
                                    mainstream financial institutions,
                                    Google.org supports affordable lending
                                    solutions for small business owners, Income
                                    Sharing Agreements (ISAs) for students and
                                    direct cash transfers for low-income
                                    families.
                                  </p>
                                </div>
                                <div className="popup-right-container">
                                  <img
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <p className="popup-font16">
                                      GiveDirectly empowers marginalized
                                      communities and those affected by
                                      disasters like COVID-19 through direct
                                      cash transfers, which give people the
                                      flexibility to provide for their true
                                      needs, in contrast to in-kind donations.
                                      Since 2012, Google.org has provided over
                                      $10 million to GiveDirectly to support
                                      people in need and research the impact of
                                      GiveDirectly’s innovative approach.
                                    </p>
                                    <p className="popup-font16">
                                      GiveDirectly empowers marginalized
                                      communities and those affected by
                                      disasters like COVID-19 through direct
                                      cash transfers, which give people the
                                      flexibility to provide for their true
                                      needs, in contrast to in-kind donations.
                                      Since 2012, Google.org has provided over
                                      $10 million to GiveDirectly to support
                                      people in need and research the impact of
                                      GiveDirectly’s innovative approach.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="popup-overlay"></div>
                          </>
                        )}
                      </Popup>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mobile-education-cards-container">
                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    <h4>Skill Development</h4>
                    <h3>
                      Lokarpan empowers individuals through tailored skill
                      development programs, fostering entrepreneurship and
                      self-reliance. Our initiatives enhance employability,
                      creating sustainable livelihoods for community growth
                    </h3>

                    <Popup
                      trigger={
                        <div className="expand-sec">
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onOpen={this.updatePopUpOpen}
                      onClose={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <button className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                }}
                                onClick={() => close()}
                              />
                            </button>
                            <div className="popup-section">
                              <div className="popup-left-container">
                                <h3 className="popup-font40">
                                  SKILL DEVELOPMENT
                                </h3>
                                <p className="popup-font20">
                                  Lokarpan is committed to alleviating poverty
                                  in rural India. Through tailored skill
                                  development programs, microfinance
                                  initiatives, and entrepreneurship support, we
                                  empower individuals to improve economic
                                  conditions and enhance social mobility. Our
                                  goal is to foster stronger, more self-reliant
                                  communities.
                                </p>
                              </div>
                              <div className="popup-right-container">
                                <img
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="popup-overlay"></div>
                        </>
                      )}
                    </Popup>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    <h4>Microfinance</h4>
                    <h3>
                      Empowering individuals through financial inclusion,
                      Lokarpan offers small loans and financial services to
                      low-income individuals and budding entrepreneurs
                    </h3>

                    <Popup
                      trigger={
                        <div className="expand-sec">
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onOpen={this.updatePopUpOpen}
                      onClose={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <button className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                }}
                                onClick={() => close()}
                              />
                            </button>
                            <div className="popup-section">
                              <div className="popup-left-container">
                                <h3 className="popup-font40">MICROFINANCE</h3>
                                <p className="popup-font20">
                                  Lokarpan is committed to alleviating poverty
                                  in rural India. Through tailored skill
                                  development programs, microfinance
                                  initiatives, and entrepreneurship support, we
                                  empower individuals to improve economic
                                  conditions and enhance social mobility. Our
                                  goal is to foster stronger, more self-reliant
                                  communities.
                                </p>
                              </div>
                              <div className="popup-right-container">
                                <img
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="popup-overlay"></div>
                        </>
                      )}
                    </Popup>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    <h3>
                      Helping Youth Business International support underserved
                      small business-owners
                    </h3>

                    <Popup
                      trigger={
                        <div className="expand-sec">
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onOpen={this.updatePopUpOpen}
                      onClose={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <button className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                }}
                                onClick={() => close()}
                              />
                            </button>
                            <div className="popup-section">
                              <div className="popup-left-container">
                                <h3 className="popup-font40">
                                  PROVIDING ACCESS TO CAPITAL
                                </h3>
                                <p className="popup-font20">
                                  To help address financial barriers for people
                                  and communities underserved by mainstream
                                  financial institutions, Google.org supports
                                  affordable lending solutions for small
                                  business owners, Income Sharing Agreements
                                  (ISAs) for students and direct cash transfers
                                  for low-income families.
                                </p>
                              </div>
                              <div className="popup-right-container">
                                <img
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="popup-overlay"></div>
                        </>
                      )}
                    </Popup>
                  </div>
                </div>
              </div>
            </div>
          )}
          {active === "design" && (
            <div className={containerClass}>
              <div className="education-cards-container">
                <div className="cards-right-container">
                  <div className="card space">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      <h4>Design Fellowship</h4>
                      <h3>
                        Drawing insights from challenges in rural educational
                        infrastructure, we invite experts to join us in
                        designing the ideal school for our communities
                      </h3>

                      <Popup
                        trigger={
                          <div className="expand-sec">
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onOpen={this.updatePopUpOpen}
                        onClose={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <button className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                  }}
                                  onClick={() => close()}
                                />
                              </button>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    DESIGN FELLOWSHIP
                                  </h3>
                                  <p className="popup-font20">
                                    Our initiatives in design reflect our
                                    dedication to transforming education in
                                    rural India. With a focus on project-based
                                    learning, online resources, and cutting-edge
                                    labs, Lokarpan seeks to bridge the gap in
                                    educational infrastructure. We believe that
                                    by prioritising children's perspectives in
                                    design, we can foster environments that
                                    empower young learners, enabling them to
                                    shape the spaces they inhabit
                                  </p>
                                </div>
                                <div className="popup-right-container">
                                  <img
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <p className="popup-font16">
                                      GiveDirectly empowers marginalized
                                      communities and those affected by
                                      disasters like COVID-19 through direct
                                      cash transfers, which give people the
                                      flexibility to provide for their true
                                      needs, in contrast to in-kind donations.
                                      Since 2012, Google.org has provided over
                                      $10 million to GiveDirectly to support
                                      people in need and research the impact of
                                      GiveDirectly’s innovative approach.
                                    </p>
                                    <p className="popup-font16">
                                      GiveDirectly empowers marginalized
                                      communities and those affected by
                                      disasters like COVID-19 through direct
                                      cash transfers, which give people the
                                      flexibility to provide for their true
                                      needs, in contrast to in-kind donations.
                                      Since 2012, Google.org has provided over
                                      $10 million to GiveDirectly to support
                                      people in need and research the impact of
                                      GiveDirectly’s innovative approach.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="popup-overlay"></div>
                          </>
                        )}
                      </Popup>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      <h4>Reading Rooms</h4>
                      <h3>
                        Dedicated to cultivating a passion for reading in rural
                        India, our reading room offers a diverse collection of
                        books, power outlets, and digital workstations for young
                        learners. This initiative aims to create an inviting
                        space that sparks curiosity and exploration.
                      </h3>

                      <Popup
                        trigger={
                          <div className="expand-sec">
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onOpen={this.updatePopUpOpen}
                        onClose={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <button className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                  }}
                                  onClick={() => close()}
                                />
                              </button>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    READING ROOMS
                                  </h3>
                                  <p className="popup-font20">
                                    Our initiatives in design reflect our
                                    dedication to transforming education in
                                    rural India. With a focus on project-based
                                    learning, online resources, and cutting-edge
                                    labs, Lokarpan seeks to bridge the gap in
                                    educational infrastructure. We believe that
                                    by prioritising children's perspectives in
                                    design, we can foster environments that
                                    empower young learners, enabling them to
                                    shape the spaces they inhabit.
                                  </p>
                                </div>
                                <div className="popup-right-container">
                                  <img
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <p className="popup-font16">
                                      GiveDirectly empowers marginalized
                                      communities and those affected by
                                      disasters like COVID-19 through direct
                                      cash transfers, which give people the
                                      flexibility to provide for their true
                                      needs, in contrast to in-kind donations.
                                      Since 2012, Google.org has provided over
                                      $10 million to GiveDirectly to support
                                      people in need and research the impact of
                                      GiveDirectly’s innovative approach.
                                    </p>
                                    <p className="popup-font16">
                                      GiveDirectly empowers marginalized
                                      communities and those affected by
                                      disasters like COVID-19 through direct
                                      cash transfers, which give people the
                                      flexibility to provide for their true
                                      needs, in contrast to in-kind donations.
                                      Since 2012, Google.org has provided over
                                      $10 million to GiveDirectly to support
                                      people in need and research the impact of
                                      GiveDirectly’s innovative approach.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="popup-overlay"></div>
                          </>
                        )}
                      </Popup>
                    </div>
                  </div>
                </div>
                <div className="cards-left-container space-left">
                  <div className="card">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      <h4>Sanitation</h4>
                      <h3>
                        Lokarpan is constructing child-friendly, functional
                        bathroom stalls tailored for school environments. Our
                        aim is to ensure a safe, comfortable, and
                        age-appropriate restroom experience for children.
                      </h3>

                      <Popup
                        trigger={
                          <div className="expand-sec">
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onOpen={this.updatePopUpOpen}
                        onClose={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <button className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                  }}
                                  onClick={() => close()}
                                />
                              </button>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">SANITATION</h3>
                                  <p className="popup-font20">
                                    Our initiatives in design reflect our
                                    dedication to transforming education in
                                    rural India. With a focus on project-based
                                    learning, online resources, and cutting-edge
                                    labs, Lokarpan seeks to bridge the gap in
                                    educational infrastructure. We believe that
                                    by prioritising children's perspectives in
                                    design, we can foster environments that
                                    empower young learners, enabling them to
                                    shape the spaces they inhabit.
                                  </p>
                                </div>
                                <div className="popup-right-container">
                                  <img
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <p className="popup-font16">
                                      GiveDirectly empowers marginalized
                                      communities and those affected by
                                      disasters like COVID-19 through direct
                                      cash transfers, which give people the
                                      flexibility to provide for their true
                                      needs, in contrast to in-kind donations.
                                      Since 2012, Google.org has provided over
                                      $10 million to GiveDirectly to support
                                      people in need and research the impact of
                                      GiveDirectly’s innovative approach.
                                    </p>
                                    <p className="popup-font16">
                                      GiveDirectly empowers marginalized
                                      communities and those affected by
                                      disasters like COVID-19 through direct
                                      cash transfers, which give people the
                                      flexibility to provide for their true
                                      needs, in contrast to in-kind donations.
                                      Since 2012, Google.org has provided over
                                      $10 million to GiveDirectly to support
                                      people in need and research the impact of
                                      GiveDirectly’s innovative approach.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="popup-overlay"></div>
                          </>
                        )}
                      </Popup>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mobile-education-cards-container">
                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    <h4>Design Fellowship</h4>
                    <h3>
                      Drawing insights from challenges in rural educational
                      infrastructure, we invite experts to join us in designing
                      the ideal school for our communities.
                    </h3>
                    <Popup
                      trigger={
                        <div className="expand-sec">
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onOpen={this.updatePopUpOpen}
                      onClose={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <button className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                }}
                                onClick={() => close()}
                              />
                            </button>
                            <div className="popup-section">
                              <div className="popup-left-container">
                                <h3 className="popup-font40">
                                  DESIGN FELLOWSHIP
                                </h3>
                                <p className="popup-font20">
                                  Our initiatives in design reflect our
                                  dedication to transforming education in rural
                                  India. With a focus on project-based learning,
                                  online resources, and cutting-edge labs,
                                  Lokarpan seeks to bridge the gap in
                                  educational infrastructure. We believe that by
                                  prioritising children's perspectives in
                                  design, we can foster environments that
                                  empower young learners, enabling them to shape
                                  the spaces they inhabit.
                                </p>
                              </div>
                              <div className="popup-right-container">
                                <img
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="popup-overlay"></div>
                        </>
                      )}
                    </Popup>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    <h4>Reading Rooms</h4>
                    <h3>
                      Dedicated to cultivating a passion for reading in rural
                      India, our reading room offers a diverse collection of
                      books, power outlets, and digital workstations for young
                      learners. This initiative aims to create an inviting space
                      that sparks curiosity and exploration.
                    </h3>

                    <Popup
                      trigger={
                        <div className="expand-sec">
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onOpen={this.updatePopUpOpen}
                      onClose={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <button className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                }}
                                onClick={() => close()}
                              />
                            </button>
                            <div className="popup-section">
                              <div className="popup-left-container">
                                <h3 className="popup-font40">READING ROOMS</h3>
                                <p className="popup-font20">
                                  Our initiatives in design reflect our
                                  dedication to transforming education in rural
                                  India. With a focus on project-based learning,
                                  online resources, and cutting-edge labs,
                                  Lokarpan seeks to bridge the gap in
                                  educational infrastructure. We believe that by
                                  prioritising children's perspectives in
                                  design, we can foster environments that
                                  empower young learners, enabling them to shape
                                  the spaces they inhabit.
                                </p>
                              </div>
                              <div className="popup-right-container">
                                <img
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="popup-overlay"></div>
                        </>
                      )}
                    </Popup>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    <h4>Sanitation</h4>
                    <h3>
                      Lokarpan is constructing child-friendly, functional
                      bathroom stalls tailored for school environments. Our aim
                      is to ensure a safe, comfortable, and age-appropriate
                      restroom experience for children.
                    </h3>

                    <Popup
                      trigger={
                        <div className="expand-sec">
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onOpen={this.updatePopUpOpen}
                      onClose={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <button className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                }}
                                onClick={() => close()}
                              />
                            </button>
                            <div className="popup-section">
                              <div className="popup-left-container">
                                <h3 className="popup-font40">SANITATION</h3>
                                <p className="popup-font20">
                                  Our initiatives in design reflect our
                                  dedication to transforming education in rural
                                  India. With a focus on project-based learning,
                                  online resources, and cutting-edge labs,
                                  Lokarpan seeks to bridge the gap in
                                  educational infrastructure. We believe that by
                                  prioritising children's perspectives in
                                  design, we can foster environments that
                                  empower young learners, enabling them to shape
                                  the spaces they inhabit.
                                </p>
                              </div>
                              <div className="popup-right-container">
                                <img
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="popup-overlay"></div>
                        </>
                      )}
                    </Popup>
                  </div>
                </div>
              </div>
              <div className="our-role-each-container-content">
                <h1>Design</h1>
                <p>
                  Our initiatives in design reflect our dedication to
                  transforming education in rural India. With a focus on
                  project-based learning, online resources, and cutting-edge
                  labs, Lokarpan seeks to bridge the gap in educational
                  infrastructure. We believe that by prioritising children's
                  perspectives in design, we can foster environments that
                  empower young learners, enabling them to shape the spaces they
                  inhabit.
                </p>
              </div>
            </div>
          )}
          {active === "environment" && (
            <div className={containerClass}>
              <div className="our-role-each-container-content">
                <h1>Environment</h1>
                <p>
                  Lokarpan is dedicated to environmental stewardship in rural
                  India, with initiatives ranging from tracking heavy metals in
                  water to conserving exotic bird populations. We also focus on
                  preserving village ponds, building solar capacity, and
                  educating communities on conservation. Through these efforts,
                  we strive for a greener, more sustainable future for all,
                  safeguarding both people and the environment.
                </p>
              </div>
              <div className="education-cards-container">
                <div className="cards-left-container">
                  <div className="card">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      <h4>Tree Plantations</h4>
                      <h3>
                        Lokarpan has planted 1 lakh trees to date, contributing
                        significantly to reforestation efforts. Our ongoing tree
                        plantation initiatives aim to enhance green cover,
                        combat climate change, and promote a healthier
                        environment for generations to come.
                      </h3>

                      <Popup
                        trigger={
                          <div className="expand-sec">
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onOpen={this.updatePopUpOpen}
                        onClose={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <button className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                  }}
                                  onClick={() => close()}
                                />
                              </button>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    TREE PLANTATIONS
                                  </h3>
                                  <p className="popup-font20">
                                    Lokarpan is dedicated to environmental
                                    stewardship in rural India, with initiatives
                                    ranging from tracking heavy metals in water
                                    to conserving exotic bird populations. We
                                    also focus on preserving village ponds,
                                    building solar capacity, and educating
                                    communities on conservation. Through these
                                    efforts, we strive for a greener, more
                                    sustainable future for all, safeguarding
                                    both people and the environment.
                                  </p>
                                </div>
                                <div className="popup-right-container">
                                  <img
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <p className="popup-font16">
                                      GiveDirectly empowers marginalized
                                      communities and those affected by
                                      disasters like COVID-19 through direct
                                      cash transfers, which give people the
                                      flexibility to provide for their true
                                      needs, in contrast to in-kind donations.
                                      Since 2012, Google.org has provided over
                                      $10 million to GiveDirectly to support
                                      people in need and research the impact of
                                      GiveDirectly’s innovative approach.
                                    </p>
                                    <p className="popup-font16">
                                      GiveDirectly empowers marginalized
                                      communities and those affected by
                                      disasters like COVID-19 through direct
                                      cash transfers, which give people the
                                      flexibility to provide for their true
                                      needs, in contrast to in-kind donations.
                                      Since 2012, Google.org has provided over
                                      $10 million to GiveDirectly to support
                                      people in need and research the impact of
                                      GiveDirectly’s innovative approach.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="popup-overlay"></div>
                          </>
                        )}
                      </Popup>
                    </div>
                  </div>
                </div>
                <div className="cards-right-container">
                  <div className="card space">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      <h4> Annual Migratory Bird Survey</h4>
                      <h3>
                        Lokarpan tracks migratory birds across districts to
                        monitor and conserve exotic bird populations. Through
                        this effort, we aim to understand crucial migration
                        routes and safeguard biodiversity in our regions.
                      </h3>

                      <Popup
                        trigger={
                          <div className="expand-sec">
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onOpen={this.updatePopUpOpen}
                        onClose={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <button className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                  }}
                                  onClick={() => close()}
                                />
                              </button>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    ANNUAL MIGRATORY BIRD SURVEY
                                  </h3>
                                  <p className="popup-font20">
                                    Lokarpan is dedicated to environmental
                                    stewardship in rural India, with initiatives
                                    ranging from tracking heavy metals in water
                                    to conserving exotic bird populations. We
                                    also focus on preserving village ponds,
                                    building solar capacity, and educating
                                    communities on conservation. Through these
                                    efforts, we strive for a greener, more
                                    sustainable future for all, safeguarding
                                    both people and the environment.
                                  </p>
                                </div>
                                <div className="popup-right-container">
                                  <img
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <p className="popup-font16">
                                      GiveDirectly empowers marginalized
                                      communities and those affected by
                                      disasters like COVID-19 through direct
                                      cash transfers, which give people the
                                      flexibility to provide for their true
                                      needs, in contrast to in-kind donations.
                                      Since 2012, Google.org has provided over
                                      $10 million to GiveDirectly to support
                                      people in need and research the impact of
                                      GiveDirectly’s innovative approach.
                                    </p>
                                    <p className="popup-font16">
                                      GiveDirectly empowers marginalized
                                      communities and those affected by
                                      disasters like COVID-19 through direct
                                      cash transfers, which give people the
                                      flexibility to provide for their true
                                      needs, in contrast to in-kind donations.
                                      Since 2012, Google.org has provided over
                                      $10 million to GiveDirectly to support
                                      people in need and research the impact of
                                      GiveDirectly’s innovative approach.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="popup-overlay"></div>
                          </>
                        )}
                      </Popup>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      <h4>
                        Water Quality Assessment and Freshwater Availability
                      </h4>
                      <h3>
                        Lokarpan conducts water quality assessments and monitors
                        freshwater availability to ensure the health of local
                        ecosystems. We strive to protect natural resources,
                        promote conservation practices, and support sustainable
                        development in our communities.
                      </h3>

                      <Popup
                        trigger={
                          <div className="expand-sec">
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onOpen={this.updatePopUpOpen}
                        onClose={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <button className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                  }}
                                  onClick={() => close()}
                                />
                              </button>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3 className="popup-font40">
                                    WATER QUALITY ASSESSMENT AND FRESHWATER
                                    AVAILABILITY
                                  </h3>
                                  <p className="popup-font20">
                                    Lokarpan is dedicated to environmental
                                    stewardship in rural India, with initiatives
                                    ranging from tracking heavy metals in water
                                    to conserving exotic bird populations. We
                                    also focus on preserving village ponds,
                                    building solar capacity, and educating
                                    communities on conservation. Through these
                                    efforts, we strive for a greener, more
                                    sustainable future for all, safeguarding
                                    both people and the environment.
                                  </p>
                                </div>
                                <div className="popup-right-container">
                                  <img
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <p className="popup-font16">
                                      GiveDirectly empowers marginalized
                                      communities and those affected by
                                      disasters like COVID-19 through direct
                                      cash transfers, which give people the
                                      flexibility to provide for their true
                                      needs, in contrast to in-kind donations.
                                      Since 2012, Google.org has provided over
                                      $10 million to GiveDirectly to support
                                      people in need and research the impact of
                                      GiveDirectly’s innovative approach.
                                    </p>
                                    <p className="popup-font16">
                                      GiveDirectly empowers marginalized
                                      communities and those affected by
                                      disasters like COVID-19 through direct
                                      cash transfers, which give people the
                                      flexibility to provide for their true
                                      needs, in contrast to in-kind donations.
                                      Since 2012, Google.org has provided over
                                      $10 million to GiveDirectly to support
                                      people in need and research the impact of
                                      GiveDirectly’s innovative approach.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="popup-overlay"></div>
                          </>
                        )}
                      </Popup>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mobile-education-cards-container">
                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    <h4> Tree Plantations</h4>
                    <h3>
                      Lokarpan has planted 1 lakh trees to date, contributing
                      significantly to reforestation efforts. Our ongoing tree
                      plantation initiatives aim to enhance green cover, combat
                      climate change, and promote a healthier environment for
                      generations to come.
                    </h3>
                    <Popup
                      trigger={
                        <div className="expand-sec">
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onOpen={this.updatePopUpOpen}
                      onClose={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <button className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                }}
                                onClick={() => close()}
                              />
                            </button>
                            <div className="popup-section">
                              <div className="popup-left-container">
                                <h3 className="popup-font40">
                                  TREE PLANTATIONS
                                </h3>
                                <p className="popup-font20">
                                  Lokarpan is dedicated to environmental
                                  stewardship in rural India, with initiatives
                                  ranging from tracking heavy metals in water to
                                  conserving exotic bird populations. We also
                                  focus on preserving village ponds, building
                                  solar capacity, and educating communities on
                                  conservation. Through these efforts, we strive
                                  for a greener, more sustainable future for
                                  all, safeguarding both people and the
                                  environment.
                                </p>
                              </div>
                              <div className="popup-right-container">
                                <img
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="popup-overlay"></div>
                        </>
                      )}
                    </Popup>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    <h4> Annual Migratory Bird Survey </h4>
                    <h3>
                      Lokarpan tracks migratory birds across districts to
                      monitor and conserve exotic bird populations. Through this
                      effort, we aim to understand crucial migration routes and
                      safeguard biodiversity in our regions.
                    </h3>

                    <Popup
                      trigger={
                        <div className="expand-sec">
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onOpen={this.updatePopUpOpen}
                      onClose={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <button className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                }}
                                onClick={() => close()}
                              />
                            </button>
                            <div className="popup-section">
                              <div className="popup-left-container">
                                <h3 className="popup-font40">
                                  ANNUAL MIGRATORY BIRD SURVEY
                                </h3>
                                <p className="popup-font20">
                                  Lokarpan is dedicated to environmental
                                  stewardship in rural India, with initiatives
                                  ranging from tracking heavy metals in water to
                                  conserving exotic bird populations. We also
                                  focus on preserving village ponds, building
                                  solar capacity, and educating communities on
                                  conservation. Through these efforts, we strive
                                  for a greener, more sustainable future for
                                  all, safeguarding both people and the
                                  environment.
                                </p>
                              </div>
                              <div className="popup-right-container">
                                <img
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="popup-overlay"></div>
                        </>
                      )}
                    </Popup>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    <h4>
                      Water Quality Assessment and Freshwater Availability
                    </h4>
                    <h3>
                      Lokarpan conducts water quality assessments and monitors
                      freshwater availability to ensure the health of local
                      ecosystems. We strive to protect natural resources,
                      promote conservation practices, and support sustainable
                      development in our communities.
                    </h3>

                    <Popup
                      trigger={
                        <div className="expand-sec">
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onOpen={this.updatePopUpOpen}
                      onClose={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <button className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                }}
                                onClick={() => close()}
                              />
                            </button>
                            <div className="popup-section">
                              <div className="popup-left-container">
                                <h3 className="popup-font40">
                                  WATER QUALITY ASSESSMENT AND FRESHWATER
                                  AVAILABILITY
                                </h3>
                                <p className="popup-font20">
                                  Lokarpan is dedicated to environmental
                                  stewardship in rural India, with initiatives
                                  ranging from tracking heavy metals in water to
                                  conserving exotic bird populations. We also
                                  focus on preserving village ponds, building
                                  solar capacity, and educating communities on
                                  conservation. Through these efforts, we strive
                                  for a greener, more sustainable future for
                                  all, safeguarding both people and the
                                  environment.
                                </p>
                              </div>
                              <div className="popup-right-container">
                                <img
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1709805492/IMG_3308_1_cz5yw3.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                  <p className="popup-font16">
                                    GiveDirectly empowers marginalized
                                    communities and those affected by disasters
                                    like COVID-19 through direct cash transfers,
                                    which give people the flexibility to provide
                                    for their true needs, in contrast to in-kind
                                    donations. Since 2012, Google.org has
                                    provided over $10 million to GiveDirectly to
                                    support people in need and research the
                                    impact of GiveDirectly’s innovative
                                    approach.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="popup-overlay"></div>
                        </>
                      )}
                    </Popup>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="donate-section">
            <h1 className="last-space">Give us your support</h1>
            <p className="our-role-font24">
              Lokarpan is a small nonprofit with a big dream. Join others
              helping to fight poverty, disease, school parity, and inequity for
              at risk communities.
            </p>
            <Link to="/donate" onClick={this.scrollToTop}>
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

export default OurRole;
