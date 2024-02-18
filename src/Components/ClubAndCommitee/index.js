import { Component } from "react";
import ReactPlayer from "react-player";
import "./index.css";

class ClubAndCommitee extends Component {
  render() {
    return (
      <div className="club-commitee-container">
        <div className="club-commitee-upper-section">
          <a href="#"> Discover what it’s like to work here</a>
          <h1>
            Welcome to a place where passion meets purpose, and where every
            individual is a valued contributor to our shared vision. Lokarpan's
            culture is one of inclusivity, collaboration, and a deep commitment
            to making a positive impact.
          </h1>
        </div>
        <div className="club-commitee-club-section">
          <h1>Our Club</h1>
          <p>
            While Lokarpan may not have a physical campus in the traditional
            sense, our virtual space is a dynamic hub of activity. Engage with
            fellow members through our online forums, participate in virtual
            events, and collaborate on projects that align with your passions.
            Our "campus" is wherever you are, allowing you to connect with
            like-minded individuals from around the world.
          </p>
        </div>
        <div className="club-commitee-culture-section">
          <img src="https://res.cloudinary.com/digbzwlfx/image/upload/v1707966843/Rectangle_1766_1_ewa8o6.png" />
          <div>
            <h1>Our culture</h1>
            <p>
              At Lokarpan, we celebrate diversity and believe that it is our
              differences that make us stronger. Our community is built on
              mutual respect, empathy, and a shared dedication to creating
              positive change. Whether you're a seasoned member or a newcomer,
              you'll find a welcoming atmosphere where your ideas and
              perspectives are not only heard but valued.
            </p>
            <ul>
              <li>Inspiring discussions and thought-provoking events.</li>
              <li> Opportunities to collaborate on impactful projects.</li>
              <li>
                Networking with professionals, experts, and fellow
                change-makers.
              </li>
              <li> A supportive and encouraging community.</li>
            </ul>
          </div>
        </div>
        <div className="club-commitee-videos-section">
          <div className="club-commitee-each-video-item">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              controls={true}
              width="100%"
              height="60%"
            />
            <p className="vedio-below-text">
              What is one myth you would like to bust about McKinsey?
            </p>
          </div>
          <div className="club-commitee-each-video-item">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              controls={true}
              width="100%"
              height="60%"
              className="video-space-above"
            />
            <p className="vedio-below-text">
              What is one myth you would like to bust about McKinsey?
            </p>
          </div>
          <div className="club-commitee-each-video-item">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              controls={true}
              width="100%"
              height="60%"
            />
            <p className="vedio-below-text">
              What is one myth you would like to bust about McKinsey?
            </p>
          </div>
          <div className="club-commitee-each-video-item">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              controls={true}
              width="100%"
              height="60%"
              className="video-space-above"
            />
            <p className="vedio-below-text">
              What is one myth you would like to bust about McKinsey?
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ClubAndCommitee;
