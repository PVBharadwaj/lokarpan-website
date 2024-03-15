import React, { Component } from "react";
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
                      <h3>
                        At Lokarpan's learning centre, we're dedicated to
                        creating a specially designed curriculum that targets
                        learning gaps in children. With our digital classrooms,
                        learning becomes engaging and memorable. Learn more.
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
                <div className="cards-right-container">
                  <div className="card space">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
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
                  <div className="card">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
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
                  <div className="card-content" onClick={this.updatePopUpOpen}>
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

                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
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

                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
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
                  <div className="card">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
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
                <div className="cards-left-container space-left">
                  <div className="card">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
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

                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
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

                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
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
                <div className="cards-right-container">
                  <div className="card space">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
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

                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
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
                      <h3>
                        Lokarpan’s learning centre heavily invests in creating a
                        specially designed curriculum that aims to address
                        learning gaps in children. With digital classrooms,
                        we’re making learning more fun and memorable
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
                  <div className="card">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      <h3>
                        We are bridging the education gap with a digital content
                        library for English and STEM subjects, empowering young
                        learners. Dive into our engaging audio podcasts, where
                        children can practise and explore new worlds of
                        knowledge.
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
                <div className="cards-left-container space-left">
                  <div className="card">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      <h3>
                        We've gathered a passionate group committed to making a
                        difference. Our Fellows volunteer in classrooms and
                        support various departments, uniting to build a brighter
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
                    <h3>
                      Lokarpan’s learning centre heavily invests in creating a
                      specially designed curriculum that aims to address
                      learning gaps in children. With digital classrooms, we’re
                      making learning more fun and memorable.
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

                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    <h3>
                      We are bridging the education gap with a digital content
                      library for English and STEM subjects, empowering young
                      learners. Dive into our engaging audio podcasts, where
                      children can practise and explore new worlds of knowledge.
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

                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    <h3>
                      We've gathered a passionate group committed to making a
                      difference. Our Fellows volunteer in classrooms and
                      support various departments, uniting to build a brighter
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
                  Lokarpan addresses gaps in education systems with innovative,
                  technology-assisted solutions that span the age spectrum. Our
                  goal? To showcase excellence by representing India in the PISA
                  rankings by 2027 with over 100k beneficiaries. We work
                  directly and through government systems to reach thousands of
                  children and school dropouts each year. Our instructors engage
                  with children either in schools or within the community. We
                  are working to create better teaching tools, scale up skill
                  development and integrate technology to aid teachers in
                  delivering the very best educational standards across rural
                  India.
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
                      <h3>
                        Lokarpan’s learning centre heavily invests in creating a
                        specially designed curriculum that aims to address
                        learning gaps in children. With digital classrooms,
                        we’re making learning more fun and memorable. 1 lakh
                        trees planted
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
                <div className="cards-right-container">
                  <div className="card space">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      <h3>
                        We are bridging the education gap with a digital content
                        library for English and STEM subjects, empowering young
                        learners. Dive into our engaging audio podcasts, where
                        children can practise and explore new worlds of
                        knowledge. Identification survey, building heatmaps
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
                  <div className="card">
                    <img
                      src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                      className="edu-img"
                      alt="Card 1"
                    />
                    <div className="card-content">
                      <h3>
                        We've gathered a passionate group committed to making a
                        difference. Our Fellows volunteer in classrooms and
                        support various departments, uniting to build a brighter
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
                    <h3>
                      Lokarpan’s learning centre heavily invests in creating a
                      specially designed curriculum that aims to address
                      learning gaps in children. With digital classrooms, we’re
                      making learning more fun and memorable. 1 lakh trees
                      planted
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

                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    <h3>
                      We are bridging the education gap with a digital content
                      library for English and STEM subjects, empowering young
                      learners. Dive into our engaging audio podcasts, where
                      children can practise and explore new worlds of knowledge.
                      Identification survey, building heatmaps.
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

                <div className="card">
                  <img
                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                    className="edu-img"
                    alt="Card 1"
                  />
                  <div className="card-content">
                    <h3>
                      We've gathered a passionate group committed to making a
                      difference. Our Fellows volunteer in classrooms and
                      support various departments, uniting to build a brighter
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
          <div className="donate-section">
            <h1 className="last-space">Give us your support</h1>
            <p className="our-role-font24">
              Lokarpan is a small nonprofit with a big dream. Join others
              helping to fight poverty, disease, school parity, and inequity for
              at risk communities.
            </p>

            <button type="button" className="our-role-apply-btn">
              Donate
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default OurRole;
