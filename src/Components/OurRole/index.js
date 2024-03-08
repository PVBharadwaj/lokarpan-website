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
                  We support digital skills training for job seekers, equitable
                  access to capital, and small and medium businesses—
                  particularly in underrepresented communities.
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
                <div className="cards-right-container">
                  <div className="card space">
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
                  <div className="card-content" onClick={this.updatePopUpOpen}>
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
                <div className="cards-left-container space-left">
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
              <div className="our-role-each-container-content">
                <h1>Health</h1>
                <p>
                  We support digital skills training for job seekers, equitable
                  access to capital, and small and medium businesses—
                  particularly in underrepresented communities.
                </p>
              </div>
            </div>
          )}
          {active === "livelihood" && (
            <div className={containerClass}>
              <div className="our-role-each-container-content">
                <h1>Liveliood</h1>
                <p>
                  We support digital skills training for job seekers, equitable
                  access to capital, and small and medium businesses—
                  particularly in underrepresented communities.
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
                <div className="cards-right-container">
                  <div className="card space">
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
                <div className="cards-left-container space-left">
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
              <div className="our-role-each-container-content">
                <h1>Design</h1>
                <p>
                  We support digital skills training for job seekers, equitable
                  access to capital, and small and medium businesses—
                  particularly in underrepresented communities.
                </p>
              </div>
            </div>
          )}
          {active === "environment" && (
            <div className={containerClass}>
              <div className="our-role-each-container-content">
                <h1>Environment</h1>
                <p>
                  We support digital skills training for job seekers, equitable
                  access to capital, and small and medium businesses—
                  particularly in underrepresented communities.
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
                <div className="cards-right-container">
                  <div className="card space">
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
