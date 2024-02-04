import { Component } from "react";
import EducationSubNav from "../Navbar/EducationSubNav";
import { FaSpotify, FaYoutube } from "react-icons/fa";

import { SiApplepodcasts, SiGooglepodcasts } from "react-icons/si";

import "./index.css";

class PodCasts extends Component {
  render() {
    return (
      <>
        <EducationSubNav />

        <div className="podcasts-container">
          <div className="podcasts-upper-section">
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1705912565/Group_445_sfzg1n.svg"
              className="podcasts-img"
            />
            <h1 className="font64">Make Me Care About. With Jen Hatmaker</h1>
            <p className="font32">
              There are so many things clamoring for our attention, and it’s
              hard to distill which issues are important…or why we should care.
              In partnership with The Bill & Melinda Gates Foundation, Make Me
              Care About... explores topics that have deep importance and impact
              in the world.
            </p>
            <p className="font25">Subscribe on</p>
            <div className="podcasts-icon-cont">
              <img src="https://res.cloudinary.com/digbzwlfx/image/upload/v1705863902/Group_1616_osia6s.svg" />
              <img src="https://res.cloudinary.com/digbzwlfx/image/upload/v1705863924/Vector_1_iundj6.svg" />
              <img src="https://res.cloudinary.com/digbzwlfx/image/upload/v1705863983/Capa_1_irtwa4.svg" />
              <img src="https://res.cloudinary.com/digbzwlfx/image/upload/v1705863949/Google_Podcasts_dadavu.svg" />
            </div>
          </div>
          <div className="podcast">
            <h1 className="font48">
              Millions of podcasts on topics for everyone.
            </h1>
            <h1 className="font48">
              Seamless listening across all your Apple devices.
            </h1>
            <h1 className="font48">
              Powerful playback controls to customise your listening.
            </h1>
          </div>
          <div className="like-container">
            <div className="like-left-cont">
              <h1 className="font48-left">Personalized Discovery</h1>
              <p className="font24">
                With personalized recommendations based on what you already
                listen to, you’ll get more shows catering to your tastes than
                ever before.
              </p>
            </div>
            <div className="like-right-cont">
              <p className="font24">You might like</p>
              <div className="like-right-img-cont">
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                  className="like-img"
                />
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                  className="like-img"
                />
                <img
                  src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704824773/image_183_nayqzx.png"
                  className="like-img"
                />
              </div>
            </div>
          </div>
          <div className="lower-podcasts-cont">
            <h1 className="font40">Working with Apple Podcasts.</h1>
            <p className="font24-left">
              Stay up to date on the latest news, features, and best practices
              that help you create your own podcast.
            </p>
            <div className="podcasts-icon-cont">
              <FaSpotify style={{ fontSize: "50px" }} />
              <FaYoutube style={{ fontSize: "50px" }} />
              <SiApplepodcasts style={{ fontSize: "50px" }} />
              <SiGooglepodcasts style={{ fontSize: "50px" }} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PodCasts;
