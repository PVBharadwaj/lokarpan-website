import { Component } from "react";
import KithNavbar from "../Navbar/KithNavbar/index";
import KithInfoSubNavbar from "../Navbar/KithInfoSubNavbar/index";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import KithFooter from "../KithFooter/index";
import "./index.css";
import { Link } from "react-router-dom";

class Employment extends Component {
  state = { current: "administration" };

  onClickFaculty = () => {
    this.setState({ current: "faculty" });
  };

  onClickFellowShip = () => {
    this.setState({ current: "fellowship" });
  };

  onClickAdministration = () => {
    this.setState({ current: "administration" });
  };
  render() {
    const { current } = this.state;

    return (
      <>
        <KithNavbar />
        <KithInfoSubNavbar />
        <div className="kith-emp-cont">
          <div className="emp-upper-section">
            <h1 className="emp-upper-section-h1">
            Making an impact that matters
            </h1>
            <p className="emp-upper-section-p">
            Here at Kith, we are continuously evolving how we work and how we look at marketplace challenges so we can continue to deliver measurable, sustainable results for our educators, students, parents and our communities.
            </p>
          </div>

          <div className="app-page">
        <div className="app-div">
        {/* app-title title2, application-para1 - used in approach and kith/life-at-school/campus-and-culture */}
          <h1 className="app-title title2">
          Interested in working for us?
          </h1>
          {/* className="application-para1"  -- used in approach -> index.js */}
          <p className="application-para1">
            
          Are you ready to apply your knowledge and background to exciting new challenges? From learning to leadership, this is your chance to take your career to the next level. Search and apply for a job today.  To further narrow your results, use the feature below to explore our opportunities.
          </p>
            
        </div>
      </div>


          <div className="emp-emp-seg-section">
            <div className="emp-seg-btn-section">
              <button
                onClick={this.onClickAdministration}
                className={`emp-seg-btn ${
                  current === "administration" ? "emp-active" : ""
                }`}
              >
                Administration
              </button>
              <button
                onClick={this.onClickFaculty}
                className={`emp-seg-btn ${
                  current === "faculty" ? "emp-active" : ""
                }`}
              >
                Faculty
              </button>
              <button
                onClick={this.onClickFellowShip}
                className={`emp-seg-btn ${
                  current === "fellowship" ? "emp-active" : ""
                }`}
              >
                Fellowship
              </button>
            </div>
            {current === "administration" && (
              <div className="emp-administration-section">
                <h1 className="emp-admin-h1">Why Kith?</h1>
                <p className="emp-admin-p">
                Kith is a special place inclusive of diverse, energetic, and talented people who are driven to grow and succeed. By working here, you join a vibrant community that advances Kith’s world-changing mission in meaningful ways, inspires innovation and collaboration, and builds skills and expertise.
                </p>

                {/* <ul className="emp-admin-ul">
                  <li className="emp-admin-li">View all job opportunities,</li>
                  <li className="emp-admin-li">
                    Search on specific criteria to find jobs that interest you,{" "}
                  </li>
                  <li className="emp-admin-li">
                    Set up a search agent that will notify you when positions
                    are posted that match your qualifications,{" "}
                  </li>
                  <li className="emp-admin-li">
                    Create a personal profile to gain visibility with Human
                    Resources professionals and recruiters across every School,
                  </li>
                  <li className="emp-admin-li">
                    Unit and Department at Harvard, without having to apply for
                    a specific job.
                  </li>
                </ul>
                <h1 className="emp-admin-h1">
                  Administrative/Staff Jobs - External Candidates
                </h1> */}
                <p className="emp-admin-p">
                We offer a wide range of exciting and challenging job opportunities that support our world-class academic environment. We invite you to explore the many reasons to work for Kith:
                </p>

                {/* <h1 className="emp-admin-h1 emp-space-above">
                  Administrative/Staff Jobs - Internal Candidates
                </h1> */}
                <p className="emp-admin-p">
                Support our inspiring mission. Here, we are committed to educating leaders and advancing young minds that make a difference in the world.
                </p>
                {/* <h1 className="emp-admin-h1 emp-space-above">
                  Faculty and Other Academic Positions
                </h1> */}
                <p className="emp-admin-p">
                Meet amazing people. You have the opportunity to work with incredible people -- among them, world-renowned researchers, thought leaders, innovators, and problem solvers.
                </p>
                <p className="emp-admin-p">
                Receive excellent rewards. Competitive compensation is just the beginning. From health care and unmatched paid time off to an unbeatable package of perks and access to our facilities, at Kith, you’ll enjoy benefits that are on par with the most prestigious institutions in the region.
                </p>
                <p className="emp-admin-p">
                Enjoy our beautiful campus. Our 6-acre campus ranges from the historic scenery to cutting-edge research and academic buildings designed by leading architects. Conveniently located near public transportation along with a traditional bazaar and entertainment, our campus provides a stunning backdrop for all that happens here at the institute.
                </p>
                <p className="emp-admin-p">
                Take advantage of unparalleled cultural opportunities. Get your culture fix at Kith’s Theater, our world-class Art and Media Labs, and on-campus musical events and virtual lectures.
                </p>
                <p className="emp-admin-p">
                Advance your education. Here, lifelong learning is encouraged. Take a course through our Center for Excellence, attend the Kith Extension School, or have your higher education subsidised by Kith.
                </p>
              </div>
            )}
            {current === "faculty" && (
              <div className="emp-administration-section">
                <h1 className="emp-admin-h1">Contingent Staffing</h1>
                <p className="emp-admin-p">
                Working on assignment at Kith in a temporary (also known as contingent) role is a great way to get to know the Institute and gain valuable professional experience. We welcome any and all to express interest in roles of this nature, including former  employees and retirees. New contingent work opportunities arise frequently.
                </p>

                {/* <ul className="emp-admin-ul">
                  <li className="emp-admin-li">View all job opportunities,</li>
                  <li className="emp-admin-li">
                    Search on specific criteria to find jobs that interest you,{" "}
                  </li>
                  <li className="emp-admin-li">
                    Set up a search agent that will notify you when positions
                    are posted that match your qualifications,{" "}
                  </li>
                  <li className="emp-admin-li">
                    Create a personal profile to gain visibility with Human
                    Resources professionals and recruiters across every School,
                  </li>
                  <li className="emp-admin-li">
                    Unit and Department at Harvard, without having to apply for
                    a specific job.
                  </li>
                </ul>
                <h1 className="emp-admin-h1">
                  Administrative/Staff Jobs - External Candidates
                </h1>
                <p className="emp-admin-p">
                  If you are an external candidate, click here or on the
                  "Administrative/Staff Jobs - External Candidates" button above
                  to see our job listings.
                </p>

                <h1 className="emp-admin-h1 emp-space-above">
                  Administrative/Staff Jobs - Internal Candidates
                </h1>
                <p className="emp-admin-p">
                  If you are an external candidate, click here or on the
                  "Administrative/Staff Jobs - External Candidates" button above
                  to see our job listings.
                </p>
                <h1 className="emp-admin-h1 emp-space-above">
                  Faculty and Other Academic Positions
                </h1>
                <p className="emp-admin-p">
                  Hiring for faculty positions, post-doctoral fellowships, and
                  other academic appointments at Harvard is typically conducted
                  by academic deans and department chairs, and administered by
                  offices for academic or faculty affairs at each school.
                  Faculty and academic positions are posted at
                  academicpositions.harvard.edu, or you can click the "Faculty
                  and Other Academic Positions" button above to access the
                  related job listings.
                </p> */}
              </div>
            )}
            {current === "fellowship" && (
              <div className="emp-administration-section">
                <h1 className="emp-admin-h1">Fellows</h1>
                <p className="emp-admin-p">
                Fellows join our technical and research projects from around the world to work in teams and directly with our beneficiaries. When you join Kith as a Fellow, you are joining an organisation that will challenge you and invest heavily in your professional development. In this role you will have the opportunity to help the most vulnerable – across a wide range of initiatives – solving some of their most difficult problems. To learn more, follow this link below. 
                </p>

                {/* <ul className="emp-admin-ul">
                  <li className="emp-admin-li">View all job opportunities,</li>
                  <li className="emp-admin-li">
                    Search on specific criteria to find jobs that interest you,{" "}
                  </li>
                  <li className="emp-admin-li">
                    Set up a search agent that will notify you when positions
                    are posted that match your qualifications,{" "}
                  </li>
                  <li className="emp-admin-li">
                    Create a personal profile to gain visibility with Human
                    Resources professionals and recruiters across every School,
                  </li>
                  <li className="emp-admin-li">
                    Unit and Department at Harvard, without having to apply for
                    a specific job.
                  </li>
                </ul>
                <h1 className="emp-admin-h1">
                  Administrative/Staff Jobs - External Candidates
                </h1>
                <p className="emp-admin-p">
                  If you are an external candidate, click here or on the
                  "Administrative/Staff Jobs - External Candidates" button above
                  to see our job listings.
                </p>

                <h1 className="emp-admin-h1 emp-space-above">
                  Administrative/Staff Jobs - Internal Candidates
                </h1>
                <p className="emp-admin-p">
                  If you are an external candidate, click here or on the
                  "Administrative/Staff Jobs - External Candidates" button above
                  to see our job listings.
                </p>
                <h1 className="emp-admin-h1 emp-space-above">
                  Faculty and Other Academic Positions
                </h1>
                <p className="emp-admin-p">
                  Hiring for faculty positions, post-doctoral fellowships, and
                  other academic appointments at Harvard is typically conducted
                  by academic deans and department chairs, and administered by
                  offices for academic or faculty affairs at each school.
                  Faculty and academic positions are posted at
                  academicpositions.harvard.edu, or you can click the "Faculty
                  and Other Academic Positions" button above to access the
                  related job listings.
                </p> */}
              </div>
            )}
          </div>
          <div className="emp-emp-last-sec">
            {/* <h1 className="emp-admin-h1">Join Us</h1> */}
          

              <Link
              to={"/fellowship"}
                className="give-pop-up-button"
                style={{ cursor: "pointer", textDecoration: "none"}}
              >
                Fellowship 
                {/* <AddCircleOutlineIcon style={{ verticalAlign: 'middle', marginLeft: '10px' }} /> */}
                
              </Link>

              <p className="emp-last-sec-p">
            Search and apply for a job today 
            </p>


              <a href="https://www.linkedin.com/company/lokarpan/mycompany/" 
                className="give-pop-up-button"
                style={{ cursor: "pointer", textDecoration: "none"}}
                target="_blank">
                Apply 
              </a>

          </div>
        </div>
        <KithFooter />
      </>
    );
  }
}

export default Employment;
