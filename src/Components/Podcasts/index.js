import React, { Component } from "react";
import { FaSpotify, FaYoutube } from "react-icons/fa";
import EducationSubNav from "../Navbar/EducationSubNav";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { SiApplepodcasts, SiGooglepodcasts } from "react-icons/si";

import "./index.css";

class PodCasts extends Component {
  constructor(props) {
    super(props);
    this.headingRefs = Array.from({ length: 3 }, () => React.createRef());
    this.intersectionObserver = null;
  }

  componentDidMount() {
    this.intersectionObserver = new IntersectionObserver(
      this.handleIntersection,
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    // Iterate over the array of refs and observe each heading
    this.headingRefs.forEach((ref) => {
      if (ref.current) {
        this.intersectionObserver.observe(ref.current);
      }
    });
  }

  componentWillUnmount() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-animation");
      } else {
        entry.target.classList.remove("fade-in-animation");
      }
    });
  };

  render() {
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
              Make Me Care About. With Jen Hatmaker
            </h1>
            <p className="font32-podcasts">
              There are so many things clamoring for our attention, and it’s
              hard to distill which issues are important…or why we should care.
              In partnership with The Bill & Melinda Gates Foundation, Make Me
              Care About... explores topics that have deep importance and impact
              in the world.
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
            <h1 className="font48-podcasts" ref={this.headingRefs[0]}>
              Millions of podcasts on topics for everyone.
            </h1>
            <h1 className="font48-podcasts" ref={this.headingRefs[1]}>
              Seamless listening across all your Apple devices.
            </h1>
            <h1 className="font48-podcasts" ref={this.headingRefs[2]}>
              Powerful playback controls to customise your listening.
            </h1>
          </div>
          <div className="like-container">
            <div className="like-left-cont">
              <h1 className="font48-left-podcasts">Personalized Discovery</h1>
              <p className="font24-podcasts">
                With personalized recommendations based on what you already
                listen to, you’ll get more shows catering to your tastes than
                ever before.
              </p>
            </div>
            <div className="like-right-cont">
              <p className="font24-podcasts space-blw">You might like</p>
              <div className="like-right-img-cont">
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708787838/Rectangle_1812_1_dhzqgy.png"
                  className="like-img"
                />
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708787838/Rectangle_1812_1_dhzqgy.png"
                  className="like-img"
                />
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1708787838/Rectangle_1812_1_dhzqgy.png"
                  className="like-img"
                />
              </div>
            </div>
          </div>
          <div className="lower-podcasts-cont">
            <h1 className="font40-podcasts">Working with Apple Podcasts.</h1>
            <p className="font24-podcasts">
              Stay up to date on the latest news, features, and best practices
              that help you create your own podcast.
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
}

export default PodCasts;
