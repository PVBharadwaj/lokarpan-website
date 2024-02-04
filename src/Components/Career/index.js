import { Component } from "react";
import { FaLinkedin } from "react-icons/fa6";
import SubNavbar from "../Navbar/SubNavbar";
import "./index.css";

class Career extends Component {
  render() {
    return (
      <>
        <SubNavbar />
        <div className="career-container">
          <div className="career-top-container">
            <h1 className="head2">Join Us!</h1>
            <h3 className="head1">You’ve come to the right place</h3>
            <p className="para1">
              Are you seeking an exciting role that will challenge and inspire
              you? Are you looking for guidance on our interview process? Or do
              you want to learn more about what consulting is and what it’s like
              working at Lokarpan? Whatever the reason, you’ve come to the right
              place.
            </p>
            <div className="linked-in-section">
              <FaLinkedin style={{ fontSize: "28px" }} />
              <p className="para2">Follow us on LinkedIn</p>
            </div>
          </div>
          <div className="career-each-container">
            <div className="career-content-section content-left">
              <h1 className="head3">
                What does it take to create sustainable and inclusive growth?
              </h1>
              <p className="career-para">
                It takes a lot. Dedication and passion. Boldness and curiosity.
                Hard skills and soft skills. Some you are born with, and others
                can be learned through experience or taught. But one thing is
                certain: Creating impact takes exceptional people who are driven
                and eager to learn.
              </p>
              <a href="#">Read about our culter</a>
            </div>
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704897435/image_190_ssmaol.png"
              alt="read-img"
              className="career-img"
            />
          </div>
          <div className="career-each-container">
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704897449/Rectangle_1764_nfpppj.png"
              alt="learn-img"
              className="career-img"
            />
            <div className="career-content-section content-right">
              <h1 className="head3">Exceptional can come from anywhere</h1>
              <p className="career-para">
                At McKinsey, we hire people, not degrees. There is no set
                definition for what exceptional looks like, and we know it can
                come from anywhere. We believe in your potential, regardless of
                your pedigree.
              </p>
              <a href="#">Learn more about our interviews</a>
            </div>
          </div>
          <div className="career-each-container">
            <div className="career-content-section content-left">
              <h1 className="head3">Our Leadership</h1>
              <p className="career-para">
                Impact at the firm looks different every day, and that vision is
                changing every year along with the world around us. One day you
                could design a product for your client, and the next you could
                create a five-year growth strategy. The variety of work is
                endless.
              </p>
              <a href="#">See more about our Leadership</a>
            </div>
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704897440/image_189_dyccic.png"
              alt="leadership-img"
              className="career-img"
            />
          </div>
          <div className="career-each-container">
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1704897435/image_190_ssmaol.png"
              alt="apply-img"
              className="career-img"
            />
            <div className="career-content-section content-right">
              <h1 className="head3">
                We know you have questions...and we really like the tough ones
              </h1>
              <p className="career-para">
                We asked some McKinsey colleagues to get real about what it’s
                like working here. Take a moment to listen to what they have to
                say – you might be surprised. We are a firm made up of people
                who love sharing our authentic stories, and answering tough
                questions. If you meet one of us, try us out by asking!
              </p>
              <a href="#">Ready to Apply ? Search our open Roles</a>
            </div>
          </div>
          <div className="next-step-section">
            <h1 className="head3">Working At Lokarpan</h1>
            <p>
              See our areas of work, worldwide Locations and opportunities for
              students
            </p>
            <button type="button" className="career-apply-btn">
              Apply
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Career;
