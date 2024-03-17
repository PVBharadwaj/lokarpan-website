import { Component } from "react";
import KithSearchBar from "../KithSearchBar/index";
import KithNavbar from "../Navbar/KithNavbar/index";
import KithInfoSubNavbar from "../Navbar/KithInfoSubNavbar";
import KithFooter from "../KithFooter/index";
import "./index.css";

const imagesList = [
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708272579/Rectangle_1835_boo8we.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708272568/Rectangle_1833_a34cuy.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708272555/Rectangle_1834_yqau7k.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708272579/Rectangle_1835_boo8we.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708272568/Rectangle_1833_a34cuy.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708272555/Rectangle_1834_yqau7k.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708272579/Rectangle_1835_boo8we.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708272568/Rectangle_1833_a34cuy.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708272555/Rectangle_1834_yqau7k.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708272579/Rectangle_1835_boo8we.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708272568/Rectangle_1833_a34cuy.png",
  "https://res.cloudinary.com/digbzwlfx/image/upload/v1708272555/Rectangle_1834_yqau7k.png",
];

class KithLeadership extends Component {
  render() {
    return (
      <>
        <KithNavbar />
        <KithInfoSubNavbar />
        <div className="kith-leadership-container">
          <div className="kith-leadership-upper-section">
            <div>
              <h1>Leadership</h1>
              <p>
                At Lokarpan, we believe that leadership is not just about
                holding a title; it's about inspiring positive change and
                fostering growth within our community. We are excited to share
                the various leadership opportunities available and the qualities
                that define our leaders.
              </p>
            </div>
            <img src="https://res.cloudinary.com/digbzwlfx/image/upload/v1707978452/Rectangle_1809_ke4omy.png" />
          </div>
          <div className="mobile-kith-leadership-upper-section">
            <h1>Leadership</h1>
            <p>
              At Lokarpan, we believe that leadership is not just about holding
              a title; it's about inspiring positive change and fostering growth
              within our community. We are excited to share the various
              leadership opportunities available and the qualities that define
              our leaders.
            </p>
          </div>
          <ul className="kith-leadership-list">
            <li>
              <b> Executive Leadership Team:</b> Guide the strategic direction
              of Lokarpan and oversee organizational initiatives.
            </li>
            <li>
              <b> Committee Leadership: </b> Lead one of our dynamic committees,
              shaping the path for program development, community outreach, and
              innovation.
            </li>
            <li>
              <b> Club Leadership:</b> Inspire and guide members as you lead a
              club dedicated to environmental stewardship, youth empowerment, or
              art for social change.
            </li>
          </ul>
          <div className="kith-leadership-images-container">
            <h1 className="kith-font48">Board</h1>
            <KithSearchBar />
            <ul className="images-list">
              {imagesList.map((each) => (
                <li>
                  <img src={each} className="each-list-img" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <KithFooter />
      </>
    );
  }
}

export default KithLeadership;
