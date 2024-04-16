import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Fellowship.css";

const Fellowship = () => {
  return (
    <>
      <Navbar />
      <div className="fellowship-nav">
        <h1>Fellowship</h1>
      </div>
      <div className="fellowship-top">
        <h1>
          At Lokarpan, we firmly believe that the best solutions arise from
          those who intimately understand the challenges at hand
        </h1>
      </div>
      <div className="fellowship-page">
        <div className="second-div">
          <div className="sub-div">
            <img
              className="fellow-img"
              src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708613081/DSC03865_1_qx9uvp.png"
              alt="img1"
            />
            <h3 className="impact-title">We look for big ideas.</h3>
            <p className="fellow-data">
              By joining Lokarpan Fellows, you become part of a community-driven
              initiative where your insights, experiences, and ideas are not
              just valued but actively sought after. Whether you're working in a
              classroom, collaborating with our teams, or engaging directly with
              communities, your voice matters.
            </p>
          </div>
          <div className="sub-div">
            <img
              className="fellow-img"
              src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708613080/cannon_040_1_skwlle.png"
              alt="img2"
            />
            <h3 className="impact-title">Our Approach is Community Centric</h3>
            <p className="fellow-data">
              We believe that true solutions emerge when we listen closely to
              the voices of the communities we serve. By engaging directly with
              those most affected by social challenges, we gain valuable
              insights into their needs and aspirations. Together, we co-create
              innovative initiatives and programs that have a meaningful impact
              and pave the way for a more equitable society. engaging directly
              with communities, your voice matters.
            </p>
          </div>
        </div>
        <div className="third-div">
          <h3 className="impact-head">ACCLERATING IMPACT</h3>
          <h2 className="impact-title">
            We provide support through a combination of funding, innovation and
            technical expertise.
          </h2>
          <div className="impact-div">
            <img
              className="impact-img"
              src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708614197/DSC03458_1_tjuemh.png"
              alt="img3"
            />
            <img
              className="impact-img"
              src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708614186/DSC06753_1_yrt9xp.png"
              alt="img4"
            />
            <img
              className="impact-img"
              src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708614181/BNF_visited_at_Community_level_during_VHND_1_ogldwj.png"
              alt="img5"
            />
          </div>
        </div>
        <div className="fourth-div">
          <h3 className="impact-title">Who You’ll Work with</h3>
          <p className="fourth-div-data fellow-data">
            You'll join one of our locations on site or opt for working
            remotely. Fellows join our technical and research projects from
            around the world to work in teams and directly with our
            beneficiaries. When you join Lokarpan as a Fellow, you are joining
            an organisation that will challenge you and invest heavily in your
            professional development. In this role you will have the opportunity
            to work in teams and help the most vulnerable – across a wide range
            of initiatives – solving some of their most difficult problems. You
            will also work with a diverse range of experts in the organisation,
            from researchers to software and app designers.
          </p>
        </div>
      </div>

      <div className="opp">
        <h3 className="opp-head fellow-data">What You’ll Do</h3>
        <p className="opp-data impact-title">
          As a Lokarpan Fellow, you'll be an integral part of a team of
          passionate individuals, actively engaged in our mission to transform
          education and empower rural communities.
        </p>
        <p className="opp-data impact-title">
          Your role will involve formulating innovative solutions to drive
          impactful change. You'll have the opportunity to develop and present
          recommendations to our partner schools and communities, working
          closely with our dedicated team members on ground. Throughout your
          journey, you'll receive exceptional training and mentoring sessions
          from experienced colleagues and partners.
        </p>
        <p className="opp-data impact-title">
          At Lokarpan, we believe in broadening your skills and experiences.
          While you'll contribute your unique talents and insights, you'll also
          have the chance to learn and grow in a diverse and dynamic
          environment. Whether you're new to the field or an experienced
          professional, joining our Fellowship Program means embarking on a
          journey of discovery and impact.
        </p>

        <Link to="/">
          <button className="fell-apply-btn">Apply</button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Fellowship;
