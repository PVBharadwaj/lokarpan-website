import { Component } from "react";
import "./index.css";

class KithLeadership extends Component {
  render() {
    return (
      <div className="kith-leadership-container">
        <div className="kith-leadership-upper-section">
          <div>
            <h1>Leadership</h1>
            <p>
              At Lokarpan, we believe that leadership is not just about holding
              a title; it's about inspiring positive change and fostering growth
              within our community. We are excited to share the various
              leadership opportunities available and the qualities that define
              our leaders.
            </p>
          </div>
          <img src="https://res.cloudinary.com/digbzwlfx/image/upload/v1707978452/Rectangle_1809_ke4omy.png" />
        </div>
        <ul className="kith-leadership-list">
          <li>
            <b> Executive Leadership Team:</b> Guide the strategic direction of
            Lokarpan and oversee organizational initiatives.
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
        <div className="img-contain">
          {" "}
          <img
            className="main-img"
            src="https://www.webii.net/blog/wp-content/uploads/2019/12/making-websites-human-collage-1.jpg"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default KithLeadership;
