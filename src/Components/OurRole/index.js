import { Component } from "react";
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
  state = { active: "education", showContainer: true, isPopUpOpen: false };

  onChangeActive = (ele) => {
    this.setState({ active: ele, showContainer: true });
  };

  updatePopUpOpen = () => {
    console.log("Entered");
    this.setState((prevState) => ({
      isPopUpOpen: !prevState.isPopUpOpen,
    }));
  };

  onKeyDown = (event, close) => {
    if (event.key === "Escape") {
      close();
    }
  };

  render() {
    const { active, showContainer, isPopUpOpen } = this.state;
    const ourRoleContainer = isPopUpOpen
      ? "our-role-container hidden-overflow"
      : "our-role-container";
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
                          <div
                            className="expand-sec"
                            onClick={this.updatePopUpOpen}
                          >
                            <p>EXPAND TO LEARN MORE</p>
                            <IoMdExpand />
                          </div>
                        }
                        modal
                        onClick={this.updatePopUpOpen}
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <div className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                    textAlign: "right",
                                  }}
                                  onClick={() => close()}
                                />
                              </div>
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
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <p className="popup-font20">
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
                                    <p className="popup-font20">
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
                                    <p className="popup-font20">
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
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <div className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                    textAlign: "right",
                                  }}
                                  onClick={() => close()}
                                />
                              </div>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3>PROVIDING ACCESS TO CAPITAL</h3>
                                  <p>
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
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <p>
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
                                    <p>
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
                                    <p>
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
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <div className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                    textAlign: "right",
                                  }}
                                  onClick={() => close()}
                                />
                              </div>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3>PROVIDING ACCESS TO CAPITAL</h3>
                                  <p>
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
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <p>
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
                                    <p>
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
                                    <p>
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
                        <div
                          className="expand-sec"
                          onClick={this.updatePopUpOpen}
                        >
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onClick={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <div className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                  textAlign: "right",
                                }}
                                onClick={() => close()}
                              />
                            </div>
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
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <p className="popup-font20">
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
                                  <p className="popup-font20">
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
                                  <p className="popup-font20">
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
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <div className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                  textAlign: "right",
                                }}
                                onClick={() => close()}
                              />
                            </div>
                            <div className="popup-section">
                              <div className="popup-left-container">
                                <h3>PROVIDING ACCESS TO CAPITAL</h3>
                                <p>
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
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <p>
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
                                  <p>
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
                                  <p>
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
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <div className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                  textAlign: "right",
                                }}
                                onClick={() => close()}
                              />
                            </div>
                            <div className="popup-section">
                              <div className="popup-left-container">
                                <h3>PROVIDING ACCESS TO CAPITAL</h3>
                                <p>
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
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <p>
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
                                  <p>
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
                                  <p>
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
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <div className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                    textAlign: "right",
                                  }}
                                  onClick={() => close()}
                                />
                              </div>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3>PROVIDING ACCESS TO CAPITAL</h3>
                                  <p>
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
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <p>
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
                                    <p>
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
                                    <p>
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
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <div className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                    textAlign: "right",
                                  }}
                                  onClick={() => close()}
                                />
                              </div>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3>PROVIDING ACCESS TO CAPITAL</h3>
                                  <p>
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
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <p>
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
                                    <p>
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
                                    <p>
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
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <div className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                    textAlign: "right",
                                  }}
                                  onClick={() => close()}
                                />
                              </div>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3>PROVIDING ACCESS TO CAPITAL</h3>
                                  <p>
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
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <p>
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
                                    <p>
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
                                    <p>
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
                        <div
                          className="expand-sec"
                          onClick={this.updatePopUpOpen}
                        >
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onClick={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <div className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                  textAlign: "right",
                                }}
                                onClick={() => close()}
                              />
                            </div>
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
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <p className="popup-font20">
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
                                  <p className="popup-font20">
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
                                  <p className="popup-font20">
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
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <div className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                  textAlign: "right",
                                }}
                                onClick={() => close()}
                              />
                            </div>
                            <div className="popup-section">
                              <div className="popup-left-container">
                                <h3>PROVIDING ACCESS TO CAPITAL</h3>
                                <p>
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
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <p>
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
                                  <p>
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
                                  <p>
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
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <div className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                  textAlign: "right",
                                }}
                                onClick={() => close()}
                              />
                            </div>
                            <div className="popup-section">
                              <div className="popup-left-container">
                                <h3>PROVIDING ACCESS TO CAPITAL</h3>
                                <p>
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
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <p>
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
                                  <p>
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
                                  <p>
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
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <div className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                    textAlign: "right",
                                  }}
                                  onClick={() => close()}
                                />
                              </div>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3>PROVIDING ACCESS TO CAPITAL</h3>
                                  <p>
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
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <p>
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
                                    <p>
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

                                    <p>
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
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <div className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                    textAlign: "right",
                                  }}
                                  onClick={() => close()}
                                />
                              </div>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3>PROVIDING ACCESS TO CAPITAL</h3>
                                  <p>
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
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <p>
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
                                    <p>
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
                                    <p>
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
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <div className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                    textAlign: "right",
                                  }}
                                  onClick={() => close()}
                                />
                              </div>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3>PROVIDING ACCESS TO CAPITAL</h3>
                                  <p>
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
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <p>
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
                                    <p>
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
                                    <p>
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
                        <div
                          className="expand-sec"
                          onClick={this.updatePopUpOpen}
                        >
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onClick={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <div className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                  textAlign: "right",
                                }}
                                onClick={() => close()}
                              />
                            </div>
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
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <p className="popup-font20">
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
                                  <p className="popup-font20">
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
                                  <p className="popup-font20">
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
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <div className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                  textAlign: "right",
                                }}
                                onClick={() => close()}
                              />
                            </div>
                            <div className="popup-section">
                              <div className="popup-left-container">
                                <h3>PROVIDING ACCESS TO CAPITAL</h3>
                                <p>
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
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <p>
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
                                  <p>
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
                                  <p>
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
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <div className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                  textAlign: "right",
                                }}
                                onClick={() => close()}
                              />
                            </div>
                            <div className="popup-section">
                              <div className="popup-left-container">
                                <h3>PROVIDING ACCESS TO CAPITAL</h3>
                                <p>
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
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <p>
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
                                  <p>
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
                                  <p>
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
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <div className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                    textAlign: "right",
                                  }}
                                  onClick={() => close()}
                                />
                              </div>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3>PROVIDING ACCESS TO CAPITAL</h3>
                                  <p>
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
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <p>
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
                                    <p>
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
                                    <p>
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
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <div className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                    textAlign: "right",
                                  }}
                                  onClick={() => close()}
                                />
                              </div>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3>PROVIDING ACCESS TO CAPITAL</h3>
                                  <p>
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
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <p>
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
                                    <p>
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
                                    <p>
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
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <div className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                    textAlign: "right",
                                  }}
                                  onClick={() => close()}
                                />
                              </div>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3>PROVIDING ACCESS TO CAPITAL</h3>
                                  <p>
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
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <p>
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
                                    <p>
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
                                    <p>
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
                        <div
                          className="expand-sec"
                          onClick={this.updatePopUpOpen}
                        >
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onClick={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <div className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                  textAlign: "right",
                                }}
                                onClick={() => close()}
                              />
                            </div>
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
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <p className="popup-font20">
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
                                  <p className="popup-font20">
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
                                  <p className="popup-font20">
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
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <div className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                  textAlign: "right",
                                }}
                                onClick={() => close()}
                              />
                            </div>
                            <div className="popup-section">
                              <div className="popup-left-container">
                                <h3>PROVIDING ACCESS TO CAPITAL</h3>
                                <p>
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
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <p>
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
                                  <p>
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
                                  <p>
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
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <div className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                  textAlign: "right",
                                }}
                                onClick={() => close()}
                              />
                            </div>
                            <div className="popup-section">
                              <div className="popup-left-container">
                                <h3>PROVIDING ACCESS TO CAPITAL</h3>
                                <p>
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
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <p>
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
                                  <p>
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
                                  <p>
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
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <div className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                    textAlign: "right",
                                  }}
                                  onClick={() => close()}
                                />
                              </div>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3>PROVIDING ACCESS TO CAPITAL</h3>
                                  <p>
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
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <p>
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
                                    <p>
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
                                    <p>
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
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <div className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                    textAlign: "right",
                                  }}
                                  onClick={() => close()}
                                />
                              </div>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3>PROVIDING ACCESS TO CAPITAL</h3>
                                  <p>
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
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <p>
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
                                    <p>
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
                                    <p>
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
                        onKeyDown={(event, close) => {
                          this.onKeyDown(event, close);
                        }}
                      >
                        {(close) => (
                          <>
                            <div className="popup-container">
                              <div className="close-btn">
                                <IoMdClose
                                  style={{
                                    fontSize: "30px",
                                    textAlign: "right",
                                  }}
                                  onClick={() => close()}
                                />
                              </div>
                              <div className="popup-section">
                                <div className="popup-left-container">
                                  <h3>PROVIDING ACCESS TO CAPITAL</h3>
                                  <p>
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
                                    src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                                    alt="popup-img"
                                    className="popup-img"
                                  />
                                  <div className="popup-content">
                                    <p>
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
                                    <p>
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
                                    <p>
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
                        <div
                          className="expand-sec"
                          onClick={this.updatePopUpOpen}
                        >
                          <p>EXPAND TO LEARN MORE</p>
                          <IoMdExpand />
                        </div>
                      }
                      modal
                      onClick={this.updatePopUpOpen}
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <div className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                  textAlign: "right",
                                }}
                                onClick={() => close()}
                              />
                            </div>
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
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <p className="popup-font20">
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
                                  <p className="popup-font20">
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
                                  <p className="popup-font20">
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
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <div className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                  textAlign: "right",
                                }}
                                onClick={() => close()}
                              />
                            </div>
                            <div className="popup-section">
                              <div className="popup-left-container">
                                <h3>PROVIDING ACCESS TO CAPITAL</h3>
                                <p>
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
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <p>
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
                                  <p>
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
                                  <p>
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
                      onKeyDown={(event, close) => {
                        this.onKeyDown(event, close);
                      }}
                    >
                      {(close) => (
                        <>
                          <div className="popup-container">
                            <div className="close-btn">
                              <IoMdClose
                                style={{
                                  fontSize: "30px",
                                  textAlign: "right",
                                }}
                                onClick={() => close()}
                              />
                            </div>
                            <div className="popup-section">
                              <div className="popup-left-container">
                                <h3>PROVIDING ACCESS TO CAPITAL</h3>
                                <p>
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
                                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                                  alt="popup-img"
                                  className="popup-img"
                                />
                                <div className="popup-content">
                                  <p>
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
                                  <p>
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
                                  <p>
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
            <h1 className="lokarpan-head3">Give us your support</h1>
            <p className="our-role-font24">
              Lokarpan is a small nonprofit with a big dream. Join others
              helping to fight poverty, disease, school parity, and inequity for
              at risk communities.
            </p>

            <button type="button" className="our-role-apply-btn">
              Donate Now
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default OurRole;
